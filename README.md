# CheeseBored: A WDI Project

This is an example RESTful Express App with EJS for teaching and learning purposes.

## Setup

Clone or download the repo

- run `yarn install` or `npm install` to install the dependencies
- run `yarn seed` or `node db/seeds` to seed the database
- run `node index.js` (or simply `nodemon` if you have nodemon installed) to start the app

You will need [node](https://nodejs.org/) and [mongodb](https://www.mongodb.com/) set up on your local environment.

If you do not have them, I would advise installing them with [homebrew](https://brew.sh/) (Mac only).

## Features

- Authentication with BCrypt
- Login redirects to previously viewed page (see `controllers/sessions.js`)
- Users can add and favourite cheeses
- Users can only modify data they have added themselves
- User profile page shows user added cheeses and favourite cheeses
- User's cheeses populated with a virtual (see `models/user.js`)
- Frontend form validation with HTML5 and [jQuery Validate Plugin](https://jqueryvalidation.org/)

## Notes

- Feel free to create an account and add cheeses
- All user generated data will be removed at midnight
