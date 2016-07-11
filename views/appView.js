var profitModule = require('./../models/profitModule.js');

module.exports = (function () {

	var displayAllItems = function () {
		return profitModule.displayAllItems();
	}

	return {
		displayAllItems: displayAllItems
	};

}) ();