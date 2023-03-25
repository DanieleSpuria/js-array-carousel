/*
1. array con lista immagini
2. ciclo for per caricare tutte le immagini 
3. Rendere visibile la prima di default
4. Prev e next
5. Click next aggiunge .d-none, aumenta il contatore di 1, rimuove il d-none
6. Click prev aggiunge .d-none, diminuisce il contatore di 1, rimuove il d-none
7. Se il contatore è 0, assume il valore della lunghezza della lista e viceversa
8. Variabile active per le card , inserita nei click
9. Variabile opacity per i layer, inserita nei click
10. listaCard e selezione immagine tramite click su ogni singola card
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
    <div class="layer opacity"></div>
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

// Togliere opacity alla prima card di default
const opacity = document.getElementsByClassName('layer');
opacity[contatore].classList.remove('opacity');



// Frecce prev e next
const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');

// Click tasto next
next.addEventListener('click', function() {

  img[contatore].classList.add('d-none');
  active[contatore].classList.remove('active');
  opacity[contatore].classList.add('opacity');

  if (contatore === img.length - 1){
    contatore = 0;
  } else {
    contatore++;
  }

  img[contatore].classList.remove('d-none');  
  active[contatore].classList.add('active');
  opacity[contatore].classList.remove('opacity');

})

// Click tasto prev
prev.addEventListener('click', function() {

  img[contatore].classList.add('d-none');
  active[contatore].classList.remove('active');
  opacity[contatore].classList.add('opacity');

  if (contatore === 0){
    contatore = img.length - 1;
  } else {
    contatore--;
  }

  img[contatore].classList.remove('d-none');
  active[contatore].classList.add('active');
  opacity[contatore].classList.remove('opacity');
  
})



// Selezionare immagine tramite click sulla stessa
contatore = 0;

const listaCard = document.getElementsByClassName('card');

listaCard[contatore].addEventListener('click', function () {
  
  if (listaCard[contatore] != listaCard[0]){
    img[contatore].classList.add('d-none');
    active[contatore].classList.remove('active');
    opacity[contatore].classList.add('opacity');  
    
    contatore = 0;
    
    img[contatore].classList.remove('d-none');  
    active[contatore].classList.add('active');
    opacity[contatore].classList.remove('opacity');
  }
      
})

listaCard[1].addEventListener('click', function () {
  
  if (listaCard[contatore] != listaCard[1]){
    img[contatore].classList.add('d-none');
    active[contatore].classList.remove('active');
    opacity[contatore].classList.add('opacity');  

    contatore = 1;

    img[contatore].classList.remove('d-none');  
    active[contatore].classList.add('active');
    opacity[contatore].classList.remove('opacity');
  } 
})

listaCard[2].addEventListener('click', function () {
  
  if (listaCard[contatore] != listaCard[2]){
    img[contatore].classList.add('d-none');
    active[contatore].classList.remove('active');
    opacity[contatore].classList.add('opacity');  

    contatore = 2;

    img[contatore].classList.remove('d-none');  
    active[contatore].classList.add('active');
    opacity[contatore].classList.remove('opacity');
  } 

})

listaCard[3].addEventListener('click', function () {
  
  if (listaCard[contatore] != listaCard[3]){
    img[contatore].classList.add('d-none');
    active[contatore].classList.remove('active');
    opacity[contatore].classList.add('opacity');  

    contatore = 3;

    img[contatore].classList.remove('d-none');  
    active[contatore].classList.add('active');
    opacity[contatore].classList.remove('opacity');
  } 

})

listaCard[4].addEventListener('click', function () {
  
  if (listaCard[contatore] != listaCard[4]){
    img[contatore].classList.add('d-none');
    active[contatore].classList.remove('active');
    opacity[contatore].classList.add('opacity');  

    contatore = 4;

    img[contatore].classList.remove('d-none');  
    active[contatore].classList.add('active');
    opacity[contatore].classList.remove('opacity');
  } 

})


