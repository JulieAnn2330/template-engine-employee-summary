// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
/*b. Prompts for Manager will also include:
i. officeNumber
ii. getRole() --Overridden to return 'Manager'*/

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super (name, id, email, role);
        this._officeNumber = officeNumber 
     };
     getOfficeNumber() {
         return this._officeNumber;
     };
     getRole() {
         return 'Manager'
     };
  };

  module.exports = Manager;