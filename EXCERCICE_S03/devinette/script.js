function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let nombreADeviner = getRandomIntInclusive(0, 100);
const input = document.querySelector('input#nbre_saisie');
const resultat = document.querySelector('p#resultat');
let resultatList = [];

function onClickBtn() {
  let saisie = input.value;
  if (!saisie || isNaN(saisie)) {
    resultatList.push("Veuillez entrer un nombre valide.");
    // resultat.innerText = "Veuillez entrer un nombre valide.";
    return;
  }
  if (saisie < nombreADeviner) {
    resultatList.push("Le nombre à deviner est plus grand que  " + saisie);
    // resultat.innerText = "Le nombre à deviner est plus grand que  " + saisie;
  } else if (saisie > nombreADeviner) {
    resultatList.push("Le nombre à deviner est plus petit " + saisie);
    // resultat.innerText = "Le nombre à deviner est plus petit " + saisie;
  } else {
    resultatList.push("Super vous avez gagné. Le nombre est:  " + nombreADeviner);
    // resultat.innerText = "Super vous avez gagné. Le nombre est:  " + nombreADeviner;
  }
  resultat.innerHTML = "<ul>" + resultatList.map(item => `<li>${item}</li>`).join("") + "</ul>";
}

function onClickBtnReset() {
  nombreADeviner = getRandomIntInclusive(0, 100);
  input.value = "";
  resultatList = [];
  resultat.innerText = "";
  resultat.innerHTML = "";
}
