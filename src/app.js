import './css/styles.css';
import Navigation from './components/navigation';
import Skills from './components/skills';

const header = document.getElementsByTagName('HEADER');
const body = document.getElementsByTagName('BODY');
const skills = document.getElementById('skills');
const nav = document.getElementById('navigation');
const p = document.createElement('p');


Navigation(nav);
Skills(skills);

p.innerHTML = 'Hello there third time, this time from app.js';
document.body.append(p);
