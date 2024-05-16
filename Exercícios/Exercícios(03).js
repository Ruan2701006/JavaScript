/*1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
soma deles.*/

function soma
    (a, b) {
    return a + b;
}
console.log(soma(2, 3));

/*2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
não tem nenhum parâmetro nem retorno.*/

function saudacao
    () {
    console.log("Olá, mundo!");
}
saudacao();

/*3-Escreva uma função chamada verificarPar que recebe um número como parâmetro
e retorna verdadeiro se o número for par e falso caso contrário.*/

function Verificar
    (x) {
    if (x % 2 == 0) {
        return console.log("Esse numero é par")
    }
    else {
        return console.log("Esse numero é impar")
    }
}
let ver = Verificar(9);

/*4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
como parâmetro e retorna a área do círculo.*/

function calcularAreaCirculo
    (raio) {
    return 3.14 * (raio * raio);
}
console.log(calcularAreaCirculo(5));

/*5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro
e retorna a data atual.*/

function retornarDataAtual
    () {
    return new Date().toLocaleDateString();
}

/*6-Escreva uma função chamada calcularMedia que recebe um array de números
como parâmetro e retorna a média desses números.*/

function calcularMedia
    (array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

/*7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
e retorna esse número adicionado a 2.*/

function adicionarDois
    (x) {
    return x + 2;
}
const resultado = adicionarDois(5);
console.log(resultado);

/*8-Defina uma função chamada concatenarStrings que recebe duas strings como
parâmetros e retorna uma nova string que é a concatenação das duas strings 
fornecidas.*/

function concatenarStrings(string1, string2)
{
    return string1 + string2;
}
const resul = concatenarStrings("Hello, ", "World!");
console.log(resultado);

/*9-Escreva uma função chamada verificarNegativo que recebe um número como
parâmetro e retorna verdadeiro se o número for negativo e falso caso
contrário.*/

function verificarNegativo(numero)
{
    return numero< 0;
}
const Res = verificarNegativo(-5);
console.log(Res)

const Res2 = verificarNegativo(5);
console.log(Res2)

/*10-Crie uma função chamada removerEspacos que recebe uma string como 
parâmetro e retorna a mesma string sem espaços em branco.*/

function removerEspacos(string)
{
    return string.replace(/\s/g, '');
    }
const reusltado12 = removerEspacos("Hello, World");
console.log(reusltado12);