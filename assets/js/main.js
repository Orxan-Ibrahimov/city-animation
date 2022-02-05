let container = document.querySelector('.container');
let sun = document.querySelector('.sun');
window.addEventListener('load',function(params) {
    sun.addEventListener('click',function(params) {
        container.classList.toggle('dark');
    });
});