const fs = require('fs');
const path = require('path');
const propertiesList = require('../exerciseData.json');

module.exports = {
    getProperties: function(callback) {
        callback(null, propertiesList);
    }
};
