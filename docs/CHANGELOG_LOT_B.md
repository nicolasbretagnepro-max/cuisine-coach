# LOT B — UX semaine et recette hebdomadaire

## Objectif

Rendre l’usage de l’app plus clair au quotidien : une recette de pratique par semaine, des leçons libres quand l’utilisateur a du temps, et une meilleure préparation avant de cuisiner.

## Changements principaux

- Accueil recentré sur la recette de la semaine.
- Bloc hebdomadaire plus lisible : statut, temps, niveau, famille, leçon conseillée avant la recette, points d’observation et critères de réussite.
- Section “Leçons libres” séparée de la recette hebdomadaire.
- Onglet “Cuisiner” : recette de la semaine affichée en haut, puis recettes libres.
- Page recette : briefing visible si la recette est celle de la semaine.
- Page recette : distinction entre “Lancer l’entraînement” et “Je veux juste cuisiner” quand un cours est lié.
- Mode cuisine : focus d’entraînement affiché pendant les étapes quand la recette vient d’un cours.
- Service worker mis à jour en `chef-coach-v17-lot-b`.

## Ce qui ne change pas

- Hébergement statique GitHub Pages.
- Logique de progression et prérequis.
- Données locales via `localStorage`.
- Cadence produit : une recette de pratique par semaine, leçons quand possible.
