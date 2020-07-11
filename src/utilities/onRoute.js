export function onRoute() {
  const height = document.body.scrollHeight;
  window.scrollTo({top: 0});
  setTimeout(()=> {
    window.scrollTo({top: height, behavior: 'smooth'});
  }, 100);
}
