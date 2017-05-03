import React, { Component }   from 'react';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {label, value, group} = this.props;
    return (
      <div className='radio-button form-group'>
        <input type="radio"
          name={`radio-button-${group}`}
          value={value}
          className="radio-component"
          onClick={this.props.onClick.bind(this, value)}
        />
        <label className='radio-inline'>{label || ''}</label>
      </div>
    );
  }
}
