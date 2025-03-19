// Store the selected elements that we are going to use. 
const hambutton = document.querySelector('#hamburger');
const mainnav = document.querySelector('#navbar')


//Toggle the show class off and on
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add("active"); 
        } else {
            link.parentElement.classList.remove("active"); 
        }
    });
});
