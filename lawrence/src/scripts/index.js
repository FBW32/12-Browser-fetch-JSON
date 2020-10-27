
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

import {recipesString} from "./data.js"

//console.log(JSON.parse(recipesString))

let newRecipe= JSON.parse(recipesString)

//newRecipe = Array.from(newRecipe)
//console.log(newRecipe);

let cake = document.getElementById("cakes")
cake.style.display="flex"
cake.style.flexWrap="wrap"
cake.style.justifyContent="center"
let biscuit = document.getElementById("biscuits")
let breads = document.getElementById("bread")

for(let key in newRecipe){
    console.log(key);
    newRecipe[key].map(user=>{
        console.log(user);
    let cardCake = document.createElement("div")
    cardCake.style.width="160px"
    cardCake.style.border="1px solid gray"
    cardCake.style.margin="5px"

    let cardBus = document.createElement("div")
    cardBus.style.width="160px"
    cardBus.style.border="1px solid gray"
    cardBus.style.margin="5px"

    let cardBread = document.createElement("div")
    cardBread.style.width="160px"
    cardBread.style.border="1px solid gray"
    cardBread.style.margin="5px"

    let  title = document.createElement("h5")
    title.innerHTML=user.title

    let  author = document.createElement("h6")
    author.innerHTML=user.author

    let  ingredients = document.createElement("h6")
    ingredients.innerHTML=user.ingredients.join(",")
    ingredients.style.fontSize="10px"
    ingredients.style.width="150px"

    let image= document.createElement("img")
    image.src =`${user.image}`
    image.width="160"
    image.height="100"
    
    if (user.type ==="cakes") {
        let hr=document.createElement("hr")
        cardCake.append(image,title,author,hr,ingredients)
        cake.append(cardCake)
    } else if (user.type ==="biscuits") {
        let hr=document.createElement("hr")
        cardBus.append(image,title,author,hr,ingredients)
        biscuit.append(cardBus)
    } else if (user.type ==="bread") {
        let hr=document.createElement("hr")
        cardBread.append(image,title,author,hr,ingredients)
        breads.append(cardBread)}
    
    })
}

