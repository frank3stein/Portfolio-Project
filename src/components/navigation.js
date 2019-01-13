import navBarBuild from '../builders/listBuilderUl';

const navigationArray = ['Home', 'About', 'Skills', 'Places', 'Etc'];

const Navigation = function(navHTMLElement){
  navBarBuild(navigationArray, navHTMLElement);
};

export default Navigation;