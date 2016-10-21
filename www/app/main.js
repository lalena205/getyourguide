'use strict';
var initGoogleMap;

define(function (require) {
    let $ = require('jquery');
    let googleMaps = require('./maps');

    let template = '{name} {action} {location}. You can find all of this and more in our thousands and thousands of offers';
    let possibleAction = [
    	'took a long shot and for',
    	'together with whole fmaily went for',
    	'started the dream holiday by going for'
    ];
    
    let $customer1 = $('#customer1');
    let $customer2 = $('#customer2');
    let firstActive = true;

    $('document').ready(function() {
    	initGoogleMap = googleMaps.init;
		
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYIJ6bN3on6-fg2u1uQ3V1nERR6bvrnvE&callback=initGoogleMap";
		document.body.appendChild(script);

    	setInterval(function() { 
    		$.ajax({
				url: 'https://www.getyourguide.com/touring.json?key=2Gr0p7z96D',
				dataType: 'json',
				success: function(data) {
					let newContent = template
						.replace('{name}', data.customerFirstName)
						.replace('{action}', possibleAction[0])
						.replace('{location}', data.activityTitle);

					let $customerToShow = firstActive? $customer2 : $customer1;
					let $customerToHide = firstActive? $customer1 : $customer2;
					firstActive = !firstActive;

					$customerToShow.css('background-image', 'url(' + data.activityPictureUrl + ')');
					$customerToShow.children('p').text(newContent);

					$customerToHide.fadeOut(500, function() {
						$customerToShow.fadeIn(3000);
						googleMaps.goto(data.activityCoordinateLatitude, data.activityCoordinateLongitude);
					});
				}
			});
    	}, 10000);
    });
});