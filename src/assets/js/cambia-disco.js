let discos = [
  ['<img src="./assets/img/queen-hot-space.jpg" alt="Hot space">', "Hot space"],
  ['<img src="./assets/img/queen-a-day-at-the-races.jpg" alt="A day at the races">', "A day at the races"],
  ['<img src="./assets/img/queen-flash-gordon.jpg" alt="Flash Gordon Theme">', "Flash Gordon Theme"],
  ['<img src="./assets/img/queen-gratest-hits-ii.jpg" alt="Queen gratest hits">', "Queen Gratest Hits"],
  ['<img src="./assets/img/queen-innuendo.jpg" alt="Innuendo">', "Innuendo"],
  ['<img src="./assets/img/queen-the-game.jpg" alt="The game">', "The game"]
];

let canciones = [
  ["Staying Power","Dancer","Back Chat,Body Language","Action This Day,Put Out The Fire","Life is Real (Song for Lennon)","Calling All Girls","Las Palabras De Amor (The Words Of Love)","Cool Cat", "Under Pressure"],
    ['Tie Your Mother Down',"You Take My Breath Away","Long Away", "The Millionaire Waltz","You and I", "Somebody To Love", "White Man", "Good Old-Fashioned Lover Boy", "Drowse","Teo Torriate (Let us Cling Together)"],
    ["Staying Power","Dancer","Back Chat","Body Language","Action This Day","Put Out the Fire","Life is Real (Song for Lennon)","Calling All Girls","Las Palabras de Amor","Cool Cat","Under Pressure"],
    ["Flash's Theme","In the Space Capsule(The Love Theme)","Ming's Theme (In the Court of Ming the Merciless)","The Ring (Hypnotic Seduction of Dale)","Football Fight","In The Death Cell (Love Theme Reprise)","Execution of Flash","The Kiss (Aura Resurrects Flash)","Arboria (Planet of the Tree Man)","Escape from the Swamp","Flash to the Rescue","Vultan's Theme (Attack of the Hawk Men)","Battle Theme","The Wedding March»	May","Marriage of Dale and Ming(And Flash Approaching)","Crash Dive on Mingo City","Flash's Theme Reprise"],
  ["Innuendo","I'm Going Slightly Mad","Headlong","I Can't Live With You","Don't Try So Hard","Ride The Wild Wind","All God's People","These Are The Days Of Our Lives","Delilah","The Hitman","Bijou","The Show Must Go On"],
["A Kind Of Magic","Under Pressure","Radio Ga Ga","I Want It All","I Want To Break Free","Innuendo","It's A Hard Life","Breakthru","Who Wants to Live Forever","Headlong","The Miracle","I'm Going Slightly Mad","The Invisible Man","Hammer To Fall","Friends Will Be Friends","The Show Must Go On","One Vision"]
]

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