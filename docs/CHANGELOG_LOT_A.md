# Lot A — Stabilisation technique

## Objectif

Remettre une base saine, maintenable et testable après la version d’urgence autonome.

## Modifications

- `index.html` redevenu léger et lisible.
- CSS extrait dans `app.css`.
- Données extraites dans `content/data.js`.
- État local extrait dans `js/state.js`.
- Interface extraite dans `js/app.js`.
- Ajout de `debug.html` pour vérifier les fichiers servis.
- Conservation de `reset.html` pour vider cache et service worker.
- Service worker mis à jour en `chef-coach-v16-lot-a`.
- `README.md` simplifié.
- `.nojekyll` conservé.

## Vérifications attendues

- `index.html` commence par `<!doctype html>`.
- `js/state.js` contient `var state`.
- `js/app.js` contient `renderBootError`.
- `content/data.js` contient `var MODULES`, `var LESSONS`, `var RECIPES`, `var TECHNIQUES`.
