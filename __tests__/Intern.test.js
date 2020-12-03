const Intern = require('../lib/Intern');

test('create Intern object', () => {
  const intern = new Intern('Joe', 654, 'joe@joe.com', 'Stanford');

  expect(intern.name).toBe('Joe');
  expect(intern.id).toEqual(654);
  expect(intern.email).toBe('joe@joe.com');
  expect(intern.school).toBe('Stanford');
});

test('get Intern school', () => {
  const intern = new Intern('Joe', 654, 'joe@joe.com', 'Stanford');

  expect(intern.getSchool()).toBe('Stanford');
});

test('get Intern role', () => {
  const intern = new Intern('Joe', 654, 'joe@joe.com', 'Stanford');

  expect(intern.getRole()).toBe('Intern');
});