$(function() {

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
	$('#style').text(whichStyle(styles));
})


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


});