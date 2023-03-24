/*
1. array con lista immagini
2. ciclo for per caricare tutte le immagini 
3. Rendere visibile la prima di default
*/

const listaImmagini = [
  'assets-slider/img/01.webp',
  'assets-slider/img/02.webp',
  'assets-slider/img/03.webp',
  'assets-slider/img/04.webp',
  'assets-slider/img/05.webp',
]

const slider = document.querySelector('.slider');

let contatore = 0;

// Caricare immagini
for (let i = 0; i < listaImmagini.length; i ++) {

  let immagine = listaImmagini[i];
  slider.innerHTML += `<img class="d-none" src="${immagine}">`;

}

// Rendere visibile la prima di default
const img = document.getElementsByClassName('d-none');
img[contatore].classList.remove('d-none');
