async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '28526d79e7385de7595557dbda0b175f'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('condition').textContent = data.weather[0].description;
    } catch (error) {
        alert('City not found. Please try again.');
    }
}
