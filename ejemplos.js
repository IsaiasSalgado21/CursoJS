/*-
tipos de datos primitivos(se accede directamente al valor)
string
number
boolean
null  
undefined
NAN
-Tipos de Datos Compluestos(se accede a la referencia del valor)
object = {}
array = []
funcion(){}
Class{}
etc.
*/

//console.log permite imprimir codigo en la consola
console.log("hola mundo")

// var es para variables globales(mala practica)y let se usa en el ambito de bloque
 
/* podemos usar constantes para declarar objetos o arreglos, y tambien datos primitivos, pero estos
no pueden cambiar su valor por ser constante
*/

//cadenas de texto, strings

let nombre = "isaias"
let apellido = "Salgado"
let saludo = "hola mundo"

console.log(nombre, apellido, saludo)
console.log(
    nombre.length,
    apellido.length,
    saludo.length
)