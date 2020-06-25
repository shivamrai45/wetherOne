console.log('client side javascript is loaded')

fetch('http://localhost:3000/weather?search=!').then((response) => {
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            console.log(data.temp)
            console.log(data.hum)
        }
    })
})

const weatherform = document.querySelector('form')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    console.log('testing')
})