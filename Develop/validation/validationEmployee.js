/*a.Prompts for Employee
        i. User name
        ii. id
        iii. email
        iv. getName()
        v. getId()
        vi. getEmail()
        vii. getRole() -- returns 'Employee'
    b. Prompts for Manager will also include:
        i. officeNumber
        ii. getRole() --Overridden to return 'Manager'
    c. Prompts for Engineer will also include:
        i. github --GitHub username
        ii. getGitHub()
        iii. getRole -- Overridden to return Engineer
    d. Prompts for Intern will also include:
        i. school
        ii. getSchool()
        iii. getRole() -- Overridden to return Intern*/

function ValidationEmployee(name, id, email) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number" || isNaN(id) || id < 0) {
    throw new Error("Expected parameter 'id' to be a non-negative number");
  }

  if (typeof email !== "email" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  this.name = name;
  this.id = id;
  this.email = email;
  
  }

module.exports = ValidationEmployee;
