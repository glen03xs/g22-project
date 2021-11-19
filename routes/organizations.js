const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Organization = require('../models/Organization');

// @route 	GET api/organizations
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

// @route 	POST api/organizations
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
			const newOrganization = new Organization({
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

			const organization = await newOrganization.save();

			res.json(organization);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route     PUT api/organizations/:id
// @desc      Update organization
// @access    Private
router.put('/:id', auth, async (req, res) => {

  		const {
			firstName,
			lastName,
			cityTown,
			country,
			industry,
			yearsOfOperation,
			linkedinPage,
			linkToWebsite,
			organizationName,
			organizationType,
			about
			
		} = req.body;

  // Build organization object
  const organizationFields = {};

  if (firstName) organizationFields.firstName = firstName;
  if (lastName) organizationFields.lastName = lastName;
  if (cityTown) organizationFields.cityTown = cityTown;
  if (country) organizationFields.country = country;
  if (industry) organizationFields.industry = industry;
  if (yearsOfOperation) organizationFields.yearsOfOperation = yearsOfOperation;
  if (linkedinPage) organizationFields.linkedinPage = linkedinPage;
  if (linkToWebsite) organizationFields.linkToWebsite = linkToWebsite;
  if (organizationName) organizationFields.organizationName = organizationName;
  if (organizationType) organizationFields.organizationType = organizationType;
  if (about) organizationFields.about = about;

  try {
    let organization = await Organization.findById(req.params.id);

    if (!organization) return res.status(404).json({ msg: 'Organization not found' });

    // Make sure user owns organization
    if (organization.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    organization = await Organization.findByIdAndUpdate(
      req.params.id,
      { $set: organizationFields },
      { new: true }
    );

    res.json(organization);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route 	DELETE api/organizations/:id
// @desc 		Delete organization
// @access 	Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let organization = await Organization.findById(req.params.id);

    if (!organization) return res.status(404).json({ msg: 'Organization not found' });

    // Make sure user owns organization
    if (organization.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Organization removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
