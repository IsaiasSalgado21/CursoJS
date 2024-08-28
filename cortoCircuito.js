/* 
cortocircuito OR - cuando el valor de la izquierda en la exprecion 
siempre pueda validar a true, es el valor que se cargara por defecto

Cortocircuito AND - cuando el valor de la izquierda en la exprecion
siempre pueda validar la false, es el valor que se cagara por completo


gracias a los parametros por defectos podemos hacer esto:
function saludar(nombre = "Desconocido") {
    console.log(`Hola ${nombre}`);
    
}
*/
 
function saludar(nombre) {
    nombre = nombre || "Desconocido";//esto es un operador Cortocircuito
    console.log(`Hola ${nombre}`);
    
}



saludar("isa");
saludar();
console.log("Cadena"||"Calor de la derecha");
console.log(23||"Valor de la derecha");
console.log(true||"valor de la derecha");
console.log([]||"calor de la derecha");
console.log({}||"valor de la derecha");
console.log(false||"valor de la derecha");
console.log(null||"valor de la derecha");
console.log(undefined||"valor de la derecha");
console.log(""||"valor de la derecha");
console.log(-2||"Valoe de la derecha");
console.log(0||"Valoe de la derecha");

console.log(false&&"valor de la derecha");
console.log(null&&"valor de la derecha");
console.log(undefined&&"valor de la derecha");
console.log(""&&"valor de la derecha");
console.log(-2&&"Valoe de la derecha");
console.log(0&&"Valoe de la derecha");

console.log("Cadena"&&"Calor de la derecha");
console.log(23&&"Valor de la derecha");
console.log(true&&"valor de la derecha");
console.log([]&&"calor de la derecha");
console.log({}&&"valor de la derecha");