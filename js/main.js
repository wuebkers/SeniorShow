$(document).ready(function() {
    $('#fullPage').fullpage({
    	//Navigation
        menu: '#myMenu',
        anchors:['home', 'ab', 'ch', 'im', 'mp', 'pv', 'vy'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

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
    });
});


$(document).ready(function() {
    if($('fp-nav ul li:nth-child(2)').hasClass('.active'))
    {
        $('fp-nav ul li:nth-child(1) span').css('background', '$dark');    
    }else{
        $('fp-nav ul li:nth-child(1) span').css('background', '$light');
    }
    
});
$(document).ready(function() {
    if($('fp-nav ul li:nth-child(3)').hasClass('.active'))
    {
        $('fp-nav ul li:nth-child(1) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(2) span').css('background', '$lightFaded');    
    }else{
        $('fp-nav ul li:nth-child(1) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(2) span').css('background', '$dark');
    }
    
});
$(document).ready(function() {
    if($('fp-nav ul li:nth-child(4)').hasClass('.active'))
    {
        $('fp-nav ul li:nth-child(1) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(2) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(3) span').css('background', '$lightFaded');    
    }else{
        $('fp-nav ul li:nth-child(1) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(2) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(3) span').css('background', '$dark');
    }
    
});
$(document).ready(function() {
    if($('fp-nav ul li:nth-child(5)').hasClass('.active'))
    {
        $('fp-nav ul li:nth-child(1) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(2) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(3) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(4) span').css('background', '$lightFaded');    
    }else{
        $('fp-nav ul li:nth-child(1) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(2) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(3) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(3) span').css('background', '$dark');
    }
    
});
$(document).ready(function() {
    if($('fp-nav ul li:nth-child(6)').hasClass('.active'))
    {
        $('fp-nav ul li:nth-child(1) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(2) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(3) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(4) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(5) span').css('background', '$lightFaded');    
    }else{
        $('fp-nav ul li:nth-child(1) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(2) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(3) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(4) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(5) span').css('background', '$dark');
    }
    
});
$(document).ready(function() {
    if($('fp-nav ul li:nth-child(7)').hasClass('.active'))
    {
        $('fp-nav ul li:nth-child(1) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(2) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(3) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(4) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(5) span').css('background', '$lightFaded');
        $('fp-nav ul li:nth-child(6) span').css('background', '$lightFaded');    
    }else{
        $('fp-nav ul li:nth-child(1) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(2) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(3) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(4) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(5) span').css('background', '$dark');
        $('fp-nav ul li:nth-child(6) span').css('background', '$dark');
    }
    
});
