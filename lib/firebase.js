
var https = require('https');

var FirebaseClient = function(name) {

    this.add = function(value) {
        var timestamp = new Date().getTime();

        clientRequest = https.request({
            host: "blazing-heat-948.firebaseio.com",
            path: '/' + name + '.json',
            method: 'PATCH'
        }, function(response) {
            responseData = "";
            response.on("data", function(chunk) {
                responseData += chunk;
            });
            response.on("end", function() {
                console.log(responseData);
            });
        });

        var requestBody = {};
        requestBody[timestamp] = value;
        clientRequest.write(JSON.stringify(requestBody));
        clientRequest.end();
    };

};

module.exports = FirebaseClient;

