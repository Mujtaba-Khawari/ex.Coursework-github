//Select DOM Items
const menuBtn=document.querySelector('.menu-btn');
const menu =document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelector('.nav-item');

//set intial state of menu
let showMenu=false;
menuBtn.addEventListener('click',toggleMenu);