/**
 * Created by sbardian on 5/16/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import openTriviaAPI from 'opentriviaapi';
import QuestionWrapper from './components/QuestionWrapper';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styles from '../styles/styles';
import logo from '../images/opentdb.png';

export default class OpenTrivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      results: [{}],
      token: null,
      index: 0,
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  // Moves forward to the next question
  nextQuestion() {
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
  prevQuestion() {
    console.log('PREV');
    let i = this.state.index;
    if (i > 0) {
      i--;
    }
    this.setState({
      index: i
    });
  }

  getToken() {
    if (this.props.getToken && !this.state.token) {
      return openTriviaAPI.getToken()
          .then(data => data.token);
    }
    return this.state.token;
  }

  componentWillMount() {
    this.getToken()
        .then((token) => {
          this.setState({token});
          return openTriviaAPI.getQuestions({token, ...this.props});
        })
        .then((data) => {
          this.setState({
            results: data.results,
            loading: false,
          });
        });
  }

  render() {
    return this.state.loading === true
        ? <div style={styles.mainContainer}><h1>Loading Questions. . .</h1></div>
        : <div style={styles.mainContainer}>
            <img src={logo} height={100} />
            <h4>Question: {(this.state.index + 1)} / {this.props.amount}</h4>
          <div style={styles.controlBtnContainer}>
            <button style={styles.controlBtn} onClick={this.prevQuestion}>Prev</button>
            <button style={styles.controlBtn} onClick={this.nextQuestion}>Next</button>
          </div>
            <CSSTransitionGroup style={styles.cardHolder}
                transitionName = "cardAnimate"
                transitionAppear = {true}
                transitionLeave = {true}
                transitionAppearTimeout={1000}
                transitionLeaveTimeout={1000}
            >
              <QuestionWrapper key={this.state.index} question={this.state.results[this.state.index]}/>
            </CSSTransitionGroup>
          </div>
  }
}

OpenTrivia.propTypes = {
  amount: PropTypes.number,
  category: PropTypes.number,
  difficulty: PropTypes.string,
  type: PropTypes.string,
  encode: PropTypes.string,
  getToken: PropTypes.bool,
};

OpenTrivia.defaultProps = {
  amount: 1,
  results: [{}],
};