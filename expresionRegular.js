/*Expresion regulares: son seguencioas de caracteres de busqueda 
para encotrar los patrones 

le agregamos la cadena a una variable*/
let cadena = "Lorem ipsum lorem 123";

//con RegExp establecemos que busque y como segundo paramentro
// la cantidad de veces
let expReg = RegExp("Lorem","");
//hay unas banderas para ser mas especifico 
//o detectar ciertos carcateres como ig
//let expReg = RegExp("Lorem","ig");

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

// para mayor comodidad usamos la sigueinte estructura
let expReg2 = /\d{1}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));