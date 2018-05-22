const { assert } = require('chai');
const AbstractFactory = require('../lib/abstract_factory_pattern/abstract_factory');

describe("~~~~  Abstract Factory Design Pattern  ~~~~", () => {
    it("should create a toy from an abstract factory", () => {
        const toyShop = [];
        const dollFactory = new AbstractFactory("doll");
        const ballFactory = new AbstractFactory("ball");
        toyShop.push(ballFactory.create("Football"));
        toyShop.push(dollFactory.create("Barbie"));

        // notice we can treat both ball and doll the same - because they both implement description
        toyShop.forEach( toy => {
            const expected = `This is a ${toy.name}`;
            const result = toy.description();
            assert.equal(expected, result);
        })

        // const ballMaterial = toyShop[0].appearance();
        // const dollAppearance = toyShop[1].material();
    })
})