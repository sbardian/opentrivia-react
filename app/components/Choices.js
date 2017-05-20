/**
 * Created by sbardian on 5/18/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Choices extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      question: this.props.question,
      answers: [],
    }
  }

  shuffle(a) {
    let j, x, i;
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  componentWillMount () {
    let answers = [];
    this.state.question.incorrect_answers.map((ans) => {
      answers.push(ans);
    });
    answers.push(this.state.question.correct_answer);
    this.setState({
      answers: this.shuffle(answers),
    });
  }

  render () {
    let x = 0;
    return (
        <ul>
          {
            // TODO: Call to CHOICES passing correct and incorrect.
            this.state.answers.map((ans) => {
              x++;
              return (
                  <li key={x}><h4>{decodeURIComponent(ans)}</h4></li>
              )
            })
          }
        </ul>
    )
  }
}

Choices.propTypes = {
  question: PropTypes.object,
}

Choices.defaultProps = {
  question: {},
};