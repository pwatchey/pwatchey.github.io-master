/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}
			//paige's code 			
		
			
			var request = new XMLHttpRequest();
			request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=16686,us&appid=79ee2500390ebdf14d662caaf6e3e827&units=imperial', true);//tells you where to get the data
			request.onload = function() {
			  if (request.status >= 200 && request.status < 400) {
				// Success!
				var data = JSON.parse(request.responseText); //this is where the data gets parsed. data is your entire json object.
				var sunrise1 = new Date(data.sys.sunrise*1000); 	
				var sunset1 = new Date(data.sys.sunset*1000);
				var currenttemp = data.main.temp; 
				document.getElementById("weatherDescription").innerHTML = data.weather[0].description; //description 
				document.getElementById("cityname").innerHTML = data.name; 
				document.getElementById("weathericon").src = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
				document.getElementById("sunrise").innerHTML = sunrise1.getHours() + ":" + sunrise1.getMinutes(); 
				document.getElementById("sunset").innerHTML = sunset1.getHours() + ":" + sunset1.getMinutes();
				document.getElementById("currenttemp").innerHTML = "Current Temperature: "+currenttemp; 
				
				if(currenttemp < 32)
				{
					document.getElementById("colorblock").style.background = "#c4f2ef"; 
					document.getElementById("colorblock").style.color = "#291700";
					document.getElementById("currenttemp").style.background = "#c4f2ef";
					document.getElementById("currenttemp").style.color = "291700";
				}
				else if(currenttemp < 50)
				{
					document.getElementById("colorblock").style.background = "#6db6a6"; 
					document.getElementById("colortext").style.color = "#291700";
					document.getElementById("currenttemp").style.background = "6db6a6"; 
					document.getElementById("currenttemp").style.color = "#291700"; 
				}
				else if(currenttemp < 70)
				{
					document.getElementById("colorblock").style.background = "#ffdb00"; 
					document.getElementById("colortext").style.color = "#291700";
					document.getElementById("currenttemp").style.background = "#ffdb00"; 
					document.getElementById("currenttemp").style.color = "#291700"; 
				}
				else if(currenttemp < 90)
				{
					document.getElementById("colorblock").style.background = "#ff6d0a"; 
					document.getElementById("colortext").style.color = "#291700";
					document.getElementById("currenttemp").style.background = "#ff6d0a"; 
					document.getElementById("currenttemp").style.color = "#291700";
					
				}
				else
				{
					
					document.getElementById("colorblock").style.background = "#ff1a00"; 
					document.getElementById("colortext").style.color = "#000000";
					document.getElementById("currenttemp").style.background = "#ff1a00"; 
					document.getElementById("currenttemp").style.color = "#000000"; 
				}
				
				
				
			  } else {
				// We reached our target server, but it returned an error

			  }
			};

			request.onerror = function() {
			  // There was a connection error of some sort
			};

			request.send();
			 
			});

})(jQuery);
