const Employee = require("../lib/Employee");

describe("Employee", () => {
  it('should have a name', () => {
    const employee = new Employee('Example', 1, 'example@placeholder.com');
    expect(employee.name).toEqual('GExample');
  });
  it ('should have an id', () => {
    const employee = new Employee('Example', 1, 'example@placeholder.com');
    expect(employee.id).toEqual(1);
  })
  it ('should have an email', () => {
    const employee = new Employee('Example', 1, 'example@placeholder.com');
    expect(employee.email).toEqual('example@example.com');
  })
  it ('should have a role', () => {
    const employee = new Employee('Example', 1, 'example@placeholder.com');
    expect(employee.getRole()).toEqual('Employee');
  })
});
