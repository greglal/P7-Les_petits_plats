'use strict'

function displayData(recipes) {
    for (let i = 0; i < recipes.length; i++) {
        createRecipeCard(recipes[i])
    }
}

async function init() {
    const recipes = await getRecipes();

    displayData(recipes)
    recipesCounter(recipes)
    mainSearch(recipes)
    ingredientTagList(recipes)
    applianceTagList(recipes)
    ustensilsTagList(recipes)

}

init()