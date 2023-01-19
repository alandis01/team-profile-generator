const inquirer = rquire('inquirer');
const fs = require('fs');

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









};

    prompt(managerQuestions)
        .then(selectManager)