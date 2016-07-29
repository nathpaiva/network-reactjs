var React = require('react');
var actions = require('../actions');
var UserStore = require('../stores/UserStore');

var FollowButton = module.exports = React.createClass({
    getInitialState : function () {
        return {
            currentlyFollowing: UserStore.currentUser.followin
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
    render: function () {

    }
});
