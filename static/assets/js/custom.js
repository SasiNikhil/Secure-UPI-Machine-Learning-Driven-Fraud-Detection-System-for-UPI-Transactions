(function($) {
	'use strict';

	/*====================
	Mean Menu JS
	======================*/
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	/*====================
	Menu Others Options JS
	======================*/  
	$(".nav-area .navbar-area .mobile-nav .dot-menu").on("click", function(){
		$(".nav-area .navbar-area .mobile-nav .container .container").toggleClass("active");
	});

	// Slider JS
	if ($('.slider-carousel').length) {

        $('.slider-carousel').owlCarousel({
            loop: true,
			margin: 0,
			nav: true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 5000,
            navText: [ '<span class="bx bx-chevron-left"></span>', '<span class="bx bx-chevron-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });

    }

	/*====================
	Hero Slider Wrap JS
	======================*/
	$('.hero-slider-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		mouseDrag:true,
		items:1,
		dots:false,
		autoHeight:true,
		autoplay: true,
		smartSpeed:800,
		autoplayHoverPause:true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
	});

	/*====================
	Preloader JS
	======================*/
    $(window).on('load', function (event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });
	
	/*====================
	Nice Select JS
	======================*/
	$('select').niceSelect();
	
	/*====================
	Header Sticky JS
	======================*/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	/*====================
	Partner Wrap JS
	======================*/
	$('.partner-wrap').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayHoverPause:true,
		mouseDrag:true,
		margin:0,
		center:false,
		dots:false,
		smartSpeed:1500,
		responsive:{
			0:{
				items:2
			},
			576:{
				items:3
			},
			768:{
				items:4
			},
			992:{
				items:5
			},
			1200:{
				items:5
			}
		}
	});
	
	/*====================
	Client Wrap JS
	======================*/
	$('.client-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive: {
			0:{
				items:1,
				margin: 10
			},
			576:{
				items:1,
				margin: 10
			},
			768:{
				items:2,
				margin: 20
			},
			992:{
				items:3,
				margin: 20
			},
			1200:{
				items:3,
				margin: 20
			}
		}
	});

	/*====================
	Product Wrap JS
	======================*/
	$('.product-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		responsive: {
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	Team Wrap JS
	======================*/
	$('.team-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		mouseDrag:true,
		items:1,
		dots:false,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
		responsive: {
			0:{
				items:1,
				margin: 10
			},
			576:{
				items:1,
				margin: 10
			},
			768:{
				items:2,
				margin: 20
			},
			992:{
				items:3,
				margin: 20
			},
			1200:{
				items:3,
				margin: 20
			}
		}
	});

	/*====================
	Blog Wrap JS
	======================*/
	$('.blog-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		navText: [
			"<i class='fa fa-arrow-left'></i>",
			"<i class='fa fa-arrow-right'></i>"
		],
		responsive: {
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});

	/*====================
	Service Wrap JS
	======================*/
	$('.service-wrap').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		mouseDrag:true,
		items:1,
		dots:true,
		autoHeight:true,
		autoplay:true,
		smartSpeed:1500,
		autoplayHoverPause:true,
		center:false,
		navText: [
			"<i class='fa fa-arrow-left'></i>",
			"<i class='fa fa-arrow-right'></i>"
		],
		responsive: {
			0:{
				items:1,
				margin: 10
			},
			576:{
				items:1,
				margin: 10
			},
			768:{
				items:2,
				margin: 20
			},
			992:{
				items:3,
				margin: 20
			},
			1200:{
				items:3,
				margin: 20
			}
		}
	});

	// Data Aos
	AOS.init({
		once: true,
		disable: function() {
			var maxWidth = 991;
			return window.innerWidth < maxWidth;
		}
	});

	/*====================
	Odometer JS
	======================*/
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	
	/*====================
	Go to Top JS
	======================*/
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	/*====================
	Click Event JS
	======================*/
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	/*====================
	FAQ Accordion JS
	======================*/
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	/*====================
	Count Time JS
	======================*/
	function makeTimer() {
		var endTime = new Date("november  30, 2024 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

	/*====================
	Animation JS
	======================*/
	new WOW().init();

	/*====================
	Tabs JS
	======================*/
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').fadeOut();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();
		g.preventDefault();
	});

	/*====================
	LTR & RTL JS
	======================*/
	$('.ltr-rtl-button .default-btn.ltr').on('click', function() {
		$("html").attr('dir', 'ltr');
	});

	$('.ltr-rtl-button .default-btn.rtl').on('click', function() {
		$("html").attr('dir', 'rtl');
	});

	/*====================
	Input Plus & Minus Number JS
	======================*/
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
	
	// Contact Form Script
	var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success Function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 6000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // Fail Function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 6000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
	
})(jQuery);
