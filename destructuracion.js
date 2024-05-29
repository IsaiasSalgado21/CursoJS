const numeros = [1, 2, 3];
//sin destruccturacion
let uno = numeros [0],
dos = numeros[1],
tres = numeros[2];

console.log(uno, dos, tres);
//con destruccturacion
const[one, two, three] = numeros;
console.log(one, two, three);

const persona = {
    nombre:"isaias",
    apellido:"salgado",
    edad:22
};
//separamos en las variables los atributos de nuestro objeto 
let{nombre, edad, apellido} = persona;
console.log(nombre, apellido, edad);