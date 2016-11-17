(function (global,$) {
  'use strict';

function aniScroll(){
  var scrollY = $( global ).scrollTop();
  var wheight = $( global ).height();
  console.log(scrollY);
  // console.log(wheight);

// for (var i = scrollY, l = 500; i < l; i++) {
//   console.log(i);

  if (true){
    $( "#ani-01" ).animate({
      right: "-272px",
      opacity: "1"
    }, 1000 );
    $( ".p-01-t-01" ).animate({
      opacity: "1"
    }, 1000 );
    $( ".p-01-t-02" ).animate({
      opacity: "1"
    }, 1000 );
  }else{
    $( "#ani-01" ).animate({
      right: "-472px",
      opacity: "0"
    }, 1000 );
    $( ".p-01-t-01" ).animate({
      opacity: "0"
    }, 1000 );
    $( ".p-01-t-02" ).animate({
      opacity: "0"
    }, 1000 );
  }
  // $( global ).scrollY( "click", function() {
  //   $( "#ani-01" ).animate({
  //     right: "-172px"
  //   }, 600 );
  // });
// }
}

  aniScroll();

})(this, this.jQuery);
