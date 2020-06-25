console.log('client side javascript is loaded')

const paragraph1 = document.querySelectorAll('#table1')
const paragraph2 = document.querySelectorAll('#table2')

paragraph1.textContent = 'from javascript'

const weatherform = document.querySelector('form')


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const addressof = document.querySelector('input')
    console.log(addressof.value)
    console.log(paragraph1)
    console.log(paragraph2)
    fetch('http://localhost:3000/weather?search='+addressof.value).then((response) => {
    response.json().then((data)=>{
        if(data.error){
            // paragraph1.textContent='data.error'
            table1.innerHTML= data.error
        }
        else{
            // paragraph1.textContent='data.temp'
            // paragraph2.textContent='data.hum'
            table1.innerHTML= 'temperature is '+data.temp+' and humidity is '+data.hum
        }
    })
})

    console.log('testing  ')
})