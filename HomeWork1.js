// ------- 1.1. ES6 - Methods (examples, explanations). -------



// ------- 1.2. Difference between var, let, and const. -------

// 1.2.1. var 
// this type of variable is function-scoped or globally scoped, and it can be reinitialized.
var age = 30; // global scope
function ageNextYear() {
    var age = 22; // function scope
    age = age + 1; // reinitialization is allowed for var
    console.log("Next year, I will be " + age + " years old.");
}
ageNextYear(); // Output: Next year, I will be 23 years old.

// 1.2.2. let
// this type of varible was introduced later in ES6, it is block-scoped, and it can be reinitialized and reassigned.
function countToTen() {
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
    console.log("The area of the circle is: " + area);
}
//console.log("PI in global scope: " + PI); 

circleArea(10);

    

