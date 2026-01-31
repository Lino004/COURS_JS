# Séance 1 — Ce qu’est JavaScript (et ce qu’il n’est pas)

## Structure

### Objectifs

- Comprendre le rôle de JS
- Exécuter du JS sans magie

### Contenu

- JS ≠ Java
- Où s’exécute JS (navigateur)
- Console du navigateur
- Syntaxe de base

### Notions

- `console.log`
- Commentaires
- Variables : `let`, `const`
- Types primitifs : `number`, `string`, `boolean`

### Pratique

- Calculatrice simple
- Manipulation de chaînes


## 1. Ce qu’est JavaScript

### Message central

> JavaScript est un langage de programmation qui permet de donner des instructions à un navigateur.
> 

### Ce qu'il faut comprendre

- JavaScript n’est **pas** :
    - un logiciel
    - un framework
    - un langage “visuel”
    - une extension de HTML
- JavaScript est :
    - du **texte**
    - lu **ligne par ligne**
    - exécuté par le **navigateur**

👉 NB - **rien n’est magique** : le navigateur lit et exécute.

---

## 2. JS ≠ Java

### Ce qu'il faut comprendre

- Le nom est trompeur
- Java et JavaScript sont :
    - deux langages différents
    - avec des objectifs et des syntaxes différentes
- Leur seul point commun : le mot “Java” dans le nom (marketing)

⚠️ Important : **ne pas comparer les syntaxes**, cela parasite.

---

## 3. Où s’exécute JavaScript

### Message clé

> Le code JavaScript s’exécute dans le navigateur.
> 

### Ce qu'il faut comprendre

- Le navigateur n’est pas juste un afficheur
- Il contient :
    - un moteur HTML
    - un moteur CSS
    - un moteur JavaScript

👉 JS peut :

- faire des calculs
- manipuler du texte
- réagir à des actions

👉 Mais **sans interface**, il travaille dans la console.

---

## 4. La console du navigateur

### Rôle de la console

> La console est un outil de dialogue avec JavaScript.
> 

### Points important

- Ce n’est pas une “fenêtre magique”
- Elle sert à :
    - afficher des informations
    - tester du code
    - comprendre ce qui se passe

### Phrase utile

> Si vous ne regardez pas la console, vous codez à l’aveugle.
> 

---

## 5. `console.log`

### Concepte

- `console.log` = **dire quelque chose à la console**
- Cela n'a **aucun effet sur la page**
- C'est un **outil du développeur**, pas de l'utilisateur

### Décomposition

- `console` : l'outil
- `log` : afficher un message
- Les parenthèses : ce qu'on veut afficher

### Exemples pratiques

```javascript
// Afficher un texte simple
console.log("Bonjour le monde !");

// Afficher un nombre
console.log(42);

// Afficher le résultat d'un calcul
console.log(10 + 5);  // Affiche : 15

// Afficher plusieurs éléments séparés par des virgules
console.log("Le résultat est :", 10 * 2);  // Affiche : Le résultat est : 20

// Afficher une variable
let prenom = "Amadou";
console.log(prenom);  // Affiche : Amadou

// Combiner texte et variable
console.log("Bonjour", prenom);  // Affiche : Bonjour Amadou
```

### Autres méthodes utiles de la console

```javascript
console.warn("Attention !");   // Affiche un avertissement (jaune)
console.error("Erreur !");     // Affiche une erreur (rouge)
console.clear();               // Efface la console
```

---

## 6. Commentaires

### Message clé

> Un commentaire est du texte pour les humains, ignoré par la machine.
> 

### Types

- `//` : une ligne
- `/* */` : plusieurs lignes

### Pourquoi c’est important

- Expliquer son raisonnement
- Clarifier une intention
- Pas pour “décorer” le code

---

## 7. Variables : `let` et `const`

### Concept fondamental

> Une variable est une boîte qui contient une valeur.
>

### Ce qu'il faut comprendre

- Le nom est important
- Une variable sert à :
    - mémoriser une information
    - la réutiliser
    - la modifier (parfois)

### Différence clé

- `let` :
    - la valeur peut changer
- `const` :
    - la valeur **ne doit pas changer**

Phrase à marteler :

> Si une valeur ne doit pas changer, on la protège avec const.
>

### Syntaxe de déclaration

```javascript
// Déclaration avec let (modifiable)
let age = 25;
let nom = "Fatou";
let estConnecte = true;

// Déclaration avec const (non modifiable)
const PI = 3.14159;
const PAYS = "Sénégal";
const TVA = 0.18;
```

### Exemples de modification

```javascript
// Avec let : on peut changer la valeur
let score = 0;
console.log(score);  // Affiche : 0

score = 10;
console.log(score);  // Affiche : 10

score = score + 5;   // On ajoute 5 au score actuel
console.log(score);  // Affiche : 15

// Avec const : ERREUR si on essaie de changer
const ville = "Dakar";
ville = "Thiès";  // ❌ ERREUR : Assignment to constant variable
```

### Règles de nommage des variables

```javascript
// ✅ Bonnes pratiques
let nombreDePoints = 100;      // camelCase (recommandé)
let nom_utilisateur = "Ali";   // snake_case (acceptable)
const MAX_TENTATIVES = 3;      // MAJUSCULES pour les constantes

// ❌ À éviter
let 2nombres = 5;              // Ne peut pas commencer par un chiffre
let mon-nom = "Test";          // Pas de tiret (-)
let let = "valeur";            // Pas de mot réservé
```

### Pourquoi `var` n'est plus recommandé

```javascript
// var existe mais pose des problèmes de portée (scope)
// Utiliser let et const à la place
var ancienneMethode = "à éviter";  // ⚠️ Déconseillé
let nouvelleMethode = "préféré";   // ✅ Recommandé
``` 

---

## 8. Types primitifs

### Pourquoi parler de types

> JavaScript a besoin de savoir quel genre de chose il manipule.
>

### Types vus

- `number` : nombres
- `string` : texte
- `boolean` : vrai / faux

### À bien distinguer

- `"5"` ≠ `5`
- Texte vs nombre
- `true` / `false` ne sont **pas du texte**

### Le type `number` (nombres)

```javascript
// Nombres entiers
let age = 25;
let temperature = -5;
let population = 1000000;

// Nombres décimaux (à virgule)
let prix = 19.99;
let taille = 1.75;
let pi = 3.14159;

// Opérations mathématiques
let a = 10;
let b = 3;

console.log(a + b);   // Addition : 13
console.log(a - b);   // Soustraction : 7
console.log(a * b);   // Multiplication : 30
console.log(a / b);   // Division : 3.333...
console.log(a % b);   // Modulo (reste) : 1
console.log(a ** b);  // Puissance : 1000 (10³)

// Vérifier le type
console.log(typeof 42);      // Affiche : "number"
console.log(typeof 3.14);    // Affiche : "number"
```

### Le type `string` (texte)

```javascript
// Trois façons de créer une chaîne
let message1 = "Bonjour";           // Guillemets doubles
let message2 = 'Bonsoir';           // Guillemets simples
let message3 = `Salut`;             // Backticks (template literals)

// Concaténation (assembler des chaînes)
let prenom = "Moussa";
let salutation = "Bonjour " + prenom + " !";
console.log(salutation);  // Affiche : Bonjour Moussa !

// Template literals (méthode moderne et pratique)
let nom = "Awa";
let age = 20;
let presentation = `Je m'appelle ${nom} et j'ai ${age} ans.`;
console.log(presentation);  // Affiche : Je m'appelle Awa et j'ai 20 ans.

// Propriétés et méthodes utiles
let texte = "JavaScript";
console.log(texte.length);        // Longueur : 10
console.log(texte.toUpperCase()); // JAVASCRIPT
console.log(texte.toLowerCase()); // javascript
console.log(texte[0]);            // Premier caractère : J

// Vérifier le type
console.log(typeof "Bonjour");  // Affiche : "string"
```

### Le type `boolean` (booléen)

```javascript
// Seulement deux valeurs possibles
let estMajeur = true;
let estConnecte = false;

// Résultat de comparaisons
let age = 20;
console.log(age > 18);   // true (20 est supérieur à 18)
console.log(age === 25); // false (20 n'est pas égal à 25)
console.log(age < 30);   // true (20 est inférieur à 30)

// Vérifier le type
console.log(typeof true);   // Affiche : "boolean"
console.log(typeof false);  // Affiche : "boolean"
```

### Autres types primitifs importants

```javascript
// undefined : variable déclarée mais sans valeur
let x;
console.log(x);         // undefined
console.log(typeof x);  // "undefined"

// null : absence intentionnelle de valeur
let utilisateur = null;
console.log(utilisateur);         // null
console.log(typeof utilisateur);  // "object" (bizarrerie de JS)

// Différence entre undefined et null
// undefined = "pas encore défini"
// null = "volontairement vide"
```

### Conversion de types

```javascript
// String vers Number
let texteNombre = "42";
let nombre = Number(texteNombre);
console.log(nombre);        // 42
console.log(typeof nombre); // "number"

// Autre méthode
let n = parseInt("123");    // 123 (entier)
let d = parseFloat("3.14"); // 3.14 (décimal)

// Number vers String
let num = 100;
let str = String(num);
console.log(str);           // "100"
console.log(typeof str);    // "string"

// Vers Boolean
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("texte")); // true
```

---

## 9. Conclusion de séance 1

### A comprendre

- JavaScript est **simple dans ses bases**
- Rien n’est caché
- Tout ce qui se passe est **explicable**

> Si vous comprenez chaque ligne que vous écrivez, vous êtes sur la bonne voie.
>

## 10. Exercies

### Exercice 1 (guidé)

**Objectif :** exécuter du JS sans abstraction

- Afficher dans la console :
    - un nombre
    - une chaîne
    - le résultat d’un calcul
- Modifier la valeur d’une variable et réafficher

**Critères**

- Utilisation correcte de `console.log`
- Pas d’erreur de syntaxe
- Compréhension de `let` vs `const`

---

### Exercice 2 (autonome)

**Mini-calculatrice**

- Déclarer deux nombres
- Calculer addition, soustraction, multiplication
- Afficher chaque résultat clairement

**Bonus faible**

- Changer les valeurs sans modifier la logique

---

### Mini-évaluation

> « Que se passe-t-il si j’essaie de modifier une const ? Pourquoi ? »
> 

Contenu avec Explication:
