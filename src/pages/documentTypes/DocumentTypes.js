import React, { useState } from "react";

// Components
import Table from "../../components/table";
import Button from "../../components/button";
import CreateDocumentTypeForm from "./components/createDocumentTypeForm";

// Styles
import styles from "./documentTypes.module.scss";

function DocumentTypes() {
  const [createDocumentTypeFormVisible, setCreateDocumentTypeFormVisibility] =
    useState(false);

  const handleOpenCreateDocumentTypeForm = () => {
    setCreateDocumentTypeFormVisibility(true);
  };

  const handleCloseCreateDocumentTypeForm = () => {
    setCreateDocumentTypeFormVisibility(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableActions}>
        <Button onClick={handleOpenCreateDocumentTypeForm}>Add Document Type</Button>
      </div>
      <Table />
      <CreateDocumentTypeForm
        visible={createDocumentTypeFormVisible}
        onClose={handleCloseCreateDocumentTypeForm}
      />
    </div>
  );
}

export default DocumentTypes;
