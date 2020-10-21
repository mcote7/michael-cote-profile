export function onRoute() {

  const main = document.getElementById("cote").scrollHeight;

  const nav = document.getElementById("myNavbar").scrollHeight;

  const result = main + nav;
    // console.log("scroll height", result)

  window.scrollTo({top: result, behavior: 'smooth'});
};
