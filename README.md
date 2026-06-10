# Chef Coach

Web app statique pour progresser en cuisine : leçons, quiz, pratiques en attente, recette de la semaine, mode cuisine, débrief et progression.

Version actuelle : LOT B — UX semaine. L’accueil met désormais la recette hebdomadaire au centre, avec la leçon à faire avant, les points d’observation et le statut de la semaine.

## Déploiement GitHub Pages

Paramètre recommandé :

```text
Settings → Pages → Deploy from a branch → main → /root
```

Les fichiers doivent être directement à la racine du dépôt :

```text
index.html
app.css
sw.js
manifest.webmanifest
reset.html
debug.html
js/
content/
assets/
```

Ne pas uploader le dossier parent du zip. Uploader son contenu.

## Structure

```text
index.html              Page principale légère
app.css                 Design system et styles
js/state.js             État local, progression, pratiques, débrief
js/app.js               Interface et logique applicative
content/data.js         Modules, leçons, recettes, fiches techniques
sw.js                   Service worker PWA
manifest.webmanifest    Manifest PWA
reset.html              Suppression des caches/service worker
debug.html              Diagnostic des fichiers servis
CONTENT_GUIDE.md        Guide pour modifier les contenus
```

## Après mise à jour

1. Commit/push sur GitHub.
2. Attendre le redéploiement GitHub Pages.
3. Ouvrir `reset.html` une fois si l’app garde une ancienne version.
4. Ouvrir `debug.html` pour vérifier que les fichiers servis sont corrects.

## Version

Voir `VERSION.txt`.

## Changelog

Voir `docs/CHANGELOG_LOT_B.md`.
