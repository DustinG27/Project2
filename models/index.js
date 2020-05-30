// Pulls in sqlize package
var Sequelize = require("sequelize");
// reference connection to database
var sequelize = require("../config/connection");

// Creates Bank model
var Bank = sequelize.define("bank", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: "Null"
  },
  catagory: {
    type: Sequelize.STRING,
    defaultVaule: "General"
  },
  amount: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: true
});

// syncs with database
Bank.sync();

//export Bank
module.exports = Bank;


/*
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
*/