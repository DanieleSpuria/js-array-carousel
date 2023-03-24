/*
1. array con lista immagini
2. ciclo for per caricare tutte le immagini 
3. Rendere visibile la prima di default
4. Prev e next
5. Click next aggiunge .d-none, aumenta il contatore di 1, rimuove il d-none
6. Click prev aggiunge .d-none, diminuisce il contatore di 1, rimuove il d-none
7. Se il contatore è 0, assume il valore della lunghezza della lista e viceversa
8. Variabile active per le card 
9. Inserire active nei click
*/

const listaImmagini = [
  'assets-slider/img/01.webp',
  'assets-slider/img/02.webp',
  'assets-slider/img/03.webp',
  'assets-slider/img/04.webp',
  'assets-slider/img/05.webp',
]

const full = document.querySelector('.full');
const slider = document.querySelector('.slider');

let contatore = 0;

// Caricare immagini
for (let i = 0; i < listaImmagini.length; i ++) {

  let immagine = listaImmagini[i];
  full.innerHTML += `<img class="img d-none" src="${immagine}">`;
  slider.innerHTML += `
  <div class="card">
    <div class="layer"></div>
    <img src="${immagine}">
  </div>
  `;

}

// Rendere visibile la prima di default
const img = document.getElementsByClassName('img');
img[contatore].classList.remove('d-none');

// Rendere active la prima card di default
const active = document.getElementsByClassName('card');
active[contatore].classList.add('active');

// Frecce prev e next
const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');

// Click tasto next
next.addEventListener('click', function() {

  img[contatore].classList.add('d-none');
  
  active[contatore].classList.remove('active');

  if (contatore === img.length - 1){
    contatore = 0;
  } else {
    contatore++;
  }

  img[contatore].classList.remove('d-none');
  
  active[contatore].classList.add('active');

})

// Click tasto prev
prev.addEventListener('click', function() {

  img[contatore].classList.add('d-none');

  active[contatore].classList.remove('active');

  if (contatore === 0){
    contatore = img.length - 1;
  } else {
    contatore--;
  }

  img[contatore].classList.remove('d-none');

  active[contatore].classList.add('active');
  
})




