/*const saludo = () => console.log(`Hola`);
saludo();*/

const saludo = nombre => console.log(`Hola ${nombre}`);
saludo("isaias");

/*const sumar = function (a, b){
    return a + b;
}*/

const sumar = (a, b) => a+b;

console.log(sumar(9, 9));

const funcionDeVariasLineas = () =>{
    console.log("uno");
    console.log("dos");
    console.log("tres");
};
funcionDeVariasLineas();

const numeros =[1,2,3,4,5];
numeros.forEach((el, index) => console.log(`${el} esta en la posicion ${index}`));


/*function Perro(){
console.log(this);
}
Perro();*/

const perro = {
    nombre:"Sanji",
    ladrar(){
        console.log(this)
    }
}
perro.ladrar();

