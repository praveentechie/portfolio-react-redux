import React, { Component, PropTypes }   from 'react';
import styles from './HeadSection.scss';

export default class HeadSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${styles.headSection} head-section`}>
        {this.props.children}
      </div>
    );
  }
}

HeadSection.propTypes = {
  children: PropTypes.node
};
