const Doll = require('./doll');

class DollFactory {
    create(name) {
        return new Doll(name);
    }
}

module.exports = DollFactory;