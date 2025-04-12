document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("review-form");
    const trailSelect = document.getElementById("trail-name");
    const reviewsContainer = document.getElementById("reviews-container");

    // Load trail data and populate the select dropdown
    async function loadTrails() {
        try {
            const response = await fetch("trails.json");
            if (!response.ok) throw new Error("Failed to load trails.");
            const trails = await response.json();
            populateTrailOptions(trails);
            loadReviews(trails); // Load existing reviews
        } catch (error) {
            console.error("Error fetching trails:", error);
        }
    }

    // Populate the trail options in the dropdown
    function populateTrailOptions(trails) {
        trails.forEach(trail => {
            const option = document.createElement("option");
            option.value = trail.id; // Assumes trail.id is a number
            option.textContent = trail.name;
            trailSelect.appendChild(option);
        });
    }

    // Load reviews from localStorage and display them
    function loadReviews(trails) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviewsContainer.innerHTML = "";

        reviews.forEach(review => {
            // Convert stored string ID to number for comparison
            const trail = trails.find(t => t.id === Number(review.trailId));
            if (!trail) return; // Skip if trail no longer exists

            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");

            reviewElement.innerHTML = `
                <h3>${trail.name}</h3>
                <p><strong>Rating:</strong> ${review.rating}</p>
                <p>${review.text}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    // Handle the form submission
    reviewForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const trailId = trailSelect.value;
        const reviewText = document.getElementById("review-text").value;
        const reviewRating = document.getElementById("review-rating").value;

        if (!trailId || !reviewText || !reviewRating) {
            alert("Please fill out all fields.");
            return;
        }

        const newReview = {
            trailId: Number(trailId), // Convert to number before storing
            text: reviewText,
            rating: reviewRating,
        };

        // Save the review in localStorage
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(newReview);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Reload reviews and clear the form
        const trails = await fetch("trails.json").then(res => res.json());
        loadReviews(trails);
        reviewForm.reset();
    });

    loadTrails();
});
