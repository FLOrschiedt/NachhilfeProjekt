const express = require('express');
const router = express.Router();
const Timeslot = require('../models/Timeslot');

//get all timeslots
router.get('/', async (req,res) => {
    try {
        const timeslots = await Timeslot.find();
        res.json(timeslots);
    } catch(err) {
        res.json({message: err});
    }
});

//create timeslot
router.post('/', async (req,res) => {
    const timeslot = new Timeslot({
        subject: req.body.subject,
        location: req.body.location,
        date: req.body.date,
        teacher: req.body.teacher,
        student: req.body.student
    });

    try {
        const savedTimeslot = await timeslot.save()
        res.json(savedTimeslot);
    } catch(err) {
        res.json({message: err});
    }
});

//get timeslot
router.get('/:postId', async (req,res) => {
    try {
        const timeslot = await Timeslot.findById(req.params.postId);
        res.json(timeslot);
    } catch {
        res.json({message: err});
    }
});

//delete timeslot
router.delete('/:postId', async (req,res) => {
    try {
        const removedTimeslot = await Timeslot.remove({_id: req.params.postId});
        res.json(removedTimeslot);
    } catch {
        res.json({message: err});
    }
});

//update user
router.patch('/:postId', async (req,res) => {
    try {
        const updatedTimeslot = await Timeslot.updateOne(
            {_id: req.params.postId}, 
            {$set: {
                subject: req.body.subject,
                location: req.body.location,
                date: req.body.date,
                teacher: req.body.teacher,
                student: req.body.student
            }}
        );
        res.json(updatedTimeslot);
    } catch {
        res.json({message: err});
    }
});

module.exports = router;