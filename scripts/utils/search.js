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

        if(input.value.length >= 2) {
            recipesFiltered = recipes.filter(recipe => {
                return (
                    recipe.name.toLowerCase().includes(input.value.toLowerCase()) ||
                    recipe.description.toLowerCase().includes(input.value.toLowerCase()) ||
                    recipe.ingredients.some(ingredient => {
                        if (typeof ingredient === 'string') {
                            return ingredient.toLowerCase().includes(input.value.toLowerCase());
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
    })
    return recipesFiltered
}

/**
 * search by click on tag
 *
 * @param recipes
 * @param tagList
 */
function searchByTag(recipes){
    let recipesFiltered = [...recipes];

    // Si des tags sont sélectionnés
    if (tagList.length > 0) {
        recipesFiltered = recipesFiltered.filter(recipe => {
            let matchesAllTags = true;

            // Vérifie si la recette correspond à tous les tags sélectionnés
            for (const tag of tagList) {
                // Vérifie si le tag est présent dans les ingrédients
                if (recipe.ingredients.some(ingredient => ingredient.ingredient === tag)) {
                    continue; // Passe au tag suivant
                }
                // Vérifie si le tag est l'appareil
                if (recipe.appliance === tag) {
                    continue; // Passe au tag suivant
                }
                // Vérifie si le tag est dans les ustensiles
                if (recipe.ustensils.includes(tag)) {
                    continue; // Passe au tag suivant
                }
                // Si le tag n'est pas trouvé, la recette ne correspond pas à tous les tags
                matchesAllTags = false;
                break; // Sort de la boucle
            }
            return matchesAllTags; // Renvoie true si la recette correspond à tous les tags
        });
    }

    recipesActualisation(recipesFiltered);
    ingredientTagList(recipesFiltered)
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