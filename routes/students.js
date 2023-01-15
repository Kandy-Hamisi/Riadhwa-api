const router = require("express").Router();
const Student = require("../models/Students");

// add Student

router.post('/add', async (req, res) => {
    const newStudent = new Student(req.body);

    try {
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;