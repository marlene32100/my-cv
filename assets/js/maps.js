    /*   CODICE DEL CORSO
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
      }

      */



      // CODICE TEST

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 3,
              center: {lat: 46.140022, lng:12.216701},
              mapTypeId: "satellite"
    });

    var locations= [
        {
        title:"Belluno",
        position: {lat: 46.140022, lng:12.216701},
        map: map
        },

        {
        title: "Stockholm",
        position: {lat: 59.331916, lng: 18.087883},
        map: map
        },

        {
        title:"Gdansk",
        position: {lat: 54.410188, lng: 18.668048},
        map: map
        }
        ]

    for (let i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: locations[i].position,
            map: map
        });

        console.log(locations[i].title)
        let contentString = "<h4>" + locations[i].title + "</h4>";
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }

}