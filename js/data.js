(() => {
  "use strict";

  /**
   * Data definitions for Fantasy University Character Generator.
   * Converted from data.py. Tag objects preserve the Python shape: { text, priority }.
   *
   */

  const QUALITY_TAGS = [
    {
      "text": "masterpiece",
      "priority": 100
    },
    {
      "text": "best quality",
      "priority": 100
    },
    {
      "text": "highly detailed",
      "priority": 90
    },
    {
      "text": "sharp focus",
      "priority": 80
    },
    {
      "text": "very aesthetic",
      "priority": 80
    }
  ];

  const COPYRIGHT_TAGS = [
    {
      "tag": "the coffin of andy and leyley",
      "weight_min": 0.2,
      "weight_max": 0.5
    },
    {
      "tag": "angel flavor",
      "weight_min": 1.1,
      "weight_max": 1.4
    },
    {
      "tag": "alice in wonderland (disney)",
      "weight_min": 0.4,
      "weight_max": 1.0
    },
    {
      "tag": "borderlands (series)",
      "weight_min": 0.5,
      "weight_max": 0.8
    },
    {
      "tag": "adventure time: fionna and cake",
      "weight_min": 0.5,
      "weight_max": 1.0
    },
    {
      "tag": "dandadan",
      "weight_min": 1.1,
      "weight_max": 1.4
    },
    {
      "tag": "howl no ugoku shiro",
      "weight_min": 0.5,
      "weight_max": 1.0
    },
    {
      "tag": "who framed roger rabbit",
      "weight_min": 0.2,
      "weight_max": 0.6
    },
    {
      "tag": "aniplex",
      "weight_min": 0.5,
      "weight_max": 1.0
    },
    {
      "tag": "aion",
      "weight_min": 1.1,
      "weight_max": 1.4
    },
    {
      "tag": "made in abyss",
      "weight_min": 0.5,
      "weight_max": 1.4
    },
    {
      "tag": "battlefield (series)",
      "weight_min": 0.5,
      "weight_max": 1.25
    },
    {
      "tag": "4chan",
      "weight_min": 1.0,
      "weight_max": 1.2
    },
    {
      "tag": "batman: the animated series",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "ace attorney",
      "weight_min": 1.1,
      "weight_max": 1.4
    },
    {
      "tag": "dc animated universe",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "marvel rivals",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "honkai: star rail",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "persona 4",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "ark survival evolved",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "league of legends",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "blue archive",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "gunsmith cats",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "gunsmith cats",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "digimon adventure 02",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "3ldkm",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
    {
      "tag": "the king of fighters '96",
      "weight_min": 0.5,
      "weight_max": 1.5
    },
  ];

  const ARTIST_TAGS = [
    {
      "tag": "alexander dinh",
      "weight_min": 1.0,
      "weight_max": 1.25
    },
    {
      "tag": "rustle",
      "weight_min": 0.3,
      "weight_max": 0.8
    },
    {
      "tag": "raikoart",
      "weight_min": 0.3,
      "weight_max": 1.0
    },
    {
      "tag": "itzah",
      "weight_min": 1.0,
      "weight_max": 1.25
    },
    {
      "tag": "sciamano240",
      "weight_min": 0.3,
      "weight_max": 0.6
    },
    {
      "tag": "stanley lau",
      "weight_min": 0.2,
      "weight_max": 0.8
    },
    {
      "tag": "exlic",
      "weight_min": 0.2,
      "weight_max": 0.6
    }
  ];

  const BACKGROUNDS = {
    "Office": {
      "tags": [
        {
          "text": "office",
          "priority": 80
        },
        {
          "text": "desk",
          "priority": 70
        },
        {
          "text": "indoor",
          "priority": 60
        },
        {
          "text": "bookshelf",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "soft office lighting",
        "priority": 60
      }
    },
    "Professor Office": {
      "tags": [
        {
          "text": "professor's office",
          "priority": 80
        },
        {
          "text": "cluttered desk",
          "priority": 70
        },
        {
          "text": "chalkboard",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "warm indoor lighting",
        "priority": 60
      }
    },
    "Dean Office": {
      "tags": [
        {
          "text": "dean's office",
          "priority": 80
        },
        {
          "text": "mahogany desk",
          "priority": 70
        },
        {
          "text": "large window",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "natural light through window",
        "priority": 60
      }
    },
    "University Quad": {
      "tags": [
        {
          "text": "university quad",
          "priority": 80
        },
        {
          "text": "campus",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "students walking",
          "priority": 40
        }
      ],
      "lighting": {
        "text": "daylight",
        "priority": 60
      }
    },
    "Courtyard": {
      "tags": [
        {
          "text": "courtyard",
          "priority": 80
        },
        {
          "text": "stone paving",
          "priority": 60
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "ivy covered walls",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "afternoon light",
        "priority": 60
      }
    },
    "Library": {
      "tags": [
        {
          "text": "library",
          "priority": 80
        },
        {
          "text": "bookshelves",
          "priority": 70
        },
        {
          "text": "reading table",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "dim library lighting",
        "priority": 60
      }
    },
    "Study Room": {
      "tags": [
        {
          "text": "study room",
          "priority": 80
        },
        {
          "text": "table",
          "priority": 70
        },
        {
          "text": "textbooks",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "fluorescent lighting",
        "priority": 50
      }
    },
    "Lecture Hall": {
      "tags": [
        {
          "text": "lecture hall",
          "priority": 80
        },
        {
          "text": "auditorium seats",
          "priority": 60
        },
        {
          "text": "projector screen",
          "priority": 50
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "stage lighting",
        "priority": 60
      }
    },
    "Classroom": {
      "tags": [
        {
          "text": "classroom",
          "priority": 80
        },
        {
          "text": "desks",
          "priority": 70
        },
        {
          "text": "whiteboard",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "classroom lighting",
        "priority": 50
      }
    },
    "Bedroom, Night": {
      "tags": [
        {
          "text": "bedroom",
          "priority": 100
        },
        {
          "text": "night",
          "priority": 100
        },
        {
          "text": "bed",
          "priority": 70
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "cozy lamp light",
        "priority": 50
      }
    },
    "Bedroom, Day": {
      "tags": [
        {
          "text": "bedroom",
          "priority": 100
        },
        {
          "text": "day",
          "priority": 100
        },
        {
          "text": "bed",
          "priority": 70
        },
        {
          "text": "indoor",
          "priority": 50
        },
      ],
      "lighting": {
        "text": "natural light",
        "priority": 50
      }
    },
    "Dorm Room": {
      "tags": [
        {
          "text": "dorm room",
          "priority": 80
        },
        {
          "text": "bed",
          "priority": 70
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "cozy lamp light",
        "priority": 60
      }
    },
    "Dorm Hallway": {
      "tags": [
        {
          "text": "dormitory hallway",
          "priority": 80
        },
        {
          "text": "corridor",
          "priority": 60
        },
        {
          "text": "numbered doors",
          "priority": 50
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "hallway lighting",
        "priority": 50
      }
    },
    "Cafeteria": {
      "tags": [
        {
          "text": "cafeteria",
          "priority": 80
        },
        {
          "text": "food trays",
          "priority": 60
        },
        {
          "text": "crowded",
          "priority": 50
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "bright cafeteria lighting",
        "priority": 50
      }
    },
    "Student Center": {
      "tags": [
        {
          "text": "student center",
          "priority": 80
        },
        {
          "text": "lounge area",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "warm indoor lighting",
        "priority": 55
      }
    },
    "Game Room": {
      "tags": [
        {
          "text": "game room",
          "priority": 80
        },
        {
          "text": "arcade machines",
          "priority": 60
        },
        {
          "text": "neon lights",
          "priority": 70
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "neon lighting",
        "priority": 70
      }
    },
    "Rooftop": {
      "tags": [
        {
          "text": "rooftop",
          "priority": 80
        },
        {
          "text": "city skyline",
          "priority": 60
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "railing",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "golden hour",
        "priority": 70
      }
    },
    "Campus Garden": {
      "tags": [
        {
          "text": "campus garden",
          "priority": 80
        },
        {
          "text": "flowers",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "stone path",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "dappled sunlight",
        "priority": 65
      }
    },
    "Greenhouse": {
      "tags": [
        {
          "text": "greenhouse",
          "priority": 80
        },
        {
          "text": "tropical plants",
          "priority": 70
        },
        {
          "text": "glass ceiling",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "greenhouse light",
        "priority": 60
      }
    },
    "Mall": {
      "tags": [
        {
          "text": "shopping mall",
          "priority": 80
        },
        {
          "text": "stores",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        },
        {
          "text": "crowd",
          "priority": 40
        }
      ],
      "lighting": {
        "text": "mall lighting",
        "priority": 50
      }
    },
    "Coffee Shop": {
      "tags": [
        {
          "text": "coffee shop",
          "priority": 80
        },
        {
          "text": "wooden interior",
          "priority": 60
        },
        {
          "text": "coffee cups",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "warm cafe lighting",
        "priority": 65
      }
    },
    "Bookstore": {
      "tags": [
        {
          "text": "bookstore",
          "priority": 80
        },
        {
          "text": "bookshelves",
          "priority": 70
        },
        {
          "text": "cozy",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "warm bookstore lighting",
        "priority": 60
      }
    },
    "Arcade": {
      "tags": [
        {
          "text": "arcade",
          "priority": 80
        },
        {
          "text": "game cabinets",
          "priority": 70
        },
        {
          "text": "colorful lights",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "arcade neon lighting",
        "priority": 70
      }
    },
    "Movie Theater": {
      "tags": [
        {
          "text": "movie theater",
          "priority": 80
        },
        {
          "text": "cinema seats",
          "priority": 60
        },
        {
          "text": "large screen",
          "priority": 50
        },
        {
          "text": "indoor",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "dim cinema lighting",
        "priority": 55
      }
    },
    "Train Station": {
      "tags": [
        {
          "text": "train station",
          "priority": 80
        },
        {
          "text": "platform",
          "priority": 60
        },
        {
          "text": "indoor",
          "priority": 50
        },
        {
          "text": "train",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "station lighting",
        "priority": 55
      }
    },
    "Pier": {
      "tags": [
        {
          "text": "pier",
          "priority": 80
        },
        {
          "text": "ocean",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "wooden planks",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "ocean sunset lighting",
        "priority": 70
      }
    },
    "Boardwalk": {
      "tags": [
        {
          "text": "boardwalk",
          "priority": 80
        },
        {
          "text": "seaside",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "carnival lights",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "warm evening light",
        "priority": 65
      }
    },
    "Beach": {
      "tags": [
        {
          "text": "beach",
          "priority": 80
        },
        {
          "text": "sand",
          "priority": 70
        },
        {
          "text": "ocean waves",
          "priority": 60
        },
        {
          "text": "outdoor",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "beach sunlight",
        "priority": 70
      }
    },
    "Marina": {
      "tags": [
        {
          "text": "marina",
          "priority": 80
        },
        {
          "text": "sailboats",
          "priority": 60
        },
        {
          "text": "water",
          "priority": 60
        },
        {
          "text": "outdoor",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "harbor lighting",
        "priority": 60
      }
    },
    "Crystal Cave": {
      "tags": [
        {
          "text": "crystal cave",
          "priority": 80
        },
        {
          "text": "glowing crystals",
          "priority": 70
        },
        {
          "text": "underground",
          "priority": 60
        },
        {
          "text": "magical",
          "priority": 70
        }
      ],
      "lighting": {
        "text": "crystal blue glow",
        "priority": 75
      }
    },
    "Temple": {
      "tags": [
        {
          "text": "ancient temple",
          "priority": 80
        },
        {
          "text": "stone columns",
          "priority": 70
        },
        {
          "text": "altar",
          "priority": 60
        },
        {
          "text": "mystical",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "torchlight",
        "priority": 65
      }
    },
    "Cult Basement": {
      "tags": [
        {
          "text": "cult basement",
          "priority": 80
        },
        {
          "text": "ritual circle",
          "priority": 70
        },
        {
          "text": "candles",
          "priority": 65
        },
        {
          "text": "dark",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "candlelight",
        "priority": 65
      }
    },
    "Secret Tunnel": {
      "tags": [
        {
          "text": "secret tunnel",
          "priority": 80
        },
        {
          "text": "stone walls",
          "priority": 70
        },
        {
          "text": "torches",
          "priority": 60
        },
        {
          "text": "dark",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "torchlight",
        "priority": 65
      }
    },
    "Forbidden Archive": {
      "tags": [
        {
          "text": "forbidden archive",
          "priority": 80
        },
        {
          "text": "sealed tomes",
          "priority": 70
        },
        {
          "text": "dark shelves",
          "priority": 60
        },
        {
          "text": "ominous",
          "priority": 60
        }
      ],
      "lighting": {
        "text": "eerie green glow",
        "priority": 70
      }
    },
    "Halloween Festival": {
      "tags": [
        {
          "text": "halloween festival",
          "priority": 80
        },
        {
          "text": "jack-o-lanterns",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "decorations",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "halloween night lighting",
        "priority": 70
      }
    },
    "Winter Campus": {
      "tags": [
        {
          "text": "winter campus",
          "priority": 80
        },
        {
          "text": "snow",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "bare trees",
          "priority": 50
        }
      ],
      "lighting": {
        "text": "cold winter light",
        "priority": 60
      }
    },
    "Cherry Blossoms": {
      "tags": [
        {
          "text": "cherry blossom park",
          "priority": 80
        },
        {
          "text": "falling petals",
          "priority": 70
        },
        {
          "text": "outdoor",
          "priority": 60
        },
        {
          "text": "spring",
          "priority": 65
        }
      ],
      "lighting": {
        "text": "soft spring sunlight",
        "priority": 70
      }
    },
    "Rainy Day": {
      "tags": [
        {
          "text": "rainy day",
          "priority": 80
        },
        {
          "text": "rain",
          "priority": 70
        },
        {
          "text": "wet street",
          "priority": 60
        },
        {
          "text": "umbrella",
          "priority": 55
        }
      ],
      "lighting": {
        "text": "overcast lighting",
        "priority": 60
      }
    },
    "None": {}
  };

  const POSITIONS = [
    "Student",
    "Graduate Student",
    "Teaching Assistant",
    "Professor",
    "Guest Lecturer",
    "Research Fellow",
    "Librarian",
    "Dean",
    "Security Guard",
    "Cafeteria Staff",
    "Janitor",
    "Visitor",
    "None"
  ];

  const TYPES = [
    "Femboy",
    "Newhalf",
    "Woman",
    "Man"
  ];

  const DEPARTMENTS = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Psychology",
    "Sociology",
    "History",
    "Political Science",
    "Economics",
    "Philosophy",
    "English",
    "Linguistics",
    "Computer Science",
    "Engineering",
    "Education",
    "Business",
    "Art",
    "Music",
    "Undeclared",
    "Interdisciplinary Studies",
    "Watersports",
    "Scat",
    "BDSM",
    "Shibari",
    "Furry",
    "Exhibitionism",
    "Cock Worship",
    "Lactation",
    "Cum Play",
    "Other",
    "None"
  ];

  const HAIR_COLORS = [
    "black hair",
    "dark brown hair",
    "brown hair",
    "auburn hair",
    "copper hair",
    "blonde hair",
    "platinum blonde hair",
    "honey blonde hair",
    "strawberry blonde hair",
    "red hair",
    "white hair",
    "silver hair",
    "gray hair",
    "green hair",
    "blue hair",
    "purple hair",
    "pink hair",
    "orange hair",
    "teal hair",
    "lavender hair",
    "gradient hair",
    "two-tone hair",
    "streaked hair"
  ];

  const HAIR_STYLES = [
    "long hair",
    "short hair",
    "medium hair",
    "very long hair",
    "pixie cut",
    "wolf cut",
    "messy hair",
    "bob cut",
    "ponytail",
    "high ponytail",
    "twin tails",
    "side ponytail",
    "braid",
    "side braid",
    "french braid",
    "bun",
    "messy bun",
    "updo",
    "curly hair",
    "wavy hair",
    "straight hair",
    "fluffy hair",
    "layered hair",
    "undercut",
    "shaggy hair",
    "ahoge"
  ];

  const EYE_COLORS = [
    "blue eyes",
    "green eyes",
    "brown eyes",
    "hazel eyes",
    "gray eyes",
    "red eyes",
    "purple eyes",
    "golden eyes",
    "silver eyes",
    "amber eyes",
    "teal eyes",
    "violet eyes",
    "dark eyes",
    "glowing eyes",
    "heterochromia"
  ];

  const BODY_TYPES = [
    "slender",
    "petite",
    "athletic build",
    "curvy",
    "tall",
    "short",
    "average build",
    "muscular",
    "lithe",
    "voluptuous",
    "fat",
    "chubby",
    "obese"
  ];

  const AGE_TAGS = {
    "None": [],
    "Child": [
      {
        "text": "child",
        "priority": 100
      },
      {
        "text": "young",
        "priority": 80
      },
      {
        "text": "toddler",
        "priority": 80
      }
    ],
    "Preteen": [
      {
        "text": "preteen",
        "priority": 100
      },
      {
        "text": "tween",
        "priority": 80
      },
      {
        "text": "young",
        "priority": 70
      }
    ],
    "Teen": [
      {
        "text": "teen",
        "priority": 100
      },
      {
        "text": "adolescent",
        "priority": 80
      },
      {
        "text": "young",
        "priority": 70
      }
    ],
    "Adult": [
      {
        "text": "adult",
        "priority": 100
      },
      {
        "text": "mature",
        "priority": 80
      },
      {
        "text": "experienced",
        "priority": 70
      }
    ],
    "Elderly": [
      {
        "text": "elderly",
        "priority": 100
      },
      {
        "text": "old",
        "priority": 80
      },
      {
        "text": "wise",
        "priority": 70
      }
    ]
  };

  const OUTFIT_BY_POSITION = {
    "Student": [
      {
        "text": "school uniform",
        "priority": 75
      },
      {
        "text": "casual clothes",
        "priority": 70
      },
      {
        "text": "hoodie",
        "priority": 60
      },
      {
        "text": "backpack",
        "priority": 50
      },
      {
        "text": "jeans",
        "priority": 55
      }
    ],
    "Graduate Student": [
      {
        "text": "smart casual outfit",
        "priority": 70
      },
      {
        "text": "cardigan",
        "priority": 60
      },
      {
        "text": "laptop bag",
        "priority": 45
      },
      {
        "text": "glasses",
        "priority": 50
      }
    ],
    "Teaching Assistant": [
      {
        "text": "business casual outfit",
        "priority": 70
      },
      {
        "text": "blazer",
        "priority": 65
      },
      {
        "text": "button-up shirt",
        "priority": 55
      },
      {
        "text": "glasses",
        "priority": 50
      }
    ],
    "Professor": [
      {
        "text": "professor outfit",
        "priority": 80
      },
      {
        "text": "academic robes",
        "priority": 70
      },
      {
        "text": "tweed jacket",
        "priority": 60
      },
      {
        "text": "glasses",
        "priority": 55
      }
    ],
    "Guest Lecturer": [
      {
        "text": "formal suit",
        "priority": 75
      },
      {
        "text": "dress shirt",
        "priority": 60
      },
      {
        "text": "tie",
        "priority": 50
      }
    ],
    "Research Fellow": [
      {
        "text": "lab coat",
        "priority": 75
      },
      {
        "text": "smart casual outfit",
        "priority": 60
      },
      {
        "text": "safety goggles",
        "priority": 45
      }
    ],
    "Librarian": [
      {
        "text": "librarian outfit",
        "priority": 75
      },
      {
        "text": "cardigan",
        "priority": 60
      },
      {
        "text": "pencil skirt",
        "priority": 55
      },
      {
        "text": "reading glasses",
        "priority": 50
      }
    ],
    "Dean": [
      {
        "text": "formal suit",
        "priority": 80
      },
      {
        "text": "dress shirt",
        "priority": 65
      },
      {
        "text": "tie",
        "priority": 55
      },
      {
        "text": "pocket square",
        "priority": 40
      }
    ],
    "Security Guard": [
      {
        "text": "security uniform",
        "priority": 80
      },
      {
        "text": "cap",
        "priority": 55
      },
      {
        "text": "walkie talkie",
        "priority": 40
      }
    ],
    "Cafeteria Staff": [
      {
        "text": "apron",
        "priority": 75
      },
      {
        "text": "uniform",
        "priority": 70
      },
      {
        "text": "hair net",
        "priority": 40
      }
    ],
    "Janitor": [
      {
        "text": "janitor uniform",
        "priority": 75
      },
      {
        "text": "work clothes",
        "priority": 65
      },
      {
        "text": "tool belt",
        "priority": 40
      }
    ],
    "Visitor": [
      {
        "text": "casual clothes",
        "priority": 70
      },
      {
        "text": "visitor badge",
        "priority": 40
      }
    ],
    "None": []
  };

  const OUTFIT_MODES = [
    "Normal",
    "Sexy Outfit",
    "Lingerie",
    "Nude"
  ];

  const NSFW_OUTFIT_TAGS = {
    "Sexy Outfit": [
      {
        "text": "revealing outfit",
        "priority": 80
      },
      {
        "text": "tight clothes",
        "priority": 70
      },
      {
        "text": "seductive outfit",
        "priority": 70
      },
      {
        "text": "thigh highs",
        "priority": 70
      },
      {
        "text": "long gloves",
        "priority": 70
      },
      {
        "text": "fishnet stockings",
        "priority": 65
      }
    ],
    "Lingerie": [
      {
        "text": "lingerie",
        "priority": 90
      },
      {
        "text": "lace lingerie",
        "priority": 75
      },
      {
        "text": "corset",
        "priority": 75
      },
      {
        "text": "bustier",
        "priority": 75
      },
      {
        "text": "garter belt",
        "priority": 70
      },
      {
        "text": "thigh highs",
        "priority": 70
      },
      {
        "text": "long gloves",
        "priority": 70
      },
      {
        "text": "fishnet stockings",
        "priority": 65
      }
    ],
    "Nude": [
      {
        "text": "nude",
        "priority": 100
      }
    ]
  };

  const TYPE_BODY_TAGS = {
    "Femboy": [
      {
        "text": "flat chest",
        "priority": 100
      },
      {
        "text": "penis",
        "priority": 100
      },
      {
        "text": "pubic hair",
        "priority": 20
      },
      {
        "text": "testicles",
        "priority": 99
      },
      {
        "text": "foreskin",
        "priority": 60
      },
      {
        "text": "nipples",
        "priority": 50
      },
      {
        "text": "small penis",
        "priority": 15
      }
    ],
    "Newhalf": [
      {
        "text": "penis",
        "priority": 100
      },
      {
        "text": "breasts",
        "priority": 100
      },
      {
        "text": "pubic hair",
        "priority": 70
      },
      {
        "text": "testicles",
        "priority": 99
      },
      {
        "text": "foreskin",
        "priority": 80
      },
      {
        "text": "hairy",
        "priority": 25
      },
      {
        "text": "nipples",
        "priority": 50
      },
      {
        "text": "big penis",
        "priority": 40
      }
    ],
    "Woman": [
      {
        "text": "breasts",
        "priority": 100
      },
      {
        "text": "pussy",
        "priority": 100
      },
      {
        "text": "nipples",
        "priority": 50
      },
      {
        "text": "pubic hair",
        "priority": 60
      },
      {
        "text": "hairy",
        "priority": 45
      }
    ],
    "Man": [
      {
        "text": "penis",
        "priority": 100
      },
      {
        "text": "pubic hair",
        "priority": 50
      },
      {
        "text": "big penis",
        "priority": 40
      },
      {
        "text": "hairy",
        "priority": 72
      },
      {
        "text": "foreskin",
        "priority": 80
      }
    ]
  };

  const ACCESSORIES_BY_DEPARTMENT = {
    "Mathematics": [
      {
        "text": "graphing calculator",
        "priority": 35
      },
      {
        "text": "chalk dust",
        "priority": 35
      },
      {
        "text": "geometry textbook",
        "priority": 35
      },
      {
        "text": "mathematical notes",
        "priority": 35
      },
      {
        "text": "compass",
        "priority": 35
      },
      {
        "text": "protractor",
        "priority": 35
      },
      {
        "text": "equations on whiteboard",
        "priority": 35
      }
    ],
    "Physics": [
      {
        "text": "lab notebook",
        "priority": 35
      },
      {
        "text": "laser pointer",
        "priority": 30
      }
    ],
    "Psychology": [
      {
        "text": "clipboard",
        "priority": 35
      },
      {
        "text": "survey forms",
        "priority": 30
      }
    ],
    "Computer Science": [
      {
        "text": "laptop",
        "priority": 35
      },
      {
        "text": "mechanical keyboard",
        "priority": 30
      }
    ],
    "History": [
      {
        "text": "old books",
        "priority": 35
      },
      {
        "text": "archive documents",
        "priority": 30
      }
    ],
    "Watersports": [
      {
        "text": "yellow handkerchief",
        "priority": 55
      },
      {
        "text": "piss goggles",
        "priority": 55
      },
      {
        "text": "catheter",
        "priority": 50
      }
    ],
    "Scat": [
      {
        "text": "latex gloves",
        "priority": 45
      },
      {
        "text": "towel",
        "priority": 30
      }
    ],
    "BDSM": [
      {
        "text": "corset",
        "priority": 75
      },
      {
        "text": "leather",
        "priority": 60
      },
      {
        "text": "fishnets",
        "priority": 60
      },
      {
        "text": "harness",
        "priority": 80
      },
      {
        "text": "collar",
        "priority": 75
      },
      {
        "text": "leather mask",
        "priority": 65
      },
      {
        "text": "long gloves",
        "priority": 75
      },
      {
        "text": "handcuffs",
        "priority": 50
      },
      {
        "text": "restraint straps",
        "priority": 60
      },
      {
        "text": "riding crop",
        "priority": 40
      },
      {
        "text": "paddle",
        "priority": 50
      },
      {
        "text": "whip",
        "priority": 50
      }
    ],
    "Shibari": [
      {
        "text": "rope",
        "priority": 85
      },
      {
        "text": "harness",
        "priority": 85
      }
    ],
    "Furry": [
      {
        "text": "animal ears",
        "priority": 90
      },
      {
        "text": "tail",
        "priority": 90
      },
      {
        "text": "kemonomimi",
        "priority": 80
      },
      {
        "text": "fox ears",
        "priority": 50
      },
      {
        "text": "cat ears",
        "priority": 50
      },
      {
        "text": "wolf ears",
        "priority": 50
      },
      {
        "text": "paw gloves",
        "priority": 60
      },
      {
        "text": "animal hoodie",
        "priority": 60
      },
      {
        "text": "fluffy tail",
        "priority": 80
      },
      {
        "text": "bell collar",
        "priority": 40
      },
      {
        "text": "fangs",
        "priority": 40
      }
    ],
    "Exhibitionism": [
      {
        "text": "crop top",
        "priority": 70
      },
      {
        "text": "micro skirt",
        "priority": 70
      },
      {
        "text": "short shorts",
        "priority": 65
      },
      {
        "text": "see-through clothing",
        "priority": 60
      },
      {
        "text": "mesh shirt",
        "priority": 60
      },
      {
        "text": "open jacket",
        "priority": 60
      },
      {
        "text": "deep neckline",
        "priority": 65
      },
      {
        "text": "off-shoulder sweater",
        "priority": 60
      },
      {
        "text": "backless outfit",
        "priority": 50
      },
      {
        "text": "low-rise pants",
        "priority": 50
      },
      {
        "text": "high heels",
        "priority": 55
      },
      {
        "text": "thighhighs",
        "priority": 60
      },
      {
        "text": "garter straps",
        "priority": 55
      },
      {
        "text": "body harness",
        "priority": 45
      },
      {
        "text": "flashy jewelry",
        "priority": 50
      },
      {
        "text": "attention-seeking pose",
        "priority": 70
      }
    ],
    "Cock Worship": [
      {
        "text": "collar",
        "priority": 60
      },
      {
        "text": "kneeling stool",
        "priority": 30
      },
      {
        "text": "heart choker",
        "priority": 50
      },
      {
        "text": "locket necklace",
        "priority": 50
      },
      {
        "text": "worshipful expression",
        "priority": 75
      },
      {
        "text": "devoted smile",
        "priority": 70
      },
      {
        "text": "blushing",
        "priority": 60
      },
      {
        "text": "hands clasped",
        "priority": 60
      },
      {
        "text": "prayer pose",
        "priority": 60
      },
      {
        "text": "love-struck eyes",
        "priority": 70
      },
      {
        "text": "male symbol jewelry",
        "priority": 40
      },
      {
        "text": "muscle-worship poster",
        "priority": 40
      },
      {
        "text": "athletic team jacket",
        "priority": 50
      },
      {
        "text": "letterman jacket",
        "priority": 50
      },
      {
        "text": "idol poster",
        "priority": 40
      }
    ],
    "Lactation": [
      {
        "text": "cardigan",
        "priority": 70
      },
      {
        "text": "oversized sweater",
        "priority": 70
      },
      {
        "text": "apron",
        "priority": 50
      },
      {
        "text": "cow print clothing",
        "priority": 50
      },
      {
        "text": "cowbell necklace",
        "priority": 40
      },
      {
        "text": "pastoral outfit",
        "priority": 50
      },
      {
        "text": "milk carton accessory",
        "priority": 40
      },
      {
        "text": "ribbon choker",
        "priority": 50
      },
      {
        "text": "soft smile",
        "priority": 70
      },
      {
        "text": "maternal expression",
        "priority": 60
      },
      {
        "text": "nursing-themed jewelry",
        "priority": 30
      },
      {
        "text": "farmgirl aesthetic",
        "priority": 50
      },
      {
        "text": "cow ears",
        "priority": 40
      },
      {
        "text": "cow motif",
        "priority": 50
      },
      {
        "text": "lab coat",
        "priority": 50
      },
      {
        "text": "milk bottle",
        "priority": 70
      },
      {
        "text": "clipboard",
        "priority": 40
      },
      {
        "text": "cow print skirt",
        "priority": 60
      },
      {
        "text": "cowbell necklace",
        "priority": 50
      },
      {
        "text": "research badge",
        "priority": 40
      },
      {
        "text": "department lanyard",
        "priority": 40
      },
      {
        "text": "pastoral aesthetic",
        "priority": 50
      },
      {
        "text": "cow print",
        "priority": 70
      },
      {
        "text": "cowbell",
        "priority": 50
      },
      {
        "text": "farm uniform",
        "priority": 50
      },
      {
        "text": "agriculture student",
        "priority": 50
      },
      {
        "text": "dairy sciences",
        "priority": 60
      }
    ],
    "Cum Play": [
      {
        "text": "white clothing",
        "priority": 70
      },
      {
        "text": "lab coat",
        "priority": 60
      },
      {
        "text": "science goggles",
        "priority": 40
      },
      {
        "text": "test tubes",
        "priority": 50
      },
      {
        "text": "beaker",
        "priority": 50
      },
      {
        "text": "chemistry equipment",
        "priority": 60
      },
      {
        "text": "white gloves",
        "priority": 50
      },
      {
        "text": "medical theme",
        "priority": 40
      },
      {
        "text": "fertility symbol jewelry",
        "priority": 40
      },
      {
        "text": "DNA motif",
        "priority": 50
      },
      {
        "text": "biology textbook",
        "priority": 40
      },
      {
        "text": "research badge",
        "priority": 40
      },
      {
        "text": "specimen container",
        "priority": 30
      },
      {
        "text": "clipboard",
        "priority": 40
      },
      {
        "text": "biology student",
        "priority": 60
      },
      {
        "text": "lab coat",
        "priority": 70
      },
      {
        "text": "microscope",
        "priority": 50
      },
      {
        "text": "test tubes",
        "priority": 60
      },
      {
        "text": "beaker",
        "priority": 60
      },
      {
        "text": "DNA pattern clothing",
        "priority": 50
      },
      {
        "text": "research notes",
        "priority": 40
      },
      {
        "text": "science club",
        "priority": 40
      },
      {
        "text": "white robe",
        "priority": 50
      },
      {
        "text": "purity aesthetic",
        "priority": 60
      },
      {
        "text": "ceremonial sash",
        "priority": 40
      },
      {
        "text": "fertility iconography",
        "priority": 50
      },
      {
        "text": "devoted expression",
        "priority": 60
      },
      {
        "text": "academic stole",
        "priority": 40
      },
      {
        "text": "cum on face",
        "priority": 70
      },
      {
        "text": "cum on clothes",
        "priority": 90
      },
      {
        "text": "cum on hands",
        "priority": 60
      }
    ],
    "Other": [
      {
        "text": "mismatched outfit",
        "priority": 70
      },
      {
        "text": "eclectic fashion",
        "priority": 70
      },
      {
        "text": "multiple accessories",
        "priority": 60
      },
      {
        "text": "strange jewelry",
        "priority": 60
      },
      {
        "text": "unusual hairstyle",
        "priority": 60
      },
      {
        "text": "colorful clothing",
        "priority": 50
      },
      {
        "text": "patchwork clothing",
        "priority": 50
      },
      {
        "text": "mysterious smile",
        "priority": 60
      },
      {
        "text": "oddball aesthetic",
        "priority": 70
      },
      {
        "text": "collection of trinkets",
        "priority": 50
      },
      {
        "text": "lanyards",
        "priority": 40
      },
      {
        "text": "club badges",
        "priority": 40
      },
      {
        "text": "novelty accessories",
        "priority": 60
      },
      {
        "text": "customized uniform",
        "priority": 70
      },
      {
        "text": "chaotic energy",
        "priority": 80
      },
      {
        "text": "animal ears",
        "priority": 30
      },
      {
        "text": "goth accessories",
        "priority": 30
      },
      {
        "text": "glasses",
        "priority": 30
      },
      {
        "text": "lab coat",
        "priority": 30
      },
      {
        "text": "collar",
        "priority": 20
      },
      {
        "text": "maid apron",
        "priority": 20
      },
      {
        "text": "punk fashion",
        "priority": 30
      },
      {
        "text": "academic robe",
        "priority": 20
      },
      {
        "text": "custom outfit",
        "priority": 70
      },
      {
        "text": "student council badge",
        "priority": 40
      },
      {
        "text": "department pins",
        "priority": 50
      },
      {
        "text": "club president",
        "priority": 30
      },
      {
        "text": "stack of textbooks",
        "priority": 50
      },
      {
        "text": "overloaded schedule",
        "priority": 60
      },
      {
        "text": "many interests",
        "priority": 80
      },
      {
        "text": "customized uniform",
        "priority": 70
      }
    ],
    "Undeclared": []
  };

  const EXPRESSIONS = [
    {
      "text": "smile",
      "priority": 65
    },
    {
      "text": "gentle smile",
      "priority": 65
    },
    {
      "text": "happy expression",
      "priority": 60
    },
    {
      "text": "confident expression",
      "priority": 60
    },
    {
      "text": "mischievous smile",
      "priority": 60
    },
    {
      "text": "serious expression",
      "priority": 60
    },
    {
      "text": "focused expression",
      "priority": 55
    },
    {
      "text": "curious expression",
      "priority": 55
    },
    {
      "text": "shy expression",
      "priority": 55
    },
    {
      "text": "stern expression",
      "priority": 55
    },
    {
      "text": "bored expression",
      "priority": 50
    },
    {
      "text": "surprised expression",
      "priority": 50
    }
  ];

  const POSES = [
    {
      "text": "looking at viewer",
      "priority": 60
    },
    {
      "text": "standing",
      "priority": 55
    },
    {
      "text": "sitting",
      "priority": 55
    },
    {
      "text": "leaning against wall",
      "priority": 55
    },
    {
      "text": "arms crossed",
      "priority": 50
    },
    {
      "text": "hand on hip",
      "priority": 50
    },
    {
      "text": "reading a book",
      "priority": 50
    },
    {
      "text": "looking away",
      "priority": 50
    },
    {
      "text": "waving",
      "priority": 50
    },
    {
      "text": "walking",
      "priority": 50
    },
    {
      "text": "writing",
      "priority": 45
    },
    {
      "text": "studying",
      "priority": 45
    }
  ];

  const TYPE_APPEARANCE = {
    "Femboy": [
      {
        "text": "femboy",
        "priority": 100
      },
      {
        "text": "otoko no ko",
        "priority": 95
      },
      {
        "text": "boy",
        "priority": 80
      },
      {
        "text": "girly",
        "priority": 75
      }
    ],
    "Newhalf": [
      {
        "text": "newhalf",
        "priority": 100
      },
      {
        "text": "futanari",
        "priority": 95
      }
    ],
    "Woman": [
      {
        "text": "girl",
        "priority": 100
      }
    ],
    "Man": [
      {
        "text": "man",
        "priority": 100
      }
    ]
  };

  const PROMPT_LIMITS = {
    "1": 35,
    "2": 25,
    "3": 18
  };

  const ACT_MODES_BY_COUNT = {
    "1": [
      "Normal",
      "Random",
      "Posing",
      "Masturbating",
      "Toy Play",
      "BDSM",
      "Voyeurism",
      "Exhibitionism",
      "Scat Play",
      "Watersports",
      "Facial Expressions",
      "Miscellaneous"
    ],
    "2": [
      "Normal",
      "Random",
      "Posing",
      "Masturbating",
      "Toy Play",
      "BDSM",
      "Kissing",
      "Frotting",
      "Manual Sex",
      "Oral Sex",
      "Vaginal Sex",
      "Anal Sex",
      "Voyeurism",
      "Exhibitionism",
      "Scat Play",
      "Watersports",
      "Cum Play",
      "Facial Expressions",
      "Miscellaneous"
    ],
    "3": [
      "Normal",
      "Random",
      "Posing",
      "Masturbating",
      "Toy Play",
      "BDSM",
      "Kissing",
      "Frotting",
      "Manual Sex",
      "Oral Sex",
      "Vaginal Sex",
      "Anal Sex",
      "Voyeurism",
      "Exhibitionism",
      "Scat Play",
      "Watersports",
      "Facial Expressions",
      "Miscellaneous"
    ]
  };

  const ACT_OPTIONS_BY_MODE = {
    "Normal": [
      "Standing",
      "Walking",
      "Sitting",
      "Leaning",
      "Lying down",
      "Random"
    ],
    "Posing": [
      "Random",
      "Posing",
      "Sexy Pose",
      "Lewd Pose",
      "Sultry Pose",
      "Teasing Pose",
      "Displaying Ass",
      "Spread Legs",
      "Displaying Genitals",
      "Displaying Chest",
      "Precum",
      "Dripping",
      "Grabbing Own Breast",
      "Grabbing Own Genitals",
      "Take Your Pick",
      "Afterglow",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Facial Expressions": [
      ":>=",
      "Fucked Silly",
      "Ahegao",
      "Torogao",
      "Naughty Face",
      "Blushing",
      "Drooling",
      "Sweating",
      "Tongue Is Sticking Out",
      "Eyes Are Rolled Up",
      "Mouth Is Open",
      "Ohhoai",
      "Ohogao",
      "Aroused",
      "Seductive Smile",
      "Ass-To-Mouth",
      "Condom In Mouth",
      "Cum In Mouth",
      "Oral Invitation",
      "Mob Face"
    ],
    "Miscellaneous": [
      "Yaoi",
      "Yuri",
      "Shotacon",
      "Lolicon",
      "Flat Chest",
      "Penis",
      "Testicles",
      "Foreskin",
      "Nipples",
      "Vagina",
      "Clitoris",
      "Labia",
      "Vulva",
      "Gaping Ass",
      "Prolapsed Rectum",
      "Gaping Pussy",
      "Urethra"
    ],
    "Masturbating": [
      "Random",
      "Masturbating",
      "Stroking Penis",
      "Playing With Foreskin",
      "After Masturbation",
      "Fondling Testicles",
      "Fingering Pussy",
      "Spreading Labia",
      "Fingering Clitoris",
      "Autofellatio",
      "Autocunnilingus",
      "Fingering Asshole",
      "Playing With Nipples",
      "Precum",
      "Ejaculating",
      "Squirting",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Toy Play": [
      "Random",
      "Toy Play",
      "Dildo",
      "Vibrator",
      "Nipple Vibrator",
      "Nipple Clamps",
      "Love Egg",
      "Wand",
      "Bullet Vibrator",
      "Rabbit Vibrator",
      "Butt Plug",
      "Anal Beads",
      "Prostate Massager",
      "Cock Ring",
      "Vibrating Cock Ring",
      "Fleshlight",
      "Strap-On Dildo",
      "Chastity Cage",
      "Penis Pump",
      "Nipple Pump",
      "Sounding",
      "Precum",
      "Ejaculating",
      "Squirting",
      "Dominant",
      "Submissive",
      "Toy In Pussy",
      "Toy In Ass",
      "After Insertion",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "BDSM": [
      "Random",
      "BDSM",
      "Bound",
      "Bondage",
      "Rope Bondage",
      "Bound Together",
      "Public Bondage",
      "Self Bondage",
      "Spreader Bar",
      "Dominatrix",
      "Humiliation",
      "Masochism",
      "Public Use",
      "Tally",
      "Rope Walking",
      "Sadism",
      "Slave",
      "Spanked",
      "Torture",
      "Clitoris Torture",
      "Nipple Torture",
      "Nipple Clamps",
      "Nipple Pull",
      "Ball Busting",
      "Wax Play",
      "Shibari",
      "Handcuffs",
      "Hanging Bondage",
      "Suspension Bondage",
      "Spread Eagle Bondage",
      "Bound Arms",
      "Bound Elbows",
      "Bound Fingers",
      "Bound Wrists",
      "Bound Breasts",
      "Bound Legs",
      "Bound Calves",
      "Bound Feet",
      "Bound Knees",
      "Bound Thighs",
      "Bound Toes",
      "Bound Penis",
      "Bound Torso",
      "Box Tie",
      "Reverse Prayer",
      "Frogtie",
      "Hogtied",
      "Arms Bound Apart",
      "Legs Bound Apart",
      "Wrists Bound Apart",
      "Shrimp Tie",
      "Strappado",
      "Cuffs-To-Collar",
      "Precum",
      "Ejaculating",
      "Squirting",
      "Dominant",
      "Submissive",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Voyeurism": [
      "Random",
      "Voyeurism",
      "Peeping",
      "Observing",
      "Masturbating",
      "Precum",
      "Squirting",
      "Ejaculating",
      "Taking Pictures",
      "Caught",
      "Walk-In",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Exhibitionism": [
      "Exhibitionism",
      "Flashing",
      "Mooning",
      "Public Nudity",
      "Zenra",
      "Public Sex",
      "Stealth Bondage",
      "Stealth Masturbation",
      "Stealth Paizuri",
      "Stealth Sex",
      "Prostitution",
      "Public Use",
      "Masturbating",
      "Squirting",
      "Precum",
      "Ejaculating",
      "Cumdump",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Scat Play": [
      "Scat",
      "Shit",
      "Poop in Butt",
      "Shitting",
      "Human Toilet",
      "Turds",
      "Feces",
      "Diarrhea",
      "Smearing",
      "Eating Shit",
      "Covered In Shit",
      "Masturbating",
      "Scat Explosion",
      "Scat On Face",
      "Scat On Head",
      "Scat In Mouth",
      "Scat On Chest",
      "Scat On Belly",
      "Scat On Genitals",
      "Scat On Feet",
      "Public Defecation",
      "Oral Sex",
      "Anal Sex",
      "Vaginal Sex",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Watersports": [
      "Watersports",
      "Piss",
      "Pissing",
      "Urinating",
      "Golden Shower",
      "Human Toilet",
      "Piss Dribble",
      "Piss Stream",
      "Arcing",
      "Drinking Piss",
      "Pissing Self",
      "Gargling",
      "Covered In Piss",
      "Masturbating",
      "Piss Explosion",
      "Piss on Face",
      "Piss On Head",
      "Piss in Mouth",
      "Piss on Chest",
      "Piss on Belly",
      "Piss on Genitals",
      "Piss on Feet",
      "Public Urination",
      "Drenched",
      "Public Defecation",
      "Oral Sex",
      "Anal Sex",
      "Vaginal Sex",
      "Precum",
      "Ejaculating",
      "Squirting",
      "Dominant",
      "Submissive",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Kissing": [
      "Random",
      "Kissing",
      "French Kiss",
      "Deep Kiss",
      "Gentle Kiss",
      "Passionate Kiss",
      "Neck Kissing",
      "Body Kissing",
      "Genital Kissing",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Frotting": [
      "Random",
      "Frotting",
      "Frottage",
      "Rubbing Cocks",
      "Penis-to-Penis",
      "Bulges Touching",
      "Chest-to-Chest",
      "After Frottage",
      "Tribadism",
      "Glansjob",
      "Messy",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial",
      "Autofacial"
    ],
    "Oral Sex": [
      "Random",
      "Oral Sex",
      "Blowjob",
      "After Fellatio",
      "After Oral",
      "Kneeling",
      "Crouching",
      "Cunnilingus",
      "Deepthroat",
      "Face-Sitting",
      "Anilingus",
      "Rusty Trombone",
      "Nipple Sucking",
      "Glansjob",
      "Cum Swap",
      "Sucking Balls",
      "Felching",
      "69",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Manual Sex": [
      "Random",
      "Jerking Off",
      "Handjob",
      "Stroking Penis",
      "After Insertion",
      "Footjob",
      "Pussyjob",
      "Buttjob",
      "After Buttjob",
      "After Paizuri",
      "Hotdogging",
      "Paizuri",
      "Thigh Sex",
      "Cooperative Footjob",
      "Playing With Foreskin",
      "Fondling Testicles",
      "Fingering Pussy",
      "Spreading Labia",
      "Fingering Clitoris",
      "Autofellatio",
      "Fingering Asshole",
      "Glansjob",
      "Playing With Nipples",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Vaginal Sex": [
      "Random",
      "Vaginal Sex",
      "Penis in Vagina",
      "After Insertion",
      "Female Penetrated",
      "Double Vaginal",
      "Imminent Vaginal",
      "After Vaginal",
      "Riding",
      "Sex From Behind/Doggystyle",
      "Bent Over",
      "Prone Bone",
      "Standing Sex",
      "Top-Down Bottom-Up",
      "Spitroast",
      "Reverse Spitroast",
      "Spooning",
      "Amazon Position",
      "Cowgirl Position",
      "Squatting Cowgirl Position",
      "Reverse Cowgirl Position",
      "Reverse Squatting Cowgirl Position",
      "Upright Straddle",
      "Reverse Upright Straddle",
      "Anvil Position",
      "Folded",
      "Missionary Position",
      "Mating Press",
      "Suspended Congress",
      "Reverse Suspended Congress",
      "Full Nelson",
      "Piledriver",
      "Mounting",
      "Standing Missionary Position",
      "Glansjob",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ],
    "Anal Sex": [
      "Random",
      "Anal Sex",
      "Male Penetrated",
      "Female Penetrated",
      "Penis in Asshole",
      "After Anal",
      "Double Anal",
      "Imminent Anal",
      "Pegging",
      "Riding",
      "Sex From Behind/Doggystyle",
      "Bent Over",
      "Prone Bone",
      "Standing Sex",
      "Top-Down Bottom-Up",
      "Spitroast",
      "Reverse Spitroast",
      "Spooning",
      "Amazon Position",
      "Cowgirl Position",
      "Squatting Cowgirl Position",
      "Reverse Cowgirl Position",
      "Reverse Squatting Cowgirl Position",
      "Upright Straddle",
      "Reverse Upright Straddle",
      "Anvil Position",
      "Folded",
      "Missionary Position",
      "Mating Press",
      "Suspended Congress",
      "Reverse Suspended Congress",
      "Full Nelson",
      "Piledriver",
      "Mounting",
      "Standing Missionary Position",
      "Squirting",
      "Dominant",
      "Submissive",
      "Precum",
      "Ejaculating",
      "Cum In Mouth",
      "Cum On Face",
      "Cum On Chest",
      "Cum On Stomach",
      "Cum In Hair",
      "Cum In Urethra",
      "Cum On Ass",
      "Cum On Thighs",
      "Cum On Armpits",
      "Cum On Hands",
      "Cum On Feet",
      "Cumdrip",
      "Cum In Navel",
      "Facial"
    ]
  };

  const ACT_OPTION_TAGS = {
    "Standing": [
      {
        "text": "standing",
        "priority": 100
      }
    ],
    "Walking": [
      {
        "text": "walking",
        "priority": 100
      }
    ],
    "Sitting": [
      {
        "text": "sitting",
        "priority": 100
      }
    ],
    "Leaning": [
      {
        "text": "leaning",
        "priority": 100
      }
    ],
    "Lying down": [
      {
        "text": "lying down",
        "priority": 100
      }
    ],
    "Posing": [
      {
        "text": "posing",
        "priority": 100
      }
    ],
    "Sexy Pose": [
      {
        "text": "sexy pose",
        "priority": 100
      }
    ],
    "Lewd Pose": [
      {
        "text": "lewd pose",
        "priority": 100
      }
    ],
    "Sultry Pose": [
      {
        "text": "sultry pose",
        "priority": 100
      }
    ],
    "Teasing Pose": [
      {
        "text": "teasing pose",
        "priority": 100
      }
    ],
    "Displaying Ass": [
      {
        "text": "displaying ass",
        "priority": 100
      }
    ],
    "Spread Legs": [
      {
        "text": "spread legs",
        "priority": 100
      }
    ],
    "Displaying Genitals": [
      {
        "text": "displaying genitals",
        "priority": 100
      }
    ],
    "Displaying Chest": [
      {
        "text": "displaying chest",
        "priority": 100
      }
    ],
    "Precum": [
      {
        "text": "precum",
        "priority": 100
      }
    ],
    "Dripping": [
      {
        "text": "dripping",
        "priority": 100
      }
    ],
    "Grabbing Own Breast": [
      {
        "text": "grabbing own breast",
        "priority": 100
      }
    ],
    "Grabbing Own Genitals": [
      {
        "text": "grabbing own genitals",
        "priority": 100
      }
    ],
    "Take Your Pick": [
      {
        "text": "take your pick",
        "priority": 100
      }
    ],
    "Afterglow": [
      {
        "text": "afterglow",
        "priority": 100
      }
    ],
    "Cum In Mouth": [
      {
        "text": "cum in mouth",
        "priority": 100
      }
    ],
    "Cum On Face": [
      {
        "text": "cum on face",
        "priority": 100
      }
    ],
    "Cum On Chest": [
      {
        "text": "cum on chest",
        "priority": 100
      }
    ],
    "Cum On Stomach": [
      {
        "text": "cum on stomach",
        "priority": 100
      }
    ],
    "Cum In Hair": [
      {
        "text": "cum in hair",
        "priority": 100
      }
    ],
    "Cum In Urethra": [
      {
        "text": "cum in urethra",
        "priority": 100
      }
    ],
    "Cum On Ass": [
      {
        "text": "cum on ass",
        "priority": 100
      }
    ],
    "Cum On Thighs": [
      {
        "text": "cum on thighs",
        "priority": 100
      }
    ],
    "Cum On Armpits": [
      {
        "text": "cum on armpits",
        "priority": 100
      }
    ],
    "Cum On Hands": [
      {
        "text": "cum on hands",
        "priority": 100
      }
    ],
    "Cum On Feet": [
      {
        "text": "cum on feet",
        "priority": 100
      }
    ],
    "Cumdrip": [
      {
        "text": "cumdrip",
        "priority": 100
      }
    ],
    "Cum In Navel": [
      {
        "text": "cum in navel",
        "priority": 100
      }
    ],
    "Facial": [
      {
        "text": "facial",
        "priority": 100
      }
    ],
    ":>=": [
      {
        "text": ":>=",
        "priority": 100
      }
    ],
    "Fucked Silly": [
      {
        "text": "fucked silly",
        "priority": 100
      }
    ],
    "Ahegao": [
      {
        "text": "ahegao",
        "priority": 100
      }
    ],
    "Torogao": [
      {
        "text": "torogao",
        "priority": 100
      }
    ],
    "Naughty Face": [
      {
        "text": "naughty face",
        "priority": 100
      }
    ],
    "Blushing": [
      {
        "text": "blushing",
        "priority": 100
      }
    ],
    "Drooling": [
      {
        "text": "drooling",
        "priority": 100
      }
    ],
    "Sweating": [
      {
        "text": "sweating",
        "priority": 100
      }
    ],
    "Tongue Is Sticking Out": [
      {
        "text": "tongue is sticking out",
        "priority": 100
      }
    ],
    "Eyes Are Rolled Up": [
      {
        "text": "eyes are rolled up",
        "priority": 100
      }
    ],
    "Mouth Is Open": [
      {
        "text": "mouth is open",
        "priority": 100
      }
    ],
    "Ohhoai": [
      {
        "text": "ohhoai",
        "priority": 100
      }
    ],
    "Ohogao": [
      {
        "text": "ohogao",
        "priority": 100
      }
    ],
    "Aroused": [
      {
        "text": "aroused",
        "priority": 100
      }
    ],
    "Seductive Smile": [
      {
        "text": "seductive smile",
        "priority": 100
      }
    ],
    "Ass-To-Mouth": [
      {
        "text": "ass-to-mouth",
        "priority": 100
      }
    ],
    "Condom In Mouth": [
      {
        "text": "condom in mouth",
        "priority": 100
      }
    ],
    "Oral Invitation": [
      {
        "text": "oral invitation",
        "priority": 100
      }
    ],
    "Mob Face": [
      {
        "text": "mob face",
        "priority": 100
      }
    ],
    "Yaoi": [
      {
        "text": "yaoi",
        "priority": 100
      }
    ],
    "Yuri": [
      {
        "text": "yuri",
        "priority": 100
      }
    ],
    "Shotacon": [
      {
        "text": "shotacon",
        "priority": 100
      }
    ],
    "Lolicon": [
      {
        "text": "lolicon",
        "priority": 100
      }
    ],
    "Flat Chest": [
      {
        "text": "flat chest",
        "priority": 100
      }
    ],
    "Penis": [
      {
        "text": "penis",
        "priority": 100
      }
    ],
    "Testicles": [
      {
        "text": "testicles",
        "priority": 100
      }
    ],
    "Foreskin": [
      {
        "text": "foreskin",
        "priority": 100
      }
    ],
    "Nipples": [
      {
        "text": "nipples",
        "priority": 100
      }
    ],
    "Vagina": [
      {
        "text": "vagina",
        "priority": 100
      }
    ],
    "Clitoris": [
      {
        "text": "clitoris",
        "priority": 100
      }
    ],
    "Labia": [
      {
        "text": "labia",
        "priority": 100
      }
    ],
    "Vulva": [
      {
        "text": "vulva",
        "priority": 100
      }
    ],
    "Gaping Ass": [
      {
        "text": "gaping ass",
        "priority": 100
      }
    ],
    "Prolapsed Rectum": [
      {
        "text": "prolapsed rectum",
        "priority": 100
      }
    ],
    "Gaping Pussy": [
      {
        "text": "gaping pussy",
        "priority": 100
      }
    ],
    "Urethra": [
      {
        "text": "urethra",
        "priority": 100
      }
    ],
    "Masturbating": [
      {
        "text": "masturbating",
        "priority": 100
      }
    ],
    "Stroking Penis": [
      {
        "text": "stroking penis",
        "priority": 100
      }
    ],
    "Playing With Foreskin": [
      {
        "text": "playing with foreskin",
        "priority": 100
      }
    ],
    "After Masturbation": [
      {
        "text": "after masturbation",
        "priority": 100
      }
    ],
    "Fondling Testicles": [
      {
        "text": "fondling testicles",
        "priority": 100
      }
    ],
    "Fingering Pussy": [
      {
        "text": "fingering pussy",
        "priority": 100
      }
    ],
    "Spreading Labia": [
      {
        "text": "spreading labia",
        "priority": 100
      }
    ],
    "Fingering Clitoris": [
      {
        "text": "fingering clitoris",
        "priority": 100
      }
    ],
    "Autofellatio": [
      {
        "text": "autofellatio",
        "priority": 100
      }
    ],
    "Autocunnilingus": [
      {
        "text": "autocunnilingus",
        "priority": 100
      }
    ],
    "Fingering Asshole": [
      {
        "text": "fingering asshole",
        "priority": 100
      }
    ],
    "Playing With Nipples": [
      {
        "text": "playing with nipples",
        "priority": 100
      }
    ],
    "Ejaculating": [
      {
        "text": "ejaculating",
        "priority": 100
      }
    ],
    "Squirting": [
      {
        "text": "squirting",
        "priority": 100
      }
    ],
    "Toy Play": [
      {
        "text": "toy play",
        "priority": 100
      }
    ],
    "Dildo": [
      {
        "text": "dildo",
        "priority": 100
      }
    ],
    "Vibrator": [
      {
        "text": "vibrator",
        "priority": 100
      }
    ],
    "Nipple Vibrator": [
      {
        "text": "nipple vibrator",
        "priority": 100
      }
    ],
    "Nipple Clamps": [
      {
        "text": "nipple clamps",
        "priority": 100
      }
    ],
    "Love Egg": [
      {
        "text": "love egg",
        "priority": 100
      }
    ],
    "Wand": [
      {
        "text": "wand",
        "priority": 100
      }
    ],
    "Bullet Vibrator": [
      {
        "text": "bullet vibrator",
        "priority": 100
      }
    ],
    "Rabbit Vibrator": [
      {
        "text": "rabbit vibrator",
        "priority": 100
      }
    ],
    "Butt Plug": [
      {
        "text": "butt plug",
        "priority": 100
      }
    ],
    "Anal Beads": [
      {
        "text": "anal beads",
        "priority": 100
      }
    ],
    "Prostate Massager": [
      {
        "text": "prostate massager",
        "priority": 100
      }
    ],
    "Cock Ring": [
      {
        "text": "cock ring",
        "priority": 100
      }
    ],
    "Vibrating Cock Ring": [
      {
        "text": "vibrating cock ring",
        "priority": 100
      }
    ],
    "Fleshlight": [
      {
        "text": "fleshlight",
        "priority": 100
      }
    ],
    "Strap-On Dildo": [
      {
        "text": "strap-on dildo",
        "priority": 100
      }
    ],
    "Chastity Cage": [
      {
        "text": "chastity cage",
        "priority": 100
      }
    ],
    "Penis Pump": [
      {
        "text": "penis pump",
        "priority": 100
      }
    ],
    "Nipple Pump": [
      {
        "text": "nipple pump",
        "priority": 100
      }
    ],
    "Sounding": [
      {
        "text": "sounding",
        "priority": 100
      }
    ],
    "Dominant": [
      {
        "text": "dominant",
        "priority": 100
      }
    ],
    "Submissive": [
      {
        "text": "submissive",
        "priority": 100
      }
    ],
    "After Insertion": [
      {
        "text": "after insertion",
        "priority": 100
      }
    ],
    "BDSM": [
      {
        "text": "bdsm",
        "priority": 100
      }
    ],
    "Bondage": [
      {
        "text": "bondage",
        "priority": 100
      }
    ],
    "Rope Bondage": [
      {
        "text": "rope bondage",
        "priority": 100
      }
    ],
    "Bound Together": [
      {
        "text": "bound together",
        "priority": 100
      }
    ],
    "Public Bondage": [
      {
        "text": "public bondage",
        "priority": 100
      }
    ],
    "Self Bondage": [
      {
        "text": "self bondage",
        "priority": 100
      }
    ],
    "Spreader Bar": [
      {
        "text": "spreader bar",
        "priority": 100
      }
    ],
    "Dominatrix": [
      {
        "text": "dominatrix",
        "priority": 100
      }
    ],
    "Humiliation": [
      {
        "text": "humiliation",
        "priority": 100
      }
    ],
    "Masochism": [
      {
        "text": "masochism",
        "priority": 100
      }
    ],
    "Public Use": [
      {
        "text": "public use",
        "priority": 100
      }
    ],
    "Tally": [
      {
        "text": "tally",
        "priority": 100
      }
    ],
    "Rope Walking": [
      {
        "text": "rope walking",
        "priority": 100
      }
    ],
    "Sadism": [
      {
        "text": "sadism",
        "priority": 100
      }
    ],
    "Slave": [
      {
        "text": "slave",
        "priority": 100
      }
    ],
    "Spanked": [
      {
        "text": "spanked",
        "priority": 100
      }
    ],
    "Torture": [
      {
        "text": "torture",
        "priority": 100
      }
    ],
    "Clitoris Torture": [
      {
        "text": "clitoris torture",
        "priority": 100
      }
    ],
    "Nipple Torture": [
      {
        "text": "nipple torture",
        "priority": 100
      }
    ],
    "Nipple Pull": [
      {
        "text": "nipple pull",
        "priority": 100
      }
    ],
    "Ball Busting": [
      {
        "text": "ball busting",
        "priority": 100
      }
    ],
    "Wax Play": [
      {
        "text": "wax play",
        "priority": 100
      }
    ],
    "Shibari": [
      {
        "text": "shibari",
        "priority": 100
      }
    ],
    "Handcuffs": [
      {
        "text": "handcuffs",
        "priority": 100
      }
    ],
    "Hanging Bondage": [
      {
        "text": "hanging bondage",
        "priority": 100
      }
    ],
    "Suspension Bondage": [
      {
        "text": "suspension bondage",
        "priority": 100
      }
    ],
    "Spread Eagle Bondage": [
      {
        "text": "spread eagle bondage",
        "priority": 100
      }
    ],
    "Bound Arms": [
      {
        "text": "bound arms",
        "priority": 100
      }
    ],
    "Bound Elbows": [
      {
        "text": "bound elbows",
        "priority": 100
      }
    ],
    "Bound Fingers": [
      {
        "text": "bound fingers",
        "priority": 100
      }
    ],
    "Bound Wrists": [
      {
        "text": "bound wrists",
        "priority": 100
      }
    ],
    "Bound Breasts": [
      {
        "text": "bound breasts",
        "priority": 100
      }
    ],
    "Bound Legs": [
      {
        "text": "bound legs",
        "priority": 100
      }
    ],
    "Bound Calves": [
      {
        "text": "bound calves",
        "priority": 100
      }
    ],
    "Bound Feet": [
      {
        "text": "bound feet",
        "priority": 100
      }
    ],
    "Bound Knees": [
      {
        "text": "bound knees",
        "priority": 100
      }
    ],
    "Bound Thighs": [
      {
        "text": "bound thighs",
        "priority": 100
      }
    ],
    "Bound Toes": [
      {
        "text": "bound toes",
        "priority": 100
      }
    ],
    "Bound Penis": [
      {
        "text": "bound penis",
        "priority": 100
      }
    ],
    "Bound Torso": [
      {
        "text": "bound torso",
        "priority": 100
      }
    ],
    "Box Tie": [
      {
        "text": "box tie",
        "priority": 100
      }
    ],
    "Reverse Prayer": [
      {
        "text": "reverse prayer",
        "priority": 100
      }
    ],
    "Frogtie": [
      {
        "text": "frogtie",
        "priority": 100
      }
    ],
    "Hogtied": [
      {
        "text": "hogtied",
        "priority": 100
      }
    ],
    "Arms Bound Apart": [
      {
        "text": "arms bound apart",
        "priority": 100
      }
    ],
    "Legs Bound Apart": [
      {
        "text": "legs bound apart",
        "priority": 100
      }
    ],
    "Wrists Bound Apart": [
      {
        "text": "wrists bound apart",
        "priority": 100
      }
    ],
    "Shrimp Tie": [
      {
        "text": "shrimp tie",
        "priority": 100
      }
    ],
    "Strappado": [
      {
        "text": "strappado",
        "priority": 100
      }
    ],
    "Cuffs-To-Collar": [
      {
        "text": "cuffs-to-collar",
        "priority": 100
      }
    ],
    "Voyeurism": [
      {
        "text": "voyeurism",
        "priority": 100
      }
    ],
    "Peeping": [
      {
        "text": "peeping",
        "priority": 100
      }
    ],
    "Observing": [
      {
        "text": "observing",
        "priority": 100
      }
    ],
    "Taking Pictures": [
      {
        "text": "taking pictures",
        "priority": 100
      }
    ],
    "Caught": [
      {
        "text": "caught",
        "priority": 100
      }
    ],
    "Walk-In": [
      {
        "text": "walk-in",
        "priority": 100
      }
    ],
    "Exhibitionism": [
      {
        "text": "exhibitionism",
        "priority": 100
      }
    ],
    "Flashing": [
      {
        "text": "flashing",
        "priority": 100
      }
    ],
    "Mooning": [
      {
        "text": "mooning",
        "priority": 100
      }
    ],
    "Public Nudity": [
      {
        "text": "public nudity",
        "priority": 100
      }
    ],
    "Zenra": [
      {
        "text": "zenra",
        "priority": 100
      }
    ],
    "Public Sex": [
      {
        "text": "public sex",
        "priority": 100
      }
    ],
    "Stealth Bondage": [
      {
        "text": "stealth bondage",
        "priority": 100
      }
    ],
    "Stealth Masturbation": [
      {
        "text": "stealth masturbation",
        "priority": 100
      }
    ],
    "Stealth Paizuri": [
      {
        "text": "stealth paizuri",
        "priority": 100
      }
    ],
    "Stealth Sex": [
      {
        "text": "stealth sex",
        "priority": 100
      }
    ],
    "Prostitution": [
      {
        "text": "prostitution",
        "priority": 100
      }
    ],
    "Cumdump": [
      {
        "text": "cumdump",
        "priority": 100
      }
    ],
    "Scat": [
      {
        "text": "scat",
        "priority": 100
      }
    ],
    "Shit": [
      {
        "text": "shit",
        "priority": 100
      }
    ],
    "Poop in Butt": [
      {
        "text": "poop in butt",
        "priority": 100
      }
    ],
    "Shitting": [
      {
        "text": "shitting",
        "priority": 100
      }
    ],
    "Human Toilet": [
      {
        "text": "human toilet",
        "priority": 100
      }
    ],
    "Turds": [
      {
        "text": "turds",
        "priority": 100
      }
    ],
    "Feces": [
      {
        "text": "feces",
        "priority": 100
      }
    ],
    "Diarrhea": [
      {
        "text": "diarrhea",
        "priority": 100
      }
    ],
    "Smearing": [
      {
        "text": "smearing",
        "priority": 100
      }
    ],
    "Eating Shit": [
      {
        "text": "eating shit",
        "priority": 100
      }
    ],
    "Covered In Shit": [
      {
        "text": "covered in shit",
        "priority": 100
      }
    ],
    "Scat Explosion": [
      {
        "text": "scat explosion",
        "priority": 100
      }
    ],
    "Scat On Face": [
      {
        "text": "scat on face",
        "priority": 100
      }
    ],
    "Scat On Head": [
      {
        "text": "scat on head",
        "priority": 100
      }
    ],
    "Scat In Mouth": [
      {
        "text": "scat in mouth",
        "priority": 100
      }
    ],
    "Scat On Chest": [
      {
        "text": "scat on chest",
        "priority": 100
      }
    ],
    "Scat On Belly": [
      {
        "text": "scat on belly",
        "priority": 100
      }
    ],
    "Scat On Genitals": [
      {
        "text": "scat on genitals",
        "priority": 100
      }
    ],
    "Scat On Feet": [
      {
        "text": "scat on feet",
        "priority": 100
      }
    ],
    "Public Defecation": [
      {
        "text": "public defecation",
        "priority": 100
      }
    ],
    "Oral Sex": [
      {
        "text": "oral sex",
        "priority": 100
      }
    ],
    "Anal Sex": [
      {
        "text": "anal sex",
        "priority": 100
      }
    ],
    "Vaginal Sex": [
      {
        "text": "vaginal sex",
        "priority": 100
      }
    ],
    "Watersports": [
      {
        "text": "watersports",
        "priority": 100
      }
    ],
    "Piss": [
      {
        "text": "piss",
        "priority": 100
      }
    ],
    "Pissing": [
      {
        "text": "pissing",
        "priority": 100
      }
    ],
    "Urinating": [
      {
        "text": "urinating",
        "priority": 100
      }
    ],
    "Golden Shower": [
      {
        "text": "golden shower",
        "priority": 100
      }
    ],
    "Piss Dribble": [
      {
        "text": "piss dribble",
        "priority": 100
      }
    ],
    "Piss Stream": [
      {
        "text": "piss stream",
        "priority": 100
      }
    ],
    "Arcing": [
      {
        "text": "arcing",
        "priority": 100
      }
    ],
    "Drinking Piss": [
      {
        "text": "drinking piss",
        "priority": 100
      }
    ],
    "Pissing Self": [
      {
        "text": "pissing self",
        "priority": 100
      }
    ],
    "Gargling": [
      {
        "text": "gargling",
        "priority": 100
      }
    ],
    "Covered In Piss": [
      {
        "text": "covered in piss",
        "priority": 100
      }
    ],
    "Piss Explosion": [
      {
        "text": "piss explosion",
        "priority": 100
      }
    ],
    "Piss on Face": [
      {
        "text": "piss on face",
        "priority": 100
      }
    ],
    "Piss On Head": [
      {
        "text": "piss on head",
        "priority": 100
      }
    ],
    "Piss in Mouth": [
      {
        "text": "piss in mouth",
        "priority": 100
      }
    ],
    "Piss on Chest": [
      {
        "text": "piss on chest",
        "priority": 100
      }
    ],
    "Piss on Belly": [
      {
        "text": "piss on belly",
        "priority": 100
      }
    ],
    "Piss on Genitals": [
      {
        "text": "piss on genitals",
        "priority": 100
      }
    ],
    "Piss on Feet": [
      {
        "text": "piss on feet",
        "priority": 100
      }
    ],
    "Public Urination": [
      {
        "text": "public urination",
        "priority": 100
      }
    ],
    "Drenched": [
      {
        "text": "drenched",
        "priority": 100
      }
    ],
    "Kissing": [
      {
        "text": "kissing",
        "priority": 100
      }
    ],
    "French Kiss": [
      {
        "text": "french kiss",
        "priority": 100
      }
    ],
    "Deep Kiss": [
      {
        "text": "deep kiss",
        "priority": 100
      }
    ],
    "Gentle Kiss": [
      {
        "text": "gentle kiss",
        "priority": 100
      }
    ],
    "Passionate Kiss": [
      {
        "text": "passionate kiss",
        "priority": 100
      }
    ],
    "Neck Kissing": [
      {
        "text": "neck kissing",
        "priority": 100
      }
    ],
    "Body Kissing": [
      {
        "text": "body kissing",
        "priority": 100
      }
    ],
    "Genital Kissing": [
      {
        "text": "genital kissing",
        "priority": 100
      }
    ],
    "Frotting": [
      {
        "text": "frotting",
        "priority": 100
      }
    ],
    "Frottage": [
      {
        "text": "frottage",
        "priority": 100
      }
    ],
    "Rubbing Cocks": [
      {
        "text": "rubbing cocks",
        "priority": 100
      }
    ],
    "Penis-to-Penis": [
      {
        "text": "penis-to-penis",
        "priority": 100
      }
    ],
    "Bulges Touching": [
      {
        "text": "bulges touching",
        "priority": 100
      }
    ],
    "Chest-to-Chest": [
      {
        "text": "chest-to-chest",
        "priority": 100
      }
    ],
    "After Frottage": [
      {
        "text": "after frottage",
        "priority": 100
      }
    ],
    "Tribadism": [
      {
        "text": "tribadism",
        "priority": 100
      }
    ],
    "Glansjob": [
      {
        "text": "glansjob",
        "priority": 100
      }
    ],
    "Messy": [
      {
        "text": "messy",
        "priority": 100
      }
    ],
    "Autofacial": [
      {
        "text": "autofacial",
        "priority": 100
      }
    ],
    "Blowjob": [
      {
        "text": "blowjob",
        "priority": 100
      }
    ],
    "After Fellatio": [
      {
        "text": "after fellatio",
        "priority": 100
      }
    ],
    "After Oral": [
      {
        "text": "after oral",
        "priority": 100
      }
    ],
    "Kneeling": [
      {
        "text": "kneeling",
        "priority": 100
      }
    ],
    "Crouching": [
      {
        "text": "crouching",
        "priority": 100
      }
    ],
    "Cunnilingus": [
      {
        "text": "cunnilingus",
        "priority": 100
      }
    ],
    "Deepthroat": [
      {
        "text": "deepthroat",
        "priority": 100
      }
    ],
    "Face-Sitting": [
      {
        "text": "face-sitting",
        "priority": 100
      }
    ],
    "Anilingus": [
      {
        "text": "anilingus",
        "priority": 100
      }
    ],
    "Rusty Trombone": [
      {
        "text": "rusty trombone",
        "priority": 100
      }
    ],
    "Nipple Sucking": [
      {
        "text": "nipple sucking",
        "priority": 100
      }
    ],
    "Cum Swap": [
      {
        "text": "cum swap",
        "priority": 100
      }
    ],
    "Sucking Balls": [
      {
        "text": "sucking balls",
        "priority": 100
      }
    ],
    "Felching": [
      {
        "text": "felching",
        "priority": 100
      }
    ],
    "69": [
      {
        "text": "69",
        "priority": 100
      }
    ],
    "Jerking Off": [
      {
        "text": "jerking off",
        "priority": 100
      }
    ],
    "Handjob": [
      {
        "text": "handjob",
        "priority": 100
      }
    ],
    "Footjob": [
      {
        "text": "footjob",
        "priority": 100
      }
    ],
    "Pussyjob": [
      {
        "text": "pussyjob",
        "priority": 100
      }
    ],
    "Buttjob": [
      {
        "text": "buttjob",
        "priority": 100
      }
    ],
    "After Buttjob": [
      {
        "text": "after buttjob",
        "priority": 100
      }
    ],
    "After Paizuri": [
      {
        "text": "after paizuri",
        "priority": 100
      }
    ],
    "Hotdogging": [
      {
        "text": "hotdogging",
        "priority": 100
      }
    ],
    "Paizuri": [
      {
        "text": "paizuri",
        "priority": 100
      }
    ],
    "Thigh Sex": [
      {
        "text": "thigh sex",
        "priority": 100
      }
    ],
    "Cooperative Footjob": [
      {
        "text": "cooperative footjob",
        "priority": 100
      }
    ],
    "Penis in Vagina": [
      {
        "text": "penis in vagina",
        "priority": 100
      }
    ],
    "Female Penetrated": [
      {
        "text": "female penetrated",
        "priority": 100
      }
    ],
    "Double Vaginal": [
      {
        "text": "double vaginal",
        "priority": 100
      }
    ],
    "Imminent Vaginal": [
      {
        "text": "imminent vaginal",
        "priority": 100
      }
    ],
    "After Vaginal": [
      {
        "text": "after vaginal",
        "priority": 100
      }
    ],
    "Riding": [
      {
        "text": "riding",
        "priority": 100
      }
    ],
    "Sex From Behind/Doggystyle": [
      {
        "text": "sex from behind/doggystyle",
        "priority": 100
      }
    ],
    "Bent Over": [
      {
        "text": "bent over",
        "priority": 100
      }
    ],
    "Prone Bone": [
      {
        "text": "prone bone",
        "priority": 100
      }
    ],
    "Standing Sex": [
      {
        "text": "standing sex",
        "priority": 100
      }
    ],
    "Top-Down Bottom-Up": [
      {
        "text": "top-down bottom-up",
        "priority": 100
      }
    ],
    "Spitroast": [
      {
        "text": "spitroast",
        "priority": 100
      }
    ],
    "Reverse Spitroast": [
      {
        "text": "reverse spitroast",
        "priority": 100
      }
    ],
    "Spooning": [
      {
        "text": "spooning",
        "priority": 100
      }
    ],
    "Amazon Position": [
      {
        "text": "amazon position",
        "priority": 100
      }
    ],
    "Cowgirl Position": [
      {
        "text": "cowgirl position",
        "priority": 100
      }
    ],
    "Squatting Cowgirl Position": [
      {
        "text": "squatting cowgirl position",
        "priority": 100
      }
    ],
    "Reverse Cowgirl Position": [
      {
        "text": "reverse cowgirl position",
        "priority": 100
      }
    ],
    "Reverse Squatting Cowgirl Position": [
      {
        "text": "reverse squatting cowgirl position",
        "priority": 100
      }
    ],
    "Upright Straddle": [
      {
        "text": "upright straddle",
        "priority": 100
      }
    ],
    "Reverse Upright Straddle": [
      {
        "text": "reverse upright straddle",
        "priority": 100
      }
    ],
    "Anvil Position": [
      {
        "text": "anvil position",
        "priority": 100
      }
    ],
    "Folded": [
      {
        "text": "folded",
        "priority": 100
      }
    ],
    "Missionary Position": [
      {
        "text": "missionary position",
        "priority": 100
      }
    ],
    "Mating Press": [
      {
        "text": "mating press",
        "priority": 100
      }
    ],
    "Suspended Congress": [
      {
        "text": "suspended congress",
        "priority": 100
      }
    ],
    "Reverse Suspended Congress": [
      {
        "text": "reverse suspended congress",
        "priority": 100
      }
    ],
    "Full Nelson": [
      {
        "text": "full nelson",
        "priority": 100
      }
    ],
    "Piledriver": [
      {
        "text": "piledriver",
        "priority": 100
      }
    ],
    "Mounting": [
      {
        "text": "mounting",
        "priority": 100
      }
    ],
    "Standing Missionary Position": [
      {
        "text": "standing missionary position",
        "priority": 100
      }
    ],
    "Male Penetrated": [
      {
        "text": "male penetrated",
        "priority": 100
      }
    ],
    "Penis in Asshole": [
      {
        "text": "penis in asshole",
        "priority": 100
      }
    ],
    "After Anal": [
      {
        "text": "after anal",
        "priority": 100
      }
    ],
    "Double Anal": [
      {
        "text": "double anal",
        "priority": 100
      }
    ],
    "Imminent Anal": [
      {
        "text": "imminent anal",
        "priority": 100
      }
    ],
    "Pegging": [
      {
        "text": "pegging",
        "priority": 100
      }
    ]
  };

  function makeTag(text, priority) {
    return { text, priority };
  }


  window.FUGData = {
    QUALITY_TAGS,
    COPYRIGHT_TAGS,
    ARTIST_TAGS,
    BACKGROUNDS,
    POSITIONS,
    TYPES,
    DEPARTMENTS,
    HAIR_COLORS,
    HAIR_STYLES,
    EYE_COLORS,
    BODY_TYPES,
    AGE_TAGS,
    OUTFIT_BY_POSITION,
    OUTFIT_MODES,
    NSFW_OUTFIT_TAGS,
    TYPE_BODY_TAGS,
    ACCESSORIES_BY_DEPARTMENT,
    EXPRESSIONS,
    POSES,
    TYPE_APPEARANCE,
    PROMPT_LIMITS,
    ACT_MODES_BY_COUNT,
    ACT_OPTIONS_BY_MODE,
    ACT_OPTION_TAGS,
    makeTag
  };

})();
