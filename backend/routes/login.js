const router = require('express').Router();
const bcrypt = require('bcryptjs');
let Login = require('../models/login.model');

router.route('/register').post(function (req, res) {
	let register = new Login(req.body);
	register.save()
		.then(reg => {
			res.sendStatus(200);
		})
		.catch(err => {
			res.status(400).send("Failed to store to database");
		});
});

router.route('/login').post(function (req, res) {
	Login.findOne({user_name: req.body.user_name})
	.then(user => {
		console.log("User from login", user)
		if(!user) res.sendStatus(204);
		else {
			bcrypt.compare(req.body.password, user.password)
			.then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
		}
	})
});

router.route('/validateUsername').post(function (req, res) {
	Login.findOne({user_name: req.body.user_name})
	.then(user => user ? res.sendStatus(204) : res.sendStatus(200))
});

router.route('/allData').get(function (req, res) {
	Login.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = router;