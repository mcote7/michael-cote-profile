export const onRoute = () => {
  const position = document.getElementById("routes");
  position.scrollIntoView({behavior: "smooth"});
  const navbar = document.getElementById("navbarText");
  setTimeout(() => {
    if(navbar !== null && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, 1000);
};