
document.addEventListener("DOMContentLoaded", () => {
    const trailList = document.getElementById("trail-list");
    const searchInput = document.getElementById("search");
    const difficultyFilter = document.getElementById("difficulty-filter");

    async function loadTrails() {
        try {
            const response = await fetch("trails.json");
            if (!response.ok) throw new Error("Failed to load trails.");
            const trails = await response.json();
            displayTrails(trails);
        } catch (error) {
            console.error("Error fetching trails:", error);
        }
    }

    function displayTrails(trails) {
        trailList.innerHTML = "";
        trails.forEach(trail => {
            const trailCard = document.createElement("div");
            trailCard.classList.add("trail-card");
            trailCard.innerHTML = `
                <img src="${trail.image}" alt="${trail.name}" loading="lazy">
                <h3>${trail.name}</h3>
                <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
                <p><strong>Length:</strong> ${trail.length} miles</p>
                <button class="view-details" data-id="${trail.id}">View Details</button>
            `;
            trailList.appendChild(trailCard);
        });

        document.querySelectorAll(".view-details").forEach(button => {
            button.addEventListener("click", (e) => {
                const trailId = e.target.getAttribute("data-id");
                showModal(trails.find(trail => trail.id == trailId));
            });
        });
    }

    function showModal(trail) {
        document.getElementById("modal-title").textContent = trail.name;
        document.getElementById("modal-description").textContent = trail.description;
        document.getElementById("modal-difficulty").textContent = trail.difficulty;
        document.getElementById("modal-length").textContent = trail.length;
        document.getElementById("modal-elevation").textContent = trail.elevation_gain;
        document.getElementById("modal-image").src = trail.image;
        
        document.getElementById("trail-modal").style.display = "block";
    }

    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("trail-modal").style.display = "none";
    });

  
    function filterTrails() {
        const searchQuery = searchInput.value.toLowerCase();
        const difficulty = difficultyFilter.value;

   
        localStorage.setItem("searchQuery", searchQuery);
        localStorage.setItem("difficulty", difficulty);

        fetch("trails.json")
            .then(response => response.json())
            .then(trails => {
                let filteredTrails = trails.filter(trail =>
                    trail.name.toLowerCase().includes(searchQuery) &&
                    (difficulty === "" || trail.difficulty === difficulty)
                );
                displayTrails(filteredTrails);
            });
    }

    function loadPreferences() {
        const savedSearchQuery = localStorage.getItem("searchQuery");
        const savedDifficulty = localStorage.getItem("difficulty");

        if (savedSearchQuery) searchInput.value = savedSearchQuery;
        if (savedDifficulty) difficultyFilter.value = savedDifficulty;
    }

    loadPreferences();
    filterTrails();

    searchInput.addEventListener("input", filterTrails);
    difficultyFilter.addEventListener("change", filterTrails);

    loadTrails();
});

const trailList = document.getElementById('trail-list');

function displayTrailCard(trail) {
  const card = document.createElement('div');
  card.classList.add('trail-card'); 

  card.innerHTML = `
    <img src="${trail.image}" alt="${trail.name}">
    <h3>${trail.name}</h3>
    <p>${trail.description}</p>
  `;

  trailList.appendChild(card);
}



