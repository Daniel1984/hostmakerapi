const propertyModel = require('../models/propertyModel');

module.exports = {
    index: function(req, res, next) {
        propertyModel.getProperties((err, properties) => {
            if (err) {
                next(err);
                return;
            }

            res.json(properties);
        });
    }
}
