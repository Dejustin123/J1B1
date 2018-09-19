var geel = prompt ('is de kaas geel');
var antw1;
var antw2;
var antw3;
var antw4;
var antw5;
var antw6;




if (geel == 'ja' ) {
   antw1 = prompt('zitten er gaten in') 
}
else if(geel == 'nee' ){ 
    antw2 = prompt ('heeft de kaas blauwe schimmels')
}


 if(antw1 == 'ja'){
    antw3 = prompt('is de kaas belachelijk duur')
}else if(antw1 == 'nee'){
    antw4 = prompt('is de kaas hard als steen')
}


 if(antw3 == 'ja'){
      document.write('Emmenthaler')

}else if(antw3 == 'nee'){
    document.write('Leerdammer')
}


 if(antw4 == 'ja'){
    document.write('Pamigiano Reggiano')
}else if(antw4 == 'nee'){
    document.write('Goudse kaas')
}




 if(antw2 == 'ja'){
    antw5=prompt('heeft de kaas een korst')
}else if(antw2 == 'nee'){
    antw6=prompt('heeft de kaas een korst')
}


if(antw6 == 'ja'){
    document.write('Camembert')
}else if( antw6 == 'nee'){
    document.write('Mozzarella')
}


if(antw5 == 'ja'){
    document.write('Blue de Rochbaron')
}else if( antw5 == 'nee'){
    document.write('Foume d Ambert')
}