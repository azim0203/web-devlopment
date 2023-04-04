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
}
