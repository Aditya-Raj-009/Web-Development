function formDisplay(me,form,fc,back,cpContainer)
{
    let f1 = document.getElementsByClassName("loginForm")[0];
    let f2 = document.getElementsByClassName("singupForm")[0];

    let l = document.getElementsByClassName('lg')[0];
    let sg = document.getElementsByClassName('sg')[0];
    let bk = document.getElementsByClassName(back)[0];

    let f = document.getElementsByClassName(fc)[0];
    let cp = document.getElementsByClassName(cpContainer)[0];

    f1.style.left='-400px';
    f2.style.left=''

    l.style.background='white'
    l.style.color='purple'
    
    sg.style.background='white';
    sg.style.color='purple';
    
    me.style.background='purple';
    me.style.color='white';
    
    bk.style.display='none';
   
    let disf = document.getElementsByClassName(form)[0];
    disf.style.left='0px';

    if(f.style.left==='0px')
    {
        if(me.classList.contains('sg'))
        {
            f.style.left='-400px'
        }
        else{
            f.style.left='400px'
        }

    }
    else if( cp.style.left==='0px')
    {
        if(me.classList.contains('sg'))
        {
            cp.style.left='-400px'
        }
        else{
            cp.style.left='400px'
        }
    }
}

let ad = document.getElementById("adjust");
ad.addEventListener('click',()=>{
    document.body.classList.toggle("bdy")
    ad.style.transform = 'rotate(180deg)';
    let adl = document.getElementsByClassName('adlout')[0];
    
    if(ad.title=='LIGHT MODE')
    {
        adl.style.background='black'
        ad.title='DARK MODE'
    }
    else{
        adl.style.background='white'
        ad.title='LIGHT MODE'

    }
})

function loginout(me,form)
{
    let f = document.getElementById(form)
    me.style.visibility='hidden'
    if(me.innerText == 'Logout')
    {
        me.innerText='Login'
        f.style.top='100px'

       
    }
}

function forgetPass(fp,bk,lf,lg)
{
    let f = document.getElementsByClassName(fp)[0];
    let l = document.getElementsByClassName(lf)[0];
    let b = document.getElementsByClassName(bk)[0];
    let log = document.getElementsByClassName(lg)[0];
    f.style.left="0"
    l.style.left='-400px'
    b.style.display="block";

    log.style.background='white'
    log.style.color='purple'
    

}
function back(me,fp,lf,lg,cpContainer)
{
    let f = document.getElementsByClassName(fp)[0];
    let l = document.getElementsByClassName(lf)[0];
    let log = document.getElementsByClassName(lg)[0];
    let cp = document.getElementsByClassName(cpContainer)[0];

    f.style.left="400px"
    l.style.left=''
    me.style.display="";

    log.style.background='purple'
    log.style.color='white'
    if(cp.style.left==='0px')
    {
        cp.style.left='400px'

    }
}

function next(fpContainer,cpContainer)
{
    let f = document.getElementsByClassName(fpContainer)[0];
    let cp = document.getElementsByClassName(cpContainer)[0];

    f.style.left='400px'
    cp.style.left='0px'
    
}


 let lg =  document.getElementsByClassName('lg')[0];
 lg.click();


function openEye(me,pass)
{
let p = document.getElementById(pass)

let ps = document.getElementById(pass);
if(me.classList.contains('fa-eye'))
{
    ps.type='text';
    
    me.classList.replace('fa-eye','fa-eye-slash')

    
}
else{
    me.classList.replace('fa-eye-slash','fa-eye')
    ps.type='password';
}
}



let n = document.createElement('div')
n.style.color="white"
n.style.background="purple"

n.style.marginTop = '5px'

function isEmpty(me,username , password,t1,t2)
{
    let u = document.getElementById(username);
    let p = document.getElementById(password);

    if(u.value.trim()=='' && p.value.trim()=='')
    {
        n.innerText=`${t1} and ${t2} cannot be empty!`
        me.after(n);
        return true;
    }
   else if(u.value.trim()=='' && p.value.trim()!=='')
    {
        n.innerText = `${t1} cannot be empty!`
        if(me.nextElementSibling!=n)
        {
            me.after(n);
        }
        return true;
    }
   else if(u.value.trim()!=='' && p.value.trim()==='')
    {
        n.innerText = `${t2} cannot be empty!`
        if(me.nextElementSibling!=n)
        {
            me.after(n);
        }
        return true;
    }
    else if(me.nextElementSibling==n)
    {
        me.nextElementSibling.remove()
        return false;
    }
    else{
        return false;
    }

    
}
function fpValid(me,ph,dob)
{
    isEmpty(me,ph,dob,'Phone number','Date of Birth')?'': next('fpContainer','cpContainer');
}

document.getElementsByClassName('change')[0].onclick=(e)=>{
    isEmpty(e.target,'cPass','rePass','Create Password field','ReEnter password field')?'':lg.click()
}

function sF(name,male,fmale)
{
    let m = document.getElementById(male)
    console.log(m.value)
}