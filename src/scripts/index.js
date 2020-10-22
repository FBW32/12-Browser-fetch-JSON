// Import any additional modules you want to include below \/

import {recipes} from "./data.js"
// \/ All of your javascript should go here \/

//console.log(recipes);

let recipes_str = JSON.stringify(recipes);
let recipes_final = JSON.parse(recipes_str);
console.log(recipes_final);

let cakes = document.getElementById('cakes');

let biscuits = document.getElementById('biscuits');
let bread = document.getElementById('bread');

let container_cakes = document.createElement("div");
container_cakes.classList.add(".container-cakes")
container_cakes.style.cssText = "width: 100%; padding: 0; display: flex; flex-flow: row wrap; justify-content: center; align-items: center"

recipes_final.cakes.map(cakes => {
    // create main card
    let cake_card = document.createElement("div")
    cake_card.classList.add("cake-card")

    // create title
    let cake_title = document.createElement("h2");
    cake_title.innerHTML = cakes.title;

    // create author
    let cake_author = document.createElement("h3");
    cake_author.innerHTML = cakes.author

    //create ingredients
    let cake_ingredients = document.createElement("p");
    cake_ingredients.innerHTML = cakes.ingredients;

    // create image
    let cake_image = document.createElement("img");
    console.dir(cake_image)
    cake_image.src = cakes.image;
    cake_image.style.cssText = "width: 100%; height: 60%;"

    // append the info
    cake_card.append(cake_image, cake_title, cake_author, cake_ingredients)
    container_cakes.append(cake_card)
})

cakes.append(container_cakes);



let container_biscuits = document.createElement("div");
container_biscuits.classList.add(".biscuits")
container_biscuits.style.cssText = "width: 100%; padding: 0; display: flex; flex-flow: row wrap; justify-content: center;  align-items: center"
recipes_final.biscuits.map(biscuits => {
    // create main card
    let biscuit_card = document.createElement("div")
    biscuit_card.classList.add("biscuit-card")

    // create title
    let biscuit_title = document.createElement("h2");
    biscuit_title.innerHTML = biscuits.title;

    // create author
    let biscuit_author = document.createElement("h3");
    biscuit_author.innerHTML = biscuits.author

    //create ingredients
    let biscuit_ingredients = document.createElement("p");
    biscuit_ingredients.innerHTML = biscuits.ingredients;

    // create image
    let biscuit_image = document.createElement("img");
    //console.dir(biscuit_image)
    biscuit_image.src = biscuits.image;
    biscuit_image.style.cssText = "width: 100%; height: 60%;"

    // append the info
    biscuit_card.append(biscuit_image, biscuit_title, biscuit_author, biscuit_ingredients)
    container_biscuits.append(biscuit_card)
})

biscuits.append(container_biscuits);

let container_bread = document.createElement("div");
container_bread.classList.add(".bread")
container_bread.style.cssText = "width: 100%; padding: 0; display: flex; flex-flow: row wrap; justify-content: center; align-items: center"

recipes_final.bread.map(bread => {
    // create main card
    let bread_card = document.createElement("div")
    bread_card.classList.add("bread-card")

    // create title
    let bread_title = document.createElement("h2");
    bread_title.innerHTML = bread.title;

    // create author
    let bread_author = document.createElement("h3");
    bread_author.innerHTML = bread.author

    //create ingredients
    let bread_ingredients = document.createElement("p");
    bread_ingredients.innerHTML = bread.ingredients;

    // create image
    let bread_image = document.createElement("img");
    //console.dir(biscuit_image)
    bread_image.src = bread.image;
    bread_image.style.cssText = "width: 100%; height: 60%;"

    // append the info
    bread_card.append(bread_image, bread_title, bread_author, bread_ingredients)
    container_bread.append(bread_card)
})

bread.append(container_bread);

