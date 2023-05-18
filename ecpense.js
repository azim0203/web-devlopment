const tbody = document.querySelector('#expense-table tbody');

axios.get('https://crudcrud.com/api/e1cd423c257044a69bded75ab47557a1/expenses')
  .then(response => {
    response.data.forEach(expense => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${expense.category}</td>
        <td>${expense.amount}</td>
        <td>${expense.description}</td>
      `;
      tbody.appendChild(newRow);
    });
  })
  .catch(error => console.error(error));

// Get the expense ID from the user
const expenseId = prompt('Enter the expense ID: ');

// Create the expense object
const expense = {
  category: 'New Category',
  amount: 99.99,
  description: 'New Description'
};

// Make the PUT request
axios.put(`https://crudcrud.com/api/e1cd423c257044a69bded75ab47557a1/expenses/${expenseId}`, expense)
  .then(response => {
    // Update the expense table with the new data
    tbody.innerHTML = response.data.map(expense => `
      <tr>
        <td>${expense.category}</td>
        <td>${expense.amount}</td>
        <td>${expense.description}</td>
      </tr>`).join('');
    tbody.reload();
  })
  .catch(error => console.error(error));



