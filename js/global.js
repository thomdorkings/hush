$(function() {

	var colourscheme = $('body').attr('id');
	
	if(!colourscheme) {} else {
		$('<style>.underline:after { background: #'+colourscheme+'; } .cover, #share { background: #'+colourscheme+'; }</style>').appendTo('head');
	}
	
	$('.share').on('click', function() {
		$('#share').addClass('open');
		return false;
	});
	
	$('#share .close').on('click', function() {
		$('#share').removeClass('open');
		return false;
	});

});

$(window).scroll(function() {
	if($(window).scrollTop() > 60) {
		$('.stickyshare').addClass('visible');
		$('header').addClass('scrolled');
	} else {
		$('.stickyshare').removeClass('visible');
		$('header').removeClass('scrolled');
	}
});