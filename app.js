<<<<<<< HEAD
// Get the form element and the tbody element
const form = document.getElementById('expense-form');
const tbody = document.querySelector('#expense-table tbody');

// Load expenses from local storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Render the expenses in the table
function renderExpenses() {
  // Clear the tbody first
  tbody.innerHTML = '';
  // Loop through the expenses and create a row for each
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${expense.category}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>${expense.description}</td>
      <td><button class="edit-button" data-index="${i}">Edit</button></td>
      <td><button class="delete-button" data-index="${i}">Delete</button></td>
   
      `;
      tbody.appendChild(tr);
    }
}

// Save the expenses to local storage
/*function saveExpenses() {
.localStorage.setItem('expenses', JSON.stringify(expenses));
}*/
axios.post(
"https://crudcrud.com/api/7e4a64b8db9d4115969b385aa058a509/expense"
,expenses)
.then(res => {
  
  console.log(res)
})
.catch(err => {
  console.error(err); 
})

// Add an expense
function addExpense(category, amount, description) {
// Create a new expense object
const expense = {
category,
amount: parseFloat(amount),
description,
};
// Add the expense to the expenses array
expenses.push(expense);
// Save the expenses to local storage
saveExpenses();
// Render the expenses in the table
renderExpenses();
}

// Delete an expense
function deleteExpense(index) {
// Remove the expense from the expenses array
expenses.splice(index, 1);
// Save the expenses to local storage
saveExpenses();
// Render the expenses in the table
renderExpenses();
}

// Edit an expense
function editExpense(index, category, amount, description) {
// Update the expense in the expenses array
expenses[index].category = category;
expenses[index].amount = parseFloat(amount);
expenses[index].description = description;
// Save the expenses to local storage
saveExpenses();
// Render the expenses in the table
renderExpenses();
}

// Handle form submit event
form.addEventListener('submit', (event) => {
event.preventDefault();
const category = event.target.elements.category.value.trim();
const amount = event.target.elements.amount.value.trim();
const description = event.target.elements.description.value.trim();
if (category && amount && description) {
addExpense(category, amount, description);
form.reset();
}
});

// Handle delete button click event
tbody.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-button')) {
const index = event.target.getAttribute('data-index');
deleteExpense(index);
}
});

// Handle edit button click event
tbody.addEventListener('click', (event) => {
if (event.target.classList.contains('edit-button')) {
const index = event.target.getAttribute('data-index');
const expense = expenses[index];
const category = prompt('Enter new category:', expense.category);
const amount = prompt('Enter new amount:', expense.amount);
const description = prompt('Enter new description:', expense.description);
if (category && amount && description) {
editExpense(index, category, amount, description);
}
}
});

// Render the expenses in the table
=======
// Get the form element and the tbody element
const form = document.getElementById('expense-form');
const tbody = document.querySelector('#expense-table tbody');

// Load expenses from local storage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Render the expenses in the table
function renderExpenses() {
  // Clear the tbody first
  tbody.innerHTML = '';
  // Loop through the expenses and create a row for each
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${expense.category}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>${expense.description}</td>
      <td><button class="edit-button" data-index="${i}">Edit</button></td>
      <td><button class="delete-button" data-index="${i}">Delete</button></td>
   
      `;
      tbody.appendChild(tr);
    }
}

// Save the expenses to local storage
function saveExpenses() {
localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Add an expense
function addExpense(category, amount, description) {
// Create a new expense object
const expense = {
category,
amount: parseFloat(amount),
description,
};
// Add the expense to the expenses array
expenses.push(expense);
// Save the expenses to local storage
saveExpenses();
// Render the expenses in the table
renderExpenses();
}

// Delete an expense
function deleteExpense(index) {
// Remove the expense from the expenses array
expenses.splice(index, 1);
// Save the expenses to local storage
saveExpenses();
// Render the expenses in the table
renderExpenses();
}

// Edit an expense
function editExpense(index, category, amount, description) {
// Update the expense in the expenses array
expenses[index].category = category;
expenses[index].amount = parseFloat(amount);
expenses[index].description = description;
// Save the expenses to local storage
saveExpenses();
// Render the expenses in the table
renderExpenses();
}

// Handle form submit event
form.addEventListener('submit', (event) => {
event.preventDefault();
const category = event.target.elements.category.value.trim();
const amount = event.target.elements.amount.value.trim();
const description = event.target.elements.description.value.trim();
if (category && amount && description) {
addExpense(category, amount, description);
form.reset();
}
});

// Handle delete button click event
tbody.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-button')) {
const index = event.target.getAttribute('data-index');
deleteExpense(index);
}
});

// Handle edit button click event
tbody.addEventListener('click', (event) => {
if (event.target.classList.contains('edit-button')) {
const index = event.target.getAttribute('data-index');
const expense = expenses[index];
const category = prompt('Enter new category:', expense.category);
const amount = prompt('Enter new amount:', expense.amount);
const description = prompt('Enter new description:', expense.description);
if (category && amount && description) {
editExpense(index, category, amount, description);
}
}
});

// Render the expenses in the table
>>>>>>> origin/main
renderExpenses();