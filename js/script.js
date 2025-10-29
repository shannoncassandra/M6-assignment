// GET THE DOM ELEMENTS
let employee = document.getElementById('employee')
let name = document.getElementById('name')
let extension = document.getElementById('extension')
let email = document.getElementById('email')
let department = document.getElementById('department')
let form = document.getElementById('empForm')

// Add event listener and print to console
form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('ID:', employee.value)
    console.log('Name:', name.value)
    console.log('Extension:', extension.value)
    console.log('Email:', email.value)
    console.log('Department:', department.value)
})

