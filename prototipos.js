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
 

 //Funcion constructura

function Animal (nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

}
//Metodos agregados al prototipo de la funcion constructora
    Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo")
}
    Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`)
}

//Herencia Prototipica
function Perro(nombre, genero, tamanio){
    this.super = Animal,
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perro esta heredado de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobre escritura de metodos de prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar= function(){
    console.log("Guaaaa Guaaaauuu!!!")
}
const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();

*/
//creamos la clase animal
class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //Metodos de mi clase 
    Sonar(){
        console.log("estoy vivo :3")
    }
    Saludar(){
        console.log(`Hola me llamo $(this.nombre)`)
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio=tamanio;
    }
    sonar(){
        console.log("soy un perro y mi sonido es un ladrido")
    }
    ladrar(){
        console.log("GUAAAU GUUUAA")
    }
        //un método estático se pueden ejecutar sin-necesidad de instanciar la clase
    static queEres(){
    console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre");
    }
    //Los setters y getters son métodos especiales que
    //nos permiten establecer y obtener los valores de
    //atributos de nuestra clase
    get getRaza0(){
        return this.raza;
    }
    set setRaza(raza) {
    this.raza = raza;
    }
}

Perro.queEres();

const cat = new Animal("Luna","Hembra"),
    dog = new Perro("Sanji", "Macho","Grande");

console.log(cat);
cat.Saludar();
cat.Sonar();
console.log(dog);
dog.sonar();
dog.ladrar();

