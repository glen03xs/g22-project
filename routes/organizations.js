const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Organization = require('../models/Organization');

// @route 	GET api/organization
// @desc 		Get all organization information
// @access 	Private
router.get('/', auth, async (req, res) => {
	try {
		const organization = await Organization.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(organization);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route 	POST api/organization
// @desc 		Add new organization
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
			employeeNo,
			name,
			position,
			email,
			contactNumber,
			address,
			gender,
			civilStatus,
			dateOfBirth,
			placeOfBirth,

		} = req.body;

		try {
			const newOrganization = new Organization({
				employeeNo,
				name,
				position,
				email,
				contactNumber,
				address,
				gender,
				civilStatus,
				dateOfBirth,
				placeOfBirth,

				user: req.user.id,
			});

			const organization = await newOrganization.save();

			res.json(organization);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route 	DELETE api/organization/:id
// @desc 		Delete organization
// @access 	Private
router.delete('/:id', (req, res) => {
	res.send('Delete organization');
});

module.exports = router;
