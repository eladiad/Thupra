var $onTop = $('#onTop');
    $(document).scroll(function() {
        if($(this).scrollTop()> 500)
        {   //alert("scop");
     //  $onTop.css({display: $(this).scrollTop() > 100? "block":"none"});
         $('#onTop').css("opacity", "1");
        }else{
             $('#onTop').css("opacity", "0");
        }

    });