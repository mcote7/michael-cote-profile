export function onRoute() {
  const cote = document.getElementById("cote").scrollHeight;
  // console.log("scroll height",cote)
  // window.scrollTo({top: 0});

  window.scrollTo({top: cote, behavior: 'smooth'});

  // setTimeout(()=> {
  //   window.scrollTo({top: cote, behavior: 'smooth'});
  // }, 500);

}
