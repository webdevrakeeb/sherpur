$(document).ready(function(){
    $(".my_nav").slicknav({
        "prependTo":".res_menu"
    });


    $(".area_slider").owlCarousel({
        items : 4,
        margin : 10,
        autoplay : true,
        autoplayTimeout:3000,
        loop:true,
        smartSpeed:1000,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0 :{
                items:1,
            },
            401 :{
                items: 2

            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
  });