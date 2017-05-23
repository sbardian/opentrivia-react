/**
 * Created by sbardian on 5/18/17.
 */

const openTriviaAPI = require('opentriviaapi');

const utils = {
  getToken() {
    return openTriviaAPI.getToken();
  },
  getQuestions(options) {
    return openTriviaAPI.getQuestions(options)
  }
};

module.exports = utils;