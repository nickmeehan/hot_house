$(document).ready(function() {
  var mapController = new MapController()
  mapController.init()
})

function MapController(view) {
  this.view = view;
}

MapController.prototype = {
  init: function() {
    makeInitialAjaxCall()
  },
  makeInitialAjaxCall: function() {
    var ajaxRequest = $.ajax({
      url: ,
      type: 'GET'
    })
    ajaxRequest.done(populateMap)
  }
}
