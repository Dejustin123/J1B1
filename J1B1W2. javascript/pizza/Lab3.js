var Small = prompt("hoeveel small pizza's wilt u");
var Medium = prompt("hoeveel medium pizza's wilt u");
var Large = prompt("hoeveel large pizza's wilt u");
//alle variabelen voor de pizza's//*

const totalsmall=(Small*6.10 );
const totalmedium=(Medium*8.99 );
const totallarge=(Large*12.10 );
//Constanten voor alle pizza's//*

document.write( 'small pizza prijs: € ' +6.10 * Small + "<br>");// totaal prijs small pizza's//*
document.write( 'medium pizza prijs: € ' +8.99 * Medium + "<br>");//totaal prijs medium pizza's//*
document.write( 'Large pizza prijs: € ' + 12.10 * Large + "<br>");//totaal prijs large pizza's//*
var totaal = totalsmall+totalmedium+totallarge;//variable totaal prijs//*
document.write("totaal €:"+totaal );//totaal prijs alle pizza's bij //*