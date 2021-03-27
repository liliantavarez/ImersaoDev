numeroSecreto = parseInt(Math.random()*10)
var tentativas =3

while(tentativas>0){
var chute = parseInt(prompt("Digite um numero de 0 a 10"))

if (numeroSecreto==chute){
  alert("ACERTOU!")  
  break;
}else if (chute>numeroSecreto){
  prompt("Tente um numero menor")
  tentativas=tentativas-1
}else if(chute<numeroSecreto){
  alert("Tente um numero maior")
  tentativas=tentativas-1
}
}
if (chute!=numeroSecreto){
  alert("GAME OVER O numero secreto era: "+numeroSecreto)
}

