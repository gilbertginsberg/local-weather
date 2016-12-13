function showWeather(weatherData) {
  var weatherObj = weatherData;
  var tempKelvin = weatherObj.main.temp;
  console.log(weatherObj);

  function showFahrenheit() {
    var fahrenheit = Math.floor(tempKelvin * 9/5 - 459.67);

    var weather = document.getElementById("weather");
    weather.innerHTML = fahrenheit + "&#8457;";

  }

  return showFahrenheit();

}
