export const navBarCollapseTransition = () => {

  const navbar_Collapse = document.getElementById("navbarText");
  const navbar_Main = document.getElementById("myNavbar");
  
  if(navbar_Main !== null && navbar_Collapse !== null && [...navbar_Collapse.classList].includes("show")) {
    navbar_Main.animate([
      {opacity: 1, filter: 'blur(0px)', bottom: '0px'},
      {opacity: 0, filter: 'blur(12px)', bottom: '-420px'},
    ], {
      delay: 750,
      duration: 750
    });
    setTimeout(() => {
      navbar_Main.style.opacity = 0;
      navbar_Collapse.classList.remove("show");
    }, 1500);
    navbar_Main.animate([
      {opacity: 0, filter: 'blur(12px)', bottom: '-80px'},
      {opacity: 1, filter: 'blur(0px)', bottom: '0px'},
    ], {
      delay: 1750,
      duration: 500
    });
    setTimeout(() => {
      navbar_Main.style.opacity = 1;
    }, 2250);
  }
};