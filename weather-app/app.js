const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8730c55865a7a9d55b867afc5925d653&query=43.343033,17.807894'

request({url: url, json: true }, (err, response) => {
    if (err) {
        console.log(err)
        return
    }
    
   // console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degres out. It is feel like ' + response.body.current.feelslike + ' degress out.' )
    
})

const url_geomap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYXplcmdlb21hcCIsImEiOiJja3N4MmZnNXcyNXBrMzJvZHBvcDJ3aDNmIn0.oPH2yBuuqACq-njPmaImrA&limit=1'

request({url: url_geomap, json: true }, (err, response) => {
    if (err) {
        console.log(err)
        return
    }
    
    console.log(response)
    
})