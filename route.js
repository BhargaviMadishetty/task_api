const express = require("express");
const Task = require("./model/task.js");
const { json } = require("body-parser");

const router = express.Router();

router.post("/tasks", async (req, res) => {
    const input = {
        title: req.body.title,
        is_completed: req.body.isCompleted
    }
    try {
        const data = await Task.create(input);
        //console.log(data._id);
        res.status(201).json({
            id: data._id
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

router.get("/tasks", async (req, res) => {
    try {
        const data = await Task.find();
        res.status(200).json({
            data
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});


router.get("/tasks/:id", async (req, res) => {
    try {
        const data = await Task.findOne({ _id: req.params.id });
        if (!data || data === null) {
            res.status(404).json({
                error: "There is no task at that id !"
            });
        } else {
            res.status(200).json({
                data
            });
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
});


router.delete("/tasks/:id", async (req, res) => {
    try {
        const data = await Task.deleteOne({ _id: req.params.id });
        res.status(204).json({
            status: "successful"
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
});


router.put("/tasks/:id", async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(404).json({
                error: "There is no task at that id"
            });
        } else {
            const input = {
                title: req.body.title,
                is_completed: req.body.isCompleted
            }
            const data = await Task.findByIdAndUpdate({ _id: id }, input);
            //console.log(req.body);
            res.status(200).json({
                status: "successful"
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});


module.exports = router;