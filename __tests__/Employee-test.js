const Employee = require('../lib/Employee');

test('creates an employee onject', () => {
    const employee = new Employee('Ryan', 25, 'jay245.segarra@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('employee name', () => {

const employee =  new Employee('Ryan', 25, 'jay245.segarra@gmail.com');

expect(employee.getName()).toEqual(expect.any(String));
});

test('id employee', () => {
    const employee = new Employee('Ryan', 25, 'jay245.segarra@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('email employee', () => {
    const employee =  new Employee('Ryan', 25, 'jay245.segarra@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('test role', () => {
    const employee = new Employee('Ryan', 25, 'jay245.segarra@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})


