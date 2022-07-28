const Engineer = require('../lib/engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('Ryan', 25, 'jay245.segarra@gmail.com', 'ryaman20');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const  engineer = new Engineer('Ryan', 25, 'jay245.segarra@gmail.com', 'ryaman20');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets engineer role', () => {
    const engineer = new Engineer ('Ryan', 25, 'jay245.segarra@gmail.com', 'ryaman20');

    expect(engineer.getRole()).toEqual("Engineer");
});