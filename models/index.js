const Player = require('./Player')
const Team = require('./Team')

Player.belongsTo(Team)

module.exports = { Player, Team }
