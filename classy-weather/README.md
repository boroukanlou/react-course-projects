## Classy Weather App

Classy Weather is a simple React application that fetches and displays weather forecasts based on user-entered locations.

### Overview

This application utilizes the Open Meteo API to fetch weather data based on user-provided locations. It displays weather icons, temperature ranges, and dates for upcoming days. The application also features a search input for users to enter their desired location.

### Features

- **Search Location:** Users can enter the name of their desired location to fetch weather forecasts.
- **Weather Display:** Weather forecasts are displayed in a user-friendly format, including weather icons, temperature ranges, and dates for upcoming days.
- **Automatic Location Saving:** The application automatically saves the user's last entered location using browser local storage.

### Installation and Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Usage

1. Enter the desired location in the search input.
2. Press Enter or click outside the input field to fetch weather forecasts for the entered location.
3. View the weather forecasts displayed for upcoming days.
4. The application saves your last entered location for convenience.

### APIs Used

- **Geocoding API:** Used to retrieve latitude, longitude, timezone, and other location details based on the user-entered location name.
- **Open Meteo API:** Used to fetch weather forecasts based on latitude, longitude, and timezone obtained from the Geocoding API.
