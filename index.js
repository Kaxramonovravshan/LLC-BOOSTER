function openNav() {
  document.querySelector(".nav-media").style.top = "0px";
}
function closeNav() {
  document.querySelector(".nav-media").style.top = "-150%";
}

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("arrowIcon");
  const dropdown = document.getElementById("dropdown");

  const isOpen = menu.style.display === "block";

  if (isOpen) {
    menu.style.display = "none";
    icon.src = "./img/eva_arrow-up-fill.svg";
    dropdown.classList.remove("open");
  } else {
    menu.style.display = "block";
    icon.src = "./img/eva_arrow-up-fill.svg";
    dropdown.classList.add("open");
  }
}
