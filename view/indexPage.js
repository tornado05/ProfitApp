var profitModule = require('./../models/profitModule.js');

module.exports = (function () {

	var getPage = function () {
		return '<html>' + getPageHead() +
				'<body>' + 
				getPageHeader() + 
				getMain() +
				getPageFooter() +                
				'</body></html>';
	}

}) ();