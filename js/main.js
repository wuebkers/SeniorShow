$(document).ready(function() {
    $('#fullPage').fullpage({
    	//Navigation
        menu: '#myMenu',
        anchors:['home', 'ab', 'ch', 'im', 'mp', 'pv', 'vy'],
        navigation: false,
        navigationPosition: 'right',
        slidesNavigation: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        resize : false,
        verticalCentered: false,
        fixedElements: '#header',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        onSlideLeave: function(anchorLink, index, slideIndex, direction){
            $('.active .fp-slidesNav li span').removeClass('darken');
            var i;
            for (i = slideIndex; i < 8; i++) {
                $('.active .fp-slidesNav li:nth-child(' + i + ') span').addClass('darken');
            };
        },
        afterLoad: function(){
            $('.visible').removeClass('visible');
            $('.active .fp-slidesNav').addClass('visible');
        },
        onLeave: function(){
            $('.visible').removeClass('visible');
        }
    });
});
/*
$('.bottom-panel').on('show.bs.collapse', function () {
    //$(this).addClass('toggled-in')
    $(this).animate({
        opacity: 1,
    }, 300);
});

$('.bottom-panel').on('hide.bs.collapse', function () {
    $(this).animate({
        opacity: 0,
    }, 300);
})
*/

function divHeight (){
    var viewHeight = $(window).height();
    $('.bottom-panel div').css('height', viewHeight);
}

$(document).ready(divHeight);
$(window).resize(divHeight);











