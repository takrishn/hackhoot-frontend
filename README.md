# HackHoot Frontend
Welcome to the HackHoot Frontend Workshop! To see the completed version of HackHoot Frontend, please go to https://github.com/takrishn/hackhoot-frontend-finished.

## What will be covered in this workshop?
- Basic CSS/HTML
- Form creation (mainly text boxes and radio buttons)
- Basic styling (flex boxes included)
- React hooks/state management
- HTTP requests using Axios
- Promises + Async/Await
- Mapping and displaying arrays

## Outline of this Workshop
- General frontend coverage
- - HTML/CSS
- - Javascript
- - What are frameworks?
- - What is React?
- Create src\app\views\create-questions\CreateQuestions.js and src\app\views\create-questions\CreateQuestions.scss
- Basic form creation
- Submit button
- Basic styling
- Create variables
- OnClick and OnChange functions
- Add question to array
- Display questions in array
- Hook up API requests

## Flow of HackHoot Frontend
There are two sides to this application: the admin side, and the player side.

### Admin
#### admin/createquestions/
This is the starting page where the admin creates all the questions for the game. It has the functionality of a TODO list and will be the page covered in this workshop.

Upon creating the questions and clicking submit, the game will be created and the GameId will be sent in the response. The site will then reroute to `admin/start-game/:gameId`.

#### admin/start-game/:gameId
This page only exists to display the gameId. The game will stay on this page for the duration of the time_limit before advancing the game. Players have until the time_limit runs out to join the game. Site is rerouted to `admin/play-game/:gameId`.

#### admin/play-game/:gameId
This page is responsible for displaying the question and answer choices as well as the scores after each question. It re-renders between the two displays. Each display is shown for the duration of the time_limit before advancing the game.

#### admin/end-game/:gameId
This page is the last page displayed. It shows all the scores of all the players and will only display when the game_state = "done"

### Player
this side of the application might be subject to change.

#### /
The player is greeted by this page upon entering the site. They are prompted with two text boxes: playerName and gameId. When the player hits submit, they are registered to the game and the site stays on the page until the timer runs out on the admin side.

#### gameplay/
This page consists of four buttons. Players click their answer, and the buttons are disabled until the next question. Once the timer runs out, the page displays whether the player was wrong or right. After the time runs out again, it renders the four buttons again.

## Running HackHoot
Clone both this repository and https://github.com/zpinto/hackhoot-backend. Navigate to where you cloned this repository and run `npm start`.

Then navigate to where you cloned hackhoot-backend and start it by first running `mongod` then running `python app.py`.

Open up a browser and go to `localhost:3000/admin` to create a game. Upon creation of a game, you will be given a game ID. Open another tab and navigate to `localhost:3000/` to enter a gameId and a player name. The game will begin as questions are displayed on the admin side and answer choices on the player side.

# Default README beyond this point
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
