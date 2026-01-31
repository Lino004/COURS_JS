# Séance 2  — Logique et contrôle du flux

### Objectifs

- Savoir faire des décisions et des répétitions

### Notions

- Opérateurs (`+`, , `===`, `!==`, `<`, `&&`, `||`)
- Conditions : `if / else`
- Boucles : `while`, `for`

### Pratique

- Jeux de devinettes
- Table de multiplication
- Validation de saisie

---

## 1. Ce qu’est la logique en programmation

### Message clé

> Programmer, c’est prendre des décisions et répéter des actions.
> 

Lien avec la vie réelle :

- “Si il pleut, je prends un parapluie”
- “Je répète jusqu’à ce que…”

---

## 2. Opérateurs

### Rôle des opérateurs

> Les opérateurs permettent de comparer et de combiner des valeurs.
> 

---

### Opérateurs arithmétiques

- `+` addition
- `-` soustraction
- `*` multiplication
- `/` division

⚠️ Précisions : `+` peut aussi concaténer des chaînes (sans approfondir).

### Exemples d'opérateurs arithmétiques

```javascript
let a = 15;
let b = 4;

// Opérations de base
console.log(a + b);   // Addition : 19
console.log(a - b);   // Soustraction : 11
console.log(a * b);   // Multiplication : 60
console.log(a / b);   // Division : 3.75

// Opérateurs supplémentaires
console.log(a % b);   // Modulo (reste de la division) : 3
console.log(a ** 2);  // Puissance : 225 (15²)

// Le modulo est utile pour :
// - Savoir si un nombre est pair ou impair
console.log(10 % 2);  // 0 → pair
console.log(7 % 2);   // 1 → impair

// - Obtenir un cycle (ex: jours de la semaine)
console.log(8 % 7);   // 1 (8ème jour = jour 1)
```

### Opérateurs d'affectation composée

```javascript
let score = 10;

score += 5;   // Équivalent à : score = score + 5  → 15
score -= 3;   // Équivalent à : score = score - 3  → 12
score *= 2;   // Équivalent à : score = score * 2  → 24
score /= 4;   // Équivalent à : score = score / 4  → 6

// Incrémentation / Décrémentation
let compteur = 0;
compteur++;   // compteur = compteur + 1 → 1
compteur++;   // → 2
compteur--;   // compteur = compteur - 1 → 1
```

---

### Opérateurs de comparaison

### À expliquer lentement

- `===` : strictement égal
- `!==` : strictement différent
- `<`, `>`, `<=`, `>=`

Message clé :

> On compare des valeurs, pas des intentions.
>

NB sur `===` :

- évite les surprises
- on n'utilise pas `==`

### Exemples de comparaisons

```javascript
let age = 20;
let limite = 18;

// Comparaisons de base
console.log(age > limite);    // true (20 > 18)
console.log(age < limite);    // false (20 < 18)
console.log(age >= 20);       // true (20 >= 20)
console.log(age <= 19);       // false (20 <= 19)

// Égalité stricte (===) vs égalité simple (==)
console.log(5 === 5);         // true (même valeur, même type)
console.log(5 === "5");       // false (types différents)
console.log(5 == "5");        // true ⚠️ (conversion automatique)

// Différence stricte (!==) vs différence simple (!=)
console.log(5 !== "5");       // true (types différents)
console.log(5 != "5");        // false ⚠️ (conversion automatique)

// Pourquoi toujours utiliser === et !== ?
console.log(0 == false);      // true ⚠️ Surprise !
console.log(0 === false);     // false ✅ Plus prévisible

console.log("" == false);     // true ⚠️ Surprise !
console.log("" === false);    // false ✅ Plus prévisible

console.log(null == undefined);  // true ⚠️
console.log(null === undefined); // false ✅
```

### Tableau récapitulatif des comparaisons

| Opérateur | Signification | Exemple | Résultat |
|-----------|---------------|---------|----------|
| `===` | Strictement égal | `5 === 5` | `true` |
| `!==` | Strictement différent | `5 !== "5"` | `true` |
| `>` | Supérieur | `10 > 5` | `true` |
| `<` | Inférieur | `10 < 5` | `false` |
| `>=` | Supérieur ou égal | `5 >= 5` | `true` |
| `<=` | Inférieur ou égal | `5 <= 4` | `false` |

---

### Opérateurs logiques

- `&&` : ET
- `||` : OU
- `!` : NON (négation)

Expliquer avec des phrases :

- "Si A **et** B sont vrais"
- "Si A **ou** B est vrai"
- "Si A n'est **pas** vrai"

### Exemples d'opérateurs logiques

```javascript
let age = 25;
let aPermis = true;
let aVoiture = false;

// ET (&&) : les DEUX conditions doivent être vraies
console.log(age >= 18 && aPermis);  // true (25 >= 18 ET a le permis)
console.log(age >= 18 && aVoiture); // false (25 >= 18 MAIS pas de voiture)
console.log(aPermis && aVoiture);   // false (a le permis MAIS pas de voiture)

// OU (||) : AU MOINS UNE condition doit être vraie
console.log(aPermis || aVoiture);   // true (a le permis)
console.log(age < 18 || aPermis);   // true (a le permis, même si pas mineur)
console.log(age < 18 || aVoiture);  // false (ni mineur, ni voiture)

// NON (!) : inverse la valeur
console.log(!true);                 // false
console.log(!false);                // true
console.log(!aVoiture);             // true (il n'a PAS de voiture → vrai)
console.log(!(age >= 18));          // false (il n'est PAS majeur → faux)
```

### Tables de vérité

**ET (&&)**
| A | B | A && B |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

**OU (||)**
| A | B | A \|\| B |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | true    |
| false | true  | true    |
| false | false | false   |

### Exemples concrets du quotidien

```javascript
// Accès à un site pour adultes
let age = 20;
let aAutorisationParentale = false;
let peutAcceder = (age >= 18) || aAutorisationParentale;
console.log(peutAcceder);  // true

// Réduction étudiant ou senior
let estEtudiant = true;
let estSenior = false;
let aReduction = estEtudiant || estSenior;
console.log(aReduction);  // true

// Connexion sécurisée
let motDePasseCorrect = true;
let doubleAuthentification = true;
let estConnecte = motDePasseCorrect && doubleAuthentification;
console.log(estConnecte);  // true
```

---

## 3. Conditions : `if / else`

### Concept

> Une condition permet d'exécuter du code seulement si quelque chose est vrai.
>

### Structure mentale

1. On pose une question
2. JavaScript répond par `true` ou `false`
3. Le code s'exécute ou non

### À marteler

- La condition doit être **lisible**
- Le corps du `if` n'est pas automatique

### Syntaxe de base

```javascript
// Structure if simple
if (condition) {
    // Code exécuté si la condition est vraie
}

// Structure if / else
if (condition) {
    // Code si vrai
} else {
    // Code si faux
}

// Structure if / else if / else
if (condition1) {
    // Code si condition1 est vraie
} else if (condition2) {
    // Code si condition2 est vraie
} else {
    // Code si aucune condition n'est vraie
}
```

### Exemples pratiques

```javascript
// Exemple 1 : Vérification de l'âge
let age = 17;

if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
// Affiche : "Vous êtes mineur."

// Exemple 2 : Note d'examen
let note = 14;

if (note >= 16) {
    console.log("Très bien !");
} else if (note >= 14) {
    console.log("Bien !");
} else if (note >= 10) {
    console.log("Passable.");
} else {
    console.log("Insuffisant.");
}
// Affiche : "Bien !"

// Exemple 3 : Conditions multiples avec && et ||
let heure = 14;
let estWeekend = false;

if (heure >= 9 && heure <= 18 && !estWeekend) {
    console.log("Le magasin est ouvert.");
} else {
    console.log("Le magasin est fermé.");
}
// Affiche : "Le magasin est ouvert."
```

### L'opérateur ternaire (raccourci)

```javascript
// Syntaxe : condition ? valeurSiVrai : valeurSiFaux

let age = 20;
let statut = age >= 18 ? "majeur" : "mineur";
console.log(statut);  // "majeur"

// Équivalent avec if/else :
let statut2;
if (age >= 18) {
    statut2 = "majeur";
} else {
    statut2 = "mineur";
}
```

### Le switch (alternative au if/else if)

```javascript
let jour = 3;
let nomJour;

switch (jour) {
    case 1:
        nomJour = "Lundi";
        break;
    case 2:
        nomJour = "Mardi";
        break;
    case 3:
        nomJour = "Mercredi";
        break;
    case 4:
        nomJour = "Jeudi";
        break;
    case 5:
        nomJour = "Vendredi";
        break;
    case 6:
        nomJour = "Samedi";
        break;
    case 7:
        nomJour = "Dimanche";
        break;
    default:
        nomJour = "Jour invalide";
}

console.log(nomJour);  // "Mercredi"
```

### Erreurs courantes à éviter

```javascript
// ❌ ERREUR : utiliser = au lieu de === dans une condition
let x = 5;
if (x = 10) {  // Ceci ASSIGNE 10 à x, ne compare pas !
    console.log("Égal à 10");
}

// ✅ CORRECT
if (x === 10) {
    console.log("Égal à 10");
}

// ❌ ERREUR : oublier les accolades (risqué)
if (x > 5)
    console.log("Premier");
    console.log("Deuxième");  // S'exécute toujours !

// ✅ CORRECT : toujours utiliser des accolades
if (x > 5) {
    console.log("Premier");
    console.log("Deuxième");
}
```

---

## 4. Boucle `while`

### Concept

> Une boucle while répète tant qu'une condition est vraie.
>

### Danger à expliquer

- Boucle infinie
- Condition qui ne change jamais

Phrase utile :

> Une boucle doit toujours avoir une sortie.
>

### Syntaxe

```javascript
while (condition) {
    // Code répété tant que la condition est vraie
    // IMPORTANT : modifier quelque chose pour que la condition devienne fausse
}
```

### Exemples pratiques

```javascript
// Exemple 1 : Compte à rebours
let compte = 5;

while (compte > 0) {
    console.log(compte);
    compte--;  // CRUCIAL : on diminue pour sortir de la boucle
}
console.log("Décollage !");
// Affiche : 5, 4, 3, 2, 1, "Décollage !"

// Exemple 2 : Somme des nombres de 1 à 10
let somme = 0;
let i = 1;

while (i <= 10) {
    somme += i;  // somme = somme + i
    i++;
}
console.log("Somme :", somme);  // Somme : 55

// Exemple 3 : Chercher un nombre pair
let nombre = 1;

while (nombre % 2 !== 0) {
    nombre = Math.floor(Math.random() * 10) + 1;  // Nombre aléatoire entre 1 et 10
    console.log("Essai :", nombre);
}
console.log("Nombre pair trouvé :", nombre);
```

### La boucle do...while

```javascript
// S'exécute AU MOINS UNE FOIS, puis vérifie la condition

let compteur = 0;

do {
    console.log("Exécution n°", compteur);
    compteur++;
} while (compteur < 3);

// Affiche : "Exécution n° 0", "Exécution n° 1", "Exécution n° 2"

// Différence avec while :
let x = 10;

// Avec while : ne s'exécute pas (condition fausse dès le départ)
while (x < 5) {
    console.log("While :", x);
    x++;
}

// Avec do...while : s'exécute UNE fois
do {
    console.log("Do-while :", x);  // Affiche : "Do-while : 10"
    x++;
} while (x < 5);
```

### ⚠️ Danger : La boucle infinie

```javascript
// ❌ BOUCLE INFINIE - Ne jamais faire ça !
let i = 0;
while (i < 10) {
    console.log(i);
    // Oubli de i++ → la condition reste toujours vraie
    // Le navigateur va planter !
}

// ✅ CORRECT
let j = 0;
while (j < 10) {
    console.log(j);
    j++;  // On incrémente pour atteindre la condition de sortie
}
``` 

---

## 5. Boucle `for`

### Pourquoi `for` existe

> Quand on sait combien de fois on répète.
>

### Décomposition mentale

- Départ (initialisation)
- Condition (test)
- Incrément (mise à jour)

Insister sur :

- l'ordre
- la lecture ligne par ligne

### Syntaxe

```javascript
for (initialisation; condition; incrément) {
    // Code répété
}

// Décomposition :
// 1. initialisation : exécutée UNE SEULE FOIS au début
// 2. condition : vérifiée AVANT chaque itération
// 3. incrément : exécuté APRÈS chaque itération
```

### Exemples pratiques

```javascript
// Exemple 1 : Compter de 1 à 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Affiche : 1, 2, 3, 4, 5

// Exemple 2 : Compte à rebours
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// Affiche : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

// Exemple 3 : Compter de 2 en 2 (nombres pairs)
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Affiche : 0, 2, 4, 6, 8, 10

// Exemple 4 : Table de multiplication
let nombre = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}
// Affiche : 7 x 1 = 7, 7 x 2 = 14, ..., 7 x 10 = 70

// Exemple 5 : Calculer la factorielle (5! = 5*4*3*2*1)
let n = 5;
let factorielle = 1;
for (let i = n; i >= 1; i--) {
    factorielle *= i;
}
console.log(`${n}! = ${factorielle}`);  // 5! = 120
```

### Boucles imbriquées

```javascript
// Afficher un carré d'étoiles
for (let ligne = 1; ligne <= 3; ligne++) {
    let etoiles = "";
    for (let colonne = 1; colonne <= 3; colonne++) {
        etoiles += "* ";
    }
    console.log(etoiles);
}
// Affiche :
// * * *
// * * *
// * * *

// Table de multiplication complète
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}
```

### Contrôle de boucle : break et continue

```javascript
// break : SORTIR immédiatement de la boucle
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Sort de la boucle quand i vaut 5
    }
    console.log(i);
}
// Affiche : 1, 2, 3, 4

// continue : SAUTER l'itération actuelle
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Saute quand i vaut 3
    }
    console.log(i);
}
// Affiche : 1, 2, 4, 5 (le 3 est sauté)

// Exemple pratique : trouver le premier multiple de 7
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("Premier multiple de 7 :", i);
        break;
    }
}
// Affiche : Premier multiple de 7 : 7
```

### Comparaison while vs for

```javascript
// Ces deux codes font exactement la même chose :

// Avec while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Avec for (plus compact)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Règle générale :
// - for : quand on connaît le nombre d'itérations
// - while : quand on ne sait pas à l'avance
```

---

## 6. Valeurs Falsy et Truthy

### Concept fondamental

> En JavaScript, chaque valeur peut être évaluée comme "vraie" (truthy) ou "fausse" (falsy) dans un contexte booléen.

Quand on utilise une valeur dans une condition (`if`, `while`, etc.), JavaScript la convertit automatiquement en `true` ou `false`.

### Qu'est-ce qu'une valeur Falsy ?

Une valeur **falsy** est une valeur qui est considérée comme `false` quand elle est évaluée dans un contexte booléen.

### Les 6 valeurs Falsy en JavaScript

```javascript
// 1. false - le booléen faux lui-même
if (false) {
    console.log("Jamais affiché");
}

// 2. 0 - le nombre zéro
if (0) {
    console.log("Jamais affiché");
}

// 3. "" ou '' ou `` - chaîne de caractères vide
if ("") {
    console.log("Jamais affiché");
}

// 4. null - absence intentionnelle de valeur
if (null) {
    console.log("Jamais affiché");
}

// 5. undefined - variable non définie
if (undefined) {
    console.log("Jamais affiché");
}

// 6. NaN - "Not a Number" (résultat d'un calcul invalide)
if (NaN) {
    console.log("Jamais affiché");
}
```

### Démonstration avec Boolean()

```javascript
// La fonction Boolean() montre comment une valeur est convertie
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
```

### Qu'est-ce qu'une valeur Truthy ?

Toute valeur qui n'est **pas falsy** est **truthy** (considérée comme vraie).

```javascript
// Exemples de valeurs truthy
console.log(Boolean(true));       // true - le booléen vrai
console.log(Boolean(1));          // true - tout nombre non-zéro
console.log(Boolean(-1));         // true - même négatif !
console.log(Boolean(0.5));        // true
console.log(Boolean("Bonjour"));  // true - chaîne non vide
console.log(Boolean("0"));        // true ⚠️ - "0" est une chaîne non vide !
console.log(Boolean("false"));    // true ⚠️ - "false" est une chaîne non vide !
console.log(Boolean([]));         // true - tableau vide est truthy !
console.log(Boolean({}));         // true - objet vide est truthy !
```

### Exemples pratiques d'utilisation

```javascript
// Exemple 1 : Vérifier si une variable a une valeur
let nom = "";

if (nom) {
    console.log("Bonjour " + nom);
} else {
    console.log("Nom non renseigné");  // ← Exécuté car "" est falsy
}

// Exemple 2 : Vérifier si un utilisateur est connecté
let utilisateur = null;  // Pas d'utilisateur connecté

if (utilisateur) {
    console.log("Bienvenue !");
} else {
    console.log("Veuillez vous connecter");  // ← Exécuté car null est falsy
}

// Exemple 3 : Vérifier un score
let score = 0;

if (score) {
    console.log("Votre score : " + score);
} else {
    console.log("Aucun point marqué");  // ← Exécuté car 0 est falsy
}

// Exemple 4 : Valeur par défaut avec ||
let nomUtilisateur = "";
let nomAffiche = nomUtilisateur || "Invité";
console.log(nomAffiche);  // "Invité" car "" est falsy

let age = 0;
let ageAffiche = age || "Non spécifié";
console.log(ageAffiche);  // "Non spécifié" car 0 est falsy ⚠️
```

### ⚠️ Pièges courants avec les valeurs Falsy

```javascript
// Piège 1 : 0 est falsy mais peut être une valeur valide
let temperature = 0;  // 0 degrés est une vraie température !

// ❌ Mauvais : traite 0 comme "pas de valeur"
if (temperature) {
    console.log("Température :", temperature);
} else {
    console.log("Pas de température");  // Exécuté même si 0 est valide !
}

// ✅ Correct : vérifier explicitement
if (temperature !== undefined && temperature !== null) {
    console.log("Température :", temperature);  // Fonctionne avec 0
}

// Piège 2 : "" est falsy mais peut être intentionnel
let commentaire = "";  // L'utilisateur a volontairement laissé vide

// Piège 3 : "0" et "false" sont truthy (ce sont des chaînes non vides)
console.log(Boolean("0"));      // true ⚠️
console.log(Boolean("false"));  // true ⚠️

if ("0") {
    console.log("Ceci s'affiche !");  // Oui, car "0" est truthy
}
```

### Tableau récapitulatif

| Valeur | Type | Falsy/Truthy |
|--------|------|--------------|
| `false` | boolean | **Falsy** |
| `0` | number | **Falsy** |
| `-0` | number | **Falsy** |
| `""` | string | **Falsy** |
| `null` | null | **Falsy** |
| `undefined` | undefined | **Falsy** |
| `NaN` | number | **Falsy** |
| `true` | boolean | Truthy |
| `1`, `42`, `-5` | number | Truthy |
| `"texte"`, `"0"` | string | Truthy |
| `[]` | array | Truthy |
| `{}` | object | Truthy |

### Opérateur de coalescence nulle (??) - ES2020

```javascript
// L'opérateur ?? ne considère que null et undefined comme "vides"
// Contrairement à ||, il garde 0 et "" comme valeurs valides

let score = 0;

// Avec || : 0 est falsy, donc "Pas de score" s'affiche
let resultat1 = score || "Pas de score";
console.log(resultat1);  // "Pas de score"

// Avec ?? : seul null/undefined déclenche la valeur par défaut
let resultat2 = score ?? "Pas de score";
console.log(resultat2);  // 0 ✅

// Autre exemple
let texte = "";
console.log(texte || "défaut");   // "défaut" (car "" est falsy)
console.log(texte ?? "défaut");   // "" (car "" n'est ni null ni undefined)
```

---

## 7. Erreurs de logique courantes

À expliquer explicitement :

- Mauvaise condition
- Mauvais opérateur
- Mauvais ordre

> Le code fonctionne, mais le raisonnement est faux.
>

### Exemples d'erreurs courantes

```javascript
// ❌ Erreur 1 : Mauvais opérateur de comparaison
let age = 18;

// Voulait vérifier si l'âge est 18 ou plus
if (age = 18) {  // ❌ Assignation au lieu de comparaison !
    console.log("Majeur");
}
// ✅ Correct
if (age >= 18) {
    console.log("Majeur");
}

// ❌ Erreur 2 : Condition inversée
let estConnecte = false;

if (!estConnecte) {
    console.log("Bienvenue !");  // ❌ S'affiche quand déconnecté !
}
// ✅ Correct
if (estConnecte) {
    console.log("Bienvenue !");
}

// ❌ Erreur 3 : Mauvais ordre des conditions
let note = 15;

if (note >= 10) {
    console.log("Passable");  // ❌ S'arrête ici même si note = 15
} else if (note >= 14) {
    console.log("Bien");  // Jamais atteint !
}
// ✅ Correct : du plus restrictif au moins restrictif
if (note >= 14) {
    console.log("Bien");
} else if (note >= 10) {
    console.log("Passable");
}

// ❌ Erreur 4 : Oublier les bornes
for (let i = 1; i < 10; i++) {  // ❌ S'arrête à 9
    console.log(i);
}
// ✅ Correct pour aller jusqu'à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

## 8. Conclusion de séance 2

### Message clé final

> JavaScript obéit parfaitement.
> 
> 
> S’il fait n’importe quoi, c’est qu’on lui a mal expliqué.
> 

## 9. Exercices

### Exercice 1

**Deviner un nombre (version console)**

- Le nombre est fixé dans le code
- L’utilisateur “simule” une tentative via une variable
- Afficher :
    - “Trop grand”
    - “Trop petit”
    - “Gagné”

**Critères**

- `if / else` correct
- Comparaisons strictes (`===`)

---

### Exercice 2

**Table de multiplication**

- Afficher la table de 1 à 10 d’un nombre donné

**Points observés**

- Boucle correcte
- Pas de répétition inutile

---

### Mini-évaluation

Corriger un `if` volontairement faux (erreur logique, pas syntaxique).

### Excercices
- https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript
- https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
- https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript