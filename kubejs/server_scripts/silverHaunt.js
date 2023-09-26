ServerEvents.recipes((event) => {
    // Haunting recipe for iron -> silver ingots/blocks/nuggets/ores
    [
        'ingot', 'nugget', 'block', 'ore',
    ].forEach((metalType) => {
        event.custom({
            type: 'create:haunting',
            ingredients: [
                {
                    item: `minecraft:iron_${metalType}`,
                },
            ],
            results: [
                {
                    item: `clutter:silver_${metalType}`,
                },
            ],
        });
    });

    [
        ['raw', 'block'],
        ['deepslate', 'ore'],
    ].forEach((metalTypeGroup) => {
        event.custom({
            type: 'create:haunting',
            ingredients: [
                {
                    item: `minecraft:${metalTypeGroup[0]}_iron_${metalTypeGroup[1]}`,
                },
            ],
            results: [
                {
                    item: `clutter:${metalTypeGroup[0]}_silver_${metalTypeGroup[1]}`,
                },
            ],
        });
    });
});
