const Employee = require("./Employee");
const inquirer = require('inquirer');
const validate = require("./Validate");

class Manager extends Employee {
    constructor(name, id, email, officeNumber = ""){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {return this.officeNumber}
    getRole(){return "Manager"};
}
const getManager = async manager => {
    await inquirer.prompt([
        {
            message: "What's the name of the Manager?",
            type: "input",
            name: "name",
            validate: validate.validateString
        },
        {
            message: "What's the ID of the Manager?",
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
            message: "What's the office number of the Manager?",
            type: "input",
            name: "officeNumber",
            validate: validate.validateNumber
        }]).then(function(ans){
            manager.name = ans.name;
            manager.id = ans.id;
            manager.email = ans.email;
            manager.officeNumber = ans.officeNumber;
        })
    return manager;
};
module.exports = {
    Manager: Manager,
    getManager: getManager
};