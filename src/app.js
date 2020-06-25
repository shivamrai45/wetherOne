// take help from expressjs.com
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

// define paths for express functioning
const publicdirectorypath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialpaths = path.join(__dirname,'../templates/partials')

const app = express()
// port provided to us by heroku
const port = process.env.PORT || 3000

// hbs settlement and views location
app.set('view engine', 'hbs')
// here i customise the views directory
app.set('views',viewspath)

hbs.registerPartials(partialpaths)

// serving the static file
app.use(express.static(publicdirectorypath))

app.get('',(req,res)=>{
    res.render('index',{
        title : 'HOME',
        name : 'satyam rai'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'bsdk kitni bar bola search to dal'
        })
    }
    geocode(req.query.search,(error,data)=>{
        if(error){
            res.send({
                error
            })
        }
        else{
            weather(data,(error,deta)=>{
                res.send({
                    temp : deta.temperature,
                    hum : deta.humidity
                })
            })
        }
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'bsdk search to dal'
        })
    }
    res.send({
        products: []
    })
})


app.get('/about',(req,res) =>{
    res.render('about',{
        title: 'about us',
        name : 'shivam'
    })
})

// app.get('/weather',(req,res) =>{
//     res.send('<h2>this is the weather</h2>')
// })

app.get('/help/*',(req,res)=>{
    res.send("are mc fir se aa gya")
})

app.get('*',(req,res)=>{
    res.render('error',{
        error : 'page not found'
    })
})

app.listen(port,()=>{
    console.log('the server is successfully running on port '+port)
})