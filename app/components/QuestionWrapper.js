/**
 * Created by sbardian on 5/18/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      results: [{}],
      index: 0,
    }
  }

  render () {
    // TODO: take props and render cat / question and pass props.choices to Choices
    // make use of react-native-flip-card
    return (
        <div>
          <h1>{this.props.results[this.state.index].category}</h1>
          <h2>{decodeURI(this.props.results[this.state.index].question)}</h2>
          <div>Call to -Choices-</div>
        </div>
    )
  }
}

QuestionWrapper.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
  index: PropTypes.number,
}

QuestionWrapper.defaultProps = {
  // set value of default props
  loading: true,
  results: [{}],
  index: 0,
};
