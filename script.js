 //javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
	const header = document.getElementById("header");
	header.classList.toggle("sticky", scrollY > 0);
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});


//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


//javascript for responsive navigation sidebar menu
const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("nav");
const navigationItems = document.querySelectorAll(".navigation a");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
});


// Remove active, when list of menu click active.
navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    btnMenu.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Form Registration.

const form = document.forms.registration;

form.addEventListener("submit", (e) =>{
  e.preventDeFault();
})

const { userName, lastName, email, phone} = form;
console.log(userName.value, lastName.value, email.value, phone.value)