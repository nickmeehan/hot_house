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
    },
    putMarkersOnMap: function(markers){
        var mappedMarkers = []
        for (var i = 0; i < markers.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i].latitude,markers[i].longitude),
                map: this.map,
                title: 'Hello World!',
                markerIdentifier: markers[i].id
            });
        mappedMarkers.push(marker)   
        }
        return mappedMarkers
    }
}

/*
<div class='row'>
<div class='col-lg-6'>
<img class="img-thumbnail" src="http://www.leoraw.com/blog/wp-content/uploads/2013/12/house-north-fifth.png">
</div>
<div class='col-lg-6'>
<p>Bedrooms:</p>
<p>Baths:</p>
</div>
</div>
*/