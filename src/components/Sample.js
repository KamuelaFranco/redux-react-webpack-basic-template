const React = require('react');

const Sample = ({ state, onPrevClick, onNextClick }) => (
  <div>
    <p>First Reducer: {state.firstSubReducer}</p>
    <p>Second Reducer: {state.secondSubReducer}</p>
    <button onClick={onPrevClick}>Back</button>
    <button onClick={onNextClick}>Forward</button>
  </div>
);

Sample.propTypes = {
  state: React.PropTypes.object.isRequired,
  onPrevClick: React.PropTypes.func.isRequired,
  onNextClick: React.PropTypes.func.isRequired,
};

module.exports = Sample;
