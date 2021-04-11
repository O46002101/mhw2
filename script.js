
function inizializza(){

    for (contenuto of contenuti) {

      const container = document.querySelector('#blocchi');

      const elementoHTML= document.createElement('div');
      elementoHTML.classList.add('contenuto');
      container.appendChild(elementoHTML);

      const nuovaimg = document.createElement('img');
      nuovaimg.classList.add('nuovaimg');
      nuovaimg.src=contenuto.immagine;
      elementoHTML.appendChild(nuovaimg);

      const elementoHTML2= document.createElement('div');
      elementoHTML2.classList.add('elementoHTML2');
      elementoHTML.appendChild(elementoHTML2);

      const nuovoh1 = document.createElement('h1');
      nuovoh1.classList.add('nuovoh1');
      nuovoh1.textContent=contenuto.titolo;
      elementoHTML2.appendChild(nuovoh1);

      const stella = document.createElement('img');
      stella.src="https://i.imgur.com/KNsgXSC.png";
      stella.classList.add('stella');
      elementoHTML2.appendChild(stella);

      const bottone_dettagli = document.createElement('button');
      bottone_dettagli.textContent="Mostra dettagli";
      bottone_dettagli.classList.add('bottone_dettagli');
      elementoHTML.appendChild(bottone_dettagli);

      const spazio_dettagli = document.createElement('div');
      spazio_dettagli.classList.add('spazio_dettagli');
      spazio_dettagli.classList.add('hidden');
      elementoHTML.appendChild(spazio_dettagli);

      const dettagli = document.createElement('h2');
      dettagli.textContent=contenuto.descrizione;
      spazio_dettagli.appendChild(dettagli);
     
      const prezzo = document.createElement('h2');
      prezzo.textContent=contenuto.prezzo;
      spazio_dettagli.appendChild(prezzo);

      /* Descrizione degli oggetti*/
      bottone_dettagli.addEventListener('click', mostra_dettagli);
    }

}

function ricerca(event) {

const testo_barra=event.currentTarget.value;
const titoli_sezioni=document.querySelectorAll('.nuovoh1')
     
for(titolo_sezione of titoli_sezioni){
  titolo_sezione.parentNode.parentNode.classList.add('hidden');
}

for(titolo_sezione of titoli_sezioni){
  if ((titolo_sezione.textContent.toUpperCase().indexOf(testo_barra.toUpperCase())) !== -1){
    titolo_sezione.parentNode.parentNode.classList.remove('hidden');
  }
  
}
}


function mostra_dettagli(event) {
  
  const bottone = event.currentTarget;
  const descrizione = event.currentTarget.parentNode.querySelector('.spazio_dettagli');
  
  isVisible = !isVisible;
  if (isVisible) {
    descrizione.classList.remove('hidden');
    bottone.textContent = 'Nascondi dettagli';
  } else {
    descrizione.classList.add('hidden');
    bottone.textContent = 'Mostra dettagli';
  }
}

function rimuovi_preferiti(event){
   const stella_preferito=event.currentTarget;
   const titoli_sezioni=document.querySelectorAll('.nuovoh1');
   
   for(titolo_sezione of titoli_sezioni){
     /*Faccio in modo che possa riaggiungere il preferito, una volta rimosso*/
    if ((titolo_sezione.textContent.indexOf(stella_preferito.parentNode.querySelector('.testo_preferito').textContent))!==-1){
      titolo_sezione.parentNode.querySelector('.stella').addEventListener("click", aggiunta_preferiti);
      break;
    }
  }
    stella_preferito.parentNode.remove();

    const sez_preferiti= document.querySelector('.preferiti');
    const sez_preferiti2= document.querySelector('.preferiti2');
    const elemento_preferito=sez_preferiti2.querySelector('div');
    if(!elemento_preferito){

      sez_preferiti2.classList.add('hidden');
      sez_preferiti.classList.add('hidden');
    
   }
}

function aggiunta_preferiti(event) {
  
  const stella = event.currentTarget;
  const sez_preferiti= document.querySelector('.preferiti');
  const sez_preferiti2= document.querySelector('.preferiti2');
  const titolo=stella.parentNode.querySelector('h1');

  let nuovo_preferito=document.createElement('div');
  const immagine_preferito=document.createElement('img');
  const testo_preferito=document.createElement('h1');
  const stella_preferito = document.createElement('img');
  
      
for(contenuto of contenuti){
  if ((contenuto.titolo.indexOf(titolo.textContent))!==-1) {
    
    sez_preferiti.classList.remove('hidden');
    sez_preferiti2.classList.remove('hidden');
    
    nuovo_preferito.classList.add('nuovo_preferito');
    sez_preferiti2.appendChild(nuovo_preferito);
    
    immagine_preferito.src=contenuto.immagine;
    testo_preferito.textContent=contenuto.titolo;
    stella_preferito.src="https://i.imgur.com/gqt9BUA.png";

    immagine_preferito.classList.add('immagine_preferito');
    testo_preferito.classList.add('testo_preferito');
    stella_preferito.classList.add('stella_preferito');

    nuovo_preferito.appendChild(immagine_preferito);
    nuovo_preferito.appendChild(testo_preferito);
    nuovo_preferito.appendChild(stella_preferito);

    /*Evito cloni dello stesso preferito*/
    stella.removeEventListener("click", aggiunta_preferiti);
    /*Mi assicuro di poter poi rimuovere un preferito*/
    stella_preferito.addEventListener("click", rimuovi_preferiti);
  } 

}
}




/* Creazione dinamica dei blocchi*/
let isVisible = false;
  inizializza();

/* Aggiunta preferiti*/ 
const stelle=document.querySelectorAll('.stella');
for (stella of stelle){
stella.addEventListener("click", aggiunta_preferiti);
}

 /* Barra di ricerca*/

 const testo_barra = document.getElementById('barradiricerca');
 testo_barra.addEventListener("keyup", ricerca); 
 