// Function to toggle completed state
document.addEventListener("DOMContentLoaded", () => {
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        course.addEventListener("click", () => {
            course.classList.toggle("completed"); // Toggle completed class
        });
    });
});

// Function to filter courses based on category or completion
function filterCourses(category) {
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        if (category === "all") {
            course.style.display = "block";
        } else if (category === "completed") {
            course.style.display = course.classList.contains("completed") ? "block" : "none";
        } else {
            course.style.display = course.classList.contains(category) ? "block" : "none";
        }
    });
}
