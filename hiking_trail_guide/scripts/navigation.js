// Selecting Elements from the DOM
const hambutton = document.querySelector('#hamburger');
const mainnav = document.querySelector('#navbar')


// Listening for an Event
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () { // Reacting when the page loads
    
    const currentPage = window.location.pathname.split("/").pop(); // Looping through navigation links and updating the active one
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.parentElement.classList.add("active"); 
        } else {
            link.parentElement.classList.remove("active"); 
        }
    });
});
