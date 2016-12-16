const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const path = require('path');

const models = require('./models');
//const User = require('./models');
const wikiRouter = require('./routes/wiki');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

//log it
app.use(function(req, res, next) {
	console.log(`path: ${req.path}
	             also, a unicorn: 🦄`);
	next();
});

app.use('/wiki', wikiRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.use(function(err, req, res, next) {
	console.error(err, typeof next);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message)
})

models.Page.sync({})
	.then(function() {
		return models.User.sync({})
	})
	.then(function() {
		app.listen(1122, function() {
			console.log("Server is listening on port 1122  🙉")
		});
	})
	.catch(console.error);



