// Function to toggle completed state
document.addEventListener("DOMContentLoaded", () => {
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        course.addEventListener("click", () => {
            course.classList.toggle("completed"); // Toggle completed class
        });
    });
});

// Function to filter courses based on category or completion and update total credits
function filterCourses(category) {
    let courses = document.querySelectorAll(".course");
    let totalCredits = 0;

    courses.forEach(course => {
        // Show/hide courses based on the selected category
        if (category === "all") {
            course.style.display = "block";
            totalCredits += parseInt(course.getAttribute("data-credits"));
        } else if (category === "completed") {
            if (course.classList.contains("completed")) {
                course.style.display = "block";
                totalCredits += parseInt(course.getAttribute("data-credits"));
            } else {
                course.style.display = "none";
            }
        } else {
            if (course.classList.contains(category)) {
                course.style.display = "block";
                totalCredits += parseInt(course.getAttribute("data-credits"));
            } else {
                course.style.display = "none";
            }
        }
    });

    // Display the total credits
    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;
}
