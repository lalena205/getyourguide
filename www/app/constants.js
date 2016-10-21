define(function () {
	// google maps config settings
	const googleMapsKey = 'AIzaSyDYIJ6bN3on6-fg2u1uQ3V1nERR6bvrnvE';
	const callbackInitFunc = 'initGoogleMap'
	let mapsUrl = 'https://maps.googleapis.com/maps/api/js?key={key}&callback={func}'
					.replace('{key}', googleMapsKey)
					.replace('{func}', callbackInitFunc);

	// URL of the api providing customer data
	const customerApi = 'https://www.getyourguide.com/touring.json?key=2Gr0p7z96D';
    
    // Random possible actions of customers
    const possibleActions = [
    	'took a long shot and went for',
    	'together with whole family went for',
    	'started the dream holiday by going for'
    ];

    return {
        googleMapsUrl: mapsUrl,
        customerApiUrl: customerApi,
        possibleActions: possibleActions
    }
});