// 2 types of modules are there in js:
// 1 common module
// 2 ES6 module


// common module:
// exporting modules: 

// const hello = ()=>{
//     console.log("Hello Aditya")
// }
// const Ahello = (name)=>{
//     console.log("Hello",name)
// }

// module.exports = hello  // when you export only one function.

// for export multiple:

// module.exports = {hello,Ahello} // same as below line:

// module.exports = {hello: hello,Ahello: Ahello}



// ES6 Modules:
// exporting module:

export const hello = ()=>{
    console.log("Hello Aditya")
}

export const ahello = (name)=>{
    console.log("Hello",name)
}

// for exporting default module:
const prince = ()=>{
    console.log("Hello Prince SR")
}

export default prince;
