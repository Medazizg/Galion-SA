module.exports = (sequelize, Sequelize) => {
  const Employe = sequelize.define("employes", {
    MATRICULE: {
      type: Sequelize.STRING(8), // Set the length to 8 characters
    },
    NOM: {
      type: Sequelize.STRING(30), // Set the length to 30 characters
    },
    PRENOM: {
      type: Sequelize.STRING(30), // Set the length to 30 characters
    },
    ATELIER: {
      type: Sequelize.STRING(8), // Set the length to 8 characters
    },
    FONCTION: {
      type: Sequelize.STRING(80), // Set the length to 80 characters
    },
  });

  return Employe;
};
