$(document).ready(function() {
              var owl = $('.owl-carousel');
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
    $('.js--section--popular').waypoint(function(direction) {
       if(direction == "down")
       {
           setTimeout(function() {
                $('nav').addClass('sticky');
              }, 500);
           
       }else
       {
           setTimeout(function() {
                $('nav').removeClass('sticky');
              }, 500);
       }
    },{
        offset: '5%'
    });
    
    
    
//    var waypoints = $('.js--section--popular').waypoint(function(direction) {
//      notify(this.element.id + ' hit 25% from top of window') 
//    }, {
//      offset: '25%'
//    })
});