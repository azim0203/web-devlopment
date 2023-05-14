const form = document.getElementById('appointment-form');
const table = document.getElementById('appointments').querySelector('tbody');

// function to get appointments from server and populate the table
function getAppointments() {
  axios.get('https://crudcrud.com/api/e1cd423c257044a69bded75ab47557a1/appointments')
    .then(response => {
      // clear the table before adding new rows
      table.innerHTML = '';
      // iterate through the appointments and add a row for each one
      response.data.forEach(appointment => {
        const row = table.insertRow();
        row.innerHTML = `
          <td>${appointment.name}</td>
          <td>${appointment.email}</td>
          <td>${appointment.phone}</td>
        `;
      });
    })
    .catch(error => console.error(error));
}

// call getAppointments on page load
getAppointments();

// function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const appointment = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone')
  };

  // POST the new appointment to the server
  axios.post('https://crudcrud.com/api/e1cd423c257044a69bded75ab47557a1/appointments', appointment)
    .then(response => {
      // add a new row to the table for the newly created appointment
      const row = table.insertRow();
      row.innerHTML = `
        <td>${response.data.name}</td>
        <td>${response.data.email}</td>
        <td>${response.data.phone}</td>
      `;
      // reset the form
      form.reset();
    })
    .catch(error => console.error(error));
}

// add event listener to the form
form.addEventListener('submit', handleSubmit);
