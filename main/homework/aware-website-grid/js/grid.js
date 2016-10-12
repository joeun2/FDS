var container = document.querySelector('.container');
var toggle_grid = document.querySelector('.btn-toggle-grid');

function toggleGrid() {
  var current_class = container.getAttribute('class');

  if(current_class.indexOf('show-grid') == -1) {
    container.setAttribute('class', current_class + ' show-grid');
  } else {
    var removed_class = current_class.replace('show-grid', ' ').trim();
    container.setAttribute('class', removed_class);
  }
}

toggle_grid.onclick = toggleGrid;
