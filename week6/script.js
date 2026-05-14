
// // // // Define the function
// // // function greet(name) {
// // //     return `Hello, ${name}!`;
// // // }

// // // // Call (invoke) the function
// // // const message = greet('Alice');
// // // console.log(message);  // "Hello, Alice!"
// // // console.log(greet('Bob'));  // "Hello, Bob!"

// // // // name is a PARAMETER (placeholder in function definition)
// // // function sayHello(name) {
// // //     return `Hello, ${name}`;
// // // }

// // // // 'Alice' is an ARGUMENT (actual value passed when calling)
// // // sayHello('Alice');

// // // // Multiple parameters
// // // function add(a, b) {
// // //     return a + b;
// // // }
// // // console.log(add(5, 3));  // 8

// // // // Parameters vs arguments must match in order
// // // function introduce(firstName, lastName, age) {
// // //     return `${firstName} ${lastName} is ${age} years old`;
// // // }
// // // console.log(introduce('Alice', 'Smith', 30));
// // // // "Alice Smith is 30 years old"

// // // // A function ALWAYS returns something
// // // // If no return statement, it returns undefined

// // // function noReturn() {
// // //     const x = 5;
// // //     // No return statement
// // // }
// // // console.log(noReturn());  // undefined

// // // // return immediately exits the function
// // // function checkAge(age) {
// // //     if (age < 18) {
// // //         return 'Too young';  // Function stops here if age < 18
// // //     }
// // //     return 'Welcome!';  // Only reached if age >= 18
// // // }

// // // // Multiple return values? Use an object or array
// // // function getUser() {
// // //     return {
// // //         name: 'Alice',
// // //         age: 30,
// // //         email: 'alice@example.com'
// // //     };
// // // }
// // // const user = getUser();
// // // console.log(user.name);  // 'Alice'

// // // // Or with array destructuring (Week 7 topic preview)
// // // function getCoordinates() {
// // //     return [40.7128, -74.0060];
// // // }
// // // const [lat, lng] = getCoordinates();
// // // console.log(lat, lng);  // 40.7128, -74.0060


// // // // Old way (before ES6)
// // // function greet(name) {
// // //     name = name || 'Guest';  // If name is falsy, use 'Guest'
// // //     return `Hello, ${name}`;
// // // }

// // // // Modern way: Default parameters
// // // function greet(name = 'Guest') {
// // //     return `Hello, ${name}`;
// // // }

// // // console.log(greet());        // "Hello, Guest"
// // // console.log(greet('Alice')); // "Hello, Alice"

// // // // Multiple defaults
// // // function createUser(name, role = 'user', isActive = true) {
// // //     return { name, role, isActive };
// // // }
// // // console.log(createUser('Alice'));  
// // // // { name: 'Alice', role: 'user', isActive: true }
// // // console.log(createUser('Bob', 'admin', false));
// // // // { name: 'Bob', role: 'admin', isActive: false }

// // // // Defaults can use previous parameters
// // // function createGreeting(name, greeting = `Hello, ${name}`) {
// // //     return greeting;
// // // }
// // // console.log(createGreeting('Alice'));  // "Hello, Alice"

// // // // function expressions
// // // // Function Expression: Assign a function to a variable
// // // const greet = function(name) {
// // //     return `Hello, ${name}`;
// // // };

// // // console.log(greet('Alice'));  // "Hello, Alice"

// // // // Key difference: Function expressions are NOT hoisted
// // // // This works (function declaration is hoisted):
// // // sayHi('Bob');
// // // function sayHi(name) {
// // //     return `Hi, ${name}`;
// // // }

// // // // This DOESN'T work (function expression is not hoisted):
// // // sayHello('Alice');  // ❌ ReferenceError: Cannot access before initialization
// // // const sayHello = function(name) {
// // //     return `Hello, ${name}`;
// // // };

// // // // Traditional function expression
// // // const add = function(a, b) {
// // //     return a + b;
// // // };

// // // // Arrow function (full syntax)
// // // const addArrow = (a, b) => {
// // //     return a + b;
// // // };

// // // // Arrow function (implicit return - no braces, no 'return' keyword)
// // // const addShort = (a, b) => a + b;

// // // // Single parameter: parentheses optional
// // // const square = x => x * x;

// // // // Zero parameters: empty parentheses required
// // // const sayHello = () => 'Hello, World!';

// // // // Returning an object: wrap in parentheses
// // // const createUser = (name, age) => ({ name, age });

// // // // Multi-line: use braces and explicit return
// // // const calculateTotal = (price, quantity) => {
// // //     const subtotal = price * quantity;
// // //     const tax = subtotal * 0.08;
// // //     return subtotal + tax;
// // // };


// // // // Traditional function: 'this' depends on how it's called
// // // const person1 = {
// // //     name: 'Alice',
// // //     greet: function() {
// // //         console.log(`Hello, I'm ${this.name}`);
// // //     }
// // // };
// // // person1.greet();  // "Hello, I'm Alice"

// // // // Arrow function: 'this' is from the outer scope
// // // const person2 = {
// // //     name: 'Alice',
// // //     greet: () => {
// // //         console.log(`Hello, I'm ${this.name}`);  // 'this' is NOT person2
// // //     }
// // // };
// // // person2.greet();  // "Hello, I'm undefined" (this = window in browser)

// // // // Global scope: Accessible everywhere
// // // const globalVar = 'I am global';

// // // function testGlobal() {
// // //     console.log(globalVar);  // ✅ Accessible
// // // }
// // // testGlobal();
// // // console.log(globalVar);  // ✅ Accessible

// // // // ⚠️ Minimize global variables. They pollute the namespace and cause conflicts.


// // // function functionScopeExample() {
// // //     if (true) {
// // //         var functionScoped = 'I ignore blocks';
// // //     }
// // //     console.log(functionScoped);  // ✅ Accessible (var is function-scoped, not block-scoped)
// // // }
// // // functionScopeExample();
// // // // console.log(functionScoped);  // ❌ ReferenceError (not accessible outside function)


// // // function blockScopeExample() {
// // //     if (true) {
// // //         let blockScoped = 'I am trapped in this block';
// // //         const alsoBlockScoped = 'Me too';
// // //         console.log(blockScoped);  // ✅ Accessible inside block
// // //     }
// // //     // console.log(blockScoped);  // ❌ ReferenceError (outside block)
// // // }
// // // blockScopeExample();

// // // function outer() {
// // //     const outerVar = 'I am from outer';
    
// // //     function inner() {
// // //         console.log(outerVar);  // ✅ Inner function accesses outer variable
// // //         const innerVar = 'I am from inner';
// // //     }
    
// // //     inner();
// // //     // console.log(innerVar);  // ❌ ReferenceError (outer can't see inner)
// // // }
// // // outer();

// // // function createCounter() {
// // //     let count = 0;  // This variable is "closed over"
    
// // //     return function() {
// // //         count++;  // Inner function remembers 'count'
// // //         return count;
// // //     };
// // // }

// // // const counter = createCounter();
// // // console.log(counter());  // 1
// // // console.log(counter());  // 2
// // // console.log(counter());  // 3
// // // // Each call remembers and updates the same 'count' variable


// // // // Array literal (most common)
// // // const fruits = ['apple', 'banana', 'orange'];

// // // // Array constructor (less common)
// // // const numbers = new Array(1, 2, 3, 4, 5);

// // // // Empty array
// // // const empty = [];

// // // // Mixed types (allowed, but usually consistent)
// // // const mixed = [42, 'hello', true, null, { name: 'Alice' }];

// // // // Arrays can contain arrays (nested/multidimensional)
// // // const matrix = [
// // //     [1, 2, 3],
// // //     [4, 5, 6],
// // //     [7, 8, 9]
// // // ];

// // // // Array with const: You can modify contents, but not reassign
// // // const items = [1, 2, 3];
// // // items.push(4);       // ✅ Works (mutating)
// // // items[0] = 10;       // ✅ Works (mutating)
// // // // items = [5, 6, 7];  // ❌ TypeError (reassigning const)


// // const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// // // Zero-based indexing
// // console.log(fruits[0]);   // 'apple' (first element)
// // console.log(fruits[1]);   // 'banana'
// // console.log(fruits[4]);   // 'mango' (last element)

// // // Last element (dynamic)
// // console.log(fruits[fruits.length - 1]);  // 'mango'

// // // Out of bounds
// // console.log(fruits[10]);  // undefined (no error, just undefined)

// // // Array length
// // console.log(fruits.length);  // 5

// // // Update an element
// // fruits[2] = 'kiwi';
// // console.log(fruits);  // ['apple', 'banana', 'kiwi', 'grape', 'mango']


// // const numbers = [1, 2, 3, 4, 5];

// // // Add elements
// // numbers.push(6);         // Add to END → [1, 2, 3, 4, 5, 6]
// // numbers.unshift(0);      // Add to START → [0, 1, 2, 3, 4, 5, 6]

// // // Remove elements
// // const last = numbers.pop();    // Remove from END → returns 6
// // const first = numbers.shift(); // Remove from START → returns 0

// // console.log(numbers);  // [1, 2, 3, 4, 5]
// // console.log(last);     // 6
// // console.log(first);    // 0

// // // Check if something exists
// // console.log(numbers.includes(3));   // true
// // console.log(numbers.includes(10));  // false

// // // Find position
// // console.log(numbers.indexOf(3));    // 2
// // console.log(numbers.indexOf(10));   // -1 (not found)


// // const fruits = ['apple', 'banana', 'orange'];

// // // Execute a function for each element
// // fruits.forEach(function(fruit) {
// //     console.log(fruit);
// // });
// // // apple, banana, orange

// // // With arrow function (cleaner)
// // fruits.forEach(fruit => console.log(fruit));

// // // forEach provides: element, index, array
// // fruits.forEach((fruit, index, array) => {
// //     console.log(`${index + 1}. ${fruit} (of ${array.length})`);
// // });
// // // 1. apple (of 3)
// // // 2. banana (of 3)
// // // 3. orange (of 3)

// // // ⚠️ forEach does NOT return a value (always undefined)
// // // ⚠️ Cannot break out of forEach early (use for...of for that)


// // const numbers = [1, 2, 3, 4, 5];

// // // Create a new array by transforming each element
// // const doubled = numbers.map(num => num * 2);
// // console.log(doubled);  // [2, 4, 6, 8, 10]
// // console.log(numbers);  // [1, 2, 3, 4, 5] (original unchanged!)

// // // Map to new shape
// // const users = [
// //     { id: 1, name: 'Alice' },
// //     { id: 2, name: 'Bob' },
// //     { id: 3, name: 'Charlie' }
// // ];

// // const names = users.map(user => user.name);
// // console.log(names);  // ['Alice', 'Bob', 'Charlie']

// // // Map with index
// // const numbered = names.map((name, i) => `${i + 1}. ${name}`);
// // console.log(numbered);  // ['1. Alice', '2. Bob', '3. Charlie']

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // Keep only even numbers
// // const evens = numbers.filter(num => num % 2 === 0);
// // console.log(evens);  // [2, 4, 6, 8, 10]

// // // Filter objects
// // const users = [
// //     { name: 'Alice', age: 25, active: true },
// //     { name: 'Bob', age: 17, active: false },
// //     { name: 'Charlie', age: 30, active: true },
// //     { name: 'Diana', age: 15, active: true }
// // ];

// // const adults = users.filter(user => user.age >= 18);
// // console.log(adults);  // [{ name: 'Alice', ... }, { name: 'Charlie', ... }]

// // const activeAdults = users.filter(user => user.active && user.age >= 18);
// // console.log(activeAdults);  // [{ name: 'Alice', ... }, { name: 'Charlie', ... }]

// // const numbers = [10, 20, 30, 40, 50];

// // const found = numbers.find(num => num > 25);
// // console.log(found);  // 30 (first match, not all matches)

// // // Returns undefined if nothing found
// // const notFound = numbers.find(num => num > 100);
// // console.log(notFound);  // undefined

// // // Practical: Find user by ID
// // const users = [
// //     { id: 1, name: 'Alice' },
// //     { id: 2, name: 'Bob' },
// //     { id: 3, name: 'Charlie' }
// // ];

// // const user = users.find(u => u.id === 2);
// // console.log(user);  // { id: 2, name: 'Bob' }

// // // findIndex: Returns the index instead of the element
// // const index = users.findIndex(u => u.id === 2);
// // console.log(index);  // 1

// // const numbers = [2, 4, 6, 8, 10];

// // // some(): At least one element passes the test?
// // console.log(numbers.some(num => num > 8));   // true (10 > 8)
// // console.log(numbers.some(num => num > 10));  // false (none > 10)

// // // every(): ALL elements pass the test?
// // console.log(numbers.every(num => num % 2 === 0));  // true (all even)
// // console.log(numbers.every(num => num > 5));        // false (2, 4 are not > 5)

// // // Practical examples
// // const users = [
// //     { name: 'Alice', active: true },
// //     { name: 'Bob', active: false },
// //     { name: 'Charlie', active: true }
// // ];

// // const hasInactiveUsers = users.some(user => !user.active);  // true
// // const allActive = users.every(user => user.active);          // false


// // // Sum all numbers
// // const numbers = [1, 2, 3, 4, 5];

// // const sum = numbers.reduce((accumulator, currentValue) => {
// //     return accumulator + currentValue;
// // }, 0);  // 0 is the initial value

// // console.log(sum);  // 15

// // // Mental model of reduce:
// // // Step 1: acc = 0, current = 1 → return 0 + 1 = 1
// // // Step 2: acc = 1, current = 2 → return 1 + 2 = 3
// // // Step 3: acc = 3, current = 3 → return 3 + 3 = 6
// // // Step 4: acc = 6, current = 4 → return 6 + 4 = 10
// // // Step 5: acc = 10, current = 5 → return 10 + 5 = 15
// // // Final result: 15

// // // Cleaner with arrow function
// // const sum2 = numbers.reduce((acc, num) => acc + num, 0);

// // // Without initial value (uses first element as initial accumulator)
// // const sum3 = numbers.reduce((acc, num) => acc + num);
// // // Step 1: acc = 1, current = 2 → 3
// // // Step 2: acc = 3, current = 3 → 6
// // // ...

// // // Practical: Count occurrences
// // const votes = ['yes', 'no', 'yes', 'abstain', 'yes', 'no'];
// // const tally = votes.reduce((acc, vote) => {
// //     acc[vote] = (acc[vote] || 0) + 1;
// //     return acc;
// // }, {});
// // console.log(tally);  // { yes: 3, no: 2, abstain: 1 }

// // // Practical: Flatten an array
// // const nested = [[1, 2], [3, 4], [5, 6]];
// // const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// // console.log(flat);  // [1, 2, 3, 4, 5, 6]
// // // (though .flat() does this natively now)

// // ⚠️ sort() sorts alphabetically by default (converts to strings!)
// const numbers = [30, 3, 100, 1, 20];
// numbers.sort();
// console.log(numbers);  // [1, 100, 20, 3, 30] (alphabetical: "1", "100", "20", "3", "30")

// // Correct numeric sort: Provide a compare function
// numbers.sort((a, b) => a - b);  // Ascending
// console.log(numbers);  // [1, 3, 20, 30, 100]

// numbers.sort((a, b) => b - a);  // Descending
// console.log(numbers);  // [100, 30, 20, 3, 1]

// // Sort objects by property
// const users = [
//     { name: 'Charlie', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 }
// ];

// users.sort((a, b) => a.age - b.age);  // By age ascending
// console.log(users);
// // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Bob', age: 35 }]

// users.sort((a, b) => a.name.localeCompare(b.name));  // By name alphabetically
// console.log(users);
// // [{ name: 'Alice', ... }, { name: 'Bob', ... }, { name: 'Charlie', ... }]


// const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// // slice(start, end) - end is exclusive
// console.log(fruits.slice(1, 3));    // ['banana', 'orange']
// console.log(fruits.slice(2));       // ['orange', 'grape', 'mango'] (from index 2 to end)
// console.log(fruits.slice(-2));      // ['grape', 'mango'] (last 2 elements)
// console.log(fruits.slice(0, -1));   // ['apple', 'banana', 'orange', 'grape'] (all except last)

// // Original is unchanged
// console.log(fruits);  // ['apple', 'banana', 'orange', 'grape', 'mango']

// // Copy entire array (shallow copy)
// const copy = fruits.slice();

// const fruits = ['apple', 'banana', 'orange', 'grape'];

// // Remove elements: splice(start, deleteCount)
// const removed = fruits.splice(1, 2);  // Start at index 1, remove 2 elements
// console.log(removed);  // ['banana', 'orange']
// console.log(fruits);   // ['apple', 'grape']

// // Add elements: splice(start, 0, ...items)
// fruits.splice(1, 0, 'kiwi', 'mango');  // Insert at index 1 without removing
// console.log(fruits);  // ['apple', 'kiwi', 'mango', 'grape']

// // Replace elements: splice(start, deleteCount, ...items)
// fruits.splice(2, 1, 'pineapple');  // Remove 1 at index 2, insert 'pineapple'
// console.log(fruits);  // ['apple', 'kiwi', 'pineapple', 'grape']

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // concat (creates new array)
// const combined = arr1.concat(arr2);
// console.log(combined);  // [1, 2, 3, 4, 5, 6]

// // Spread operator (modern, more flexible)
// const combined2 = [...arr1, ...arr2];
// console.log(combined2);  // [1, 2, 3, 4, 5, 6]

// // Spread can insert in the middle
// const withMiddle = [...arr1, 100, ...arr2];
// console.log(withMiddle);  // [1, 2, 3, 100, 4, 5, 6]

// // Clone an array (shallow copy)
// const clone = [...arr1];


// Array → String
const words = ['Hello', 'World', 'JavaScript'];
console.log(words.join(' '));   // "Hello World JavaScript"
console.log(words.join(', '));  // "Hello, World, JavaScript"
console.log(words.join(''));    // "HelloWorldJavaScript"

// String → Array
const csv = 'apple,banana,grape,orange';
const fruits = csv.split(',');
console.log(fruits);  // ['apple', 'banana', 'grape', 'orange']

const sentence = 'The quick brown fox';
const words2 = sentence.split(' ');
console.log(words2);  // ['The', 'quick', 'brown', 'fox']