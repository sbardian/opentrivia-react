/**
 * Created by sbardian on 5/16/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class openTrivia extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      statetest: 'test',
    }
  }

  render () {
    return (
        <div>
          <div>This is a state {this.state.statetest}</div>
          <div>This is a props {this.props.proptest}</div>
        </div>
    )
  }
}

openTrivia.propTypes = {
  // set default props the component will expect
  proptest: PropTypes.string
};

openTrivia.defaultProps = {
  // set value of default props
  proptest: 'test',
};