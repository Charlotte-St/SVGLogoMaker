//Shape class - take in shape color, text, and text color. Pass those down to children

class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

//Circle class
//render method
class Circle extends Shape{
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor);
        this.shape = shape;
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg> `
    };
};

//const circle1 = new Circle('abc','blue','yellow','Circle');

//console.log(circle1);

//var circle1Result = circle1.render();

//console.log(circle1Result);

//Square class
class Square extends Shape{
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor);
        this.shape = shape;
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}" /><text x="80" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg> `
    };
}

//render method

//Triangle class
class Triangle extends Shape{
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor);
        this.shape = shape;
    };
    render() {
        return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,0 0,200 200,200" fill="${this.shapeColor}"/><text x="95" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    };
}
//render method

module.exports = {Circle, Square, Triangle}