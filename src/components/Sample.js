const React = require('react');
const { Component } = require('react');

class Sample extends Component {
	render () {
		return (
			<div>
				<p>First Reducer: {this.props.state.firstSubReducer}</p>
				<p>Second Reducer: {this.props.state.secondSubReducer}</p>
				<button onClick={this.props.onPrevClick}>Back</button>
				<button onClick={this.props.onNextClick}>Forward</button>
			</div>
		);
	}
}

module.exports = Sample;