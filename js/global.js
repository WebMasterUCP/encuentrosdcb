$(document).ready(function(){

	$('#gen_cer').click(function(){
		if( $('#documento').val().length === 0 ) {
		alert('Por favor ingresa tu documento de identidad para continuar...');	
		} else {
			var documento = $('#documento').val().trim();
				$.ajax({
			url: './certificados/'+documento+'.pdf',
			type:'HEAD',
			error: function()
			{
				alert('El número de identificación ingresado no es válido o no existe en nuestra base de datos, por favor inténtelo nuevamente... Si el inconveniente persiste por favor contáctanos a través del correo cienciasbasicas@ucp.edu.co');
			},
			success: function()
			{
				 window.location.href = './certificados/'+documento+'.pdf';
			}
			});	
		}
	});

		$('.clock').fadeTo(0,0.5);
	$('.clock').hover(function(){
			$(this).stop().fadeTo('fast',0.8);
		}, function() {
			$(this).stop().fadeTo('fast',0.5);
	});
	




// Return today's date and time
var currentTime = new Date();
// returns the month (from 0 to 11)
var month = currentTime.getMonth() + 1;
// returns the day of the month (from 1 to 31)
var day = currentTime.getDate();
// returns the year (four digits)
var year = currentTime.getFullYear();
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(year,month,day);
var secondDate = new Date(2019,09,05);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

var clock = $('.clock').FlipClock(3600 * 24 * diffDays, {
		clockFace: 'DailyCounter',
		countdown: true
	});




$('.label').not('.labelprev').click(function(){
	var resumenurl = $(this).attr('data-resumen');
	if(resumenurl=='#')
	{
		alert('La información relacionada a esta ponencia estará disponible pronto.');
	} else {
		$('#resumenurl').attr('src', resumenurl);
	 	$('#resumenurl').load(function(){
        	$('#resumenpop').modal();
   		});
	}
});

/*
var clock = $('.clock').FlipClock(3600 * 24 * 122, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: false
	});*/

});