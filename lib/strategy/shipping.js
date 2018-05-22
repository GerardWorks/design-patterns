class Shipping {
    constructor(company) {
        this.company = company;
    }
    strategy(_package) {
        return this.company.calculate(_package);
    }
}

module.exports = Shipping;