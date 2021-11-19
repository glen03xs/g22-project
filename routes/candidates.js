const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Candidate = require('../models/Candidate');

// @route 	GET api/candidates
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

// @route 	POST api/candidates
// @desc 		Add new candidate
// @access 	Private
router.post(
	'/',
	[auth, [check('firstName', 'First Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			firstName,
			lastName,
			cityTown,
			country,
			professionalTitle,
			education,
			yearsOfExperience,
			linkedinProfile,
			linkToPortfolio,
			desiredRole,
			skills,
			about
			
		} = req.body;

		try {
			const newCandidate = new Candidate({
				firstName,
				lastName,
				cityTown,
				country,
				professionalTitle,
				education,
				yearsOfExperience,
				linkedinProfile,
				linkToPortfolio,
				desiredRole,
				skills,
				about,

				user: req.user.id
			});

			const candidate = await newCandidate.save();

			res.json(candidate);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route     PUT api/candidates/:id
// @desc      Update candidate
// @access    Private
router.put('/:id', auth, async (req, res) => {

  		const {
			firstName,
			lastName,
			cityTown,
			country,
			professionalTitle,
			education,
			yearsOfExperience,
			linkedinProfile,
			linkToPortfolio,
			desiredRole,
			skills,
			about
			
		} = req.body;

  // Build candidate object
  const candidateFields = {};

  if (firstName) candidateFields.firstName = firstName;
  if (lastName) candidateFields.lastName = lastName;
  if (cityTown) candidateFields.cityTown = cityTown;
  if (country) candidateFields.country = country;
  if (professionalTitle) candidateFields.professionalTitle = professionalTitle;
  if (education) candidateFields.education = education;
  if (yearsOfExperience) candidateFields.yearsOfExperience = yearsOfExperience;
  if (linkedinProfile) candidateFields.linkedinProfile = linkedinProfile;
  if (linkToPortfolio) candidateFields.linkToPortfolio = linkToPortfolio;
  if (desiredRole) candidateFields.desiredRole = desiredRole;
  if (skills) candidateFields.skills = skills;
  if (about) candidateFields.about = about;

  try {
    let candidate = await Candidate.findById(req.params.id);

    if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

    // Make sure user owns candidate
    if (candidate.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { $set: candidateFields },
      { new: true }
    );

    res.json(candidate);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route 	DELETE api/candidates/:id
// @desc 		Delete candidate
// @access 	Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let candidate = await Candidate.findById(req.params.id);

    if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

    // Make sure user owns candidate
    if (candidate.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Candidate removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
