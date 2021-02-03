// Import the Sequelize constructor from the library
const Sequelize = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PW,
	{
		host: 'localhost',
		dialect: 'mysql',
		port: 3306,
	}
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)

module.exports = db
