$(function(){

  $('.menu-item').hover(function(){
      $(this).find(".menu-title").css("top", $(this).find(".menu-icon").position().top).fadeIn();
  }, function(){
      $(this).find(".menu-title").hide();
  });

  $('.main-menu').scroll(function(){
    $(this).find(".menu-title").hide();
  });

  $('.menu-item').on("click", function(){
    var $menuItem = $(this);
    $('.menu-item').removeClass("active");
    $menuItem.addClass('active').closest(".main-container").attr("data-color", $menuItem.attr("data-color"));
    $('.page').hide();
    $($menuItem.attr('data-page')).show(200);
  });
  $($('.menu-item')[0]).trigger("click");

});
