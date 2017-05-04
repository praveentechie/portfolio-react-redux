import React, { Component, PropTypes }   from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      className,
      onClick,
      buttonLabel
    } = this.props;

    return (
      <button className={`btn btn-default ${className || ""}`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
