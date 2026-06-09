# Lot 4 — Cadence hebdomadaire

Objectif : adapter l'app à un rythme réaliste.

## Changements

- L'accueil pousse désormais une seule recette principale par semaine.
- Les leçons restent libres : l'utilisateur peut les faire quand il peut.
- Les pratiques issues des cours alimentent une réserve “À pratiquer”.
- La recette hebdomadaire est choisie dans cet ordre : pratiques en attente, prochaine leçon disponible, recette simple non cuisinée.
- L'onglet Cuisiner affiche la recette poussée cette semaine, puis les filtres pour explorer autre chose.
- La page recette affiche un bandeau “Recette de la semaine” quand la recette correspond au plan hebdomadaire.
- Le service worker passe en chef-coach-v10.

## Fichiers modifiés

- js/app.js
- js/state.js
- app.css
- sw.js
- CONTENT_GUIDE.md
