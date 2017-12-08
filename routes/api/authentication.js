const express = require('express');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

// POST to /register

router.post('/register', (req, res) => {
    // create a user object to save, using values from incoming json
    const newUser = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    // Save via passport's "register" method, the user

    User.register(newUser, req.body.password, (err, user) => {
        // if there is a problem, send back to json object with error
        if(err){
            return res.send(JSON.stringify({error: err}));
        }

        //otherwise, for now, send back a json object with the new user's info
        return res.send(JSON.stringify(user));
    });
});

module.exports = router;