ServerEvents.recipes((event) => {
    event.remove({ output: /hopper/, mod: 'botanypots' });

    // Remove recipes by ID
    [
        'bodacious_berries:berry_harvester',
        'wiredredstone:redstone_assembler',
        'clutter:clutter_recipe_book',
    ].forEach((recipeID) => {
        event.remove({ id: recipeID });
    });

    event.custom(
        {
            type: 'minecraft:crafting_shaped',
            group: 'wood_fired_oven',
            pattern: [
                'I I',
                'BIB',
                'BWB',
            ],
            key: {
                I: {
                    item: 'minecraft:iron_ingot',
                },
                B: {
                    item: 'minecraft:bricks',
                },
                W: {
                    item: 'minecraft:water_bucket',
                },
            },
            result: {
                item: 'bakery:kitchen_sink',
            },
        },
    ).replaceIngredient('minecraft:water_bucket', 'minecraft:air')
        .id('bakery:kitchen_sink');

    // [
    //     'ochre', 'verdant', 'pearlescent',
    // ].forEach((froglight) => {
    event.custom({
        type: 'minecraft:crafting_shaped',
        pattern: [
            'SSS',
            'SFS',
        ],
        key: {
            S: {
                item: 'minecraft:stone',
            },
            F: {
                tag: 'kubejs:froglights',
            },
        },
        result: {
            item: 'clutter:frog_statue',
            count: 1,
        },
    }).id('kubejs:clutter/frog_statue_froglight');
});
