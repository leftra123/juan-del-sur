let card = document.querySelector("#card");
let audioClip1 = document.querySelector("#audioClip1");
let audioClip2 = document.querySelector("#audioClip2");
const images = [];
for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `/assets/cigueña/ciguena-${i}.svg`;
    images.push(img);
}


card.addEventListener("mouseover", () => {
  if (audioClip1.paused) {
    audioClip1.play();
  }
});

audioClip1.addEventListener("ended", () => {
  setTimeout(() => {
    audioClip2.play();
  }, 1000);
});

let dueDate = new Date("2023-11-25T00:00:00");

let currentDate = new Date();

let differenceInSeconds = Math.round((dueDate - currentDate) / 1000);


// document.querySelector(
//   ".progress-bar::before"
// ).style.animationDuration = `${differenceInSeconds}s`;

const messages = [
  "La búsqueda del tesoro de Juan y Lily ha comenzado...",
  "¿Estará el tesoro en el norte? Vamos a ver...",
  "¿Quizás en Viña del Mar? ¡Es un lugar tan hermoso!",
  "¡Alto! ¿Y si Juan y Lily dejaron el tesoro en Argentina? ¡Vamos allá!",
  "¡Ay, caramba! Argentina es grande. Busquemos en varios lugares...",
  "Hm, parece que el tesoro no estaba en Argentina. ¡Regresemos a Chile cruzando los Andes!",
  "¡Brrr! Hace frío aquí en los Andes, pero no nos detendremos.",
  "Ahora estamos en el centro... ¿Quizás aquí está el tesoro?",
  "¡Rumbo a Lonquimay! Nunca se sabe...",
  "Hacia el sur vamos, ¡el tesoro de Juan y Lily nos espera!",
  "¡Atención, Temuco! ¿Es aquí donde encontraremos el tesoro?",
  "Atravesamos un fundo... Espera, ¿será este el lugar?",
  "¡Estamos cerca! ¡Siento que el tesoro de Juan y Lily está a punto de ser descubierto!",
  "¡La búsqueda ha terminado! ¡Felicidades, Juan y Lily! ¡El tesoro más preciado ha sido encontrado!",
];

let index = 0;
let progressText = document.querySelector(".progress-text");

function changeMessage() {
  progressText.innerText = messages[index++];
  if (index >= messages.length) {
    clearInterval(intervalId);
  }
}

let messageInterval = differenceInSeconds / messages.length;
const intervalId = setInterval(changeMessage, messageInterval * 1000);

let frame = 1;
const stork = document.getElementById('stork');

setInterval(() => {
  stork.style.backgroundImage = `url('/assets/cigueña/ciguena-${frame}.svg')`;
  frame = frame < 6 ? frame + 1 : 1;
}, 190);


