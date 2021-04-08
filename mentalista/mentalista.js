var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 0
var palpiteJogador = "";

function capturarPalpite() {
    palpiteJogador = document.getElementById('palpite').value;
    return palpiteJogador
}

function jogar() {

    var divResultado = document.getElementById("resultado")
    var palpiteFinal = capturarPalpite()

    console.log(palpiteFinal)
    if (numeroSecreto == palpiteFinal) {
        htmlResultado = '<p class="resultado-final">ACERTOU</p>'
        document.getElementById('btnJogar').disabled = true
    } else if (palpiteFinal > numeroSecreto) {
        htmlResultado = '<p class="resultado-final">Tente um numero menor</p>'
        tentativas++
    } else {
        htmlResultado = '<p class="resultado-final">Tente um numero maior</p>'
        tentativas++
    } if (palpiteFinal != numeroSecreto && tentativas == 3) {
        htmlResultado = '<p class="resultado-final">GAME OVER</p>'
        document.getElementById('btnJogar').disabled = true
        alert("O numero secreto era: " + numeroSecreto)

    }
    divResultado.innerHTML = htmlResultado


}
