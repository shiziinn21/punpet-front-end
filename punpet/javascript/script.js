$(document).ready(function() {
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });


  $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
    if (this.hash !== "") { 
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){ 
        window.location.hash = hash; 
      });
    } 
  }); 
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop(); 
    var sections = $('section'); 
    var navItems = $('#nav_list li, #mobile_nav_list li'); 
    var headerHeight = $('header').outerHeight(); 

    sections.each(function() { 
      var sectionTop = $(this).offset().top - headerHeight; 
      var sectionBottom = $(this).offset().top + $(this).outerHeight() - headerHeight; 

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var sectionId = $(this).attr('id'); 
        navItems.removeClass('active'); 
        navItems.find('a[href="#' + sectionId + '"]').parent().addClass('active'); 
      }
    });

    var produtosTop = $('#produtos').offset().top;
    var produtosBottom = $('#produtos').offset().top + $('#produtos').outerHeight();

    if (scrollPosition >= produtosTop && scrollPosition < produtosBottom) {
      navItems.removeClass('active'); 
      navItems.find('a[href="#produtos"]').parent().addClass('active'); 
    }
  });
  $('#cta_buttons a[href="#servicos"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#servicos').offset().top
    }, 400); 
  });
$(window).on('scroll', function() {
  $('.section-subtitle, .section-title, .title').each(function() {
    var sectionTop = $(this).offset().top;
    var windowTop = $(window).scrollTop();

    if (windowTop >= sectionTop - 200) { 
      $(this).addClass('active');
    }
  });
});
});