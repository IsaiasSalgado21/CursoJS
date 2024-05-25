//el siguiente modulo de codigo se usa para el manejo de errores
try {
    console.log("en el try se agrega el codigo a evaluar");

    console.log("Hola mundo");
} catch (error) {
    console.log("el catch captura cualquier error surgido en el try");
    console.log(error)
}finally{
    console.log("el bloque finally se ejecutara siempre al final del try-catch");
}

try {
    let numero = "y";
    if(isNaN(numero)){
        throw new Error("El caracter intruduciodo no es un numero")
    }
    console.log(numero)
} catch (error) {
    console.log(`se produjo el siguiente error:${error}`);
}