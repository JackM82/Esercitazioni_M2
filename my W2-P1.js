/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trovaIlpiùGrande(num1,num2){
  if(num1 > num2){
    return num1; //se la funzione è vera essa restituisce il num1
  } else {
    return num2; //altrimenti la funzione restituisce num2
  }
} 

console.log(trovaIlpiùGrande(10,5)); //chiamiamo la funzione all'interno del consolelog, restituisce "10"

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function notEqual(num1){
  if(num1 !== 5){
      console.log("not equal");
  } else {
      console.log("EQUAL!");
  }
}

console.log(notEqual(6)); //restituisce "not equal"

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function CTRLdiv5(num){
  if (num % 5 === 0){ //operatore "modulo" (%) restituisce il resto della divisione
      console.log("divisibile per 5!"); //se il resto della dispatchEvent. è strettamente = 0, stampa il messaggio
  }
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function ctrl8(n1,n2){
  if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8){  //condizione composta
    return true;
  } else {
    return false;
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotCheckOut(totalShoppingCart){
  let costoSpedizione = 10; //variabile locale di costo spedizione
  if(totalShoppingCart > 50){ //se il totale supera 50
    costoSpedizione = 0; //azzera costi spedizione
  } else { //altrimenti
    costoSpedizione = 10; //imposta costo spedizione
  }
  return totalShoppingCart + costoSpedizione; //la funzione restituisce il totale del carrello + spedizione
}

console.log(calcolaTotCheckOut(10));
console.log(calcolaTotCheckOut(60));

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function calcolaTotCheckOut(totalShoppingCart){
  let costoSpedizione = 10; //variabile locale di costo spedizione
  if(totalShoppingCart > 50){ //se il totale supera 50
    costoSpedizione = 0; //azzera costi spedizione
  } else { //altrimenti
    costoSpedizione = 10; //imposta costo spedizione
  }
  const sconto = totalShoppingCart * 0.2; //dichiariamo una costante "sconto" che calcola il valore dello sconto del 20% sul totale
  return totalShoppingCart - sconto + costoSpedizione;
}

console.log(calcolaTotCheckOut(10));
console.log(calcolaTotCheckOut(100));

//crea 3 variabili e assegna un valore numerico a ciascuna di esse. 
//Utilizzando un blocco condizionale crea un algoritmo per ordinarle secondo il valore dal più alto al più basso.
function OrdinaNumeri(num1,num2,num3){
  let NumeriOrdinati = [num1, num2, num3];
  NumeriOrdinati.sort(function(a,b){
  //metodo "sort" in questa occasione accetta una funzione di confronto come argomento, specifica come gli elementi degli array devono essere ordinati
  //in questo caso la funzione di confronto restituisce la differenza tra "a" e "b" e causa l'ordinamento dei numeri in ordine decrescente
  return b - a;
  })
  console.log(NumeriOrdinati);
}

//crea un algoritmo per controllare se un numero fornito sia pari o dispari
function ControllaSeDispari(num){
  if (num % 2 === 0){
     return "pari";
  } else {
     return "dispari";
  }
}

console.log(ControllaSeDispari(5));


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
function ordinaNum(n1,n2,n3){ //la funzione accetta 3 argomenti
  let numeriOrdinati = [n1,n2,n3]; //assegno array ad una variabile
  numeriOrdinati.sort(function(a,b){  //metodo sort fa il confronto tra b e a e ordina in ordine decrescente
    return b - a;    
  });
  console.log (numeriOrdinati);
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function CTRLnumInt(num){
  //verifichiamo se "num" è un numero E con il metodo "isInteger" si verifica se è intero
  if (typeof(num) === "number" && Number.isInteger(num)){  //si poteva fare anche if (typeof num === 'int')
    return true;
  } else {
    return false;
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo 
  su un motore di ricerca)
*/

function CTRLseDispari(num){
  
    if (num %2 === 0){
      return false;
    } else {
      return true;
    }
  } 


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 17;
 if(num < 5){ //struttura a blocchi annidati
  console.log("Tiny");
 } else {
    if (num < 10){
      console.log("Tiny");
    } else {
      if (num < 15){
        console.log("Medium");
      } else {
        if (num < 20){
          console.log("Large");
        } else {
          console.log("Huge");
        }
    } 
 }
}


/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
let isMale = null;
let gender = (isMale? 'Male' : 'Female'); //utile quando si vuole eseguire una controllo su una condizione senza scrivere tutta la struttura IF 
console.log('il genere è :' + gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/
let i = 0;
while (i <= 5){
  console.log(i);
  i++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for(let i = 0; i <= 10; i++){
  console.log(i);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

for(let i = 0; i <= 10; i++){
  if (i === 3 || i === 8){
    continue;
  } else {
    console.log(i);
  }
}

//oppure
for(let i = 0; i <= 10; i++){
  if (i !== 3 && i !== 8){    
    console.log(i);
  }
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente 
  sia pari o dispari, e mostrare il risultato in console.
*/

for(let i = 0; i <= 15; i++){
  if (i %2 === 0){
    console.log(i + ' è pari');
  } else {
    console.log(i + ' è dispari');
  }
}


/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, 
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, 
  stampa "FizzBuzz".
*/

for (let i = 1; i <= 100; i++){
  if (i %3 === 0 && i %5 !== 0){//il numero è divisibile per 3 ma NON per 5 (operatore di modulo %)
    console.log('Fizz');
  } else if (i %5 === 0 && i %3 !== 0){//il numero è divisibile per 5 ma NON per 3
    console.log('Buzz');
  } else if (i %5 === 0 && i %3 === 0){//il numero è divisibile per entrambe (3 e 5)
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day",
  che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
let day = 3;
switch(day){
  case 1: 
    console.log('Lunedì');
    break;
  case 2: 
    console.log('Martedì');
    break;
  case 3: 
    console.log('Mercoledì');
    break;
  case 4: 
    console.log('Giovedì');
    break;
  case 5: 
    console.log('Venerdì');
    break;
  case 6: 
    console.log('Sabato');
    break;
  case 7: 
    console.log('Domenica');
    break;
  default://istruzione eseguita se nessun altro case è stato gestito in precedenza
    console.log('Valore non valido');
    break;
}








