# Mise à jour lot 1 — Chef Coach

Objectif : appliquer les premiers correctifs sans changer la logique de progression existante.

## Progression

La logique de prérequis est conservée. Aucun déverrouillage global des modules n'a été appliqué.

## Correctifs appliqués

### Mode cuisine
- Fermeture du mode cuisine vers la page recette au lieu de `history.back()`.
- Barre de progression calculée de 1/n à 100%.
- Minuteur empêché de passer en négatif.
- Bouton du minuteur désactivé une fois terminé.
- Affichage du minuteur avec `aria-live`.

### Sauvegarde locale
- `state.save()` protégé par `try/catch`.
- Dates de streak calculées en date locale, pas en UTC.
- Réinitialisation du streak persistée.
- Import de sauvegarde plus robuste via `state.importData()`.
- Compression photo plus légère : 650 px max, JPEG 0.62.
- Message d'erreur si une photo ne peut pas être compressée ou sauvegardée.

### UX / accessibilité
- Onglet parent actif pour les vues `lesson`, `recipe` et `cooking`.
- Focus visible global pour clavier/accessibilité.
- Cartes recettes utilisables au clavier avec Entrée/Espace.
- Labels accessibles sur les boutons de notation.
- Support `prefers-reduced-motion`.

### Recettes
- Page détail recette enrichie avec :
  - bloc « Avant de commencer » ;
  - matériel et critères de réussite si disponibles ;
  - déroulé complet des étapes avec action, pourquoi et erreur à éviter.
- Recettes à 3 étapes corrigées :
  - `salade-composee` : 5 étapes ;
  - `soupe-legumes` : 5 étapes ;
  - `oeufs-cocotte` : 5 étapes.
- Doublon de titre saumon supprimé en renommant `saumon-cote-peau` en « Saumon côté peau express ».
- Recettes orphelines reliées à des leçons :
  - `poulet-roti` ;
  - `salade-composee` ;
  - `soupe-legumes` ;
  - `boeuf-carottes` ;
  - `oeufs-cocotte`.

### PWA / GitHub Pages
- Service worker passé en `chef-coach-v7`.
- Installation SW plus tolérante si un asset manque.
- Fallback offline vers `index.html` pour les navigations.
- Manifest enrichi avec icônes `any maskable` et raccourcis Apprendre/Cuisiner.

## Fichiers modifiés

- `js/app.js`
- `js/state.js`
- `app.css`
- `sw.js`
- `manifest.webmanifest`
- `content/data.js`

## Tests réalisés

- Vérification syntaxique Node : `app.js`, `state.js`, `sw.js`, `content/data.js`.
- Validation JSON du manifest.
- Vérification de cohérence data :
  - 26 modules ;
  - 117 leçons ;
  - 74 recettes ;
  - 43 fiches techniques ;
  - aucun doublon de titre ;
  - aucune recette orpheline ;
  - aucune recette avec moins de 4 étapes.
