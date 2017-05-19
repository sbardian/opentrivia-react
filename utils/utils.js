/**
 * Created by sbardian on 5/18/17.
 */

const openTriviaAPI = require('opentriviaapi');
//import openTriviaAPI from 'opentriviaapi';

const utils = {
  getToken() {
    return openTriviaAPI.getToken();
  },
  getQuestions(options) {
    if (options.getToken) {
      utils.getToken()
          .then((data) => {
            options.token = data.token;
          });
      return openTriviaAPI.getQuestions(options)
          .then((data) => {
            return data.results;
          });
    }
  }
};

module.exports = utils;