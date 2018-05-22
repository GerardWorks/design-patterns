class Doll {
    constructor(name) {
        this.name = name;
    }
    description() {
        return `This is a ${this.name}`;   
    }
    appearance(){
        return "Ballroom Dress";
    }
}

module.exports = Doll;