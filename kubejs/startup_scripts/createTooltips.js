/*
https://github.com/CelestialAbyss/Create-Customized/blob/main/kubejs_1902/startup_scripts/create_tooltip_client_init.js
This script NEEDS to go inside kubejs/startup_scripts.

Here are all the currently supported palettes as of 0.5.1c.

STANDARD_CREATE
---
BLUE
GREEN
YELLOW
RED
PURPLE
GRAY
---
ALL_GRAY
GRAY_AND_BLUE
GRAY_AND_WHITE
GRAY_AND_GOLD
GRAY_AND_RED
---

Include this in one lang JSON file located in kubejs/assets/lang/en_us.json
{
    "item.create.example_item.tooltip": "Polaroid Camera",
    "item.create.example_item.tooltip.summary": "A brief description of the item. _Underscores_ highlight a term.",
    "item.create.example_item.tooltip.condition1": "When this",
    "item.create.example_item.tooltip.behaviour1": "Then this item does this. (behaviours show on shift)",
    "item.create.example_item.tooltip.condition2": "And When this",
    "item.create.example_item.tooltip.behaviour2": "You can add as many behaviours as you like",
    "item.create.example_item.tooltip.control1": "When Ctrl pressed",
    "item.create.example_item.tooltip.action1": "These controls are displayed.",
}
*/

const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier');
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier');
const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette');

/**
 *
 * @param {string} itemID
 */
function STANDARD(itemID) {
    $TooltipModifier.REGISTRY.register(
        itemID,
        new $ItemDescription(itemID, $Palette.STANDARD_CREATE),
    );
}

ClientEvents.init((event) => {
    STANDARD('polaroidcamera:camera');
});
