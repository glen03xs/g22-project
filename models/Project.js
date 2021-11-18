const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	title: {
		type: String,
		required: true,
	},
	skills: {
		type: String,
		required: true,
	},
	projectType: {
		type: String,
		required: true,
	},
	estimatedDuration: {
		type: String,
		required: true,
	},
	details: {
		type: String,
		required: true,
	}

});

module.exports = mongoose.model('project', ProjectSchema);
