function getAppointments(){
  const appoitnmentList =document.getElementById('appointmentList');
  appoitnmentList.innerHTML='';
  axios.get('https://crudcrud.com/api/bc1271a166654f7a97fa726dafda8d40/appointment')
  .then(res => {
    const appointments= res.data;
    appointments.forEach(element => {
      const ListItem=document.createElement('li');

      const name =document.createElement('span');
      name.innerText=`Name: ${element.name}`;
      ListItem.appendChild(name);

      const number =document.createElement('span');
      number.innerText=`Number: ${element.number}`;
      ListItem.appendChild(number);

      const email =document.createElement('span');
      name.innerText=`Email: ${element.name}`;
      ListItem.appendChild(name);

      const editButton= createButton('Edit',()=>editAppointment(element));
      const deleteButton= createButton('Delete',()=>deleteAppointment(element._id))

      ListItem.appendChild(editButton);
      ListItem.appendChild(deleteButton);
      appoitnmentList.appendChild(ListItem);



    });
  })
  .catch(err => {
    console.error(err); 
  })
  
}

function createButton(text, onClick){
  const button= document.createElement('button');
  button.textContent=text;
  button.addEventListener('click',onClick);
  return button;
}




function saveAppointment(event){
  event.preventDefault();

  const appointmentId = document.getElementById('appointmentId').value;
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const email= document.getElementById('email').value;

  const appointment={
    name: name,
    number : number,
    email : email
  };

  const url =appointmentId?
  `https://crudcrud.com/api/bc1271a166654f7a97fa726dafda8d40/appointment/${appointmentId}` :
  'https://crudcrud.com/api/bc1271a166654f7a97fa726dafda8d40/appointment';

  const request = appointmentId?
  axios.put(url,appointment):
  axios.post(url, appointment);

  request.then(Response=>{
    getAppointments();
    document.getElementById('appointmentForm').reset();

  }

  ).catch(error=>{
    console.error(error);
  })


}

function editAppointment(appointment){
 document.getElementById('appointmentId').value = appointment._id;
 document.getElementById('name').value = appointment.name;
 document.getElementById('number').value = appointment.number;
 document.getElementById('email').value = appointment.email;
}

function deleteAppointment(appointmentId){
  axios.delete(`https://crudcrud.com/api/bc1271a166654f7a97fa726dafda8d40/appointment/${appointmentId}`)
  .then(res => {
    console.log(res)
    getAppointments();
  })
  .catch(err => {
    console.error(err); 
  })
}
 document.getElementById('appointmentForm').addEventListener('submit',saveAppointment)




getAppointments();
         

const form = document.getElementById('appointment-form');
const table = document.getElementById('appointments').querySelector('tbody');

// function to get appointments from server and populate the table
function getAppointments() {
  axios.get('https://crudcrud.com/api/bff3d48173bc4eaa998d7dc2ec34a91b/appointments')
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
          <td><button class="delete-button">Delete</button></td>
        `;
      });
      table.querySelectorAll('.delete-button').forEach(button=>{
        button.addEventListener('click',handleDeleteClick)
    })
    
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
  axios.post('https://crudcrud.com/api/bff3d48173bc4eaa998d7dc2ec34a91b/appointments', appointment)
    .then(response => {
      // add a new row to the table for the newly created appointment
      const row = table.insertRow();
      row.innerHTML = `
        <td>${response.data.name}</td>
        <td>${response.data.email}</td>
        <td>${response.data.phone}</td>
        <td><button class="delete-button">Delete</button></td>

      `;
      // reset the form
      row.querySelector('.delete-button').addEventListener('click',handleDeleteClick)
      form.reset();
    })
    .catch(error => console.error(error));
}

// add event listener to the form
form.addEventListener('submit', handleSubmit);
function handleDeleteClick(event){
  event.preventDefault();
  const row =event.target.closest('tr')
  const id= row.dataset.id;
  axios.delete(`https://crudcrud.com/api/bff3d48173bc4eaa998d7dc2ec34a91b/appointments/${id}`)
  .then(res => {
    row.remove();
  })
  .catch(err => {
    console.error(err); 
  })
}
