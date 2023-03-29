const header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
const item=document.querySelector('.title')
item.style.fontweight='bold';
item.style.color='green';
const items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}