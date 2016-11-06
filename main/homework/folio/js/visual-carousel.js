(function (global) {
  'use strict';

  function visualList() {
    var visual_con = document.querySelectorAll('.visual-style');
    var visual_list = document.querySelectorAll('.v-rolling>ul>li>a');
    console.log(visual_con);
    console.log(visual_list);
    visual_list[0].classList.add('v-list-active');
    var arrangement = [
    visual_list[0].onclick = function (){
      visual_con[0].style.marginLeft= "0";
      visual_con[1].style.marginLeft= "100%";
      visual_con[2].style.marginLeft= "200%";
      visual_list[0].classList.add('v-list-active');
      visual_list[1].classList.remove('v-list-active');
      visual_list[2].classList.remove('v-list-active');
      // console.log('1');
    },
    visual_list[1].onclick = function (){
      visual_con[0].style.marginLeft= "-100%";
      visual_con[1].style.marginLeft= "0";
      visual_con[2].style.marginLeft= "100%";
      visual_list[0].classList.remove('v-list-active');
      visual_list[1].classList.add('v-list-active');
      visual_list[2].classList.remove('v-list-active');
      // console.log('2');
    },
    visual_list[2].onclick = function (){
      visual_con[0].style.marginLeft= "-200%";
      visual_con[1].style.marginLeft= "-100%";
      visual_con[2].style.marginLeft= "0";
      visual_list[0].classList.remove('v-list-active');
      visual_list[1].classList.remove('v-list-active');
      visual_list[2].classList.add('v-list-active');
      // console.log('3');
    }
    ];


    function visualRolling() {
      var arrangement2 = [
          setTimeout(arrangement[1],5000),
          setTimeout(arrangement[2],8000),
          setTimeout(arrangement[0],11000),
      ];
    }
    setInterval(function() {visualRolling();}, 11000);
    visualRolling();
  }
  function visualCarousel() {
    visualList();
  }
  visualCarousel();
})(this);
