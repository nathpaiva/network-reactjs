var React = require('react');
var NetworkBox = require('./NetworkBox');

var NetworkList = React.createClass({
    render : function () {
        var items = this.props.networks.map(function (network) {
            return <NetworkBox key={network.cid} network={network} />;
        });
        return <ul>{items}</ul>;
    }
});

module.exports = NetworkList;
