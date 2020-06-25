const request = require('request')


const geocode = (address,callback) => {
    const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?limit=1&access_token=pk.eyJ1IjoiaGl0bWFuc2hpdmFtIiwiYSI6ImNrYnJ2MHB1ODMwOGYydnFuaDg2MnczdnYifQ.FFvvz0W5S6D3cr8jKr_vDw'
    request({url : url1,json : true},(error,response)=>{
        if(error){
            callback('unable to connect to location services',undefined)
        }else if(response.body.features.length===0){
            callback('invalid adress. please try another search',undefined)
        }else{
            const data = {
                lattitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            }
            callback(undefined,data)
        }
    })
}

module.exports = geocode