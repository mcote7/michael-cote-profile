import { navBarCollapseTransition } from './navBarCollapseTransition';

export const onRoute = () => {
  
  const position = document.getElementById("routes");
  position.scrollIntoView({behavior: "smooth"});

  navBarCollapseTransition();

};