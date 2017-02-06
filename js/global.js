$(function() {

$('.share').on('click', function() {
	$('#share').addClass('open');
	return false;
});

$('#share .close').on('click', function() {
	$('#share').removeClass('open');
	return false;
});

});