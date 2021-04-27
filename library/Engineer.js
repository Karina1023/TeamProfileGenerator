const Employee = require("./Employee");
const inquirer = require('inquirer');
const validate = require("./validate");

class Engineer extends Employee {
    constructor(name, id, email, github = "") {
        super(name, id, email);
        this.github = github;
    }
    getRole() {return "Engineer"};
    getGithub() {return this.github}
}
const getEngineer = async engineer => {
    await inquirer.prompt([
        {
            message: "What's name of Engineer?",
            type: "input",
            name: "name",
            validate: validate.validateString
        },
        {
            message: "What's ID of Engineer?",
            type: "input",
            name: "id",
            validate: validate.validateNumber
        },
        {
            message: "What's the email?",
            type: "input",
            name: "email",
            validate: validate.validateEmail
        },
        {
            message: "What's Git name of Engineer?",
            type: "input",
            name: "Github",
            validate: validate.validateString
        }]).then(function (ans) {
            engineer.name = ans.name;
            engineer.id = ans.id;
            engineer.email = ans.email;
            engineer.github = ans.github;
        })
    return engineer;
    
};
module.exports = {
    Engineer: Engineer,
    getEngineer: getEngineer
};