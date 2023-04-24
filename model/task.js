const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    is_completed: Boolean
});

const Task = new mongoose.model("task", taskSchema);

module.exports = Task;