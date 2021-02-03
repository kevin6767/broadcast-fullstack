const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// create our User model
class Team extends Model {}

// define table columns and configuration
Team.init(
	{
		// define an id column
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		team_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'team',
	}
)

module.exports = Team
