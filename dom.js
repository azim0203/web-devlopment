const parent=document.querySelector('#main-header').parentElement;
const last=parent.lastElementChild;
console.log(last);
const lastc=parent.lastChild;
console.log(lastc);
const newchild=document.createElement('div');
console.log(newchild);
const fchild=parent.firstChild;
console.log(fchild);
const sibling=fchild.nextSibling;
console.log(sibling);
const esibling=parent.firstElementChild.nextElementSibling;
console.log(esibling);
const preelement=last.previousElementSibling;
console.log(preelement);
const presibling=last.previousSibling;
console.log(presibling);
const newelement=document.createElement('h1');
newelement.setAttribute('id','greeting');
const textnode=document.createTextNode('hello world');
console.log(textnode);
newelement.appendChild(textnode);
parent.insertBefore(newelement,fchild);

