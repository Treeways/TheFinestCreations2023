ServerEvents.tags('item', (event) => {
    event.add('kubejs:tomato_sauce', ['candlelight:tomato_soup', 'farmersdelight:tomato_sauce'])
})

ServerEvents.recipes((event) => {
    // event.replaceInput(
    //     {input: 'candlelight:tomato_soup'},
    //     'candlelight:tomato_soup',
    //     '#kubejs:tomato_sauce'
    // );
    
    // event.replaceInput(
    //     {input: 'farmersdelight:tomato_sauce'},
    //     'farmersdelight:tomato_sauce',
    //     '#kubejs:tomato_sauce'
    // );
})