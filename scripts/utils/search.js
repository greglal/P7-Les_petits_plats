'use strict'

/**
 * search with search bar
 *
 * @param recipes
 * @returns {[]}
 */
function mainSearch(recipes) {
    let input = document.getElementById('search-bar');
    let searchIcon = document.querySelector('#search-icon');

    input.addEventListener('keyup', (e) => {
        e.preventDefault();
        search(recipes, input.value)
    })

    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        search(recipes, input.value)
    })

}

/**
 * search function
 *
 * @param recipes
 * @param value
 * @returns {[]}
 */
function search(recipes, value){
    if(value.length >= 2) {
        recipesFiltered = recipes.filter(recipe => {
            return (
                recipe.name.toLowerCase().includes(value.toLowerCase()) ||
                recipe.description.toLowerCase().includes(value.toLowerCase()) ||
                recipe.ingredients.some(ingredient => {
                    if (typeof ingredient === 'string') {
                        return ingredient.toLowerCase().includes(value.toLowerCase());
                    } else {
                        return false;
                    }
                })
            );
        })
        recipesActualisation(recipesFiltered)
    } else {
        recipesActualisation(recipes);
    }
    return recipesFiltered
}

/**
 * search by click on tag
 *
 * @param recipes
 */
function searchByTag(recipes){
    let recipesFiltered = [...recipes];

    // if tags are selected
    if (tagList.length > 0) {
        recipesFiltered = recipesFiltered.filter(recipe => {
            let matchesAllTags = true;

            // check if recipes matches to selected tags
            for (const tag of tagList) {
                // check if selected tag is in ingredients
                if (recipe.ingredients.some(ingredient => ingredient.ingredient === tag)) {
                    continue;
                }
                // check if selected tag is in appliances
                if (recipe.appliance === tag) {
                    continue;
                }
                // check if selected taf is in ustensils
                if (recipe.ustensils.includes(tag)) {
                    continue;
                }
                // if no matches
                matchesAllTags = false;
                break;
            }
            return matchesAllTags;
        });
        recipesActualisation(recipesFiltered);
        ingredientDropDown(recipesFiltered)
        applianceDropdown(recipesFiltered)
        ustensilsDropdown(recipesFiltered)
    } else if(tagList.length ===0){
        recipesActualisation(allRecipes)
        ingredientDropDown(allRecipes)
        applianceDropdown(allRecipes)
        ustensilsDropdown(allRecipes)
    }

    return recipesFiltered;
}

/**
 * actualize recipes-cards section
 *
 * @param recipes
 */
function recipesActualisation(recipes) {
    const recipesSection = document.querySelector('#recipes-cards');
    recipesSection.innerHTML ='';

    recipes.forEach((recipe) => {
        createRecipeCard(recipe);
    })

    // reset recipes counter
    recipesCounter(recipes)

}