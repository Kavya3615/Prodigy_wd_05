document.addEventListener("DOMContentLoaded", function () {
    const getWeatherButton = document.getElementById("get-weather");
    const locationInput = document.getElementById("location");
    const cityElement = document.getElementById("city");
    const conditionElement = document.getElementById("condition");
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("wind-speed");

    getWeatherButton.addEventListener("click", function () {
        const location = locationInput.value;
        if (location.trim() !== "") {
            fetchWeather(location);
        }
    });

    function fetchWeather(location) {
        // Replace with your own OpenWeatherMap API key
        const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                cityElement.textContent = data.name;
                conditionElement.textContent = data.weather[0].description;
                temperatureElement.textContent = data.main.temp;
                humidityElement.textContent = data.main.humidity;
                windSpeedElement.textContent = data.wind.speed;
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }
});
