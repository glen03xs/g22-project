const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	accountType: {
		type: String,
	},
	username: {
		type: String,
		// required: true,
		// unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	organizationName: {
		type: String,
	},
	organizationType: {
		type: String,
	},
	professionalTitle: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('user', UserSchema);
