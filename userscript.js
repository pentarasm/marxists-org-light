// ==UserScript==
// @name        Background reading color for Marxist.org
// @match       https://www.marxists.org/*
// @version     1.1
// @author      Marco Dinozaur
// @description 3/4/2023, 8:27:32 PM
// ==/UserScript==

/*
  Good Background Colors for Readers:
  A Study of People with and without Dyslexia
  https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf

  #96ADFC - blue
  #DBE1F1 - blue grey
  #D8D3D6 - Grey
  #EDD1B0 - peach
  #F8FD89 - yellow
  #A5F7E1 - tourquouise
*/


function setBackgroundColor() {
  const body = document.querySelector("body");

  //schimba culoarea la background
  body.style.background = "#DBE1F1"; // - poti sa inlocuiesti HEX-ul din "" cu alta culoare
}

function hideScrollbar() {
  const style = document.createElement("style");

  document.head.append(style);
  style.sheet.insertRule(" html { scrollbar-width: none; } ");
}


setBackgroundColor();
hideScrollbar();
