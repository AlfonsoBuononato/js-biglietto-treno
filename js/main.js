/* TASK ESERCIZIO DA SVOLGERE

1.Il programma dovrà chiedere all'utente il numero di chilometri che viuole percorrere e l'età del passeggero.
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

2.il prezzo del biglietto è definito in base ai km (0.21 € al km)

3.va applicato uno sconto del 20% per i minorenni

4.va applicato uno sconto del 40% per gli over 65.

5.L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

//1. CHIEDERE ETà E KM DA PERCORRERE ALL' UTENTE

var etàPasseggero = prompt ("inserire l'età");
//condizione nel caso in cui si scriva qualcosa di diverso da un numero
if (isNaN(etàPasseggero)) {
    alert("se non si inserisce un numero sarà eseguito un calcolo a prezzo pieno");
    etàPasseggero = 30;
}

document.getElementById("anni").innerHTML = (etàPasseggero);

var kmDaPercorrere = parseInt(prompt ("quanti km deve percorrere?") );
//condizione nel caso in cui si scriva qualcosa di diverso da un numero
if (isNaN(kmDaPercorrere)) {
    alert("se non si inserisce un numero sarà eseguito un calcolo con km 500");
    kmDaPercorrere = 500;
}

document.getElementById("km").innerHTML = (kmDaPercorrere);


//2. prezzo del biglietto

prezzoKm = 0.21;


var costoBiglietto = (prezzoKm * kmDaPercorrere).toFixed(2);


//3. SCONTO PER MINORENNI

var scontoMinorenni = (20 / 100);

//4. SCONTO PER OVER 65

var scontoOver65 = (40 / 100);

//5.OUTPUT COSTO FINALE DEL BIGLIETTO

if (etàPasseggero < 18) {
    costoMinorenni = (costoBiglietto * scontoMinorenni).toFixed(2);
    document.getElementById("prezzo").innerHTML = ('€' + costoMinorenni)
} else if (etàPasseggero > 65) {
    costoOver65 = (costoBiglietto * scontoOver65).toFixed(2);
    document.getElementById("prezzo").innerHTML = ('€' + costoOver65)
} else {
    document.getElementById("prezzo").innerHTML = ('€' + costoBiglietto);
}