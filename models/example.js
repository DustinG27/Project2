module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "Null"
    },
    catagory: {
      type: DataTypes.STRING,
      defaultVaule: "General"
    },
    amount: {
      type: DataTypes.INTEGER
    },
    total: {
      type: DataTypes.INTEGER
    }
  });
  return Transaction;
};
