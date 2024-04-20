## usePopcorn

usePopcorn is a simple web application that allows users to browse various movies and rate them.

### Features:

1. **Movie Search**: Users can search for their desired movies using the search bar and view the results.
2. **Movie Details**: By clicking on each movie, its details including title, release year, duration, IMDB rating, and plot summary are displayed.
3. **Rating Capability**: Users can rate each movie they want to add to their watchlist by using the star button and selecting the desired number of stars.
4. **Watchlist Display**: A list of movies that users have watched is displayed. Users can also remove added movies from the list.

### Installation and Setup:

1. Clone or download this project from GitHub.
2. Navigate to the project directory and install dependencies using `npm install`.
3. Start the application using `npm start`.
4. Open the application in your browser and start using it.

### Notes:

- Internet connection is required to use this application.
- An OMDB API key is required to use the OMDB service. This key should be placed in the `key` variable in the `App.js` file.
- By selecting the number of stars and adding a movie to the watchlist, the rating given to the movie is saved in the watchlist and can be used in calculating the user's average rating.
