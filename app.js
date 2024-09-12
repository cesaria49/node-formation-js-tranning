/*````````@NodeJs`````````*/
//Install the required libraries {Yargs: 12.0.2, chalk:2.4.1}
//Import the required libraries

//Initialiser yargs pour les  command line arguments Read Create Delete
//Create userData.json use Node.js fs module
//Read and Log to console the JSON data from userData.json with chalk styles
//Update users with add new user
//Delete a user by name
const chalk = require("chalk");
const yargs = require("yargs");
const users = require("./users");
const functionThatReadUsers = require("./users.js");
const functionThatDeleteUsers = require("./users.js");
const functionThatUpdateUsers = require("./users.js");

yargs.version("1.1.0");

yargs.command({
  command: "update",
  describe: "Add new user",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    height: {
      describe: "User height",
      demandOption: true,
      type: "string",
    },
    mass: {
      describe: "User mass",
      demandOption: true,
      type: "string",
    },
    eye_color: {
      describe: "User eye color",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    functionThatUpdateUsers.updateUSers(argv.name, argv.height, argv.mass, argv.eye_color, argv.gender);
    
}});

yargs.command({
  command: "read",
  describe: "Read a user",
  handler: function () {
    functionThatReadUsers.readUsers();
  },
});

yargs.command({
  command: "delete",
  describe: "Delete a user",
  builder: {
    name: {
      describe: "delete name",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Name " + argv.name);
    functionThatDeleteUsers.deleteUsers(argv.name);
  },
});

yargs.parse();
