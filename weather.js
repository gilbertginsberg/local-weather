function showWeather(weatherData) {
  var weatherObj = weatherData;
  var tempKelvin = weatherObj.main.temp;
  console.log(weatherObj);
  var weatherIcon = document.getElementById("weatherIcon");
  var icon = weatherObj.weather[0].icon;
  var html = document.getElementById("html");


  //shows weather icon and background img
  if (icon === "01d") { // clear day
    weatherIcon.src = "http://openweathermap.org/img/w/01d.png";
    weatherIcon.alt = "Clear skies - day";
    html.setAttribute("class", "clear-sky-day");
  } else if (icon === "01n") { // clear night
    weatherIcon.src = "http://openweathermap.org/img/w/01n.png";
    weatherIcon.alt = "Clear skies - night";
    html.setAttribute("class", "clear-sky-night");
  } else if (icon === "02d") {
    weatherIcon.src = "http://openweathermap.org/img/w/02d.png";
    weatherIcon.alt = "A few clouds - day";
    html.setAttribute("class", "few-clouds-day");
  } else if (icon === "02n" || icon === "03n") {
    weatherIcon.src = "http://openweathermap.org/img/w/02n.png";
    weatherIcon.alt = "A few or scattered clouds - night";
    html.setAttribute("class", "few-clouds-night");
  } else if (icon === "03d") {
    weatherIcon.src = "http://openweathermap.org/img/w/03d.png";
    weatherIcon.alt = "Scattered clouds - day";
    html.setAttribute("class", "scattered-clouds");
  } else if (icon === "04d") {
    weatherIcon.src = "http://openweathermap.org/img/w/04d.png";
    weatherIcon.alt = "Broken clouds - day ";
    html.setAttribute("class", "broken-clouds-day");
  } else if (icon === "04n") {
    weatherIcon.src = "http://openweathermap.org/img/w/04n.png";
    weatherIcon.alt = "Broken clouds - night";
    html.setAttribute("class", "broken-clouds-night");
  } else if (icon === "09d" || icon === "09n") { // shower rain
    weatherIcon.src = "http://openweathermap.org/img/w/09d.png";
    weatherIcon.alt = "Shower rain";
    html.setAttribute("class", "rain");
  } else if (icon === "10d") {
    weatherIcon.src = "http://openweathermap.org/img/w/10d.png";
    weatherIcon.alt = "Rain - day";
    html.setAttribute("class", "rain-night");
  } else if (icon === "10n") {
    weatherIcon.src = "http://openweathermap.org/img/w/10n.png";
    weatherIcon.alt = "Rain - night";
    html.setAttribute("class", "rain");
  } else if (icon === "11d" || icon === "11n") {
    weatherIcon.src = "http://openweathermap.org/img/w/11d.png";
    weatherIcon.alt = "Thunderstorm";
    html.setAttribute("class", "storm");

  } else if (icon === "13d") {
    weatherIcon.src = "http://openweathermap.org/img/w/13d.png";
    weatherIcon.alt = "Snow - day";
    html.setAttribute("class", "snow-day");
  } else if (icon === "13n") {
    weatherIcon.src = "http://openweathermap.org/img/w/13n.png";
    weatherIcon.alt = "Snow - night";
    html.setAttribute("class", "snow-night");
  } else if (icon === "50d" || icon === "50n") {
    weatherIcon.src = "http://openweathermap.org/img/w/50d.png";
    weatherIcon.alt = "Mist";
    html.setAttribute("class", "mist");
  }

  //converts temp from kelvin to fahrenheit
  var fahrenheit = Math.floor(tempKelvin * 9/5 - 459.67);
  var temp = document.getElementById("temp");
  temp.innerHTML = fahrenheit + "&#8457;";

  //shows city name
  var city = document.getElementById("city");
  city.innerHTML = weatherObj.name;

}
