    function initMap() {
        
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 59.759372,
                    lng: 17.772206
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                {lat: 46.140022, lng: 12.216701},
                {lat: 59.331916, lng: 18.087883},
                {lat: 54.410188, lng: 18.668048}
            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

            var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Belluno</h1>'+
      '<div id="bodyContent">'+
      '<a href="https://it.wikipedia.org/wiki/Belluno#/"><img src="https://it.wikipedia.org/wiki/Belluno#/media/File:Belluno-Schiara.jpg" alt= "Belluno"></a>'+
      '</div>'+
      '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: {lat: 46.140022, lng: 12.216701},
            map: map,
            title: 'Belluno'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
      }
