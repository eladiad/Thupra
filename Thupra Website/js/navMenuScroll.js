$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("header__holder__scroll");
    } else {
       $(".header").removeClass("header__holder__scroll");
    }
});