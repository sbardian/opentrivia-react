/**
 * Created by sbardian on 5/16/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import utils from '../utils/utils';
import QuestionWrapper from './components/QuestionWrapper';

export default class OpenTrivia extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      results: [{}],
      index: 0,
    }
  }

  nextQuestion () {
    this.setState({
      index: this.state.index++
    })
  }

  prevQuestion () {
    this.setState({
      index: this.state.index--
    })
  }

  componentWillMount () {
    const {
      loading,
      amount,
      category,
      difficulty,
      type,
      encode,
      getToken
    } = this.props;
    const options = {
      amount: amount,
      category: category,
      difficulty: difficulty,
      type: type,
      encode: encode,
      getToken: getToken,
    }
    utils.getQuestions(options)
        .then((results) => {
          console.log('index results ', results);
          this.setState({ results });
        });
  }

  render () {
    // TODO: foreach question, if multi or bool call multi wrapper or bool question
    return (
        <div>
          <QuestionWrapper results={this.state.results} index={this.state.index} />
        </div>
    )
  }
}

OpenTrivia.propTypes = {
  // set default props the component will expect
  loading: PropTypes.bool,
  amount: PropTypes.number,
  category: PropTypes.number,
  difficulty: PropTypes.string,
  type: PropTypes.string,
  encode: PropTypes.string,
  getToken: PropTypes.bool,
};

OpenTrivia.defaultProps = {
  // set value of default props
  loading: true,
  results: [{}],
};