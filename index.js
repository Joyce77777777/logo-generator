import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 ? true : 'Text must be up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text:',
            // No validation added for color, assuming the user knows the correct format
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color for the shape:',
            // Similar to textColor, no validation for color format
        }
    ]);

    // Create an instance of the selected shape
    let shape;
    switch (answers.shape) {
        case 'circle':
            shape = new Circle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        case 'square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);

    // Prepare SVG content
    const textCoords = shape.getTextCoordinates();

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="${textCoords.x}" y="${textCoords.y}" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="40">
            ${answers.text}
        </text>
    </svg>`;

    // Write the SVG file
    fs.writeFile('./examples/logo.svg', svgContent, err => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });

}

main().catch(err => console.error(err));
