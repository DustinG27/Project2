var db = require("../models/example");

module.exports = function(app) {
  // Get all transactions
  app.get("/api/example", function(req, res) {
    db.Transaction.findAll({}).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  // Gets specific transaction catagory
  app.get("/api/example/catagory/:catagory", function(req, res) {
    db.Transaction.findAll({
      where: {
        catagory: req.params.catagory
      }
    }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  // Posts transaction to db to be returned to user
  app.post("/api/example", function(req, res) {
    db.Transaction.create({
      id: req.body.id,
      name: req.body.name,
      amount: req.body.amount,
      catagory: req.body.catagory,
      total: req.body.total
    }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  // Delete transaction by id
  app.delete("/api/example/:id", function(req, res) {
    db.Transaction.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Transaction.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
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
