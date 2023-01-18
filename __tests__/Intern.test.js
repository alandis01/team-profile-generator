const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('should have a school', () => {
    const intern = new Intern('Example', 1, 'example@placeholder.com', 'UNCC');
    expect(intern.getSchool()).toEqual('UNCC');
  });
  it('should have a role of Intern', () => {
    const intern = new Intern('Example', 1, 'example@placeholder.com', 'UNCC');
    expect(intern.getRole()).toEqual('Intern');
  });
});
