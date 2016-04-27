const React = require('react');
const Sample = require('../components/Sample');

const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');

const App = ({ state, prevPage, nextPage }) => (
  <div>
    <h1>Start hacking at containers/App.js and components/Sample.js</h1>
    <Sample
      state={state}
      onPrevClick={() => prevPage(1)}
      onNextClick={() => nextPage(1)}
    />
  </div>
  );

App.propTypes = {
  state: React.PropTypes.object.isRequired,
  nextPage: React.PropTypes.func.isRequired,
  prevPage: React.PropTypes.func.isRequired,
};

const { nextPage, prevPage } = require('../actions');

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    nextPage: bindActionCreators(nextPage, dispatch),
    prevPage: bindActionCreators(prevPage, dispatch),
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
