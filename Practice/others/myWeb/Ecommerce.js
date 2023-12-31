let navLi = document.getElementById("navUl").children
console.log(navLi)
Array.from(navLi).forEach(ele=>{
    
        ele.onmouseenter=()=>{
            ele.lastElementChild.style.display="block"
         }
         ele.onmouseleave = ()=>{
             ele.lastElementChild.style.display=""
         }
    
})

searchMe = (me)=>{
    searList = document.getElementById("searchList").children;
    // console.log(searList)
    Array.from(searList).forEach(ele=>{
        // console.log(ele.innerText)

        if(me.value.trim()==0)
        {
            document.getElementById("searchList").style.display="";
        }
        if(me.value.trim()!=0 && ele.innerText.toUpperCase().includes(me.value.toUpperCase()))
        {
            document.getElementById("searchList").style.display="block";
            ele.style.display = "block";
            // found = ele.innerText.matchAll(/ele.valu)
            
        }
        else{
            ele.style.display="";

        }
    })



}
let userProfile = document.getElementById("userProfile");
userProfile.addEventListener("mouseenter",()=>{
    document.getElementsByClassName("profile")[0].style.display="block";
})
userProfile.addEventListener("mouseleave",()=>{
    document.getElementsByClassName("profile")[0].style.display="";
})


// slider:

