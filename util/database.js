const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','9919',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;