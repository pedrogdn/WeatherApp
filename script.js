document.getElementById('search-button').addEventListener('click', function() {
    const cityName = document.getElementById('search-box').value;
    fetchWeatherData(cityName);
});

function fetchWeatherData(city) {
    const apiKey = 'cb1cd41557240e9c01938bf47a86595b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayWeatherData(data) {
    const weatherDisplay = document.getElementById('weather-display');
    if (data.cod === '404') {
        weatherDisplay.innerHTML = `<p>City not found. Please try again.</p>`;
        return;
    }

    const weatherHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    weatherDisplay.innerHTML = weatherHTML;
}
