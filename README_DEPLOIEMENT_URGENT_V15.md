# Chef Coach — correctif fonctionnel v15

Cette version corrige le problème actuel de déploiement GitHub Pages.

## Cause constatée sur le dépôt public

- `index.html` contient le guide de rédaction au lieu de l'application.
- `app.css` contient du JavaScript au lieu du CSS.
- Certains fichiers JS ont été collés sur une seule ligne avec `//`, ce qui neutralise le script.

## Correctif

- `index.html` est maintenant autonome : CSS + données + state + app sont intégrés dans le fichier.
- Les fichiers séparés `app.css`, `content/data.js`, `js/state.js`, `js/app.js` restent fournis pour maintenance.
- `sw.js` passe en `chef-coach-v15-functional` et utilise une stratégie network-first pour les pages.
- `reset.html` permet de vider service worker + caches sans supprimer la progression locale.

## Déploiement recommandé

1. Remplacer tout le contenu du dépôt par le contenu de ce dossier.
2. Ne pas copier-coller le contenu des fichiers dans l'éditeur GitHub : utiliser l'upload de fichiers.
3. Vérifier que `index.html` commence par `<!doctype html>`.
4. Vérifier que `sw.js` contient `chef-coach-v15-functional`.
5. Après déploiement, ouvrir `/reset.html?v=15`, puis cliquer sur “Ouvrir Chef Coach”.

## Fichiers attendus à la racine

- `index.html`
- `reset.html`
- `404.html`
- `.nojekyll`
- `sw.js`
- `manifest.webmanifest`
- `app.css`
- `CONTENT_GUIDE.md`
- `js/app.js`
- `js/state.js`
- `content/data.js`
- `assets/icon-192.png`
- `assets/icon-512.png`
- `assets/icon.svg`
