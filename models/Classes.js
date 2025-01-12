const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classesSchema = new Schema({
	className: String,
	classId: String,
	classStart: String,
	classEnd: String,
	classDays: String,
	classInstructor: String,
	classCapacity: Number,
	classLocation: String,
	classDescription: String,
});

const Classes = mongoose.model("Classes", classesSchema);

module.exports = Classes;
