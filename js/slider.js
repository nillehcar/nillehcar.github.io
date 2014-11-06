 $(function () {

    $("#slider1").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider2").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "centered-btns"
    });
    
    $("#slider3").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider4").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider5").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "large-btns"
    });
    
    $("#slider6").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 600,
        namespace: "large-btns"
    });
    
    $("#slider7").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 400,
        maxwidth: 800,
        namespace: "centered-btns"
    });
   
});   

$("a[href='#top']").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
return false;
}); 
    
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1200);
            return false;
        }
    }
});
    
    
$(function() {
$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html,body').animate({
  scrollTop: target.offset().top
}, 1000);
return false;
}
}
});
});

  $(function() {
    $(".rslides").responsiveSlides();
  });
    