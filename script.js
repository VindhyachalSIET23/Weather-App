
const API_KEY = '078d0408f4d75da90f6ad7daf2fe23a5';

const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.searchb85c9191432369b0b463c8e7ca button');
const topTempEl = document.querySelector('h1.temp');
const cityEl = document.querySelector('h2.city');
const centerTempEl = document.querySelector('.details .temp .value');
const humidityEl = document.querySelector('.details .humidity .value');
const windEl = document.querySelector('.details .wind .value');
const weatherIconImg = document.querySelector('.weather-icon img');

async function fetchWeather(city) {
    if (!API_KEY || API_KEY === '078d0408f4d75da90f6ad7daf2fe23a5b') {
        alert('Please set your OpenWeatherMap API key in script.js (API_KEY variable).');
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
        const res = await fetch(url);

        let body = null;
        try {
            body = await res.json();
        } catch (e) {
        }

        if (!res.ok) {
            console.error('Weather API error', res.status, body);
            if (res.status === 404) {
                alert('City not found.');
            } else if (res.status === 401) {
                alert('Invalid API key. Check your OpenWeatherMap API key in script.js.');
            } else if (res.status === 429) {
                alert('API rate limit exceeded. Try again later.');
            } else if (body && body.message) {
                alert(`Error: ${body.message}`);
            } else {
                alert(`Error fetching weather data (status ${res.status}).`);
            }
            return;
        }

        const data = body || await res.json();
        updateUI(data);
    } catch (err) {
        console.error('Network error', err);
        alert('Network error fetching weather data. Check your connection and try again.');
    }
}

function updateUI(data) {
    const tempC = Math.round(data.main.temp);
    topTempEl.textContent = `${tempC}°C`;
    cityEl.textContent = `${data.name}, ${data.sys.country}`;

    // center temp value (duplicate display) — keep consistent
    if (centerTempEl) centerTempEl.textContent = `${tempC}°C`;

    if (humidityEl) humidityEl.textContent = `${data.main.humidity}%`;

    // wind: convert m/s to km/h
    const windKmh = Math.round(data.wind.speed * 3.6);
    if (windEl) windEl.textContent = `${windKmh} km/h`;

    if (weatherIconImg && data.weather && data.weather[0]) {
        const icon = data.weather[0].icon;
        weatherIconImg.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        weatherIconImg.alt = data.weather[0].description || 'weather';
    }
}

function handleSearch() {
    const q = searchInput.value.trim();
    if (!q) return;
    fetchWeather(q);
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Optional: fetch default city on load
window.addEventListener('DOMContentLoaded', () => {
    const defaultCity = 'New York';
    // only fetch if input empty
    if (!searchInput.value.trim()) {
        searchInput.value = defaultCity;
        fetchWeather(defaultCity);
    }
});
