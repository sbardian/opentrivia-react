/**
 * Created by sbardian on 5/16/17.
 */

import { React } from 'react';

export default class openTrivia extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      test: 'test',
    }
  }

  componentWillReceiveProps (newProps) {
    // When component gets props
  }

  componentWillUnmount () {
    // When component mount
  }

  render () {
    return (
        <div>
          <div>This is a state ${this.state.test}</div>
          <div>This is a props ${this.props.test}</div>
        </div>
    )
  }
}

openTrivia.propTypes = {
  // set default props the component will expect
};

openTrivia.defaultProps = {
  // set value of default props
  test: 'test',
};