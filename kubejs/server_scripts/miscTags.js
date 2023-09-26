ServerEvents.tags('block', (event) => {
    event.add('minecraft:beacon_base_blocks', 'clutter:silver_block');

    event.add('bakery:allows_cooking', 'farmersdelight:stove');
    event.add('candlelight:allows_cooking', 'farmersdelight:stove');
    event.add('c:allows_cooking', 'farmersdelight:stove')
});

ServerEvents.tags('item', (event) => {
    event.add('farmersdelight:tools/knives', 'bakery:knives');

    event.add('c:chocolate', 'create:bar_of_chocolate');
});
