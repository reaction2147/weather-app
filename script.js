const weather = document.querySelector('p');
async function getWeather() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Stamford,uk&APPID=aba6c5f8e7cebde4bbf7faaa6af078bf", {mode: "cors"});
    const weatherData = await response.json();
    console.log(weatherData.weather[0].description);
    weather = weatherData.weather[0].description;
}

getWeather();

