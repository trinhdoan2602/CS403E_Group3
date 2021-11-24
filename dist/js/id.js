
$(function(){ 
    // bắt đầu hàm click vào menu mon
    var taikhoan = document.getElementsByClassName('inputtk');
    var matkhau = document.getElementsByClassName('inputmk');
    var nutdn = document.getElementsByClassName('btndn');
    
    var x = document.getElementsByClassName('l1');
    var y = document.getElementsByClassName('l2');
    var z =document.getElementsByClassName('l3');
    var x1 = document.getElementsByClassName('list1');
    var y1 = document.getElementsByClassName('list2');
    var z1 =document.getElementsByClassName('list3');
    var menu = document.getElementsByClassName('menu');
    var goup = document.getElementsByClassName('goup');
    var btndn = document.getElementsByClassName('btndangnhap');
    var dn = document.getElementsByClassName('dangnhap');
    menu[0].classList.add('before_menu');
    // dn[0].classList.add('andn');
    x[0].classList.add('hienbg');
    y1[0].classList.add('anMenu');
    z1[0].classList.add('anMenu');
    x[0].onclick=function(){
        x1[0].classList.remove('anMenu');
        y1[0].classList.add('anMenu');
        z1[0].classList.add('anMenu');
        x[0].classList.add('hienbg');
        y[0].classList.remove('hienbg');
        z[0].classList.remove('hienbg');
    }   
    y[0].onclick=function(){
        console.log('tuoi song');
        y1[0].classList.remove('anMenu');
        x1[0].classList.add('anMenu');
        z1[0].classList.add('anMenu');
        y[0].classList.add('hienbg');
        x[0].classList.remove('hienbg');
        z[0].classList.remove('hienbg');
    }
    z[0].onclick=function(){
        // console.log('nuoc uong');
        z1[0].classList.remove('anMenu');
        x1[0].classList.add('anMenu');
        y1[0].classList.add('anMenu');
        z[0].classList.add('hienbg');
        y[0].classList.remove('hienbg');
        x[0].classList.remove('hienbg');
        
    }
    
    btndn[0].onclick=function(){
        // dn[0].classList.add('hiennut');
        dn[0].classList.remove('andn');
        
    }
    //nút đăng nhập trong form
    nutdn[0].onclick=function(){
        // dn[0].classList.add('hiennut');
        var username = document.getElementById('inputtk');
        var password = document.getElementById('inputmk');
        var tk = username.value;
        var mk = password.value;
        // console.log(tk);
        // console.log(mk);
        if(tk == 'admin' && mk == 'admin'){
            
            console.log("dang xuan chien");
        }

        btndn[0].classList.add('andn');
       
    }
    $('.goup').click(function () { 
        // console.log("chien222");
        $("html,body").animate({scrollTop:0},1500); 
        // btndn[0].classList.add('hiennut');
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

