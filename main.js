function CalculateWeather(event) {


    {
        event.preventDefault()
    }

    let cityName = document.querySelector('#cityName').value

    let apiKey = '26ae9a0b27a97215beaa4b5df9aa15fb'

    let response = ""

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            console.log('success')

            document.querySelector('#city').innerHTML = `Weather Details Of <br/> ${response.data.name}`
            document.querySelector('#title').innerHTML = `${response.data.main.temp}°C`

            document.querySelector('#country').innerHTML = `Country <br/> ${response.data.sys.country}`
            document.querySelector('#humidity').innerHTML = `Humidity <br/> ${response.data.main.humidity}%`
            document.querySelector('#sky').innerHTML = `Sky <br/>${response['data']['weather']['0']['main']}`
            document.querySelector('#wind').innerHTML = `Wind <br/> ${(((response.data.wind.speed) * 2.9).toFixed())} km/h <br/> ${response.data.wind.deg}° <br/> From North`
            document.querySelector('#min').innerHTML = `Min Temperature <br/> ${response.data.main.temp_min}°C`
            document.querySelector('#max').innerHTML = `Max Temperature <br/> ${response.data.main.temp_max}°C`


        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            console.log('error')
        })

}