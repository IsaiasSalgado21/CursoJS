//creamos una funcion
function nombreDeMiFuncion(){
    console.log("hola, soy una funcion")
}
//aqui le pasamos los parametros que resive nuestra funcion1 de nombre y edad a nuestra funcion
function saludo(nombre ="Desconocido", edad = 0){//aqui definimos los valores de nuestros parametros
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

//aqui mandamos a llamar nuestra funcion
nombreDeMiFuncion()
saludo("sanji", 2)
// al no definir los valores de mis parametros estos se muestran como undefined (linea de codigo no.6)
saludo()

//para declarar una funcion expresada se hace de la siguiente manera:
//es una buena practica declarar las funciones 
const funcionExpresada = function(){
    console.log("soy una funcion expresada")
}
funcionExpresada()