function initialize() {
  getMyLocation();

  var degreeButton = document.getElementById("degrees");
  degreeButton.onclick = changeTempScale;
}

// **defines callback from that jsonp web service will call**
function showWeather(weatherData) {
  var weatherObj = weatherData;
  console.log(weatherObj);

  var tempKelvin = weatherObj.main.temp;

  // converts temp from kelvin to fahrenheit
  var fahrenheit = Math.floor(tempKelvin * 9/5 - 459.67);
  var celsius = Math.floor(tempKelvin - 273.15);
  var celsAndFahrObj = {
    fahr: fahrenheit,
    cels: celsius
  };

  var degreeObj = document.getElementById("degreeObj");
  var celsAndFahrJson = JSON.stringify(celsAndFahrObj);
  degreeObj.innerHTML = celsAndFahrJson;

  var temp = document.getElementById("temp");
  temp.innerHTML = fahrenheit + "&#8457;";


  // sets up weather icon to accompany the temp
  var weatherIcon = document.getElementById("weatherIcon");
  var icon = weatherObj.weather[0].icon;
  var html = document.getElementById("html");


  // *shows weather icon and background img*
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

  // *shows city name*
  var city = document.getElementById("city");
  city.innerHTML = weatherObj.name;

}

// *converts temp from kelvin to fahrenheit or celsius*

function changeTempScale(e) {
  var button = e.target;
  var degreeObj = document.getElementById("degreeObj");
  var celsAndFahrObj = JSON.parse(degreeObj.innerHTML);
  console.log(celsAndFahrObj);
//  celsius = Math.floor((degreeF - 32) * 5/9);

  if (button.innerHTML === "← Convert to C") {
    temp.innerHTML = celsAndFahrObj.cels + "&#8451;";
    button.innerHTML = "&#8592; Convert to F";
  } else {
    temp.innerHTML = celsAndFahrObj.fahr + "&#8457;";
    button.innerHTML = "&#8592; Convert to C";
  }
}


/*
 * detect user's location
 * via geolocation API
 *
 */

// **defines parameters of geolocation api to detect user's location and thus local weather**
//   *success callback of navigator.geolocation.getCurrentPosition(success[, error[, options]])*
function displayLocation(pos) {
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;
  var urlOfWeatherApi = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&callback=showWeather&APPID=55b43e3172f962c142138fd424743eb6';
  createJsonpScriptTag(); //creates new script to make jsonp call
  var openWeatherScript = document.getElementById("openWeatherAPI");
  openWeatherScript.setAttribute("src", urlOfWeatherApi);

}

//  *error callback of navigator.geolocation.getCurrentPosition(success[, error[, options]])*
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

var options = {
  enableHighAccuracy: false,
};

/*
 *
 * end geolocation api code
 *
 */

// **generates jsonp script to make request to openweathermap.org's api
function createJsonpScriptTag() {
  var newScriptNode = document.createElement("script");
  var parentNode = document.getElementById("mainJS").parentNode;
  var mainJS = document.getElementById("mainJS");
  //inserts new script tag before mainJS script tag
  parentNode.insertBefore(newScriptNode, mainJS);
  //sets id and src attributes on new scrip tag
  newScriptNode.setAttribute("id", "openWeatherAPI");
}

// **function to check use's location using geolocation api**
function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, error, options);
  } else {
    console.log("client doesn't have geolocation support");
    alert("Oops, no geolocation support");
  }
}

window.onload = initialize;
