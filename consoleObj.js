console.log(console);
console.clear()
console.log(console.error)
console.error("esto es un error")
console.warn("esto es un aviso")
console.info("esto es un sensaje privado")
console.log("Un registro de lo que esta pasando en nuestra aplicacion")

let nombre ="isaias",apellido = "salgado",edad="23";
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

console.log(`hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

console.clear();
console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear();

console.group(`Los cursos de jon mircha en youtube`);
console.log("curso de JavaScript");
console.log("curso de Node.js");
console.log("curso de PWAs");
console.log("curso de Flexbox");
console.log("curso de Diseño y programacion web");
console.groupEnd();
console.clear();

console.log(console);
console.table(Object.entries(console));

const numeros = [1,2,3,4,5],vocales =["a", "e", "i", "o","u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre:"sanji",
    raza:"pitbull",
    color:"negro"
}
console.table(perro);
console.clear();

console.time(`cuanto tiempo tarda mi codigo`);
const arreglo = Array(10000000);
for (let i = 0; i < arreglo.length; i++){
    arreglo[i]= i;
}
console.timeEnd(`cuanto tiempo tarda mi codigo`);
// console.log(arreglo);

console.clear();

for (let i = 0; i <= 100; i++){
    console.count("codigo for");
    console.log(i);
}
console.clear();

let x = 3, y = 2, pruebaXY = "se espera que x siempre sea menor que Y";
console.assert(x < y,{x,y,pruebaXY})
