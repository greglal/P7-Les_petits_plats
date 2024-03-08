'use strict'

// ********** create recipes cards **********

/**
 * create ingredient div for cards
 * @param ingredient
 * @returns {HTMLDivElement}
 */
function createIngredientDiv(ingredient) {
    const ingredientDiv = document.createElement('div');
    const ingredientName = document.createElement('h4');
    const ingredientQuantity = document.createElement('p');

    ingredientName.textContent = ingredient.ingredient;
    ingredientName.classList.add('ingredient-name');

    if (ingredient.unit) {
        ingredientQuantity.textContent = `${ingredient.quantity} ${ingredient.unit}`;
    } else if (ingredient.quantity) {
        ingredientQuantity.textContent = `${ingredient.quantity}`;
    } else {
        ingredientQuantity.textContent = "";
    }

    ingredientQuantity.classList.add('ingredient-qty');
    ingredientDiv.classList.add('each-ingredient');

    ingredientDiv.appendChild(ingredientName);
    ingredientDiv.appendChild(ingredientQuantity);

    return ingredientDiv;
}

/**
 * create recipe card
 * @param recipe
 * @returns {HTMLElement}
 */
function createRecipeCard(recipe) {
    const recipesSection = document.querySelector('#recipes-cards');
    const recipeArticle = document.createElement('article');
    const recipeImg = document.createElement('img');
    const recipeContent = document.createElement('div');
    const recipeTitle = document.createElement('h2');
    const recipeSteps = document.createElement('div');
    const recipeIngredients = document.createElement('div');
    const recette = document.createElement('h3');
    const recetteDescription = document.createElement('p');
    const ingredientsTitle = document.createElement('h3');
    const ingredientsContent = document.createElement('div');

    recipeImg.setAttribute("src", `/assets/images/recettes/${recipe.image}`);

    recipeArticle.classList.add('recipe-article');
    recipeImg.classList.add('recipe-img');
    recipeContent.classList.add('recipe-content');
    recipeTitle.classList.add('recipe-title');
    recipeSteps.classList.add('recipe-steps');
    recipeIngredients.classList.add('recipe-ingredients');
    recette.classList.add('title-in-card');
    recetteDescription.classList.add('recipe-description');
    ingredientsTitle.classList.add('title-in-card');
    ingredientsContent.classList.add('ingredients-content');

    recipeTitle.textContent = `${recipe.name}`;
    recette.textContent = 'RECETTE';
    recetteDescription.textContent = `${recipe.description}`;
    ingredientsTitle.textContent = 'INGREDIENTS';

    recipesSection.appendChild(recipeArticle);
    recipeArticle.appendChild(recipeImg);
    recipeArticle.appendChild(recipeContent);
    recipeContent.appendChild(recipeTitle);
    recipeContent.appendChild(recipeSteps);
    recipeContent.appendChild(recipeIngredients);
    recipeSteps.appendChild(recette);
    recipeSteps.appendChild(recetteDescription);
    recipeIngredients.appendChild(ingredientsTitle);
    recipeIngredients.appendChild(ingredientsContent);

    recipe.ingredients.forEach(ingredient => {
        ingredientsContent.appendChild(createIngredientDiv(ingredient));
    });

    return recipeArticle;
}

// ********** create counter **********

/**
 * number of recipes
 * @param recipes
 */
function recipesCounter(recipes) {
    const counter = document.querySelector('#number-of-recipes');

    counter.textContent = `${recipes.length} recettes`;

    if(recipes.length === 0) {
        let input = document.getElementById('search-bar');
        const Section = document.querySelector('#recipes-cards');
        const noResult = document.createElement("div");
        const errMsg = document.createElement("p");
        noResult.classList.add("noResult");
        errMsg.classList.add("errMsg")
        errMsg.textContent =`Aucune recette ne contient "${input.value}", vous pouvez recherchez "tomate" ou "oignon" ...`
        Section.appendChild(noResult)
        noResult.appendChild(errMsg)
    }
}
