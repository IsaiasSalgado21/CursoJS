//POO
/*
Clases - Modelo a seguir
Objetos - Es una instancia de una clase
    atributos - es una carateristicas o propiedad del objeto(son variables dentro de un objeto)
    Metodos - son acciones que un objeto puede realizar(son funciones dentro de un objeto)


const animal = {
    nombre:"snoopy",
    sonar(){
        console.log("Hago sonidos por que estoy vivo")
    }
}
const animal2 = {
    nombre:"Lola Bunny",
    sonar(){
        console.log("Hago sonidos por que estoy vivo")
    }
}
 console.log(animal);
 console.log(animal2);
 */

 //Funcion constructura

function Animal (nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos agregados al prototipo de la funcion constructora
}
    Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo")
}
    Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`)
}
const snoopy = new Animal("Snoopy", "Macho"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();