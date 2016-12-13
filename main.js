function initialize() {
  function success(pos) {
  //  var content = document.getElementById("content");
    var crd = pos.coords;
    content.innerHTML = 'Your <strong>latitude</strong> is ' + crd.latitude +
    '<br> and your <strong>longitude</strong> is ' + crd.longitude;
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error);
}

window.onload = initialize;
