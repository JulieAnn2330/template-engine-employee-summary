// TODO: Write code to define and export the Employee class
/*a.Prompts for Employee
i. User name
ii. id
iii. email
iv. getName()
v. getId()
vi. getEmail()
vii. getRole() -- returns 'Employee'*/

class Employee {
   constructor (name, id, email) {
       this.name = name;
       this.id = id;
       this.email = email;
    
   };
   getName() {
    return this.name
    };
    getId() {
        return this.id;
    };
    getEmail() {
    return this.email;
    };
    getRole() {
        return 'Employee'
    };
};

module.exports = Employee;
    