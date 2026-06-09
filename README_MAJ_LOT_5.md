# Mise à jour lot 5 — Maîtrise par compétence et débrief après recette

Objectif : transformer chaque recette hebdomadaire en apprentissage mesurable.

## Ajouts

- Formulaire de bilan après recette : résultat réel, problèmes rencontrés, satisfaction, note et photo.
- Stockage des tentatives dans `recipeAttempts`.
- Progression par compétence dans `skillProgress`.
- Section `À corriger` sur l'accueil, construite à partir des derniers bilans.
- Section `Compétences à consolider` dans l'onglet Moi.
- Maintien du contexte cours → recette jusque dans le bilan après le mode cuisine.
- Service worker mis à jour en `chef-coach-v11`.

## Fichiers modifiés

- `js/app.js`
- `js/state.js`
- `app.css`
- `sw.js`
- `README_MAJ_LOT_5.md`

## Cadre conservé

- Une recette de pratique par semaine.
- Leçons libres quand l'utilisateur peut.
- Progression verrouillée par prérequis.
- Stockage local uniquement.
