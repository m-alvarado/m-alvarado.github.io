window.sr = ScrollReveal();
	tiempoDeEspera = 500;
	tiempoDeDistancia = 1000;
	distanciaArmado = "4.5rem";
	sr.reveal('.header', {
		duration: 1500,
		origin: 'bottom',
		distance: '-70px'
	});
	sr.reveal('.vol-expl-titulo',{
		delay: tiempoDeEspera,
		origin: 'right',
		distance: distanciaArmado,
		duration: 3000
	});
	sr.reveal('.ventajas-titulo',{
		delay: tiempoDeEspera,
		origin: 'left',
		distance: distanciaArmado,
		duration: 3000
	});
	tiempoDeEspera += tiempoDeDistancia;

	sr.reveal('.vol-expl-texto',{
		delay: tiempoDeEspera,
		origin: 'left',
		distance: distanciaArmado,
		duration: 3000
	});
	sr.reveal('.ventajas-texto',{
		delay: tiempoDeEspera,
		origin: 'right',
		distance: distanciaArmado,
		duration: 3000
	});
	tiempoDeEspera += tiempoDeDistancia;


	sr.reveal('.carrousel',{
		duration: 2000,
		origin: 'right',
		distance: '0.5rem'
	});

	sr.reveal('.jer-text',{
		duration: 2000,
		origin: 'lef',
		distance:'-1rem'
	});
