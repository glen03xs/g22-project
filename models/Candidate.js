const mongoose = require('mongoose');

const CandidateSchema = mongoose.Schema({
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
	professionalTitle: {
		type: String,
		required: true,
	},
	education: {
		type: String,
	},
	yearsOfExperience: {
		type: String,
		required: true,
	},
	linkedinProfile: {
		type: String,
	},
	linkToPortfolio: {
		type: String,
	},
	desiredRole: {
		type: String,
	},
	skills: {
		type: String,
	},
	about: {
		type: String,
	}

});

module.exports = mongoose.model('candidate', CandidateSchema);
