ServerEvents.recipes((event) => {
    // Remove hopper botany pot recipes
    event.remove({ output: /hopper/, mod: 'botanypots' });
    // Emergency Buttons' sounds are incompatible with Extreme Sound Muffler for some reason,
    // which causes a fatal packet crash
    event.remove({ output: /emergency/, mod: 'infinitybuttons' });

    // Remove recipes by ID
    [
        'clutter:clutter_recipe_book',
    ].forEach((recipeID) => {
        event.remove({ id: recipeID });
    });

    // Kitchen sink should have water in the recipe
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
    ).replaceIngredient('minecraft:water_bucket', 'minecraft:air') // FIXME: replaceIngredient doesn't work on Quilt
        .id('bakery:kitchen_sink');
});
