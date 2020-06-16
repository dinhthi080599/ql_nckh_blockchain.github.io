	
	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }

	$(document).ready(function(){
		// var hsaw = $('.hsaw');
		// $.each(hsaw, function(index, value) {
		// 	setHeightSameAsWidth(value);
		// }); 
		setFullHeight($('.screen'));
		$( window ).resize(function() {
			setHeightSameAsWidth($('.hsaw'));
			setFullHeight($('.screen'));
		});
	});

	$('div.burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); } 
			else { closeMenu(); }
		
	});
	

	$('div.menu ul li a').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});		


	function openMenu(){
		$('.content').addClass('fullheight-xs');
		$('div.circle').addClass('expand');
		$('div.content').addClass('expand');
		
		$('div.burger').addClass('open');	
		$('div.burger').addClass('bg-white');	
		$('div.burger').removeClass('bg-light-blue');	
		$('div.x, div.y, div.z').addClass('collapse');
		$('.menu li').addClass('animate');
		
		setTimeout(function(){ 
			$('div.y').hide(); 
			$('div.x').addClass('rotate30'); 
			$('div.z').addClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);
		
		

	}
	
	function closeMenu(){
		$('.content').removeClass('fullheight-xs');
		$('div.burger').removeClass('open');	
		$('div.burger').removeClass('bg-white');	
		$('div.burger').addClass('bg-light-blue');		
		$('div.x').removeClass('rotate45').addClass('rotate30'); 
		$('div.z').removeClass('rotate135').addClass('rotate150');				
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		
		setTimeout(function(){ 			
			$('div.x').removeClass('rotate30'); 
			$('div.z').removeClass('rotate150'); 			
		}, 50);
		setTimeout(function(){
			$('div.y').show(); 
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);													
		
	}

	function setHeightSameAsWidth(element) {
		var cw = $(element).width();
		$(element).css({'height':cw+'px'});
	}

	function setFullHeight(element) {
		var height = screen.height;
		$(element).css({'height':height+'px'});
	}