// function greet(name, time = "day") {
//     console.log(`Good ${time} ${name}!`);
// }
// greet("Matt", "night");


// let greet = function(name) {
//     console.log("Hello " + name + "!");
// }
// greet("Matt")

// const greet = (name) => {
//     console.log("Hello " + name + "!");
// }

// greet("Matt")

// function area(radius){
//     const radiusPara = document.querySelector("#radius");
//     console.log(radiusPara)
//     const areaPara = document.querySelector("#restart")
//     console.log(areaPara)

//     if (isNaN(radius)) 
//     {
//         radiusPara.textcontent = "This is not a number"
//         alert("This is not a number");
//     } else {
//         let area = Math.PI * radius * radius
//         return area.toFixed(2)
//     }

// }
// radius = prompt("Enter radius of circle: ")
// console.log(`The area of a circle with radius ${radius} is ${area(radius)}`)

function populateList(myShoppingList) {
    const ulElement = document.querySelector("ul.shopping")
    // console.log(ulElement)
    for(let item of myShoppingList) {
        // console.log(item)
        let newLi = document.createElement("li")
        newLi.textContent = item
        ulElement.appendChild(newLi)
    }
}

let shoppingList = ["bread", "cheese", "green pepper"];

populateList(shoppingList)