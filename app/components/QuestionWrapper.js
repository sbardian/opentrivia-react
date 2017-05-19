/**
 * Created by sbardian on 5/18/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    }
  }

  render () {
    // TODO: take props and render cat / question and pass props.choices to Choices
    // make use of react-native-flip-card
    return (
        <div>
          <h1>{this.props.question.category}</h1>
          <h2>{decodeURI(this.props.question.question)}</h2>
          <div>Call to -Choices-</div>
        </div>
    )
  }
}

QuestionWrapper.propTypes = {
  loading: PropTypes.bool,
  question: PropTypes.object,
}

QuestionWrapper.defaultProps = {
  // set value of default props
  loading: true,
  question: {},
};
