let form=document.getElementById('my-form');
form.addEventListener('submit',addvalue);
function addvalue(e){
  e.preventDefault();
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  const obj={
      name,
      email
  }

  let users=JSON.parse(localStorage.getItem('users'))||[];
  
  const editindex=form.dataset.editindex;
  if(editindex !==undefined){
    users[editindex].name=name;
    users[editindex].email=email;
    form.removeAttribute('data-edit-index');
  }
  else{
    users.push(obj);
  }
  
  localStorage.setItem('users',JSON.stringify(users));
  displayUsers();
  document.getElementById('name').value='';
  document.getElementById('email').value='';
}
function displayUsers() {
    const userList = document.getElementById('users');
  
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    
    userList.innerHTML = '';
  
    
    users.forEach(function(user, index) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="name">${user.name}</span>
         <span class="email">${user.email}</span>
         <button class="edit" data-index="${index}">Edit</button>
        <button class="delete" data-index="${index}">Delete</button>
      `;
      userList.appendChild(li);
    });
        const editButtons=document.querySelectorAll('.edit');
        editButtons.forEach(function(button){
          button.addEventListener('click',function(event){
          const index=event.target.dataset.index;
          let users=JSON.parse(localStorage.getItem('users'))||[];
          const user=users[index];
          document.getElementById('name').value=user.name;
          document.getElementById('email').value=user.email;
        form.dataset.editindex=index;        })})

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        const index = event.target.dataset.index;
  
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        
       displayUsers();
        
        
        
      });
    });
  }
  
  
  