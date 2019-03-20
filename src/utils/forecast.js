const request = require('request')

forecast = (latitude, longtitude, callback) => {
  const url = 'https://api.darksky.net/forecast/be9e44558ce07f2bbaa5dbad6b1faa02/' + latitude + ',' + longtitude + '?units=si'

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect weather service!')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast