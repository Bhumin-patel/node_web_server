const request = require("request");

const forecast = (longitude,latitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=cf7f902d95c56db84d15e6bbc35ed22d&query='+ longitude +','+ latitude +'&units=f';

    request({url , json : true},(error,{body})=>{

        if(error){
            callback('Unable to connect weather service',undefined);
        }
        else if(body.error){
            callback('Unable to find location',undefined);
        }
        else{
            callback(undefined,body.current.weather_descriptions[0] +  ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress."); 
        }
    })
}

module.exports = forecast;