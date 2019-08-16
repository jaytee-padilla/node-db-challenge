const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config');

const server = express();
server.use(helmet());
server.use(express.json());

// check if API is running
server.get('/', (req, res) => {
	res.send(`<h1>API is running</h1>`);
});

// CRUD
// GET
// get all projects
server.get('/projects', async (req, res) => {
	try {
		const projects = await db('projects');
		res.status(200).json(projects);
	}
	catch(error) {
		res.status(500).json({message: 'error retrieving projects'});
	}
});


// POST
// add a project
server.post('/projects', async (req, res) => {
	const projectData = req.body;

	try {
		const [id] = await db('projects').insert(projectData);
		const project = await db('projects').where('project_id', id);

		res.status(201).json(project);
	}
	catch(error) {
		res.status(500).json({message: 'Error adding post to database'});
	}
});

module.exports = server;