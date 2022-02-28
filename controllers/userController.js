const { User } = require('../model');
const { isEmail } = require('validator');

module.exports = {
    createUser: async (req, res) => {
        // const { username, email, thoughts, friends } = req.body;
        const { username, email } = req.body;
        if (!isEmail(email)) {
            return res.status(401).json({ error: 'Email must be a valid email'});
        }
        try {
            const newUser = await User.create({
                username,
                email,
                // thoughts,
                // friends,
            });
            res.json(newUser);
        } catch (e) {
            res.json(e);
        }
    },
};