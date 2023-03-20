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

function area(radius){
    if (isNaN(radius))
    {
        alert("This is not a number");
    } else {
        return Math.PI * radius * radius
    }

}
radius = prompt("Enter radius of circle: ")
console.log(`The area of a circle with radius ${radius} is ${area(radius)}`)