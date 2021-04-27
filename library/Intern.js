const Employee = require("./Employee");
const inquirer = require('inquirer');
const validate = require("./Validate");

class Intern extends Employee {
    constructor(name,id,email,school = ""){
        super(name,id,email);
        this.school = school;
    }
    getSchool(){return this.school};
    getRole(){return "Intern"};
}
const getIntern = async intern => {
    await inquirer.prompt([
        {
            message: "What's the name of the intern?",
            type: "input",
            name: "name",
            validate: validate.validateString
        },
        {
            message: "What's the ID of the intern?",
            type: "input",
            name: "ID",
            validate: validate.validateNumber
        },
        {
            message: "What's the email?",
            type: "input",
            name: "email",
            validate: validate.validateEmail
        },
        {
            message: "What's the school name of the intern?",
            type: "input",
            name: "school",
            validate: validate.validateString
        }])
        .then(function (ans){
            intern.name = ans.name;
            intern.id = ans.id;
            intern.email = ans.email;
            intern.school = ans.school;

        })
    return intern;
};
module.exports = {
    Intern: Intern,
    getIntern: getIntern};