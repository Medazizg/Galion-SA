module.exports = (sequelize, Sequelize) => {
  const Machine = sequelize.define("machines", {
    code: {
      type: Sequelize.STRING(8), // Set the length to 8 characters
    },
    description: {
      type: Sequelize.STRING(30), // Set the length to 30 characters
    },
    atelier: {
      type: Sequelize.STRING(8), // Set the length to 8 characters
    },
  });

  return Machine;
};
