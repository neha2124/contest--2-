// console.log("hello")
let nameInput = document.getElementById('name')
let professionInput = document.getElementById('profession')
let ageInput = document.getElementById('age')
let user = document.querySelector('.user')
let list = document.getElementById('list')
let error = document.getElementById('error')

let success = document.getElementById('succes')
let delet = document.querySelector(".delete-user")
let num = document.getElementById("num")


let button = document.createElement('button')
let data =[]

function updateDom (data) {
   let newDiv = document.createElement('div')
  
   data.forEach((item) => {
    newDiv.innerHTML =`<p class=person>${item.id}  Name:${item.name} &nbsp;  Profession:${item.profession} &nbsp; Age:${item.age }</p>
    <button class="delete"> Delete User </button>
    `
    button.classList.add('delete')
    list.append(newDiv)
    })
   let del = newDiv.querySelector(".delete")
   del.addEventListener("click",()=> {
    newDiv.remove()
    })
   

}


function addUser () {
    let name = nameInput.value;
    let age = ageInput.value;
    let profession = professionInput.value
    
if(name != ""  && age !== "" && profession !== ""){
    
 let employee = {
        // id:employee.length+1
        id:data.length+1,
        name: name,
        age:age,
        profession:profession,
        

    }
    data.push(employee)
    updateDom(data)
    success.innerHTML="Success : Employe Added!"
    error.innerHTML = ""
    num.innerHTML = ""
    
   
}
else{

    error.innerHTML = " Please Make sure All the fields are filled before adding in an employee"
    success.innerHTML = ""
}
}
user.addEventListener("click", addUser)
  

