const mongoose = require('mongoose');

const OrganizationSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	cityTown: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	// timezone: {
	// 	type: String,
	// 	required: true,
	// },
	industry: {
		type: String,
	},
	yearsOfOperation: {
		type: String,
	},
	linkedinProfile: {
		type: String,
	},
	linkToPortfolio: {
		type: String,
	},
	organizationName: {
		type: String,
	},
	organizationType: {
		type: String,
	},
	about: {
		type: String,
	}
});

module.exports = mongoose.model('organization', OrganizationSchema);
