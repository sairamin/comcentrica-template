import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Components
import Table from "../../components/table";
import Button from "../../components/button";
import CreateTemplateForm from "./components/createTemplateForm";
import { addTemplate } from "./redux/templateSlice";
import COLUMNS from "./constants/templates.columns";

// Styles
import styles from "./templates.module.scss";

function Templates() {
  useEffect(() => {
    axios.get('http://localhost:3000/templates').then((response) => {
      dispatch(addTemplate(response.data.results))
    }).catch((error) => {
      console.log(`Error fetchign templates: ${error}`)
    })
  }, [])

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
    axios
      .post("http://localhost:3000/templates", {
        id: uuidv4(),
        name: templateContent.name,
        text: templateContent.text,
      })
      .then(() => {
        dispatch(addTemplate([templateContent]));
      })
      .catch((error) => {
        console.log(`Error creating template: ${error}`);
      });

    setCreateTemplateFormVisibility(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableActions}>
        <Button onClick={handleOpenCreateTemplateForm}>Add Template</Button>
      </div>
      <Table data={templatesFromStore} columns={COLUMNS} />
      <CreateTemplateForm
        visible={createTemplateFormVisible}
        onClose={handleCloseCreateTemplateForm}
        onSaveTemplate={handeSaveTemplate}
      />
    </div>
  );
}

export default Templates;
