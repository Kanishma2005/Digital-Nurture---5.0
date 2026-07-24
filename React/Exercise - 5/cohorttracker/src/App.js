import React from "react";
import "./App.css";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div className="container">
      <h1>Cohorts Details</h1>

      <div className="cards">
        <CohortDetails
          cohortName="INTADMDF10 - .NET FSD"
          startedOn="22-Feb-2022"
          status="scheduled"
          coach="Aathma"
          trainer="Jojo Jose"
        />

        <CohortDetails
          cohortName="ADM21JF014 - Java FSD"
          startedOn="10-Sep-2021"
          status="ongoing"
          coach="Apoorv"
          trainer="Elisa Smith"
        />

        <CohortDetails
          cohortName="CDBJF21025 - Java FSD"
          startedOn="24-Dec-2021"
          status="ongoing"
          coach="Aathma"
          trainer="John Doe"
        />
      </div>
    </div>
  );
}

export default App;