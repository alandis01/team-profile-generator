const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('should have a GitHub', () => {
    const engineer = new Engineer('Guy', 1, 'fun@guy.com', 'funGuy');
    expect(engineer.getGitHub()).toEqual('funGuy');
  });
  it('should have a role of Engineer', () => {
    const engineer = new Engineer('Guy', 1, 'fun@guy.com', 'funGuy');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
