'use strict'

/**
 * get recipes from json
 *
 * @returns {Promise<() => Promise<any>>}
 */
async function getRecipes(){
    const response = await fetch('../data/recipes.json');
    const datas = await response.json();
    const recipes = datas.recipes

    return recipes;
}

/**
 * Ingredients isolation in an array
 *
 * @param recipes
 * @returns {any[]}
 */
function getIngredients(recipes) {
    let ingredients = []

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((recipeIngredient) => {
            let recetteIngredient = recipeIngredient.ingredient;
            let recetteIngredientConverted = recetteIngredient.toLowerCase();
            ingredients.push(recetteIngredientConverted);
        })
    });
    return [...new Set(ingredients)];
}

/**
 * appliance isolation in an array
 *
 * @param recipes
 * @returns {*[]}
 */
function getAppliance(recipes) {
    let appliance = [];

    recipes.forEach((recipe)=>{
        let recipeAppliances = recipe.appliance;
        let recipeApplianceConverted = recipeAppliances.toLowerCase();
        appliance.push(recipeApplianceConverted)
    });
    return [...new Set(appliance)];
}

/**
 * Ustensils isolation in an array
 *
 * @param recipes
 * @returns {string[]}
 */
function getUstensils(recipes) {
    let ustensils = [];

    recipes.forEach((recipe) => {
        let recipeUstensils = recipe.ustensils;

        recipeUstensils.forEach((recipeUstensil) => {
            let recetteUstensilsConverted = recipeUstensil.toLowerCase();
            ustensils.push(recetteUstensilsConverted);
        });
    });

    return [...new Set(ustensils)]; // Remove duplicates
}