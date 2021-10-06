jQuery(function ($) {
    
// *************** Burger menu ***************
const menuBtn = document.querySelector('.burger');
const miniHeader = document.querySelector('.mini-header');
const closeBtn = document.querySelector('.mini-header__cross');

menuBtn.addEventListener('click', function () {
  miniHeader.classList.toggle('active');
})
closeBtn.addEventListener('click', function () {
  miniHeader.classList.remove('active');
})


















})