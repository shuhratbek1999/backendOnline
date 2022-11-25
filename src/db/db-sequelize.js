const { Sequelize } = require('sequelize');
const config = require('../startup/config');
const logging = config.node_env === 'production' ? false : console.log; 
const db_sequelize = new Sequelize(
    config.db_name, 
    config.db_user, 
    config.db_pass,
    {
        host:  '127.0.0.1',
        port: config.db_port,
        dialect: 'mysql',
        logging,  
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' 
    },
);
//  db_sequelize.sync({force: true});

module.exports = db_sequelize;