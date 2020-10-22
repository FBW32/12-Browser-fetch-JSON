
// Import any additional modules you want to include below \/
import {JSONrecipes} from "./data.js"
//for node environment:
//const {JSONrecipes}=require("./data.js")
//see data.js file;
// \/ All of your javascript should go here \/
let recipes=(JSON.parse(JSONrecipes))
let cakesSection=document.getElementById("cakes");
let biscuitsSection=document.getElementById("biscuits");
let breadSection=document.getElementById("bread");
console.log(recipes.cakes);


    let settingCards=(section,recipe)=>{
    let card=document.createElement("div");
    card.classList.add("card");
    card.style.width="18rem";
    card.style.height="25rem";
    card.style.margin="0px 20px 10px 0px";
    let img=document.createElement("img");
    img.classList.add("card-img-top");
    img.src=recipe.image;
    img.style.height="13rem";
    let cardBody=document.createElement("div");
    cardBody.classList.add("card-body")
    let h5=document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML=recipe.title;
    let author=document.createElement("p");
    author.classList.add("card-text")
    author.innerHTML=recipe.author;
    let hr=document.createElement("hr");
    let p=document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML=`Ingredients: ${recipe.ingredients.join()}`;
    cardBody.append(h5,author,hr,p);
    card.append(img,cardBody);
    
    if(section=="cakes"){
cakesSection.append(card);
    }
    else if(section=="biscuits"){
biscuitsSection.append(card);
    }
else{
    breadSection.append(card);
}
}
Object.keys(recipes).map(section=>{
recipes[section].map(recipe=>settingCards(section,recipe))});
