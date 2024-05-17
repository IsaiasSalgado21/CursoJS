//aqui veremos los tipos de condicionales hay en javascript

let edad = 18;

//estamos declarando una variable con el valor de 17, queremos darle
// una condicion dependiendo del operador que le asignemos
if (edad > 17){
    console.log("eres mayor de edad");
}else{
    console.log("eres menor de edad");
}

if (edad >= 17){
    console.log("eres mayor de edad");
}else{
    console.log("eres menor de edad");
}
console.log("-------------------------");

let hora = 1;
if(hora >= 0 && hora <= 5){
    console.log("dejame dormir");
}else if(hora >= 6 && hora <= 11){
    console.log("buenos dias");
}else if(hora >= 12 && hora <= 18){
    console.log("buenos tardes"); 
}else{
    console.log("buenas noches");
}
console.log("-------------------------");

if(hora < 6){
    console.log("dejame dormir");
}else if(hora > 5 && hora < 12){
    console.log("buenos dias");
}else if(hora > 11 && hora < 19){
    console.log("buenos tardes"); 
}else{
    console.log("buenas noches");
}
console.log("-------------------------");
/* ahora vamos a usar el operador ternario (condicion)?verdadero : falsa */
console.log("operador ternario");
let eresMayor = (edad >= 18)?"Eres mayor de edad":"Eres menor de edad ";
console.log(eresMayor);
console.log("-------------------------");

let dia = 0;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2: 
        console.log("Martes");
        break;
    case 3: 
        console.log("Miercoles");
        break;
    case 4: 
        console.log("Jueves");
        break;
    case 5: 
        console.log("Viernes");
        break;
    case 6: 
        console.log("Sabado");
        break;
    default:
        console.log("dia no definido correctamente")
        break;
}