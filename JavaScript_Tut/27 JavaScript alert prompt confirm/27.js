// window.alert("Hello world!") //window is not mendatory

// to take input:
let a = prompt("Enter the value of a", 100) // 2nd parameter is for default

a = Number.parseInt(a)
alert(`${a} is of type ${typeof a}`)

// confirm:
let write = confirm("do you want to write the value of a on page?")
write?document.write(a):"";


