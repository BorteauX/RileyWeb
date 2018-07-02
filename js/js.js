/*$(document).ready(function(){
    $(.hamburger-manu).on('click',function(e){
    $('body').toggleclass(manu-show)
    })
})
*/

$(document).ready(function()
{
    // 底部動畫
    function footer()
    {
        var tl = new TimelineMax();
        tl.from($('#js-copyright'), 2,
        {
            alpha: 0
        });
    }

    //大頭照動畫
    function headshot()
    {
        var tl2 = new TimelineMax();
        tl2.from($('#js-logo'), 1,
        {
            scaleX: 0.5,
            scaleY: 0.5,
            ease: Back.easeInOut
        });

    }
   
   // 點LOGO 再跑一次動畫
    var logo = document.getElementById('js-logo');
    logo.onclick = function(){
        headshot();
        
    }
    




    function info()
    {
        var myResume = new SplitText(".info",
        {
            type: "words,chars"
        });
        TweenMax.staggerFrom(myResume.chars, 0.5,
        {
            opacity: 0,
            rotation: -180,
            ease: Back.easeInOut
        }, 0.02)
    }




    var profile = $("#js-profile");
    $(document).scroll(function() {
        var scrolltop = $(this).scrollTop();//螢幕卷軸的高度
        if($(this).scrollTop() > $("#js-banner").height()) {
            profile.css({"position" : "absolute", "right" : "0","top" : scrolltop-220});
        } else {
            profile.css({"position": "relative","top" : "0","right" : "0"});
        }
    });


    function init()
    {
        footer();
        headshot();
        info();
    }

    init();

});