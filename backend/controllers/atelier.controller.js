const db = require("../models");
const Atelier = db.ateliers;

// Retrieve a  atelier from the database.
exports.findAll = (req, res) => {
  console.log({ Atelier });
  Atelier.findAll({ attributes: ["code", "description"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Ateliers.",
      });
    });
};

// Find a single Atelier with an id
exports.findOne = (req, res) => {
  const code = req.params.code;

  Atelier.findAll({
    where: { code: code },
    attributes: ["code", "description"],
  })
    .then((data) => {
      if (data) {
        res.send(data[0]);
      } else {
        res.status(404).send({
          message: `Cannot find Atelier with code=${code}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Atelier with code=" + code,
      });
    });
};
