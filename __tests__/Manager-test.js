const Manager = require('../lib/Manager');



test('creates a new manager object', () => {
    const manager = new Manager('Ryan', 25, 'jay245.segarra@gmail.com', 6);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
    const manager = new Manager('Ryan', 25, 'jay245.segarra@gmail.com', 6);

    expect(manager.getRole()).toEqual("Manager");
})