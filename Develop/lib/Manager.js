// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
/*b. Prompts for Manager will also include:
i. officeNumber
ii. getRole() --Overridden to return 'Manager'*/

const Employee = require("./Employee");
const Validation = require('../validation')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber 
     };
     getOfficeNumber() {
         return this.officeNumber;
     };
     getRole() {
         return 'Manager'
     };
  };

  module.exports = Manager;