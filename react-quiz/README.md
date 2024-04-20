## React Quiz App Readme

### Description:

This React application is a quiz app that fetches questions from a server, allows users to answer them within a specified time limit, and calculates their points based on correct answers. It features multiple screens such as a start screen, question screen, progress tracker, timer, and finish screen.

### Technologies Used:

- React
- useEffect
- useReducer

### Features:

- Fetches quiz questions from a server using `fetch` API.
- Handles various states of the quiz: loading, error, ready, active, and finished.
- Displays a loader while fetching questions and an error screen if fetching fails.
- Allows users to start the quiz, answer questions, track progress, and view results.
- Implements a timer to limit the time available for answering each question.
- Calculates points based on correct answers and displays the score at the end.
- Supports restarting the quiz to play again.

### File Structure:

- **Header.js**: Renders the header of the quiz app.
- **Main.js**: Main container component for different screens.
- **Loader.js**: Displays a loader animation while fetching questions.
- **Error.js**: Displays an error message if fetching questions fails.
- **StartScreen.js**: Initial screen to start the quiz.
- **Question.js**: Component to display and answer quiz questions.
- **NextButton.js**: Button to navigate to the next question.
- **Progress.js**: Tracks progress through the quiz and displays current score.
- **FinishScreen.js**: Screen to display quiz results and highscore.
- **Footer.js**: Renders the footer section of the app.
- **Timer.js**: Component to display and countdown the time remaining for each question.

### Constants:

- `SECS_PER_QUESTION`: Defines the duration in seconds for answering each question.

### Initial State:

- `initialState`: Defines the initial state of the quiz app, including questions, status, index, answer, points, highscore, and time remaining.

### Reducer:

- `reducer`: Handles state transitions based on dispatched actions, such as fetching data, starting the quiz, answering questions, and finishing the quiz.

### Installation:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
