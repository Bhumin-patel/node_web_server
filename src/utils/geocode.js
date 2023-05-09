const request = require('request');

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYmh1bWluIiwiYSI6ImNsZ3Z0eGw1MDBhcGkzZm8zY3p6MGk2bGUifQ.1nUj_E5B-Ycw9F7YxJuvow&limit=1'

    request({url, json : true},(error,{body})=>{

        if(error){
            callback('Unable to connect to location service',undefined);
        }
        else if(body.features.length === 0){
            callback('Unable to find loaction',undefined);
        }
        else{

            callback(undefined,{
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;