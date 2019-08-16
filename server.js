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

module.exports = server;