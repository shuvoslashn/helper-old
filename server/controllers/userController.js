const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// register controller function
const registerController = (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({
                message: 'user already registered',
            });
        } else {
            const user = new User({
                name,
                email,
                password,
            });
            user.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({
                        message: 'Done',
                    });
                }
            });
        }
    });
};

const loginController = () => {};

module.exports = { loginController, registerController };
