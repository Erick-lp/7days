const nombre = prompt("¿Cuál es tu nombre?");
const edad = parseInt(prompt("¿Cuál es tu edad?"));
const lenguaje = prompt("¿Cúal lenguaje de programación estas aprendiendo?");
const mensaje = `Hola ${nombre}, tienes ${edad} años y estas aprendiendo ${lenguaje}`; 
alert(mensaje);

let like;

while(like !== 1 && like !== 2) { 
    like = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`)); 
}
if (like === 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (like === 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("No ingresaste una respuesta válida.");
}