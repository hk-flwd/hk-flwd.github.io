'use strict';

{
    // hamburger menu
    $('.btn').on('click', function () {

        $('.btn').toggleClass('closed');
        $('.menu-open').toggleClass('active');

    });

    $('.nav__item a').on('click', function(){

        $('.btn').toggleClass('closed');
        $('.menu-open').toggleClass('active');

    });


    // loading
    $('.mainVisual--bg').addClass('animated');

    $('.mainVisual--top, .mainVisual--title').delay(700).queue(function(){
        $(this).addClass('animated').dequeue();
    })

    // item fadeIn
    $(window).on('load scroll', function(){

        $('.fadeIn').each(function(){

            const boxOffset = $(this).offset().top;
            const scrollPos = $(window).scrollTop();

            const wh = $(window).height();

                if(scrollPos > boxOffset - wh * 5 / 7){
                $(this).addClass('animated');

            }

        });

    });

    // slick
    $('.slider-pc').slick({

        autoplay: true,       
        dots: false,            
        infinite: true,         
        pauseOnHover: false,    
        arrows: false,
        centerMode:true,
        centerPadding:"12.7%",

    })

    $('.slider-sp').slick({

        autoplay: true,         
        dots: false,            
        infinite: true,         
        pauseOnHover: false,    
        arrows: false,

    })
    
}

// {
//     // loading
//     $('.loader').fadeIn(400);

//     $(window).on("load", function () {

//         $(".loader-bg").delay(1000).fadeOut(400);

//       });
      
//       setTimeout("stoploading()", 5000);
//       function stoploading() {
//         $(".loader-bg").fadeOut(600);

//     }



//     // accordion menu
//     $(function() {

//         $('.menu__subCategoryName').click(function() {

//             $(this).next('.menu__subCategoryBox').stop().slideToggle().parent().toggleClass('open');
//             $(this).parent().siblings().find('.menu__subCategoryBox').slideUp().parent().removeClass('open');

//         });
        
//     });

//     // how-to slick
//     $(function() {
//         $('.how-to-slider').slick({
//             infinite: true,
//             dots: true,
//             arrows: false,
//         });
//     });

//     // news slick
//     $('.ym-slider').slick({
//         asNavFor:'.news-slider',
//     })

//     $('.news-slider').slick({
//         draggable:false,
//         swipe: false,
//         arrows:false,
//         adaptiveHeight: true,
//     })

//     // news item
//     $('.ym__2024-12').on('click', function() {
//         $('.news__item').hide();
//         $('.news__2024-12').fadeIn();
//     });

//     $('.ym__2024-11').on('click', function() {
//         $('.news__item').hide();
//         $('.news__2024-11').fadeIn();
//     });

//     $('.ym__2024-10').on('click', function() {
//         $('.news__item').hide();
//         $('.news__2024-10').fadeIn();
//     });

//     // menuText
//     $(function() {
//         $('.menuText-slider').slick({
//             infinite: true,
//             dots: true,
//             arrows: false,
//             vertical: true,
//             verticalSwiping: true,
//         });

//         $('.menu__itemBox').click(function () {
//             $('.menuText-slider').slick('setPosition');
//         });
//     });

//     // menu-detail item

//     $('.gin-tonic-a').on('click', function() {
//         $('.menu-detail__bg').fadeIn();
//         $('.gin-tonic-b').fadeIn();
//     });

//     $('.gimlet-a').on('click', function() {
//         $('.menu-detail__bg').fadeIn();
//         $('.gimlet-b').fadeIn();
//     });

//     $('.izanagi-a').on('click', function() {
//         $('.menu-detail__bg').fadeIn();
//         $('.izanagi-b').fadeIn();
//     });

//     $('.gin-coke-a').on('click', function() {
//         $('.menu-detail__bg').fadeIn();
//         $('.gin-coke-b').fadeIn();
//     });

//     $('.menu-detail__btn').on('click', function() {
//         $('.menu-detail__bg').fadeOut();
//         $('.menu-detail__item').fadeOut();
//     });

// }




