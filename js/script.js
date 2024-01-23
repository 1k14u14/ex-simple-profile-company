const dropMenu = document.querySelector("nav .dropmenu");
dropMenu.addEventListener("click", (e) => {
  const aside = document.querySelector("aside");
  aside.classList.toggle("dropExist");
});
