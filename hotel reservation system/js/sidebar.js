
const sidebar = document.querySelector('.sideMenu');
const off = document.querySelector('.sidebaroff');
const on = document.querySelector('.sidebaron');
const content = document.querySelector('.content')
function opensidebar(){


  sidebar.classList.remove('hide')
  content.style.marginLeft = "14rem";
  content.style.marginRight = "0rem";
  on.classList.add('hide')
  off.classList.remove('hide')
}


function closesidebar(){

  sidebar.classList.add('hide')
   content.style.marginLeft = "0rem";
   content.style.marginRight = "0rem";
  off.classList.add('hide')
 on.classList.remove('hide')
}