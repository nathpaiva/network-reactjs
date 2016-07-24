var constants = require('../constants');

var NetworkStore = module.exports = require('./store').exptend({
    init: function () {
        this.bind(constants.GOT_NETWORKS, this.set);
        this.bind(constants.NETWORKED, this.add);
    }
});
