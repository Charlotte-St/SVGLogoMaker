//require shapes
const {Circle, Square, Triangle} = require('./shapes.js');

//Require Jest

//Circle tests


//Square tests

//Triangle tests
describe('Triangle rendering test', () => {
    describe('shape', () => {
        it('Should generate a triangle logo matching the values set on the shape object in the svg format', () => {
            const shape = new Triangle('123', '#FFF00', 'olivedrab', 'Triangle' );
            expect(shape.render()).toEqual('<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,0 0,200 200,200" fill="olivedrab"/><text x="95" y="135" font-size="60" text-anchor="middle" fill="#FFF00">123</text></svg>');
        })
    })
})
