var actions = require('./actions');
var API = module.exports = {
    fetchNetworks: function () {
        get('/api/networks').then(actions.gotNetworks.bind(acitons));
    }
};

function get (url) {
    return fetch (url, {
        credenctial: 'same-origin'
    }).then(function (res) {
        return res.json();
    });
}
