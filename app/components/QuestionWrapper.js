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
    // TODO: pass click hanlder on answer button click...
    return (
          <div style={styles.cardStyle}>
            <ReactCardFlip isFlipped={this.state.isFlipped}>
              <div key="front" style={styles.cardFront}>
                <div style={styles.cardFrontTop}>
                  <h3>{this.props.question.category}</h3>
                  <h4>{this.htmlDecode(this.props.question.question)}</h4>
                </div>
                <Choices
                    correct_answer={this.props.question.correct_answer}
                    incorrect_answers={this.props.question.incorrect_answers}
                    click={this.props.click}>
                </Choices>
                <div style={styles.btnContainer}>
                  <button style={styles.frontBtn} onClick={this.handleClick}>Answer</button>
                </div>
              </div>

              <div key="back" style={styles.cardBack}>
                <div style={styles.cardBackTop}>
                  <h3>Correct Answer:</h3>
                </div>
                <h4>{this.props.question.correct_answer}</h4>
                <div style={styles.btnContainer}>
                  <button style={styles.backBtn} onClick={this.handleClick}>Back</button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
    )
  }
}

QuestionWrapper.propTypes = {
  question: PropTypes.object,
  click: PropTypes.func,
}

QuestionWrapper.defaultProps = {
  question: {},
  click: null,
};
