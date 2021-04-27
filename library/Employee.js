//base class for each employee
class Employee{
    constructor (name = "", id = 0, email = ""){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(){return this.name};
    getId(){return this.id};
    getEmail(){return this.email};
    //defining method without an attribute
    getRole(){return "Employee"};
}
//exporting class
module.exports = Employee;