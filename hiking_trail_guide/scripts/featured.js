const TRAILS_JSON = 'trails.json';
const WEATHER_API_KEY = '3a1ae87b322aa2be340a4e51219d384b';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function loadFeaturedTrail() {
  try {
    const response = await fetch(TRAILS_JSON);
    const trails = await response.json();
    const trail = trails[Math.floor(Math.random() * trails.length)];

    displayTrailInfo(trail);

    if (trail.location && trail.location.lat && trail.location.lon) {
      fetchWeather(trail.location.lat, trail.location.lon);
    } else {
      displayWeatherFallback("Weather data not available for this trail.");
    }

    console.log("Safety Tips:", trail.safety_tips);  // Check the safety tips in the console
    displaySafetyTips(trail.safety_tips || []);
  } catch (error) {
    console.error("Failed to load trail:", error);
  }
}

function displayTrailInfo(trail) {
    console.log(trail); 
    const container = document.getElementById('featured-trail');
    const elevation = trail.elevation_gain ? trail.elevation_gain : 'N/A'; 
    console.log(`Elevation Gain: ${elevation}`); 
    container.innerHTML = `
      <div>
        <h1>${trail.name}</h1>
        <p>${trail.description}</p>
        <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
        <p><strong>Length:</strong> ${trail.length} miles</p>
        <p><strong>Elevation Gain:</strong> ${elevation} ft</p>
      </div>
      <img src="${trail.image}" alt="${trail.name} photo">
    `;
}

async function fetchWeather(lat, lon) {
  const url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Weather API response not OK");
    }
    const data = await res.json();
    if (data.weather && data.weather[0]) {
      displayWeather(data);
    } else {
      console.error("Invalid weather data format:", data);
      displayWeatherFallback("Weather data not available for this trail.");
    }
  } catch (error) {
    console.error("Failed to load weather data:", error);
    displayWeatherFallback("Weather information is currently unavailable.");
  }
}

function displayWeather(weather) {
  const container = document.getElementById('trail-weather');

  // Get icon code from weather data
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  container.innerHTML = `
    <h2>Current Weather</h2>
    <div class="weather-info">
      <img src="${iconUrl}" alt="Weather icon">
      <div>
        <p><strong>${weather.weather[0].main}</strong> - ${weather.weather[0].description}</p>
        <p><strong>Temperature:</strong> ${weather.main.temp}°F</p>
        <p><strong>Humidity:</strong> ${weather.main.humidity}%</p>
        <p><strong>Wind:</strong> ${weather.wind.speed} mph</p>
      </div>
    </div>
  `;
}

function displayWeatherFallback(message) {
  const container = document.getElementById('trail-weather');
  container.innerHTML = `
    <h2>Current Weather</h2>
    <p>${message}</p>
  `;
}

function displaySafetyTips(tips) {
  const list = document.getElementById('safety-tips');
  list.innerHTML = "";
  if (tips && tips.length > 0) {
    tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      list.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = "No safety tips available.";
    list.appendChild(li);
  }
}

document.addEventListener('DOMContentLoaded', loadFeaturedTrail);
