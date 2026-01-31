# Séance 3, 4 & 5 — Fondamentaux JavaScript : fonctions, données et interaction navigateur

## Objectifs

- Décomposer un problème en sous-problèmes
- Réutiliser et structurer le code
- Manipuler des données
- Relier JavaScript à une interface web

---

## Notions

### 1. Les Fonctions

Une **fonction** est un bloc de code réutilisable qui effectue une tâche spécifique. Elle permet de :
- Éviter la répétition de code
- Organiser le programme en petites unités logiques
- Faciliter la maintenance et les tests

#### 1.1 Déclaration de fonction

```javascript
// Syntaxe de base
function nomDeLaFonction() {
  // Instructions à exécuter
  console.log("Bonjour !");
}

// Appel de la fonction
nomDeLaFonction(); // Affiche : Bonjour !
```

#### 1.2 Paramètres et valeur de retour

Les **paramètres** permettent de passer des données à une fonction.
Le mot-clé **`return`** permet de renvoyer un résultat.

```javascript
// Fonction avec paramètres
function saluer(prenom) {
  console.log("Bonjour " + prenom + " !");
}

saluer("Alice"); // Affiche : Bonjour Alice !
saluer("Bob");   // Affiche : Bonjour Bob !

// Fonction avec retour de valeur
function additionner(a, b) {
  return a + b;
}

let resultat = additionner(5, 3);
console.log(resultat); // Affiche : 8

// Fonction avec plusieurs paramètres et retour
function calculerPrixTTC(prixHT, tauxTVA) {
  let tva = prixHT * tauxTVA / 100;
  let prixTTC = prixHT + tva;
  return prixTTC;
}

let prix = calculerPrixTTC(100, 20);
console.log(prix); // Affiche : 120
```

#### 1.3 Portée des variables (Scope)

La **portée** détermine où une variable est accessible dans le code.

```javascript
// Variable globale (accessible partout)
let messageGlobal = "Je suis global";

function maFonction() {
  // Variable locale (accessible uniquement dans la fonction)
  let messageLocal = "Je suis local";

  console.log(messageGlobal); // ✅ Fonctionne
  console.log(messageLocal);  // ✅ Fonctionne
}

maFonction();
console.log(messageGlobal); // ✅ Fonctionne
console.log(messageLocal);  // ❌ Erreur : messageLocal n'est pas défini
```

**Règles importantes :**
- `let` et `const` ont une portée de **bloc** (entre `{ }`)
- `var` a une portée de **fonction** (à éviter)
- Une variable locale peut avoir le même nom qu'une variable globale (masquage)

```javascript
let compteur = 10; // Variable globale

function incrementer() {
  let compteur = 0; // Variable locale (différente de la globale)
  compteur++;
  console.log("Local :", compteur); // Affiche : Local : 1
}

incrementer();
console.log("Global :", compteur); // Affiche : Global : 10
```

#### 1.4 Fonctions fléchées (Arrow Functions)

Syntaxe plus concise introduite en ES6.

```javascript
// Fonction classique
function carre(x) {
  return x * x;
}

// Équivalent en fonction fléchée
const carre = (x) => {
  return x * x;
};

// Version ultra-courte (retour implicite)
const carre = x => x * x;

// Exemples
const doubler = x => x * 2;
console.log(doubler(5)); // Affiche : 10

const additionner = (a, b) => a + b;
console.log(additionner(3, 4)); // Affiche : 7

// Sans paramètre
const direBonjour = () => console.log("Bonjour !");
direBonjour();
```

**Quand utiliser les fonctions fléchées ?**
- Pour des fonctions courtes et simples
- Comme callbacks (fonctions passées en argument)
- Dans les méthodes de tableau (`map`, `filter`, `forEach`)

---

### 2. Structures de données

#### 2.1 Les Tableaux (Array)

Un **tableau** est une liste ordonnée de valeurs, accessibles par leur **index** (position).

```javascript
// Création d'un tableau
let fruits = ["pomme", "banane", "orange"];
let nombres = [1, 2, 3, 4, 5];
let mixte = ["texte", 42, true, null]; // Types différents possibles

// Accès aux éléments (index commence à 0)
console.log(fruits[0]); // "pomme"
console.log(fruits[1]); // "banane"
console.log(fruits[2]); // "orange"

// Modification d'un élément
fruits[1] = "mangue";
console.log(fruits); // ["pomme", "mangue", "orange"]

// Longueur du tableau
console.log(fruits.length); // 3
```

##### Méthodes essentielles des tableaux

```javascript
let liste = [1, 2, 3];

// push() - Ajouter à la fin
liste.push(4);
console.log(liste); // [1, 2, 3, 4]

// pop() - Retirer le dernier élément
let dernier = liste.pop();
console.log(dernier); // 4
console.log(liste);   // [1, 2, 3]

// unshift() - Ajouter au début
liste.unshift(0);
console.log(liste); // [0, 1, 2, 3]

// shift() - Retirer le premier élément
let premier = liste.shift();
console.log(premier); // 0
console.log(liste);   // [1, 2, 3]

// indexOf() - Trouver l'index d'un élément
let fruits = ["pomme", "banane", "orange"];
console.log(fruits.indexOf("banane")); // 1
console.log(fruits.indexOf("kiwi"));   // -1 (non trouvé)

// includes() - Vérifier si un élément existe
console.log(fruits.includes("pomme")); // true
console.log(fruits.includes("kiwi"));  // false

// splice() - Supprimer/ajouter des éléments
let couleurs = ["rouge", "vert", "bleu"];
couleurs.splice(1, 1); // Supprime 1 élément à l'index 1
console.log(couleurs); // ["rouge", "bleu"]

// slice() - Extraire une portion (ne modifie pas l'original)
let nombres = [1, 2, 3, 4, 5];
let portion = nombres.slice(1, 4);
console.log(portion); // [2, 3, 4]

// join() - Convertir en chaîne
let mots = ["Bonjour", "le", "monde"];
console.log(mots.join(" ")); // "Bonjour le monde"

// reverse() - Inverser l'ordre
let abc = ["a", "b", "c"];
abc.reverse();
console.log(abc); // ["c", "b", "a"]

// sort() - Trier
let lettres = ["c", "a", "b"];
lettres.sort();
console.log(lettres); // ["a", "b", "c"]
```

##### Parcourir un tableau

```javascript
let fruits = ["pomme", "banane", "orange"];

// Méthode 1 : for classique
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// Méthode 2 : for...of (recommandée pour les valeurs)
for (let fruit of fruits) {
  console.log(fruit);
}

// Méthode 3 : forEach (avec fonction callback)
fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});

// Version fléchée
fruits.forEach((fruit, index) => console.log(index, fruit));
```

##### Méthodes avancées (map, filter, reduce)

```javascript
let nombres = [1, 2, 3, 4, 5];

// map() - Transformer chaque élément
let doubles = nombres.map(n => n * 2);
console.log(doubles); // [2, 4, 6, 8, 10]

// filter() - Filtrer selon une condition
let pairs = nombres.filter(n => n % 2 === 0);
console.log(pairs); // [2, 4]

// reduce() - Réduire à une seule valeur
let somme = nombres.reduce((acc, n) => acc + n, 0);
console.log(somme); // 15

// find() - Trouver le premier élément correspondant
let premierPair = nombres.find(n => n % 2 === 0);
console.log(premierPair); // 2

// every() - Vérifier si TOUS correspondent
let tousPositifs = nombres.every(n => n > 0);
console.log(tousPositifs); // true

// some() - Vérifier si AU MOINS UN correspond
let auMoinsUnGrand = nombres.some(n => n > 4);
console.log(auMoinsUnGrand); // true
```

#### 2.2 Les Objets (Object)

Un **objet** est une collection de propriétés (paires clé-valeur).

```javascript
// Création d'un objet
let utilisateur = {
  nom: "Alice",
  age: 25,
  email: "alice@example.com",
  actif: true
};

// Accès aux propriétés
// Notation point (recommandée)
console.log(utilisateur.nom);   // "Alice"
console.log(utilisateur.age);   // 25

// Notation crochet (utile pour les clés dynamiques)
console.log(utilisateur["email"]); // "alice@example.com"

let propriete = "age";
console.log(utilisateur[propriete]); // 25

// Modification d'une propriété
utilisateur.age = 26;
console.log(utilisateur.age); // 26

// Ajout d'une nouvelle propriété
utilisateur.ville = "Paris";
console.log(utilisateur.ville); // "Paris"

// Suppression d'une propriété
delete utilisateur.actif;
console.log(utilisateur.actif); // undefined
```

##### Méthodes utiles pour les objets

```javascript
let voiture = {
  marque: "Peugeot",
  modele: "208",
  annee: 2020
};

// Object.keys() - Liste des clés
console.log(Object.keys(voiture));
// ["marque", "modele", "annee"]

// Object.values() - Liste des valeurs
console.log(Object.values(voiture));
// ["Peugeot", "208", 2020]

// Object.entries() - Liste des paires [clé, valeur]
console.log(Object.entries(voiture));
// [["marque", "Peugeot"], ["modele", "208"], ["annee", 2020]]

// Vérifier si une propriété existe
console.log("marque" in voiture); // true
console.log(voiture.hasOwnProperty("couleur")); // false
```

##### Parcourir un objet

```javascript
let personne = {
  prenom: "Jean",
  nom: "Dupont",
  age: 30
};

// for...in (pour les objets)
for (let cle in personne) {
  console.log(cle + " : " + personne[cle]);
}

// Avec Object.entries()
for (let [cle, valeur] of Object.entries(personne)) {
  console.log(cle + " : " + valeur);
}
```

##### Objets imbriqués

```javascript
let entreprise = {
  nom: "TechCorp",
  adresse: {
    rue: "123 Avenue de la Tech",
    ville: "Paris",
    codePostal: "75001"
  },
  employes: [
    { nom: "Alice", poste: "Développeuse" },
    { nom: "Bob", poste: "Designer" }
  ]
};

// Accès aux données imbriquées
console.log(entreprise.adresse.ville); // "Paris"
console.log(entreprise.employes[0].nom); // "Alice"
console.log(entreprise.employes[1].poste); // "Designer"
```

##### Différence entre Tableau et Objet

| Caractéristique | Tableau | Objet |
|----------------|---------|-------|
| Accès | Par index numérique (0, 1, 2...) | Par clé nommée |
| Ordre | Ordonné | Non garanti |
| Usage | Liste d'éléments similaires | Entité avec propriétés |
| Exemple | Liste de notes | Profil utilisateur |

```javascript
// Tableau : liste de valeurs similaires
let notes = [15, 12, 18, 14];

// Objet : entité avec des propriétés variées
let etudiant = {
  nom: "Alice",
  notes: [15, 12, 18, 14],
  moyenne: 14.75
};
```

---

### 3. JavaScript et navigateur (DOM)

Le **DOM** (Document Object Model) est une représentation de la page HTML que JavaScript peut manipuler.

#### 3.1 Structure HTML minimale

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Ma page</title>
</head>
<body>
  <h1 id="titre">Bienvenue</h1>
  <p class="description">Ceci est un paragraphe.</p>
  <button id="monBouton">Cliquez-moi</button>

  <script src="script.js"></script>
</body>
</html>
```

#### 3.2 Sélection d'éléments

```javascript
// Par ID (retourne UN élément)
let titre = document.getElementById("titre");

// Par sélecteur CSS (retourne LE PREMIER élément correspondant)
let titre = document.querySelector("#titre");
let paragraphe = document.querySelector(".description");
let bouton = document.querySelector("button");

// Par sélecteur CSS (retourne TOUS les éléments correspondants)
let tousLesParagraphes = document.querySelectorAll("p");
let toutesLesClasses = document.querySelectorAll(".description");

// Parcourir les résultats de querySelectorAll
tousLesParagraphes.forEach(p => {
  console.log(p.textContent);
});
```

#### 3.3 Modification du contenu

```javascript
let titre = document.querySelector("#titre");

// textContent - Modifier le texte (sécurisé, pas de HTML)
titre.textContent = "Nouveau titre";

// innerHTML - Modifier le HTML (attention aux failles XSS)
titre.innerHTML = "<em>Titre en italique</em>";

// Lire le contenu
console.log(titre.textContent);
```

#### 3.4 Modification des attributs et styles

```javascript
let image = document.querySelector("img");
let lien = document.querySelector("a");

// Attributs
image.src = "nouvelle-image.jpg";
image.alt = "Description de l'image";
lien.href = "https://example.com";

// getAttribute / setAttribute
console.log(lien.getAttribute("href"));
lien.setAttribute("target", "_blank");

// Styles CSS
let element = document.querySelector("#monElement");
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";
element.style.display = "none"; // Cacher l'élément

// Classes CSS
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible"); // Ajoute si absente, retire si présente
element.classList.contains("active"); // true ou false
```

#### 3.5 Événements

Les **événements** permettent de réagir aux actions de l'utilisateur.

```javascript
let bouton = document.querySelector("#monBouton");

// Méthode 1 : addEventListener (recommandée)
bouton.addEventListener("click", function() {
  console.log("Bouton cliqué !");
});

// Méthode 2 : avec fonction fléchée
bouton.addEventListener("click", () => {
  console.log("Bouton cliqué !");
});

// Méthode 3 : fonction nommée
function gererClic() {
  console.log("Bouton cliqué !");
}
bouton.addEventListener("click", gererClic);
```

##### Événements courants

| Événement | Description |
|-----------|-------------|
| `click` | Clic de souris |
| `dblclick` | Double-clic |
| `mouseover` | Souris entre sur l'élément |
| `mouseout` | Souris quitte l'élément |
| `keydown` | Touche enfoncée |
| `keyup` | Touche relâchée |
| `submit` | Formulaire soumis |
| `change` | Valeur modifiée (input, select) |
| `input` | Saisie en cours |
| `load` | Page chargée |
| `DOMContentLoaded` | DOM prêt |

##### L'objet événement (event)

```javascript
bouton.addEventListener("click", function(event) {
  // Informations sur l'événement
  console.log(event.type);   // "click"
  console.log(event.target); // L'élément cliqué

  // Empêcher le comportement par défaut
  event.preventDefault();

  // Arrêter la propagation
  event.stopPropagation();
});

// Exemple avec le clavier
document.addEventListener("keydown", function(event) {
  console.log("Touche pressée :", event.key);

  if (event.key === "Enter") {
    console.log("Entrée pressée !");
  }
});
```

#### 3.6 Créer et supprimer des éléments

```javascript
// Créer un élément
let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Je suis un nouveau paragraphe";
nouveauParagraphe.classList.add("nouveau");

// Ajouter au DOM
let conteneur = document.querySelector("#conteneur");
conteneur.appendChild(nouveauParagraphe);

// Insérer avant un élément
let reference = document.querySelector("#reference");
conteneur.insertBefore(nouveauParagraphe, reference);

// Supprimer un élément
let aSupprimer = document.querySelector("#aSupprimer");
aSupprimer.remove();
// ou
aSupprimer.parentNode.removeChild(aSupprimer);
```

#### 3.7 Formulaires

```html
<form id="monFormulaire">
  <input type="text" id="nom" placeholder="Votre nom">
  <input type="email" id="email" placeholder="Votre email">
  <button type="submit">Envoyer</button>
</form>
```

```javascript
let formulaire = document.querySelector("#monFormulaire");
let champNom = document.querySelector("#nom");
let champEmail = document.querySelector("#email");

// Lire les valeurs
console.log(champNom.value);
console.log(champEmail.value);

// Modifier les valeurs
champNom.value = "Jean Dupont";

// Gérer la soumission
formulaire.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  let nom = champNom.value;
  let email = champEmail.value;

  // Validation simple
  if (nom === "") {
    alert("Veuillez entrer votre nom");
    return;
  }

  console.log("Nom :", nom);
  console.log("Email :", email);

  // Réinitialiser le formulaire
  formulaire.reset();
});
```

---

## Pratique guidée

### Exemple 1 : Fonctions utilitaires

```javascript
// Fonction de calcul
function calculerMoyenne(notes) {
  if (notes.length === 0) return 0;

  let somme = 0;
  for (let note of notes) {
    somme += note;
  }
  return somme / notes.length;
}

// Fonction de validation
function validerEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Utilisation
let mesNotes = [15, 12, 18, 14, 16];
console.log("Moyenne :", calculerMoyenne(mesNotes));

console.log(validerEmail("test@example.com")); // true
console.log(validerEmail("invalid")); // false
```

### Exemple 2 : Manipulation de liste d'utilisateurs

```javascript
let utilisateurs = [
  { nom: "Alice", age: 25, actif: true },
  { nom: "Bob", age: 17, actif: false },
  { nom: "Charlie", age: 30, actif: true }
];

// Filtrer les utilisateurs majeurs et actifs
let utilisateursMajeursActifs = utilisateurs.filter(u => u.age >= 18 && u.actif);
console.log(utilisateursMajeursActifs);

// Extraire les noms
let noms = utilisateurs.map(u => u.nom);
console.log(noms); // ["Alice", "Bob", "Charlie"]

// Calculer l'âge moyen
let ageMoyen = utilisateurs.reduce((acc, u) => acc + u.age, 0) / utilisateurs.length;
console.log("Âge moyen :", ageMoyen);

// Trouver un utilisateur par nom
function trouverParNom(nom) {
  return utilisateurs.find(u => u.nom === nom);
}
console.log(trouverParNom("Bob"));
```

### Exemple 3 : Interaction page web

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Liste de tâches</title>
  <style>
    .completed { text-decoration: line-through; color: gray; }
  </style>
</head>
<body>
  <h1>Ma liste de tâches</h1>
  <input type="text" id="nouvelleTache" placeholder="Nouvelle tâche">
  <button id="ajouterBtn">Ajouter</button>
  <ul id="listeTaches"></ul>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
let input = document.querySelector("#nouvelleTache");
let boutonAjouter = document.querySelector("#ajouterBtn");
let liste = document.querySelector("#listeTaches");

boutonAjouter.addEventListener("click", function() {
  let texte = input.value.trim();

  if (texte === "") {
    alert("Veuillez entrer une tâche");
    return;
  }

  // Créer un nouvel élément
  let li = document.createElement("li");
  li.textContent = texte;

  // Clic pour marquer comme terminé
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // Ajouter à la liste
  liste.appendChild(li);

  // Vider l'input
  input.value = "";
});

// Permettre l'ajout avec la touche Entrée
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    boutonAjouter.click();
  }
});
```

---

## Exercices

### Exercice 1 — Fonctions mathématiques

**Objectif :** Créer des fonctions de calcul simples.

```javascript
// À compléter

// 1. Créer une fonction addition(a, b) qui retourne la somme
function addition(a, b) {
  // Votre code ici
}

// 2. Créer une fonction soustraction(a, b) qui retourne la différence
function soustraction(a, b) {
  // Votre code ici
}

// 3. Créer une fonction multiplication(a, b)
function multiplication(a, b) {
  // Votre code ici
}

// 4. Créer une fonction division(a, b) avec gestion de la division par 0
function division(a, b) {
  // Votre code ici
}

// Tests
console.log(addition(5, 3));       // Attendu : 8
console.log(soustraction(10, 4));  // Attendu : 6
console.log(multiplication(3, 7)); // Attendu : 21
console.log(division(20, 4));      // Attendu : 5
console.log(division(10, 0));      // Attendu : message d'erreur
```

<details>
<summary>Solution</summary>

```javascript
function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Erreur : division par zéro impossible";
  }
  return a / b;
}
```
</details>

---

### Exercice 2 — Validation simple

**Objectif :** Créer une fonction de validation d'âge.

```javascript
// À compléter

// 1. Créer une fonction estMajeur(age) qui retourne true si age >= 18
function estMajeur(age) {
  // Votre code ici
}

// 2. Utiliser la fonction dans une condition
let ageUtilisateur = 16;

if (estMajeur(ageUtilisateur)) {
  console.log("Accès autorisé");
} else {
  console.log("Accès refusé - vous devez être majeur");
}

// 3. Bonus : Créer estAgeValide(age) qui vérifie si l'âge est un nombre entre 0 et 150
function estAgeValide(age) {
  // Votre code ici
}

// Tests
console.log(estMajeur(25));  // Attendu : true
console.log(estMajeur(16));  // Attendu : false
console.log(estMajeur(18));  // Attendu : true
```

<details>
<summary>Solution</summary>

```javascript
function estMajeur(age) {
  return age >= 18;
}

function estAgeValide(age) {
  return typeof age === "number" && age >= 0 && age <= 150;
}

let ageUtilisateur = 16;

if (estMajeur(ageUtilisateur)) {
  console.log("Accès autorisé");
} else {
  console.log("Accès refusé - vous devez être majeur");
}
```
</details>

---

### Exercice 3 — Liste de notes

**Objectif :** Manipuler un tableau de nombres.

```javascript
// Tableau de notes
let notes = [15, 12, 18, 8, 14, 16, 11, 19];

// 1. Calculer la moyenne des notes
function calculerMoyenne(tableau) {
  // Votre code ici
}

// 2. Trouver la meilleure note
function trouverMax(tableau) {
  // Votre code ici
}

// 3. Trouver la moins bonne note
function trouverMin(tableau) {
  // Votre code ici
}

// 4. Compter le nombre de notes >= 10 (réussites)
function compterReussites(tableau) {
  // Votre code ici
}

// 5. Bonus : Calculer la mention selon la moyenne
function obtenirMention(moyenne) {
  // Très bien >= 16, Bien >= 14, Assez bien >= 12, Passable >= 10, Échec < 10
  // Votre code ici
}

// Tests
console.log("Moyenne :", calculerMoyenne(notes));
console.log("Meilleure note :", trouverMax(notes));
console.log("Moins bonne note :", trouverMin(notes));
console.log("Nombre de réussites :", compterReussites(notes));
```

<details>
<summary>Solution</summary>

```javascript
let notes = [15, 12, 18, 8, 14, 16, 11, 19];

function calculerMoyenne(tableau) {
  if (tableau.length === 0) return 0;
  let somme = tableau.reduce((acc, note) => acc + note, 0);
  return somme / tableau.length;
}

function trouverMax(tableau) {
  return Math.max(...tableau);
}

function trouverMin(tableau) {
  return Math.min(...tableau);
}

function compterReussites(tableau) {
  return tableau.filter(note => note >= 10).length;
}

function obtenirMention(moyenne) {
  if (moyenne >= 16) return "Très bien";
  if (moyenne >= 14) return "Bien";
  if (moyenne >= 12) return "Assez bien";
  if (moyenne >= 10) return "Passable";
  return "Échec";
}

console.log("Moyenne :", calculerMoyenne(notes)); // 14.125
console.log("Meilleure note :", trouverMax(notes)); // 19
console.log("Moins bonne note :", trouverMin(notes)); // 8
console.log("Nombre de réussites :", compterReussites(notes)); // 7
console.log("Mention :", obtenirMention(calculerMoyenne(notes))); // Bien
```
</details>

---

### Exercice 4 — Objet utilisateur

**Objectif :** Manipuler un objet et ses propriétés.

```javascript
// Objet utilisateur
let utilisateur = {
  nom: "Alice",
  age: 25,
  actif: true,
  email: "alice@example.com"
};

// 1. Afficher une phrase de présentation
function presenter(user) {
  // Retourner : "Alice a 25 ans et est actuellement actif/inactive."
  // Votre code ici
}

// 2. Modifier l'âge de l'utilisateur
function anniversaire(user) {
  // Augmenter l'âge de 1
  // Votre code ici
}

// 3. Désactiver le compte
function desactiverCompte(user) {
  // Votre code ici
}

// 4. Ajouter une propriété "ville"
function ajouterVille(user, ville) {
  // Votre code ici
}

// 5. Bonus : Créer une copie de l'utilisateur avec un nouveau nom
function copierAvecNouveauNom(user, nouveauNom) {
  // Votre code ici
}

// Tests
console.log(presenter(utilisateur));
anniversaire(utilisateur);
console.log(utilisateur.age); // 26
```

<details>
<summary>Solution</summary>

```javascript
let utilisateur = {
  nom: "Alice",
  age: 25,
  actif: true,
  email: "alice@example.com"
};

function presenter(user) {
  let statut = user.actif ? "actif" : "inactif";
  return user.nom + " a " + user.age + " ans et est actuellement " + statut + ".";
}

function anniversaire(user) {
  user.age++;
}

function desactiverCompte(user) {
  user.actif = false;
}

function ajouterVille(user, ville) {
  user.ville = ville;
}

function copierAvecNouveauNom(user, nouveauNom) {
  return { ...user, nom: nouveauNom };
}

console.log(presenter(utilisateur)); // "Alice a 25 ans et est actuellement actif."
anniversaire(utilisateur);
console.log(utilisateur.age); // 26
ajouterVille(utilisateur, "Paris");
console.log(utilisateur.ville); // "Paris"
```
</details>

---

### Exercice 5 — Bouton compteur

**Objectif :** Créer un compteur interactif avec le DOM.

**HTML :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Compteur</title>
</head>
<body>
  <h1>Compteur : <span id="valeur">0</span></h1>
  <button id="incrementer">+1</button>
  <button id="decrementer">-1</button>
  <button id="reinitialiser">Réinitialiser</button>

  <script src="compteur.js"></script>
</body>
</html>
```

**JavaScript (compteur.js) :**
```javascript
// 1. Sélectionner les éléments
let affichage = document.querySelector("#valeur");
let btnPlus = document.querySelector("#incrementer");
let btnMoins = document.querySelector("#decrementer");
let btnReset = document.querySelector("#reinitialiser");

// 2. Variable pour stocker le compteur
let compteur = 0;

// 3. Fonction pour mettre à jour l'affichage
function mettreAJour() {
  // Votre code ici
}

// 4. Ajouter les événements
// Votre code ici
```

<details>
<summary>Solution</summary>

```javascript
let affichage = document.querySelector("#valeur");
let btnPlus = document.querySelector("#incrementer");
let btnMoins = document.querySelector("#decrementer");
let btnReset = document.querySelector("#reinitialiser");

let compteur = 0;

function mettreAJour() {
  affichage.textContent = compteur;
}

btnPlus.addEventListener("click", function() {
  compteur++;
  mettreAJour();
});

btnMoins.addEventListener("click", function() {
  compteur--;
  mettreAJour();
});

btnReset.addEventListener("click", function() {
  compteur = 0;
  mettreAJour();
});
```
</details>

---

### Exercice 6 — Formulaire simple

**Objectif :** Capturer et afficher la saisie utilisateur.

**HTML :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Formulaire</title>
</head>
<body>
  <h1>Inscription</h1>

  <form id="formulaire">
    <div>
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" required>
    </div>
    <div>
      <label for="email">Email :</label>
      <input type="email" id="email" required>
    </div>
    <button type="submit">S'inscrire</button>
  </form>

  <div id="resultat"></div>

  <script src="formulaire.js"></script>
</body>
</html>
```

**JavaScript (formulaire.js) :**
```javascript
// 1. Sélectionner les éléments
let formulaire = document.querySelector("#formulaire");
let inputPrenom = document.querySelector("#prenom");
let inputEmail = document.querySelector("#email");
let resultat = document.querySelector("#resultat");

// 2. Gérer la soumission du formulaire
formulaire.addEventListener("submit", function(event) {
  // Empêcher le rechargement de la page
  // Votre code ici

  // Récupérer les valeurs
  // Votre code ici

  // Valider les données
  // Votre code ici

  // Afficher le résultat
  // Votre code ici

  // Réinitialiser le formulaire
  // Votre code ici
});
```

<details>
<summary>Solution</summary>

```javascript
let formulaire = document.querySelector("#formulaire");
let inputPrenom = document.querySelector("#prenom");
let inputEmail = document.querySelector("#email");
let resultat = document.querySelector("#resultat");

formulaire.addEventListener("submit", function(event) {
  event.preventDefault();

  let prenom = inputPrenom.value.trim();
  let email = inputEmail.value.trim();

  if (prenom === "" || email === "") {
    resultat.textContent = "Veuillez remplir tous les champs.";
    resultat.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    resultat.textContent = "Email invalide.";
    resultat.style.color = "red";
    return;
  }

  resultat.innerHTML = "<strong>Inscription réussie !</strong><br>" +
                       "Prénom : " + prenom + "<br>" +
                       "Email : " + email;
  resultat.style.color = "green";

  formulaire.reset();
});
```
</details>

---

## Mini-évaluation

### Lecture de code

Analysez le code suivant et répondez aux questions :

```javascript
function mystere(tableau) {
  let resultat = 0;
  for (let element of tableau) {
    if (element > resultat) {
      resultat = element;
    }
  }
  return resultat;
}

console.log(mystere([3, 7, 2, 9, 5]));
```

**Questions :**
1. Que retourne cette fonction ?
2. Quel est le rôle de cette fonction ?
3. Que se passe-t-il si le tableau est vide ?

<details>
<summary>Réponses</summary>

1. La fonction retourne `9`
2. Elle trouve et retourne la valeur maximale du tableau
3. Si le tableau est vide, la fonction retourne `0` (la valeur initiale de `resultat`)
</details>

---

### Concepts

**Question :** Expliquez la différence concrète entre un tableau et un objet. Donnez un exemple pour chacun.

<details>
<summary>Réponse attendue</summary>

**Tableau :**
- Collection ordonnée d'éléments accessibles par index numérique
- Utilisé pour stocker des listes d'éléments similaires
- Exemple : une liste de courses

```javascript
let courses = ["pain", "lait", "oeufs"];
console.log(courses[0]); // "pain"
```

**Objet :**
- Collection de propriétés (paires clé-valeur)
- Utilisé pour décrire une entité avec différentes caractéristiques
- Exemple : une fiche de contact

```javascript
let contact = {
  nom: "Dupont",
  telephone: "0612345678",
  ville: "Paris"
};
console.log(contact.nom); // "Dupont"
```
</details>

---

### DOM

Analysez le code suivant :

```javascript
let bouton = document.querySelector("#valider");

bouton.addEventListener("click", function() {
  let message = document.querySelector("#message");
  message.textContent = "Formulaire validé !";
  message.style.color = "green";
});
```

**Identifiez :**
1. L'élément sélectionné
2. L'événement écouté
3. L'action déclenchée

<details>
<summary>Réponses</summary>

1. **Élément sélectionné :** Un élément avec l'id "valider" (probablement un bouton)
2. **Événement écouté :** Le clic (`click`)
3. **Action déclenchée :**
   - Sélection d'un élément avec l'id "message"
   - Modification de son contenu texte en "Formulaire validé !"
   - Changement de la couleur du texte en vert
</details>

---

## Ressources complémentaires

### Liens utiles
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [MDN Web Docs - DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)
- [JavaScript.info](https://fr.javascript.info/)

### Aide-mémoire

#### Fonctions
```javascript
// Déclaration
function nom(param1, param2) {
  return resultat;
}

// Fléchée
const nom = (param1, param2) => resultat;
```

#### Tableaux
```javascript
let arr = [1, 2, 3];
arr.push(4);      // Ajouter
arr.pop();        // Retirer
arr.length;       // Taille
arr[0];           // Accès
arr.forEach();    // Parcourir
arr.map();        // Transformer
arr.filter();     // Filtrer
```

#### Objets
```javascript
let obj = { cle: "valeur" };
obj.cle;          // Accès
obj["cle"];       // Accès dynamique
obj.nouvelle = x; // Ajouter
delete obj.cle;   // Supprimer
```

#### DOM
```javascript
document.querySelector("#id");      // Sélection
element.textContent = "texte";      // Modifier texte
element.style.color = "red";        // Modifier style
element.addEventListener("click", fn); // Événement
```
