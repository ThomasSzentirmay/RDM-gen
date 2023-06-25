// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter project description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter project installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter project usage info:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please enter test intructions:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please choose a project license:',
        name: 'license',
        choices: ['MIT license', 'Apache License 2.0', 'GNU v3.0', 'BSD 2-Clause Simplified License', 'Boost Software License 1.0', 'N/A']

    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email'
    }

    // Reffering to the answers users entered in each prompt
]).then((answers) => {
    const content = generateMarkdown(answers);
    createNewFile(answers.title, content);
});

// Creating file that writes content to markdown file
function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Your README file has been generated');
    });
};