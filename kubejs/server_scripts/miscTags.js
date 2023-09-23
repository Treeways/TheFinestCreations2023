ServerEvents.tags('block', (event) => {
    event.add('minecraft:beacon_base_blocks', 'clutter:silver_block');
});

ServerEvents.tags('item', (event) => {
    event.add('farmersdelight:straw_harvesters', 'bakery:bread_knife');
    event.add('c:tools/knives', 'bakery:bread_knife');
    event.add('bakery:knives', '#c:tools/knives');
    event.add('trinkets:chest/cape', 'umu_backpack:backpack');
});
