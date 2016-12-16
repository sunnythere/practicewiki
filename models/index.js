const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack1', {
	logging: false
});

const Page = db.define('page', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	urlTitle: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	status: {
		type: Sequelize.ENUM('open', 'closed'),
		defaultValue: 'open'
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
}, {
	getterMethods: {
		route: function() {
			return `/wiki/${this.urlTitle}`
		}
	},
	hooks: {
		beforeValidate: function(page) {
			page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
		}
	}
})

const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { isEmail: true }
	}
}, {})


Page.belongsTo(User, {as: 'author' });
//User.hasMany(Page);


module.exports = {
	Page: Page,
	User: User
}
