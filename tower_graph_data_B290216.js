var tower_graph_costs = [
    '175 / 450 / 1675 / 8700',
    '275 / 750 / 1800',
    '1050 / 3000'
];
var tower_graph_data = {
    'light': {
        name: "Light",
        elements: ['light'],
        strong: 'dark',
        weak: 'earth',
        damage: "100 / 650 / 4225 / 42250",
        speed: 0.66,
        range: 1500
    },
    'trickery': {
        name: "Trickery / Mirage / Eidolon",
        elements: ['light', 'dark'],
        damage: "450 / 2250 / 11250",
        speed: 1,
        range: 900,
        ability: 'Creates a clone of a tower that lasts for a short duration.',
        duration: '10 / 20 / 60',
    },
    'ice': {
        name: "Ice / Freezing / Sub-Zero",
        elements: ['light', 'water'],
        damage: "135 / 675 / 3375",
        speed: 1.5,
        range: 900,
        ability: 'Each attack sends out a wave of frost that damages creeps in its path.',
    },
    'quark': {
        name: "Quark / Electron / Atom",
        elements: ['light', 'earth'],
        damage: "200 / 1000 / 5000",
        speed: 0.66,
        range: 700,
        ability: 'Each time this tower attacks the same target, it will gain 20% attack damage. Damage resets when you switch targets.',
        aoe: '100 Full / 200 Half'
    },
    'nova': {
        name: "Nova / Supernova",
        elements: ['light', 'fire', 'nature'],
        damage: "250 / 1250 (per second)",
        speed: 0.66,
        range: 700,
        ability: 'Explodes, dealing damage to all units within AoE and slowing movement for 3 seconds.',
        aoe: '700 Full',
        slow: '-10% / -30%'
    },
    'hail': {
        name: "Hail / Comet",
        elements: ['light', 'dark', 'water'],
        damage: "1000 / 5000",
        speed: 0.66,
        range: 1500,
        ability: 'Causes this tower to attack up to 3 targets at once. Lasts 3 seconds.'
    },
    'laser': {
        name: "Laser / Phasor",
        elements: ['light', 'dark', 'earth'],
        damage: "6000 / 30000",
        speed: 0.66,
        range: 900,
        ability: 'Each additional creep within 400 range of the target will reduce damage by 10%. Max damage loss is 70%.'
    },
    'dark': {
        name: "Dark",
        elements: ['dark'],
        strong: 'water',
        weak: 'light',
        damage: "180 / 1170 / 7600 / 76000",
        speed: 1,
        range: 1150
    },
    'poison': {
        name: "Poison / Pollution / Pestilence",
        elements: ['dark', 'water'],
        damage: "200 / 1000 / 5000",
        speed: 1.0,
        range: 900,
        ability: 'Every fourth attack deals 3x additional damage within a 100/200 AoE.',
        aoe: '100 Full / 200 Half'
    },
    'disease': {
        name: "Disease / Decay / Death",
        elements: ['dark', 'nature'],
        damage: "([Max HP + Current HP] / Current HP) * (50 / 250 / 1250)",
        speed: 0.31,
        range: 550,
        ability: 'This tower deals damage based on percent of HP remaining. The lower the health, the more damage is dealt.'    
    },
    'magic': {
        name: "Magic / Sorcery / Wizardry",
        elements: ['dark', 'fire'],
        damage: "600 / 3000 / 15000",
        speed: 1,
        range: '1500 - 550',
        ability: ' Each attack causes its range to decrease by 75, down to a minimum of 550 range. Resets after 2 seconds of not firing.'    
    },
    'jinx': {
        name: "Jinx / Voodoo",
        elements: ['dark', 'nature', 'fire'],
        damage: "2600 / 13000",
        speed: 1,
        range: 700,
        ability: 'Curses enemy units in 300 AoE. Every 2.5 seconds, cursed units will take damage equal to a percentage of the HP they have lost since being cursed. Lasts 7.5 seconds.',
        amp: '10% / 30%'
    },
    'runic': {
        name: "Runic / Occult",
        elements: ['dark', 'fire', 'light'],
        damage: "1000 / 5000",
        speed: 1,
        range: 1150,
        ability: 'Causes this tower to attack all units within 200 range of the target. Lasts 3 seconds.',
        aoe: '100 Full / 200 Half'
    },
    'obliteration': {
        name: "Obliteration / Annihilation",
        elements: ['dark', 'light', 'nature'],
        damage: "1100 / 5500",
        speed: 1.5,
        range: 1150,
        ability: 'Attack splash AoE is based on distance of projectile travel. Splash starts out at 50 AoE and grows to 400 AoE.',
        aoe: '50 - 400'
    },
    'water': {
        name: "Water",
        strong: 'fire',
        weak: 'dark',
        elements: ['water'],
        damage: "60 / 390 / 2535 / 25350",
        speed: 0.66,
        range: 900,
        aoe: '100 Full / 200 Half'
    },
    'well': {
        name: "Well / Spring / Waterfall",
        elements: ['water', 'nature'],
        damage: "450 / 2250 / 11250",
        speed: 1.0,
        range: 900,
        ability: "Increases a friendly unit's attack rate for 60 seconds (15 second cooldown).",
        buff: '15% / 30% / 90% Bonus Attack Speed'
    },
    'vapor': {
        name: "Vapor / Mist / Steam",
        elements: ['water', 'fire'],
        damage: "20 / 100 / 500",
        speed: 1.0,
        range: 700,
        ability: "Units within 700 AoE of the tower will take damage. An additional aftershock of equal damage hits each unit within 350 AoE."
    },
    'windstorm': {
        name: "Windstorm / Monsoon",
        elements: ['water', 'fire', 'light'],
        damage: "300 / 1500 (per second)",
        speed: 5,
        range: 1150,
        ability: "Summons a fierce tornado that follows a target at 175 movement speed, slowing enemy units' movement speed and dealing damage per second in 550 AoE. Lasts 5 seconds.",
        aoe: '550',
        slow: '10% / 30%'
    },
    'polar': {
        name: "Polar / Ice Age",
        elements: ['water', 'light', 'earth'],
        damage: "1600 / 8000",
        speed: 1,
        range: 900,
        ability: "Autocast ability that temporarily burns away a portion of the target's current health. The target regains the health lost at the end of the duration, minus damage taken while frostbitten.",
        aoe: '100 Full / 200 Half',
        amp: '5% / 15%',
        burn: '10% / 30%'
    },
    'flooding': {
        name: "Flooding / Drowning",
        elements: ['water', 'dark', 'nature'],
        damage: "150 / 750 (per second)",
        speed: 1,
        range: 900,
        ability: 'Each attack creates an effect at the location of target creep. Effect damage per second in an AoE. Lasts 5 seconds.',
        aoe: 400
    },
    'tidal': {
        name: "Tidal / Tsunami",
        elements: ['water', 'nature', 'light'],
        damage: "500 / 2500",
        speed: 0.66,
        range: 700,
        ability: 'Every time this tower attacks it loses 10 AoE and gains 10% bonus damage, capping out at 100/200 AoE and 300% bonus damage after 30 attacks.',
        aoe: '200 Full / 400 Half'
    },
    'fire': {
        name: "Fire",
        elements: ['fire'],
        strong: 'nature',
        weak: 'water',
        damage: "17 / 110 / 720 / 7200",
        speed: 0.31,
        range: 550,
        aoe: '150 Full / 300 Half'
    },
    'blacksmith': {
        name: "Blacksmith / Forge / Foundry",
        elements: ['fire', 'earth'],
        damage: "450 / 2250 / 11250",
        speed: 1.0,
        range: 900,
        ability: "Increases a friendly unit's attack & ability damage for 60 seconds (15 second cooldown).",
        buff: "15% / 30% / 90% Bonus Attack Damage"
    },
    'electricity': {
        name: "Electricity / Lightning / Energy",
        elements: ['fire', 'light'],
        damage: "170 / 850 / 4250",
        speed: 1.0,
        range: 1150,
        ability: "Hurls a bolt of lightning that bounces up to 3 times, dealing full damage to the primary target. Each jump deals 20% less damage."
    },
    'flame': {
        name: "Flame / Solar / Sun",
        elements: ['fire', 'nature'],
        damage: "75 / 375 / 1875",
        speed: 0.66,
        range: 700,
        ability: "Each attack debuffs the target, dealing 40% damage per second in 200 AoE. Effect lasts 5 seconds. This effect stacks.",
        aoe: 200
    },
    'haste': {
        name: "Haste / Blitz",
        elements: ['fire', 'earth', 'water'],
        damage: "1000 / 5000",
        speed: 1,
        range: 900,
        ability: 'Each time this tower attacks, its attack rate is reduced by 0.05, down to a minimum of 0.25 (5 attacks per second).'
    },
    'erosion': {
        name: "Erosion / Corrosion",
        elements: ['fire', 'dark', 'water'],
        damage: "120 / 600 (per second)",
        speed: 1,
        range: 700,
        ability: 'Spews acid at a target, covering units in a 400 AoE. Acid increases damage taken and deals damage per second. Lasts 5 seconds.',
        aoe: 400,
        amp: '10% / 30%'
    },
    'flamethrower': {
        name: "Flamethrower / Flamespewer",
        elements: ['fire', 'dark', 'earth'],
        damage: "400 / 2000",
        speed: 0.66,
        range: 700,
        ability: 'Each attack adds a stack of napalm to the target. Each napalm stack will deal 500 / 2500 attack damage in an AoE when the unit dies. Napalm can stack indefinitely.',
        aoe: "150 Full / 300 Half",
    },
    'nature': {
        name: "Nature",
        elements: ['nature'],
        strong: 'earth',
        weak: 'fire',
        damage: "80 / 520 / 3380 / 33800",
        speed: 0.31,
        range: 700
    },
    'life': {
        name: "Life / Eternal / Soul Catcher",
        elements: ['nature', 'light'],
        damage: "280 / 1400 / 7000",
        speed: 0.66,
        range: 1150,
        ability: "Every 3/2/1 units this tower kills gives you an extra life. If you have full life, each extra life requires 3x as many kills (9/6/3).",
        targeting: 'Targets lowest HP creep in range'
    },
    'moss': {
        name: "Moss / Toadstool / Fungus",
        elements: ['nature', 'earth'],
        damage: "100 / 500 / 2500",
        speed: 0.66,
        range: 700,
        ability: "This tower deals damage based on percent of HP remaining. Damage is multiplied by (1 + (Current HP/Max HP)).",
        aoe: '150 Full / 300 Half',
        targeting: 'Targets highest HP creep in range'
    },
    'roots': {
        name: "Roots / Thorn",
        elements: ['nature', 'dark', 'earth'],
        damage: "100 / 500 (per second)",
        speed: 1,
        range: 900,
        ability: "Unleashes a shockwave of energy that entangles units within 300 range of its path. Entangled units will be slowed and will take damage over time. Lasts 5 seconds.",
        aoe: 300,
        slow: '10% / 30%'
    },
    'enchantment': {
        name: "Enchantment / Invocation",
        elements: ['nature', 'light', 'earth'],
        damage: "500 / 2500",
        speed: 0.31,
        range: 900,
        ability: "An autocast ability that amplifies damage taken by creeps. It amplifies more if there are fewer creeps near the target. Lasts 15 seconds.",
        aoe: '100 Full / 200 Half',
        amp: '5% / 15% Base, 15% / 45% Max'
    },
    'impulse': {
        name: "Impulse / Velocity",
        elements: ['nature', 'water', 'fire'],
        damage: "2250 / 11250",
        speed: 1,
        range: 1500,
        ability: "Attacks deal damage based on distance of projectile travel. Damage dealt is equal to (distance/1000)*damage"
    },
    'ephemeral': {
        name: "Ephemeral / Temporal",
        elements: ['nature', 'earth', 'water'],
        damage: "1800 / 9000",
        speed: 0.31,
        range: 700,
        ability: "Every 1.5 seconds that this tower is attacking, it will lose 10% damage. Damage loss is capped at 40%. After 2 seconds of not attacking or dropping below 40%, this tower returns to full damage."
    },
    'earth': {
        name: "Earth",
        elements: ['earth'],
        strong: 'light',
        weak: 'nature',
        damage: "45 / 295 / 1900 / 19000",
        speed: 1,
        range: 900,
        aoe: '200 Full / 400 Half'
    },
    'gunpowder': {
        name: "Gunpowder / Mortar / Vulcan",
        elements: ['earth', 'dark'],
        damage: "32 / 160 / 800",
        speed: 0.66,
        range: 1500,
        ability: "Each attack lobs an explosive bomb towards the target which explodes and fragments into 4 other bombs upon landing. Each bomb deals damage in an AoE.",
        aoe: '100 Full / 200 Half'
    },
    'hydro': {
        name: "Hydro / Spout / Geyser",
        elements: ['earth', 'water'],
        damage: "270 / 1350 / 6750",
        speed: 1,
        range: 900,
        ability: "Gives a 50% chance that an attack will mark the target with an effect. 1.5 seconds after being marked, the effect does damage in 250 AoE.",
        aoe: 250
    },
    'muck': {
        name: "Muck / Mire",
        elements: ['earth', 'dark', 'water'],
        damage: "800 / 4000",
        speed: 1,
        range: 700,
        ability: "Flings a volatile liquid that reduces movement speed of units within AoE of target. Lasts 5 seconds",
        slow: "10% / 30%",
        aoe: "150 Full / 300 Half"
    },
    'gold': {
        name: "Gold / Wealth",
        elements: ['earth', 'fire', 'light'],
        damage: "4000 / 20000",
        speed: 1.5,
        range: 1150,
        ability: "Every kill gives more bounty.",
        bounty: "25% / 50% Bonus",
        targeting: 'Targets lowest HP creep in range'
    },
    'quake': {
        name: "Quake / Seism",
        elements: ['earth', 'fire', 'nature'],
        damage: "600 / 3000",
        speed: 0.66,
        range: 550,
        ability: "Gives a 50% chance that an attack will send out a shockwave dealing damage to all units in range.",
        aoe: 550
    }
};