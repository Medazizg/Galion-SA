import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAteliers } from "../features/ateliers/atelierSlice";
import {
  fetchMachines,
  selectMachines,
} from "../features/machines/machineSlice";
import "../styles/FormHeader.css";

const FormHeader = () => {
  const [selectedAtelier, setSelectedAtelier] = useState("");
  const [selectedMachine, setSelectedMachine] = useState("");

  const ateliers = useSelector((state) => state.ateliers.ateliers);
  const machines = useSelector(selectMachines);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAteliers());
  }, [dispatch]);

  useEffect(() => {
    if (selectedAtelier) {
      dispatch(fetchMachines(selectedAtelier));
    }
  }, [selectedAtelier, dispatch]);

  const getCurrentDateFormatted = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="form-header-container">
      <div className="dropdown-group">
        <label className="label">Date:</label>
        <div className="date-display">{getCurrentDateFormatted()}</div>
      </div>
      <div className="dropdown-group">
        <label className="label">Dept:</label>
        <select
          value={selectedAtelier}
          onChange={(e) => setSelectedAtelier(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Dept</option>
          {ateliers &&
            ateliers.map((atelier) => (
              <option key={atelier.code} value={atelier.code}>
                {atelier.code}
              </option>
            ))}
        </select>
      </div>

      <div className="dropdown-group">
        <label className="label">Machine:</label>
        <select
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Machine</option>
          {machines.map((machine) => (
            <option key={machine.code} value={machine.code}>
              {machine.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormHeader;
