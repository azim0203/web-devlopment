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
         

