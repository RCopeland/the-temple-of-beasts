export interface AbilityScore {
  score: string;
  modifier: string;
}

export interface MonsterData {
  name: string;
  meta: string;
  ac: string;
  abilityScores: {
    str: AbilityScore;
    dex: AbilityScore;
    con: AbilityScore;
    int: AbilityScore;
    wis: AbilityScore;
    cha: AbilityScore;
  };
  hp: { total: string; die: string };
  speed: string;
  cr: { rating: string; xp: string };
  damageResistances?: string[];
  conditionImmunities?: string[];
  skills?: string[];
  damageImmunities?: string[];
  senses: string[];
  languages: string[];
  features?: { name: string; description: string }[];
  actions: { name: string; description: string }[];
}

export const monsters = {
  octopus: {
    name: "Octopus",
    meta: "small beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "4",
        modifier: "-3",
      },
      dex: {
        score: "15",
        modifier: "+2",
      },
      con: {
        score: "11",
        modifier: "+0",
      },
      int: {
        score: "3",
        modifier: "-4",
      },
      wis: {
        score: "10",
        modifier: "+0",
      },
      cha: {
        score: "4",
        modifier: "-3",
      },
    },
    hp: {
      total: "3",
      die: "1d6",
    },
    speed: "5ft., swim 30ft.",
    cr: {
      rating: "0",
      xp: "10",
    },
    skills: ["Perception + 2", "Stealth + 4"],
    senses: ["darkvision 30ft.", "passive Perception 12"],
    languages: [],
    features: [
      {
        name: "Hold Breath",
        description:
          "While out of water, the octopus can hold its breath for 30 minutes.",
      },
      {
        name: "Underwater Camoflage",
        description:
          "The octopus has advantage on Dexterity (Stealth) checks while underwater.",
      },
      {
        name: "Water Breathing",
        description: "The octopus can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Tentacles",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
      },
      {
        name: "Ink Cloud",
        description:
          "(Recharges after a Short or Long Rest). A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
      },
    ],
  },
  giantCrab: {
    name: "Giant Crab",
    meta: "medium beast, unaligned",
    ac: "15",
    abilityScores: {
      str: {
        score: "12",
        modifier: "+1",
      },
      dex: {
        score: "15",
        modifier: "+2",
      },
      con: {
        score: "11",
        modifier: "+0",
      },
      int: {
        score: "1",
        modifier: "-5",
      },
      wis: {
        score: "9",
        modifier: "-1",
      },
      cha: {
        score: "3",
        modifier: "-4",
      },
    },
    hp: {
      total: "13",
      die: "3d8",
    },
    speed: "30ft., swim 30ft.",
    cr: {
      rating: "1/8",
      xp: "25",
    },
    skills: ["Stealth + 4"],
    senses: ["blindsight 30ft.", "passive Perception 9"],
    languages: [],
    features: [
      {
        name: "Amphibious",
        description: "The crab can breathe air and water.",
      },
    ],
    actions: [
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: (1d6 + 1) bludgeoning damage. The target is grappled (escape dc 11) The crab has two claws, each of which can grapple only one target.",
      },
    ],
  },
  reefShark: {
    name: "Reef Shark",
    meta: "medium beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "14",
        modifier: "+2",
      },
      dex: {
        score: "13",
        modifier: "+1",
      },
      con: {
        score: "13",
        modifier: "+1",
      },
      int: {
        score: "1",
        modifier: "-5",
      },
      wis: {
        score: "10",
        modifier: "+0",
      },
      cha: {
        score: "4",
        modifier: "-3",
      },
    },
    hp: {
      total: "22",
      die: "4d8+4",
    },
    speed: "swim 40ft.",
    cr: {
      rating: "1/2",
      xp: "100",
    },
    skills: ["Perception + 2"],
    senses: ["blindsight 30ft.", "passive Perception 12"],
    languages: [],
    features: [
      {
        name: "Pack Tactics",
        description:
          "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
      },
      {
        name: "Water Breathing",
        description: "The shark can breathe only underwater.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: (1d8 + 2) piercing damage.",
      },
    ],
  },
  killerWhale: {
    name: "Killer Whale",
    meta: "huge beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "19",
        modifier: "+4",
      },
      dex: {
        score: "10",
        modifier: "+0",
      },
      con: {
        score: "13",
        modifier: "+1",
      },
      int: {
        score: "3",
        modifier: "-4",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "90",
      die: "12d12+12",
    },
    speed: "swim 60ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    skills: ["Perception + 3"],
    senses: ["blindsight 120ft.", "passive Perception 13"],
    languages: [],
    features: [
      {
        name: "Echolocation",
        description: "The whale can't use its blindsight while deafened.",
      },
      {
        name: "Hold Breath",
        description:
          "While out of water, the whale can hold its breath for 30 minutes.",
      },
      {
        name: "Keen Hearing",
        description:
          "The whale has advantage on Wisdom (Perception) checks that rely on hearing",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (5d6 + 4) piercing damage.",
      },
    ],
  },

  ankylosaurus: {
    name: "Ankylosaurus",
    meta: "huge beast, unaligned",
    ac: "15",
    abilityScores: {
      str: {
        score: "19",
        modifier: "+4",
      },
      dex: {
        score: "11",
        modifier: "+0",
      },
      con: {
        score: "15",
        modifier: "+2",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "5",
        modifier: "-3",
      },
    },
    hp: {
      total: "68",
      die: "8d12+16",
    },
    speed: "30ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    senses: ["passive Perception 11"],
    languages: [],
    actions: [
      {
        name: "Tail",
        description:
          "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
      },
    ],
  },
  allosaurus: {
    name: "Allosaurus",
    meta: "large beast, unaligned",
    ac: "13",
    abilityScores: {
      str: {
        score: "19",
        modifier: "+4",
      },
      dex: {
        score: "13",
        modifier: "+1",
      },
      con: {
        score: "17",
        modifier: "+3",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "5",
        modifier: "-3",
      },
    },
    hp: {
      total: "51",
      die: "6d10+18",
    },
    speed: "60ft.",
    cr: {
      rating: "2",
      xp: "450",
    },
    skills: ["Perception + 3"],
    senses: ["passive Perception 15"],
    languages: [],
    features: [
      {
        name: "Pounce",
        description:
          "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
      },
    ],
  },
  pteranodon: {
    name: "Pteranodon",
    meta: "medium beast, unaligned",
    ac: "13",
    abilityScores: {
      str: {
        score: "12",
        modifier: "+1",
      },
      dex: {
        score: "15",
        modifier: "+2",
      },
      con: {
        score: "10",
        modifier: "+0",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "9",
        modifier: "-1",
      },
      cha: {
        score: "5",
        modifier: "-3",
      },
    },
    hp: {
      total: "13",
      die: "3d8",
    },
    speed: "10ft., fly 60ft.",
    cr: {
      rating: "1/4",
      xp: "50",
    },
    skills: ["Perception + 1"],
    senses: ["passive Perception 11"],
    languages: [],
    features: [
      {
        name: "Flyby",
        description:
          "The pteranodon doesn't provoke an opportunity attack when it flies out of an enemy's reach.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage.",
      },
    ],
  },
  swarmofinsects: {
    name: "Swarm of Insects",
    meta: "medium swarm of tiny beasts, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "3",
        modifier: "-4",
      },
      dex: {
        score: "13",
        modifier: "+1",
      },
      con: {
        score: "10",
        modifier: "+0",
      },
      int: {
        score: "1",
        modifier: "-5",
      },
      wis: {
        score: "7",
        modifier: "-2",
      },
      cha: {
        score: "1",
        modifier: "-5",
      },
    },
    hp: {
      total: "22",
      die: "5d8",
    },
    speed: "20ft., climb 20ft.",
    cr: {
      rating: "1/2",
      xp: "100",
    },
    damageResistances: ["bludgeoning", "piercing", "slashing"],
    conditionImmunities: [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned",
    ],
    senses: ["blindsight 10ft.", "passive Perception 8"],
    languages: [],
    features: [
      {
        name: "Swarm",
        description:
          "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
      },
    ],
    actions: [
      {
        name: "Bites",
        description:
          "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
      },
    ],
  },

  eagle: {
    name: "Eagle",
    meta: "small beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "6",
        modifier: "-2",
      },
      dex: {
        score: "15",
        modifier: "+2",
      },
      con: {
        score: "10",
        modifier: "+0",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "14",
        modifier: "+2",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "3",
      die: "1d6",
    },
    speed: "10ft., fly 60ft.",
    cr: {
      rating: "0",
      xp: "10",
    },
    skills: ["Perception + 4"],
    senses: ["passive Perception 14"],
    languages: [],
    features: [
      {
        name: "Keen Sight",
        description:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
      },
    ],
    actions: [
      {
        name: "Talons",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
      },
    ],
  },
  bloodhawk: {
    name: "Blood Hawk",
    meta: "small beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "6",
        modifier: "-2",
      },
      dex: {
        score: "14",
        modifier: "+2",
      },
      con: {
        score: "10",
        modifier: "+0",
      },
      int: {
        score: "3",
        modifier: "-4",
      },
      wis: {
        score: "14",
        modifier: "+2",
      },
      cha: {
        score: "5",
        modifier: "-3",
      },
    },
    hp: {
      total: "7",
      die: "2d6",
    },
    speed: "10ft., fly 60ft.",
    cr: {
      rating: "1/8",
      xp: "25",
    },
    skills: ["Perception + 4"],
    senses: ["passive Perception 14"],
    languages: [],
    features: [
      {
        name: "Keen Sight",
        description:
          "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
      },
      {
        name: "Pack Tactics",
        description:
          "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated.",
      },
    ],
    actions: [
      {
        name: "Beak",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
      },
    ],
  },
  giantbat: {
    name: "Giant Bat",
    meta: "large beast, unaligned",
    ac: "13",
    abilityScores: {
      str: {
        score: "15",
        modifier: "+2",
      },
      dex: {
        score: "16",
        modifier: "+3",
      },
      con: {
        score: "11",
        modifier: "+0",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "6",
        modifier: "-2",
      },
    },
    hp: {
      total: "22",
      die: "4d10",
    },
    speed: "10ft., fly 60ft.",
    cr: {
      rating: "1/4",
      xp: "50",
    },
    senses: ["blindsight 60ft.", "passive Perception 11"],
    languages: [],
    features: [
      {
        name: "Echolocation",
        description: "The bat can't use its blindsight while deafened.",
      },
      {
        name: "Keen Hearing",
        description:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
      },
    ],
  },
  griffon: {
    name: "Griffon",
    meta: "large monstrosity, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "18",
        modifier: "+4",
      },
      dex: {
        score: "15",
        modifier: "+2",
      },
      con: {
        score: "16",
        modifier: "+3",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "13",
        modifier: "+1",
      },
      cha: {
        score: "8",
        modifier: "-1",
      },
    },
    hp: {
      total: "59",
      die: "7d10+21",
    },
    speed: "30ft., fly 80ft.",
    cr: {
      rating: "2",
      xp: "450",
    },
    skills: ["Perception + 5"],
    senses: ["darkvision 60ft.", "passive Perception 15"],
    languages: [],
    features: [
      {
        name: "Keen Sight",
        description:
          "The griffon has advantage on Wisdom (Perception) checks that rely on sight.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The griffon makes two attacks: one with its beak and one with its claws.",
      },
      {
        name: "Beak",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
      },
    ],
  },

  doppleganger: {
    name: "The Traveller",
    meta: "medium monstrosity (shapechanger), neutral",
    ac: "14",
    abilityScores: {
      str: {
        score: "11",
        modifier: "+0",
      },
      dex: {
        score: "18",
        modifier: "+4",
      },
      con: {
        score: "14",
        modifier: "+2",
      },
      int: {
        score: "11",
        modifier: "+0",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "14",
        modifier: "+2",
      },
    },
    hp: {
      total: "52",
      die: "8d8+16",
    },
    speed: "30ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    skills: ["Deception +6", "Insight +3"],
    senses: ["darkvision 60ft.", "passive Perception 11"],
    languages: ["Common"],
    features: [
      {
        name: "Shapechanger",
        description:
          "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
      },
      {
        name: "Ambusher",
        description:
          "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it surprised.",
      },
      {
        name: "Surprise Attack",
        description:
          "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description: "The doppelganger makes two melee attacks.",
      },
      {
        name: "Slam",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
      },
      {
        name: "Read Thoughts",
        description:
          "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.",
      },
    ],
  },
  chimera: {
    name: "Chimera",
    meta: "large monstrosity, chaotic evil",
    ac: "14",
    abilityScores: {
      str: {
        score: "19",
        modifier: "+4",
      },
      dex: {
        score: "11",
        modifier: "+0",
      },
      con: {
        score: "19",
        modifier: "+4",
      },
      int: {
        score: "3",
        modifier: "-4",
      },
      wis: {
        score: "14",
        modifier: "+2",
      },
      cha: {
        score: "10",
        modifier: "+0",
      },
    },
    hp: {
      total: "114",
      die: "12d10+48",
    },
    speed: "30ft., fly 60ft.",
    cr: {
      rating: "6",
      xp: "2300",
    },
    skills: ["Perception + 8"],
    senses: ["darkvision 60ft.", "passive Perception 18"],
    languages: ["understands Draconic but can't speak"],
    actions: [
      {
        name: "Multiattack",
        description:
          "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
      },
      {
        name: "Horns",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.",
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
      },
      {
        name: "Fire Breath (Recharge 5-6)",
        description:
          "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
      },
    ],
  },

  goat: {
    name: "Goat",
    meta: "medium beast, unaligned",
    ac: "10",
    abilityScores: {
      str: {
        score: "12",
        modifier: "+1",
      },
      dex: {
        score: "10",
        modifier: "+0",
      },
      con: {
        score: "11",
        modifier: "+0",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "10",
        modifier: "+0",
      },
      cha: {
        score: "5",
        modifier: "-3",
      },
    },
    hp: {
      total: "4",
      die: "1d8",
    },
    speed: "40ft.",
    cr: {
      rating: "0",
      xp: "10",
    },
    senses: ["passive Perception 10"],
    languages: [],
    features: [
      {
        name: "Charge",
        description:
          "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
      },
      {
        name: "Sure-Footed",
        description:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
      },
    ],
    actions: [
      {
        name: "Ram",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
      },
    ],
  },
  basilisk: {
    name: "Basilisk",
    meta: "medium monstrosity, unaligned",
    ac: "15",
    abilityScores: {
      str: {
        score: "16",
        modifier: "+3",
      },
      dex: {
        score: "8",
        modifier: "-1",
      },
      con: {
        score: "15",
        modifier: "+2",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "8",
        modifier: "-1",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "52",
      die: "8d8+16",
    },
    speed: "20ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    senses: ["darkvision 60ft.", "passive Perception 9"],
    languages: [],
    features: [
      {
        name: "Petrifying Gaze",
        description:
          "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
      },
    ],
  },
  polarbear: {
    name: "Polar Bear",
    meta: "large beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "20",
        modifier: "+5",
      },
      dex: {
        score: "10",
        modifier: "+0",
      },
      con: {
        score: "16",
        modifier: "+3",
      },
      int: {
        score: "2",
        modifier: "-4",
      },
      wis: {
        score: "13",
        modifier: "+1",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "42",
      die: "5d10+15",
    },
    speed: "40ft., swim 30ft.",
    cr: {
      rating: "2",
      xp: "450",
    },
    skills: ["Perception + 3"],
    senses: ["passive Perception 13"],
    languages: [],
    features: [
      {
        name: "Keen Smell",
        description:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
      },
    ],
    actions: [
      {
        name: "Mulitattack",
        description:
          "The bear makes two attacks: one with its bite and one with its claws.",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
      },
    ],
  },
  owlbear: {
    name: "Owlbear",
    meta: "large monstrosity, unaligned",
    ac: "13",
    abilityScores: {
      str: {
        score: "20",
        modifier: "+5",
      },
      dex: {
        score: "12",
        modifier: "+1",
      },
      con: {
        score: "17",
        modifier: "+3",
      },
      int: {
        score: "3",
        modifier: "-4",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "59",
      die: "7d10+21",
    },
    speed: "40ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    skills: ["Perception + 3"],
    senses: ["darkvision 60ft.", "passive Perception 13"],
    languages: [],
    features: [
      {
        name: "Keen Sight and Smell",
        description:
          "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The owlbear makes two attacks: one with its beak and one with its claws.",
      },
      {
        name: "Beak",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.",
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
      },
    ],
  },
  yeti: {
    name: "Yeti",
    meta: "large monstrosity, chaotic evil",
    ac: "12",
    abilityScores: {
      str: {
        score: "18",
        modifier: "+4",
      },
      dex: {
        score: "13",
        modifier: "+1",
      },
      con: {
        score: "16",
        modifier: "+3",
      },
      int: {
        score: "8",
        modifier: "-1",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "51",
      die: "6d10+18",
    },
    speed: "40ft., climb 40ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    skills: ["Perception + 3", "Stealth + 3"],
    damageImmunities: ["Cold"],
    senses: ["darkvision 60ft.", "passive Perception 13"],
    languages: ["Yeti"],
    features: [
      {
        name: "Fear of Fire",
        description:
          "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.",
      },
      {
        name: "Keen Smell",
        description:
          "The yeti has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Snow Camouflage",
        description:
          "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The yeti can use its Chilling Gaze and makes two claw attacks.",
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage.",
      },
      {
        name: "Chilling Gaze",
        description:
          "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target’s saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour.",
      },
    ],
  },
  wereboar: {
    name: "Killer Whale",
    meta: "huge beast, unaligned",
    ac: "12",
    abilityScores: {
      str: {
        score: "19",
        modifier: "+4",
      },
      dex: {
        score: "10",
        modifier: "+0",
      },
      con: {
        score: "13",
        modifier: "+1",
      },
      int: {
        score: "3",
        modifier: "-4",
      },
      wis: {
        score: "12",
        modifier: "+1",
      },
      cha: {
        score: "7",
        modifier: "-2",
      },
    },
    hp: {
      total: "90",
      die: "12d12+12",
    },
    speed: "swim 60ft.",
    cr: {
      rating: "3",
      xp: "700",
    },
    skills: ["Perception + 3"],
    senses: ["blindsight 120ft.", "passive Perception 13"],
    languages: [],
    features: [
      {
        name: "Echolocation",
        description: "The whale can't use its blindsight while deafened.",
      },
      {
        name: "Hold Breath",
        description:
          "While out of water, the whale can hold its breath for 30 minutes.",
      },
      {
        name: "Keen Hearing",
        description:
          "The whale has advantage on Wisdom (Perception) checks that rely on hearing",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: (5d6 + 4) piercing damage.",
      },
    ],
  },
};
