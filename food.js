var loadRecipe = function(elem) {
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

	$('.recipe').find('img').each(function() {
		var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
		$(this).addClass(imgClass);
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
