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
    if (options.getToken && !token) {
      utils.getToken()
          .then((data) => {
            token = data.token;
            options.token = data.token;
          });
      return openTriviaAPI.getQuestions(options)
          .then((data) => {
            return data.results;
          });
      // TODO: deal with token needing reset.
    } else {
      options.token = token;
      return openTriviaAPI.getQuestions(options);
    }
  }
};

module.exports = utils;