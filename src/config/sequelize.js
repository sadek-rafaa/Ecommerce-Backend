// const sequelize = require('sequelize'); 
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false, // set true to debug SQL
    }
    
);

(async() => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to MySQL (Sequelize)');
    } catch(error) {
        console.error('❌ Sequelize connection error:', error);
    }
})();

module.exports = sequelize;