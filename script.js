$(document).ready(function() {
				$("a").on('click', function(event) {
					if (this.hash !== "") {
						event.preventDefault();	
						var hash = this.hash;
						$('html, body').animate({
							scrollTop: $(hash).offset().top -66
						}, 800, function() {
							window.location.hash = hash;
						});
					}
				});
			});

$(document).ready(function() {
				$('.nav').on('click', 'li', function(){
					$('.nav li').removeClass('active');
					$(this).addClass('active');
				});
			});