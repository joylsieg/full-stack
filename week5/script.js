// // console.log('Hello, World!');
// // console.log('JavaScript is running!');

// // // let: Block-scoped, can be reassigned (use when value changes)
// // let age = 25;
// // age = 26;           // ✅ Works
// // age = 'twenty-six'; // ✅ Works (dynamic typing, though not recommended)

// // // const: Block-scoped, cannot be reassigned (use by default)
// // const name = 'Alice';
// // name = 'Bob';       // ❌ TypeError: Assignment to constant variable

// // // const with objects/arrays: The binding is constant, not the content
// // const person = { name: 'Alice' };
// // person.name = 'Bob';  // ✅ Works (mutating the object)
// // person = {};          // ❌ TypeError (reassigning the binding)

// // // var: Function-scoped (legacy, avoid)
// // var oldWay = 'Don\'t use this';

// // // camelCase (standard for JavaScript)
// // let firstName = 'John';
// // let totalAmount = 100;
// // let isActive = true;

// // // Rules:
// // // - Must start with letter, underscore, or $
// // // - Cannot start with number
// // // - Case-sensitive (myVar ≠ myvar)
// // // - Cannot use reserved words (let, const, function, if, etc.)

// // // Descriptive names (self-documenting code)
// // let x = 10;           // BAD: What is x?
// // let itemCount = 10;   // GOOD: Clear meaning
// // let userId = 42;      // GOOD
// // let isLoggedIn = true; // GOOD: Boolean naming convention

// // // 1. STRING: Text
// // let firstName = 'Alice';
// // let lastName = "Smith";
// // let message = `Hello, ${firstName}`;  // Template literal (backticks)
// // let multiline = `
// //     This is
// //     multiple lines
// // `;  // Template literals preserve line breaks

// // // Escape characters
// // let quote = 'She said "Hello"';
// // let quote2 = "She said \"Hello\"";  // Same thing
// // let path = 'C:\\Users\\Documents';  // Backslash

// // // 2. NUMBER: Integers and decimals
// // let age = 25;
// // let price = 19.99;
// // let negative = -42;
// // let notANumber = NaN;          // Result of invalid math (0/0, parseInt('hello'))
// // let infinity = Infinity;       // 1/0

// // // 3. BOOLEAN: true or false
// // let isLoggedIn = true;
// // let hasAccess = false;

// // // 4. UNDEFINED: Variable declared but no value assigned
// // let undefinedVar;
// // console.log(undefinedVar);  // undefined

// // // 5. NULL: Intentional absence of any value
// // let emptyValue = null;  // "I explicitly want this to be empty"

// // // 6. SYMBOL (advanced, unique identifiers)
// // const uniqueId = Symbol('id');

// // // 7. BIGINT (very large integers)
// // const bigNumber = 9007199254740991n;

// // //Typeof operator
// // console.log(typeof 'Hello');     // "string"
// // console.log(typeof 42);          // "number"
// // console.log(typeof true);        // "boolean"
// // console.log(typeof undefined);   // "undefined"
// // console.log(typeof null);        // "object" (historical bug in JavaScript!)
// // console.log(typeof Symbol());    // "symbol"
// // console.log(typeof {});          // "object"
// // console.log(typeof []);          // "object" (arrays are objects)
// // console.log(typeof function(){});// "function"

// // // Practical null check
// // let value = null;
// // if (value === null) {
// //     console.log('Value is null');
// // }

// // //Operators

// // //Arithmetic operators
// // let a = 10;
// // let b = 3;

// // console.log(a + b);    // 13 (addition)
// // console.log(a - b);    // 7  (subtraction)
// // console.log(a * b);    // 30 (multiplication)
// // console.log(a / b);    // 3.333... (division - returns float!)
// // console.log(a % b);    // 1  (modulus/remainder: 10 ÷ 3 = 3 remainder 1)
// // console.log(a ** b);   // 1000 (exponentiation: 10³)

// // // String concatenation
// // console.log('Hello' + ' ' + 'World');  // "Hello World"
// // console.log('5' + 3);     // "53" (number coerced to string)
// // console.log('5' - 3);     // 2 (string coerced to number for subtraction)
// // console.log('5' * '2');   // 10 (both coerced to numbers)

// // //Assignment operators
// // let x = 10;

// // x += 5;    // x = x + 5  → 15
// // x -= 3;    // x = x - 3  → 12
// // x *= 2;    // x = x * 2  → 24
// // x /= 4;    // x = x / 4  → 6
// // x %= 4;    // x = x % 4  → 2
// // x **= 3;   // x = x ** 3 → 8

// // // Increment/Decrement
// // let count = 0;
// // count++;   // Post-increment: returns 0, then count becomes 1
// // ++count;   // Pre-increment: count becomes 2, then returns 2
// // count--;   // Post-decrement: returns 2, then count becomes 1
// // --count;   // Pre-decrement: count becomes 0, then returns 0

// // // Difference matters in expressions:
// // let n = 5;
// // let result = n++;  // result = 5, n = 6 (post: assign then increment)
// // let result2 = ++n; // result2 = 7, n = 7 (pre: increment then assign)

// // //Comparison operators
// // // Strict Equality (ALWAYS use these)
// // console.log(5 === 5);     // true  (same value, same type)
// // console.log(5 === '5');   // false (different types - number vs string)
// // console.log(5 !== '5');   // true  (not strictly equal)

// // // Loose Equality (AVOID - unpredictable coercion)
// // console.log(5 == '5');    // true  (string coerced to number!)
// // console.log(0 == false);  // true  (both coerced!)
// // console.log('' == false); // true  (both coerced!)
// // console.log(null == undefined); // true (special case)

// // // Other comparisons
// // console.log(10 > 5);      // true
// // console.log(10 >= 10);    // true
// // console.log(5 < 10);      // true
// // console.log(5 <= 4);      // false

// // //Logical operators
// // // AND (&&) - both must be true
// // console.log(true && true);   // true
// // console.log(true && false);  // false
// // console.log(false && true);  // false
// // console.log(false && false); // false

// // // OR (||) - at least one must be true
// // console.log(true || true);   // true
// // console.log(true || false);  // true
// // console.log(false || true);  // true
// // console.log(false || false); // false

// // // NOT (!) - inverts the value
// // console.log(!true);  // false
// // console.log(!false); // true

// // // Short-circuit evaluation (important!)
// // // With &&, if first operand is false, second is skipped
// // console.log(false && console.log('This never runs'));  // false, doesn't log

// // // With ||, if first operand is true, second is skipped
// // console.log(true || console.log('This also never runs'));  // true, doesn't log

// // // Using in logic
// // let user = { name: 'Alice', role: 'admin' };
// // let hasPermission = (user.role === 'admin' || user.role === 'owner');  // true

// // // AND (&&): Both must be true
// // console.log(true && true);    // true
// // console.log(true && false);   // false
// // console.log(false && true);   // false

// // // OR (||): At least one must be true
// // console.log(true || false);   // true
// // console.log(false || false);  // false

// // // NOT (!): Flips the boolean
// // console.log(!true);           // false
// // console.log(!false);          // true

// // // Practical examples
// // let isLoggedIn = true;
// // let isAdmin = false;

// // if (isLoggedIn && isAdmin) {
// //     console.log('Welcome, Admin');
// // }

// // if (isLoggedIn || isAdmin) {
// //     console.log('Welcome, User');
// // }

// // // Short-circuit evaluation
// // let username = '';
// // let displayName = username || 'Guest';  // "Guest" (username is falsy)

// //Ternary operators
// // Traditional if/else (we'll cover this next)
// let age = 20;
// let status;
// if (age >= 18) {
//     status = 'Adult';
// } else {
//     status = 'Minor';
// }

// // Ternary: condition ? valueIfTrue : valueIfFalse
// let status2 = age >= 18 ? 'Adult' : 'Minor';

// // Can be chained (use sparingly for readability)
// let category = age < 13 ? 'Child' 
//              : age < 20 ? 'Teen'
//              : age < 65 ? 'Adult'
//              : 'Senior';



// // Single or double quotes
// let single = 'Hello';
// let double = "World";

// // Template literals (backticks) - the modern way
// let name = 'Alice';
// let greeting = `Hello, ${name}!`;  // "Hello, Alice!"
// let math = `2 + 2 = ${2 + 2}`;     // "2 + 2 = 4"

// // Multi-line with template literals
// let poem = `Roses are red,
// Violets are blue,
// JavaScript is fun,
// And so are you.`;  // Preserves line breaks


// let str = '  Hello, World!  ';

// // Case conversion
// console.log(str.toLowerCase());       // '  hello, world!  '
// console.log(str.toUpperCase());       // '  HELLO, WORLD!  '

// // Trimming whitespace
// console.log(str.trim());              // 'Hello, World!'
// console.log(str.trimStart());         // 'Hello, World!  '
// console.log(str.trimEnd());           // '  Hello, World!'

// // Length
// console.log(str.length);              // 17 (including spaces)

// // Searching
// console.log(str.includes('World'));   // true
// console.log(str.includes('world'));   // false (case-sensitive)
// console.log(str.indexOf('World'));    // 9 (position, -1 if not found)
// console.log(str.startsWith('  He'));  // true
// console.log(str.endsWith('!  '));     // true

// // Extracting substrings
// console.log(str.slice(2, 7));         // 'Hello' (start index, end index - exclusive)
// console.log(str.slice(7));            // 'World!  ' (from index 7 to end)
// console.log(str.slice(-6, -2));       // 'orld' (negative counts from end)

// // Replacing
// console.log(str.replace('World', 'JavaScript'));  // '  Hello, JavaScript!  '
// console.log(str.replaceAll('l', 'L'));            // '  HeLLo, WorLd!  ' (replaces all)

// // Splitting and joining
// let csv = 'apple,banana,grape';
// let fruits = csv.split(',');         // ['apple', 'banana', 'grape']
// console.log(fruits.join(' | '));     // 'apple | banana | grape'

// // Padding
// console.log('42'.padStart(5, '0'));  // '00042'
// console.log('42'.padEnd(5, '.'));    // '42...'

// // Repeat
// console.log('Ha'.repeat(3));         // 'HaHaHa'

// let original = 'Hello';
// original.toUpperCase();
// console.log(original);  // Still 'Hello' - the method returned a new string!

// // You must reassign to keep the change
// original = original.toUpperCase();
// console.log(original);  // Now 'HELLO'


// let temperature = 25;

// if (temperature > 30) {
//     console.log("It's hot outside!");
// } else if (temperature > 20) {
//     console.log("It's warm outside.");
// } else if (temperature > 10) {
//     console.log("It's cool outside.");
// } else {
//     console.log("It's cold outside!");
// }
// // Output: "It's warm outside."

// // A statement with no braces (single line only)
// if (temperature > 30) console.log('Hot!');


// // FALSY VALUES (6 of them): These evaluate to false
// if (false)         {}  // false
// if (0)             {}  // falsy
// if (-0)            {}  // falsy
// if ('')            {}  // falsy (empty string)
// if (null)          {}  // falsy
// if (undefined)     {}  // falsy
// if (NaN)           {}  // falsy

// // TRUTHY VALUES: Everything else
// if (true)          {}  // true
// if (1)             {}  // truthy (any non-zero number)
// if (-1)            {}  // truthy
// if ('hello')      {}  // truthy (any non-empty string)
// if (' ')           {}  // truthy (space is a character)
// if ('false')      {}  // truthy (non-empty string, even if it says "false")
// if ([])            {}  // truthy (empty array)
// if ({})            {}  // truthy (empty object)
// if (function(){}) {}  // truthy

// let username = '';  // Could be empty (falsy)
// let displayName = username || 'Guest';  // 'Guest'

// let userCount = 0;  // Falsy, but valid value!
// let displayCount = userCount || 'Unknown';  // 'Unknown' - BUG!
// // Better:
// let displayCount2 = userCount !== undefined ? userCount : 'Unknown';

// let day = 3;

// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//     case 7:  // Falls through to the same code
//         console.log('Weekend!');
//         break;
//     default:
//         console.log('Invalid day');
// }
// // Output: "Wednesday"

// // IMPORTANT: Without 'break', execution "falls through" to the next case

// // Syntax: for (initialization; condition; afterthought)
// for (let i = 0; i < 5; i++) {
//     console.log(`Iteration ${i}`);
// }
// // Output: Iteration 0, Iteration 1, Iteration 2, Iteration 3, Iteration 4

// // Counting backward
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }
// // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// // Skipping iterations
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);  // 0, 2, 4, 6, 8, 10
// }

// // while: Check condition FIRST, then execute
// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// // Be careful with infinite loops!
// // while (true) { }  // This would run forever and crash your browser

// // do...while: Execute FIRST, then check condition (runs at least once)
// let attempts = 0;
// do {
//     console.log(`Attempt ${attempts + 1}`);
//     attempts++;
// } while (attempts < 3);


const fruits = ['apple', 'banana', 'orange', 'grape'];

// for...of: Get each value
for (const fruit of fruits) {
    console.log(fruit);
}
// Output: apple, banana, orange, grape

// Compare with traditional for loop:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Same output, but for...of is cleaner and less error-prone


const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Iterates over property names
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York

// ⚠️ Warning: for...in iterates over inherited properties too!
// For arrays, use for...of instead


// break: Exit the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Stop when i reaches 5
    }
    console.log(i);  // 0, 1, 2, 3, 4
}

// continue: Skip this iteration, move to the next
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip 2
    }
    console.log(i);  // 0, 1, 3, 4
}


// Basic logging
console.log('Basic message');
console.log('Multiple', 'arguments', 42);

// Warning and error (styled differently)
console.warn('This is a warning');
console.error('This is an error');

// Table format (great for arrays/objects)
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
console.table(users);
// Displays a sortable table in the console

// Group related logs
console.group('User Details');
console.log('Name: Alice');
console.log('Age: 30');
console.groupEnd();

// Time operations
console.time('Operation');
// ... some code ...
console.timeEnd('Operation');  // Prints: Operation: 2.345ms

// Clear the console
console.clear();


// Example error:
// Uncaught ReferenceError: user is not defined
//     at script.js:15:5

// Breakdown:
// - "ReferenceError": Type of error
// - "user is not defined": What went wrong
// - "script.js:15:5": File name, line number, column number

// Convert Celsius to Fahrenheit
// Formula: F = C × 9/5 + 32
function celsiusToFahrenheit(celsius) {
    // Your code here
}
console.log(celsiusToFahrenheit(0));   // Should output 32
console.log(celsiusToFahrenheit(100)); // Should output 212

// Check password strength based on rules
// Return 'weak', 'medium', or 'strong'
function checkPassword(password) {
    // - Less than 8 characters: 'weak'
    // - 8+ chars, only letters: 'medium'
    // - 8+ chars, includes numbers AND symbols: 'strong'
    // Your code here
}
console.log(checkPassword('abc'));       // 'weak'
console.log(checkPassword('abcdefgh'));  // 'medium'
console.log(checkPassword('abc123!@#')); // 'strong'

// Print numbers 1 to 100
// If divisible by 3: print "Fizz" instead
// If divisible by 5: print "Buzz" instead
// If divisible by both: print "FizzBuzz"
for (let i = 1; i <= 100; i++) {
    // Your code here
}

// sting mutation
// Given a full name string, return initials
function getInitials(fullName) {
    // "John Doe" → "J.D."
    // "Jane Mary Smith" → "J.M.S."
    // Your code here
    
}
console.log(getInitials('John Doe'));        // 'J.D.'
console.log(getInitials('Jane Mary Smith')); // 'J.M.S.'

// Tip Calculator
// Calculate tip based on bill and service quality
function calculateTip(bill, service) {
    // service can be: 'excellent' (25%), 'good' (20%), 'average' (15%), 'poor' (10%)
    // Return total including tip
    // Your code here
}
console.log(calculateTip(100, 'excellent')); // 125
console.log(calculateTip(50, 'average'));    // 57.5
