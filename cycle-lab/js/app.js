$(document).ready(function() {
    // Initialize Slideshow
    $('.slideshow').cycle({
        fx: 'fade',
        timeout: 3000,
        speed: 1000,
        pager: '#pager',
        pause: true
    });

    // Initialize Quote Rotator
    $('.quote-rotator').cycle({
        fx: 'shuffle',
        timeout: 4000,
        speed: 800,
        shuffle: {
            top: -25,
            left: 25
        }
    });

    // Initialize News Ticker
    $('.ticker ul').cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        speed: 500,
        easing: 'linear',
        pauseOnHover: true,
        nowrap: true
    });
});