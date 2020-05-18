var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Weezer#123',
        database: 'budgetBuddy_db'
    })
};

connection.connect();
module.exports = connection;