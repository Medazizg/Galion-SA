const db = require("../models");
const Machine = db.machines;

// Retrieve a  machine from the database.
exports.findAll = (req, res) => {
  const atelier = req.query.atelier;
  console.log({ atelier });
  Machine.findAll({
    where: { ...(atelier && { atelier }) },
    attributes: ["code", "description", "atelier"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving  machine .",
      });
    });
};

// Find a single machine with a code
exports.findOne = (req, res) => {
  const code = req.params.code; // Use req.query.code to access the query parameter

  Machine.findAll({
    where: { code: code },
    attributes: ["code", "description", "atelier"],
  })
    .then((data) => {
      if (data) {
        res.send(data[0]);
      } else {
        res.status(404).send({
          message: `Cannot find machine with code=${code}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving machine with code=" + code,
      });
    });
};
