/**
 * Created by sbardian on 5/16/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import BooleanQuestion from 'components/BooleanQuestion';
import MultipleQuestionWrapper from 'components/MultipleQuestionWrapper';
import MultipleQuestionChoice from 'components/MultipleQuestionChoice';

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