// window.onload = function() {
//   document.getElementById("profile-thumb").addEventListener("click", ccProfileMenu);
// }
window.addEventListener("load", function() {
  document.getElementById("profile-thumb").addEventListener("click", ccProfileMenu);
}, false);
function ccProfileMenu(e) {
  e.stopPropagation();
  if (document.getElementsByClassName("profile-menu")[0].classList[1]) {
    document.body.removeEventListener('click', ccProfileMenuHide, false);
  } else {
    document.body.addEventListener('click', ccProfileMenuHide, false);
  }
  document.getElementsByClassName("profile-menu")[0].classList.toggle("profile-menu-visible");
}
function ccProfileMenuHide(e) {
  e.stopPropagation();
  document.getElementsByClassName("profile-menu")[0].classList.toggle("profile-menu-visible");
  document.body.removeEventListener('click', ccProfileMenuHide, false);
}