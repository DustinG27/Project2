module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    text: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });
  return Transaction;
};
