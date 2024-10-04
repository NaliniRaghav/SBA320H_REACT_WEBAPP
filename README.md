
# Weather Forecast App

This project is a weather forecasting application built using React and integrated with the **Weather API**. The app allows users to check weather conditions for a selected city with options to view the **current weather**, an **hourly forecast**, and a **10-day forecast**. It meets the core requirements of the SBA 320H project, including using external data, frequent GitHub commits, and hosting on a live site.

## 🛠️ Technologies Used
- **React**: Frontend framework used to build interactive user interfaces and manage components.
- **JavaScript (ES6)**: Core programming language for functionality and logic.
- **HTML5**: Structure and semantic markup of the web pages.
- **CSS3**: Styling for the layout and responsiveness of the application.
- **Weather API**: External data source providing real-time weather information. 
- **AJAX**: Fetches data from the Weather API and injects it into the DOM dynamically.
- **Vite**: A fast build tool used for development and bundling the app.
- **ReactDOM**: Used for rendering the application to the browser's DOM.
- **Axios**: Optional library to handle HTTP requests (for fetching weather data).

## Approach
This application demonstrates the ability to fetch real-time weather data from the Weather API and display it in a user-friendly format. Users can:
1. Select or type in a city.
2. Choose from three forecast options: **Today**, **Hourly**, or **10-Day**.
3. View weather data dynamically updated based on the user's input and selection.

### Components:
- **App.jsx**: The main entry point of the application that manages the state and renders the major components.
- **Header.jsx**: Provides an input field and a search button for typing a city name.
- **NavBar.jsx**: A navigation bar with buttons for selecting forecast types: Today, Hourly, and 10-Day.
- **WeatherCard.jsx**: Fetches and displays weather data based on the selected city and forecast type.
- **ForecastDisplay.jsx**: Displays the weather data (temperature, condition, etc.) for the selected city and forecast type.

### Features:
1. **City Selection**: Users can either select from a dropdown list of cities or type the name of a city to get weather details.
2. **Forecast Options**: Three buttons allow users to switch between viewing:
   - Today's current weather.
   - Hourly forecasts.
   - A 10-day forecast.
3. **Dynamic Data Fetching**: Weather data is fetched from the Weather API dynamically based on user input and forecast choice.
4. **Responsive Design**: The app is styled using CSS for a clean and responsive layout.

##  Hosting
The application is hosted on [Netlify](https://www.netlify.com/) and can be accessed through the following live link:
[Live Site](https://your-app-name.netlify.app)

## Usage Instructions
1. Open the app and either:
   - Type the name of a city in the search bar.
   - Select a city from the dropdown list.
2. Choose one of the forecast options:
   - **Today**: Displays the current weather for the selected city.
   - **Hourly**: Displays the hourly forecast for the current day.
   - **10-Day**: Displays a 10-day forecast for the selected city.
3. View the weather data, including temperature, weather conditions, and other details.

## 🌐 Weather API Integration
This app uses the **Weather API** to fetch real-time weather data. Below is an example of the API endpoint used to get current weather for a city:


const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
  params: { q: city, key: '81a703cb6bfd422b8c230733243009' }
});
```

API Documentation: [Weather API Docs](https://www.weatherapi.com/docs/)

##  Setup and Installation
1. Clone the repository:
   ```bash
   git clone  https://github.com/NaliniRaghav/SBA320H_REACT_WEBAPP
   ```
2. Navigate into the project directory:
 
   cd sba-weatherapp
    
3. Install the dependencies:
  
   npm install
   
4. Create a '.env' file in the root directory and add your Weather API key:
  
   VITE_WEATHER_API_KEY= 81a703cb6bfd422b8c230733243009

5. Run the development server:
    
   npm run dev
 
6. Open your browser and navigate to 'http://localhost:3000' to view the app.

## 🔍 API Key Management
To keep your API key secure and private, the app uses environment variables. The key is loaded from '.env' using Vite’s 'import.meta.env' feature.

Make sure to add '.env' to '.gitignore' to avoid committing sensitive API credentials:
 
# .gitignore
.env
```

##  Unsolved Problems and Future Improvements
- **Error Handling**: More robust error handling for failed API requests.
- **UI Enhancements**: Improving the visual aesthetics and user experience, including adding a loader while fetching data.
- **Redux**: Implementing Redux Toolkit for more complex state management if the app scales.

##  Bonus Features (Optional)
- Local Storage**: Save the last searched city in the browser’s local storage for faster access when returning to the site.
- User Interface**: Add UI features such as a carousel to display different weather cards or tooltips for more information.

## Frequent Commits
Throughout the project development, frequent commits were made to GitHub. This ensures proper version control and the ability to track progress or rollback in case of errors.

```

## Resources
- [Weather API](https://www.weatherapi.com/)
- [React Documentation](https://reactjs.org/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
