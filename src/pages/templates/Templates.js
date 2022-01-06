import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Table from "../../components/table";
import Button from "../../components/button";
import CreateTemplateForm from "./components/createTemplateForm";
import { addTemplate } from "./redux/templateSlice";
import COLUMNS from "./constants/templates.columns";

// Styles
import styles from "./templates.module.scss";

function Templates() {
  const templatesFromStore = useSelector(
    (state) => state.templates.items || []
  );

  const dispatch = useDispatch();

  const [createTemplateFormVisible, setCreateTemplateFormVisibility] =
    useState(false);

  const handleOpenCreateTemplateForm = () => {
    setCreateTemplateFormVisibility(true);
  };

  const handleCloseCreateTemplateForm = () => {
    setCreateTemplateFormVisibility(false);
  };

  const handeSaveTemplate = (templateContent) => {
    dispatch(
      addTemplate(templateContent)
    );
    setCreateTemplateFormVisibility(false)
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableActions}>
        <Button onClick={handleOpenCreateTemplateForm}>Add Template</Button>
      </div>
      <Table data={templatesFromStore} columns={COLUMNS}/>
      <CreateTemplateForm
        visible={createTemplateFormVisible}
        onClose={handleCloseCreateTemplateForm}
        onSaveTemplate={handeSaveTemplate}
      />
    </div>
  );
}

export default Templates;
