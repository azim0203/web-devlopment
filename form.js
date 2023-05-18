function ab(event){
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.mail.value);
    console.log(event.target.number.value);
    console.log(event.target.time.value);
}

const callButton = document.querySelector('.btn');

callButton.addEventListener('click', function() {
    console.log('Button clicked!');
});

const nameLabel = document.querySelector('label[for="username"]');

nameLabel.addEventListener('mouseover', function() {
    console.log('Mouse over name field!');
});

nameLabel.addEventListener('mouseout', function() {
    console.log('Mouse out of name field!');
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/main
