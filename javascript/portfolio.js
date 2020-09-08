$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if(scroll > 500){
	  	$(".navbar").css({"opacity" : 0.8});
	  }
	  else{
	  	$(".navbar").css("background", "black");
	  }
  });
});


$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('body').scrollspy({ target: '#navs' });
