// declarações e variáveis
//VAR, LET e CONST

var nome = "fiap";
console.log(nome);
var nome = "Dev"
console.log (nome)

if(true){
    var avatar = "fiapinho"
}

let exemplo3 = 20;
console.log(typeof exemplo3);

let exemplo4=true;
console.log(typeof exemplp4);

let exemplo5 = {nome:"fiap"};
console.log(exemplo5);

let exemplo6=["PHP","java", "HTML"];
console.log(exemplo6);

//valor indefinido
let exemplo7;
console.log(exemplo7);

//valor null ou nulo
let exemplo8=null;
console.log(exemplo8);

//typeoff usa pra saber o tipo de variável

//operadores aritmeticos

const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);
console.log(valor1 % valor2);

//operadores lógicos

const valor3=40;
const valor4=20;
console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 > 0);
console.log(valor3 == valor4 || valor4 > 10)

//operadores de comparação

console.log(valor3 === valor4)
console.log(valor3 == valor4);

const preco=10;
const valor=5;
const pf=(preco-valor);
console.log(pf);

//estrutura condicional
//if

if(true){

    console.log("verdadeiro");
}
let nome1= "fiap";
if (nome1 = "fiap")
    console.log("nome verdadeiro")
else{
    console;log("nome errado");
}

//if, if else, else encadeado/aninhado

let idade=13;
if(idade<13){
    console.log("uma criança");
}else if(idade>13 && idade <18){
    console.log("um adolescente")
}else{
    console.log("um adulto")
}

//swicth case

let times= "palmeiras";
switch(times){
    case "palmeiras":
        console.log("um time de tradição");
        break;
    case "corinthians":
        console.log("gambazada");
        break;
    default:
        console.log("nenhuma das opções(santos")
}

//condicional ternaria

let numero=100
let resultado=numero==100? "Certo":"Errado";
console.log(resultado);

let usuario= "fiap";
let usuariologado= usuario=="fiap" ? "logado com sucesso" : "usuario incorreto"