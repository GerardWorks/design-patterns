const { assert } = require('chai');
const User = require('../lib/decorator/user');
const DecoratedUser = require('../lib/decorator/decorator');

describe("~~~~ Decorator Pattern ~~~~", ()=>{
    it("should give more information about the person without instantiating the same object again", ()=>{
        const user = new User("Kelly");
        const userSaid = user.says();
        const expectedResponse = "Hey my name is Kelly";
        assert.equal(userSaid, expectedResponse);

        const decorated = new DecoratedUser(user, "Melbourne", "Victoria");
        const decoratedUserSaid = decorated.says();
        const expectedDecoratedResponse = "Hey my name is Kelly, I live in Melbourne, Victoria";
        assert.equal(decoratedUserSaid, expectedDecoratedResponse);
    })
})