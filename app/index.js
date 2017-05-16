/**
 * Created by sbardian on 5/16/17.
 */

import react from 'react';

class openTrivia extends react.Component {
  constructor (props) {
    super(props);
    this.state = {
      test: 'test',
    }
  }

  componentWillReceiveProps (newProps) {

  }

  componentWillUnmount () {

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

export default openTrivia;