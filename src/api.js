var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

var API = module.exports = {
    fetchNetworks: function () {
        get('/api/networks').then(actions.gotNetworks.bind(actions));
    },
    fetchUsers: function () {
        get('/api/users').then(actions.gotUsers.bind(actions));
    },
    saveNetworks: function (txt) {
        txt = txt.trim();
        if (txt === '') return;
        post('/api/networks', { text: txt }).then(actions.networked.bind(actions));
    }
};

function get(url) {
    return fetch(url, {
        credentials: 'same-origin'
    }).then(function (res) {
        return res.json();
    });
}

function post(url, body) {
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body || {}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(function (res) {
        return res.json();
    });
}

dispatcher.register(function (action) {
    switch (action.actionType) {
        case constants.NETWORK:
            API.saveNetworks(action.data);
            break;
        default:

    }
})
