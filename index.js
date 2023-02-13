const fs = require('fs');
const inquirer = require('inquirer');

const pageTemplate = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const prompt = inquirer.createPromptModule();
const teamProfile = [];

const managerQuestions = [
    {
        message: 'What is the manager\'s name?',
        name: 'name',
    },
    {
        message: 'What is the manager\'s id?',
        name: 'id',
    },
    {
        message: 'What is the manager\'s email?',
        name: 'email',
    },
    {
        message: 'What is the manager\'s office number?',
        name: 'phone',
    },
];

const engineerQuestions = [
    {
        message: 'What is the engineer\'s name?',
        name: 'name',
    },
    {
        message: 'What is the engineer\'s id?',
        name: 'id',
    },
    {
        message: 'What is the engineer\'s email?',
        name: 'email',
    },
    {
        message: 'What is the engineer\'s GitHub name?',
        name: 'gitHub',
    },
];

const internQuestions = [
    {
        message: 'What is the intern\'s name?',
        name: 'name',
    },
    {
        message: 'What is the intern\'s id?',
        name: 'id',
    },
    {
        message: 'What is the intern\'s email?',
        name: 'email',
    },
    {
        message: 'Where does the intern go to school?',
        name: 'school',
    },
];

const selectManager = ({ name, id, email, phone }) => {
    console.log("manager")
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
        type: 'confirm',
        name: 'additionalMembers',
        default: false
    })
};

const addAdditionalMembers = ({additionalMembers}) => {

    if (additionalMembers) {
        memberType()
        .then(getMemberData)
        .then(confirmAdditionalMembers)
        .then(addAdditionalMembers);
    } else {
        const template = pageTemplate(teamProfile);
        fs.writeFileSync('./dist/team.html', template);
        console.log("You file has been create in the 'dist' folder")
        process.exit(0);
    }
};

    prompt(managerQuestions)
        .then(selectManager)
        .then(confirmAdditionalMembers)
        .then(addAdditionalMembers);
        