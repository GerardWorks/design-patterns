class Ball {
    constructor(name) {
        this.name = name;
    }
    description() {                         
        return `This is a ${this.name}`;
    }
    material() {                         
        return "rough leather";
    }
}

module.exports = Ball;