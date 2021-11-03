const webBtn = document.querySelector('.webBtn');
const gdBtn = document.querySelector('.gdBtn');
const gallery = document.querySelector('.gallery');

gdBtn.addEventListener('click', ()=>{
    gallery.style.left = '-80%';
});
webBtn.addEventListener('click', ()=>{
    gallery.style.left = '10%';
});

const tabOne = document.querySelector('.tab1');
const tabTwo = document.querySelector('.tab2');
const tabThree = document.querySelector('.tab3');
const tabFour = document.querySelector('.tab4');
const navBtnOne = document.querySelector('.navBtn1');
const navBtnTwo = document.querySelector('.navBtn2');
const navBtnThree = document.querySelector('.navBtn3');
const navBtnFour = document.querySelector('.navBtn4');

navBtnOne.addEventListener('click', ()=>{
    tabOne.style.top = '0%';
    tabTwo.style.top = '200%';
    tabThree.style.top = '300%';
    tabFour.style.top = '400%';
});

navBtnTwo.addEventListener('click', ()=>{
    tabOne.style.top = '100%';
    tabTwo.style.top = '0%';
    tabThree.style.top = '300%';
    tabFour.style.top = '400%';
});

navBtnThree.addEventListener('click', ()=>{
    tabOne.style.top = '100%';
    tabTwo.style.top = '200%';
    tabThree.style.top = '0%';
    tabFour.style.top = '400%';
});

navBtnFour.addEventListener('click', ()=>{
    tabOne.style.top = '100%';
    tabTwo.style.top = '200%';
    tabThree.style.top = '300%';
    tabFour.style.top = '0%';
});


const mobileMenuIcon = document.querySelector('.ham-menu>img'); 
const mobileMenuBox = document.querySelector('.ham-menu__box'); 

mobileMenuIcon.addEventListener('click', ()=>{
    if (mobileMenuBox.style.right == '0%') {
        mobileMenuBox.style.right = '-100%';
    } else {
        mobileMenuBox.style.right = '0%';
    }
});