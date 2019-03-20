const request = require('request')

geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2VtaWhhcnNsYW4iLCJhIjoiY2p0ZTlkcGVuMDJ0dzQ0cGs3cTZiM3kzZiJ9.r9zNSx7l4oI1t935nWED5w'

  request({ url, json: true}, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode