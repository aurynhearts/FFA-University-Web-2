(() => {
  "use strict";

  const {
    BACKGROUNDS,
    OUTFIT_MODES,
    ACT_MODES_BY_COUNT,
    ACT_OPTIONS_BY_MODE
  } = window.FUGData;

  const { generate } = window.FUGGenerator;
  const {
    appState,
    CHAR_COUNT_OPTIONS,
    LOCK_BACKGROUND,
    LOCK_DEFS,
    RANDOM_SENTINEL,
    getCharCountFromLabel,
    syncCharacterCount
  } = window.FUGState;

  const dom = {};
  let nsfwDraft = null;
  let nsfwRuntime = null;

  function cacheDom() {
    dom.charCountSelect = document.querySelector("#character-count-select");
    dom.backgroundSelect = document.querySelector("#background-select");
    dom.characterLockContainer = document.querySelector("#character-lock-container");
    dom.sheetContainer = document.querySelector("#sheet-container");
    dom.basePromptContainer = document.querySelector("#base-prompt-container");
    dom.characterPromptContainer = document.querySelector("#character-prompt-container");
    dom.generateButton = document.querySelector("#generate-button");
    dom.saveButton = document.querySelector("#save-button");
    dom.nsfwButton = document.querySelector("#nsfw-button");
    dom.nsfwModal = document.querySelector("#nsfw-modal");
    dom.nsfwModalContent = document.querySelector("#nsfw-modal-content");
    dom.nsfwSaveButton = document.querySelector("#nsfw-save-button");
    dom.nsfwCancelButton = document.querySelector("#nsfw-cancel-button");
    dom.nsfwCloseButton = document.querySelector("#nsfw-close-button");
  }

  function fillSelect(select, options, selectedValue) {
    select.innerHTML = "";
    for (const option of options) {
      const element = document.createElement("option");
      element.value = option;
      element.textContent = option;
      if (option === selectedValue) {
        element.selected = true;
      }
      select.appendChild(element);
    }
  }

  function makeField(label, options, value, onChange) {
    const wrapper = document.createElement("label");
    wrapper.className = "field";

    const text = document.createElement("span");
    text.textContent = label;

    const select = document.createElement("select");
    fillSelect(select, options, value);
    select.addEventListener("change", () => onChange(select.value));

    wrapper.append(text, select);
    return wrapper;
  }

  function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function flattenOptionsByMode(optionsByMode) {
    const seen = new Set();
    const flattened = [];
    for (const options of Object.values(optionsByMode || {})) {
      for (const option of options || []) {
        if (!seen.has(option)) {
          seen.add(option);
          flattened.push(option);
        }
      }
    }
    return flattened;
  }

  function normalizeActMode(mode, charCount, fallback = "Random") {
    const modes = ACT_MODES_BY_COUNT[charCount] || ["Random"];
    return modes.includes(mode) ? mode : fallback;
  }

  function normalizeNsfwStateForCount(charCount) {
    syncCharacterCount(charCount);
    appState.base_nsfw_settings.act_mode = normalizeActMode(
      appState.base_nsfw_settings.act_mode || "Normal",
      charCount,
      "Normal"
    );

    for (const settings of appState.nsfw_settings) {
      settings.outfit_mode = OUTFIT_MODES.includes(settings.outfit_mode)
        ? settings.outfit_mode
        : "Normal";
      settings.act_mode = normalizeActMode(settings.act_mode || "Random", charCount, "Random");
      settings.act_options_by_mode = settings.act_options_by_mode || {};
      settings.act_options = flattenOptionsByMode(settings.act_options_by_mode);
    }
  }

  function renderLockControls() {
    dom.characterLockContainer.innerHTML = "";

    for (let index = 0; index < appState.char_count; index += 1) {
      const row = document.createElement("section");
      row.className = "character-lock-row";

      const title = document.createElement("h2");
      title.textContent = `Character ${index + 1} Options`;

      const grid = document.createElement("div");
      grid.className = "lock-grid";

      for (const [label, options, key] of LOCK_DEFS) {
        grid.appendChild(
          makeField(label, options, appState.character_locks[index][key], (value) => {
            appState.character_locks[index][key] = value;
          })
        );
      }

      const buttonRow = document.createElement("div");
      buttonRow.className = "button-row";

      const keepButton = document.createElement("button");
      keepButton.type = "button";
      keepButton.className = "button";
      keepButton.textContent = `Keep Character ${index + 1}`;
      keepButton.addEventListener("click", () => keepCharacterFromResult(index));

      const clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.className = "button button-clear";
      clearButton.textContent = "Clear";
      clearButton.addEventListener("click", () => {
        for (const key of Object.keys(appState.character_locks[index])) {
          appState.character_locks[index][key] = RANDOM_SENTINEL;
        }
        renderLockControls();
      });

      buttonRow.append(keepButton, clearButton);
      row.append(title, grid, buttonRow);
      dom.characterLockContainer.appendChild(row);
    }
  }

  function createOutputPanel(title, copyLabel, content = "") {
    const panel = document.createElement("section");
    panel.className = "output-panel";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const textarea = document.createElement("textarea");
    textarea.readOnly = true;
    textarea.value = content;

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "button";
    copyButton.textContent = copyLabel;
    copyButton.addEventListener("click", async () => {
      if (textarea.value) {
        await navigator.clipboard.writeText(textarea.value);
      }
    });

    panel.append(heading, textarea, copyButton);
    return panel;
  }

  function renderOutputPanels() {
    dom.sheetContainer.innerHTML = "";
    dom.basePromptContainer.innerHTML = "";
    dom.characterPromptContainer.innerHTML = "";

    const result = appState.last_result;

    dom.sheetContainer.appendChild(
      createOutputPanel("Character Sheet", "Copy Sheet", result?.character_sheet || "")
    );

    dom.basePromptContainer.appendChild(
      createOutputPanel("Base Prompt", "Copy Base Prompt", result?.base_prompt || "")
    );

    for (let index = 0; index < appState.char_count; index += 1) {
      dom.characterPromptContainer.appendChild(
        createOutputPanel(
          `Character ${index + 1} Prompt`,
          `Copy Character ${index + 1} Prompt`,
          result?.character_prompts?.[index] || ""
        )
      );
    }
  }

  function resolveBackground() {
    if (appState.background && appState.background !== RANDOM_SENTINEL) {
      return appState.background;
    }
    const names = Object.keys(BACKGROUNDS);
    return names[Math.floor(Math.random() * names.length)];
  }

  function onGenerate() {
    const background = resolveBackground();
    appState.last_result = generate(
      appState.char_count,
      background,
      appState.character_locks,
      appState.nsfw_settings,
      appState.base_nsfw_settings
    );
    renderOutputPanels();
  }

  function keepCharacterFromResult(index) {
    const character = appState.last_result?.characters?.[index];
    if (!character) {
      return;
    }

    appState.character_locks[index] = {
      position: character.position,
      type: character.char_type,
      age: character.age,
      department: character.department,
      hair_color: character.hair_color,
      hair_style: character.hair_style,
      eye_color: character.eye_color,
      body_type: character.body_type,
    };

    renderLockControls();
  }

  function onSave() {
    const result = appState.last_result;
    if (!result) {
      return;
    }

    const text = [
      "=== CHARACTER SHEET ===",
      result.character_sheet,
      "",
      "=== BASE PROMPT ===",
      result.base_prompt,
      "",
      ...result.character_prompts.flatMap((prompt, index) => [
        `=== CHARACTER ${index + 1} PROMPT ===`,
        prompt,
        "",
      ]),
    ].join("\n");

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "fantasy_university_output.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  function createInlineOption(kind, name, value, text, checked, onChange) {
    const label = document.createElement("label");
    label.className = "inline-option";

    const input = document.createElement("input");
    input.type = kind;
    input.name = name;
    input.value = value;
    input.checked = checked;
    input.addEventListener("change", () => onChange(input));

    const span = document.createElement("span");
    span.textContent = text;

    label.append(input, span);
    return label;
  }

  function saveCurrentSectionOptions(sectionRuntime) {
    const selectedOptions = Object.entries(sectionRuntime.optionInputs)
      .filter(([, input]) => input.checked)
      .map(([option]) => option);

    sectionRuntime.settings.act_options_by_mode[sectionRuntime.last_mode] = selectedOptions;
    sectionRuntime.settings.act_options = flattenOptionsByMode(sectionRuntime.settings.act_options_by_mode);
  }

  function rebuildActOptionCheckboxes(sectionRuntime) {
    sectionRuntime.optionContainer.innerHTML = "";
    sectionRuntime.optionInputs = {};

    const actMode = sectionRuntime.settings.act_mode;
    if (actMode === "Random") {
      const note = document.createElement("p");
      note.className = "muted-note";
      note.textContent = "Random mode stores no specific checkbox selections.";
      sectionRuntime.optionContainer.appendChild(note);
      return;
    }

    const savedOptions = sectionRuntime.settings.act_options_by_mode[actMode] || [];
    const options = ACT_OPTIONS_BY_MODE[actMode] || [];

    if (!options.length) {
      const note = document.createElement("p");
      note.className = "muted-note";
      note.textContent = "No options defined for this act mode.";
      sectionRuntime.optionContainer.appendChild(note);
      return;
    }

    for (const option of options) {
      const checkboxLabel = createInlineOption(
        "checkbox",
        `${sectionRuntime.name}-option-${option}`,
        option,
        option,
        savedOptions.includes(option),
        (input) => {
          sectionRuntime.optionInputs[option] = input;
          saveCurrentSectionOptions(sectionRuntime);
        }
      );
      const input = checkboxLabel.querySelector("input");
      sectionRuntime.optionInputs[option] = input;
      sectionRuntime.optionContainer.appendChild(checkboxLabel);
    }
  }

  function makeActModeSection({ title, name, settings, charCount, includeOutfit }) {
    const section = document.createElement("section");
    section.className = "nsfw-section";

    const heading = document.createElement("h2");
    heading.textContent = title;
    section.appendChild(heading);

    if (includeOutfit) {
      const outfitField = makeField(
        "Outfit Mode",
        OUTFIT_MODES,
        settings.outfit_mode || "Normal",
        (value) => {
          settings.outfit_mode = value;
        }
      );
      outfitField.classList.add("nsfw-outfit-field");
      section.appendChild(outfitField);
    }

    const actLabel = document.createElement("div");
    actLabel.className = "legend-label";
    actLabel.textContent = "Act Mode";
    section.appendChild(actLabel);

    const radioGrid = document.createElement("div");
    radioGrid.className = "radio-grid";
    section.appendChild(radioGrid);

    const optionContainer = document.createElement("div");
    optionContainer.className = "checkbox-grid";
    section.appendChild(optionContainer);

    const runtime = {
      name,
      settings,
      optionContainer,
      optionInputs: {},
      last_mode: settings.act_mode,
    };

    const actModes = ACT_MODES_BY_COUNT[charCount] || ["Random"];
    settings.act_mode = normalizeActMode(settings.act_mode, charCount, includeOutfit ? "Random" : "Normal");
    runtime.last_mode = settings.act_mode;

    for (const mode of actModes) {
      radioGrid.appendChild(
        createInlineOption(
          "radio",
          `${name}-act-mode`,
          mode,
          mode,
          mode === settings.act_mode,
          (input) => {
            if (!input.checked) {
              return;
            }
            saveCurrentSectionOptions(runtime);
            settings.act_mode = input.value;
            runtime.last_mode = input.value;
            rebuildActOptionCheckboxes(runtime);
          }
        )
      );
    }

    rebuildActOptionCheckboxes(runtime);

    return { section, runtime };
  }

  function openNsfwModal() {
    normalizeNsfwStateForCount(appState.char_count);

    nsfwDraft = {
      base_nsfw_settings: cloneJson(appState.base_nsfw_settings),
      nsfw_settings: cloneJson(appState.nsfw_settings),
    };

    nsfwRuntime = {
      base: null,
      characters: [],
    };

    dom.nsfwModalContent.innerHTML = "";

    const base = makeActModeSection({
      title: "General / Base Prompt Acts",
      name: "base",
      settings: nsfwDraft.base_nsfw_settings,
      charCount: appState.char_count,
      includeOutfit: false,
    });
    nsfwRuntime.base = base.runtime;
    dom.nsfwModalContent.appendChild(base.section);

    for (let index = 0; index < appState.char_count; index += 1) {
      const characterSection = makeActModeSection({
        title: `Character ${index + 1}`,
        name: `character-${index}`,
        settings: nsfwDraft.nsfw_settings[index],
        charCount: appState.char_count,
        includeOutfit: true,
      });
      nsfwRuntime.characters.push(characterSection.runtime);
      dom.nsfwModalContent.appendChild(characterSection.section);
    }

    dom.nsfwModal.showModal();
  }

  function saveNsfwModal() {
    if (!nsfwDraft || !nsfwRuntime) {
      dom.nsfwModal.close();
      return;
    }

    saveCurrentSectionOptions(nsfwRuntime.base);
    for (const runtime of nsfwRuntime.characters) {
      saveCurrentSectionOptions(runtime);
    }

    appState.base_nsfw_settings = nsfwDraft.base_nsfw_settings;
    appState.nsfw_settings = nsfwDraft.nsfw_settings;

    nsfwDraft = null;
    nsfwRuntime = null;
    dom.nsfwModal.close();
  }

  function cancelNsfwModal() {
    nsfwDraft = null;
    nsfwRuntime = null;
    dom.nsfwModal.close();
  }

  function bindEvents() {
    dom.charCountSelect.addEventListener("change", () => {
      normalizeNsfwStateForCount(getCharCountFromLabel(dom.charCountSelect.value));
      renderLockControls();
      renderOutputPanels();
    });

    dom.backgroundSelect.addEventListener("change", () => {
      appState.background = dom.backgroundSelect.value;
    });

    dom.generateButton.addEventListener("click", onGenerate);
    dom.saveButton.addEventListener("click", onSave);
    dom.nsfwButton.addEventListener("click", openNsfwModal);
    dom.nsfwSaveButton.addEventListener("click", saveNsfwModal);
    dom.nsfwCancelButton.addEventListener("click", cancelNsfwModal);
    dom.nsfwCloseButton.addEventListener("click", cancelNsfwModal);

    dom.nsfwModal.addEventListener("cancel", (event) => {
      event.preventDefault();
      cancelNsfwModal();
    });

    dom.nsfwModal.addEventListener("click", (event) => {
      if (event.target === dom.nsfwModal) {
        cancelNsfwModal();
      }
    });
  }

  function init() {
    cacheDom();
    fillSelect(dom.charCountSelect, CHAR_COUNT_OPTIONS, CHAR_COUNT_OPTIONS[0]);
    fillSelect(dom.backgroundSelect, LOCK_BACKGROUND, appState.background);
    normalizeNsfwStateForCount(appState.char_count);
    renderLockControls();
    renderOutputPanels();
    bindEvents();
  }

  init();

})();
