const Ball = require('./ball');

class BallFactory {
    create(name) {
        return new Ball(name);
    }
}

module.exports = BallFactory;