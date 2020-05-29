if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  var Sequelize = require("sequelize");

  var sequelize = new Sequelize("budgetBuddy_db", "root", "Weezer#123", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}
module.exports = sequelize;
