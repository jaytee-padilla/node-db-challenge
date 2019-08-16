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

// get all resources
server.get('/resources', async (req, res) => {
	try {
		const resources = await db('resources');

		res.status(200).json(resources);
	}
	catch(error) {
		res.status(500).json({message: 'Error retrieving resources from database'});
	}
});

// get all tasks
server.get('/tasks', async (req, res) => {
	try {
		const tasks = await db('tasks');

		res.status(200).json(tasks);
	}
	catch(error) {
		res.status(500).json({message: 'There was an error retrieving the tasks from database'});
	}
});


// POST
// add a project
server.post('/projects', async (req, res) => {
	const projectData = req.body;

	try {
		const [id] = await db('projects').insert(projectData);
		const project = await db('projects').where('project_id', id).first();

		res.status(201).json(project);
	}
	catch(error) {
		res.status(500).json({message: 'Error adding project to database'});
	}
});

// add a resource
server.post('/resources', async (req, res) => {
	const resourceData = req.body;

	try {
		const [id] = await db('resources').insert(resourceData);
		const resource = await db('resources').where('resource_id', id).first();

		res.status(201).json(resource);
	}
	catch(error) {
		res.status(500).json({message: 'Error adding resource to database'})
	}
});

//add a task
server.post('/tasks', async (req, res) => {
	const taskData = req.body;

	try{
		const [id] = await db('tasks').insert(taskData);
		const task = await db('tasks').where('task_id', id).first();

		res.status(201).json(task);
	}
	catch(error) {
		res.status(500).json({message: 'Error adding task to database'});
	}
});

module.exports = server;