const { Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

var generatedLogo;

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What should the text be on your image? (max. 3 characters)',
        validate: (input) => input.length < 4
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
        let formattedTextColor = answers.textColor.replace(/\s/g, '');
        let formattedShapeColor = answers.shapeColor.replace(/\s/g, '');
        switch (answers.shape) {
        case 'Circle': chosenShape = new Circle(answers.text, formattedTextColor, formattedShapeColor, answers.shape);
        generatedLogo = chosenShape.render();
        break;
        case 'Square': chosenShape = new Square(answers.text, formattedTextColor, formattedShapeColor, answers.shape);
        generatedLogo = chosenShape.render();
        break;
        case 'Triangle': chosenShape = new Triangle(answers.text, formattedTextColor, formattedShapeColor, answers.shape);
        generatedLogo = chosenShape.render();
        break;
    }
}
).then((res) => {
    return writeFile(
    "./examples/logo.svg",
    generatedLogo
  );
}
)
.then((res) => console.log('Generated logo.svg'))
