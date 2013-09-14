$(window).load(function(){

	$('.recipe').find('img').each(function() {
		var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
		$(this).addClass(imgClass);
	});

	$('.recipe').click(function() {
		$('#current').html($(this).clone());
		var name = $(this).find('.name').text().replace(/\W/g, '');
		window.location.hash = name;
	});
	
	if (window.location.hash) {
		$('.recipe').each(function() {
			var name = $(this).find('.name').text().replace(/\W/g, '');
			if ('#' + name == window.location.hash) {
				$('#current').html($(this).clone());
			}
		});
	} else {
		$('#current').html($('.recipe').eq(0).clone());
	}
 
});
