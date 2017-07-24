// zadatak 1.
/*Cene različitih proizvoda su zadate u vidu niza. 
Za proizvode čija je cena manja od 50 dodati porez od 18% u suprotnom porez od 8%. 
Izračunati krajnji trošak (sabrati cene i njihov porez). 
cene = [5, 145, 69, 56, 13, 456, 78, 4, 30]*/

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var cenePorez = [];

for (var i = 0; i < cene.length; i++) {
	if (cene[i] < 50) {
		cenePorez.push(cene[i] * 1.18);
	}
	else {
		cenePorez.push(cene[i] * 1.08);
	}
}

var x = 0;

for (var j = x; j < cenePorez.length; j++){

	x += cenePorez[j];
}

console.log("Krajnji trosak je: " + Math.round(x));

//zadatak 2.
/*Napisati program koji će za unetu reč proveriti da li je palindrom. */

function palindrom() {
	
	var rec = prompt("Unesi rec i proveri da li je palindrom:");
	var unetaRec = [];
	var obrnutaRec = [];
	

	for (var i = 0; i < rec.length; i++){
		unetaRec.push(rec[i]);	
	}
	console.log(unetaRec);

	var unetaString = unetaRec.join('');

	for (var j = unetaRec.length - 1; j >= 0; j--){
		obrnutaRec.push(unetaRec[j]);
			
	}
	console.log(obrnutaRec);

	var obrnutaString = obrnutaRec.join('');


	if (unetaString !== obrnutaString) {
				
		return document.getElementById("one").innerHTML = rec + " nije palindrom... Probaj drugu rec!";
	}	
	else
	
	return document.getElementById("one").innerHTML = rec + " jeste palindrom. Bravo!";

}