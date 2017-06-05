/**
 * Created by sbardian on 5/18/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';

export default class Choices extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      correct_answer: this.props.correct_answer,
      incorrect_answers: this.props.incorrect_answers,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  // Shuffles the answers array to displace the correct answer
  shuffle(a) {
    let j, x, i;
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  // Combines the correct and incorrect answers into one array
  createAnswers () {
    let answers = [];
    let i = 0;
    this.props.incorrect_answers.map((ans) => {
      //answers.push(ans);
      answers[i] = ans;
      i++;
    });
    answers.push(this.props.correct_answer);
    return answers = this.shuffle(answers);
  }

  htmlDecode (input) {
    let e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  clickHandler (ans) {
    this.props.click ?
        this.props.click(ans) :
        console.log('Answer selected = ', ans);
  }

  render () {
    let answers = this.createAnswers();
    return (
        <ul style={styles.cardList}>
          {
            // TODO: Call to CHOICES passing correct and incorrect.
            answers.map((ans, i) => {
              return (
                  <li style={styles.answers} className={"otAnswer"} id={"ot-answer-" + i} onClick={this.clickHandler.bind(this, i)} key={ans}>
                    <h4>{this.htmlDecode(ans)}</h4>
                  </li>
              )
            })
          }
        </ul>
    )
  }
}

Choices.propTypes = {
  correct_answer: PropTypes.string,
  incorrect_answers: PropTypes.array,
  click: PropTypes.func,
}

Choices.defaultProps = {
  correct_answer: '',
  incorrect_answers: [],
  click: null,
};