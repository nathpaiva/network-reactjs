var React = require('react');

var NetworkList = React.createClass({
    render : function () {
        var items = this.props.networks.map(function (network) {
            return <li key={network.cid}>
                    <strong> {network.username}</strong> said "{network.text}"
            </li>;
        });
        return <ul>{items}</ul>;
    }
})

module.exports = NetworkList;
