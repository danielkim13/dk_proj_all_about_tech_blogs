const { User } = require("../models");

const userData = [
  {
    username: "partyTime",
    github: "partyTime",
    email: "partytime@gmail.com",
    password: "password1",
  },
  {
    username: "DrinkSomeAlcohol",
    github: "beerMaster",
    email: "beermaster@gmail.com",
    password: "password2",
  },
  {
    username: "ohSnap",
    github: "snappyDude",
    email: "snappydude@gmail.com",
    password: "password3",
  },
  {
    username: "ImaUser",
    github: "userUser",
    email: "useruser@gmail.com",
    password: "password4",
  },
  {
    username: "whoAmI",
    github: "whoami",
    email: "whoami@gmail.com",
    password: "password5",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
