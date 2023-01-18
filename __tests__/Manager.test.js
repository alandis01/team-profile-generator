const Manager = require("../lib/Manager");

describe("Manager", () => {
  it('should have an officeNumber', () => {
    const manager = new Manager('Example', 1, 'example@placeholder.com', 123);
    expect(manager.getOfficeNumber()).toEqual(123);
  });
  it('should have a role of Manager', () => {
    const manager = new Manager('Example', 1, 'example@placeholder.com', 123);
    expect(manager.getRole()).toEqual('Manager');
  });
});

