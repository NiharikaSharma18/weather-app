const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e28726bfd1mshf1cf6b8bf71e808p12aca0jsn1944cc0c7eb3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        
        temp.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response. humidity
        min_temp.innerHTML=response. min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response. wind_degrees
        sunrise.innerHTML=response. sunrise
        sunset.innerHTML=response. sunset
    })
	.catch(err => console.error(err));}
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })
    getWeather("noida")
    const displayweather=(city)=>{
        citys.innerHTML=city
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bombay', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        
        temp.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response. humidity
        min_temp.innerHTML=response. min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response. wind_degrees
        sunrise.innerHTML=response. sunrise
        sunset.innerHTML=response. sunset
    })
}
getWeather("Bombay")