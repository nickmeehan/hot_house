$(document).ready(function() {
  var mapController = new MapController(new MapView())
  mapController.init()
  google.maps.event.addDomListener(window, 'load', initialize);
})


