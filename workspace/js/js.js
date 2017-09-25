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
        tl2.from($('#js-logo') , 3 , {
            scaleX:0.5,
            scaleY:0.5
        });



    }
    function init(){
        headshot();
    }

    init();
});