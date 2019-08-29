const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/2e41574ae92695cfc8f957ca1a731d14/' + lat + ',' + long + '?units=si';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 'Summary: ' + body.daily.data[0].summary + ' '
                + 'Temperature: ' + body.currently.temperature + ' degrees C. '
                + 'Temperature High: ' + body.daily.data[0].temperatureHigh + ' degrees C. '
                + 'Temperature Low: ' + body.daily.data[0].temperatureLow + ' degrees C. '
                + 'Chance of Rain: ' + body.currently.precipProbability + '%. '
                + 'Wind Speed: ' + body.currently.windSpeed + "km/h. "
            )
        }
    })
}

module.exports = forecast;