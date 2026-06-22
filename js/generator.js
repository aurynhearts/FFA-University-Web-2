(() => {
  "use strict";

  const {
    ACT_OPTION_TAGS,
    AGE_TAGS,
    ARTIST_TAGS,
    BACKGROUNDS,
    COPYRIGHT_TAGS,
    ACCESSORIES_BY_DEPARTMENT,
    BODY_TYPES,
    DEPARTMENTS,
    EXPRESSIONS,
    EYE_COLORS,
    HAIR_COLORS,
    HAIR_STYLES,
    NSFW_OUTFIT_TAGS,
    OUTFIT_BY_POSITION,
    POSITIONS,
    POSES,
    PROMPT_LIMITS,
    QUALITY_TAGS,
    TYPE_APPEARANCE,
    TYPE_BODY_TAGS,
    TYPES
  } = window.FUGData;

  const ADULT_AGE_VALUES = new Set(["Child", "Preteen", "Teen", "Adult", "Elderly", "None"]);

  function isAdultCharacter(character) {
    return ADULT_AGE_VALUES.has(character.age);
  }

  function randomChoice(options) {
    return options[Math.floor(Math.random() * options.length)];
  }

  function randomSample(options, count) {
    const pool = [...options];
    const result = [];
    while (pool.length && result.length < count) {
      const index = Math.floor(Math.random() * pool.length);
      result.push(pool.splice(index, 1)[0]);
    }
    return result;
  }

  function fmtWeight(value) {
    return Number(value).toFixed(1);
  }

  function generate_style_anchors() {
    const anchors = [];

    if (COPYRIGHT_TAGS.length) {
      const ct = randomChoice(COPYRIGHT_TAGS);
      const weight = Math.round((ct.weight_min + Math.random() * (ct.weight_max - ct.weight_min)) * 10) / 10;
      anchors.push(`${fmtWeight(weight)}:: ${ct.tag} ::`);
    }

    if (Math.random() < 0.65) {
      const pool = Math.random() < 0.75 ? ARTIST_TAGS : COPYRIGHT_TAGS;
      if (pool.length) {
        const tag = randomChoice(pool);
        const weight = Math.round((tag.weight_min + Math.random() * (tag.weight_max - tag.weight_min)) * 10) / 10;
        anchors.push(`${fmtWeight(weight)}:: ${tag.tag} ::`);
      }
    }

    return anchors;
  }

  function pick(lockedValue, options) {
    if (lockedValue && lockedValue !== "Random") {
      return lockedValue;
    }
    return randomChoice(options);
  }

  function roll_character(locks = {}) {
    return {
      position: pick(locks.position, POSITIONS),
      char_type: pick(locks.type, TYPES),
      age: pick(locks.age, Object.keys(AGE_TAGS)),
      department: pick(locks.department, DEPARTMENTS),
      hair_color: pick(locks.hair_color, HAIR_COLORS),
      hair_style: pick(locks.hair_style, HAIR_STYLES),
      eye_color: pick(locks.eye_color, EYE_COLORS),
      body_type: pick(locks.body_type, BODY_TYPES),
    };
  }

  function trim_to_limit(tags, limit) {
    return [...tags].sort((a, b) => b.priority - a.priority).slice(0, limit);
  }

  function safeActOptionsForCharacter(character, nsfwSettings) {
    if (!isAdultCharacter(character)) {
      return [];
    }
    return nsfwSettings?.act_options || [];
  }

  function build_character_tags(character, char_count, nsfw_settings = {}) {
    const tags = [];
    const outfit_mode = nsfw_settings.outfit_mode || "Normal";
    const adult = isAdultCharacter(character);
    const effectiveOutfitMode = adult ? outfit_mode : "Normal";

    tags.push({ text: character.hair_color, priority: 75 });
    tags.push({ text: character.hair_style, priority: 70 });
    tags.push({ text: character.eye_color, priority: 70 });
    tags.push({ text: character.body_type, priority: 60 });
    tags.push(...(AGE_TAGS[character.age] || []));
    tags.push(...(TYPE_APPEARANCE[character.char_type] || []));

    if (["Student", "Graduate Student"].includes(character.position)) {
      tags.push({ text: `${character.department.toLowerCase()} student`, priority: 65 });
    } else if (character.position === "Teaching Assistant") {
      tags.push({ text: `${character.department.toLowerCase()} teaching assistant`, priority: 65 });
    } else if (["Professor", "Guest Lecturer", "Research Fellow"].includes(character.position)) {
      tags.push({ text: `${character.department.toLowerCase()} faculty`, priority: 65 });
    } else if (character.position === "Dean") {
      tags.push({ text: "university administrator", priority: 65 });
      tags.push({ text: `${character.department.toLowerCase()} department`, priority: 45 });
    } else if (character.position === "Librarian") {
      tags.push({ text: "academic librarian", priority: 65 });
    } else if (character.position === "Security Guard") {
      tags.push({ text: "campus security", priority: 65 });
    } else if (character.position === "Cafeteria Staff") {
      tags.push({ text: "cafeteria worker", priority: 65 });
    } else if (character.position === "Janitor") {
      tags.push({ text: "campus janitor", priority: 65 });
    } else {
      tags.push({ text: `${character.department.toLowerCase()} department`, priority: 45 });
    }

    if (effectiveOutfitMode === "Normal") {
      const outfitPool = OUTFIT_BY_POSITION[character.position] || [{ text: "casual clothes", priority: 65 }];
      tags.push(...randomSample(outfitPool, Math.min(2, outfitPool.length)));
    } else {
      tags.push(...(NSFW_OUTFIT_TAGS[effectiveOutfitMode] || []));
    }

    if (adult && effectiveOutfitMode === "Nude") {
      tags.push(...(TYPE_BODY_TAGS[character.char_type] || []));
    } else if (adult && effectiveOutfitMode === "Lingerie" && Math.random() < 0.15) {
      tags.push(...(TYPE_BODY_TAGS[character.char_type] || []));
    }

    for (const option of safeActOptionsForCharacter(character, nsfw_settings)) {
      tags.push(...(ACT_OPTION_TAGS[option] || []));
    }

    const deptAccessories = ACCESSORIES_BY_DEPARTMENT[character.department] || [];
    if (deptAccessories.length) {
      tags.push(randomChoice(deptAccessories));
    }

    tags.push(randomChoice(EXPRESSIONS));
    tags.push(randomChoice(POSES));

    const limit = PROMPT_LIMITS[char_count] || 25;
    return trim_to_limit(tags, limit);
  }

  function build_base_tags(background_name) {
    const tags = [...QUALITY_TAGS];
    const background = BACKGROUNDS[background_name] || {};
    tags.push(...(background.tags || []));
    if (background.lighting) {
      tags.push(background.lighting);
    }
    return [...tags].sort((a, b) => b.priority - a.priority);
  }

  function tags_to_prompt(tags) {
    return tags.map((tag) => tag.text).join(", ");
  }

  function format_base_prompt(background_name, anchors, base_nsfw_settings = {}) {
    const baseTags = build_base_tags(background_name);

    for (const option of base_nsfw_settings.act_options || []) {
      baseTags.push(...(ACT_OPTION_TAGS[option] || []));
    }

    const baseTagString = tags_to_prompt(baseTags);
    return anchors?.length ? `${baseTagString}, ${anchors.join(", ")}` : baseTagString;
  }

  function build_character_sheet(characters, background) {
    const lines = [];
    lines.push(`Background  : ${background}`);
    lines.push(`Characters  : ${characters.length}`);
    lines.push("");

    characters.forEach((character, index) => {
      lines.push(`--- Character ${index + 1} ---`);
      lines.push(`  Position   : ${character.position}`);
      lines.push(`  Type       : ${character.char_type}`);
      lines.push(`  Age        : ${character.age}`);
      lines.push(`  Department : ${character.department}`);
      lines.push(`  Hair       : ${character.hair_color}, ${character.hair_style}`);
      lines.push(`  Eyes       : ${character.eye_color}`);
      lines.push(`  Body Type  : ${character.body_type}`);
      lines.push("");
    });

    return lines.join("\n").trimEnd();
  }

  function generate(char_count, background, locks, nsfw_settings = {}, base_nsfw_settings = {}) {
    const characters = Array.isArray(locks)
      ? Array.from({ length: char_count }, (_, index) => roll_character(locks[index] || {}))
      : Array.from({ length: char_count }, () => roll_character(locks || {}));

    const anchors = generate_style_anchors();
    const base_prompt = format_base_prompt(background, anchors, base_nsfw_settings);

    const character_prompts = Array.isArray(nsfw_settings)
      ? characters.map((character, index) => tags_to_prompt(build_character_tags(character, char_count, nsfw_settings[index] || {})))
      : characters.map((character) => tags_to_prompt(build_character_tags(character, char_count, nsfw_settings || {})));

    const character_sheet = build_character_sheet(characters, background);

    return {
      characters,
      character_sheet,
      base_prompt,
      character_prompts,
    };
  }


  window.FUGGenerator = {
    isAdultCharacter,
    generate_style_anchors,
    roll_character,
    build_character_tags,
    build_base_tags,
    tags_to_prompt,
    format_base_prompt,
    build_character_sheet,
    generate
  };

})();