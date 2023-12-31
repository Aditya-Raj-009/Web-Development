
"use strict"; // this template use so that we cannot forget to declare any variable.
// c = 5; // if strict template mode is there ,it show error.

let cr = document.getElementById('create')
let r1 = document.getElementById('row-1');
// localStorage.clear()
cr.addEventListener('click', () => {

    create();
    let curr = r1.lastElementChild;

    curr.scrollIntoView();
})
function create(title = '', content = '', saveV = "Save") {

    
    
    const note = document.createElement('div')
    note.setAttribute('class','col');
    note.innerHTML = `
 <div class='cont'>
 <h3 class='text-center'>Title</h3>
 <input type = "text" class="title-txt p-2 w-100 mb-2" value=${title}>

 <h3 class='text-center'>Content</h3>
 </div>
 <textarea class="textarea p-3">${content}</textarea>
<hr>
 <div class="btn-g mt-3">
  <button class="del btn" onclick=del(this)><i class = "fa fa-trash"></i></button>
  <button class="reset btn" onclick=reset(this)>Reset</button>
  <button class="save btn" onclick=prop(this)>${saveV}</button>
</div>`


    r1.appendChild(note);
    
    
        
    }

function prop(me, t = false) {

    let txt = me.parentElement.previousElementSibling.previousElementSibling;
    let tit = me.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;

    let tites = document.querySelectorAll('.title-txt');
    let c = true;
    tites.forEach(e=>{
        if(e!==tit && e.value==tit.value)
        {
            alert("Note already exist with this title. Please give another title.")
            c = false;
            return;
        }
    })
    if(!c)
    {
        return;
    }

    if (tit.value.trim() != '' && txt.value.trim() != '') {

        if (me.innerHTML == "Update") {
            me.innerHTML = 'Save';
            tit.readOnly = "";

            txt.readOnly = "";

        }
        else {
            me.innerHTML = "Update";
            tit.readOnly = "true";
            txt.readOnly = "true";
        }

    }
    if ((tit.value.trim() != '' && txt.value.trim() != '')||t) {
        let svbtn = document.querySelectorAll('.save');

        let svCollection = [];
       

        svbtn.forEach(ele => {
            if(ele.parentElement.previousElementSibling.previousElementSibling.value!='' && ele.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value!='')
            {
            svCollection.push("Update");
            
            
            }
        })
        localStorage.setItem("saveBtn", JSON.stringify(svCollection));

    }
    save(me.innerHTML);
}
function save(svtxt) {
    let tites = document.querySelectorAll('.title-txt');
    let titles_collection = [];
    let content_collection = [];
    let tt = Array.from(tites)

    for (let element of tt) {
        if (element.value.trim() == '' || element.parentElement.nextElementSibling.value.trim() == '') {
            continue;

        }

        titles_collection.push(JSON.stringify(element.value.trim()))
        content_collection.push(element.parentElement.nextElementSibling.value.trim())

    }

    localStorage.setItem('titles_collection', JSON.stringify(titles_collection))

    localStorage.setItem('content_collection', JSON.stringify(content_collection))

    if (svtxt != 'Save') {
        location.reload();
    }
}




function reset(e) {
  const tit =  e.parentElement.previousElementSibling.previousElementSibling;



   const cont = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;

   
    tit.value='';
    cont.value='';
    
    e.nextElementSibling.innerHTML = "Save";
    e.parentElement.previousElementSibling.previousElementSibling.readOnly = '';
    e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.readOnly = '';
}

function del(me) {

    let title = me.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;
    
    let cont = me.parentElement.previousElementSibling.previousElementSibling;

    let sure = false;
    let isEmpty = title.value.trim().length==0 || cont.value.trim().length==0
    if(!isEmpty)
    {
    sure = window.confirm(`Are you sure,you want to delete this note whose title is ${title.value}`);
    }

    if (sure || isEmpty) {
  

        if(localStorage.getItem('titles_collection')!=null)
        {
            const tit = JSON.parse(localStorage.getItem('titles_collection'));
            console.log(tit)

           for(let t=0; t<tit.length; t++)
           {
            if(tit[t].includes(title.value))
            {
                tit.splice(t,1);
                localStorage.setItem('titles_collection',JSON.stringify(tit))
                reset(me.nextElementSibling);
                prop(me.nextElementSibling.nextElementSibling,true)
                // return;
            }
           }
        }
       r1.removeChild(me.parentElement.parentElement);
       const sv = JSON.parse(localStorage.getItem('saveBtn'));
       let sp = document.querySelector("#create span");
       sp.innerHTML=sv.length;

    }
}


(
    function () {
        if (localStorage.getItem('titles_collection') == null) {
            return;
        }

        const title = JSON.parse(localStorage.getItem('titles_collection'));
        const content = JSON.parse(localStorage.getItem('content_collection'));

        const sv = JSON.parse(localStorage.getItem('saveBtn'));


        for (let t = 0; t < title.length; t++) {
            create(title[t], content[t], sv[t]);
        }

        let svbtn = document.querySelectorAll('.save');
        svbtn.forEach(ele => {
            let tit = ele.parentElement.previousElementSibling.previousElementSibling;
            let txt = ele.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;

            if (ele.innerHTML == 'Update') {
                tit.readOnly = 'true';
                txt.readOnly = 'true';
            }
            else {
                tit.readOnly = ''
                tit.readOnly = ''
            }

        })


        let sp = document.querySelector("#create span");
        sp.innerHTML=sv.length;

    }
)()






