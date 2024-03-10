'use strict'

/**
 * create div with choosen tag name
 *
 * @param tag
 * @param parentTag
 * @param item
 * @param recipes
 */
function displayChoosenTag(tag, parentTag, item, recipes) {
    tag.innerHTML = `<div class="tags"><p class= "tag">${item.textContent}</p>
                                        <i class="fa-solid fa-xmark close-cross"></i></div>`;
    tag.classList.add('tag-choosen');
    parentTag.appendChild(tag);
    searchByTag(recipes);
    closeTag(tag, recipes)
}

/**
 * close tag when clic on cross
 *
 * @param tag
 * @param recipes
 */
function closeTag(tag, recipes) {
    const closeTag = tag.querySelector('.close-cross');

    closeTag.addEventListener('click',(e)=> {
        e.preventDefault();
        tag.style.display = "none"

        // del tag in tagList
        const tagName = tag.querySelector('.tag').textContent;
        tagList = tagList.filter(tag => tag!==tagName)

        searchByTag(recipes)
    })
}

/**
 * search bar into dropdown menu
 *
 * @param tagList
 * @param container
 * @param bar
 * @param dot
 */
function searchIngTagList(tagList, container, bar, dot) {
    const searchTagListInput = document.querySelector(bar);
    const tags = container.querySelectorAll(dot);

    searchTagListInput.addEventListener("input", (e)=> {
        const searchedString = e.target.value.trim().toLowerCase();tags.forEach(tag => {
            const tagName = tag.textContent.toLowerCase();
            if (tagName.includes(searchedString)) {
                tag.style.display = "block";
            } else {
                tag.style.display = "none";
            }
        });
    });
}

/**
 * open ingredients dropdown menu
 *
 * @param recipes
 */
function ingredientDropDown(recipes){
    const ingredientFilterBtn = document.getElementById('ingredients-tag-btn');
    const ingredientsContainer = document.getElementById('ingredients-btn-container');
    let clicked = false;

    //open or close tag list div
    ingredientFilterBtn.addEventListener('click', () => {
        if (clicked === false) {
            ingredientsContainer.style.display = "block";
            clicked = true;
        } else {
            ingredientsContainer.style.display = "none";
            clicked = false;
        }

        ingredientTagList(recipes)


        // display tag selected
        const ingItems = document.querySelectorAll('.ing');

        ingItems.forEach((item)=> {
            item.addEventListener('click', ()=> {
                const tagChoosen = document.createElement("div");
                const tagSelected = document.querySelector('#tag-selected');
                tagList.push(item.textContent)

                // close dropdown menu
                ingredientsContainer.style.display = "none";
                clicked = false;

                // display tag & filter recipes
                displayChoosenTag(tagChoosen, tagSelected, item, recipes)
            })
        })
    })
}

/**
 * create ingredients list in dropdown menu
 *
 * @param recipes
 * @returns {any[]}
 */
function ingredientTagList(recipes){
    const ingredientsTagContainer = document.querySelector('#ingredients-dropdown');
    let setIngTagList = new Set();

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => setIngTagList.add(ingredient.ingredient));
    });

    let ingTagList = [...setIngTagList];

    // Clear previous content of the container
    ingredientsTagContainer.innerHTML = '';

    // create ingredients list
    ingTagList.forEach((item) => {
        ingredientsTagContainer.innerHTML += `<li class="ing">${item}</li>`;

    });

    // search bar in tag list
    searchIngTagList(ingTagList, ingredientsTagContainer, '#ingredients-tag-search', '.ing')
    return ingTagList
}

/**
 * open appliances dropdown menu
 *
 * @param recipes
 */
function applianceDropdown(recipes){
    const applianceContainer = document.querySelector('#appareils-container');
    const applianceFilterBtn = document.querySelector('#appareils-tag-btn');

    let clicked = false;

    //open or close tag list div
    applianceFilterBtn.addEventListener('click', () => {
        if (clicked === false) {
            applianceContainer.style.display = "block";
            clicked = true;
        } else {
            applianceContainer.style.display = "none";
            clicked = false;
        }

        appliancTagList(recipes)

        // display tag selected
        const appItems = document.querySelectorAll('.app');

        appItems.forEach((item)=> {
            item.addEventListener('click', ()=> {
                const tagChoosen = document.createElement("div");
                const tagSelected = document.querySelector('#tag-selected');
                tagList.push(item.textContent)



                // close dropdown menu
                applianceContainer.style.display = "none";
                clicked = false;

                // display tag & filter recipes
                displayChoosenTag(tagChoosen, tagSelected, item, recipes)
            })
        })
    })
}

/**
 * create appliances list in dropdown menu
 *
 * @param recipes
 * @returns {any[]}
 */
function appliancTagList(recipes){
    const applianceTagContainer = document.querySelector(`#appareils-dropdown`);
    let setApplianceTagList = new Set();

    recipes.forEach((recipe) =>{
        setApplianceTagList.add(recipe.appliance)
    })

    let appTagList = [...setApplianceTagList];

    // Clear previous content of the container
    applianceTagContainer.innerHTML = '';

    // create appliances list
    appTagList.forEach((item)=>{
        applianceTagContainer.innerHTML += `<li class="app">${item}</li>`;
    })

    // search bar in tag list
    searchIngTagList(appTagList, applianceTagContainer, '#appareils-tag-search', '.app')

    return appTagList


}

/**
 * open ustensils dropdown menu
 *
 * @param recipes
 */
function ustensilsDropdown(recipes){
    const ustensilsFilterBtn = document.querySelector('#ustensiles-tag-btn');
    const ustensilesContainer = document.querySelector('#ustensiles-container');

    let clicked = false;

    //open or close tag list div
    ustensilsFilterBtn.addEventListener('click', () => {
        if (clicked === false) {
            ustensilesContainer.style.display = "block";
            clicked = true;
        } else {
            ustensilesContainer.style.display = "none";
            clicked = false;
        }

        ustensilsTagList(recipes)

        // display tag selected
        const ustItems = document.querySelectorAll('.ust');

        ustItems.forEach((item)=> {
            item.addEventListener('click', ()=> {
                const tagChoosen = document.createElement("div");
                const tagSelected = document.querySelector('#tag-selected');
                tagList.push(item.textContent)

                // close dropdown menu
                ustensilesContainer.style.display = "none";
                clicked = false;

                // display tag & filter recipes
                displayChoosenTag(tagChoosen, tagSelected, item, recipes)
            })
        })
    })
}

/**
 * create ustensils list in dropdown menu
 *
 * @param recipes
 * @returns {any[]}
 */
function ustensilsTagList(recipes) {
    const ustensilsTagContainer = document.querySelector('#ustensiles-dropdown');
    let setUstensilTagList = new Set();

    recipes.forEach((recipe) =>{
        recipe.ustensils.forEach((ustensil)=> setUstensilTagList.add(ustensil))
    })

    let ustTagList = [...setUstensilTagList]

    // Clear previous content of the container
    ustensilsTagContainer.innerHTML = '';

    // create ustensils list
    ustTagList.forEach((item)=>{
        ustensilsTagContainer.innerHTML += `<li class="ust">${item}</li>`;
    })

    // search bar in tag list
    searchIngTagList(ustTagList, ustensilsTagContainer, '#ustensiles-tag-search', '.ust')

    return ustTagList

}

