class User {
    constructor(name) {
        this.name = name;
    }
    says() {
        return `Hey my name is ${this.name}`;
    }
}

module.exports = User;