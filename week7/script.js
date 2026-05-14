// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     isStudent: false,
//     address: {
//         street: '123 Main St',
//         city: 'Boston',
//         zipCode: '02101'
//     },
//     hobbies: ['reading', 'hiking', 'coding']
// };

// const person = {
//     firstName: 'Alice',
//     lastName: 'Smith',
//     age: 30
// };

// // Dot notation (most common - use when you know the property name)
// console.log(person.firstName);  // 'Alice'
// console.log(person.age);        // 30

// // Bracket notation (use when property name is dynamic or contains special chars)
// console.log(person['lastName']);  // 'Smith'

// const key = 'firstName';
// console.log(person[key]);  // 'Alice' (dynamic property access)

// // Bracket notation is required for:
// const weirdObj = {
//     'property-with-dashes': 'value',
//     '123startsWithNumber': 'also works'
// };
// console.log(weirdObj['property-with-dashes']);
// // weirdObj.property-with-dashes  // ❌ Syntax error

// const car = {
//     brand: 'Toyota',
//     model: 'Camry'
// };

// // Add new properties (objects are mutable)
// car.year = 2024;
// car['color'] = 'blue';
// console.log(car);  // { brand: 'Toyota', model: 'Camry', year: 2024, color: 'blue' }

// // Modify existing properties
// car.model = 'Corolla';
// console.log(car.model);  // 'Corolla'

// // Delete properties
// delete car.color;
// console.log(car.color);  // undefined
// console.log(car);  // { brand: 'Toyota', model: 'Corolla', year: 2024 }

// // Checking if a property exists
// console.log('year' in car);            // true
// console.log(car.hasOwnProperty('year')); // true
// console.log(car.hasOwnProperty('toString')); // false (inherited, not own)




// // Property value shorthand (ES6)
// const name = 'Alice';
// const age = 30;

// // Old way
// const oldWay = { name: name, age: age };

// // New way (when variable name matches property name)
// const person = { name, age };
// console.log(person);  // { name: 'Alice', age: 30 }

// // Computed property names
// const propName = 'favoriteColor';
// const user = {
//     name: 'Bob',
//     [propName]: 'blue',  // Property name is the VALUE of propName
//     ['is' + 'Admin']: true  // Can be any expression
// };
// console.log(user);  // { name: 'Bob', favoriteColor: 'blue', isAdmin: true }

// const person = {
//     name: 'Alice',
//     age: 30,
    
//     // Method shorthand (modern, preferred)
//     greet() {
//         console.log(`Hello, I'm ${this.name}`);
//     },
    
//     // Traditional function expression (also works)
//     sayAge: function() {
//         console.log(`I am ${this.age} years old`);
//     }
// };

// person.greet();   // "Hello, I'm Alice"
// person.sayAge();  // "I am 30 years old"

// const user1 = {
//     name: 'Alice',
//     greet() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// const user2 = {
//     name: 'Bob',
//     greet() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// user1.greet();  // "Hi, I'm Alice" (this = user1)
// user2.greet();  // "Hi, I'm Bob"   (this = user2)

// // ⚠️ 'this' can be lost!
// const greetFunction = user1.greet;  // Assign method to variable
// greetFunction();  // "Hi, I'm undefined" (this = window/global, not user1)

// // Arrow function methods DON'T have their own 'this'
// const user3 = {
//     name: 'Charlie',
//     greet: () => {
//         console.log(`Hi, I'm ${this.name}`);  // this = surrounding scope (window)
//     }
// };
// user3.greet();  // "Hi, I'm undefined" (this is the outer scope, not user3)

// // Rule: Use regular functions for object methods unless you specifically need arrow behavior


// // In event listeners, 'this' refers to the element that fired the event
// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     console.log(this);  // <button> element (the button that was clicked)
//     this.style.backgroundColor = 'red';
// });

// // With arrow function, 'this' is the surrounding scope (NOT the button)
// button.addEventListener('click', () => {
//     console.log(this);  // window (or undefined in strict mode)
//     // this.style doesn't work here!
// });

// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// // Object.keys() - Array of property names
// const keys = Object.keys(person);
// console.log(keys);  // ['name', 'age', 'city']

// // Object.values() - Array of property values
// const values = Object.values(person);
// console.log(values);  // ['Alice', 30, 'New York']

// // Object.entries() - Array of [key, value] pairs
// const entries = Object.entries(person);
// console.log(entries);  
// // [['name', 'Alice'], ['age', 30], ['city', 'New York']]

// // Practical: Iterate with forEach
// Object.entries(person).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
// // name: Alice
// // age: 30
// // city: New York

// // for...in loop (includes inherited properties - be careful)
// for (const key in person) {
//     if (person.hasOwnProperty(key)) {  // Filter out inherited
//         console.log(`${key}: ${person[key]}`);
//     }
// }


// const original = { name: 'Alice', age: 30 };

// // Shallow copy with spread operator
// const copy = { ...original };
// console.log(copy);  // { name: 'Alice', age: 30 }
// console.log(copy === original);  // false (different objects)

// // Merge objects
// const defaults = { theme: 'light', fontSize: 16 };
// const userSettings = { fontSize: 20, showSidebar: true };

// const settings = { ...defaults, ...userSettings };
// console.log(settings);  
// // { theme: 'light', fontSize: 20, showSidebar: true }
// // Later objects override earlier ones

// // Object.assign() (older way, still common)
// const merged = Object.assign({}, defaults, userSettings);

// // ⚠️ Spread and Object.assign do SHALLOW copies
// // Nested objects are shared, not copied
// const obj = {
//     name: 'Alice',
//     address: { city: 'NYC' }
// };

// const shallowCopy = { ...obj };
// shallowCopy.address.city = 'Boston';
// console.log(obj.address.city);  // 'Boston' (original was mutated!)


// const person = {
//     firstName: 'Alice',
//     lastName: 'Smith',
//     age: 30,
//     address: {
//         city: 'New York',
//         state: 'NY'
//     }
// };

// // Extract properties into variables
// const { firstName, lastName, age } = person;
// console.log(firstName);  // 'Alice'
// console.log(age);        // 30

// // Rename during destructuring
// const { firstName: fName, lastName: lName } = person;
// console.log(fName);  // 'Alice'

// // Default values
// const { middleName = 'None' } = person;
// console.log(middleName);  // 'None'

// // Nested destructuring
// const { address: { city, state } } = person;
// console.log(city);  // 'New York'

// // Function parameters destructuring
// function displayUser({ name, age, email = 'N/A' }) {
//     console.log(`${name} (${age}) - ${email}`);
// }

// displayUser({ name: 'Alice', age: 30 });  // "Alice (30) - N/A"

// const person = {
//     name: 'Alice',
//     age: 30,
//     isAdmin: false,
//     hobbies: ['reading', 'coding']
// };

// // Object → JSON string (serialization)
// const jsonString = JSON.stringify(person);
// console.log(jsonString);  
// // '{"name":"Alice","age":30,"isAdmin":false,"hobbies":["reading","coding"]}'

// // JSON string → Object (parsing)
// const parsed = JSON.parse(jsonString);
// console.log(parsed.name);  // 'Alice'

// // JSON.stringify with pretty formatting
// console.log(JSON.stringify(person, null, 2));
// // {
// //   "name": "Alice",
// //   "age": 30,
// //   "isAdmin": false,
// //   "hobbies": [
// //     "reading",
// //     "coding"
// //   ]
// // }

// // ⚠️ JSON doesn't support:
// // - Functions
// // - undefined
// // - Symbols
// // - Dates (converted to strings)
// // - Circular references (causes error)


// console.log(document);            // The entire document
// console.log(document.head);       // <head> element
// console.log(document.body);       // <body> element
// console.log(document.title);      // Current page title
// document.title = 'New Title';     // Change the title!

// console.log(document.URL);        // Current URL
// console.log(document.domain);     // Current domain

// // By ID (fastest, returns single element or null)
// const header = document.getElementById('main-header');
// console.log(header);  // <header id="main-header">...</header>

// // By Class (returns live HTMLCollection - updates when DOM changes)
// const cards = document.getElementsByClassName('card');
// console.log(cards);      // HTMLCollection (array-like, not a real array)
// console.log(cards[0]);   // First card
// console.log(cards.length); // Number of cards

// // By Tag (returns live HTMLCollection)
// const paragraphs = document.getElementsByTagName('p');

// // By CSS Selector - Single (returns first match or null)
// const firstCard = document.querySelector('.card');
// const header2 = document.querySelector('#main-header');
// const navLink = document.querySelector('nav a');

// // By CSS Selector - All (returns static NodeList)
// const allCards = document.querySelectorAll('.card');
// const activeItems = document.querySelectorAll('.active, .selected');
// const navLinks = document.querySelectorAll('nav a');

// // querySelector and querySelectorAll are the modern standard
// // They accept any valid CSS selector


// // HTMLCollection: LIVE (updates when DOM changes)
// const liveCollection = document.getElementsByClassName('card');
// // If you add a new .card element, liveCollection automatically includes it

// // NodeList: STATIC (snapshot at time of selection)
// const staticList = document.querySelectorAll('.card');
// // If you add a new .card element, staticList does NOT update

// // Converting to real arrays for array methods
// const cardsArray1 = Array.from(staticList);    // Method 1
// const cardsArray2 = [...staticList];            // Method 2 (spread)

// // Now you can use map, filter, etc.
// cardsArray1.forEach(card => console.log(card));

// const element = document.querySelector('.card');

// // Parent
// console.log(element.parentElement);    // Parent element
// console.log(element.parentNode);       // Parent node (could be text node)

// // Children
// console.log(element.children);         // HTMLCollection of child elements
// console.log(element.childNodes);       // NodeList of all child nodes (including text)
// console.log(element.firstElementChild); // First child element
// console.log(element.lastElementChild);  // Last child element

// // Siblings
// console.log(element.previousElementSibling); // Previous sibling element
// console.log(element.nextElementSibling);     // Next sibling element

// // Closest ancestor matching selector (traverses UP)
// const article = element.closest('article');   // Find nearest article ancestor
// const section = element.closest('section');   // Find nearest section ancestor

// const element = document.querySelector('.content');

// // textContent: Get/set ALL text (ignores HTML tags, best performance, safe)
// console.log(element.textContent);
// element.textContent = 'New text content';

// // innerText: Get/set RENDERED text (respects CSS display:none, slower)
// console.log(element.innerText);
// element.innerText = 'New visible text';

// // innerHTML: Get/set HTML content (⚠️ security risk with user input!)
// console.log(element.innerHTML);
// element.innerHTML = '<strong>Bold text</strong> <em>Italic text</em>';

// // ⚠️ NEVER use innerHTML with user input (XSS vulnerability)
// // BAD:
// element.innerHTML = userInput;  // User could inject <script> tags!

// // GOOD:
// element.textContent = userInput;  // Safe - treats input as text only

// const link = document.querySelector('a');
// const image = document.querySelector('img');

// // Standard attributes (direct properties)
// console.log(link.href);        // Full resolved URL
// console.log(link.id);          // 'my-link'
// console.log(image.src);        // Full image URL
// console.log(image.alt);        // Alt text

// // Modify standard attributes
// link.href = 'https://example.com';
// image.alt = 'New description';

// // All attributes (including custom data-* attributes)
// link.setAttribute('target', '_blank');
// link.setAttribute('data-track-id', '12345');
// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('data-track-id'));

// // Check and remove
// console.log(link.hasAttribute('target'));  // true
// link.removeAttribute('target');

// // Data attributes shortcut (data-*)
// link.dataset.trackId = '67890';  // Sets data-track-id="67890"
// console.log(link.dataset.trackId);  // '67890'
// // NOTE: data-some-value becomes dataset.someValue (camelCase)

// const element = document.querySelector('.box');

// // classList API (preferred way to manage classes)
// element.classList.add('active', 'highlight');   // Add multiple classes
// element.classList.remove('active');              // Remove class
// element.classList.toggle('dark-mode');           // Add if absent, remove if present
// element.classList.toggle('dark-mode', true);     // Force add
// element.classList.toggle('dark-mode', false);    // Force remove
// element.classList.contains('highlight');         // Check if class exists
// element.classList.replace('highlight', 'dim');   // Replace one class with another

// // Old className property (replaces ALL classes - rarely used)
// element.className = 'box active';  // Overwrites all existing classes

// const element = document.querySelector('.box');

// // Inline styles (camelCase property names)
// element.style.backgroundColor = 'blue';
// element.style.color = 'white';
// element.style.padding = '20px';
// element.style.borderRadius = '8px';
// element.style.display = 'none';   // Hide element

// // Get computed style (what's actually applied, including CSS files)
// const styles = getComputedStyle(element);
// console.log(styles.fontSize);
// console.log(styles.backgroundColor);
// console.log(styles.width);

// // ⚠️ Best practice: Toggle classes to change styles, don't set individual styles
// // BAD: element.style.background = 'blue'; element.style.color = 'white';
// // GOOD: element.classList.add('active-theme');

// // Create a new element
// const div = document.createElement('div');
// div.textContent = 'This is a new div';
// div.classList.add('card', 'shadow');
// div.setAttribute('data-id', '123');
// div.style.backgroundColor = '#f0f0f0';

// // Create from HTML string (use with caution)
// // const div = document.createRange().createContextualFragment('<div class="card">Hello</div>');

// const container = document.querySelector('.container');
// const newElement = document.createElement('p');
// newElement.textContent = 'Inserted paragraph';

// // Append as last child (most common)
// container.appendChild(newElement);

// // Modern methods (more flexibility)
// container.append('Text node too!');              // Can append text
// container.prepend('First child');                // Insert as first child
// container.before('Before container');            // Insert before element
// container.after('After container');              // Insert after element

// // Insert relative to a specific child
// const referenceElement = container.children[1];
// container.insertBefore(newElement, referenceElement);

// // Replace existing element
// const oldElement = document.querySelector('.old');
// oldElement.replaceWith(newElement);

// // Insert HTML string (⚠️ security risk)
// container.insertAdjacentHTML('beforeend', '<div class="new">Inserted</div>');
// // Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'


// const element = document.querySelector('.remove-me');

// // Modern method (preferred)
// element.remove();

// // Traditional method (still works)
// element.parentNode.removeChild(element);

// // Clear all children
// const container = document.querySelector('.container');
// container.innerHTML = '';  // Quick but DOM-unsafe
// // Better:
// while (container.firstChild) {
//     container.removeChild(container.firstChild);
// }
// // Or modern:
// container.replaceChildren();  // Removes all children


// const template = document.querySelector('.card');

// // Shallow clone (element only, no children)
// const shallowClone = template.cloneNode(false);

// // Deep clone (element + all descendants)
// const deepClone = template.cloneNode(true);

// // Modify and insert
// deepClone.querySelector('.title').textContent = 'New Title';
// template.after(deepClone);

// const button = document.querySelector('#submit-btn');

// // addEventListener (modern, preferred)
// button.addEventListener('click', function(event) {
//     console.log('Button clicked!');
//     console.log(event);  // Event object with details
// });

// // Arrow function version
// button.addEventListener('click', (event) => {
//     console.log('Clicked!', event.target);
// });

// // Named function (can be removed later)
// function handleClick(event) {
//     console.log('Handled!');
// }
// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);  // Remove listener


// // Mouse Events
// element.addEventListener('click', handler);           // Single click
// element.addEventListener('dblclick', handler);        // Double click
// element.addEventListener('mousedown', handler);       // Mouse button pressed
// element.addEventListener('mouseup', handler);         // Mouse button released
// element.addEventListener('mouseenter', handler);      // Mouse enters element
// element.addEventListener('mouseleave', handler);      // Mouse leaves element
// element.addEventListener('mousemove', handler);       // Mouse moves over element
// element.addEventListener('contextmenu', handler);     // Right-click

// // Keyboard Events
// document.addEventListener('keydown', (event) => {
//     console.log(event.key);       // 'a', 'Enter', 'Escape'
//     console.log(event.code);      // 'KeyA', 'Enter', 'Escape'
//     console.log(event.keyCode);   // Deprecated numeric code
// });
// document.addEventListener('keyup', handler);

// // Form Events
// form.addEventListener('submit', (event) => {
//     event.preventDefault();  // ⚠️ Prevent page reload!
//     console.log('Form submitted');
// });
// input.addEventListener('focus', handler);     // Input receives focus
// input.addEventListener('blur', handler);      // Input loses focus
// input.addEventListener('change', handler);    // Value changed AND blurred
// input.addEventListener('input', handler);     // Value changing (every keystroke)

// // Document/Window Events
// document.addEventListener('DOMContentLoaded', handler);  // HTML loaded, DOM ready
// window.addEventListener('load', handler);                // Everything loaded (images too)
// window.addEventListener('scroll', handler);              // Page scrolled
// window.addEventListener('resize', handler);              // Window resized

// // Touch Events (mobile)
// element.addEventListener('touchstart', handler);
// element.addEventListener('touchmove', handler);
// element.addEventListener('touchend', handler);

// element.addEventListener('click', function(event) {
//     console.log(event.type);           // 'click'
//     console.log(event.target);         // The element that was clicked
//     console.log(event.currentTarget);  // The element the listener is attached to
//     console.log(event.clientX);        // Mouse X position (viewport)
//     console.log(event.clientY);        // Mouse Y position (viewport)
//     console.log(event.pageX);          // Mouse X position (document)
//     console.log(event.pageY);          // Mouse Y position (document)
    
//     event.preventDefault();  // Prevent default behavior (links, form submits)
//     event.stopPropagation(); // Stop event from bubbling up
// });


// // Instead of adding listeners to every <li>:
// // BAD:
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', handleClick);
// });

// // GOOD: Add one listener to the parent
// const list = document.querySelector('ul');
// list.addEventListener('click', (event) => {
//     // Check if the click was on an <li>
//     if (event.target.tagName === 'LI') {
//         console.log('Clicked:', event.target.textContent);
//     }
    
//     // Or use closest to find the nearest matching ancestor
//     const li = event.target.closest('li');
//     if (li) {
//         console.log('Clicked:', li.textContent);
//     }
// });

// // This is great for dynamically added elements too!
// // New <li> elements automatically work with the parent's listener


// // Stop a link from navigating
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Link clicked, but no navigation');
// });

// // Stop form from submitting (to handle with JavaScript)
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // Validate form, send with fetch, etc.
// });


// // Events bubble UP by default (child → parent → grandparent)
// document.querySelector('.child').addEventListener('click', () => {
//     console.log('Child clicked');
// });

// document.querySelector('.parent').addEventListener('click', () => {
//     console.log('Parent clicked');
// });

// document.querySelector('.grandparent').addEventListener('click', () => {
//     console.log('Grandparent clicked');
// });

// // Click on child → logs: "Child clicked", "Parent clicked", "Grandparent clicked"

// // Stop bubbling
// document.querySelector('.child').addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('Child clicked (bubbling stopped)');
// });

// // Capture phase (rarely needed): runs BEFORE bubbling
// document.querySelector('.grandparent').addEventListener('click', () => {
//     console.log('Captured!');
// }, true);  // true = capture phase (runs first)

