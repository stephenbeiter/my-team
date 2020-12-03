const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
  const engineer = new Engineer('Bob', 456, 'bob@bob.com', 'bobhub');

  expect(engineer.name).toBe('Bob');
  expect(engineer.id).toEqual(456);
  expect(engineer.email).toBe('bob@bob.com');
  expect(engineer.github).toBe('bobhub');
});

test('get Engineer github', () => {
  const engineer = new Engineer('Bob', 456, 'bob@bob.com', 'bobhub');

  expect(engineer.getGithub()).toBe('bobhub');
});

test('get Engineer role', () => {
  const engineer = new Engineer('Bob', 456, 'bob@bob.com', 'bobhub');

  expect(engineer.getRole()).toBe('Engineer');
})