$(function() {

/*
	var colourscheme = $('body').attr('id');
	
	if(!colourscheme) {} else {
		$('<style>.underline:after { background: #'+colourscheme+'; } .cover, #share { background: #'+colourscheme+'; }</style>').appendTo('head');
	}
*/
	
	$('.slideshow1').slick({
		autoplay: true,
		arrows: false,
		fade: true,
		pauseOnHover: false,
		swipe: false,
		draggable: false,
		touchMove: false,
		speed: 1200,
		autoplaySpeed: 3300
	});
	
	$('.slideshow2').slick({
		autoplay: true,
		arrows: false,
		fade: true,
		pauseOnHover: false,
		swipe: false,
		draggable: false,
		touchMove: false,
		speed: 1500,
		autoplaySpeed: 3000
	});
	
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