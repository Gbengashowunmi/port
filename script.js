const navBar = document.querySelector(".navbar");
const lineA = document.getElementById("line1");
const lineB = document.getElementById("line2");
const lineC = document.getElementById("line3");
const ul = document.querySelector(".ul");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

navBar.addEventListener("click", ()=>{
    console.log('clicked');
    lineA.classList.toggle("active");
    lineB.classList.toggle("active");
    lineC.classList.toggle("active");
    ul.classList.toggle("active");
    overlay.classList.toggle('active');
})
overlay.addEventListener("click", ()=>{
    toggle();
})
ul.addEventListener("click", ()=>{
    toggle();
})

function toggle() {
    console.log('clicked');
    lineA.classList.remove("active");
    lineB.classList.remove("active");
    lineC.classList.remove("active");
    ul.classList.remove("active");
    overlay.classList.remove('active');
}