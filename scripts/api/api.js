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
