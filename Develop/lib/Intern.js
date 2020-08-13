// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
/*d. Prompts for Intern will also include:
i. school
ii. getSchool()
iii. getRole() -- Overridden to return Intern*/

const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, role, school) {
        super (name, id, email, role);
        this._school = school 
     };
     getSchool() {
         return this._school;
     };
     getRole() {
         return 'Intern'
     };
  };

  module.exports = Intern;