// Ilya Zeldner
// var , let and const 
// var example
function varExample() {
    var x = 1;
    if (true) {
        var x = 2; // same variable!
        console.log(x); // 2
    }
    if (false) {
        var y = 3; // same variable!
        console.log(y); // 3
    }
    console.log(y);  // undefined
    console.log(x); // 2
    x = "test"
    console.log(x); // "test"
}

// let example
function letExample() {
    let y = 1;
    if (true) {
        let y = 2; // different variable
        console.log(y); // 2
    }
    if (false) {
        let z = 3;
        console.log(z); // 3
    }
   // console.log(z); // ReferenceError: z is not defined
    console.log(y) // 1
    y = "test"
    console.log(y); // "test"
}

// const example
function constExample() {
    const z = 1;
    if (true) {
        const z = 2; // different variable
        console.log(z); // 2
    }
    console.log(z); // 1
    z = 7 // TypeError: Assignment to constant variable.
    console.log(z);
}

// Demonstrate the examples
varExample();
letExample();
constExample();

