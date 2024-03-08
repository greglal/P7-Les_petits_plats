'use strict'

function displayData(recipes) {
    recipes.forEach((recipe) => {
        createRecipeCard(recipe)
    })
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