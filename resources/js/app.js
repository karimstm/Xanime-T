$(document).ready(function() {
              var owl = $('#header-carousel');
              owl.owlCarousel({
                loop: true,
                dots:false,
                nav:true,
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				responsive: true,
                autoplay:true,
                smartSpeed: 1000,
                autoplayHoverPause:true,
                responsive:{
                        0:{
                            items:5
                        },
                        600:{
                            items:5
                        },
                        1000:{
                            items:5
                        }
                    }
              });
                $('body').removeClass('lock');
    
    
    /*Change the sticky navbar*/
//    $('.js--section--popular').waypoint(function(direction) {
//       if(direction == "down")
//       {
//           setTimeout(function() {
//                $('nav').addClass('sticky');
//              }, 500);
//           
//       }else
//       {
//           setTimeout(function() {
//                $('nav').removeClass('sticky');
//              }, 500);
//       }
//    },{
//        offset: '5%'
//    });
//    
    //Check if navabar has extended class
    $(".menu-icon").click(function(){
        var searchgroup = ".top-menu-standard form.search-group";
        var menu = ".top-menu-standard > div > ul";
        if(!$(searchgroup).hasClass("extended") && !$(menu).hasClass("extended")){
            $(searchgroup).addClass("extended");
            $(menu).addClass("extended");
        }else {
            
            $(searchgroup).removeClass("extended");
            $(menu).removeClass("extended");
        }
    })
    
    $('#carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});