/*$(document).ready(function(){
    $(.hamburger-manu).on('click',function(e){
    $('body').toggleclass(manu-show)
    })
})
*/

$(document).ready(function(){
    function footer(){
        var tl = new TimelineMax() ;
        tl.from($('#copyright') , 2 , {
            alpha:0 
        });
    }
    function init(){
        footer();
    }

    init();
});