ServerEvents.recipes((event) => {
    event.custom(
        {
            type: 'candlelight:pot_cooking',
            ingredients: [
                {
                    item: 'minecraft:brown_mushroom',
                },
                {
                    item: 'minecraft:red_mushroom',
                },
            ],
            container: {
                item: 'minecraft:bowl',
            },
            result: {
                item: 'minecraft:mushroom_stew',
                count: 1,
                experience: 0.4,
            },
        },
    );

    event.custom(
        {
            type: 'candlelight:pot_cooking',
            ingredients: [
                {
                    item: 'minecraft:beetroot',
                },
                {
                    item: 'minecraft:beetroot',
                },
                {
                    item: 'minecraft:beetroot',
                },
            ],
            container: {
                item: 'minecraft:bowl',
            },
            result: {
                item: 'minecraft:beetroot_soup',
                count: 1,
                experience: 0.4,
            },
        },
    );

    event.custom(
        {
            type: 'candlelight:pot_cooking',
            ingredients: [
                {
                    item: 'minecraft:baked_potato',
                },
                {
                    item: 'minecraft:rabbit',
                },
                {
                    item: 'minecraft:carrot',
                },
                {
                    tag: 'c:mushrooms',
                },
            ],
            container: {
                item: 'minecraft:bowl',
            },
            result: {
                item: 'minecraft:rabbit_stew',
                count: 1,
                experience: 0.4,
            },
        },
    );

    event.custom(
        {
            type: 'candlelight:pot_cooking',
            ingredients: [
                {
                    item: 'farmersdelight:rice',
                },
                {
                    item: 'farmersdelight:onion',
                },
                {
                    item: 'minecraft:brown_mushroom',
                },
                {
                    item: 'minecraft:potato',
                },
                {
                    tag: 'minecraft:fox_food',
                },
                {
                    tag: 'c:vegetables',
                },
            ],
            container: {
                item: 'minecraft:pumpkin',
            },
            result: {
                item: 'farmersdelight:stuffed_pumpkin_block',
                count: 1,
                experience: 0.4,
            },
        },
    );
});
