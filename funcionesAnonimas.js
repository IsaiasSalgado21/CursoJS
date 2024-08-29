//Curso de java numero 32. Funciones anonimas Autoejecutable

(function(){
console.log("mi primer IIFE");
})();
(function(){
console.log("mi segunda IIFE");
})();

(function(d,w,c){
    console.log("mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("esto es un console.log")
    })(document,window,console);

((function(){
    console.log("hola mundo con funcion anonima de crockford");
}));
+function(){
    console.log("Hola mundo con Unaria");
};
!function(){
    console.log("Hola mundo con facebook"
    )
}