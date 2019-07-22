
const profilePopUp = document.querySelector('.profile-pop');
const directory = document.querySelector('.directory');
const employeeSearch = document.getElementsByClassName('employee-card')

let employeDir = [];

// API request
  
fetch('https://randomuser.me/api/?results=12&inc=name,email,phone,location,picture&nat=us')
  .then(response => response.json())
  .then(data=> {
    let employees = data.results;
    employees.map(item => employeDir.push(item));
      for (let i = 0; i<employees.length; i++){
          let employee = employees[i]
          employeCard(employee, i);
      }
    }
  )

// Functions

function firstCap (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function getDirectory(arr) {
  employeDic = arr.map();
}

function employeCard (str, index) {

  const main = document.querySelector('.directory');

  // elements
  let card = document.createElement('div');
  let img = document.createElement('img');
  let infoWrap = document.createElement('div');
  let name = document.createElement('h3');
  let info = document.createElement('p');

  // Set class lists
  card.classList = `employee-card`;
  img.classList = "employee-img";
  infoWrap.classList = "employee-info";
  name.classList = "employee-name";

  //Set index
  card.setAttribute(`data-index`, `${index}`);
  info.setAttribute(`data-index`, `${index}`);
  img.setAttribute(`data-index`, `${index}`);
  infoWrap.setAttribute(`data-index`, `${index}`);
  name.setAttribute(`data-index`, `${index}`);

  // Info distribution
  img.src = str.picture.medium;
  img.alt = str.name.first + str.name.last;
  name.innerHTML = firstCap(str.name.first) + ' ' + firstCap(str.name.last);
  info.innerHTML = str.email + '<br>' + firstCap(str.location.city);

  // Add elements to DOM
  main.appendChild(card);
  card.appendChild(img);
  card.appendChild(infoWrap);
  infoWrap.appendChild(name);
  infoWrap.appendChild(info);

  }

function generateHTML(getIn) {

  str = employeDir[getIn];
  profilePopUp.innerHTML = `
              
    <button class="prev-btn">Prev</button>  
    
    <ul class="message" data-employee=${getIn}> 
      <li> <img class="employee-pic" src=${str.picture.large} alt=${str.name.first} ${str.name.last}></li>
      <li><h3 class="employee-name">${firstCap(str.name.first)} ${firstCap(str.name.last)}</h3></li> 
      <li>${str.email}</li>
      <li>${firstCap(str.location.city)}</li>
      <li><hr></li>
      <li>${str.phone}</li>
      <li>${str.location.street} ${str.location.postcode}</li>
      <li>${firstCap(str.location.state)}</li>
      <button class="close">Close</button>
    </ul>
    <button class="next-btn">Next</button>  `

}

function  getIndex(el){
  let index = el.getAttribute('data-index');
  return index;
}

// EventListeners 

directory.onclick = e =>
{ let element = e.target; 
  let index;  

  if (element.hasAttribute('data-index')){
  index = getIndex(element);
  profilePopUp.style.display = "flex";
  generateHTML(index)
  }
  
}

profilePopUp.addEventListener("click",(e)=>{
  let el = e.target;
  let getIndex= document.querySelector('.message').getAttribute('data-employee');
  let index = parseInt(getIndex);
  const nextBtn = document.querySelector('.next-btn');
  const prevtBtn = document.querySelector('.prev-btn')


  if (el.className === 'next-btn'){
    if (index === 11) {
      generateHTML(index - 11)
    } else {
      generateHTML(index + 1)
    }

  } else if (el.className === 'prev-btn') {
    if (index === 0) {
      generateHTML(index + 11)
    } else {
      generateHTML(index - 1)
    }
  }

  if (el.className === 'close'){ 
      
    profilePopUp.innerHTML = '';
    profilePopUp.style.display = "none"; 
    }

})


// Search bar

const input = document.getElementById('search-bar')


input.addEventListener("keyup", ()=> {    
 
    for (let i = 0; i < employeeSearch.length; i++){
        
        let filter = input.value.toLowerCase();
        let firstName = employeDir[i].name.first.toLowerCase();
        let lastName = employeDir[i].name.last.toLowerCase();
            
        if (firstName.indexOf(filter) > -1 || lastName.indexOf(filter) > -1) { 
            employeeSearch[i].style.display = "";
        } else {
            employeeSearch[i].style.display = "none";
        }
        }
    
});
    