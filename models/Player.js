const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

// create our User model
class Player extends Model {
	// set up method to run on instance data (per user) to check password
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password)
	}
}

// define table columns and configuration
Player.init(
	{
		// define an id column
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// define a username column
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		team_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		bench_max: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		squat_max: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		powerclean_max: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		deadlift_max: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		forty_time: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		position: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		twitter: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// define an email column
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		// define a password column
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4],
			},
		},
	},
	{
		hooks: {
			// set up beforeCreate lifecycle "hook" functionality
			async beforeCreate(newPlayerData) {
				newPlayerData.password = await bcrypt.hash(newPlayerData.password, 10)
				return newUserData
			},
			// set up beforeUpdate lifecycle "hook" functionality
			async beforeUpdate(updatedPlayerData) {
				updatedPlayerData.password = await bcrypt.hash(
					updatedPlayerData.password,
					10
				)
				return updatedPlayerData
			},
		},

		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'player',
	}
)

module.exports = Player
