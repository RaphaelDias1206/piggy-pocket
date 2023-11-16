// Filter Js
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.post-box').show('1000');
        }
        else{
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    // Add active to btn
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass('active-filter');
    })


    //https://www.youtube.com/watch?v=gZHjMVE_e10
    //https://www.youtube.com/watch?v=-8VPSR_nG_Y&pp=ygUbd2Vic2l0ZSBodG1sIGNzcyBqYXZhc2NyaXB0
    //https://www.youtube.com/watch?v=3HGh2viixeo&pp=ygUsT25saW5lIEVkdWNhdGlvbiBXZWJzaXRlIGh0bWwgY3NzIGphdmFzY3JpcHQ%3D
    //Online Education Website html css javascript
});