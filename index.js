const header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
const item=document.querySelector('.title')
item.style.fontweight='bold';
<<<<<<< HEAD
item.style.color='green';
=======
item.style.color='green';
const items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
const li=document.getElementsByTagName('li');
li[4].style.backgroundColor='red';
const background=document.querySelector('.list-group-item:nth-child(2)');
background.style.backgroundColor='green';
const dis=document.querySelector('.list-group-item:nth-child(3)');
dis.style.display='none';
const green=document.querySelectorAll('.list-group-item');
green[1].style.color='green';
const greenbackground=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<greenbackground.length;i++){
    greenbackground[i].style.backgroundColor='green';

}
>>>>>>> origin/main
