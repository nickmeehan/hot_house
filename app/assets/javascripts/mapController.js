function MapController(view) {
  this.view = view;
  this.markers
}

MapController.prototype = {
  init: function() {
    this.view.init()
    this.makeInitialAjaxCall()
  },
  makeInitialAjaxCall: function() {
    var ajaxRequest = $.ajax({
      url: '/locations',
      type: 'GET'
    })
    ajaxRequest.done(this.populateMap.bind(this)) 
  },
  getMarkerInfo: function(marker){
    var ajaxRequest = $.ajax({
      url: '/locations/' + marker.markerIdentifier,
      type: 'GET'
    })
    ajaxRequest.done(this.showMarkerWindow.bind(this))
  },
  showMarkerWindow: function(response){
    this.view.putWindowOnMap(response)
  },
  addMarkerListeners: function(markers){
    var that = this
     for (var i = 0; i < markers.length; i++){
        google.maps.event.addListener(markers[i], 'click', function(innerKey) {
         that.getMarkerInfo(this)         
        });
     }
  },
  populateMap: function(response) {
    this.markers = response
    var mappedMarkers = this.view.putMarkersOnMap(this.markers)
    this.addMarkerListeners(mappedMarkers)
  }
  
  
}
       




