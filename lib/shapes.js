class Shape {
    constructor(color = 'black') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return '';
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
    getTextCoordinates() {
        return { x: "50%", y: "60%" }; 
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
    getTextCoordinates() {
        return { x: "50%", y: "50%" };
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
    getTextCoordinates() {
        return { x: "50%", y: "63%" }; 
    }
}

export { Triangle, Circle, Square };
