define(function () {
	let map;
	let marker;

	let getMarker = function (coords) {
		return new google.maps.Marker({
          position: coords,
          map: map,
          title: 'Hello World!'
        });
	}

	let initMaps = function() {
		var berlin = { lat: 52.5200066, lng: 13.404954 };
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: berlin
		});

		marker = getMarker(berlin);
	}

	let moveMapTo = function(lat, long) {
		let coords = {lat: lat, lng: long};
		marker.setMap(null);
		marker = getMarker( coords );
		map.panTo( coords );
	}

    return {
        init: initMaps,
        goto: moveMapTo,
    }
});