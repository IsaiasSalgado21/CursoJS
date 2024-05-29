const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i=0; i < numeros.length; i++){
    if(i===5){
        break;//cuando hacemos un break corta el codigo y sigue afuera de este modulo de codigo
    }
    console.log(numeros[i]);
}
console.log("----------------------------------------");

for (let i=0; i < numeros.length; i++){
    if(i===5){
        continue;//con el continue amite el ciclo y continua 
    }
    console.log(numeros[i]);
}