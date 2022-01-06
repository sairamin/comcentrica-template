import React, { useState } from "react";
import _noop from "lodash/noop";
import PropTypes from "prop-types";

// Components
import Drawer from "../../../../components/drawer";

function CreateDocumentTypeForm({ visible, onClose }) {
  return <Drawer visible={visible} onClose={onClose}></Drawer>;
}

CreateDocumentTypeForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

CreateDocumentTypeForm.defaultProps = {
  visible: false,
  onClose: _noop,
};

export default CreateDocumentTypeForm;
