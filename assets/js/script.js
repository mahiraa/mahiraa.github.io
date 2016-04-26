$(document).ready(function() {
    
    
    $(window).scroll( function(){
    
        $('.fadeincontent').each( function(i){
            
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            
            
            if(bottom_window > bottom_object){
                
                $(this).animate({'opacity':'1'},2500);
                    
            }
            
        }); 
    
    });



    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
    



    $('.fade').hover(
        function(){
            $(this).find('.image-caption').fadeIn(250);
        },
        function(){
            $(this).find('.image-caption').fadeOut(250);
        }
    );

    $('.fade').hover(
        function(){
            $(this).find('.image-caption2').fadeIn(250);
        },
        function(){
            $(this).find('.image-caption2').fadeOut(250);
        }
    );
});