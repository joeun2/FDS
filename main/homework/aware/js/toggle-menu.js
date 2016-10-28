var btn_menu = document.querySelector('.btn-menu');
var toggle_btn = document.querySelector('.toggle-btn');
var btn_menu_box_on = document.querySelector('.btn-menu-box-on');
var btn_menu_box_off = document.querySelector('.btn-menu-box-off');
var toggle_btn_view = document.querySelector('.toggle-btn-view');

console.log(btn_menu);
console.log(toggle_btn);
console.log(btn_menu_box_on);
console.log(btn_menu_box_off);

var toggle_menu_click = false;
toggle_btn.onclick = toggleMenuClick;

function toggleMenuClick(){
  if(toggle_menu_click === true){
    console.log('true');
    toggle_menu_click = false;
    toggle_btn_view.classList.add('btn-menu-box-off');
    toggle_btn_view.classList.remove('btn-menu-box-on');
  }else{
    console.log('false');
    toggle_menu_click = true;
    toggle_btn_view.classList.remove('btn-menu-box-off');
    toggle_btn_view.classList.add('btn-menu-box-on');
  }
}
