var score;
score = 0;
alert ('QUIZ!!! haal 8 punten en win')

var q1
q1 = prompt('Wat is de hoofdstad van Nederland?')
if(q1 == "Amsterdam"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q2
q2 = prompt('Wat is de hoofdstad van Frankrijk?')
if(q2 == "Parijs"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q3
q3 = prompt('Welke kleur heeft een banaan?')
if(q3 == "geel"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q4
q4 = prompt('Wat voor kleur is een ijsbeer?')
if(q4 == "wit"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q5
q5 = prompt('Wie is de eigenaar van Windows?')
if(q5 == "Bill Gates"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q6
q6 = prompt('Door welk bedrijf is de playstation gemaakt?')
if(q6 == "Sony"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q7
q7 = prompt('Wie is nintendo hun bekenste karakter?')
if(q7 == "Mario"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q8
q8 = prompt('Welke kleur heeft een robijn?')
if(q8 == "rood"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q9
q9 = prompt('Welke kleur krijg je als je rood met blauw mengt?')
if(q9 == "paars"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
var q10
q10 = prompt('Hoe wordt de tablet van Apple genoemd?')
if(q10 == "ipad"){
    score++;
    alert('Correct!!! je score is: '+score)
    
}else{
    alert('FOUT!!! je score is: '+score)
    
}
if(score > 8){
    alert ('uw score is: '+score+' en u heeft gewonnen!!!')
    document.write('CONGRATULATIONS')
}else if(score < 8){
    alert ('uw score is: '+score+' en u heeft verloren')
}
