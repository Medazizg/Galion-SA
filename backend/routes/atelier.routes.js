module.exports = (app) => {
  const ateliers = require("../controllers/atelier.controller.js");

  var router = require("express").Router();

  // Retrieve all ateliers
  router.get("/", ateliers.findAll);

  // Retrieve a atelier
  router.get("/:code", ateliers.findOne);

  app.use("/api/ateliers", router);
};
