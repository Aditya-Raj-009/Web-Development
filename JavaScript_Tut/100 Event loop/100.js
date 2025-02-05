/*
> JavaScript has a runtime model based on an event loop,which is responsible for executing the code,collecting and processing events and executing queued sub-tasks.

> The event loop pushes the tasks from the task queue to the call stack.

> setTimeout(func , 0) can be used to defer a function until all the pending tasks (so far) have been executed.

> We can see how these things work in action by visiting.
 */

setTimeout(()=>{
    console.log("You clicked button")
},2000)

console.log("Hi!")

setTimeout(()=>{
    console.log("Click the button")
},5000)

console.log("Welcome to coderAditya.com")