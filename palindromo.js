// Palindromo? palavra que se repete de traz pa frente "OVO"
var frase = prompt("Digite uma frase a fim de identificar se e um palindromo! ");
var fraseQuebrada = frase.split("");
var fraseQuebradaInvertida = fraseQuebrada.reverse("");
var fraseInvertida = fraseQuebradaInvertida.join("");
if (fraseInvertida == frase ){
    alert("a frase inserida trata-se de um Palindromo. ")
}else{
    alert("Nao tratas de um Palindromo");
}
