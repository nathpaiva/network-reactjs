var React = require('react');
var utils = require('../utils');
var Link = require('react-router').Link;
// var moment = require('moment');

var NetworkBox = React.createClass({
    render : function () {
        var net = this.props.network;
        return (
            <li className='row network'>
                <Link className='two columns' to={`/user/${net.userId}`}>
                    <img src={utils.avatar(net.email)} />
                </Link>
                <div className='ten columns'>
                    <p>
                        <strong>{net.fullname} </strong>
                        <span className='timestamp'> @{net.username} @{net.$created}</span>
                    </p>
                    <p>"{net.text}"</p>
                </div>
            </li>
        )
    }
});

module.exports = NetworkBox;
