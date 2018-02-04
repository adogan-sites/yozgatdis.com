/*
    Project Name : Diamond
    Author Company : SpecThemes
    Project Date: 30 ogt, 2017
    Template Developer: vsafaryan50@gmail.com
*/


/*
==============================================
TABLE OF CONTENT
==============================================

1. Owl Carousels
2. CountUp
3. Pie Chart
4. Hover Drop Down
5. Tabs
6. Video Modal
7. Preloader
8. Scroll To Top
9. Isotop
10. WOW

==============================================
[END] TABLE OF CONTENT
==============================================
*/

"use strict";



$(document).ready(function() {

    /*------------------------------------
        1. Owl Carousel
    --------------------------------------*/


    /*---------------------
     Methods Carousel
    -----------------------*/

    $('#our-methods').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            600: {
                items: 2,
                margin: 15
            },
            1000: {
                items: 3,
                margin: 15
            }
        }
    })



    /*---------------------
    Gallery carousel
    -----------------------*/

    $('#gallery').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                margin: 15,
            },
            600: {
                items: 2,
                margin: 30,
            },
            1000: {
                items: 3,
                margin: 30,
            }
        }
    })


    /*------------------------------------
        2. CountUp
    --------------------------------------*/

    $('.countup').counterUp({
        delay: 5,
        time: 2000
    });


    /*------------------------------------
        4. Hover Drop Down
    --------------------------------------*/

    if ($(window).width() > 991) {
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
        });
    }


    /*------------------------------------
        7. Preloader
    --------------------------------------*/

    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });


    /*------------------------------------
        8. Scroll To Top
    --------------------------------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });



    /*------------------------------------
        11. AhmetDGN - Contact Form
    --------------------------------------*/

    $("#contact-form-main").submit(function(event) {
        var $contactForm = $("#contact-form-main");
        event.preventDefault();
        $.ajax({
            url: "https://formspree.io/eagletr@msn.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            beforeSend: function() {
                $contactForm.append('<div class="alert alert-info">Mesaj gönderiliyor…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert-info').hide();
                $contactForm.append('<div class="alert alert-success">Mesaj gönderildi!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert-info').hide();
                $contactForm.append('<div class="alert alert-danger">Mesaj gönderilirken bir sorun oluştu! Lütfen daha sonra tekrar deneyin ya da telefon numaramızı veya e-posta adresimizi kullanın.</div>');
            }
        });
    });

});