import recipes from "./data.js";
///////cake
let arraycakes = recipes.cakes;
let arraybreads = recipes.bread;
let arraybiscuite = recipes.biscuits;

function createElementForRecipes(element) {
  let div = document.createElement("div");
  div.style.marginBottom = "30px";
  div.style.margin = "10px 5px";
  div.style.border = "1px solid black";
  div.style.width = "300px";
  let image = document.createElement("img");
  image.src = element.image;
  image.style.width = "298px";
  image.style.height = "200px";
  let title = document.createElement("p");
  title.style.textAlign = "center";
  console.log(element.author);
  title.innerHTML = element.title;
  title.style.fontSize = "20px";
  let author = document.createElement("p");
  author.style.paddingLeft = "5px";
  author.innerHTML = element.author;
  let line = document.createElement("p");
  line.innerHTML = "_____________";
  let ingredientTxt = document.createElement("p");
  ingredientTxt.innerHTML = "ingredients:";
  ingredientTxt.style.paddingLeft = "5px";
  let ingredients = document.createElement("p");
  ingredients.style.paddingLeft = "5px";
  ingredients.style.paddingRight = "5px";
  ingredients.innerHTML = element.ingredients;
  div.append(image, title, author, line, ingredientTxt, ingredients);
  return div;
}
let sectionCake = document.getElementById("cakes");
let createElementCakes = arraycakes.map((element) =>
  createElementForRecipes(element)
);

createElementCakes.forEach((item) => sectionCake.appendChild(item));

///biscuits
let biscuitsSection = document.getElementById("biscuits");
let biscuitsElement = arraybiscuite.map((element) =>
  createElementForRecipes(element)
);
biscuitsElement.forEach((item) => biscuitsSection.appendChild(item));

//breads
let breadsSection = document.getElementById("bread");
let bereadElements = arraybreads.map((element) =>
  createElementForRecipes(element)
);

bereadElements.forEach((item) => breadsSection.appendChild(item));
