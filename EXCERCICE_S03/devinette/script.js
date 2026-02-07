function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nombreADeviner = getRandomIntInclusive(0, 100);
const input = document.querySelector('input#nbre_saisie');
const resultat = document.querySelector('p#resultat');

function onClickBtn() {
  let saisie = input.value;
  if (!saisie || isNaN(saisie)) {
    resultat.innerText = "Veuillez entrer un nombre valide.";
    return;
  }
  if (saisie < nombreADeviner) {
    resultat.innerText = "Le nombre à deviner est plus grand que  " + saisie;
  } else if (saisie > nombreADeviner) {
    resultat.innerText = "Le nombre à deviner est plus petit " + saisie;
  } else {
    resultat.innerText = "Super vous avez gagné. Le nombre est:  " + nombreADeviner;
  }
}
