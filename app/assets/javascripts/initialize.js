function initialize() {
  var mapController = new MapController(new MapView())
  mapController.init()
}

$(document).ready(initialize);
$(document).on('page:load', initialize)
