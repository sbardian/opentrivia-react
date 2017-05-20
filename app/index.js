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
      token: null,
      index: 0,
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
  }

  nextQuestion () {
    console.log('NEXT');
    let i = this.state.index;
    if (i < this.props.amount) {
      i++;
    }
    this.setState({
      index: i
    });
  }

  prevQuestion () {
    console.log('PREV');
    let i = this.state.index;
    if (i > 0) {
      i--;
    }
    this.setState({
      index: i
    });
  }

  componentWillMount () {
    const {
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
          this.setState({
            results,
            loading: false,
            token: results.token,
          });
        });
  }

  render () {
    return this.state.loading === true
        ? <div><h1>Loading Question. . .</h1></div>
        : <div>
          <div><button onClick={this.nextQuestion}>Next</button></div>
          <div><button onClick={this.prevQuestion}>Prev</button></div>
            <QuestionWrapper question={this.state.results[this.state.index]} loading={this.state.loading} />
          </div>
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