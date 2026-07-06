# Évaluation Finale — JavaScript

**Dakar Tech — Cours JavaScript**
**Date limite de rendu : ___________**

---

## Consignes de rendu

- Créez un **dépôt GitHub public** nommé `eval-js-dakartech`
- Le projet doit contenir au minimum : `index.html`, `style.css`, `script.js`
- Le dépôt doit aussi contenir un fichier **`README.md`** avec les informations suivantes :
  - Le **nom et prénom** de l'étudiant
  - La **filière** de l'étudiant
  - Le nom de l'établissement (**Dakar Tech**)
  - Une **description courte** du projet (2-3 phrases)
  - La liste de **ce qui a été fait** (fonctionnalités terminées)
  - La liste de **ce qui n'a pas été fait** et **pourquoi** (manque de temps, difficulté rencontrée, etc.)
- **Invitez le formateur** (`Lino004`) comme collaborateur sur votre dépôt
- Votre dépôt doit avoir **au moins 5 commits** avec des messages clairs, qui montrent que vous avez avancé petit à petit (pas tout d'un coup à la fin)

Ce travail est **individuel**. Toute copie entre étudiants sera sanctionnée par un **0/20** pour les deux personnes concernées.

---

## Interdiction d'utiliser une IA

**L'utilisation d'outils d'IA est strictement interdite** : ChatGPT, GitHub Copilot, Claude, Gemini, ou tout autre outil du même type.

Votre code sera analysé. Voici ce qui sera vérifié :

- **Le code correspond à votre niveau.** Si votre code utilise des syntaxes ou des patterns trop avancés par rapport à ce qu'on a vu en cours (par exemple `async/await`, `class`, `fetch`, des frameworks…), ce sera suspect et vous perdrez des points.
- **L'historique Git est cohérent.** Un dépôt avec 1 seul commit contenant tout le projet fini = suspect. On s'attend à voir une progression : d'abord le HTML, puis le CSS, puis le JS fonctionnalité par fonctionnalité.
- **Le style du code est homogène.** Si une partie du code est très propre et structurée et qu'une autre partie est approximative, c'est un signe que tout n'a pas été écrit par la même personne (ou par une personne aidée par une IA).
- **Le nommage est réaliste.** Un code généré par IA a souvent des noms de variables et des commentaires "trop parfaits", en anglais soutenu, avec des descriptions détaillées partout. Ça se voit.

Si l'utilisation d'une IA est avérée, la note sera de **0/20**.

---

## Le projet : une To-Do List

Vous allez créer une **application de liste de tâches** (To-Do List) en HTML, CSS et JavaScript. Pas de framework, pas de librairie externe — que du code écrit par vous.

L'idée est simple : l'utilisateur peut ajouter des tâches, les marquer comme terminées, et les supprimer.

---

### Ce que l'application doit faire

#### Le formulaire d'ajout

En haut de la page, il y a un **champ texte** et un **bouton "Ajouter"**. Quand l'utilisateur tape le nom d'une tâche et clique sur le bouton (ou appuie sur Entrée), la tâche s'ajoute à la liste en dessous.

- Si le champ est **vide**, la tâche ne doit pas s'ajouter. Affichez un petit message d'erreur sous le champ (pas un `alert()`).
- Après l'ajout, le champ texte se vide automatiquement.

#### La liste des tâches

Chaque tâche apparaît dans la liste avec :

- Le **texte** de la tâche
- Un bouton **"Terminé"** (ou une case à cocher) pour marquer la tâche comme faite
- Un bouton **"Supprimer"** pour retirer la tâche de la liste

Quand une tâche est marquée comme terminée :
- Son texte doit être **barré** (avec un style CSS, par exemple `text-decoration: line-through`)
- Elle peut changer de couleur ou d'apparence pour qu'on voit bien la différence

#### Le compteur

En bas ou en haut de la liste, affichez un **compteur** du type :
> "3 tâche(s) en cours"

Ce compteur se met à jour à chaque ajout, suppression, ou quand on coche/décoche une tâche. Il ne compte que les tâches **non terminées**.

---

### Le style attendu (CSS)

Votre application doit ressembler à quelque chose de **propre et soigné**. Voici ce qu'on attend concrètement :

- **La page est centrée** : le contenu ne doit pas s'étaler sur toute la largeur de l'écran. Utilisez une largeur maximale (par exemple `max-width: 500px`) et centrez le bloc principal avec `margin: 0 auto`.
- **Le formulaire** : le champ texte et le bouton sont sur la **même ligne**, avec un peu d'espace entre eux. Le bouton a une couleur de fond visible (pas le style par défaut du navigateur).
- **Les tâches** : chaque tâche est dans un **bloc séparé** (comme une carte), avec un fond légèrement différent du fond de la page, et un petit espacement entre chaque tâche. Les boutons "Terminé" et "Supprimer" sont alignés à droite de la tâche.
- **Les tâches terminées** : le texte est barré et la carte a un aspect plus "grisé" ou atténué pour bien les distinguer des tâches en cours.
- **Les couleurs** : choisissez une palette simple et cohérente. Pas besoin de faire compliqué — un fond clair, du texte foncé, et une couleur d'accent pour les boutons, ça suffit.
- **La police** : utilisez une police lisible. La police par défaut du navigateur convient, ou vous pouvez utiliser une police sans-serif propre.

Le but n'est pas de faire un design incroyable, mais une application **claire, lisible et agréable à utiliser**.

---

### Comment structurer votre JavaScript

Votre code JS doit être organisé de cette façon :

- Les tâches sont stockées dans un **tableau (`array`)** de JavaScript
- Chaque tâche est un **objet** avec au minimum ces propriétés :
  ```js
  { texte: "Faire les courses", terminee: false }
  ```
- Vous devez utiliser des **fonctions** pour découper votre code. Par exemple : une fonction pour ajouter, une pour supprimer, une pour afficher la liste, etc.
- L'affichage de la liste se fait en **manipulant le DOM** : sélection d'éléments, création d'éléments (`createElement`), modification du contenu (`textContent`, `innerHTML`), ajout au DOM (`appendChild`).
- Les interactions utilisateur passent par des **événements** (`addEventListener`) : clic sur les boutons, soumission du formulaire, etc.

---

### Bonus 1 : Filtres (+1 pt)

Ajoutez **3 boutons de filtre** au-dessus de la liste :
- **Toutes** : affiche toutes les tâches
- **En cours** : affiche uniquement les tâches non terminées
- **Terminées** : affiche uniquement les tâches terminées

Le filtre actif doit être visuellement mis en évidence (couleur différente, souligné, etc.). Utilisez la méthode `filter()` sur votre tableau.

### Bonus 2 : Sauvegarde avec localStorage (+1 pt)

On n'a pas vu le `localStorage` en cours, donc c'est un travail de recherche personnel.

Le principe : quand l'utilisateur ferme la page et la rouvre, ses tâches sont toujours là.

Pour ça, vous pouvez utiliser :
- `localStorage.setItem("cle", valeur)` pour sauvegarder
- `localStorage.getItem("cle")` pour récupérer
- `JSON.stringify()` pour convertir un tableau en texte
- `JSON.parse()` pour reconvertir le texte en tableau

Si vous implémentez cette fonctionnalité, les tâches doivent être sauvegardées **à chaque modification** (ajout, suppression, changement de statut) et **rechargées automatiquement** à l'ouverture de la page.

> Les bonus sont plafonnés : la note finale ne dépassera pas 20/20.

---

## Grille de notation — /20

| Critère | Points | Ce qu'on attend |
|---|:---:|---|
| **HTML** | **2 pts** | Structure correcte : formulaire, liste, boutons de filtre, compteur. Balises utilisées à bon escient (`form`, `input`, `button`, `ul`/`div`…) |
| **CSS** | **3 pts** | Page centrée et propre (1 pt). Tâches bien présentées avec distinction terminées/en cours (1 pt). Boutons stylisés et filtre actif visible (1 pt) |
| **JS — Tableaux et objets** | **3 pts** | Tâches stockées dans un tableau d'objets (1 pt). Utilisation correcte de `push`, `splice` ou `filter`, `forEach` ou `map` (2 pts) |
| **JS — Fonctions** | **2 pts** | Code découpé en fonctions claires (1 pt). Fonctions avec paramètres et/ou valeurs de retour (1 pt) |
| **JS — DOM** | **3 pts** | Sélection d'éléments avec `querySelector`/`getElementById` (1 pt). Création et ajout d'éléments dans la page (1 pt). Modification des styles/classes via JS (1 pt) |
| **JS — Événements** | **2 pts** | `addEventListener` sur le formulaire et les boutons (1 pt). Gestion du `submit` avec `preventDefault`, clic sur Terminé/Supprimer (1 pt) |
| **JS — Conditions** | **1 pt** | Validation du champ vide, logique terminé/non terminé avec `if/else` |
| **Qualité du code** | **2 pts** | Code lisible et bien indenté (1 pt). Noms de variables clairs, `let`/`const` utilisés correctement (1 pt) |
| **Git** | **2 pts** | Au moins 5 commits avec des messages explicites (1 pt). Progression visible dans l'historique (1 pt) |
| **Bonus — Filtres** | **+1 pt** | Boutons Toutes/En cours/Terminées fonctionnels, filtre actif visible |
| **Bonus — localStorage** | **+1 pt** | Sauvegarde et rechargement des tâches fonctionnels |
| **TOTAL** | **20 pts** | *(max 20 même avec le bonus)* |

---

## Pénalités

| Motif | Pénalité |
|---|---|
| Utilisation d'une IA détectée | **0/20** |
| Concepts hors cours sans justification (`class`, `fetch`, frameworks…) | **-5 pts** |
| Un seul commit avec tout le code | **-3 pts** |
| Pas de dépôt GitHub ou lien cassé | **-5 pts** |
| Retard de rendu | **-2 pts par jour** |
| Copie entre étudiants | **0/20 pour les deux** |

---

## Conseils pour bien s'organiser

1. **Commencez par le HTML** — créez la structure de la page : le formulaire, la zone de liste, le compteur, les boutons de filtre
2. **Mettez en forme avec le CSS** — rendez la page agréable avant de toucher au JS
3. **Codez le JS étape par étape** :
   - D'abord : ajouter une tâche et l'afficher
   - Ensuite : supprimer une tâche
   - Puis : marquer une tâche comme terminée
   - Puis : le compteur
   - Enfin (si vous le souhaitez) : les filtres et/ou le localStorage
4. **Faites un commit après chaque étape** — c'est comme ça qu'on construit un bon historique
5. **Testez dans le navigateur** au fur et à mesure — n'attendez pas d'avoir tout codé
6. **Utilisez `console.log()`** pour déboguer quand quelque chose ne marche pas
7. **Relisez vos cours** — tout ce dont vous avez besoin est dedans

---

Bon courage !
