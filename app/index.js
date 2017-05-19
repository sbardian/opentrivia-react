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
          });
        });
  }

  render () {
    return this.state.loading === true
        ? <div><h1>Loading Question. . .</h1></div>
        : <div>
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