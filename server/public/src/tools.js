/**
 * Use this function to send json.
 * This function can only be used in POST events.
 * @param {string} url URL to send
 * @param {*} json Data to send
 */
function sendJSON(url, json) {
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(json),
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    })
}

/**
 * Changes url in client when ajax sended data successly.
 * Sends new url to the server as a string variable called "newURL".
 * @param {string} oldURL 
 * @param {string} newURL
 */
function changeURL(oldURL, newURL) {
    $.ajax({
        url: oldURL,
        type: "GET",
        data: "newURL=" + newURL,
        dataType: "text"
    }).done(function() {
        window.location.href = newURL;
    });
}