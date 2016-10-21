'use strict';
var initGoogleMap;

define(function (require) {
    let $ = require('jquery');

    let constants = require('./constants');
    let utils = require('./utils');
    let googleMaps = require('./maps');

    const template = '{name} {action} {location}. You can find all of this and more in our thousands and thousands of offers';
    
    
    let $customer1 = $('#customer1');
    let $customer2 = $('#customer2');
    let firstActive = true;

    let startSlideshow = function() {
    	setInterval(function() { 
    		$.ajax({
				url: constants.customerApiUrl,
				dataType: 'json',
				success: function(data) {
					let newContent = template
						.replace('{name}', data.customerFirstName.capitalizeFirstLetter())
						.replace('{action}', utils.getRandomAction())
						.replace('{location}', data.activityTitle);

					let $customerToShow = firstActive? $customer2 : $customer1;
					let $customerToHide = firstActive? $customer1 : $customer2;
					firstActive = !firstActive;

					$customerToShow.css('background-image', 'url(' + data.activityPictureUrl + ')');
					$customerToShow.find('p').text(newContent);

					$customerToHide.fadeOut(500, function() {
						$customerToShow.fadeIn(3000);
						googleMaps.goto(data.activityCoordinateLatitude, data.activityCoordinateLongitude);
					});
				}
			});
    	}, 10000);
    }

    $('document').ready(function() {
    	initGoogleMap = googleMaps.init;
		
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = constants.googleMapsUrl;
		document.body.appendChild(script);
		//return;
		startSlideshow();
    });
});