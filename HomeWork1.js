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