/*$(document).ready(function(){
    $(.hamburger-manu).on('click',function(e){
    $('body').toggleclass(manu-show)
    })
})
*/

$(document).ready(function(){
    // 底部動畫
    function footer(){
        var tl = new TimelineMax() ;
        tl.from($('#js-copyright') , 2 , {
            alpha:0 
        });
    }

    // 網頁載入一開始要做的動作
    function init(){
        footer();
    }

    init();
});

//大頭照動畫
$(document).ready(function(){
    function headshot(){
        var tl2 = new TimelineMax();
        tl2.from($('#js-logo') , 1 , {
            scaleX:0.5,
            scaleY:0.5,
            ease: Back.easeInOut
        });



    }
    function init(){
        headshot();
    }

    init();
});

$(document).ready(function(){
    function info(){
        var myResume = new SplitText(".info",{type:"words,chars"});
        TweenMax.staggerFrom(myResume.chars, 0.5 , {opacity:0, rotation:-180 ,ease: Back.easeInOut} , 0.02)
    }
    function init(){
        info();
    }
    init();
});


var profile = $("#js-profile");
$(document).scroll(function(e) {
    if($(this).scrollTop() > $("#js-banner").height()) {
        profile.css({"position" : "fixed", "top" : "0","right" : "0"});
    } else {
        profile.css("position", "relative");
    }
});