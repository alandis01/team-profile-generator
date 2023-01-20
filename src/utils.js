const fs = require("fs");
const inquirer = require('inquirer');

const pageTemplate = require('./page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const {
    managerQuestions,
    internQuestions,
    engineerQuestions,
} = require("./questions");

const prompt = inquirer.createPromptModule();
const teamProfile = [];

const selectManager = ({ name, id, email, phone }) => {
    const manager = new Manager(name, id, email, phone);
    teamProfile.push(manager);
}

const memberType = () => {
    return prompt ({
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: [ 'Engineer', 'Intern', 'Manager', ],
        name: 'type'
    })
};

const getMemberData = async ({ type }) => {
switch(type) {
    case 'Manager': {
        const response = await prompt(managerQuestions);
        const { name, id, email, phone } = response;
        const manager = new Manager(name, id, email, phone);
        teamProfile.push(manager);
        break;
    }
    case 'Intern': {
        const response = await prompt(internQuestions);
        const { name, id, email, school } = response;
        const intern = new Intern(name, id, email, school);
        teamProfile.push(intern);
        break;
    }
    case 'Engineer': {
        const response = await prompt(engineerQuestions);
        const { name, id, email, gitHub } = response;
        const engineer = new Engineer(name, id, email, gitHub);
        teamProfile.push(engineer);
        break;
    }
}
};

const confirmAdditionalMembers = () => {
    return prompt({
        message: 'Add additional team members?',
        type: 'question',
        name: 'additionalMembers',
    })
};

const addAdditionalMembers = ({ addMore }) => {
    if (addMore) {
        memberType()
        .then(getMemberData)
        .then(confirmAdditionalMembers)
        .then(addAdditionalMembers);
    } else {
        const template = pageTemplate(teamProfile);
        fs.writeFileSync('./dist/team.html', template);
        process.exit(0);
    }
};

module.exports = { selectManager, confirmAdditionalMembers, addAdditionalMembers };