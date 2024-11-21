// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })

}

if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
     })
}

const signInBtnLink =document.queryselector('.signInBtn-link');
const signUpBtnLink =document.queryselector('.signUpBtn-link');

const wrapper =document.queryselector('.wrapper');

signUpBtnLink=addEventListener('click',() =>{wrapper.classList.toggle('active');
});

signInBtnLink=addEventListener('click',() =>{wrapper.classList.toggle('active');
});