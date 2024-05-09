/*
Number
parseint
parseflowt

*/

var idade = "20"
console.log(typeof idade)
var idade = Number("20")
console.log( typeof idade, idade)

//converter  boolean para numero

var number = Number(false)
console.log(typeof number, number)
var number = Number(true)
console.log(typeof number, number)

//converter data para numero

var number = new Date()
console.log(typeof number, number)

//CONVERTER DE STRING PARA NUMERO USANDO O PARSEINT 

var n = "29.2356894168"
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

//CONVERTER DE STRING PARA NUMERO USANDO O PARSEFLOAT

