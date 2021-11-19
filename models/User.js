const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	accountType: {
		type: String,
	},
	username: {
		type: String,
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

	organizationName: {
		type: String,
	},
	organizationType: {
		type: String,
	},

	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('user', UserSchema);
