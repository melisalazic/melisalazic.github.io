/* Navbar behaviour depending on Media Query */
$(window).bind("load resize", function changeMenu() {
    if ($(this).width() >= 768) {
        $('div.navbar-collapse').addClass('d-flex justify-content-evenly');
    } else {
        $('div.navbar-collapse').removeClass('show d-flex justify-content-evenly');
    }

});


/* Hamburger Trigger X */
$('.navTrigger, .nav-item').click(function animateX(){
    $(this).toggleClass('active');
});

/* Slide on Click to Anchor (Only on Anchor Links) */
$('.navbar-brand[href^="#"], .nav-link[href^="#"]').on('click',function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    // Reset X Hamburger
    $('.navTrigger').removeClass('active');
    
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});

$(document).ready(function() {
    $('.image-link').magnificPopup({
        type:'image',
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
        // For Animation
        mainClass: 'mfp-fade'
    });
});
/* This will create a single gallery from all elements that have class "gallery-item" */
$('.gallery-item').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true
    },
    removalDelay: 300, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click.
});

/* Animate Elements when scrolled to height by adding and removing classes (needs refinement) */
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden-right, .hidden-bottom, .hidden-fade');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= -50) {
            if (element.classList.contains('hidden-right')){
                element.classList.add('element-right');
                element.classList.remove('hidden-right');
            } else if (element.classList.contains('hidden-fade')) {
                element.classList.add('element-fade');
                element.classList.remove('hidden-fade');
            } else if (element.classList.contains('hidden-bottom')) {
                element.classList.add('text-animated-bottom');
                element.classList.remove('hidden-bottom');
            }
           
        }
        
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
})();

