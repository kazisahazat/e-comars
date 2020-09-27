$(function () {
'use strict';    
    
    
    
    var windo = $(window);
    
    //Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click',function (){
        $('.navbar-collapse').collapse('hide');
    });






    //banner_slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots:true,
        autoplaySpeed: 2000,
    });



    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 25
                }, 1500, );
                return false;
            }
        }
    });


    
    

    //back-to-top
    var html_body = $('html, body');
    $('.back-top a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500, );
                return false;
            }
        }
    });






});