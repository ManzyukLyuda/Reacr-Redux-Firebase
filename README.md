## Description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
It's a simple TodoList where user can:
 - Sign up, 
 - Sign In, 
 - observe all available Todos, 
 - add Comments,
 - add Subscribers,
 - add new Todo.
 - Log out

## Prerequisites
Before you begin, ensure you have met the following requirements:
1. You have installed the latest version of Node.js,
2. If you don't provide the latest version of TypeScript globaly, so add it please for this project,

To run this TodoList project you need credantials, which are not provided in this repo. So after clonning you will need to provide your own 'config folfer' inside 'src'.
And add there config.ts file of the next structure:

```bash
export const firebaseConfig = {
	apiKey: 'your_api_key',
	authDomain: 'your_domain',
	databaseURL: 'url_to_database',
	projectId: 'project_id',
	storageBucket: 'storage',
	messagingSenderId: 'messaging_id',
	appId: 'app_id',
};
```

To get your oun firebaseConfig go to [Firebase](https://console.firebase.google.com/), log in, add new project and you'll be provided with the config.

## Available Scripts

##### `yarn start / npm i`
Befor run it first time install all dependencise

##### `yarn start / npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### `yarn test / npm start`

Launches the test runner in the interactive watch mode.<br />

##### `yarn build / npm start`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

