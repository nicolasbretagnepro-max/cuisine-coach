# Mise à jour — Lot 2

Date : 2026-06-09

## Objectif

Ce lot ajoute les priorités demandées :

1. page d'accueil avec un vrai bloc **Aujourd'hui** ;
2. amélioration de la page recette avant le mode cuisine ;
3. section **Que cuisiner aujourd'hui ?** dans l'onglet Cuisiner.

La logique de progression est conservée. Les prérequis et le verrouillage des leçons ne sont pas supprimés.

## Fichiers modifiés

- `js/app.js`
- `app.css`
- `sw.js`
- `CONTENT_GUIDE.md`

Les autres fichiers sont fournis dans le zip pour faciliter le remplacement complet du projet, mais n'ont pas tous été modifiés dans ce lot.

## Nouveautés

### 1. Bloc Aujourd'hui sur l'accueil

Ajout d'un bloc qui propose :

- une révision si un quiz précédent n'a pas été réussi à 100 % ;
- la prochaine leçon disponible dans le parcours actuel ;
- une recette liée à cette leçon si possible ;
- un indicateur d'objectif hebdomadaire.

La recommandation respecte les leçons verrouillées : l'app ne propose pas de leçon non disponible.

### 2. Page recette renforcée

La page recette affiche maintenant davantage d'informations avant de lancer le mode cuisine :

- temps total réel ;
- niveau ;
- matériel estimé ou renseigné ;
- critères de réussite ;
- points critiques ;
- bloc de rattrapage "Si ça se passe mal" quand il peut être déduit.

Les champs optionnels suivants sont pris en charge dans `content/data.js` :

```js
equipment: ['Poêle', 'Spatule'],
successCriteria: ['Surface dorée', 'Texture moelleuse'],
criticalPoints: ['Ne pas surcharger la poêle'],
fixes: [
  { problem: 'Trop liquide', solution: 'Réduire quelques minutes sans couvercle.' }
]
```

Si ces champs ne sont pas présents, l'app déduit des informations utiles à partir de la famille, du titre, des objectifs, des compétences et des étapes.

### 3. Section Que cuisiner aujourd'hui ?

Ajout d'un panneau de choix rapide dans l'onglet Cuisiner :

- Tout ;
- 15 min ;
- 30 min ;
- Technique ;
- Repas complet ;
- Restes ;
- Très facile.

Ces filtres se combinent avec les filtres existants : famille, niveau, temps, compétence, ingrédient et recherche texte.

## PWA / cache

Le service worker passe de `chef-coach-v7` à `chef-coach-v8` pour forcer la mise à jour du cache après déploiement GitHub Pages.

## Tests réalisés

- Vérification syntaxique de `js/app.js`, `js/state.js`, `content/data.js` et `sw.js` avec Node.
- Vérification de cohérence du contenu :
  - 26 modules ;
  - 117 leçons ;
  - 74 recettes ;
  - 43 fiches techniques ;
  - aucun doublon de titre de recette ;
  - aucune recette avec moins de 4 étapes ;
  - aucun lien de recette manquant dans les leçons.

## Tests recommandés après intégration

1. Ouvrir GitHub Pages en navigation privée pour vérifier le nouveau cache.
2. Tester l'accueil : le bloc Aujourd'hui doit proposer une leçon disponible.
3. Tester Cuisiner > filtres rapides : 15 min, 30 min, Technique, Très facile.
4. Ouvrir une recette et vérifier les blocs Avant de commencer, Déroulé complet et Si ça se passe mal.
5. Tester sur iPhone installé sur l'écran d'accueil.
