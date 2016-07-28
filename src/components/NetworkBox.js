var React = require('react');
var utils = require('../utils');
var Link = require('react-router').Link;

// user
// fullname
// username
// avatar
//
// text     ||  buttons
// timestamp

var NetworkBox = React.createClass({
    render : function () {
        var user = this.props.user;
        var timestamp = this.props.timestamp ?
        ' ' + String.fr omCharCode(8226) + ' ' + this.props.timestamp : '';

        return (
            <li className='row network'>
                <Link className='two columns' to={`/user/${user.userId || user.cid}`}>
                    <img src={utils.avatar(user.email)} />
                </Link>
                <div className='ten columns'>
                    <p>
                        <strong>{user.fullname} </strong>
                        <span className='timestamp'> @{user.username} {timestamp}</span>
                    </p>
                    <p>{this.props.children}</p>
                </div>
            </li>
        )
    }
});

module.exports = NetworkBox;
