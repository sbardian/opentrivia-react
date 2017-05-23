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

  // Moves forward to the next question
  nextQuestion () {
    console.log('NEXT');
    let i = this.state.index;
    if (i < (this.props.amount - 1)) {
      i++;
    }
    this.setState({
      index: i
    });
  }

  // Moves backwards to the previous question
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
    if(options.getToken && !this.state.token) {
      utils.getToken()
          .then((data) => {
            this.setState({
              token: data.token,
            });
            options.token = data.token;
            utils.getQuestions(options)
                .then((data) => {
                  this.setState({
                    results: data.results,
                    loading: false,
                  });
                });
          });
    } else {
      utils.getQuestions(options)
          .then((data) => {
              this.setState({
                results: data.results,
                loading: false,
              });
            });
    }
  }

  render () {
    return this.state.loading === true
        ? <div><h1>Loading Question. . .</h1></div>
        : <div>
          <h4>{(this.state.index + 1)} / {this.props.amount}</h4>
          <div><button onClick={this.nextQuestion}>Next</button></div>
          <div><button onClick={this.prevQuestion}>Prev</button></div>
          <QuestionWrapper question={this.state.results[this.state.index]} />
          </div>
  }
}

OpenTrivia.propTypes = {
  loading: PropTypes.bool,
  amount: PropTypes.number,
  category: PropTypes.number,
  difficulty: PropTypes.string,
  type: PropTypes.string,
  encode: PropTypes.string,
  getToken: PropTypes.bool,
};

OpenTrivia.defaultProps = {
  loading: true,
  results: [{}],
};