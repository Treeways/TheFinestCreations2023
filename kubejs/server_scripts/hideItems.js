/**
 *
 * @param {Array<string>} itemsToHide
 * Takes a list of item ids and hides them from EMI.
 */
function emiHideItems(itemsToHide) {
    // console.info('Hiding items from EMI...');

    // == Hide low-level enchants and modified potions

    const obj = {
        removed: [],
    };

    itemsToHide.forEach((i) => {
        obj.removed.push(`item:${i}`);
    });

    JsonIO.write('kubejs/assets/emi/index/stacks/example_hidden_stacks.json', obj);
}

const exampleList = ['minecraft:stone', 'minecraft:dirt'];

emiHideItems(exampleList);
