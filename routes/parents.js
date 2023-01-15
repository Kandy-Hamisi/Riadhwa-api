const router = require("express").Router();
const Parent = require("../models/Parents");


// add parent

router.post('/add', async (req, res) => {
    const newParent = new Parent(req.body);

    try {
        const savedParent = await newParent.save();
        res.status(201).json(savedParent);
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router;