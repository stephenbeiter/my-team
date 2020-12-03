const Manager = require('../lib/Manager');

test('creates Manager object', () => {
  const manager = new Manager('Steve', 321, 'steve@steve.com', 5308754628);

  expect(manager.name).toBe('Steve');
  expect(manager.id).toEqual(321);
  expect(manager.email).toBe('steve@steve.com');
  expect(manager.officeNumber).toEqual(5308754628);
});

test('gets manager role', () => {
  const manager = new Manager('Steve', 321, 'steve@steve.com', 5308754628);

  expect(manager.getRole()).toBe('Manager');
})