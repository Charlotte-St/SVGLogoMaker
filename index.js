const { Circle, Square, Triangle } = require('./lib/shapes');
const inquirer = require('inquirer');
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
        switch (answers.shape) {
        case 'Circle': chosenShape = new Circle(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        generatedLogo = chosenShape.render();
        break;
        case 'Square': chosenShape = new Square(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        generatedLogo = chosenShape.render();
        break;
        case 'Triangle': chosenShape = new Triangle(answers.text, answers.textColor, answers.shapeColor, answers.shape);
        generatedLogo = chosenShape.render();
        break;
    }
}
).then((res) => 
    console.log(generatedLogo)
)
.then((res) => console.log('Generated logo.svg'))

//Generate .svg files as logo.svg
