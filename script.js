

var biblioteca = ["URUBU", "ABACAXI", "CAPIVARA", "ORQUIDEA", "ENGENHARIA", "AMAZONAS"];
var temas = ["AVES", "FRUTAS", "ANIMAIS", "FLORES", "PROFISSÕES", "ESTADOS DO BRASIL"];
var pt = document.getElementById("pg");
var desenhos = [];
desenhos[5] = document.getElementById("cabeca");
desenhos[4] = document.getElementById("corpo");
desenhos[3] = document.getElementById("braco-esquerdo");
desenhos[2] = document.getElementById("braco-direito");
desenhos[1] = document.getElementById("perna-esquerda")
desenhos[0] = document.getElementById("perna-direita");
var btInicia = document.getElementById("bt-inicia");
var telaInicial = document.getElementById("tela");
var telaJogo = document.getElementById("jogo");
var over = document.getElementById("game-over");
var qtde = biblioteca.length - 1;
var pos = Math.round(Math.random() * qtde);
var palavra = biblioteca[pos];
var pergunta = temas[pos];
var tam = palavra.length;
var obj;
var frase;
var job = "A";
var erros = -1;
var acertou = false;
var jogando = false;
var errosMax = 7;
var acertos = 0;
var al;


function definirLetra(l) {
    for (var i = 0; i < 10; i++) {
        obj = document.getElementById("letra" + i).value = "";
        obj = document.getElementById("letra" + i).style.display = "none";
        frase = document.getElementById("pg").innerHTML = "Tema: " + pergunta;
    }
    for (var i = 0; i < l; i++) {
        obj = document.getElementById("letra" + i).style.display = "inline-block";
    }
}
definirLetra(tam)
function joganDo(click, posicao) {



    var jog = click
    var obj;
    var letraTmp;
    var letra;
    var pesq;
    letra = jog;
    jog.value = "";
    pesq = palavra.match(letra);
    var acertou = false;
    while (pesq != null) {
        letraTmp = palavra.search(letra);
        obj = document.getElementById("letra" + letraTmp).value = letra;
        palavra = palavra.replace(letra, "0");
        acertos++;
       //alert
        pesq = palavra.match(letra);
        acertou = true;
        document.getElementById(posicao).style.pointerEvents = "none";
        document.getElementById(posicao).style.background = "rgb(69, 128, 69)";
    }
    if (!acertou) {

        document.getElementById(posicao).style.background = "orange";
        document.getElementById(posicao).style.pointerEvents = "none";
        erros++;
        if (erros < 5) {
            desenhos[erros].style.display = "none";
        } else {
           //alert
            over.style.display = "block";
            telaJogo.style.display ="none";
            
        }
    } if (acertos == tam) {
        //alert
        telaInicial.style.display = "block";
        telaJogo.style.display = "none";
        alert("Parabens voce ganhou");
        document.location.reload(true);;
    }
}
 

function aA() {
    joganDo("A", "a");
}
function bA() {
    joganDo("B", "b");
}
function cA() {
    joganDo("C", "c");
}
function dA() {
    joganDo("D", "d");
}
function eA() {
    joganDo("E", "e");
}
function fA() {
    joganDo("F", "f");
}
function gA() {
    joganDo("G", "g");
}
function hA() {
    joganDo("H", "h");
}
function iA() {
    joganDo("I", "i");
}
function jA() {
    joganDo("J", "j");
}
function kA() {
    joganDo("K", "k");
}
function lA() {
    joganDo("L", "l");
}
function mA() {
    joganDo("M", "m");
}
function nA() {
    joganDo("N", "n");
}
function oA() {
    joganDo("O", "o");
}
function pA() {
    joganDo("P", "p");
}
function qA() {
    joganDo("Q", "q");
}
function rA() {
    joganDo("R", "r");
}
function sA() {
    joganDo("S", "s");
}
function tA() {
    joganDo("T", "t");
}
function uA() {
    joganDo("U", "u");
}
function vA() {
    joganDo("V", "v");
}
function wA() {
    joganDo("W", "w");
}
function xA() {
    joganDo("X", "x");
}
function yA() {
    joganDo("Y", "y");
}
function zA() {
    joganDo("Z", "z");
}


function iniciar() {
    telaInicial.style.display = "none";
    telaJogo.style.display = "block";

}

pt.innerHTML = "Tema: " + pergunta

btInicia.addEventListener("click", iniciar);




