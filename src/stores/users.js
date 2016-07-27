var constants = require('../constants');

var UserStore = module.exports = require('./store').extend({
    init: function () {
        this.bind(constants.GOT_USERS);
        // this.bind(constants.NETWORKED, this.add);
    },
    currentUser: USER
});
