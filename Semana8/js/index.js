'use strict';
//import { fetchReadElliotGaramendi } from './services/fetchApi.js';
import header from './header.js';
import profile from './profile.js';
/*import experiences from './experiences.js';
import projects from './projects.js';
import skills from './skills.js';
import footer from './footer.js'; */

const documentReady = async () => {
  //const elliotgaramendiData = await fetchReadElliotGaramendi();
  header();
  const fetchApi = async () =>{
    console.log('Inicio fetch');
    const response = await fetch ('http://127.0.0.1:5500/Semana8/json/bryandelacruz.json');
    const data = await response.json();
    console.log(data);
    console.log('Fin fetch');
    profile(data);
  };

  console.log('Inicio');
  fetchApi();
  console.log('Fin');
  
/*   profile(elliotgaramendiData);
  experiences(elliotgaramendiData);
  projects(elliotgaramendiData);
  skills(elliotgaramendiData);
  footer(elliotgaramendiData); */
};

document.addEventListener('DOMContentLoaded', documentReady);