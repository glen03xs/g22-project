const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Candidate = require('../models/Candidate');

// @route 	GET api/candidate
// @desc 		Get all candidate information
// @access 	Private
router.get('/', auth, async (req, res) => {
	try {
		const candidate = await Candidate.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(candidate);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route 	POST api/candidate
// @desc 		Add new candidate
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
			const newCandidate = new Candidate({
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

			const candidate = await newCandidate.save();

			res.json(candidate);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route 	DELETE api/candidate/:id
// @desc 		Delete candidate
// @access 	Private
router.delete('/:id', (req, res) => {
	res.send('Delete candidate');
});

module.exports = router;
