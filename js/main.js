function clicou() {
    // alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<button>Vá para um site legal!</button>";
}

function redirecionar() {
    // Abrir em outra aba
    window.open("https://globallab.org/");

    // Abrir na mesma aba
    // window.location.href = "https://globallab.org/";
}

function trocar(element) {
    element.innerHTML = "Seu cursor está aqui.";
}

function voltar(element) {
    element.innerHTML = "Passe o mouse aqui.";
}

function funcaoChange(element) {
    alert(element.value);
}

var nome = "Jeferson Batista"
// var idade = 25;
var idade = prompt("Qual é a sua idade?");
var frase = "Taiwan é o melhor país do mundo!"

// Arrays
var frutas = ["maçã", "pêra", "laranja"];
console.log(frutas);
frutas.push("uva");
console.log(frutas);
frutas.pop();
console.log(frutas.toString());
console.log(frutas.join(' - '));
console.log(frutas.length);

// Dictionaries
var fruta = {nome:"maçã", cor:"vermelha"};
console.log("Nome: " + fruta.nome + ", cor: " + fruta.cor);
console.log(fruta);

// Another syntax for strings with placeholders for variables
alert(`Olá ${nome}! Você tem ${idade} anos.`);
if(idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade");
}

console.log(nome);
console.log(idade);
console.log(frase.replace("Taiwan", "Brasil"));
