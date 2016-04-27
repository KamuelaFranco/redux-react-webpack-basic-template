const { combineReducers } = require('redux');
const firstSubReducer = require('./firstSubReducer');
const secondSubReducer = require('./secondSubReducer');

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
  firstSubReducer,
  secondSubReducer,
});

module.exports = rootReducer;
