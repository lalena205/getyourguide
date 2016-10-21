define(function () {
	let map;

	let initMaps = function() {
		var berlin = {lat: 52.5200066, lng: 13.404954};
		map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: berlin
		});
	}

	let moveMapTo = function(lat, long) {
		map.setZoom(2);
		map.panTo( {lat: lat, lng: long});
		map.setZoom(6);
	}

    return {
        init: initMaps,
        goto: moveMapTo,
    }
});