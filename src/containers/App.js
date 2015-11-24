const React = require('react');
const { Component } = require('react');
const Sample = require('../components/Sample');

const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { nextPage, prevPage } = require('../actions');

class App extends Component {
    render() {
        const { prevPage, nextPage } = this.props;
        return (
            <div>
                <h1>Start hacking at containers/App.js and components/Sample.js</h1>
                <Sample state={this.props.state} onPrevClick={() => prevPage(1)} onNextClick={() => nextPage(1)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        nextPage: bindActionCreators(nextPage, dispatch),
        prevPage: bindActionCreators(prevPage, dispatch)
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
