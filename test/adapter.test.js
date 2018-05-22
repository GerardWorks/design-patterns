const { assert } = require('chai');
const Shipping = require('../lib/adapter/shipping');
const ShippingAdapter = require('../lib/adapter/shipping_adapter');

describe("~~~~  Adapter Patterns  ~~~~", () => {
    it("shipping doesnt have a ship method so we use an adapter to provide that method", () => {
        const orderId = "order123";
        
        let shipping = new Shipping(orderId);         // we wish shipping had a ship function, but it doesn't
        shipping = new ShippingAdapter(shipping);  // adapter implements ship

        const shipOrder = shipping.ship();
        const result = `Your order ${orderId} has been dispatched`;
        assert.equal(shipOrder, result);
    })
})