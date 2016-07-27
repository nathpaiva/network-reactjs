var React = require('react');
var UserStore = require('../stores/users');
var actions = require('../actions');
var Link = require('react-router').Link;

var UserList = React.createClass({
    getInitialState : function () {
        return {
            users: UserStore.all(),
            myUser: UserStore.currentUser
        };
    },
    componentDidMount: function () {
        UserStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        UserStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    render : function functionName() {
        var myUser = this.state.myUser.cid;
        var items = this.state.users.filter(function (user) {
            return myUser !== user.cid;
        }.bind(this)).map(function (user) {
            return <li key={user.cid}>@{user.fullname}</li>;
        });

        return <ul>{items}</ul>;
    }
});

module.exports = UserList;
