import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ViewField = ({value, label, wrapperClass}) => {
    return (
      <div className={`${wrapperClass} form-field`}>
        <label className="field-label">{label}</label>
        <label className="field-value">{value}</label>
      </div>
    );
};

ViewField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ViewField;
