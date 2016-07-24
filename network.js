var router = module.exports = require('express').Router();
var login = require('./login');

var db = new (require('locallydb'))('./.data');
var networks = db.collection('networks');

router.route('/api/networks')
    .all(login.required)
    .get(function (req, res) {
        res.json(networks.toArray());
    })
    .post(function (req, res){
        var network = req.body;
        network.userId = req.user.cid;

        // TO BE REMOVED
        network.username = req.user.username;
        network.fullname = req.user.fullname;
        network.email = req.user.email;

        var id = networks.insert(network);
        res.json(networks.get(id));
    });
