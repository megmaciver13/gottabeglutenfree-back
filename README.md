# Gottabeglutenfree (back end)

A full-stack website filled with approachable gluten free recipes and meal ideas, served with a side of personal commentary. (The seed data was taken from my previous WordPress blog.)

The repo for the front end can be found at: https://github.com/megmaciver13/gottabeglutenfree-front.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need node installed on your local system.

### Installing

Once you have the project files, run:

```
npm install
```

### Deployment

To deploy this on your local system, you will first need to seed the database with the seed data from the seeds.js file:

```
node db/seeds.js
```

Then, you can start up the project in the browser:

```
nodemon index.js
```

## Deployed Website

To visit the deployed version of this website, visit: https://gottabeglutenfree.herokuapp.com/.

## Built With

* [MongoDB](https://www.mongodb.com/) - The database used
* [Express](https://expressjs.com/) - The web framework used
* [Node](https://nodejs.org/en/) - For development and dependency management
* [Heroku](https://dashboard.heroku.com/) - The hosting service used

## Author

Meg MacIver
