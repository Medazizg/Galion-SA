import React, { useState } from "react";
import FormHeader from "./FormHeader";
import PersonnelSection from "./PersonnelSection";
import Grid from "./Grid";

const Form = () => {
  const [gridData] = useState([]);

  // Event handlers for form submission, deletion, etc.

  return (
    <div>
      <FormHeader />
      <PersonnelSection />
      <Grid data={gridData} />
      {/* Add buttons and event handlers */}
    </div>
  );
};

export default Form;
