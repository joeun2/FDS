(function (global,$) {
  'use strict';

  function menuToggle(){

    // if () {
    //   $( "#profile-btn" ).on( "click", function() {
    //     // $("#profile-toggle").toggleClass("profile-menu-active",1000);
    //     $( "#profile-toggle" ).animate({
    //         height: "0",
    //         opacity: 1,
    //       }, 600 );
    //   });
    // }else {
    //   $( "#profile-btn" ).on( "click", function() {
    //     $( "#profile-toggle" ).animate({
    //         height: "126px",
    //         opacity: 1,
    //       }, 600 );
    //   });
    //   return true;
    // }

  // $( "#profile-btn" ).on( "click", function() {
  //   $( "#profile-toggle" ).animate({
  //        height: "126px",
  //        opacity: 1
  //   }, 600 );
  // });

  $( "#profile-btn" ).on( "click", function() {
    $( "#profile-toggle" ).toggleClass("profile-menu-active", 600 );
  });
}

  menuToggle();

})(this, this.jQuery);
