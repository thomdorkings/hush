$(function() {

/*
	var colourscheme = $('body').attr('id');
	
	if(!colourscheme) {} else {
		$('<style>.underline:after { background: #'+colourscheme+'; } .cover, #share { background: #'+colourscheme+'; }</style>').appendTo('head');
	}
*/

	var styles = {
	modernfeminine: 0,
	urban: 0,
	colourriot: 0,
	minimalist: 0
	}, result = 'modernfeminine';
	
	$('.answers .button').on('click', function() {
		if ($(this).attr('data-style') == 'modernfeminine') { styles.modernfeminine++ };
		if ($(this).attr('data-style') == 'urban') { styles.urban++ };
		if ($(this).attr('data-style') == 'colourriot') { styles.colourriot++ };
		if ($(this).attr('data-style') == 'minimalist') { styles.minimalist++ };
	})
	
	/*
	$('#email form button').on('click', function() {
		if(whichStyle(styles) == 'modernfeminine') { $('#result').css({background: '#ebd8de'}); }
		if(whichStyle(styles) == 'urban') { $('#result').css({background: '#b0b6a7'}); }
		if(whichStyle(styles) == 'colourriot') { $('#result').css({background: '#b7d9dc'}); }
		if(whichStyle(styles) == 'minimalist') { $('#result').css({background: '#e0dddc'}); }
		setTimeout(function() {window.location.href = whichStyle(styles)+".html"}, 4200);
	});
	*/
	
	
	function whichStyle(styles) {
	
	    var max = -Infinity; // calling Math.max with no arguments returns -Infinity
	    var chosenStyle = null;
	    for (var key in styles) {
	       var num = styles[key];
	
	       if (num > max) {
	           max = num;
	           chosenStyle = key;
	       }
	
	       max = (num > max && num) || max;
	    }
	
	    return chosenStyle;
	}

    $('form').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert('error');
            } else { // 200
	            window.location.href = '#result';
                if(whichStyle(styles) == 'modernfeminine') { $('#result').css({background: '#ebd8de'}); }
				if(whichStyle(styles) == 'urban') { $('#result').css({background: '#b0b6a7'}); }
				if(whichStyle(styles) == 'colourriot') { $('#result').css({background: '#b7d9dc'}); }
				if(whichStyle(styles) == 'minimalist') { $('#result').css({background: '#e0dddc'}); }
				setTimeout(function() {window.location.href = whichStyle(styles)+".html"}, 4200);
            }
        });
    });
	
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