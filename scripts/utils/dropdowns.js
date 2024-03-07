'use strict'

/**
 * create div with choosen tag name
 *
 * @param tag
 * @param parentTag
 */
function displayChoosenTag(tag, parentTag, item, recipes) {
    tag.innerHTML = `<div class="tags"><p class= "tag">${item.textContent}</p>
                                        <i class="fa-solid fa-xmark close-cross"></i></div>`;
    tag.classList.add('tag-choosen');
    parentTag.appendChild(tag);
    searchByTag(recipes)
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

        if(tagList.length >0) {
            searchByTag(recipes)
        }else{
            recipesActualisation(recipes)
        }

    })
}

/**
 * search bar into dropdown menu
 *
 * @param tagList
 * @param container
 */
function searchIngTagList(tagList, container, bar) {
    const searchTagListInput = document.querySelector(bar);

    searchTagListInput.addEventListener("input", (e)=> {
        container.innerHTML = "";
        const searchedString = e.target.value.toLowerCase();
        const filteredArr = tagList.filter(el => el.toLowerCase().includes(searchedString));
        let tag

        for (let i = 0; i < filteredArr.length; i++) {
            tag = filteredArr[i];
            container.innerHTML += `<li class="ing">${tag}</li>`;

        }
    })


}

/**
 * create ingredients list in dropdown menu
 *
 * @param recipes
 */
function ingredientTagList(recipes){
    const ingredientsTagContainer = document.querySelector('#ingredients-dropdown');
    const ingredientFilterBtn = document.getElementById('ingredients-tag-btn');
    const ingredientsContainer = document.getElementById('ingredients-btn-container');

    let clicked = false;
    let setIngTagList = new Set();

    //open or close tag list div
    ingredientFilterBtn.addEventListener('click', () => {
        if (clicked ===
            false) {
            ingredientsContainer.style.display =
                "block";
            clicked =
                true;
        } else {
            ingredientsContainer.style.display =
                "none";
            clicked =
                false;
        }

        // Look if recipes list filtered after search
        if (recipesFiltered.length >
            0) {
            recipesFiltered.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => setIngTagList.add(ingredient.ingredient));
            });
        } else {
            recipes.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => setIngTagList.add(ingredient.ingredient));
            });
        }

        let ingTagList = [...setIngTagList];

        // Clear previous content of the container
        ingredientsTagContainer.innerHTML = '';

        // create ingredients list
        ingTagList.forEach((item) => {
            ingredientsTagContainer.innerHTML += `<li class="ing">${item}</li>`;

        });

        // display tag selected
        const ingItems = document.querySelectorAll('.ing');

        ingItems.forEach((item)=> {
            item.addEventListener('click', ()=> {
                const tagChoosen = document.createElement("div");
                const tagSelected = document.querySelector('#tag-selected');
                tagList.push(item.textContent)
                console.log(tagList)

                // search bar in tag list
                searchIngTagList(ingTagList, ingredientsTagContainer, '#ingredients-tag-search')

                // close dropdown menu
                ingredientsContainer.style.display = "none";
                clicked = false;

                // display tag & filter recipes
                if(recipesFiltered.length>0){
                    displayChoosenTag(tagChoosen, tagSelected, item, recipesFiltered)
                    closeTag(tagChoosen, recipesFiltered)
                }else {
                    displayChoosenTag(tagChoosen, tagSelected, item, recipes)
                    closeTag(tagChoosen, recipes)
                }
            })
        })



    })
}

/**
 * create appliances list in dropdown menu
 *
 * @param recipes
 */
function applianceTagList(recipes){
    const applianceTagContainer = document.querySelector(`#appareils-dropdown`);
    const applianceContainer = document.querySelector('#appareils-container');
    const applianceFilterBtn = document.querySelector('#appareils-tag-btn');
    let setApplianceTagList = new Set();

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

        // Look if recipes list filtered after search
        if(recipesFiltered.length >0){
            recipesFiltered.forEach((recipe) =>{
                setApplianceTagList.add(recipe.appliance)
            })
        } else {
            recipes.forEach((recipe) =>{
                setApplianceTagList.add(recipe.appliance)
            })
        }

        let appTagList = [...setApplianceTagList];

        // Clear previous content of the container
        applianceTagContainer.innerHTML = '';

        // create appliances list
        appTagList.forEach((item)=>{
            applianceTagContainer.innerHTML += `<li class="app">${item}</li>`;
        })

        // display tag selected
        const appItems = document.querySelectorAll('.app');

        appItems.forEach((item)=> {
            item.addEventListener('click', ()=> {
                const tagChoosen = document.createElement("div");
                const tagSelected = document.querySelector('#tag-selected');
                tagList.push(item.textContent)
                console.log(tagList)

                // search bar in tag list
                searchIngTagList(appTagList, applianceTagContainer, '#appareils-tag-search')

                // close dropdown menu
                applianceContainer.style.display = "none";
                clicked = false;

                // display tag & filter recipes
                if(recipesFiltered.length>0){
                    displayChoosenTag(tagChoosen, tagSelected, item, recipesFiltered)
                    closeTag(tagChoosen, recipesFiltered)
                }else {
                    displayChoosenTag(tagChoosen, tagSelected, item, recipes)
                    closeTag(tagChoosen, recipes)
                }
            })
        })


    })
}

/**
 * create ustensils list in dropdown menu
 *
 * @param recipes
 */
function ustensilsTagList(recipes){
    const ustensilsTagContainer = document.querySelector('#ustensiles-dropdown');
    const ustensilsFilterBtn = document.querySelector('#ustensiles-tag-btn');
    const ustensilesContainer = document.querySelector('#ustensiles-container');
    let setUstensilTagList = new Set();

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

        // Look if recipes list filtered after search
        if(recipesFiltered.length >0){
            recipesFiltered.forEach((recipe) =>{
                recipe.ustensils.forEach((ustensil)=> setUstensilTagList.add(ustensil))
            })
        } else {
            recipes.forEach((recipe) =>{
                recipe.ustensils.forEach((ustensil)=> setUstensilTagList.add(ustensil))
            })
        }

        let ustensilTagList = [...setUstensilTagList]

        // Clear previous content of the container
        ustensilsTagContainer.innerHTML = '';

        // create ustensils list
        ustensilTagList.forEach((item)=>{
            ustensilsTagContainer.innerHTML += `<li class="ust">${item}</li>`;
        })

        // display tag selected
        const ustItems = document.querySelectorAll('.ust');

        ustItems.forEach((item)=> {
            item.addEventListener('click', ()=> {
                const tagChoosen = document.createElement("div");
                const tagSelected = document.querySelector('#tag-selected');
                tagList.push(item.textContent)
                console.log(tagList)

                // search bar in tag list
                searchIngTagList(ustensilTagList, ustensilsTagContainer, '#ustensiles-tag-search')

                // close dropdown menu
                ustensilesContainer.style.display = "none";
                clicked = false;

                // display tag & filter recipes
                if(recipesFiltered.length>0){
                    displayChoosenTag(tagChoosen, tagSelected, item, recipesFiltered)
                    closeTag(tagChoosen, recipesFiltered)
                }else {
                    displayChoosenTag(tagChoosen, tagSelected, item, recipes)
                    closeTag(tagChoosen, recipes)
                }
            })
        })
    })
}

