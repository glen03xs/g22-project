const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Project = require('../models/Project');

// @route 	GET api/projects
// @desc 		Get all project information
// @access 	Private
router.get('/', auth, async (req, res) => {
	try {
		const project = await Project.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(project);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route 	POST api/projects
// @desc 		Add new project
// @access 	Private
router.post(
	'/',
	[auth, [check('name', 'Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			title,
			skills,
			projectType,
			estimatedDuration,
			details
			
		} = req.body;

		try {
			const newProject = new Project({
				title,
				skills,
				projectType,
				estimatedDuration,
				details,

				user: req.user.id
			});

			const project = await newProject.save();

			res.json(project);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route     PUT api/projects/:id
// @desc      Update project
// @access    Private
router.put('/:id', auth, async (req, res) => {

  		const {
			title,
			skills,
			projectType,
			estimatedDuration,
			details
			
		} = req.body;

  // Build project object
  const projectFields = {};

  if (title) projectFields.title = title;
  if (skills) projectFields.skills = skills;
  if (projectType) projectFields.projectType = projectType;
  if (estimatedDuration) projectFields.estimatedDuration = estimatedDuration;
  if (details) projectFields.details = details;

  try {
    let project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: 'Project not found' });

    // Make sure user owns project
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: projectFields },
      { new: true }
    );

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route 	DELETE api/projects/:id
// @desc 		Delete project
// @access 	Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: 'Project not found' });

    // Make sure user owns project
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
