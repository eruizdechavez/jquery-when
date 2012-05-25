function getAjaxRequest(query) {
	return $.ajax({
		url: 'http://search.twitter.com/search.json',
		dataType: 'jsonp',
		data: {
			q: query,
			result_type: 'recent'
		}
	});
}

$(function() {
	$.when(getAjaxRequest('jquery'), getAjaxRequest('javascript'), getAjaxRequest('backbonejs')).then(function(jquery, javascript, backbonejs) {

		$.each(jquery[0].results, function(key, item){
			$('#jquery').append('<li><strong>' + item.from_user + '</strong>: ' + item.text + '</li>');
		});

		$.each(javascript[0].results, function(key, item){
			$('#javascript').append('<li><strong>' + item.from_user + '</strong>: ' + item.text + '</li>');
		});

		$.each(backbonejs[0].results, function(key, item){
			$('#backbonejs').append('<li><strong>' + item.from_user + '</strong>: ' + item.text + '</li>');
		});
	});
});
