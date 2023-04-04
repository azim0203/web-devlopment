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
    //localStorage.setItem('userdetails',JSON.stringify(obj));
    let users=JSON.parse(localStorage.getItem('users'))||[];
    users.push(obj);
    localStorage.setItem('users',JSON.stringify(users));
    displayUsers();

}
function displayUsers() {
    const userList = document.getElementById('users');
  
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    
    userList.innerHTML = '';
  
    
    users.forEach(function(user, index) {
      const li = document.createElement('li');
      li.innerHTML = `
        ${user.name} (${user.email})
        <button class="delete" data-index="${index}">Delete</button>
      `;
      userList.appendChild(li);
    });
  
    
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        const index = event.target.dataset.index;
  
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
  
        
        event.target.parentElement.remove();
      });
    });
  }
  
  
  displayUsers();