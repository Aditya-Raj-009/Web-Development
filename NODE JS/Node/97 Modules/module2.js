// common module:

// importing module:

// const hello = require('./module1')

// hello()

// now if multiple function is exported then we use like this:
// hello.hello()
// hello.Ahello('Prince')

// we can also use destructuring to use these function directly without using hello.(dot):

// const {hello,Ahello} = require('./module1')

// hello()
// Ahello("Abhishek")


// ES6 Modules:

// importing module:
// before this u have install package.json using 'npm init -y' in terminal and set type module.
// then:
import { hello,ahello } from "./module1.js";

hello()
ahello("Karthik")

// to import default we doesn't need destructuring:
import prince from './module1.js'

prince()