const express = require('express');
const Project = require('../models/Project');
const auth = require('../middlewares/auth');

const router = express.Router();

// Create a new project
router.post('/', auth, async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, userId: req.userId });
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all projects
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
