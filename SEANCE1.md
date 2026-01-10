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
- Cela n’a **aucun effet sur la page**
- C’est un **outil du développeur**, pas de l’utilisateur

### Décomposition

- `console` : l’outil
- `log` : afficher un message
- Les parenthèses : ce qu’on veut afficher

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
