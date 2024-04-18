 //declaramos un arreglo
 const a = []
 const b =[1, true, "Hola", ["A","B","C"]]
 console.log(a)
 console.log(b)
 console.log(b.length)//con legnth nos muestra su numero total de elementos
 console.log(b[2])//aqui nos muestra el valor de nuestra variable dependiendo de la posicion de nuestro arreglo
 console.log(b[3][2])//aqui buscamos dentro del arreglo con otra coordenada 

 const c = Array.of("X","Y","Z",7,8,9)
console.log(c)

const d = Array(50).fill(false)//aqui llenamos un arreglo con 50 false
console.log(d)

const colores = ["Rojo", "Verde", "Azul"]
console.log(colores)

colores.push("Negro")
console.log(colores)//con el metodo push añadimos una valor a nuestro arreglo

colores.pop()//con pop eliminamos el ultimo valor añadido
console.log(colores)

//con forEach se ejecuta por cada valor de nuestro arreglo
//ademas añadimos index como segundo parametro para mostrar el id
colores.forEach(function(el, index){
    console.log(`<li id ="${index}">${el}</li>`)
})