import React, { useState } from "react";
import "../styles/PersonnelSection.css"; // Import your custom CSS for styling

const PersonnelSection = () => {
  const [selectedEquipe, setSelectedEquipe] = useState("");
  const [selectedMatriculeRegleur1, setSelectedMatriculeRegleur1] =
    useState("");
  const [selectedMatriculeRegleur2, setSelectedMatriculeRegleur2] =
    useState("");
  const [selectedMatriculeControleur, setSelectedMatriculeControleur] =
    useState("");
  const [selectedMatriculeEmballerur, setSelectedMatriculeEmballerur] =
    useState("");

  const equipeOptions = ["Équipe 1", "Équipe 2", "Équipe 3"];
  const matriculeRegleurOptions = ["123", "456", "789"]; // Replace with your data
  const emballerurOptions = ["111", "222", "333"]; // Replace with your data

  return (
    <div className="personnel-section-container">
      <div className="form-header-container">
        <div className="dropdown-group">
          <label className="label">Équipe:</label>
          <select
            value={selectedEquipe}
            onChange={(e) => setSelectedEquipe(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Équipe</option>
            {equipeOptions.map((equipe, index) => (
              <option key={index} value={equipe}>
                {equipe}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown-group">
          <label className="label">Régleur 1:</label>
          <select
            value={selectedMatriculeRegleur1}
            onChange={(e) => setSelectedMatriculeRegleur1(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Régleur 1</option>
            {matriculeRegleurOptions.map((matricule, index) => (
              <option key={index} value={matricule}>
                {matricule}
              </option>
            ))}
          </select>
          <div className="display-field">
            {selectedMatriculeRegleur1 && "John Doe"}
          </div>
        </div>
        <div className="dropdown-group">
          <label className="label">Régleur 2:</label>
          <select
            value={selectedMatriculeRegleur2}
            onChange={(e) => setSelectedMatriculeRegleur2(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Régleur 2</option>
            {matriculeRegleurOptions.map((matricule, index) => (
              <option key={index} value={matricule}>
                {matricule}
              </option>
            ))}
          </select>
          <div className="display-field">
            {selectedMatriculeRegleur2 && "John Doe"}
          </div>
        </div>
        <div className="dropdown-group">
          <label className="label">Contrôleur:</label>
          <select
            value={selectedMatriculeControleur}
            onChange={(e) => setSelectedMatriculeControleur(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Contrôleur</option>
            {matriculeRegleurOptions.map((matricule, index) => (
              <option key={index} value={matricule}>
                {matricule}
              </option>
            ))}
          </select>
          <div className="display-field">
            {selectedMatriculeControleur && "John Doe"}
          </div>
        </div>
        <div className="dropdown-group">
          <label className="label">Emballerur:</label>
          <select
            value={selectedMatriculeEmballerur}
            onChange={(e) => setSelectedMatriculeEmballerur(e.target.value)}
            className="dropdown"
          >
            <option value="">Select Emballerur</option>
            {emballerurOptions.map((matricule, index) => (
              <option key={index} value={matricule}>
                {matricule}
              </option>
            ))}
          </select>
          <div className="display-field">
            {selectedMatriculeEmballerur && "Jane Doe"}
          </div>
        </div>
        {/* Repeat the above pattern for other dropdowns and display fields */}
      </div>
    </div>
  );
};

export default PersonnelSection;
