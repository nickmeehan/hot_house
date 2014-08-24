function MapView(options){
    this.map
    this.mappedMarkers = []
}
MapView.prototype = {
    init: function(){
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(50.884702, -114.006758),
            scrollwheel: false,
        }
        this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    },
    putMarkersOnMap: function(markers){
        for (var i = 0; i < markers.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i].latitude, markers[i].longitude),
                map: this.map,
                title: 'Hello World!',
                markerIdentifier: markers[i].id
            });
        this.mappedMarkers.push(marker)
        }
        return this.mappedMarkers
    },
    putWindowOnMap: function(markerInfo){
        console.log(markerInfo)
        var content = "<div class='row infowindow'><div class='col-lg-6'><img class='img-thumbnail' src='" + markerInfo.image_url_array[0] + "'></div><div class='col-lg-6'><h4>Bedrooms: " + markerInfo.bedroom_count + "</h4><h4>Baths: " + markerInfo.bathroom_count + "</h4><h4>Price: $" + markerInfo.price + "</h4><h4><a href='#'>See More</h4></div></div>"
        
        
         for (var i = 0; i < this.mappedMarkers.length; i++){
            if (this.mappedMarkers[i].markerIdentifier == markerInfo.id) {
                var infowindow = new google.maps.InfoWindow({
                    content: content,
                    maxWidth: 300
                    
        });
            infowindow.open(this.map, this.mappedMarkers[i])

            }
         }

    }
}

/*

*/