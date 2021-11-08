const mongoose = require('mongoose');

const OrganizationSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	employeeNo: {
		type: Number,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	position: {
		type: String,
	},
	email: {
		type: String,
	},
	contactNumber: {
		type: String,
	},
	address: {
		type: String,
	},
	gender: {
		type: String,
	},
	civilStatus: {
		type: String,
	},
	dateOfBirth: {
		type: Date,
	},
	placeOfBirth: {
		type: Date,
	},
	dateHired: {
		type: Date,
	},
	sssNumber: {
		type: String,
	},
	philhealthNumber: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('organization', OrganizationSchema);
