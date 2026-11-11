//Ilya Zeldner

// types of functions in java script

// 1. Function Declaration
// Advantage: Hoisted to the top of their scope, so they can be called before they are defined.
function add(a, b) {
    return a + b;
}

// 2. Function Expression
// Advantage: Can be used as an IIFE (Immediately Invoked Function Expression) and is not hoisted.
const subtract = function(a, b) {
    return a - b;
};

// 3. Arrow Function
// Advantage: Shorter syntax and does not have its own `this` context.
const multiply = (a, b) => a * b;

// 4. Anonymous Function
// Advantage: Useful for passing as arguments to other functions.
setTimeout(function() {
    console.log('This is an anonymous function');
}, 1000);

// 5. IIFE (Immediately Invoked Function Expression)
// Advantage: Executes immediately after it is defined, useful for initialization.
(function() {
    console.log('This is an IIFE');
})();

// 6. Generator Function
// Advantage: Can pause and resume execution, useful for handling asynchronous operations.
function* generatorFunction() {
    yield 'First output';
    yield 'Second output';
}

const gen = generatorFunction();
console.log(gen.next().value); // First output
console.log(gen.next().value); // Second output

// 7. Async Function
// Advantage: Simplifies writing asynchronous code using `await` keyword.
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}