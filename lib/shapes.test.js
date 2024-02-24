//require shapes
const {Circle, Square, Triangle} = require('./shapes.js');


//Circle test
describe('Circle rendering test', () => {
    describe('shape', () => {
        it('Should generate a circular logo matching the values set on the shape object in the svg format', () => {
            const shape = new Circle('AaA', 'blueviolet', '#48d1cc', 'Circle' );
            expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="#48d1cc" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blueviolet">AaA</text></svg> ');
        })
    })
})

//Square test
describe('Square rendering test', () => {
    describe('shape', () => {
        it('Should generate a square logo matching the values set on the shape object in the svg format', () => {
            const shape = new Square('A1$', 'white', '#000000', 'Square' );
            expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="200" fill="#000000" /><text x="80" y="125" font-size="60" text-anchor="middle" fill="white">A1$</text></svg>');
        })
    })
})


//Triangle test
describe('Triangle rendering test', () => {
    describe('shape', () => {
        it('Should generate a triangle logo matching the values set on the shape object in the svg format', () => {
            const shape = new Triangle('123', '#FFF00', 'olivedrab', 'Triangle' );
            expect(shape.render()).toEqual('<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,0 0,200 200,200" fill="olivedrab"/><text x="95" y="135" font-size="60" text-anchor="middle" fill="#FFF00">123</text></svg>');
        })
    })
})
