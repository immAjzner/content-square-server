const express = require('express');
const router = express.Router();
const users = require('./users-mock');
const _ = require('lodash');

router.get('/name/:name', (req, res) => {
    const {name} = req.params;
    const names = _.compact(users.map(user => {
        if (user.name.first.includes(name) || user.name.last.includes(name)) {
            return `${user.name.first} ${user.name.last}`;
        }
    })).slice(0, 5);
    res.json(names);
});

router.get('/full/:name', (req, res) => {
    const {name} = req.params;
    const filteredUsers = users.filter(user => {
        return user.name.first.includes(name) || user.name.last.includes(name);
    });
    res.json(filteredUsers);
});

module.exports = router;