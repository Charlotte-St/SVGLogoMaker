const { shapes } = require('./lib/shapes');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');


inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What should the text be on your image? (max. 3 characters)',
    },
    {
        type: 'input',
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
        type: 'input',
        name: 'shapeColor',
        message: 'What color should your logo shape be?'
    }
]).then(
    (answers) => {switch (answers.shape) {
        case 'Circle': console.log('Circle');
        break;
        case 'Square': console.log('Square');
        break;
        case 'Star': console.log('Star');
        break;
    }
}
)
//.then(console.log('Complete'))

//Generate .svg files as logo.svg

//Console log 'Generated logo.svg'