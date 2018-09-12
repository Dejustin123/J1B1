var Small = prompt("hoeveel small pizza's wilt u");
var Medium = prompt("hoeveel medium pizza's wilt u");
var Large = prompt("hoeveel large pizza's wilt u");
//alle variabelen voor de pizza's//*

const priceSmall = 5.50;
const priceMedium = 8.99;
const priceLarge = 12.10;

const totalsmall=(Small*priceSmall );
const totalmedium=(Medium*priceMedium );
const totallarge=(Large*priceLarge );
//Constanten voor alle pizza's//*

document.write( 'small pizza prijs: € ' + totalsmall + "<br>");// totaal prijs small pizza's//*
document.write( 'medium pizza prijs: € ' +totalmedium + "<br>");//totaal prijs medium pizza's//*
document.write( 'Large pizza prijs: € ' + totallarge + "<br>");//totaal prijs large pizza's//*
var totaal = totalsmall+totalmedium+totallarge;//variable totaal prijs//*
document.write("totaal €:"+totaal );//totaal prijs alle pizza's bij //*