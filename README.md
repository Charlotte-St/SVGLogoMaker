# SVG Logo Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app takes user inputs to generate a logo in the SVG format. The app simplifies the process of creating a logo, allowing the user to generate one from the command line. The SVG file can be edited by the user by updating the code using their preferred code editor, and the format is supported by all major browsers. 

![SVG logo example](/examples/logo.svg)
More examples can be found in [lib/more](https://github.com/Charlotte-St/SVGLogoMaker/tree/main/lib/more). 

## Installation

This app requires the installation of Node.js, NPM, and Inquirer. Users wishing to run tests will also need to install Jest. Please see the credits section for links to those applications. 

To run this application, download this repository and run the index.js file using Node.js on the command line. 

## Usage

1. The user is prompted for text (max. 3 characters), text color, a shape, and a color for the shape of their logo. Colors may be entered as a hexadecimal color code or using the HTML color name. 
2. After finishing all prompts, the user's logo will be generated with the file name 'logo.svg' and stored in the examples folder of the repo. 

[Video Walkthrough]()

## Testing

Tests for the render functions for the Circle, Square, and Triangle objects are available in the shapes.test.js file. These tests can be run using Jest. 

## License

MIT

## Credits

[Node.js](https://nodejs.org/en)

[NPM](https://www.npmjs.com/)

[Inquirer.js](https://www.npmjs.com/package/inquirer)

[Jest](https://jestjs.io/)

[MDN SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

## Contributing

N/A

## Questions

My GitHub Profile: [Charlotte-St](https://github.com/Charlotte-ST)