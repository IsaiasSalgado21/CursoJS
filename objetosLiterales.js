let nombre = "Sanji",
edad = 7;

const perro = {
    nombre:nombre,
    edad:edad,
    ladrar:function(){
        console.log("guaauu guaauu")
    }
}

console.log(perro);
perro.ladrar();


const dog = {
    nombre,
    edad,
    raza:"callejero",
    ladrar(){
        console.log("guaaa guaaau guaaaau!!")
    }
}

console.log(dog)
dog.ladrar();