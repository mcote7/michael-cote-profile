export const navBarCollapseTransition = () => {

  const navbar_Collapse = document.getElementById("navbarText");
  const navbar_Main = document.getElementById("myNavbar");
  
  if(navbar_Main !== null && navbar_Collapse !== null && [...navbar_Collapse.classList].includes("show")) {
    navbar_Main.animate([
      {opacity: 1, transform: 'translateY(0px)'},
      {opacity: 0, transform: 'translateY(420px)'},
    ], {
      delay: 750,
      duration: 750
    });
    setTimeout(() => {
      navbar_Main.style.opacity = 0;
      navbar_Collapse.classList.remove("show");
    }, 1500);
    navbar_Main.animate([
      {opacity: 0, transform: 'translateY(80px)'},
      {opacity: 1, transform: 'translateY(0px)'},
    ], {
      delay: 1750,
      duration: 501
    });
    setTimeout(() => {
      navbar_Main.style.opacity = 1;
    }, 2250);
  }
};
