$(document).ready(function() {
    $('#fullPage').fullpage({
    	//Navigation
        menu: '#myMenu',
        anchors:['home', 'ab', 'ch', 'im', 'mp', 'pv', 'vy'],
        navigation: true,
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
        loopHorizontal: false,
        continuousVertical: true,
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

        onLeave:function(anchorLink, index){
            $('#fp-nav li span').removeClass('darken');
            console.log(index);
            var i;
            for (i = index; i < 8; i++) {
            $('#fp-nav li:nth-child(' + i + ') span').addClass('darken');
            
            };
        }
    });
});

