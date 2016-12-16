const express = require('express');
const router = express.Router();

const models = require('../models');
const Page = models.Page;
const User = models.User;


router.get('/', function(req, res, next) {
	//res.render('addpage');
	Page.findAll()
		.then(function(pages) {
			res.send(pages)
		})
		.catch(next)
})

router.post('/', function(req, res, next) {
	console.log("reqbody: ", req.body)
	User.findOrCreate({
		where: {
			name: req.body.name,
			email: req.body.email
		}
	})
	.spread((user) => {
		console.log("user: ", user)
		return Page.create({
			title: req.body.title,
			content: req.body.content,
		})
		.then((newPage) => {
		console.log("here is the newPage: ", newPage)
			return newPage.setAuthor(user)
		})
		.then((newPage) => {
			res.status(201).send(newPage);
		})
		.catch(next);
		})
})

//router.get('/add', function(req, res, next) {
	//getting rid of this, as it just renders visual component?








module.exports = router;
