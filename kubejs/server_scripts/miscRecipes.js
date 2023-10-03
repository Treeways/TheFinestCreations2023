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
                'ICI',
                'BBB',
            ],
            key: {
                I: {
                    item: 'minecraft:iron_ingot',
                },
                B: {
                    item: 'minecraft:bricks',
                },
                C: {
                    item: 'minecraft:cauldron',
                },
            },
            result: {
                item: 'bakery:kitchen_sink',
            },
        },
    ).id('bakery:kitchen_sink');

    event.custom({
        type: 'minecraft:smelting',
        cookingtime: 200,
        experience: 0.0,
        ingredient: { tag: 'minecraft:planks' },
        result: 'supplementaries:ash',
    });

    event.shapeless(Item.of('farmersdelight:tomato_seeds'), ['candlelight:tomato_seeds']);
    event.remove({ id: 'candlelight:seeds_tomato' });
    event.shapeless(Item.of('farmersdelight:tomato'), ['candlelight:tomato']);
});
