ServerEvents.recipes((event) => {

    // Recipe Removal
    event.remove({output: 'candlelight:carrot_crate'});
    event.remove({output: 'candlelight:tomato_crate'});
    event.remove({output: 'candlelight:potato_crate'});
    event.remove({output: 'candlelight:beetroot_crate'});

    // Stonecutting
    event.stonecutting('candlelight:carrot_crate', 'farmersdelight:carrot_crate');
    event.stonecutting('farmersdelight:carrot_crate', 'candlelight:carrot_crate');

    event.stonecutting('candlelight:tomato_crate', 'farmersdelight:tomato_crate');
    event.stonecutting('farmersdelight:tomato_crate', 'candlelight:tomato_crate');

    event.stonecutting('candlelight:potato_crate', 'farmersdelight:potato_crate');
    event.stonecutting('farmersdelight:potato_crate', 'candlelight:potato_crate');

    event.stonecutting('candlelight:beetroot_crate', 'farmersdelight:beetroot_crate');
    event.stonecutting('farmersdelight:beetroot_crate', 'candlelight:beetroot_crate');

    // Tomato Fix
    event.remove({id: 'candlelight:tomato'});
    event.shapeless(
        Item.of('farmersdelight:tomato', 9), ['candlelight:tomato_crate']
    );


})