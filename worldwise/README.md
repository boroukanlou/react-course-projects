## Project README

This project is a React application designed to showcase various components and pages while utilizing React Router for navigation and lazy loading for better performance.

### Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server with `npm start` or `yarn start`.

### Project Structure

- **`src/contexts`**: Contains context providers for managing authentication (`FakeAuthContext`) and city data (`CitiesContext`).
- **`src/components`**: Houses reusable UI components such as `CityList`, `CountryList`, `Form`, and `SpinnerFullPage`.
- **`src/pages`**: Contains main page components like `Homepage`, `Product`, `Pricing`, `Login`, `AppLayout`, and `PageNotFound`.
- **`src/App.js`**: Main entry point of the application where routing and context providers are set up.

### Dependencies

- **React Router**: Used for declarative routing.
- **React Suspense and Lazy**: Employed for lazy loading of components, enhancing performance.
- **React Context API**: Utilized for state management across the application.

### Running the Application

Once the project is set up and dependencies are installed, you can access the application locally through your browser. The application's main routes include:

- `/`: Homepage
- `/product`: Product page
- `/pricing`: Pricing page
- `/login`: Login page
- `/app`: Protected route, requiring authentication
  - `/app/cities`: List of cities
  - `/app/cities/:id`: Individual city details
  - `/app/countries`: List of countries
  - `/app/form`: Form page
- `/*`: Page not found

### Performance Optimization

The project utilizes lazy loading for route-based code splitting, enhancing initial load time by only loading necessary components when requested. Additionally, a full-page spinner (`SpinnerFullPage`) is displayed during component loading using React Suspense.
