import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { Select } from "antd";
import _map from "lodash/map";
import _find from "lodash/find";
import { useSelector, useDispatch } from "react-redux";

// Components
import Drawer from "../../../../components/drawer";
import Button, { BUTTON_TYPES } from "../../../../components/button";
import { parseTemplate } from './templateParser'

// Styles
import styles from "./patientTemplates.module.scss";

const { Option } = Select;

function PatientTemplates({ visible, patient, onClose }) {
  const templatesFromStore = useSelector(
    (state) => state.templates.items || []
  );

  const [selectedTemplate, setSelectedTemplate] = useState(
    templatesFromStore[0]
  );

  const [content, setEditorContent] = useState()

  const handlePrintTemplate = () => {
    window.print();
  };

  const handleSelectTemplate = (templateName) => {
    const template = _find(
      templatesFromStore,
      (template) => template.name === templateName
    );

    setSelectedTemplate(template);
  };

  useEffect(() => {
    const content = selectedTemplate?.content
    const parsedContent = parseTemplate(content, patient)
    setEditorContent(parsedContent)
  }, [selectedTemplate, patient])

  return (
    <Drawer visible={visible} onClose={onClose} width="50vw" destroyOnClose>
      <Select
        defaultValue={selectedTemplate?.name}
        style={{ width: 120 }}
        onChange={handleSelectTemplate}
      >
        {_map(templatesFromStore, (template) => {
          return <Option value={template.name}>{template.name}</Option>;
        })}
      </Select>
      <ReactQuill value={content} />
      <div className={styles.actions}>
        <Button
          type={BUTTON_TYPES.TERTIARY}
          className={styles.button}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          type={BUTTON_TYPES.PRIMARY}
          className={styles.button}
          onClick={handlePrintTemplate}
        >
          Print
        </Button>
      </div>
    </Drawer>
  );
}

export default PatientTemplates;
