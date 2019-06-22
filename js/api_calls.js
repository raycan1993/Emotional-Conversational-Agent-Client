var url = "http://185.203.114.216:8080/agentHandler";
//var url = "http://localhost:8080/agentHandler";

// INIT EMOTIONAL CONVERSATIONAL AGENT 
var api_init = function (sessionID) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(sessionID)
    };
    return settings;
};

// RESET EMOTIONAL CONVERSATIONAL AGENT 
var api_reset = function (sessionID) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url + '/reset',
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(sessionID)
    };
    return settings;
};


// [ MESSAGE ] =========================================
// CREATE MESSAGE
var api_create_message = function (message) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(message)
    };
    return settings;
};

