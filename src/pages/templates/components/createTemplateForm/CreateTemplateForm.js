import React, { useState, useMemo } from "react";
import _noop from "lodash/noop";
import PropTypes from "prop-types";
import "quill-mention";

import ReactQuill from "react-quill";

// Components
import Button, { BUTTON_TYPES } from "../../../../components/button";
import Drawer from "../../../../components/drawer";
import { createModules } from "./helpers/template.editor";
import { FORMATS } from "./constants/template.editor";

// Styles
import styles from "./createTemplateForm.module.scss";

function CreateTemplateForm({ visible, onClose, onSaveTemplate }) {
  const [templateContent, setTemplateContent] = useState();
  const [templateName, setTemplateName] = useState();

  const handleSaveTemplate = () => {
    onSaveTemplate({
      name: templateName,
      text: templateContent,
    });
  };

  const handleTemplateContentChange = (updatedTemplateContent) => {
    setTemplateContent(updatedTemplateContent);
  };

  const handleNameChange = (e) => {
    setTemplateName(e.target.value);
  };

  const modules = useMemo(() => createModules(), []);
  return (
    <Drawer visible={visible} onClose={onClose} width="100vw" destroyOnClose>
      <div className={styles.templateName}>
        Template Name:{" "}
        <input onChange={handleNameChange} value={templateName} />
      </div>
      <ReactQuill
        value={templateContent}
        onChange={handleTemplateContentChange}
        modules={modules}
        formats={FORMATS}
      
      />
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
          onClick={handleSaveTemplate}
        >
          Save
        </Button>
      </div>
    </Drawer>
  );
}

CreateTemplateForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onSaveTemplate: PropTypes.func,
};

CreateTemplateForm.defaultProps = {
  visible: false,
  onClose: _noop,
  onSaveTemplate: _noop,
};

export default CreateTemplateForm;
