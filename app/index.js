/**
 * Created by sbardian on 5/16/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

// TODO: most likely will split each of these off into their own component.

class MultipleQuestionChoice extends React.Component {
  render () {
    // TODO: foreach over choices returning group of <li>'s
    return (
        <li>

        </li>
    )
  }
}

class MultipleQuestionWrapper extends React.Component {
  render () {
    // TODO: take props and render cat / question and pass props.choices to MQC
    return (
      <div>

      </div>
    )
  }
}

class BooleanQuestion extends React.Component {
  render () {
    // TODO: take props and render true false question
    return (
        <li>

        </li>
    )
  }
}

export default class openTrivia extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  render () {
    // TODO: foreach question, if multi or bool call multi wrapper or bool question
    return (
        <div>

        </div>
    )
  }
}

openTrivia.propTypes = {
  // set default props the component will expect
  loading: PropTypes.bool
};

openTrivia.defaultProps = {
  // set value of default props
  loading: true,
};