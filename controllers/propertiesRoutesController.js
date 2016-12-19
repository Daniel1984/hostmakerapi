const model = require('../models/propertyRouteModel');

module.exports = {
    index: function(req, res, next) {
        model.calculatePaths((err, paths) => {
            if (err) {
                next(err);
                return;
            }

            res.json(paths);
        });
    }
}
