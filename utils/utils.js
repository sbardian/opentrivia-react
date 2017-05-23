/**
 * Created by sbardian on 5/18/17.
 */

const openTriviaAPI = require('opentriviaapi');
let token = null;

const utils = {
  getToken() {
    return openTriviaAPI.getToken();
  },
  getQuestions(options) {
    return openTriviaAPI.getQuestions(options)
  }
};

module.exports = utils;