document.addEventListener("DOMContentLoaded", () => {
    const courseContainer = document.querySelector(".courses");
    const totalCreditsElement = document.getElementById("total-credits");

    let courses = [
        { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
        { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 3, completed: true },
        { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: false },
        { subject: "CSE", number: 210, title: "Programming with Classes", credits: 3, completed: false },
        { subject: "WDD", number: 131, title: "Advanced CSS", credits: 4, completed: true },
        { subject: "WDD", number: 231, title: "Web Frontend Development", credits: 4, completed: false }
    ];

    function renderCourses(filter = "all") {
        courseContainer.innerHTML = ""; // Clear existing courses

        let filteredCourses = courses.filter(course => {
            if (filter === "completed") return course.completed;
            return filter === "all" || course.subject === filter;
        });

        filteredCourses.forEach((course, index) => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("course", course.subject);

            if (course.completed) {
                courseDiv.classList.add("completed");
            }

            courseDiv.setAttribute("data-credits", course.credits);
            courseDiv.textContent = `${course.subject} ${course.number} - ${course.title}`;

            // Toggle completion on click
            courseDiv.addEventListener("click", () => {
                courses[index].completed = !courses[index].completed;
                renderCourses(filter);
            });

            courseContainer.appendChild(courseDiv);
        });

        // Update total credits dynamically
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    }

    // Function to filter courses when buttons are clicked
    window.filterCourses = (category) => {
        renderCourses(category);
    };

    // Initial rendering of all courses
    renderCourses();
});
