# Correctif affichage — Chef Coach

Ce lot corrige le démarrage de la web app après vidage du cache.

## Cause probable

Le fichier `js/state.js` joint au diagnostic était sur une seule ligne et commençait par un commentaire JavaScript. Dans ce format, tout le fichier est interprété comme un commentaire : la variable `state` n’est jamais créée, puis `js/app.js` plante au chargement.

## Corrections incluses

- `js/state.js` remis avec des retours à la ligne normaux.
- `state` est déclaré en `var` et exposé sur `window.state` pour plus de robustesse.
- `js/app.js` vérifie maintenant que `state`, `MODULES`, `LESSONS`, `RECIPES` et `TECHNIQUES` existent avant de démarrer.
- Un écran d’erreur minimal s’affiche si un fichier critique manque ou est mal chargé, au lieu d’une page blanche.
- Les commentaires `//` ont été supprimés des fichiers JavaScript principaux pour éviter qu’un collage accidentel sur une seule ligne commente tout le fichier.
- Le service worker passe en `chef-coach-v13` pour forcer le rafraîchissement du cache.

## Fichiers à remplacer

Remplace tout le projet avec le contenu de ce zip, ou au minimum :

```text
index.html
app.css
manifest.webmanifest
sw.js
CONTENT_GUIDE.md
content/data.js
js/state.js
js/app.js
assets/icon-192.png
assets/icon-512.png
assets/icon.svg
```

## Après déploiement GitHub Pages

1. Ouvre l’URL dans Safari.
2. Recharge la page.
3. Si l’app était installée sur l’écran d’accueil, supprime l’ancienne icône puis réinstalle-la.
4. Vérifie dans `sw.js` que le cache est bien `chef-coach-v13`.
