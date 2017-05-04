import React, { Component, PropTypes }   from 'react';
import styles from './ContentSection.scss';

export default class TopSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${styles.contentSection} content-section`}>
        {this.props.children}
      </div>
    );
  }
}

TopSection.propTypes = {
  children: PropTypes.node
};
