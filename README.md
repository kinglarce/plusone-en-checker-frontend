# PlusOne English Word Validator - Frontend

This is a react app that let's you check your english words validity.

## Getting started

To get the frontend running locally:

- Clone this repo
  - `https://github.com/kinglarce/plusone-en-checker-frontend.git`
- Install the required dependencies
  - `npm install`
- Provide the `REACT_APP_API_URL` environment variable for the backend API.
- Start the development server
  - `npm start`
- Visit URL
  - `http://localhost:3000/`

### Requesting backend API

The source code for the backend api can be found in the [https://github.com/kinglarce/plusone-en-checker-backend](https://github.com/kinglarce/plusone-en-checker-backend).

If you want to change the API URL to a different backend server, simply edit `.env` and change `REACT_APP_API_URL` to what you desired.

## Functionality overview

- Validate english words from the backend.
- Return invalid words

## Frontend Structure

- `src/api` - This folder contains the function for requesting to our API. This post and validate english words.
- `src/index.tsx` - This file is the entry point to our frontend.
- `src/App.tsx` - This file is the entry point to our components.
- `src/components` - This folder contains the components for our frontend.
  - `InputForm` - Displays input form for typing the english sentence.
  - `OutputForm` - Display invalid words returned from the backend
  - `LoadingButton` - A submit button with loading when it interacts to backend.

<br />