const Employee = require('../lib/Employee');

test('creates Employee object', () => {
  const employee = new Employee('Dave', 123, 'dave@dave.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(123);
  expect(employee.email).toBe('dave@dave.com');
});

test('get employee name', () => {
  const employee = new Employee('Dave', 123, 'dave@dave.com');

  expect(employee.getName()).toBe('Dave');
});

test('get employee ID', () => {
  const employee = new Employee('Dave', 123, 'dave@dave.com');

  expect(employee.getId()).toEqual(123);
});

test('get employee email', () => {
  const employee = new Employee('Dave', 123, 'dave@dave.com');

  expect(employee.getEmail()).toBe('dave@dave.com');
});

test('get employee role', () => {
  const employee = new Employee('Dave', 123, 'dave@dave.com');

  expect(employee.getRole()).toBe('Employee');
});