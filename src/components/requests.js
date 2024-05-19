const fetch = require('node-fetch')
// We are going to create and send an authorization request with the JS code below
// This code follows the Client Credential Grant Flow: Which is when apps request an access token to access their own resource

// Client id and secret is required

//WITH FETCH API

var client_id = 'b992a19dde42421c89ab3999facc5eff';
var client_secret = '25bb33cb9b094e74b287b615e4ec8342';

var getToken = async () => {
    // Sends Request
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body : new URLSearchParams({
            'grant_type': 'client_credentials'
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        },
    });
    var jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
}

// You can now implement the search functionality since you have the token
// The requests you send now must include the tokens

var getSearchResults =  async (access_token) => {
    const response = await fetch('https://api.spotify.com/v1/search/', {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + access_token},
    });
    const data = await response.json();
    return data;
}

getToken().then(response => {
    getSearchResults(response.access_token).then(searchResults => {
        console.log(searchResults);
    })
});