/*
 Template Name: Falix Ford
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */



$(document).ready(function () {
    typer();
    //Portfolio Modal
    $('.tv-open-popup-page').on('click', function () {
        var projectUrl = $(this).attr("href");
        $('.tv-top-fix-menu').removeClass('showx');
        $('.sidebar-menu').addClass('hidex');
        $('.content-blocks.popup').addClass('showx');
        $('.content-blocks.popup section').load(projectUrl)
        return false;
    });
    //On Click Open Menu Items
    $('.tv-menu-block, .menu-item').on('click', function () {
        $('.intro-block').addClass('reverse');
        $('.intro-block-container').addClass('reverse');
        $('.tv-menu-blocks').addClass('hidex');
        $('.tv-top-fix-menu').addClass('showx');
    });
    //On Click Open About/Resume Block
    $('.about-block, .menu-item.about').on('click', function () {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.about').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.about').addClass('active');
    });
    //On Click Open Portfolio Block
    $('.portfolio-block, .menu-item.portfolio').on('click', function () {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.portfolio').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.portfolio').addClass('active');
    });
    //On Click Open Blog Block
    $('.blog-block, .menu-item.blog').on('click', function () {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.blog').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.blog').addClass('active');
    });
    //On Click Open Contact Block
    $('.contact-block, .menu-item.contact').on('click', function () {
        $('.content-blocks').removeClass('showx');
        $('.content-blocks.contact').addClass('showx');
        $('.menu-item').removeClass('active');
        $('.menu-item.contact').addClass('active');
    });

    //On Click Close Blocks
    $('#close').on('click', function () {
        $('.intro-block').removeClass('reverse');
        $('.intro-block-container').removeClass('reverse');
        $('.content-blocks').removeClass('showx');
        $('.tv-menu-blocks').removeClass('hidex');
        $('.tv-top-fix-menu').removeClass('showx');
        $('.menu-item').removeClass('active');
    });
    //On Click Close Blog Post And Project Details
    $('#close-pop').on('click', function () {
        $('.content-blocks.popup').removeClass('showx');
        $('.sidebar-menu').removeClass('hidex');
        $('.tv-top-fix-menu').addClass('showx');
        $('.content-blocks.popup section').empty();
    });

    $('.tv-menu-block, .menu-item, #close').on('click', function () {
        $('.content-blocks').animate({scrollTop: 0}, 800);
    });

    //Function for 'Index-Menu2.html'
    $('#home').on('click', function () {
        $('.content-blocks').removeClass('showx');
        $('.menu-item').removeClass('active');
        $(this).addClass('active');

    });

    $masonry = $('.masonry');
    $masonry.imagesLoaded(function () {
        $('.masonry').masonry({
            // options
            itemSelector: '.grid-item',
            percentPosition: true
        });
    });

    var $imagePopup = $('[data-image-popup]');
    /*Image*/
    $imagePopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $('#testimonial').owlCarousel({
        nav: true,
        navText: [
            '<i class="ti-arrow-left"></i>',
            '<i class="ti-arrow-right"></i>'
        ],
        items: 1,
        navSpeed: 400,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });
});
function typer() {
    var win = $(window),
            foo = $('#typer');
    foo.typer(['<h2><span class="text-color-1">UI/UX</span> Designer</h2>', 
	'<h2 ><span class="text-color-1">Web</span> Designer</h2>', 
	'<h2><span class="text-color-1">HTML</span> Developer</h2>', 
	'<h2><span class="text-color-1">Graphic</span> Designer</h2>']);
}


/*==========================End====================================*/