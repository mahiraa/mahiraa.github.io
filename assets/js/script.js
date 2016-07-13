jQuery(function($) {
    var divs = $('#welcome');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'margin-top' : 120 + (st/3)+"px", 
            
        }); 
    });
});


jQuery(function($) {
    var divs = $('#box1');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : 0 + st/500
            
        }); 
    });
});

jQuery(function($) {
    var divs = $('#box2');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : 0 + st/700
            
        }); 
    });
});

jQuery(function($) {
    var divs = $('#box3');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : 0 + st/900
            
        }); 
    });
});

jQuery(function($) {
    var divs = $('#box4');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : 0 + st/1100
            
        }); 
    });
});


