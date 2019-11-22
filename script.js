// Il computer deve generare 16 numeri casuali tra 1 e 100 (queste saranno le mine).
// 1) creo un array vuoto;
// 2) genero 16 numeri casuali tra 1 e 100;
// 3) se il numero non è gia presente nell'array lo inserisco, altrimenti ne genero un altro.

var mine = [];

for (var i = 0; i < 16; i++) {
  var num = Math.floor(Math.random( ) * 100) + 1;
  console.log(num);
  if(num != num[i]){
    mine.push(num);
  } else {
    var num = Math.floor(Math.random( ) * 100) + 1;
  }
}

console.log(mine);

  var play = parseInt(prompt("inserisci un numero tra 1 e 100"));


//da qui in poi ho fatto qualche prova ma alla fine non so piu cosa sto facendo non sono neanche tanto sicuro della parte sopra
// var a = 0
// while(play != mine[i] && a < 84){
//   var play = parseInt(prompt("inserisci un numero tra 1 e 100"));
// a++
// }




// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
//4) chiedo all'utente di generare un numero tra 1 e 100;



// Se il numero è presente nella lista dei numeri generati, la partita termina (l'utente ha beccato una mina), altrimenti si continua chiedendo all’utente un altro numero.



// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
