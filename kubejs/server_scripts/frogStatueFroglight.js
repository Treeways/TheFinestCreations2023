ServerEvents.tags('item', (event) => {
    ['ochre', 'verdant', 'pearlescent'].forEach((froglight) => {
        ['minecraft', '#chipped'].forEach((tag) => {
            event.add('kubejs:froglights', `${tag}:${froglight}_froglight`);
        });
    });
});

ServerEvents.recipes((event) => {
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
