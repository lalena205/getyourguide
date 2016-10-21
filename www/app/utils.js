define(function () {

	let getRandomInt = function(max) {
		return Math.floor(Math.random() * max);
	}

	const possibleActions = [
    	'took a long shot and went for',
    	'together with whole fmaily went for',
    	'started the dream holiday by going for'
    ];
	let actionsNo = possibleActions.length;
	let getRandomAction = function() {
		return possibleActions[getRandomInt(actionsNo)];
	}

	// Add some extensions
	String.prototype.capitalizeFirstLetter = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}
    
    return {
        getRandomAction: getRandomAction
    }
});