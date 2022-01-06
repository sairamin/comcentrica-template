import React, { useState } from "react";

// Components
import Table from "../../components/table";
import Button from "../../components/button";
import CreatePatientForm from "./components/createPatientForm";
import PatientTemplates from "./components/patientTemplates";

// Constants
import PATIENTS from "./mockData/patients";
import COLUMNS from "./mockData/columns";

// Styles
import styles from "./patients.module.scss";

function Patients() {
  const [createPatientFormVisible, setCreatePatientFormVisibility] =
    useState(false);
  const [patientTemplatesVisible, setPatientTemplatesVisibility] =
    useState(false);
  const [selectedPatient, setSeletedPatient] = useState({})

  const handleOpenCreatePatientForm = () => {
    setCreatePatientFormVisibility(true);
  };

  const handleCloseCreatePatientForm = () => {
    setCreatePatientFormVisibility(false);
  };

  const handleOpenPatientTemplates = (record) => () => {
    console.log(record)
    setSeletedPatient(record)
    setPatientTemplatesVisibility(true)
  }

  const handleClosePatientTemplates = () => {
    setPatientTemplatesVisibility(false)
  }

  const columns = [
    ...COLUMNS,
    {
      title: "Action",
      key: "operation",
      render: (_, record) => <button onClick={handleOpenPatientTemplates(record)}>Print</button>,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.tableActions}>
        <Button onClick={handleOpenCreatePatientForm}>Add Patient</Button>
      </div>
      <Table
        data={PATIENTS}
        columns={columns}
      />
      <CreatePatientForm
        visible={createPatientFormVisible}
        onClose={handleCloseCreatePatientForm}
      />
      <PatientTemplates
        visible={patientTemplatesVisible}
        onClose={handleClosePatientTemplates}
        patient={selectedPatient}
      />
    </div>
  );
}

export default Patients;
