var React = require('react');

var NetworkInput = require('./NetworkInput');
var actions = require('../actions');
var NetworkList = require('./NetworkList');
var NetworkStore = require('../stores/networks.js');

var Home = React.createClass({
    getInitialState: function () {
        return {
            networks: NetworkStore.all()
        };
    },
    componentDidMount: function () {
        NetworkStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        NetworkStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    render: function () {
        return (
            <div>
                <NetworkInput onSave={this.saveNetwork} />
                <NetworkList networks={this.state.networks} />
            </div>
        )
    },
    saveNetwork: function (txt) {
        actions.network(txt);
    }
});

module.exports = Home;
