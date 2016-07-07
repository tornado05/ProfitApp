var profitModule = require('./../models/profitModule.js');

module.exports = (function () {

	var getPage = function () {
		return '<html>' + getPageHead() +
				'<body>' + 
				getPageHeader() + 
				getPageNav() +
				getMain() +
				'</body></html>';
	}

	var getPageHead = function () {
		 return '<head>' +
				'<title>Profit App</title>' +
				'<meta charset="UTF-8">' + 
				'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
			    '<meta name="viewport" content="width=device-width, initial-scale=1">' + 
				'<link href="css/bootstrap.css" rel="stylesheet">' + 
				'<link href="css/bootstrap-theme.css" rel="stylesheet">' + 
				'<link href="css/style.css" rel="stylesheet">' + 
				'<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>' + 
				"<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,700&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>" +
				'</head>';
	}

	var getPageHeader = function () {
		return '<header><h1><a href="index.html">Profit App</a></h1></header>';
	}

	var getPageNav = function () {
		return '<nav>' + 
					'<div class="container">' + 
						'<div>' + 
							'<button onclick="profitModule.displayAllItems()">Всі записи</button>' + 
							'<button onclick="profitModule.displayAllByCat()">Всі записи по категоріям</button>' + 
							'<button onclick="profitModule.displayCosts()">Всі витрати</button>' + 
							'<button onclick="profitModule.displayEarnings()">Всі доходи</button>' + 
							'<button>Обрати дату</button>' + 
							'<button>Додати запис</button>' + 
						'</div>' + 
					'</div>' + 
				'</nav>';
	}

	var getMain = function () {
		return '<main>' + 
					'<div class="container">' + 
						'<div class="row">' + 
							'<div id="ResultDisplay"></div>' + 
						'</div>' + 
					'</div>' + 
			   '</main>';
	}

	return {
		getPage: getPage
	};

}) ();