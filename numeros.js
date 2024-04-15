let uno = 1
//constructor de un numero
let cinco = new Number(5)
console.log(uno, cinco)
//añadimos un numero decimal y con el metodo toFixed podemos 
//redondearlo, o cuantos decimales queremos mostrar
let numDecimal = 7.26
console.log(numDecimal.toFixed(1))
//con parseInt nos da el numero entero sin el punto decimal
console.log(parseInt(numDecimal))

let numString = "88"
console.log(typeof numString)//con typeof nos muetra el tipo de dato
console.log(uno + parseInt(numString))//con parseInt cambiamos su tipo de dato
console.log(numDecimal + parseFloat(numString))//con parseFloat podemos hacer correctamente la suma