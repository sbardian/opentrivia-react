# opentrivia-react
React component for openTriviaAPI

[![Build Status](https://travis-ci.org/sbardian/opentrivia-react.svg?branch=master)](https://travis-ci.org/sbardian/opentrivia-react) [![Coverage Status](https://coveralls.io/repos/github/sbardian/opentrivia-react/badge.svg?branch=dev)](https://coveralls.io/github/sbardian/opentrivia-react?branch=dev)


## Install

```
npm i opentrivia-react -S
```

## Usage
```
import React, { Component } from 'react';
import OpenTrivia from 'opentrivia-react'

class App extends Component {
  render() {
    return (
        <OpenTrivia amount={45} getToken={true} />
    );
  }
}

export default App;
```

## Props
```
<OpenTrivia
    amount={10}
    getToken={true}
    category={18}
    difficulty={'easy'}
    type={'multiple'}
    encode={'url3986'}
    />
```

