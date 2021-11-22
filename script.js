$(document).ready(function(){

	$(window).scroll(function(){
		/*For navbar*/
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	});
		/*For Hamburger menu*/
	$('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

	/*For carousel*/
	$('.carousel').owlCarousel({
		margin:20,
		loop:true,
		autoplay: true,
		autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
	});
});