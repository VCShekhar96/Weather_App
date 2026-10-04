# Weather App

A lightweight web application built with **HTML, CSS, and JavaScript** for displaying weather information from a weather API.

## Features

- 🌦️ Search weather by city
- 🌡️ Temperature display
- 💧 Humidity information
- 🌬️ Wind information
- ⚠️ Basic invalid-location/error handling
- 📱 Responsive browser interface

## Tech Stack

- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API

## Getting Started

### 1. Clone

```bash
git clone https://github.com/VCShekhar96/Weather_App.git
cd Weather_App
```

### 2. Configure the API

Create or configure the API key according to the JavaScript implementation.

Use a placeholder in documentation or local configuration:

```text
YOUR_WEATHER_API_KEY
```

**Never commit a real API key to GitHub.**

### 3. Run locally

Open the HTML entry point through a local development server. For example, VS Code Live Server can be used for a simple static deployment.

## Project Structure

```text
Weather_App/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Deployment

A static hosting provider can be used to deploy the frontend. Keep API credentials out of the repository and use a secure configuration strategy appropriate to the API and deployment platform.

## Future Improvements

- Improve API error states and loading feedback.
- Add weather forecasts and additional locations.
- Improve accessibility and keyboard navigation.
- Add automated UI tests.
- Move API access behind a backend service if the API key must remain confidential.

## Security

Client-side API keys can be exposed to users. If the API provider does not support safely restricted browser keys, route requests through a backend instead.
