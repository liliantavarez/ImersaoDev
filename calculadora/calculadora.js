var primeiroValor = parseInt(console.log("Digite o primeiro:"))
var segundoValor = parseInt(console.log("Digite o segundo valor:"))

do{
var operacao = prompt("QUAL OPERAÇÃO VOCE DESEJA FAZER\n 1.SOMA\n 2.SUBTRAÇÂO\n 3.MULTIPLICAÇÂO\n 4.DIVISAO\n 0.SAIR")

switch(operacao){    
  case '1':
  var resultado = primeiroValor + segundoValor
  document.write("<h2>"+primeiroValor+" + "+segundoValor+" = "+resultado+"</h2>")
  break;   
 
  case '2':
  var resultado = primeiroValor - segundoValor
  document.write("<h2>"+primeiroValor+" - "+segundoValor+" = "+resultado+"</h2>")
  break;
    
  case '3':
  var resultado = primeiroValor * segundoValor
  document.write("<h2>"+primeiroValor+" x "+segundoValor+" = "+resultado+"</h2>")
  break; 
 
  case '4':
  var resultado = primeiroValor / segundoValor
  document.write("<h2>"+primeiroValor+" / "+segundoValor+" = "+resultado+"</h2>")
  break;    
    
  default:
    document.write("<h2>OPÇÃO INVALIDA</h2>")
}
}while(operacao==0);  