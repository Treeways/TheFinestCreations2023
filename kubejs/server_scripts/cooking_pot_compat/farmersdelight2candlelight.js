ServerEvents.recipes((event) => {
    event.forEachRecipe({ type: 'farmersdelight:cooking' }, (recipe) => {
        // Null-checking everything as a paranoid safety precaution!
        // We really don't want to risk a KubeJS error by trying to access null values.
        if (recipe.json.get('result') === false) {
            console.error('[ERROR] Found recipe that has no result!');
            return 1;
        }
        if (recipe.json.get('result').has('item') === false) {
            console.error('[ERROR] Found recipe that has no resulting item!');
            return 1;
        }
        if (recipe.json.has('ingredients') === false) {
            console.error('[ERROR] Found recipe that has no ingredients!');
            return 1;
        }

        // Get the recipe item and iterate upon its item stack
        const foodItem = recipe.json.get('result').get('item');
        Ingredient.of(foodItem).stacks.toArray().forEach((itemstack) => {
            // Don't add recipes for items that don't have containers
            if (itemstack.getRecipeRemainder().id === 'minecraft:air') return;
            // Get each Farmer's Delight cooking recipe with the result to convert
            // Take the Farmer's Delight ingredients and place it into our new data format
            const recipeOut = {
                type: 'candlelight:pot_cooking',
                ingredients: recipe.json.get('ingredients'),
                container: {
                    item: itemstack.getRecipeRemainder().id,
                },
                result: {
                    item: foodItem,
                },
            };

            // If the original recipe has an output count, add it to the new one.
            // More null checks here
            if (recipe.json.get('result').has('count') === true) {
                let intParseFail = false;
                let recipeCount = 1;
                recipeCount = parseInt(recipe.json.get('result').get('count'), 10);
                try {
                    recipeCount = parseInt(recipe.json.get('result').get('count'), 10);
                } catch (e) {
                    intParseFail = true;
                }
                if (!intParseFail) {
                    recipeOut.result.count = recipeCount;
                }
            }

            event.custom(recipeOut).id(`kubejs:candlelight/cooking/${itemstack.id.split(':')[1]}`);
        });
    });
});
