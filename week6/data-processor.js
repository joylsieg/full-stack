// Example 1 Shoping cart: Calculate total price of items in cart
const cart = [];

function addItem(cart, name, price, quantity = 1) {
    // Add item object to cart array
    // { name, price, quantity }
    // Return updated cart
}

function removeItem(cart, name) {
    // Remove item by name
    // Return updated cart (as new array, don't mutate)
}

function getTotal(cart) {
    // Calculate total price (price × quantity for all items)
    // Return total
}

function getItemCount(cart) {
    // Count total items (sum of all quantities)
    // Return count
}

// Test
addItem(cart, 'Laptop', 999, 1);
addItem(cart, 'Mouse', 25, 2);
addItem(cart, 'Keyboard', 75, 1);
console.log(getTotal(cart));     // 1124
console.log(getItemCount(cart)); // 4

// Example 2: Student Grade Analyzer
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'Diana', score: 95 },
    { name: 'Eve', score: 60 }
];

function getAverageScore(students) {
    // Return average score
}

function getHighestScorer(students) {
    // Return the student object with highest score
}

function getLowestScorer(students) {
    // Return the student object with lowest score
}

function getPassingStudents(students, passingScore = 70) {
    // Return array of students who passed (score >= passingScore)
}

function getGradeDistribution(students) {
    // Return object: { A: count, B: count, C: count, D: count, F: count }
    // A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: < 60
}

console.log(getAverageScore(students));  // 82
console.log(getHighestScorer(students)); // { name: 'Diana', score: 95 }
console.log(getGradeDistribution(students));


//Exercise 3: Array Method Chaining
const transactions = [
    { type: 'income', amount: 1000 },
    { type: 'expense', amount: 200 },
    { type: 'income', amount: 500 },
    { type: 'expense', amount: 150 },
    { type: 'income', amount: 2000 },
    { type: 'expense', amount: 800 }
];

// Calculate net total (income - expenses) using chaining
function calculateNetTotal(transactions) {
    // Use filter and reduce in a chain
    // Sum all incomes, subtract sum of all expenses
}

// Get largest transaction of a given type
function getLargestTransaction(transactions, type) {
    // Use filter and reduce (or filter and sort)
}

console.log(calculateNetTotal(transactions));  // 2350
console.log(getLargestTransaction(transactions, 'expense'));  // { type: 'expense', amount: 800 }