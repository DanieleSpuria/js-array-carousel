/*
1. array con lista immagini
2. ciclo for per caricare tutte le immagini 
3. Rendere visibile la prima di default
4. Prev e next
5. Click next aggiunge .d-none, aumenta il contatore di 1, rimuove il d-none
6. Click prev aggiunge .d-none, diminuisce il contatore di 1, rimuove il d-none
7. Se il contatore è 0, assume il valore della lunghezza della lista e viceversa
8. Variabile card, inserita nei click
9. Variabile layer, inserita nei click
10. card e selezione immagine tramite click su ogni singola card
11. Ottimizzare selezione immagine tramite click con ciclo for
*/



// Caricare immagini

const listaImmagini = [
  'assets-slider/img/01.webp',
  'assets-slider/img/02.webp',
  'assets-slider/img/03.webp',
  'assets-slider/img/04.webp',
  'assets-slider/img/05.webp',
]

const full = document.querySelector('.full');
const slider = document.querySelector('.slider');

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



//////////////////

let contatore = 0;

//////////////////



// Rendere visibile, active e togliere l'opacity alla prima di default

const img = document.getElementsByClassName('img');
const layer = document.getElementsByClassName('layer');
const card = document.getElementsByClassName('card');

img[contatore].classList.remove('d-none');
layer[contatore].classList.remove('opacity');
card[contatore].classList.add('active');



// Cick prev e next

const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');

next.addEventListener('click', function() {

  img[contatore].classList.add('d-none');
  layer[contatore].classList.add('opacity');
  card[contatore].classList.remove('active');

  if (contatore === img.length - 1){
    contatore = 0;
  } else {
    contatore++;
  }

  img[contatore].classList.remove('d-none');  
  layer[contatore].classList.remove('opacity');
  card[contatore].classList.add('active');

})

prev.addEventListener('click', function() {

  img[contatore].classList.add('d-none');
  layer[contatore].classList.add('opacity');
  card[contatore].classList.remove('active');

  if (contatore === 0){
    contatore = img.length - 1;
  } else {
    contatore--;
  }

  img[contatore].classList.remove('d-none');
  layer[contatore].classList.remove('opacity');
  card[contatore].classList.add('active');
  
})



// Selezionare immagine tramite click sulla stessa

for (let n = 0; n < card.length; n++) {

  card[n].addEventListener('click', function () {
  
  if (contatore != card[n]){
    img[contatore].classList.add('d-none');
    layer[contatore].classList.add('opacity');  
    card[contatore].classList.remove('active');
    
    contatore = n;
    
    img[contatore].classList.remove('d-none');  
    layer[contatore].classList.remove('opacity');
    card[contatore].classList.add('active');
  }
      
})

}
 

 
///////////////////////////////////////////
   ______                            ___      
  //     \\   ||       //\\        //   \\
 //           ||      //  \\      //     \\
((            ||     //    \\    ((       ))
 \\           ||    //======\\    \\     //
  \\_____//   ||   //        \\    \\___//

///////////////////////////////////////////


