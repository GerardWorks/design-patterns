class ShippingAdapter{
    constructor(shipping) {
        this.shipping = shipping;
    }
    ship(){
        return `Your order ${this.shipping.orderId} has been dispatched`;
    }
}

module.exports = ShippingAdapter;