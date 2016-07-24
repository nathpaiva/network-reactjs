var constants = require('../constants');

var NetworkStore = module.exports = require('./store').extend({
    init: function () {
        this.bind(constants.GOT_NETWORKS, this.set);
        this.bind(constants.NETWORKED, this.add);
    }
});
