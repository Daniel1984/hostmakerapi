const fs = require('fs');
const propertiesList = require('../exerciseData.json');

module.exports = {
    getProperties: function(callback) {
        callback(null, propertiesList);
    }
};
