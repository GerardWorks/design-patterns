const FullTime = require('./full_time');
const PartTime = require('./part_time');

class Factory {
    createEmployee(type) {
        let employee;
        if (type === 'Full Time') {
            employee = new FullTime();
        } else if (type === 'Part Time') {
            employee = new PartTime();
        }

        employee.type = type;
        employee.says = () => {
            return `I am a ${employee.type}, and I work ${employee.days} days`;
        }
        return employee;
    }
}

module.exports = Factory;