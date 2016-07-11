$(function () {
    window.profitApp = (function () {
        
        var displayAll = function() {
			$.ajax('/all').done(displayAllItems);
    	};

    	function displayAllItems() {
			var data = getAllItems();
			var result = '<h1>Всі записи</h1><div class="table-responsive"><table class="table">' + 
					'<thead><tr><th>ID запису</th><th>Дата</th><th>Тип</th><th>Призначення платежу</th><th>Відділ</th><th>Сума</th></thead>' + 
					'<tbody>';

			for (var i = (data.length-1); i >= 0; --i) {
				result += '<tr><td>' + data[i].id + '</td>';
				result += '<td>' + data[i].date + '</td>';
				result += '<td>' + data[i].type + '</td>';
				result += '<td>' + data[i].purpose + '</td>';
				result += '<td>' + data[i].department + '</td>';
				result += '<td>' + data[i].amount + '</td>';
				result += '</tr>';
			} 

			result += '</tbody></table>';
			$('#ResultDisplay').text(result);
		}	

	    return {
	        displayAll: displayAll
	    };
	})();
});
