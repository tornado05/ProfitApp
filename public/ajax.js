$('#costs').click(function () {
	$.ajax({
		type: "GET",
		url: './../models/profitModule.js',
		success: function displayCosts() {
			var resultByCosts = getCosts();
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
		} 

		result += '</tbody></table>'
		$('#ResultDisplay').html(result);
		}
	});
	return;
});