// 1. Escribe un comentario en una línea

// COMENTARIO EN UNA LINEA

// 2. Escribe un comentario en varias líneas

/*
COMENTARIO DE
VARIAS LINEAS
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos


let myName = "Alexis Salas"
let age = 39
let isDeveloper = true
let undefinedVal
let nullVal = null
let mySymbol = Symbol("mysymbol")
let myByInt = BigInt(7133187311738317813738164761741284216746210948912)

// 4. Imprime por consola el valor de todas las variables

console.log(myName)
console.log(age)
console.log(isDeveloper)
console.log(undefinedVal)
console.log(nullVal)
console.log(mySymbol)
console.log(myByInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName)
console.log(typeof age)
console.log(typeof isDeveloper)
console.log(typeof undefinedVal)
console.log(typeof nullVal)
console.log(typeof mySymbol)
console.log(typeof myByInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = "Doom Slayer"
age = 35
isDeveloper = false
mySymbol = Symbol("othersymbol")
myByInt = BigInt(1614781479841714987417914)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 35
age = "Doom Slayer"
undefinedVal = null
nullVal
isDeveloper = Symbol("othersymbol")
mySymbol = false
myByInt = "Hola"

console.log(myName)
console.log(age)
console.log(undefinedVal)
console.log(nullVal)
console.log(isDeveloper)
console.log(mySymbol)
console.log(myByInt)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cadenaTxt = "Hola"
const numero = 10
const booleano = true
//const indefinido // Da error
const nulo = null
const simbolo = Symbol("misimbolo")
const granEntero = BigInt("1314147187891474891")

// 9. A continuación, modifica los valores de las constantes

/* No se puede modificar el valor de las constantes, nos devuelve un error
cadenaTxt = "Hola 2"
numero = 15
booleano = false
//const indefinido // Da error
nulo = null
simbolo = Symbol("misimbolo2")
granEntero = BigInt("824978924649862424")
*/

console.log(cadenaTxt)
console.log(numero)
console.log(booleano)
//console.log(indefinido)
console.log(nulo)
console.log(simbolo)
console.log(granEntero)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse