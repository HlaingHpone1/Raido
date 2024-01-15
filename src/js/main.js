import '../scss/style.scss';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// library.add(faUser);
// dom.watch();    
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

$(document).ready(function() {
    var maxHeight = 0;
    var $highestCard = null;

    $('.card').each(function() {
        var thisHeight = $(this).height();
        if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
            $highestCard = $(this);
        }
    });
});
