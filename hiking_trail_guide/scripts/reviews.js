document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("review-form");
    const trailSelect = document.getElementById("trail-name");
    const reviewsContainer = document.getElementById("reviews-container");

    async function loadTrails() {
        try {
            const response = await fetch("trails.json");
            if (!response.ok) throw new Error("Failed to load trails.");
            const trails = await response.json();
            populateTrailOptions(trails);
            loadReviews(trails); 
        } catch (error) {
            console.error("Error fetching trails:", error);
        }
    }

    function populateTrailOptions(trails) {
        trails.forEach(trail => {
            const option = document.createElement("option");
            option.value = trail.id; 
            option.textContent = trail.name;
            trailSelect.appendChild(option);
        });
    }

    function loadReviews(trails) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviewsContainer.innerHTML = "";

        reviews.forEach(review => {
            const trail = trails.find(t => t.id === Number(review.trailId));
            if (!trail) return; 

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
            trailId: Number(trailId),
            text: reviewText,
            rating: reviewRating,
        };

        const reviews = JSON.parse(localStorage.getItem("reviews")) || []; // Loading data from local storage
        reviews.push(newReview);
        localStorage.setItem("reviews", JSON.stringify(reviews)); // Saving data to local storage

        const trails = await fetch("trails.json").then(res => res.json());
        loadReviews(trails);
        reviewForm.reset();
    });

    loadTrails();
});
