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
    //con length nos da el numero de caracteres de nuestro string 
    nombre.length,
    apellido.length,
    saludo.length,
    //aqui llamamos el metodo toLocaleUpperCase para mostrarlo en mayusculas
    nombre.toLocaleUpperCase(),
    //aqui llamamos al metodo para mostrarlas en minusculas
    apellido.toLocaleLowerCase(),
    //con includes busca si se incluye la cadena que agreguemos en las dobles comillas
    saludo.includes("hola mundo"),
    // con trim eliminamos los espacios del inicio y el final de nuestro string
    saludo.trim(),
    //con split separamos el string con el caracarter que le hayamos colocado entre comillasn es este caso el espacio
    saludo.split(" ")
)

let deporte = "basquetball"
let comida = "tacos"
//concatenacion
let gustos = "me gusta practicar: "+ deporte + " y mi comida favorita es: " +comida + "."
console.log(gustos) 
//template string, aqui hacemos uso la interpolacion con nombre y apellido
let gustos2 = `hola mi nombre es ${nombre} ${apellido}`
console.log(gustos2)
