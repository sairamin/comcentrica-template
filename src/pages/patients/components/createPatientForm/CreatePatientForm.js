import React from "react";
import _noop from "lodash/noop";
import PropTypes from "prop-types";

// Components
import Drawer from "../../../../components/drawer";

function CreatePatientForm({ visible, onClose }) {
  return <Drawer visible={visible} onClose={onClose} />;
}

CreatePatientForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

CreatePatientForm.defaultProps = {
  visible: false,
  onClose: _noop,
};

export default CreatePatientForm;
