window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrousel__lista'), {
		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: '.carrousel__indicadores',
  		arrows: {
    		prev: '.carrousel__anterior',
    		next: '.carrousel__siguiente'
    	},
	});
});