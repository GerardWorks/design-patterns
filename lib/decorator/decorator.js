class DecoratedUser {
    constructor(user, city, state) {
        this.user = user;
        this.name = user.name;
        this.city = city;
        this.state = state;
    }
    says() {
        return `Hey my name is ${this.name}, I live in ${this.city}, ${this.state}`;
    }
}

module.exports = DecoratedUser;