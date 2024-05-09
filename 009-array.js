/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/
//Usando colchetes []

let array1 = (1, 2 ,3 ,4 ,5)

//Usando o construtor Array()
let array2 = new Array(1, 2 ,3 ,4 ,5);

//Criando um array vazio
let array3 = [];

//Arrays podem conter diferentes tipos de dados
let array4 = ["Hello", 42, true];

// Acessando indice do array
let array = [10, 20, 30, 40 , 50];
console.log(array[0]); //Saída: 10
console.log(array[2]); //Saída: 30

//Verificando o tamanho do array
let arraylenght = [1, 2, 3]
console.log(arraylenght.lenght); //Saída: 3

// Inserindo um item no final do array
arraylenght.push(4);
console.log(arrayLenght); //Saída: [1, 2 ,3 ,4]

// Removendo um item no final do array
let removedElement = arraylenght.pop();
console.log(removedElement); //Saída: 4
console.log(arrayLenght); //Saída: [1, 2, 3]

var array5 = [1,2,3,4,5];

//Indicedo item a ser removida 
var index = 2;

//Remove o item da posição do indice 
array5.splice(index, 1);

console.log(arary5); //Saída: [1, 2, 4, 5]

var array6 = [1, 2, 4, 5];
var index = 2; //Indice onde voce deseja inserir o valor 
var newValue = 3; //Valor que deseja inserir
//Insere o novo valor na posição do indice 

array6.splice(index, 0, newValue);
console.log