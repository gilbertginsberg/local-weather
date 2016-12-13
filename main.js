function initialize() {
  getMyLocation();
}

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    console.log("client doesn't have geolocation support");
    alert("Oops, no geolocation support");
  }
}

function displayLocation(pos) {

  createWeatherScriptTag();

  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;
  var openWeatherScript = document.getElementById("openWeatherAPI");
  openWeatherScript.src = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&callback=showWeather&APPID=55b43e3172f962c142138fd424743eb6';
}

/*function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};*/

function createWeatherScriptTag() {
  var newScriptNode = document.createElement("script");
  var parentNode = document.getElementById("mainJS").parentNode;
  var mainJS = document.getElementById("mainJS");
  //inserts new script tag before mainJS script tag
  parentNode.insertBefore(newScriptNode, mainJS);
  //sets id and src attributes on new scrip tag
  newScriptNode.setAttribute("id", "openWeatherAPI");
  newScriptNode.setAttribute("src", "");
}


 window.onload = initialize;
