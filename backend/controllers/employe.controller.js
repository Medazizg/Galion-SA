const db = require("../models");
const Employe = db.employes;

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
  console.log({ Employe });
  Employe.findAll({
    attributes: ["MATRICULE", "NOM", "PRENOM", "ATELIER", "FONCTION"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employees.",
      });
    });
};
// Find a single Employee with a matricule
exports.findOne = (req, res) => {
  const matricule = req.params.matricule;

  Employe.findAll({
    // Change findAll to findOne here
    where: { MATRICULE: matricule },
    attributes: ["MATRICULE", "NOM", "PRENOM", "ATELIER", "FONCTION"],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Employee with matricule=${matricule}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Employee with matricule=" + matricule,
      });
    });
};
