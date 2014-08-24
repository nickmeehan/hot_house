function MapController(view) {
  this.view = view;
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
    ajaxRequest.done(this.populateMap)
  },
  populateMap: function(response) {
    console.log(response)
  }
}

//var houses = [
//    [-25.263882,132.044922, 1],
//    [-23.363882,131.044922, 2],
//    [-25.363882,131.144922, 3],
//]
            


//for (var i = 0; i < houses.length; i++) {
//  var marker = new google.maps.Marker({
//      position: new google.maps.LatLng(houses[i][0],houses[i][1]),
//      map: map,
//      title: 'Hello World!'  
//  });
//  }
//}

//google.maps.event.addDomListener(window, 'load', initialize);

