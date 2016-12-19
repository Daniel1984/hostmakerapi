const fs = require('fs');
const propertiesList = require('../exerciseData.json');
const http = require('http');
const rp = require('request-promise');
const gt = require('../package.json').gt;

function getPropertyLocationUrls() {
    return propertiesList.map(property => {
        addressString = property.address.postCode.replace(/ /g, '+');
        return `https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=${gt}`;
    })
}

function getProcessedResultData(responses) {
    return responses.map(response => {
        const responseJson = JSON.parse(response);

        let position = responseJson.results[0].geometry.location;
        let address = responseJson.results[0].formatted_address;

        if (responseJson.results.length > 1) {
            const filteredResults = responseJson.results.filter(result => !result.partial_match)
            position = filteredResults[0].geometry.location;
            address = filteredResults[0].formatted_address;
        }

        return { position, address, showInfo: false };
    });
}

module.exports = {
    calculatePaths: function(callback) {
        Promise.all(getPropertyLocationUrls().map(rp))
            .then(responses => callback(null, getProcessedResultData(responses)))
            .catch(callback);
    }
};
