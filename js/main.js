$(function() {
    
    $(window).load(function() {
        
        $("#status").fadeOut();
        
        $("#preloader").delay(100).fadeOut("slow");
    });


    $(".main").backstretch([
        "img/background.jpg",
        
    ], {
        fade: 750,
        duration: 4000
    });
});
