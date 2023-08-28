module.exports = (app) => {
  const machines = require("../controllers/machine.controller.js");

  var router = require("express").Router();

  // Retrieve all ateliers
  router.get("/", machines.findAll);

  // Retrieve a atelier
  router.get("/:code", machines.findOne);

  app.use("/api/machines", router);
};
