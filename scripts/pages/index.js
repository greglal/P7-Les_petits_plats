'use strict'

function displayData(recipes) {
    recipes.forEach((recipe) => {
        createRecipeCard(recipe)
    })
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