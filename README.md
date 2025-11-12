# 🌦️ Weather App

A clean and responsive **Weather Application** built using **HTML, CSS, and JavaScript**, which fetches live weather data using the **OpenWeatherMap API**.  
This project provides real-time weather information such as temperature, humidity, wind speed, and weather conditions for any searched city.

---

## 🚀 Features

- Real-time weather updates via **OpenWeatherMap API**
- Displays city name, temperature, weather condition, humidity, and wind speed
- Responsive and modern UI
- Error handling for invalid city names
- Automatically detects user’s location (optional)

---

## 🧩 Tech Stack

- **HTML5** – structure  
- **CSS3** – styling and responsive design  
- **JavaScript (ES6)** – API integration and logic  
- **OpenWeatherMap API** – live weather data source  

---

## ⚙️ Installation & Setup

Follow these simple steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/VCShekhar96/Weather_App.git
2️⃣ Navigate to the project folder
bash
Copy code
cd Weather_App
3️⃣ Open the project
You can directly open index.html in your browser, OR use a local web server (recommended):

Using VS Code Live Server:

Install the Live Server extension.

Right-click index.html → Open with Live Server.

🔑 API Configuration
Visit OpenWeatherMap

Sign up and get your API key.

In your JavaScript file (e.g., script.js), replace:

js
Copy code
const API_KEY = "your_api_key_here";
with your actual key:

js
Copy code
const API_KEY = "abcd1234example";
▶️ Running the App
After setting the API key, open the index.html file in your browser.

Enter a city name in the input box and click Search.

The app displays:

🌡️ Temperature

💧 Humidity

🌬️ Wind Speed

🌤️ Weather Condition

🧠 Example Output
City: Hyderabad
Temperature: 28°C
Condition: Cloudy
Humidity: 68%
Wind Speed: 10 km/h

🛠️ Folder Structure
bash
Copy code
Weather_App/
│
├── index.html           # Main HTML file
├── style.css            # Styling
├── script.js            # Weather API logic
├── assets/              # (optional) icons and images
└── README.md            # Documentation
🧾 Additional Notes
If API requests fail, verify your API key and network access.

Free OpenWeatherMap API allows 60 requests/minute; consider upgrading if needed.

You can enhance the UI with animations or charts using Chart.js.

👨‍💻 Author
V Chandrashekhar
🔗 LinkedIn
🧠 Passionate about AI, Web Development, and Cloud Integration
