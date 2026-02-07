# Weather App

A simple, responsive weather application built with HTML, CSS, and JavaScript. Fetches real-time weather data from the OpenWeatherMap API.

## Features

- 🔍 City search with autocomplete via Enter key or button click
- 🌡️ Real-time temperature, humidity, and wind speed display
- 🎨 Responsive gradient UI with centered layout
- 🌦️ Dynamic weather icons from OpenWeatherMap
- 📱 Mobile-friendly design

## Files

- `index.html` – HTML structure with semantic markup
- `style.css` – Responsive CSS with flexbox layout and gradient backgrounds
- `script.js` – JavaScript for API integration and DOM updates
- `README.md` – This file

## Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VindhyachalSIET23/Weather-app.git
   cd Weather-app
   ```

2. **Get an API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up (free tier available)
   - Copy your API key

3. **Configure API Key**
   - Open `script.js`
   - Replace `'b85c9191432369b0b463c8e7cac8bb5b'` with your API key:
     ```javascript
     const API_KEY = 'your_api_key_here';
     ```

4. **Run the App**
   - Option A: Open `index.html` directly in your browser
   - Option B: Serve locally with Python:
     ```bash
     python -m http.server 5500
     ```
     Then visit `http://localhost:5500`

## Usage

1. Type a city name in the search box
2. Press Enter or click the search button
3. View current weather, temperature, humidity, and wind speed

## API Response Structure

The app uses OpenWeatherMap's Current Weather API:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: `q` (city), `units=metric` (Celsius), `appid` (API key)

## Error Handling

- Invalid API key → "Invalid API key" alert
- City not found → "City not found" alert
- Rate limit exceeded → "API rate limit exceeded" alert
- Network error → "Network error" alert with retry guidance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

Open source. Feel free to modify and use for learning.

## Author

Created by Roshan (VindhyachalSIET23)
