function MapView(options){
    this.map    
}
MapView.prototype = {
    init: function(){
        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(-33.9, 151.2),
            scrollwheel: false,
        }
        this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }
}