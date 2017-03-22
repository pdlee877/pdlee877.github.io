$(document).ready(function() {
    
    stickyNavigation();
    navigationScroll();
    hoverIconTextPopUp();
    mobileNavigationToggle();
    expandTelescopicText();
});



/* Stick navigation */
var stickyNavigation = function() {
    $('.js--section-about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
}; 

/* Navigation scroll */
var navigationScroll = function(){
    $(function() {
       $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }

       });
    });
};

/* Hover Text */
var hoverIconTextPopUp = function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-light'
    });
};


/* Mobile Navigation */
var mobileNavigationToggle = function() {
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClasS('ion-close-round');
        }
    });
};


var expandTelescopicText = function(){
    $(function() {
        $('.about-me-wrapper').expando();
    });  
};




