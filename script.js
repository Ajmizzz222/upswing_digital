const mobileMenu = document.getElementById("m-menu");
const nav = document.getElementById("nav");


mobileMenu.addEventListener("click",()=>{
    nav.classList.toggle("open");
})