import '../scss/style.scss';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// library.add(faUser);
// dom.watch();    
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";


const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.c-mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

    
import '../../node_modules/slick-carousel/slick/slick.css';

import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){

    function equalizeCardHeights() {
        var maxHeight = 0;
    
        // Reset all cards to auto height to get the natural height
        $('.tcard').height('auto');
    
        // Find the tallest card
        $('.tcard').each(function() {
            var thisHeight = $(this).outerHeight();
            if (thisHeight > maxHeight) { maxHeight = thisHeight; }
        });
    
        // Set all cards to the tallest height
        $('.tcard').height(maxHeight);
    }

    $(window).resize(function() {
        equalizeCardHeights();
    });
    
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 5,
        infinte: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

