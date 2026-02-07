# Exercices JavaScript - Séances 1 & 2

## Table des matières

1. [Typage dynamique](#exercice-1--typage-dynamique)
2. [Addition interactive](#exercice-2--addition-interactive)
3. [Vérification d'âge](#exercice-3--vérification-dâge)
4. [Opérations arithmétiques](#exercice-4--opérations-arithmétiques)
5. [Aiguillage géographique](#exercice-5--aiguillage-géographique)
6. [Menu de navigation](#exercice-6--menu-de-navigation)
7. [Tables de multiplication (boucles)](#exercice-7--tables-de-multiplication-avec-boucles)
8. [Table de multiplication (fonction)](#exercice-8--table-de-multiplication-avec-fonction)

---

## Exercice 1 : Typage dynamique

**Énoncé :** Démontrer le phénomène de typage dynamique en JavaScript. Stockez différentes valeurs (texte, nombre) dans des variables, réalisez une concaténation et utilisez l'opérateur `typeof` pour observer comment le type de la variable change en fonction du contenu.

**Solution :**

```javascript
const a = "Hello, World!";
let b = 25;

console.log("contenu de a =", a, typeof a);
console.log("contenu de b =", b, typeof b);

const c = a + b;
console.log("contenu de c =", c, typeof c);

let d = c + '' + a;
console.log("contenu de d =", d, typeof d);

d = 25;
console.log("contenu de d =", d, typeof d);

b = prompt("Saisir une valeur :", 24);
console.log("contenu de b =", b, typeof b);
```

---

## Exercice 2 : Addition interactive

**Énoncé :** Créer un programme d'addition interactive. L'utilisateur doit saisir deux valeurs. Vous devez forcer la conversion des entrées en nombres et prévoir une sécurité (valeur par défaut) au cas où l'utilisateur saisirait du texte au lieu d'un chiffre.

**Solution initiale :**

```javascript
let a = Number(prompt("Entrer un nombre a :"));
console.log("La valeur de a est : " + a);

let b = Number(prompt("Entrer un nombre b :"));
console.log("La valeur de b est : " + b);

let somme = Number(a) + Number(b);
console.log("La somme de a et b est : " + somme);
```

**Solution améliorée (avec validation) :**

```javascript
let a = parseInt(prompt("Entrer une valeur a :"));
if (isNaN(a)) a = 0;

let b = parseInt(prompt("Entrer une valeur b :"));
if (isNaN(b)) b = 0;

const resultat = a + b;
console.log("La somme de a et b est : " + resultat);
```

---

## Exercice 3 : Vérification d'âge

**Énoncé :** Écrire un script de vérification d'âge. Le programme doit distinguer trois cas : une entrée invalide, un utilisateur mineur et un utilisateur majeur.

**Solution :**

```javascript
const age = parseInt(prompt("Entrez votre âge :"));

if (isNaN(age) || age < 0) {
    console.log("Veuillez entrer un âge valide.");
} else if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
```

---

## Exercice 4 : Opérations arithmétiques

**Énoncé :** Demandez deux nombres et effectuez plusieurs opérations (somme, différence, produit). Affichez un message spécifique si le résultat est un multiple de 5 ou s'il répond à un critère de parité (pair/impair).

**Solution :**

```javascript
const nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
const nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

let somme = nombre1 + nombre2;
let difference = nombre1 - nombre2;
let produit = nombre1 * nombre2;

console.log("Somme : " + somme);
console.log("Différence : " + difference);
console.log("Produit : " + produit);

if (somme % 5 === 0) {
    console.log("La somme est un multiple de 5");
}

if (difference % 2 === 0) {
    console.log("La différence est paire");
} else {
    console.log("La différence est impaire");
}

if (produit % 2 === 0) {
    console.log("Le produit est pair");
} else {
    console.log("Le produit est impair");
}
```

---

## Exercice 5 : Aiguillage géographique

**Énoncé :** Développer un système d'aiguillage selon la provenance géographique de l'utilisateur. Réalisez cet exercice en utilisant d'abord une structure `if/else`, puis optimisez-le en utilisant un `switch`.

**Solution avec if/else :**

```javascript
const pays = prompt("Entrez votre pays :");

if (pays === "Sénégal") {
    console.log("Je suis sénégalais");
} else if (pays === "Maroc") {
    console.log("Je suis marocain");
} else if (pays === "Côte d'Ivoire") {
    console.log("Je suis ivoirien");
} else {
    console.log("Je suis un être humain");
}
```

**Solution avec switch :**

```javascript
const pays = prompt("Entrez votre pays :");

switch (pays) {
    case "Sénégal":
        console.log("Je suis sénégalais");
        break;
    case "Maroc":
        console.log("Je suis marocain");
        break;
    case "Côte d'Ivoire":
        console.log("Je suis ivoirien");
        break;
    default:
        console.log("Je suis un être humain");
        break;
}
```

---

## Exercice 6 : Menu de navigation

**Énoncé :** Concevoir une interface de navigation simple en ligne de commande. À l'aide d'une fenêtre contextuelle, demandez à l'utilisateur de choisir un numéro de menu. Gérez l'affichage du contenu correspondant à chaque option et prévoyez un message d'erreur si le choix ne fait pas partie de la liste proposée.

**Solution :**

```javascript
const choix = parseInt(prompt("Tapez votre choix (1, 2 ou 3) :"));

switch (choix) {
    case 1:
        console.log("Menu 1 sélectionné");
        break;
    case 2:
        console.log("Menu 2 sélectionné");
        break;
    case 3:
        console.log("Menu 3 sélectionné");
        break;
    default:
        console.log("Choix invalide.");
        break;
}
```

---

## Exercice 7 : Tables de multiplication avec boucles

**Énoncé :** Écrire un programme qui affiche la table de multiplication de 2 en utilisant les boucles `for`, `while` et `do...while`.

**Solution avec for :**

```javascript
console.log("Table de multiplication de 2 avec for :");
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}
```

**Solution avec while :**

```javascript
console.log("Table de multiplication de 2 avec while :");
let j = 1;
while (j <= 10) {
    console.log("2 x " + j + " = " + (2 * j));
    j++;
}
```

**Solution avec do...while :**

```javascript
console.log("Table de multiplication de 2 avec do...while :");
let k = 1;
do {
    console.log("2 x " + k + " = " + (2 * k));
    k++;
} while (k <= 10);
```

---

## Exercice 8 : Table de multiplication avec fonction

**Énoncé :** Créer une fonction réutilisable permettant de générer une table de multiplication. Le programme doit demander un nombre à l'utilisateur, le transmettre en argument à la fonction, et celle-ci doit se charger d'afficher les résultats de 0 à 10 dans la console.

**Solution :**

```javascript
function afficherTableMultiplication(nombre) {
    console.log("Table de multiplication de " + nombre + " :");
    for (let i = 0; i <= 10; i++) {
        console.log(nombre + " x " + i + " = " + (nombre * i));
    }
}

const number = parseInt(prompt("Entrer un nombre :"));
afficherTableMultiplication(number);
```
