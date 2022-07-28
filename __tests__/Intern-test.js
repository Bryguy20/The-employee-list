const Intern = require('../lib/Intern');

test('create a new intern object', () => {
    const intern = new Intern('Ryan', 25, 'jay245.segarra@gmail.com', 'UCONN')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets school', () => {
    const intern = new Intern('Ryan', 25, 'jay245.segarra@gmail.com', 'UCONN')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets intern role', () => {
    const intern = new Intern('Ryan', 25, 'jay245.segarra@gmail.com', 'UCONN')

    expect(intern.getRole()).toEqual("Intern");
})