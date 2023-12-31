let b = document.body
console.log("First child of b is ",b.firstChild)    // it may return comment or text nodes.
console.log("First Element child of b is ",b.firstElementChild) // it only returns element nodes.

const changeBg = ()=>{
    document.body.firstElementChild.style.background="red"
}