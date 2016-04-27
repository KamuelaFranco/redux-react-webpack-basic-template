// A very badly contrived example of a sub-reducer

const { GO_FORWARD, GO_BACKWARD } = require('../actions');

function firstSubReducer(state = 0, action) {
  switch (action.type) {
    case GO_FORWARD:
      return state + action.steps;
    case GO_BACKWARD:
      return state - action.steps;
    default:
      return state;
  }
}

module.exports = firstSubReducer;
