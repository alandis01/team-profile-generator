const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('should have a GitHub', () => {
    const engineer = new Engineer('Example', 1, 'example@placeholder.com', 'examplePlaceholder');
    expect(engineer.getGitHub()).toEqual('examplePlaceholder');
  });
  it('should have a role of Engineer', () => {
    const engineer = new Engineer('Example', 1, 'example@placeholder.com', 'examplePlaceholder');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
