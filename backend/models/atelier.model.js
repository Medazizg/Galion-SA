module.exports = (sequelize, Sequelize) => {
  const Atelier = sequelize.define("ateliers", {
    code: {
      type: Sequelize.STRING(8), // Set the length to 8 characters
    },
    description: {
      type: Sequelize.STRING(30), // Set the length to 30 characters
    },
  });

  return Atelier;
};
