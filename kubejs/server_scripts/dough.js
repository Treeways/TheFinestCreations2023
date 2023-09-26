ServerEvents.recipes((event) => {
    event.remove({ output: 'candlelight:dough' });
    event.remove({ output: 'bakery:dough' });

    event.custom(
        {
            type: 'create:mixing',
            ingredients: [
                {
                    tag: 'c:wheat_flour',
                },
                {
                    amount: 81000,
                    fluid: 'minecraft:water',
                    nbt: {},
                },
            ],
            results: [
                {
                    item: 'farmersdelight:wheat_dough',
                },
            ],
        },
    ).id('create:mixing/dough_by_mixing');

    event.custom(
        {
            type: 'create:splashing',
            ingredients: [
                {
                    tag: 'c:wheat_flour',
                },
            ],
            results: [
                {
                    item: 'farmersdelight:wheat_dough',
                },
            ],
        },
    ).id('create:splashing/wheat_flour');

    event.custom(
        {
            type: 'minecraft:crafting_shapeless',
            category: 'misc',
            ingredients: [
                {
                    tag: 'c:wheat_flour',
                },
                {
                    item: 'minecraft:water_bucket',
                },
            ],
            result: {
                item: 'farmersdelight:wheat_dough',
            },
        },
    ).id('create:crafting/appliances/dough');
});
