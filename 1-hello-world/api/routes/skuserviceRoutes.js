'use strict';
module.exports = function(app) {
    var skuserviceController = require('../controllers/skuserviceController');

    app.route('/sku')
    .get(skuserviceController.get_a_sku)
    .post(skuserviceController.create_a_sku);
};