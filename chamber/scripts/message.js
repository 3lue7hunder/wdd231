const visitFeedback = document.querySelector('#timeBetween');
let lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  // First visit
  visitFeedback.textContent = "Welcome! Let us know if you have any questions.";
} else {
  let previousVisit = parseInt(lastVisit, 10); // Convert string to number
  let difference = (Date.now() - previousVisit) / 86400000; // Convert ms to days

  if (difference < 1) {
    visitFeedback.textContent = "Back so soon! Awesome!";
  } else {
    let days = Math.floor(difference);
    let dayText = days === 1 ? "day" : "days"; // Singular/plural handling
    visitFeedback.textContent = `You last visited ${days} ${dayText} ago.`;
  }
}

// Store the current visit time
localStorage.setItem("lastVisit", Date.now());
