// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
/*c. Prompts for Engineer will also include:
i. github --GitHub username
ii. getGitHub()
iii. getRole -- Overridden to return Engineer*/

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, role, github) {
        super (name, id, email, role);
        this._github = github 
     };
     getGitHub() {
         return this._github;
     };
     getRole() {
         return 'Engineer'
     };
  };

  module.exports = Engineer;