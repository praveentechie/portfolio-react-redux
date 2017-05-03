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
  wrapperClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ViewField;
