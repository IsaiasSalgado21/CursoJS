//creamos un objeto 
const objetoEjem = {
    //las variablesd de los objetos se conocen como atributos/propiedades
    nombre:"isaias",
    apellido:"salgado",
    edad:22,
    pasaTiempos:["baquet", "salir caminar", "programar"],
    contacto:{
        numTelefono: "6121043554",
        gmail: "isalgado_21@alu.aubcs.mx",
        instagram: "@thresher23"
    },
    //las funciones de nuestro objeto se conocen como metodos
    saludo:function(){
        console.log("Hola mundo")
    },
    presentacion:function(){//usamos this para obtener el valor de nuestro atributo nombre, apellido y edad
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y mi numero es:${this.contacto.numTelefono}`)
    }
}
//aqui mostramos las diferentes formas de mostrar los valores de nuestras variables
console.log(objetoEjem)
console.log(objetoEjem["nombre"])
console.log(objetoEjem["apellido"])
console.log(objetoEjem.nombre)
console.log(objetoEjem.pasaTiempos)
console.log(objetoEjem.pasaTiempos[1])//para imprimir la que esta en esa posicion
console.log(objetoEjem.contacto)
console.log(objetoEjem.contacto.gmail)//para imprimir el valor de nuestro objeto
objetoEjem.saludo()//para llamar nuestro metodo que creamos en nuetro objeto
objetoEjem.presentacion()