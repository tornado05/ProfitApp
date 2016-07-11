var fs = require('fs');
var logger = require('./../services/Logger.js');

module.exports = (function () {

	var dbFilePath = './data/data.json';
	var getDataFromFile = function (path) {
        try {
            var result = fs.readFileSync(path, 'utf8');
            return JSON.parse(result);
        } catch(e) {
            logger.logError("Can't read from file");
            return [];
        }
    };
	var data = getDataFromFile(dbFilePath);

	function getAllItems() {
		var result = [];

		for (var i = 0; i < data.length; ++i) {
			result.push(data[i]);
		}
		return result;
	}

	function getCosts() {
		var resultByAll = getAllItems();
		var result = [];
		for (var i = 0; i < resultByAll.length; ++i) {
			if (resultByAll[i].type == 'Витрати') {
				result.push(resultByAll[i]);
			}
		}
		return result;
	}

	function getEarnings() {
		var resultByAll = getAllItems();
		var result = [];
		for (var i = 0; i < resultByAll.length; ++i) {
			if (resultByAll[i].type == 'Доходи') {
				result.push(resultByAll[i]);
			}
		}
		return result;
	}

	function displayCosts() {
		return getCosts();
	}

	var displayEarnings = function() {
		return getEarnings();
	}

	function displayAllItems() {
		return getAllItems();	
	}

	function displayAllByCat() {
		var resultByCosts = getCosts();
		var resultByEarnings = getEarnings();
		var sumOfCosts = 0;
		var sumOfEarnings = 0;
		var netProfit = 0;
		var advertising = 0;
		var reinvestment = 0;
		var finalprofit = 0;

		var result = '<h1>Всі витрати</h1><div class="table-responsive"><table class="table">' +
				'<thead><tr><th>ID запису</th><th>Дата</th><th>Тип</th><th>Призначення платежу</th><th>Відділ</th><th>Сума</th></thead>' +
				'<tbody>';
		for (var i = (resultByCosts.length-1); i >= 0; --i) {
			result += '<tr><td>' + resultByCosts[i].id + '</td>';
			result += '<td>' + resultByCosts[i].date + '</td>';
			result += '<td>' + resultByCosts[i].type + '</td>';
			result += '<td>' + resultByCosts[i].purpose + '</td>';
			result += '<td>' + resultByCosts[i].department + '</td>';
			result += '<td>' + resultByCosts[i].amount + '</td>';
			result += '</tr>';
			sumOfCosts += resultByCosts[i].amount;
		}

		result += '<tr><td class="total" colspan="5">Сума: </td><td class="text-left" colspan="1"><strong>' + sumOfCosts + ' грн </strong></td></tr>';
		result += '</tbody></table>';

		result += '<h1>Всі доходи</h1><div class="table-responsive"><table class="table">' +
				'<thead><tr><th>ID запису</th><th>Дата</th><th>Тип</th><th>Призначення платежу</th><th>Відділ</th><th>Сума</th></thead>' +
				'<tbody>';
		for (var i = (resultByEarnings.length-1); i >= 0; --i) {
			result += '<tr><td>' + resultByEarnings[i].id + '</td>';
			result += '<td>' + resultByEarnings[i].date + '</td>';
			result += '<td>' + resultByEarnings[i].type + '</td>';
			result += '<td>' + resultByEarnings[i].purpose + '</td>';
			result += '<td>' + resultByEarnings[i].department + '</td>';
			result += '<td>' + resultByEarnings[i].amount + '</td>';
			result += '</tr>';
			sumOfEarnings += resultByEarnings[i].amount;
		}
		netProfit = sumOfEarnings - sumOfCosts;
		advertising = netProfit * 0.1;
		reinvestment = netProfit * 0.2;
		finalprofit = netProfit - advertising - reinvestment;
		result += '<tr><td class="total" colspan="5">Сума: </td><td class="text-left" colspan="1"><strong>' + sumOfEarnings + ' грн </strong></td></tr>';
		result += '</tbody></table>';
		result += '<div class="table-responsive"><table class="table">' +
				'<thead><tr><th>Чистий прибуток</th><th>Планування реклами</th><th>Планування реінвестиції</th><th>Чистий заробіток</th></thead>' +
				'<tbody><tr><td>' + netProfit + '</td><td>' + advertising + '</td><td>' + reinvestment + '</td><td>' + finalprofit + '</td></tr>'
		$('#ResultDisplay').html(result);
	}

	return {
		getAllItems: getAllItems,
		displayAllItems: displayAllItems,
		getCosts: getCosts,
		getEarnings: getEarnings,
		displayEarnings: displayEarnings,
		displayCosts: displayCosts,
		displayAllByCat: displayAllByCat
	};

})();
