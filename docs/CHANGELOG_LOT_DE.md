# CHANGELOG — LOTS D & E — v20

## Lot D — Hygiène et crédibilité

- Suppression du badge « Duolingo cuisine » sur l'accueil (remplacé par « 2 min »).
- Quiz : options mélangées à chaque affichage (`shuffledQuestion`) — la position de la bonne réponse n'est plus prévisible (constat d'audit : 62 % en position B, 0 % en D).
- Recettes : le bloc « Si ça se passe mal » ne s'affiche que si la recette définit des `fixes` manuels dans `content/data.js`. Suppression de l'heuristique `inferFixes`. `inferRecipeEquipment` et `inferSuccessCriteria` conservés en fallback.
- Nouveau script `lint-content.js` (racine) : contrôle qualité du contenu — `node lint-content.js`.

## Lot E — Variété des recettes et fonctions de base

### Données (`content/data.js`)

- 14 nouvelles recettes d'application (15-55 min, difficulté 1-2, 7 familles), toutes avec `fixes`, `equipment` et `successCriteria` manuels : riz sauté minute, steak sauce au poivre express, taboulé frais, minestrone express, champignons persillade, courgettes au cumin, brocoli vert vif, œuf poché sur toast, pâtes beurre-parmesan liées, sauce tomate du placard, légumes racines rôtis au miel, cuisses de poulet rôties, pommes de terre rissolées bistrot, pommes rôties au caramel.
- 5 leçons sur-servies rééquilibrées (`omelette-herbes-organisee`, `salade-composee-methode`, `legumes-sautes-maitrises` ne sont plus l'exercice de toutes les leçons du début).
- 26 nouveaux liens `practiceRecipes` sur 24 leçons, dont `epices-torrefier-infuser` et `jus-volaille-et-securite` qui n'avaient aucune pratique.
- Règle de couverture : une recette = exercice `direct` de 2 leçons maximum (contrôlée par le lint).

### État local (`js/state.js`)

- `favoriteRecipes` et `shoppingList`, avec méthodes dédiées, inclus dans l'export/import de progression.

### Interface (`js/app.js`)

- Sélecteur de portions (1-12) sur la page recette, quantités mises à l'échelle (fractions ½ ¼ ¾, ingrédients sans quantité inchangés).
- Liste de courses : ajout depuis la recette (avec portions choisies), vue consolidée par ingrédient, cases à cocher, retrait des cochés, vidage.
- Favoris : bouton ❤ sur la page recette, filtre « ❤ Favoris » dans Cuisiner, favoris non cuisinés prioritaires dans la recette de la semaine (après la file « À pratiquer » et la leçon en cours).
- Styles des nouveaux composants injectés par `app.js` (aucune modification d'`app.css` requise).

## Cache

Service worker : `chef-coach-v20-lot-e`. Après déploiement : ouvrir `reset.html` puis `debug.html`.
