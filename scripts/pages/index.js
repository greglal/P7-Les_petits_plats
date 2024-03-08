'use strict'

function displayData(recipes) {
    for (let i = 0; i < recipes.length; i++) {
        createRecipeCard(recipes[i])
    }
}

async function init() {
    allRecipes = await getRecipes();

    displayData(allRecipes)
    recipesCounter(allRecipes)
    mainSearch(allRecipes)
    ingredientDropDown(allRecipes)
    applianceDropdown(allRecipes)
    ustensilsDropdown(allRecipes)

    return allRecipes

}

init()