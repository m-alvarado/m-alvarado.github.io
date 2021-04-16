$('ul.tabs li a:first').addClass('activar');
$('.secciones article').hide();
$('.secciones article:first').show();

$('ul.tabs li a').click(function(){
	$('ul.tabs li a').removeClass('activar');
	$(this).addClass('activar');
	$('.secciones article').hide();

	var activetab = $(this).attr('href');
	$(activetab).show();
	return false;
});

$('.pest-small ul li a:first').addClass('activar');
$('.secciones article').hide();
$('.secciones article:first').show();

$('.pest-small ul li a').click(function(){
	$('.pest-small ul li a').removeClass('activar');
	$(this).addClass('activar');
	$('.secciones article').hide();

	var activetab = $(this).attr('href');
	$(activetab).show();
	return false;
});