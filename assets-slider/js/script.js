/*
1. array con lista immagini
2. ciclo for per caricare tutte le immagini 
3. Rendere visibile la prima di default
4. Prev e next
5. Click next aggiunge .d-none, aumenta il contatore di 1, rimuove il d-none
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
  slider.innerHTML += `<img class="img d-none" src="${immagine}">`;

}

// Rendere visibile la prima di default
const img = document.getElementsByClassName('img');
img[contatore].classList.remove('d-none');

// Frecce prev e next
const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');
console.log(prev, next);

// Click tasto next
next.addEventListener('click', function() {

  img[contatore].classList.add('d-none');
  contatore++;
  img[contatore].classList.remove('d-none');

})

