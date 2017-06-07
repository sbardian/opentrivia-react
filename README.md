# opentrivia-react
React component for openTriviaAPI

[![Build Status](https://travis-ci.org/sbardian/opentrivia-react.svg?branch=dev)](https://travis-ci.org/sbardian/opentrivia-react) [![Coverage Status](https://coveralls.io/repos/github/sbardian/opentrivia-react/badge.svg?branch=dev)](https://coveralls.io/github/sbardian/opentrivia-react?branch=dev)

## Description
This react component makes use of [OpenTriviaAPI wrapper](https://github.com/sbardian/openTriviaAPI "OpenTriviaAPI wrapper") to query [OpenTrivia API](https://www.opentdb.com "Open Trivia API").

[Demo](https://sbardian.github.io/opentrivia-react/ "Demo")

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
Please see [OpenTriviaAPI wrapper](https://github.com/sbardian/openTriviaAPI "OpenTriviaAPI wrapper") for specifics on props and their options.
```
<OpenTrivia
    amount={10}
    getToken={true}
    category={18}
    difficulty={'easy'}
    type={'multiple'}
    encode={'url3986'}
    click={this.clickHanlder}
    />
```
## Answer click handler
```
import React, { Component } from 'react';
import './App.css';
import OpenTrivia from 'opentrivia-react'
    
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }
    
  answerSelectedClick(i, ans) {
    // Update the dom to show selected answer
    let answer;
    document.querySelectorAll('.otAnswer').forEach((el) => {
      el.style.backgroundColor = 'transparent';
      el.style.color = '#666';
    })
    answer = document.getElementById("ot-answer-" + i);
    answer.style.backgroundColor = '#CCD9E3';
    answer.style.color = 'white';
        
    console.log('Selected Answer = ', ans);
  }
    
  answerButtonClick (correctAns) {
    console.log('Clicked answer button, correct answer =', correctAns);
  }
    
  render() {
    return (
      <div className="App">
        <OpenTrivia
            amount={45}
            getToken={true}
            answerSelectedClicked={this.answerSelectedClick}
            answerButtonClicked={this.answerButtonClick}
        />
      </div>
    );
  }
}

export default App;
```