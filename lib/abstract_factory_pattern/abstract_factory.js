const BallFactory = require('./ball_factory');
const DollFactory = require('./doll_factory');

class AbstractFactory {
    constructor(factoryType) {
        if (factoryType === "doll"){
            return this.factory = new DollFactory();
        }else if(factoryType === "ball"){
            return this.factory = new BallFactory();
        }
    }
    create(toy){
        return this.factory.create(toy);
    }
}

module.exports = AbstractFactory;