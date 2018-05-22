const { assert } = require('chai');
const Factory = require('../lib/factory_method/factory');

describe("~~~~ Factory Method ~~~~", ()=>{
    it("should hire new employees and classify them as parttime or fulltime", ()=>{
        let employees = [];
        const factory = new Factory();

        employees.push(factory.createEmployee("Full Time"));
        employees.push(factory.createEmployee("Part Time"));

        employees.forEach(employee => {
            const expected = `I am a ${employee.type}, and I work ${employee.days} days`;
            const result = employee.says();
            assert.equal(expected, result);
        });
    });
})