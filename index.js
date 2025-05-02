function openNav() {
  document.querySelector(".nav-media").style.top = "0px";
}
function closeNav() {
  document.querySelector(".nav-media").style.top = "-100%";
}

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
