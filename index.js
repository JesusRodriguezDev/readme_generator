// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');


// Prompts array
const readmePrompt = () => {
    return inquirer.prompt([
        {
          type: 'input',
          message: 'Enter project title =>',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Enter project description =>',
          name: 'description',
        },
        {
          type: 'input',
          message: 'Enter installation instructions =>',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'Enter usage information =>',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Enter names of any collaborators =>',
          name: 'collaborators',
        },
        {
          type: 'input',
          message: 'Enter tests used and testing instructions =>',
          name: 'tests',
        },
        {
          type: 'list',
          message: 'Enter licenses used =>',
          name: 'license',
          choices: ['MIT', 'Mozilla', 'Apache'],
        },
        {
            type: 'input',
            message: 'Enter your first and last name =>',
            name: 'fullname',
        },
        {
            type: 'input',
            message: 'Enter your github username =>',
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: 'Enter email address =>',
            name: 'email',
        }
      ])
    }

// Generating Readme from answered prompts
const generateReadme = ({  title, description, installation, usage, collaborators, tests, license, fullname, githubUsername, email}) =>
`# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Collaborators](#collaborators)
- [License](#license)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Tests
${tests}

## Collaborators
${collaborators}

## License
${license}

## Questions
${fullname}
Email : ${email} 
GitHub: https://github.com/${githubUsername}/
`

// Function that starts application
const init = () => {
    readmePrompt()
    .then((answers) => fs.writeFileSync('generated_README.md', generateReadme(answers)))
        .then(() => console.log('Successfully created README with name generated_README.md'))
        .catch((err) => console.error(err));
    };
    
    init();