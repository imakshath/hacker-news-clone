This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn start` (SSR)

Runs the app in the development mode. Which will internally serve build assets in SSR mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### CI/CD

Added travis for CI and which will deploy the app to heroku using CD
Based on each commit to Master branch CI will trigger. It will run following steps,
    - npm run test
    - npm run build
    - deploy the app to Heroku

### heroku deployment link

https://vast-falls-77512.herokuapp.com/

### github repo

https://github.com/imakshath/hacker-news-clone



