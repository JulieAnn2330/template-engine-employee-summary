/* Pseudocode
1. Software  engineering team generator
2. Develop prompts for team manager
3. Create a base class called Employee
    a.Prompts for Employee
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
        iii. getRole() -- Overridden to return Intern
4. Text
5. Create an HTML file that displays a team roster with basic info.
6. In develop folder run npm install
    a. Install inquirer
    b. Install jest
7. Recommended workflow:
    a. Run tests - npm run test
    b. Create or update classes to pass a single text case
    c. Repeat
8. Recommended directory structure:
    a. lib/     //classes and helper code
    b. output/  //rendered output = team.html
    c. templates/ //HTML template(s)
        a. engineer
        b. intern
        c. main -- Employee?
        d. manager
    d. test/    //jest tests
        i. Employee.test.js
        ii. Engineer.test.js
        iii. Intern.test.js
        iv. Manager.test.js
    e. app.js   //Runs the application
9. Create HTML templates, create placeholder character the identifies where dynamic markup begins and ends:
    a. main.html
    b. engineer.html
    c. intern.html
    d. manager.html
10. Prompt user to build a team consisting of:
    a. Manager
    b. Engineers - any number
    c. Interns - any number
11. Generate team.html page in output
12. Each team member needs to include:
    a. Name
    b. Role
    c. Id
    d. Role-specific property (school, link to GitHub profile or office number)
13. Use Validation to ensure that info provided is in proper format - strings, numbers, etc
14. Add app to portfolio*/

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const jest = require('jest');
const ValidationEmployee = require('./validation/ValidationEmployee');
const ValidationEngineer = require('./validation/ValidationEngineer');
const ValidationIntern = require('./validation/ValidationIntern');
const ValidationManager = require('./validation/ValidationManager');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//DONE -- Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function start() {

console.log("Let's compile your team! Teams must consist of at least one manager and any number/combination of Engineers and Interns.")

//let teamHTML = "";

let teamArray = []

let teamSize;

     await inquirer.prompt(
        {
        type: 'number',
        name: 'team',
        message: 'How many team members do you need for your project?'
        }
     )

        .then((info) => {

            teamSize = info.team;

        });


        if (teamSize <= 1) {
            console.log("A team should consist of one manager and any number/combination of Engineers and Interns. Please add at least two members to your team.");
            return;
        };
        
    for (i = 1; i <= teamSize; i++) {

            let name;
            let id;
            let role;
            let email;

    await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is the name of team member number (${i})?`
        },
        {
        type: 'input',
        name: 'id',
        message: `What is the id of team member number (${i})?`
        },
        {
        type: 'input',
        name: 'email',
        message: `What is the email address of team member number (${i})?`
            },
        {
        type: 'list',
        name: 'role',
        message: `What is the role of team member number (${i})?`,
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ]},
    ])

    .then((info) => {

        name = info.name;
        id = info.id;
        role = info.role;
        email = info.email;

    });

    switch (role) {
        case "Manager":

            await inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: `What is the office number of the Manager?`
                    }
                ])
                
                .then((info) => {

                    const manager = new Manager
                    (name, id, email, info.officeNumber);
                    //teamArray.push(manager);
                    console.log(manager)

                teamMember = fs.readFileSync
                ("templates/manager.html");

                teamArray = teamArray + "\n" + eval('`' + teamMember + '`')
                });
                break;

        case "Engineer":

            await inquirer.prompt([
                {
                type: 'input',
                name: 'github',
                message: `What is the Engineer's GitHub username?`
                            }
                ])
                        
                .then((info) => {
        
                const engineer = new Engineer
                (name, id, email, info.github);
                //teamArray.push(engineer);
                console.log(engineer)
        
                teamMember = fs.readFileSync
                ("templates/engineer.html");
        
                teamArray = teamArray + "\n" + eval('`' + teamMember + '`')
                });
                break;

            case "Intern":
            
                await inquirer.prompt([
                    {
                    type: 'input',
                    name: 'school',
                    message: `What school does the Intern attend?`
                                }
                    ])
                            
                    .then((info) => {
            
                    const intern = new Intern
                    (name, id, email, info.school);
                   //teamArray.push(intern);
                    console.log(intern)
            
                    teamMember = fs.readFileSync
                    ("templates/intern.html");
            
                    teamArray = teamArray + "\n" + eval('`' + teamMember + '`')
                });
                break;
    }
}

console.log(teamArray);


const mainHTML = fs.readFileSync("templates/main.html");

teamArray = eval('`' + mainHTML + '`');

fs.writeFile("output/team.html", teamArray, function(err) {

    if (err) {
        return console.log(err);
    }

    console.log("Success!");

});
}

start();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// DONE -- Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// DONE -- HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// DONE -- HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```