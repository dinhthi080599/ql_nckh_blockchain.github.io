

	$(document).ready(function(){
		// setFullHeight($('body'));
		setMinHeight($('.body'));
		setFullHeight($('#fullheight'));
		setHeight40($('.height40'));
		setHeight50($('.height-md-50'));
		setHeight100($('.height-md-100'));
		$( window ).resize(function() {
            // setFullHeight($('body'));
			setMinHeight($('.body'));
			setFullHeight($('#fullheight'));
            setHeight40($('.height40'));
            setHeight50($('.height-md-50'));
            setHeight100($('.height-md-100'));
		});
		$('[data-toggle="slide-collapse"]').on('click', function() {
			$navMenuCont = $($(this).data('target'));
			$navMenuCont.animate({'width':'toggle'}, 280);
		});
		

		$('div.burger').on(click, function(){
			if( !$(this).hasClass('open') ){ openMenu(); } 
			else { closeMenu(); }
		});
	});

	function setFullHeight(element) {
		var height = screen.height;
		$(element).css({'height':height+'px'});
    }
	function setMinHeight(element) {
		var height = window.innerHeight;
		$(element).css({'min-height':height+'px'});
    }
    

	function setHeight40(element) {
        var height = parseInt(screen.height)/100*43;
		$(element).css({'height':height+'px'});
    }
	function setHeight50(element) {
		var height = parseInt(screen.height)/2;
		var width = screen.width;
		if(width > 992)
		$(element).css({'height':'50%'});
    }
	function setHeight100(element) {
		var height = parseInt(screen.height)/2;
		var width = screen.width;
		if(width > 992)
		$(element).css({'height':'100%'});
    }
    