# CHANGELOG — LOT C — Pédagogie forte

## Objectif

Renforcer la progression réelle en cuisine avec :

- une taxonomie stable de compétences ;
- des recettes-exercices ;
- des cartes de révision rapides ;
- des diagnostics plus utiles après recette ;
- une meilleure cohérence cours → compétence → pratique.

## Modifications principales

### Données

- Ajout de `SKILLS` avec 38 compétences structurées.
- Ajout de `skillIds` sur les leçons.
- Ajout de `primarySkills` et `secondarySkills` sur les recettes.
- Ajout de 5 recettes-exercices.
- Ajout de 30 `REVIEW_CARDS`.
- Ajout de `TRAINING_PLAN` sur 3 mois.

### Interface

- Ajout de cartes rapides sur l’accueil.
- Ajout d’une section “Compétences suivies” dans Apprendre.
- Ajout des cartes de révision dans Apprendre.
- Ajout d’une section “Recettes-exercices” dans Cuisiner.
- Ajout du filtre “Exercices”.
- Ajout d’un bandeau “Recette-exercice” sur les recettes concernées.
- Ajout d’un diagnostic probable dans le bilan après recette.

### Cache

Service worker : `chef-coach-v18-lot-c`.
