var React = require('react');
var NetworkInput = require('./NetworkInput');
var actions = require('../actions');

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <NetworkInput onSave={this.saveNetwork} />
            </div>
        )
    },
    saveNetwork: function (txt) {
        actions.network(txt);
    }
});

module.exports = Home;
