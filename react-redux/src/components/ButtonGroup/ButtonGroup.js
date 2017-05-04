import React, { Component, PropTypes }   from 'react';

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      children,
      groupLabel
    } = this.props;

    return (
      <div className={`button-group-container ${className}`}>
        {
          groupLabel ?
            <label className="btn-title">{groupLabel}</label>
          : null
        }
        <div className="btn-group">
          {children}
        </div>
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  groupLabel: PropTypes.string,
  className: PropTypes.string
};
