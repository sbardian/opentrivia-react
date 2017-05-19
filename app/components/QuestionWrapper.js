/**
 * Created by sbardian on 5/18/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import styles from '../../styles/styles';

export default class QuestionWrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      isFlipped: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render () {
    // make use of react-native-flip-card
    let x = 1;
    return (
        <div style={styles.example}>
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div key="front" style={styles.card}>
              <h3>{this.props.question.category}</h3>
              <h3>{decodeURIComponent(this.props.question.question)}</h3>
              <ul>
                {
                  // TODO: Call to CHOICES passing correct and incorrect.
                  this.props.question.incorrect_answers.map((ans) => {
                  x++;
                  return (
                      <li key={x}><h4>{decodeURIComponent(ans)}</h4></li>
                  )
                })}
                <li key="0"><h4>{decodeURIComponent(this.props.question.correct_answer)}</h4></li>
              </ul>
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
  loading: PropTypes.bool,
  question: PropTypes.object,
}

QuestionWrapper.defaultProps = {
  // set value of default props
  loading: true,
  question: {},
};
