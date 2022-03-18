// Exercici 8: Crear un nou link en el menú de Navegació
// --------------------------------------------------
// Amb appendChild crearem una nova opció de navegació en el menú principal

// 1) lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...
const enlace = document.createElement('A');

// 2) Segundo paso es crear el texto del enlace
enlace.textContent = 'Nou enllaç';

// 3) Despues vamos a asignar una ruta 
enlace.href = '/nou enllaç';

// 4) Finalmente se agrega el enlace donde deseas mostrarlo...
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);

// 5) Comprovem per consola que s'ha creat.
console.log(enlace);

var el1= document.getElementsByClassName("navegacion");
console.log(el1);
var nuevoA = document.createElement('a');
nuevoA.textContent='alquilar';
nuevoA.href="/ alquilar";
const el5 = document.querySelector("nav");
el5.appendChild(nuevoA);
console.log(el5);
console.log(nuevoA);
console.log(el1);

