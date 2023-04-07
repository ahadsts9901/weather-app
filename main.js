function CalculateWeather(event) {


    {
        event.preventDefault()
    }

    let cityName = document.querySelector('#cityName').value

    let apiKey = '26ae9a0b27a97215beaa4b5df9aa15fb'

    let now = moment().format('dddd MMMM Do hh:mm A')

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            console.log('success')

            document.querySelector('#city').innerHTML = `Weather Details Of <br/> ${response.data.name}`
            document.querySelector('#title').innerHTML = `${response.data.main.temp}°C`

            document.querySelector('#country').innerHTML = `Country <br/> ${response.data.sys.country}`
            document.querySelector('#humidity').innerHTML = `Humidity <br/> ${response.data.main.humidity}%`
            document.querySelector('#sky').innerHTML = `Sky <br/> ${response['data']['weather']['0']['main']}`
            document.querySelector('#wind').innerHTML = `Wind <br/> ${(((response.data.wind.speed) * 2.9).toFixed())} km/h <br/> ${response.data.wind.deg}° <br/> From North`
            document.querySelector('#min').innerHTML = `Minimum Temperature <br/> ${response.data.main.temp_min}°C`
            document.querySelector('#max').innerHTML = `Maximum Temperature <br/> ${response.data.main.temp_max}°C`
            document.querySelector('#pressure').innerHTML = `Pressure <br/> ${response.data.main.pressure} <br/> Pascals`
            document.querySelector('#now').innerHTML = `${now}`
            document.querySelector('#image').innerHTML = `<img src='https://openweathermap.org/img/wn/${response['data']['weather']['0']['icon']}@2x.png'>`
            document.querySelector('#skytitle').innerHTML = `${response['data']['weather']['0']['main']}`



        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            console.log('error')
        })

}