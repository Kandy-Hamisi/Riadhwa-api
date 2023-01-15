const router = require('express').Router();
const Teacher = require('../models/Teachers');


// add teacher

router.post('/add', async (req, res) => {
    const newTeacher = new Teacher(req.body);

    try {
        const savedTeacher = await newTeacher.save();
        res.status(201).json(savedTeacher);
    } catch(err) {
        res.status(500).json(err)
    }
});


// update teacher details

router.put("/update/:id", async (req, res) => {
    
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true}
        );
        res.status(200).json(updatedTeacher);
    } catch(err) {
        res.status(500).json(err);
    }
});

// delete teacher

router.put('/delete/:id', async (req, res) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id);
        res.status(200).json("Teacher has been deleted successfully");
    } catch (err) {
        res.status(500).json(err);
    }
});


// get a single teacher

router.get("/find/:id", async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        const resultTeacher = teacher._doc;
        res.status(200).json(resultTeacher);
    } catch(err) {
        res.status(500).json(err);
    }
});


// get All users

router.get("/find", async (req, res) => {
    const query = req.query.new;

    try {
        const teachers = query
            ? await Teacher.find().sort({_id: -1}).limit(1)
            : await Teacher.find();
        res.status(200).json(teachers);
    } catch(err) {
        res.status(500).json(err);
    }
});



module.exports = router;