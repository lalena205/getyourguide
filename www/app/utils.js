define(['./constants'], function (constants) {

	let getRandomInt = function(max) {
		return Math.floor(Math.random() * max);
	}

	let actionsNo = constants.possibleActions.length;
	let getRandomAction = function() {
		return constants.possibleActions[getRandomInt(actionsNo)];
	}

	// Add some extensions
	String.prototype.capitalizeFirstLetter = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}
    
    return {
        getRandomAction: getRandomAction
    }
});