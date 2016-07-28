var React = require('react');
var Box = require('./NetworkBox');
var moment = require('moment');

var UserStore = require('../stores/users');

var NetworkList = React.createClass({
    render : function () {
        var items = this.props.networks.map(function (network) {
            return <Box key={network.cid}
            user={network}
            timestamp={moment(network.$created).fromNow()}>
            {network.text}
            </Box>;
        });
        return <ul>{items}</ul>;
    }
});

module.exports = NetworkList;
