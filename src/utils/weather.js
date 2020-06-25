const request = require('request')

const weather = (data,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=7d477a1297390f1389f47f2c27262fdd&query='+data.lattitude+','+data.longitude

    request({url,json : true},(error,response)=>{
        if(error){
            callback('unable to reach weather server',undefined)
        }else if(response.body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,{
                temperature : response.body.current.temperature,
                humidity : response.body.current.humidity
            })
        }
    })
}

module.exports = weather