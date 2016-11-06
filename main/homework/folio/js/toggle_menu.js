(function (global) {
  'use strict';

  function menuBtnActive(){
    var menu_btn = document.querySelector('.menu-btn-a');
    var logo = document.querySelector('.logo-btn');
    var gnb = document.querySelector('.gnb');
    menu_btn.onclick=function(){
      if ( menu_btn.classList.contains('menu-btn-active'),logo.classList.contains('logo-active'),gnb.classList.contains('gnb-active')) {
        menu_btn.classList.remove('menu-btn-active');
        logo.classList.remove('logo-active');
        gnb.classList.remove('gnb-active');
        console.log('off');
      }else{
        menu_btn.classList.add('menu-btn-active');
        logo.classList.add('logo-active');
        gnb.classList.add('gnb-active');
        console.log('on');
      }
    };
    console.log(menu_btn);
    console.log(logo);
    console.log(gnb);
  }

  function menuToggle() {
    menuBtnActive();
  }
menuToggle();
})(this);
