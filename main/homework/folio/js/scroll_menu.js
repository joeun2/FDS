(function (global) {
    'use strict';

    function scrollOn() {
      var nav_active  = document.querySelector('nav');
      var gnb_active  = document.querySelector('.gnb');
      var logo_active = document.querySelector('.logo-btn');
      // var scrolly     = window.scrollY;
      var main        = document.querySelector('main');
      console.log('main',main);
      // console.log('nav_active',nav_active);
      // console.log('gnb_active',gnb_active);
      // console.log('logo_active',logo_active);
      // console.log('scrolly',scrolly);

    window.onscroll =  function(){

      var scrollY = this.scrollY || this.scrollTop;

        if (scrollY > 0) {
          nav_active.classList.add('nav-active');
          gnb_active.classList.add('gnb-active');
          logo_active.classList.add('logo-active');
          console.log('on');

        }else{
          nav_active.classList.remove('nav-active');
          gnb_active.classList.remove('gnb-active');
          logo_active.classList.remove('logo-active');
          console.log('off');
      }
    };




    }


    function scrollEventMenu() {
      scrollOn();
    }
    scrollEventMenu();

})(this);
