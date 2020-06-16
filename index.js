

	$(document).ready(function(){
		setFullHeight($('body'));
		setFullHeight($('#fullheight'));
        setHeight40($('.height40'));
		$( window ).resize(function() {
            setFullHeight($('body'));
			setFullHeight($('#fullheight'));
            setHeight40($('.height40'));
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
    

	function setHeight40(element) {
        var height = parseInt(screen.height)/100*43;
		$(element).css({'height':height+'px'});
    }
    