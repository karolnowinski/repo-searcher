# About

This project was prepared as part of a recruitment task for an internship at [Allegro](https://github.com/allegro).

- [Live demo](https://nervous-ramanujan-52f511.netlify.app/)

# Key features

The created web application displays a list of repositories of any GitHub user. It consists of two main components:

- A form that allows you to enter GitHub username
- List of repositories of the searched user sorted by popularity (number of stars ⭐).

The application additionally supports changing its theme to dark and was made in accordance with the _mobile-first_ principle. The application also displays the appropriate GitHub language color for a given repository.

In the application, you can choose the sort direction of received repositories list by the number of stars in ascending or descending order.

The app is responsive - it is prepared to be displayed according to the size of the user's screen.

# Screenshots

## Mobile:

<br />
<img src="./docs/images/mobile.gif" alt="Mobile" width="400"/>

## Desktop:

<br />
<img src="./docs/images/desktop.gif" alt="Desktop" width="1000"/>

# Tech Stack

- React ![React](/docs/images/react.svg)
- Styled Components 💅
- Netlify ![Netlify](/docs/images/netlify.svg)

# Sources

The application is based on the [GitHub REST API](https://docs.github.com/en/rest) and uses unauthenticated requests.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. They are associated with the originating IP address, and not the user making requests [[1]](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

In the case of application development, one of the authentication methods proposed by GitHub should be used [[2]](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#authentication).

GitHub colors corresponding to the programming languages come from the project: [github.com/ozh/github-colors](https://github.com/ozh/github-colors).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so basically application setup and usage should be performed according to the Create React App instructions.

# Setup and Usage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Additional notes

- ❗ The GitHub API for one request returns only 100 repositories per page. This means that for users with more than 100 repositories, more than one query is required [[3]](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user).

- Note that GitHub API limitations can prevent the page from returning repos for the user. Just make some coffee and come back in a while. ☕✌
