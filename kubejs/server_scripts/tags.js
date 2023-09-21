ServerEvents.tags('block', (event) => {
    event.add('minecraft:beacon_base_blocks', 'clutter:silver_block');
});

ServerEvents.tags('item', (event) => {
    event.add('farmersdelight:tools/knives', 'bakery:knives');

    // Froglight tag
    ['ochre', 'verdant', 'pearlescent'].forEach((froglight) => {
        ['minecraft', '#chipped'].forEach((tag) => {
            event.add('kubejs:froglights', `${tag}:${froglight}_froglight`);
        });
    });
});
