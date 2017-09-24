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
        tl.from($('#copyright') , 2 , {
            alpha:0 
        });
    }

    // 網頁載入一開始要做的動作
    function init(){
        footer();
    }

    init();
});