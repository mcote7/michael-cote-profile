export function onRoute() {
  const cote = document.getElementById("cote").scrollHeight;
  // console.log("scroll height",cote)
  window.scrollTo({top: 0});
  setTimeout(()=> {
    window.scrollTo({top: cote, behavior: 'smooth'});
  }, 500);
}
