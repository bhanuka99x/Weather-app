const apiKey = "85a0964aea6a1aa96b9a6fd5b7a8f31d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const weatherImage = document.querySelector(".weather-icon");

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
        };
        document.getElementById('dateTime').textContent = now.toLocaleDateString('en-US', options);
        }

async function checkWeather(city) {

  document.getElementById("loading").style.display = "block";
  document.getElementById("weatherContent").style.display = "none";

  const response = await fetch(apiUrl + city + `&appid=${apiKey} `);
  let data = await response.json();
  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
  document.querySelector(".feels-like").innerHTML = "Feels like " + Math.round(data.main.feels_like) + "°C";
  document.querySelector(".detail-value").innerHTML = Math.round(data.main.humidity) + " %";
  document.querySelector("#windSpeed").innerHTML = Math.round(data.wind.speed) + " km/h";
  document.querySelector("#visibility").innerHTML = Math.round(data.visibility / 1000) + " km";
  document.querySelector("#pressure").innerHTML = Math.round(data.main.pressure) + " hPa";

  if (data.weather[0].main == "Clouds") {
    weatherImage.src = "../images/clouds.png";
    document.body.className = "cloudy";
  } else if (data.weather[0].main == "Clear") {
    weatherImage.src = "../images/clear.png";
    document.body.className = "clear";
  } else if (data.weather[0].main == "Rain") {
    weatherImage.src = "../images/rain.png";
    document.body.className = "rainy";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImage.src = "../images/drizzle.png";
    document.body.className = "cloudy";
  } else if (data.weather[0].main == "Mist") {
    weatherImage.src = "../images/mist.png";
    document.body.className = "cloudy";
  } else if (data.weather[0].main == "Snow") {
    weatherImage.src = "../images/snow.png";
    document.body.className = "snowy";
  } else if (data.weather[0].main == "Thunderstorm") {
    weatherImage.src = "../images/thunderstorm.png";
    document.body.className = "cloudy";
  } else {
    weatherImage.src = "../images/unknown.png";
  }

  document.getElementById("loading").style.display = "none";
  document.getElementById("weatherContent").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Create animated particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  particlesContainer.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 4 + 4 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Update weather display
//
// Search functionality
// function searchWeather() {
//     const searchInput = document.getElementById('searchInput');
//     const query = searchInput.value.toLowerCase().trim();

//     if (!query) return;

// Show loading

//     // Simulate API call delay
//     setTimeout(() => {
//         const data = weatherData[query];

//         if (data) {
//             updateWeatherDisplay(data);
//         } else {
//             // Show default data for unknown cities
//             const defaultData = {
//                 city: searchInput.value,
//                 country: 'Unknown',
//                 temperature: 20,
//                 feelsLike: 22,
//                 condition: 'clear',
//                 description: 'Clear',
//                 humidity: 70,
//                 windSpeed: 10,
//                 visibility: 8,
//                 pressure: 1010,
//                 icon: ''
//             };
//             updateWeatherDisplay(defaultData);
//         }

//         // Hide loading
//         document.getElementById('loading').style.display = 'none';
//         document.getElementById('weatherContent').style.display = 'block';

//         searchInput.value = '';
//     }, 1500);
// }

// // Event listeners
// document.getElementById('searchBtn').addEventListener('click', searchWeather);
// document.getElementById('searchInput').addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         searchWeather();
//     }
// });

// Initialize app
createParticles();
updateDateTime();


// Update time every minute
// setInterval(updateDateTime, 60000);

// Recreation particles every 10 seconds for animation variety
// setInterval(createParticles, 10000);
