console.log("1.1 ES6 - Methods (examples, explanations) \n");

// ------- 1.1. ES6 - Methods (examples, explanations). -------
// ES6 is the sixth edition of JavaScript which was introduced in 2015.
// It introduces new features and improvements to the language such as:
// - let and const variables (we will discuss about them later)

// - template literals, making it easier to include variables into a strig
function meet(firstName, lastName) {
    // Template literals allow us to embed expressions inside string literals using backticks.
    console.log(`Hello, my name is ${firstName} ${lastName}. \n`);
}
meet("Natalia", "Gorin")

// - default parameters which allow us to set default values for function params
function multiply(x, y = 1) {
    console.log(`The result of multiplying ${x} and ${y} is: ${x * y}.`);
}
multiply(100); // y will have the default value that we set
multiply(30, 2);

// - arrow functions -- a new way to write funcitons and functions expressions using "=>"
// syntax: type name = (params) => { what the funciton does }
const product = (a, b) => a * b;
console.log(`The product of 5 and 6 is: ${product(5, 6)}. \n`);

// - classes provide a new way to create blueprints for objects (similar to Java or C++)
// we create the class using "class" keyword, we define the constructor method to initialize properties,
// and we can add methods to the class to define behaviors.
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }

    describe() {
        console.log(`This is a ${this.color} ${this.type} named ${this.name}.`);
    }
}
// initializing objects from the Animal class
const dog = new Animal("Lisa", "dog", "white");
const cat = new Animal("Oscar", "cat", "orange");

// calling the describe method for each object
dog.describe();
cat.describe();


// - destructing syntax makes it easier to extract values from arrays or objects into individual variables.
// in earlier versions we had to access each property using dot notation
// e.g. book.title, book.author
const book = {
    title: "White Nights", 
    author: "Fyodor Dostoevsky"
}
const { title, author } = book; // destructuring the book object
console.log(`\nThe book "${title}" was written by ${author}. \n`);

// - import/export syntax allows us to organize our code into modules, making it easier to manage and reuse.
// Imagine we have two files called "shelter.js" and "activity.js". in "shelter.js" we define a function to get the shelter name, number of animals, and location.
// we have method called `getShelterInfo` that returns an object with this information.
// In "activity.js" we import the function from "shelter.js" and use it to display the shelter information in other functions. 


// - Promises a new way to handle asynchronous operations in JavaScript. (we will discuss this a bit later)

// - rest parameter (...) to handle indefinite number of arguments in a function.
function classroom(mainTeacher, ...students) {
    console.log(`The main teacher is ${mainTeacher}.`);
    console.log("The students are: ", students);
}
classroom("Mr. Smith", "Alice", "Bob", "Charlie", "David");

// - spread operator (...) to unpack an array or object into individual elements. (we will discuss this a bit later)



// ------- 1.2. Difference between var, let, and const. -------
console.log("\n1.2. Difference between var, let, and const: \n");
// 1.2.1. var 
// this type of variable is function-scoped or globally scoped, and it can be reinitialized.
var age = 30; // global scope
function ageNextYear() {
    var age = 22; // function scope
    age = age + 1; // reinitialization is allowed for var
    console.log("Next year, I will be " + age + " years old. \n");
}
ageNextYear(); 

// 1.2.2. let
// this type of varible was introduced later in ES6, it is block-scoped, and it can be reinitialized and reassigned.
function countToTen() {
    console.log("Let's count to ten :)")
    for (let i = 0; i <= 10; i++) {
        console.log(i); 
    }
    //i += 20;
   // console.log(i); // ReferenceError
}
countToTen(); 

// 1.2.3. const
// this type of varible is block-scoped, it can't be reassigne, it cant be reinitialized, it can be reinitialized if it is an object or array.
//const PI = 3.14;
function circleArea(radius) {
   // PI = 3.14159; // assignment to const variable is not allowed 
    const PI = 3.14; // const variable, cannot be reassigned
    const area = PI * radius * radius;
    console.log("\nThe area of the circle is: " + area + "\n");
}
//console.log("PI in global scope: " + PI); 

circleArea(10);


// ------- 1.3. Spread operator. -------
// Spread operator allows us to expand an iterable (like an array or a string) into individual elements.
//  It is often used to create a new array or object by copying properties from an existing one, 
// or to combine multiple arrays or objects into one.
console.log("1.3. Spread operator: \n");

function completeQuote() {
    const quote = "Whatever we call beautiful, we quiver before it.";
    const missingPart = "Beauty is terror. ";

    const complete = [...missingPart, ...quote];
    console.log(complete.join('') + "- Donna Tartt.\n");
}
completeQuote();


function changePassword(password) {
    let credentials = { username: "anne", password: "123456" };
    console.log("Your old credentials are: " + JSON.stringify(credentials));
    let newCredentials = { ...credentials, password: password };
    console.log("Your new credentials are: " + JSON.stringify(newCredentials) + "\n");
}
changePassword("newPassword123");

// ------- 1.4. Objects: How to iterate over an object, deep copy. ------.
// Object are containers for properties and methods. Properties are named values and can be primitives (string, number, boolean, null, undefined, symbol, bigint), functions or even other objects. 
// methods are functions that are properties of an object.

// 
console.log("\n1.4. Objects: How to iterate over an object, deep copy: \n");

const festivals = [
    {
        name: "Summer Well", 
        location: "Romania",
        year: 2025,
        lineup: {
            day1: ["Snow Patrol", "Seafret", "Isabel LaRosa", "Ari Abdul"],
            day2: ["Son Mieux", "Saint Levant", "Balu Brigada", "Chloe Slater"],
            day3: ["Empire of the Sun", "Palaye Royale", "La Femme", "Banners"]
        }
    }, 
    {
        name: "Sziget Festival",
        location: "Hungary",
        year: 2025,
        lineup: {
            day1: ["Charli XCX", "Don Diablo", "Empire of the Sun", "Little Simz"],
            day2: ["Shawn Mendes", "Boris Brejcha", "Justice", "Nelly Furtado"],
            day3: ["A$AP Rocky", "Amelie Lens", "Caribou", "Michael Kiwanuka"],
            day4: ["Anyma", "Adriatique", "FKA Twigs", "Sevdaliza"],
            day5: ["Fat Dog", "Fjaak", "Hanabie", "Isabel LaRosa"],
            day6: ["Chappell Roan", "Portugal. The Man", "The Last Dinner Party", "Bou"]
        }
    }, 
    {
        name: "Primavera Sound",
        location: "Spain",
        year: 2025,
        lineup: {
            day1: ["Llum", "Hinds", "La Casa Azul", "Caribou"],
            day2: ["Magdalena Bay", "FKA Twigs", "Charlie XCX", "Brutalismus 3000"],
            day3: ["HAIM", "Beach House", "Sabrina Carpenter", "Wet Leg"],
            day4: ["Fontaines D.C.", "Black Country, New Road", "Chappell Roan", "LCD Soundsystem"]
        }
    }

];


function iterateFestivals(festivals, type) {
    if (type == "for...in") {
        // iterating over an object using for..in loop is means to loop through all enumerable properties of the object
        console.log("Iterating with for...in loop: ");
        for (let festival in festivals) {
            console.log(`Festival: ${festivals[festival].name}`);
            console.log(`Location: ${festivals[festival].location}`);
            console.log(`Year: ${festivals[festival].year}`);
            console.log("Lineup:");
            for (let day in festivals[festival].lineup) {
                console.log(`  ${day}: ${festivals[festival].lineup[day].join(", ")}`);
            }
            console.log("\n");
        } 
    } else if (type == "Object.keys()") {
        // Object.keys() method was introduces in ES6. It takes the object that we want to loop over as argument and returns an array of property names also known as keys.
        console.log("Iterating with Object.keys(): \n");
        for (let festival of Object.keys(festivals)) {
            let keys = Object.keys(festivals[festival]);
            console.log(keys);
        }
        console.log();
    } else if (type == "Object.values()") {
        // Object.values() method was introduced in ES8 and it is similar to Object.keys(). It takes the object that we want to loop over as argument and returns an array containing the values of each property.
        console.log("Iterating with Object.values(): \n");
        for (let festival of Object.values(festivals)) {
            let values = Object.values(festival);
            console.log(values);
        }
        console.log();
        
    } else if (type == "Object.entries()") {
        // Object.entries() method was introduced in ES8. It takes the object that we want to loop over as argument and returns an array of key-value pairs.
        for (let festival of Object.entries(festivals)) {
            for (let [key, value] of Object.entries(festival[1])) {
                if (key === "lineup") {
                    console.log(`lineup:`);
                    for (let day in value) {
                        console.log(`  ${day}: ${value[day]}`);
                    }
                } else {
                    console.log(`${key}: ${value}`);
                }
            }
            console.log("\n");
        }
        
    }  
    
}
//iterateFestivals(festivals, "for...in");
//iterateFestivals(festivals, "Object.keys()");
//iterateFestivals(festivals, "Object.values()");
//iterateFestivals(festivals, "Object.entries()");


// deep copy of an object is a copy whose properties do not share the same reference as the original source object. 
// So let's say we want to create a deep copy for the object "song" that contains the name of the song, artist, album, and release year.
// If we change something in the copy or the original object, we can be assured you're not causing the other object to change too. 
const song = {
    name: "Dancing Queen",
    artist: "ABBA",
    album: "Arrival",
    releaseYear: 1976
}

// deep copy with JSON.parse(JSON.stringify())
// This method converts the object to a JSON string and then parses it back to an object, effectively creating a deep copy.
const songCopyJSON = JSON.parse(JSON.stringify(song));
console.log("Original song object: ", song);
console.log("Deep copy of the song object with JSON.parse(JSON.stringify()): ", songCopyJSON);

songCopyJSON.name = "Super Trouper";

console.log("After changing the name of the song in the original: ", song);
console.log("After changing the name of the song in the copy: ", songCopyJSON);

// deep copy with structuredClone() method
// structuredClone() is a built-in method that creates a deep copy of an object, including its prototype chain and properties.
const songCopyStructured = structuredClone(song);
console.log("Original song object: ", song);
console.log("Deep copy of the song object with structuredClone(): ", songCopyStructured);

songCopyStructured.name = "Fernando";

console.log("After changing the name of the song in the original: ", song); // the original object remains unchanged
console.log("After changing the name of the song in the copy: ", songCopyStructured);

// deep copy withh cloneDeep() method
// cloneDeep() is a method from the Lodash library that creates a deep copy of an object, including its prototype chain and properties.
const _  = require('lodash');
const songCopyLodash = _.cloneDeep(song);
console.log("Original song object: ", song);
console.log("Deep copy of the song object with _.cloneDeep(): ", songCopyLodash);

songCopyLodash.name = "Money, Money, Money";

console.log("After changing the name of the song in the original: ", song);
console.log("After changing the name of the song in the copy: ", songCopyLodash);

// so for deep copies we can say that song and songCopyLodash are two different objects, their properties have the same names in the sam order,
// the values of their properties are deep copies for each other, their prototype chains are structurally equivalent.

// ------- 1.5. Arrays - accessor, iteration, and mutator methods (which they are, how to use them) -------
console.log("\n1.5. Arrays - accessor, iteration, and mutator methods: \n");
// Arrays are is a data structure that allows us to store multiple vals in a single variable, ordered by index (starting from 0).
// They are dynamic, meaning we can add or remove elements, 
// they are heterogeneous, meaning we can store different data types 

// Accesor methods are used to access elements in the array without modifying it.
// They return a new array or a single value, but they do not change the original array.
console.log("1.5.1. Accessor methods: \n");
// concat() method is used to merge/join 2 or more arrays into one new array.
const wildlife = ["tiger", "cheetah"];
const pets = ["cat", "dog", "hamster"];
const animals = wildlife.concat(pets);
console.log("Animals array after using concat(): ", animals);

// includes() method is used to check if an array contains a specific element.
const fruitSalad = ["apple", "banana", "orange", "kiwi"];
const hasBanana = fruitSalad.includes("banana");
console.log(`Does the fruit salad contain banana? ${hasBanana}`);

// indexOf() method is used to find the index of the first occurrence of a element in the array.
const garderobe = ["shirt", "pants", "shoes", "hat"];
const indexOfShoes = garderobe.indexOf("shoes");
console.log(`The index of shoes in the garderobe array is: ${indexOfShoes}`);

// join() is used to join all elements of the array into a string, separated by a specified separator.
const colors = ["green", "white", "red"];
const flag = colors.join(" - ");
console.log(`The flag of Italy is: ${flag}`);


// slice() methos is used to extract a portion of the array
const numbers = [1, 2, 3, 4, 5, 6];
const slicedNumbers = numbers.slice(2, 5); // extracts elements from index 2 to index 4 (not including index 5)
console.log(`Sliced numbers from index 2 to 4: ${slicedNumbers}`);

// toString() method is used to convert the array to a string.
const tvShows = ["Breaking Bad", "Game of Thrones", "Stranger Things"];
const tvShowsString = tvShows.toString();
console.log(`TV shows as a string: ${tvShowsString}`);

// Iteration methods are used to operate on each element of the array one at a time
console.log("\n1.5.2. Iteration methods: \n");

// forEach() is used to execute a function for each element in the array.
// It does not return a new array, it just executes the function for each element, meaning that the original array will be modified

function painterWithLetterV() {
    const painters = ["Van Gogh", "Picasso", "Monet", "Vermeer"];
    painters.forEach(painter => {
        if (painter[0] === "V") {
            console.log(`Painter's name starts with V: ${painter}`);
        }
    });
}
painterWithLetterV();


// map() is used to create a new array by applying a function to each element in the array.
const names = ["emma", "oliver", "alex"];
function capsNames(names) {
    const caps = names.map(name => name.toUpperCase());
    console.log(`Names in uppercase: ${caps}`);
}
capsNames(names);

// filter() is used to create a new array with elements that pass a test
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function evenNumbers(numbers) {
    const evens = numbers.filter(number => number % 2 === 0);
    console.log(`Even numbers: ${evens}`);
}
evenNumbers(numbersArray);

// reduce() is used to shrink an array to a single value by applyig a function 
const prices = [10, 100, 50, 1000, 200];
function totalPrice(prices) {
    const total = prices.reduce((summ, currentPrice) => summ + currentPrice, 0);
    console.log(`Total price: ${total}`);
}

totalPrice(prices);

// find() method returns the first value in an array that passes a given test
const ages = [10, 18, 21, 25, 30, 35];
function findFirstAdult(ages) {
    const firstAdult = ages.find(age => age >= 18);
    console.log(`The first adult age is: ${firstAdult}`);
}
findFirstAdult(ages);

// findIndex() method returns the index of the first value in an array that passes a given test
function findIndexOfFirstAdult(ages) {
    const index = ages.findIndex(age => age >= 18);
    console.log(`The index of the first adult age is: ${index}`);
}
findIndexOfFirstAdult(ages);

// Mutator methods are used to change the original array. 
console.log("\n1.5.3. Mutator methods: \n");


// pop() method is used to remove the last element from the array and returns it without the last element. 
const vegetables = ["carrot", "potato", "onion", "cabbage"];
function removeLastVegetable(vegetables) {
    const lastVegetable = vegetables.pop();
    console.log(`Removed last vegetable: ${lastVegetable}`);
    console.log(`Vegetables after pop(): ${vegetables}`);
}
removeLastVegetable(vegetables);

// push() is used to add one or more elements at the end of the array
const groceries = ["milk", "bread", "eggs"];
function addGroceriesList(groceries) {
    groceries.push("butter", "apples", "bananas");
    console.log(`Groceries after push(): ${groceries}`);
}
addGroceriesList(groceries);

// shift() removes the first element from the array and returns it
const songs = ["Imagine", "Bohemian Rhapsody", "Hotel California"];
function removeFirstSong(songs) {
    const firstSong = songs.shift();
    console.log(`Removed first song: ${firstSong}`);
    console.log(`Songs after shift(): ${songs}`);
}
removeFirstSong(songs);

// unshift() adds one or more elements a the beginning of the array
function addFirstSong(songs) {
    songs.unshift("Hey Jude", "Stairway to Heaven");
    console.log(`Songs after unshift(): ${songs}`);
}
addFirstSong(songs);

// splice() is used to add or remove elements from the array at a specific position
// it takes 3 paramaters: the index number to start at, the number of items to remove, and items to add (optional).
const fishes = ["goldfish", "betta", "guppy", "neon tetra"];
function removeFishes(fishes) {
    // remove 1 element at index 2 
    fishes.splice(2, 1);
    console.log(`Fishes after removing: ${fishes}`);
}
removeFishes(fishes);

function addFishes(fishes) {
    // add 2 new elements at index 2
    fishes.splice(2, 0, "clownfish", "angelfish");
    console.log(`Fishes after adding: ${fishes}`);
}
addFishes(fishes);


// reverse() is used to reverse the order of the elements
const numbersToReverse = [1, 2, 3, 4, 5];
function reverseNumbers(numbers) {
    numbers.reverse();
    console.log(`Numbers after reverse(): ${numbers}`);
}
reverseNumbers(numbersToReverse);

// fill() is used to fill all elements of an array with static value
const candy = ["chocolate", "gummy bears", "lollipops", "jelly beans"];
candy.fill("chocolate");
console.log(`Candy after fill(): ${candy}`);


// sort is used to sort the elements of an array in place and returns the sorted array
const titles = ["The Great Gatsby", "Anne of Green Gables", "To Kill a Mockingbird", "1984", "Pride and Prejudice"];
function sortTitles(titles) {
    titles.sort();
    console.log(`Titles after sort(): ${titles}`);
}

sortTitles(titles);



