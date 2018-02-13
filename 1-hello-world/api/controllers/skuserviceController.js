'use strict';

const DialogflowApp = require('actions-on-google').DialogflowApp; // Google Assistant helper library

exports.get_a_sku = function(req, res) {
    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
    res.json({ message: 'sku retrieved successfully' });
};

exports.create_a_sku = function(req, res) {
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
    res.json({ message: 'sku created' });
};