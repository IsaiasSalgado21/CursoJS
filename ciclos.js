/*creamos un ciclo while con un contador
let contador = 0;


while (contador < 10) {
    console.log("while " + contador)
    contador++;
}

esto es un cliclo do while, primero ejecuta el bloque de codigo
luego verifica si la condicion se cumple
do{
    console.log("do while " + contador)
    contador++;
}while(contador < 10);
*/
/*ahora usaremos el ciclo for, este esta compuesto
 primero po la inializacion de la variabla; la condicion; decremento o decremento 
 y adentro las sentencias que ejecuta el for 

for (let i = 0; i < 10; i++) {
    console.log("for " + i)    
}*/

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}
//creamos un objeto
const isaias = {
    nombre: "isaias",
    apellido: "salgado",
    edad: 22
}

for(const propiedad in isaias){
    console.log(`Key: ${propiedad},Value:${isaias[propiedad]}`);
}

for(const elemento of numeros){
    console.log(elemento);
}
let cadena = "Hola Mundo";
for(const caracter of cadena){
    console.log(caracter);
}


