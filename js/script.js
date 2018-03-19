$(document).ready(function(){
				var $isotop = $('.portfolio__gallery').isotope({
					itemSelector: '.image',
					masonry: {
						columnWidth: '.image-sizer',
						gutter: '.gutter-sizer',
						horizontalOrder: true
					}
				});

				$('body').on('click', '.portfolio__link', function(e) {
					e.preventDefault();
					$('.portfolio__link').removeClass('active');
					$(this).addClass('active');
					var filter = $(this).attr('data-filter');

					filter = filter == '*' ? filter : '.' + filter;
					
					$isotop.isotope({ filter: filter });
				})

				$('body').on('click', '.toggle-nav', function(e) {
					e.preventDefault();
					$('body').toggleClass('nav-opened');
				});

				$('.slider').slick({
					arrows: false,
					dots:true,
					autoplay: true,
					infinite: true,
					autoplaySpeed: 2000
				});

				$('body').on('click', '.scrollTo', function(e){
					e.preventDefault();
					var target = $(this).attr('href'),
						offset = Math.floor($(target).offset().top);
					console.log(offset);
					$('html').animate({
        				scrollTop: offset
        			}, 1000, function(){
        				$('body').toggleClass('nav-opened');
        				if (offset <= 0) {
        					$('.nav').removeClass('fixed');
        				} else {
        					$('.nav').addClass('fixed');
        				}
        			});
				})


				function fixNav() {
    			var $cache = $('.nav');
    			if ($(window).scrollTop() < 100) {
    			    $('.nav').removeClass('fixed');
   				} else {
    			  $('.nav').addClass('fixed');
    			}
   			
  				}
  				$(window).scroll(fixNav);
  				fixNav();

	})

				 function initMap() {
       				var center = {lat: 47.1013576, lng: 37.5483743};
        			var map = new google.maps.Map(document.getElementById('map'), {
        			  zoom: 16,
        			  center: center
        			});
        			var marker = new google.maps.Marker({
        			  position: center,
        			  map: map,
        			  icon: 'img/beetroot.svg',
				  	  animation: google.maps.Animation.DROP
        			});
     			}