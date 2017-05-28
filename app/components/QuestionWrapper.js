/**
 * Created by sbardian on 5/18/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import styles from '../../styles/styles';
import Choices from './Choices';

export default class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFlipped: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // Flips the card on click to reveal the answer
  handleClick (e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  htmlDecode (input) {
    let e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render () {
    return (
        <div style={styles.example}>
          {/* TODO: remove br's after testing */}
          <br/><br />
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div key="front" style={styles.card}>
              <h3>{this.props.question.category}</h3>
              <h3>{this.htmlDecode(this.props.question.question)}</h3>
              <Choices
                  correct_answer={this.props.question.correct_answer}
                  incorrect_answers={this.props.question.incorrect_answers} >
              </Choices>
              <button onClick={this.handleClick}>Answer</button>
            </div>

            <div key="back" style={styles.card}>
              <h3>Correct Answer:</h3>
              <h3>{this.props.question.correct_answer}</h3>
              <button onClick={this.handleClick}>Back</button>
            </div>
          </ReactCardFlip>
        </div>
    )
  }
}

QuestionWrapper.propTypes = {
  question: PropTypes.object,
}

QuestionWrapper.defaultProps = {
  question: {},
};
