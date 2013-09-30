var loadRecipe = function(elem) {
	$('.selected').removeClass('selected');
	elem.addClass('selected');
	var content = elem.clone();
	fix(content, 'notes');
	fix(content, 'ingredients');
	fix(content, 'directions');
	$('#current').html(content);
}

var fix = function(elem, clazz) {
	var target = elem.find('.' + clazz);
	target.text($.trim(target.text()));
	target.prepend('<h3>' + clazz + '</h3>');
}

$(window).load(function(){
	$('.recipe .name').each(function() {
		var that = $(this);
		var img = $('<img src="img/' + that.text().replace(/\W/g, '') + '.jpg">');
		$(this).after(img);
	});

	$('.recipe').click(function() {
		loadRecipe($(this));
		var hash = $(this).find('.name').text().replace(/\W/g, '');
		window.location.replace(('' + window.location).split('#')[0] + '#' + hash);
	});
	
	if (window.location.hash) {
		$('.recipe').each(function() {
			var name = $(this).find('.name').text().replace(/\W/g, '');
			if ('#' + name == window.location.hash) {
				loadRecipe($(this));
			}
		});
	} else {
		loadRecipe($('.recipe').eq(0));
	}
 
});
