$(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 960) {
        $(".p1").addClass("breakLine");
        $('.breakLine > span:not(:last-of-type)').before('<br/>');
    }
    else {
        $(".p1").removeClass("breakLine");
    }
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 960) {
        $(".p1").addClass("breakLine");
    }
 });
 $('.breakLine > span:not(:last-of-type)').before('<br/>');
