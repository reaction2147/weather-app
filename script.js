async function getWeather() {
  const location = document.getElementById('location').value;
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID=aba6c5f8e7cebde4bbf7faaa6af078bf",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const weatherContent = weatherData.weather[0].description;

  const container = document.querySelector("#weather");
  
  container.textContent = "Todays weather : " + weatherContent;
  

  
}


