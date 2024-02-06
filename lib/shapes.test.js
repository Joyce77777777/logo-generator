const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes unit tests', () => {
    describe('Triangle tests', () => {
        test('Default color', () => {
            const shape = new Triangle();
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
        });

        test('Custom color - blue', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

        test('getTextCoordinates', () => {
            const shape = new Triangle();
            expect(shape.getTextCoordinates()).toEqual({ x: "50%", y: "60%" });
        });
    });

    describe('Circle tests', () => {
        test('Default color', () => {
            const shape = new Circle();
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />');
        });

        test('Custom color - red', () => {
            const shape = new Circle();
            shape.setColor('red');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });

        test('getTextCoordinates', () => {
            const shape = new Circle();
            expect(shape.getTextCoordinates()).toEqual({ x: "50%", y: "50%" });
        });
    });

    describe('Square tests', () => {
        test('Default color', () => {
            const shape = new Square();
            expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="black" />');
        });

        test('Custom color - green', () => {
            const shape = new Square();
            shape.setColor('green');
            expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
        });

        test('getTextCoordinates', () => {
            const shape = new Square();
            expect(shape.getTextCoordinates()).toEqual({ x: "50%", y: "63%" });
        });
    });
});
