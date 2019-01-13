import listBuilderUl from '../builders/listBuilderUl';

const skills = [
  'HTML',
  'Css',
  'JavaScript',
  'React',
  'Vue',
  'JQuery',
  'Knockout',
  'BootStrap',
  'Webpack',
  'Gulp',
  'Grunt',
  'npm',
  'Git',
  'Google Adwords',
  'Facebook Ads',
];

const buildSkills = function(htmlElement){
  listBuilderUl(skills, htmlElement);
};

export default buildSkills;

