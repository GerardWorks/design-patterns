class Shipping {
    constructor(orderId){
        this.orderId = orderId;
    }
    request() {
        return `Your Order ID is ${orderId}`;
    }
    calculate(){
        return "$39.50";
    }
}

module.exports = Shipping;