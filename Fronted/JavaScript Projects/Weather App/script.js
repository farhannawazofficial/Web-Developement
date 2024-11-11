// API details
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=YOUR_API_KEY&units=metric";

// Selecting necessary elements
const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherInfo = document.getElementById("weatherInfo");

// Function to fetch weather data
async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === "404") {
            weatherInfo.innerHTML = "City not found. Please check the name and try again.";
            return;
        }

        displayWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = "Error fetching weather data. Please try again later.";
        console.error(error);  // Log the error for more details
    }
}

// Function to display weather data
function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const humidity = main.humidity;

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <p>Humidity: ${humidity}%</p>
    `;
}

// Event listeners
getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) fetchWeather(city);
    }
});
