// this is jQuery
jQuery( document ).ready(function() {

// language toggle
	function language() {
	    if (lang === 'EN') {
	    	$('.lang-en').show();
	    	$('.lang-si').hide();

	    	$('#tombola').parent().css('margin-top', '60px');
	    } else if (lang = 'SI') {
	    	$('.lang-en').hide();
	    	$('.lang-si').show();

	    	$('#tombola').parent().css('margin-top', '0');
	    }
	}

	language();

	$('#language-toggle li a').click(function(){
		language();

		$('#language-toggle li a').css('font-weight', 'normal');
		$(this).css('font-weight', 'bold');
	});
		
// mobile menu

	$('.close').click(function(){
		$('nav').hide();
		$('.navigacija').css('height', 'unset');
	});

	$('.menu').click(function(){
		$('nav').show();
		$('.navigacija').css('height', '100vh');
	});

	$('#language-toggle #activate').click(function(){
		$('.lang-menu').toggle();
	});

});