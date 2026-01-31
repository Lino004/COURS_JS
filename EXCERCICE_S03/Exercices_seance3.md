# Exercice 1 : Jeu du nombre mystère

## Objectif
Écrire un programme JavaScript permettant à l'utilisateur de deviner un nombre secret.

## Déroulement du jeu

### 1. Initialisation
- Le programmeur définit un nombre secret à deviner (via un `prompt`)

### 2. Phase de jeu
- L'utilisateur propose un nombre (via un `prompt`)
- Le programme compare la proposition avec le nombre secret :
  - Si la proposition est **inférieure** au nombre secret → afficher dans la console : `"Le nombre est plus grand"`
  - Si la proposition est **supérieure** au nombre secret → afficher dans la console : `"Le nombre est plus petit"`
  - Si la proposition est **égale** au nombre secret → l'utilisateur a gagné !

### 3. Conditions de fin
- **Victoire** : l'utilisateur trouve le nombre secret
- **Défaite** : l'utilisateur n'a pas trouvé après **10 tentatives**

## Bonus (optionnel)
- Afficher le nombre de tentatives utilisées en cas de victoire
- Générer le nombre secret aléatoirement (entre 1 et 100) au lieu de le saisir

## Correction
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    const nombreADeviner = parseInt(prompt("Entrez le nombre à deviner : "));
    let i = 0;
    let saisie = 0;
    do {
      i += 1;
      saisie = parseInt(prompt("Entrez un nombre : "));
      if (isNaN(saisie)) {
        console.log("Veuillez entrer un nombre valide.");
        continue;
      }
      if (saisie < nombreADeviner) {
        console.log("Le nombre à deviner est plus grand que ", saisie);
      } else if (saisie > nombreADeviner) {
        console.log("Le nombre à deviner est plus petit", saisie);
      } else {
        console.log("Super vous avez gagné. Le nombre est: ", nombreADeviner);
        i = 10;
      }
    } while (i < 10)

    if (i >= 10 && saisie !== nombreADeviner) {
      console.log("Looser")
    }

  </script>
</body>
</html>
```