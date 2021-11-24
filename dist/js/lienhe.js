
$(function(){ 
    var menu = document.getElementsByClassName('menu');
    var goup = document.getElementsByClassName('goup');
    var btnup = document.getElementsByClassName('btnup');
    menu[0].classList.add('before_menu');

    $('.goup').click(function () { 
        $("html,body").animate({scrollTop:0},1500); 
    });
    // $(window).scroll(function(){
    window.addEventListener('scroll',function(){
        if($('html,body').scrollTop()>200){
            menu[0].classList.remove('before_menu');
            menu[0].classList.add('after_menu');
            goup[0].classList.add('hiennut');
        }
        else{
            menu[0].classList.add('before_menu');
            menu[0].classList.remove('after_menu');
            goup[0].classList.remove('hiennut');
            
        }
        })
},false)

