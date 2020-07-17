This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm install`

This will install all the dependencies it takes for the game to run locally.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Process`

As a learning project, I wanted to see what it took to get a Checkers Game up and running in React. Given that I'm new to the Framework, I decided to build off of Gabriel Mioni's React Checkers App, which you can find here: <br />
https://github.com/GabrielMioni/react-checkers <br />

The app already came with many neat features such as: <br />
-A computer player that optimizes for good moves <br />
-An undo move button <br />
-Move options displayed for your checker when clicked <br />
-King status when you get pieces to the other side of the board <br />

However, there were some features that I felt was missing, such as: <br />
-A restart option and displaying the number of moves inspired by Andrea C's React Checkers App: https://github.com/andreac92/react-checkers<br />
-A landing screen that you can start the game from -- Drew inspiration from something I played around with in CodeSandbox: https://codesandbox.io/s/happy-borg-63259?file=/src/login.js <br />
-A more descriptive header that lets player know whose turn it is <br />
-The rule that if your checker can eliminate another checker, it must do so if that's the checker you want to move, and there is the option to move into an empty space <br />

### `What's Next`

And thus, what I have so far! While I've made progress, I'm far from over! Not only is there more learning about React to do, from learning how to pass variables from Child to Parent to working with Hooks, but there are also more features/changes I want to add, such as: <br />
-Rebuild checkers from scratch -- I was able to refine it, what's next is to build it from Ground Zero and have greater control over the structure/components <br />
-More documentation, to further both your understanding and mine <br />
-Home button using React Router -- allowing the player to go back to the landing screen <br />
-Victory/Defeat Banner -- right now, you see a message at the top and cannot make anymore moves -- I want to provide the option to go Home or Restart with the Banner <br />
-Choose who starts -- give the player the option to either start or have the computer open <br />
-Have the computer make a move for itself if Undone -- right now, you have to make a move for the computer if you Undo its last move <br />
-Current Tile Hover -- make the tile the mouse is over glow! <br />
-Checker Options on Hover [ADDED 7/16/20] <br />
-Drag and Drop Functionality with the Checkers <br />
-Make the App more visually appealing <br />

