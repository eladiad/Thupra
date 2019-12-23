$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("header__holder__scroll");
    } else {
       $(".header").removeClass("header__holder__scroll");
    }
    if($(window).scrollTop() > 100) {
        $(".main__img--thupra").addClass("main__img--thupra--animate");
    } else {
       $(".main__img--thupra").removeClass("main__img--thupra--animate");
    }
});