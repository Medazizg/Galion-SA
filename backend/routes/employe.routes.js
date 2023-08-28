module.exports = (app) => {
  const employes = require("../controllers/employe.controller.js"); // Updated import

  var router = require("express").Router();

  // Retrieve all employees
  router.get("/", employes.findAll);

  // Retrieve a single employee
  router.get("/:matricule", employes.findOne); // Updated route parameter name

  app.use("/api/employes", router); // Updated endpoint
};
