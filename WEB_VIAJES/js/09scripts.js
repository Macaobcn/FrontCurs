
// 1) <p class="categoria concierto">concierto</p>
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// 2) <p class="titulo">Concierto de Rock</p>
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3) <p class="precio">$800 por persona</p>
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// 4) <div class="info">
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// 5) <img src="img/hacer1.jpg">
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// 6) Ja tenim tots els element, ara cal crear la Card.. <div class="card">
const card = document.createElement('div');
card.classList.add('card');

// 7) Vamos a asignar la imagen al card...
card.appendChild(imagen);

// 8) y el info
card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // al inicio info

console.log(parrafo1);
console.log(parrafo2);