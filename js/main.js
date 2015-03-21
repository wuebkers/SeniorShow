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

        onSlideLeave: function(anchorLink, index){
            var getValue = index-2;
            //Pausing the video
            $('.slide.active video').get(getValue).pause();
        },
        onLeave: function(index, nextIndex){
            var getValue = index-2;
            //Pausing the video
            $('.slide.active video').get(getValue).pause();
        },
        afterLoad: function(slideAnchor, index){
            var getValue = index-2;
            //playing the video
            $('.slide.active video').get(getValue).play();
        },
        afterSlideLoad: function(anchorLink, index){
            var getValue = index-2;
            //playing the video
            $('.slide.active video').get(getValue).play();
        },

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











