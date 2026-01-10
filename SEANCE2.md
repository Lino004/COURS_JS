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
- soustraction
- multiplication
- `/` division

⚠️ Précisions : `+` peut aussi concaténer des chaînes (sans approfondir).

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
- on n’utilise pas `==`

---

### Opérateurs logiques

- `&&` : ET
- `||` : OU

Expliquer avec des phrases :

- “Si A **et** B sont vrais”
- “Si A **ou** B est vrai”

---

## 3. Conditions : `if / else`

### Concept

> Une condition permet d’exécuter du code seulement si quelque chose est vrai.
> 

### Structure mentale

1. On pose une question
2. JavaScript répond par `true` ou `false`
3. Le code s’exécute ou non

### À marteler

- La condition doit être **lisible**
- Le corps du `if` n’est pas automatique

---

## 4. Boucle `while`

### Concept

> Une boucle while répète tant qu’une condition est vraie.
> 

### Danger à expliquer

- Boucle infinie
- Condition qui ne change jamais

Phrase utile :

> Une boucle doit toujours avoir une sortie.
> 

---

## 5. Boucle `for`

### Pourquoi `for` existe

> Quand on sait combien de fois on répète.
> 

### Décomposition mentale

- Départ
- Condition
- Incrément

Insister sur :

- l’ordre
- la lecture ligne par ligne

---

## 6. Erreurs de logique courantes

À expliquer explicitement :

- Mauvaise condition
- Mauvais opérateur
- Mauvais ordre

> Le code fonctionne, mais le raisonnement est faux.
> 

---

## 7. Conclusion de séance 2

### Message clé final

> JavaScript obéit parfaitement.
> 
> 
> S’il fait n’importe quoi, c’est qu’on lui a mal expliqué.
> 

## 10. Exercices

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