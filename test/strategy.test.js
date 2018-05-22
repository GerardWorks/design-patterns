const { assert } = require('chai');
const UPS = require('../lib/strategy/ups');
const USPS = require('../lib/strategy/usps');
const Fedex = require('../lib/strategy/fedex');
const Shipping = require('../lib/strategy/shipping');

describe("~~~~ Strategy Method ~~~~", () => {
    it("", () => {
        const _package = 'some package weight';
        const ups = new UPS();
        const usps = new USPS();
        const fedex = new Fedex();

        const strategyOne = new Shipping(ups);
        const strategyTwo = new Shipping(usps);
        const strategyThree = new Shipping(fedex);

        
        const upsExpected = strategyOne.strategy(_package);
        assert.equal(upsExpected, "price of UPS option");

        const uspsExpected = strategyTwo.strategy(_package);
        assert.equal(uspsExpected, "price of USPS option");

        const fedexExpected = strategyThree.strategy(_package);
        assert.equal(fedexExpected, "price of Fedex option");
    })
})