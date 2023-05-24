const candyForm =document.getElementById('candyform');
const candyList =document.getElementById('candylist');
const apiURL = 'https://crudcrud.com/api/f51a79d126ff494ba896d013ac576427/candy';
let candies = [];

function fetchCandies(){
  axios.get(apiURL)
  .then(
    function(response){
      candies =response.data;
      renderCandies();
    }
  )
  .catch(err => {
    console.error(err); 
  })
}
function renderCandies(){
  candyList.innerHTML ='';
  candies.forEach(
    function(candy){
      const row =document.createElement('tr');
      row.innerHTML=`
      <td>${candy.name}</td>
      <td>${candy.description}</td>
      <td>${candy.price}</td>
      <td>${candy.quantity}</td>
      <td>
      <button class="btn btn-success btn-sm" onclick="buyOne('${candy._id}')">Buy One</button>
      <button class="btn btn-success btn-sm" onclick="buytwo('${candy._id}')">Buy Two</button>
      <button class="btn btn-success btn-sm" onclick="buythree('${candy._id}')">Buy Three</button>
      <button class="btn btn-danger btn-sm" onclick="removeCandy('${candy._id}')">Remove</button>
      </td>
      `
      candyList.appendChild(row);
    }
  )
}
function addCandy(candy){
  axios.post(`${apiURL}`,candy)
  .then(
    function(){
    fetchCandies();
  })
  .catch(err => {
    console.error(err); 
  })
}
function buyOne(candyId){
  const candy=candies.find(candy=> candy => candy._id===candyId);
  if(candy && candy.quantity>=1){
    candy.quantity--;
    axios.put(`${apiURL}/${candy._id}`,candy)
    .then(function(){
      fetchCandies();
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
function buytwo(candyId){
  const candy=candies.find(candy=> candy => candy._id===candyId);
  if(candy && candy.quantity>=2){
    candy.quantity-=2;
    axios.put(`${apiURL}/${candy._id}`,candy)
    .then(function(){
      fetchCandies();
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
function buythree(candyId){
  const candy=candies.find(candy=> candy => candy._id===candyId);
  if(candy && candy.quantity>=3){
    candy.quantity-=3;
    axios.put(`${apiURL}/${candy._id}`,candy)
    .then(function(){
      fetchCandies();
    })
    .catch(err => {
      console.error(err); 
    })
  }
}


candyForm.addEventListener('submit',
function(event){
  event.preventDefault();
  const candyName=document.getElementById('candyName').value;
  const candyDescription=document.getElementById('candyDescription').value;
  const candyPrice=document.getElementById('candyprice').value;
  const candyQuantity=document.getElementById('candyQantity').value;
  
  const newCandy={
    name:candyName,
    description:candyDescription,
    price:candyPrice,
    quantity:candyQuantity
  };
  addCandy(newCandy);
  candyForm.reset();
  
}
);
function removeCandy(candyId){
  axios.delete(`${apiURL}/${candyId}`)
  .then(function() {fetchCandies()})
  .catch(err => {
    console.error(err); 
  })
}

fetchCandies()