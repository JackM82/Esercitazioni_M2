/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.skills.pop()

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
let numDisp = [];
for(i = 1; i <= 100; i++){
  if (i %2 !== 0) {
    numDisp.push(i);
  }
}
console.log(numDisp);

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

let tenNumRandom = [];
let NumRandom;
for(i = 0; i < 10; i++){
  NumRandom = Math.floor(Math.random() * 101);
  tenNumRandom.push(NumRandom);  
}
console.log(tenNumRandom);

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
let int = [2,5,4,66,53,101,334,6,12,75,77,3,8]
for(i = 0; i < int.length; i++){
  let index = int[i];
  if (index %2 === 0){
    console.log('rilevato numero pari = '+index);
  }
}

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
let q = [1 , 3.5 , 10 , 1.2];
function sommaArr(arr){
  let somma = 0;
  for(i = 0; i < arr.length; i++){
    somma += arr[i];    
  }
  return ('il totale della somma dei numeri è = '+somma);
}
let totale = sommaArr(q);
console.log(totale);

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
let z = [1 , 5.5 , 6 , -50];
function incVal(arr){  
  for(i = 0; i < arr.length; i++){
    arr[i] += 1;    
  }
  return (arr);
}
let arrayIncrementato = incVal(z);
console.log(arrayIncrementato);

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/
let c = [1 , 55 , 6 , -50 , 71 , 80 , 11];
function eraseEven(arr){  
  for(i = 0; i < arr.length; i++){
    if(Math.abs(arr[i] %2) == 0)//perchè non elimina -50 dall'array???
    arr.splice(i,1);   
  }
  return (arr);
}
c1 = eraseEven(c);
console.log(c1);

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

let TenNumRandom = [];
let numRandom;
for(i = 0; i < 10; i++){
  numRandom = Math.floor(Math.random() * 11);  
  for(z = 0; z <= i; z++){
    if (numRandom !== TenNumRandom[z]){
      if (z === i){
        TenNumRandom.push(numRandom);          
      }      
    } else {
      numRandom = Math.floor(Math.random() * 11);
      z = -1;            
    }
  } 
}
console.log(TenNumRandom);

/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
let str = ["EPICODE", "is", "great", "Android"]; //[7, 2, 5, 7]

function strLen(arr){
  let resArr = [];
  for(i=0 ; i < str.length; i++){
    posLen = arr[i].length;
    resArr[i] = posLen;    
  }
  return(resArr);
}
console.log(strLen(str));


/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
let array01 = [1, 3, 5, "hot", 55.5, {x:2, y:4}];
let array02 = array01.reverse();
console.log(array02);


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
var myArray = [2, 7, 52, 3.5, 100.1, 4, 5.5];
function FindMax(arr){
  let max = 0;
  for(i = 0; i < arr.length; i++){
      if(arr[i] > max){
          max = arr[i];
      }
  }
  return max;
};
console.log('Il numero massimo trovato è: '+ FindMax(myArray)); //100.1


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

function FindOldest(arr){  
  let ActOldestYear = new Date().getFullYear(); //ottieni il corrente anno
  let ActPosYear = 0;
  let OldestIndexPos = 0;
  for(i = 0; i < arr.length; i++){
    ActPosYear = parseInt(arr[i].Year);
    if (ActPosYear <= ActOldestYear){
      OldestIndexPos = i;   
      ActOldestYear = parseInt(arr[i].Year);   
    }
  }
  return(arr[OldestIndexPos]);
}
let OldestMovie = FindOldest(movies);
console.log('Il film più vecchio in lista è '+OldestMovie.Title+' del '+OldestMovie.Year);

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

function getNumMovies(arr){
  let num = arr.length;  
  return(num);
}
let numPos = getNumMovies(movies);
console.log("nell'array ci sono "+numPos+" films");

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function getTitles(arr){
  let arrTitles = [];
  for(i=0; i<arr.length ;i++){
    arrTitles.push(arr[i].Title);
  }
  return arrTitles;
}
let MyArrTitles = getTitles(movies);
console.log(MyArrTitles);

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function getMovies2000(arr){
  let arr2000 = [];
  for(i=0; i<arr.length ;i++){
    let year = parseInt(arr[i].Year);
    if (year >= 2000){
      arr2000.push(arr[i]);
    }
  }
  return arr2000;
}
let Movies2000 = getMovies2000(movies);
console.log(Movies2000);


/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'
let Movie
for(i = 0; i < movies.length; i++){
  if (movies[i].imdbID === id){
    Movie = movies[i];
    break;
  } else {
    Movie = 'not found';
  }
}
console.log(Movie);


/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let somma = 0;
for(i = 0; i < movies.length; i++){
  let anno = parseInt(movies[i].Year)
  somma += anno;  
}
console.log(somma);


/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
let words = 'Lord';
let Titles = [];
let match = 0;
for(i = 0; i < movies.length; i++){
  match = movies[i].Title.search(words);
  if (match !== -1){
    Titles.push(movies[i]);
  } 
}
console.log(Titles);