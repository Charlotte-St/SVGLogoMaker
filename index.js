const { Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

var svgEl = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What should the text be on your image? (max. 3 characters)',
        validate: (input) => input.length <= 3
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
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should your logo shape be?'
    }
]).then(
    (answers) => {
        let chosenShape; 
        switch (answers.shape) {
        case 'Circle': chosenShape = new Circle(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        svgEl.push(chosenShape);
        break;
        case 'Square': chosenShape = new Square(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        svgEl.push(chosenShape);
        break;
        case 'Triangle': chosenShape = new Circle(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        svgEl.push(chosenShape);
        break;
    }
}
).then((res) => 
    console.log(svgEl)
)
//.then(console.log('Complete'))

//Generate .svg files as logo.svg

//Console log 'Generated logo.svg'