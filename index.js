

	$(document).ready(function(){
		setFullHeight($('body'));
        setHeight40($('.content'));
		$( window ).resize(function() {
            setFullHeight($('body'));
            setHeight40($('.content'));
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
    