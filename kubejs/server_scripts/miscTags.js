ServerEvents.tags('block', (event) => {
    event.add('minecraft:beacon_base_blocks', 'clutter:silver_block');

    event.add('bakery:allows_cooking', 'farmersdelight:stove');
    event.add('candlelight:allows_cooking', 'farmersdelight:stove');
    event.add('c:allows_cooking', 'farmersdelight:stove');

    event.add('create:non_movable', '@chunkloaders');
});

ServerEvents.tags('item', (event) => {
    event.add('farmersdelight:straw_harvesters', 'bakery:bread_knife');
    event.add('c:tools/knives', 'bakery:bread_knife');
    event.add('bakery:knives', '#c:tools/knives');

    event.add('c:chocolate', 'create:bar_of_chocolate');

    event.add('kubejs:tomato_sauce', ['candlelight:tomato_soup', 'farmersdelight:tomato_sauce']);
});
