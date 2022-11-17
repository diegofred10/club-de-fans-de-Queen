let discos = [
  ['<img src="./assets/img/queen-hot-space.jpg" alt="Hot space">', "Hot space"],
  ['<img src="./assets/img/queen-a-day-at-the-races.jpg" alt="A day at the races">', "A day at the races"]
];

let canciones = [
  ['Canción 1', "Canción 2", "Canción 3"],
  ['Canción 1', "Canción 2"]
];

const miPortada = document.getElementById("imagen-principal-disco");
const miTitulo = document.getElementById("h2-principal-disco");
const miListado = document.getElementById("listado-canciones");

function cambiaDisco(queDisco) {
  const esteDisco = queDisco - 1;
  let listadoCanciones = "";
  canciones[esteDisco].forEach(disco => {
    listadoCanciones += `<li>${disco}</li>`;
  });
  miPortada.innerHTML = discos[esteDisco][0];
  miTitulo.innerHTML = discos[esteDisco][1];
  miListado.innerHTML = listadoCanciones;
}