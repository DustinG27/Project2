var Bank = require("../models/index");

module.exports = function(app) {
  // Get all transactions
  app.get("/api/all", function(req, res) {
    Bank.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Gets specific transaction catagory
  app.get("/api/:bank", function(req, res) {
    if (req.params.bank) {
      Bank.findAll({
        where: {
          catagory: req.params.bank
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  // Posts transaction to db to be returned to user
  app.post("/api/new", function(req) {
    Bank.create({
      name: req.body.name,
      amount: req.body.amount,
      catagory: req.body.catagory
    });
  });

  // Delete transaction by id
  app.delete("/api/delete", function(req) {
    Bank.destroy({ where: { id: req.params.id } });
  });
};

/*
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
  */
