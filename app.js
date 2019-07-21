
const profilePopUp = document.querySelector('.profile-pop');
const directory = document.querySelector('.directory');
const employeeSearch = document.getElementsByClassName('employee-card')

let employeDir = [];

// API request
  
fetch('https://randomuser.me/api/?results=12&inc=name,email,phone,location,picture&nat=us&seed=foodbar')
  .then(response => response.json())
  .then(data=> {
    let employees = data.results;
    employees.map(item => employeDir.push(item));
      for (let i = 0; i<employees.length; i++){
          let employee = employees[i]
          employeCard(employee);
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

function employeCard (str) {

  const main = document.querySelector('.directory');

  // elements
  let card = document.createElement('div');
  let img = document.createElement('img');
  let infoWrap = document.createElement('div');
  let name = document.createElement('h3');
  let info = document.createElement('p');

  // Set class lists
  card.classList = "employee-card";
  img.classList = "employee-img";
  infoWrap.classList = "employee-info";
  name.classList = "employee-name";

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

function generateHTML() {

  str = employeDir[getIn];
  profilePopUp.innerHTML = `
              
    <ul class="message">
      
      <li> <img class="employee-pic" src=${str.picture.large} alt=${str.name.first} ${str.name.last}></li>
      <li><h3 class="employee-name">${firstCap(str.name.first)} ${firstCap(str.name.last)}</h3></li> 
      <li>${str.email}</li>
      <li>${firstCap(str.location.city)}</li>
      <li><hr></li>
      <li>${str.phone}</li>
      <li>${str.location.street} ${str.location.postcode}</li>
      <li>${firstCap(str.location.state)}</li>
      <li class="close">&times;</li>
    </ul>`

}


// EventListeners 




directory.onclick= e =>
{
  for (let i = 0; i < employeeSearch.length; i++) {
    employeeSearch[i].addEventListener('click', () => {
      
      console.log(i);
    });
  }
}

//   const element = e.target;
  
//   if (element.classList.contains('employee-card') || element.parentNode.classList.contains('employee-info')){


//   profilePopUp.style.display = "flex";
//     generateHTML(employeDir); 
  
    
//     profilePopUp.addEventListener('click', (e) => {
//         profilePopUp.innerHTML = '';
//         profilePopUp.style.display = "none"; 
//     })

// })


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
    