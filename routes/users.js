const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all users
router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.json({message: err});
    }
});

//create user
router.post('/', async (req,res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        postalCode: req.body.postalCode,
        street: req.body.street,
        houseNumber: req.body.houseNumber
    });

    try {
        const savedUser = await user.save()
        res.json(savedUser);
    } catch(err) {
        res.json({message: err});
    }
});

//get user
router.get('/:postId', async (req,res) => {
    try {
        const user = await User.findById(req.params.postId);
        res.json(user);
    } catch {
        res.json({message: err});
    }
});

//delete user
router.delete('/:postId', async (req,res) => {
    try {
        const removedUser = await User.remove({_id: req.params.postId});
        res.json(removedUser);
    } catch {
        res.json({message: err});
    }
});

//update user
router.patch('/:postId', async (req,res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.postId}, 
            {$set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                postalCode: req.body.postalCode,
                street: req.body.street,
                houseNumber: req.body.houseNumber
            }}
        );
        res.json(updatedUser);
    } catch {
        res.json({message: err});
    }
});

module.exports = router;