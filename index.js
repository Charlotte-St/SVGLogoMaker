//require ./lib/shapes.js
const { shapes } = require('./lib/shapes');
//require inquirer
const inquirer = require('inquirer');
//require fs
const { writeFile } = require('fs/promises');
//Inquirer prompts
inquirer.prompt([
    {
        name: 'text',
        message: 'What should the text be on your image? (max. 3 characters)',
    },
    {
        name: 'textColor',
        message: 'What color should your text be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape should your logo be?',
        choices: ['Circle', 'Square', 'Star']
    },
    {
        name: 'shapeColor',
        message: 'What color should your logo shape be?'
    }
]).then(console.log('Complete'))
//Text max three characters
//Text color
//Shape (pick list)
//Shape color

//Generate .svg files as logo.svg

//Console log 'Generated logo.svg'