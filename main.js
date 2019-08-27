console.log("heyyy!");

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log(currentNumber, "chickenmonkey")

    } else if (currentNumber % 5 === 0) {
        console.log(currentNumber, "chicken")
    }
    else if (currentNumber % 7 === 0) {
        console.log(currentNumber, "monkey")
    }
    else {
        console.log(currentNumber)

    }
}






let bandNumber = 1

const takeNumber = function (bandName) {
      console.log(`${bandName} is band number ${bandNumber}`);
      bandNumber ++;
}

const scum = takeNumber("Galactic Scum")// This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")// This should print "2. Underdogs" in the console */

const beatles = takeNumber("beatles")// This should print "2. Underdogs" in the console */








const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill () {
    // Modify the food so that it is cooked
    for (let i = 0; i < foods.length; i++) {
        foods[i].cooked = true; 
    cookedFood.push(foods[i].name);
}
}
;
grill ();
console.log(`these are cooked foods ${cookedFood}`)





// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (dogs, cats, fish) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < dogs.length; i++) {
       if ((i + 1) % 3 === 0) { 
        buildMeUp += ` ${dogs[i]}${cats.repeat(fish)}`;
        console.log(buildMeUp);
    }
    else {
        buildMeUp += ` ${dogs[i]}`;
        console.log(buildMeUp);
    }

}}

// Invoke the function and pass in the array
addExcitement(sentence, "@", 8);
