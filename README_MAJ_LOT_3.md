# Mise à jour lot 3 — Corrélation cours ↔ recettes

## Objectif

Renforcer le lien pédagogique entre les cours et les recettes sans casser la logique de progression.

L'utilisateur peut maintenant enchaîner plusieurs cours sans cuisiner immédiatement. Les recettes recommandées sont stockées dans une liste **À pratiquer**, puis réutilisées plus tard avec un focus précis issu du cours d'origine.

## Fichiers modifiés

- `content/data.js`
- `js/app.js`
- `js/state.js`
- `app.css`
- `sw.js`
- `CONTENT_GUIDE.md`
- `README_MAJ_LOT_3.md`

## Nouveautés principales

### 1. Champ `practiceRecipes` dans les leçons

Les leçons peuvent désormais définir des recettes de mise en pratique contextualisées :

```js
practiceRecipes: [
  {
    id: 'legumes-sautes-maitrises',
    type: 'direct',
    label: 'Exercice direct',
    reason: 'Pourquoi cette recette applique précisément la leçon.',
    focus: ['Point à observer pendant la recette'],
    successCriteria: ['Critère de réussite observable']
  }
]
```

`linkedRecipes` reste présent pour compatibilité, mais l'interface utilise `practiceRecipes` en priorité.

### 2. Liste “À pratiquer”

Quand une leçon est terminée, ses pratiques recommandées sont ajoutées dans `localStorage` via :

```js
pendingPractices
```

Ces pratiques sont visibles :

- sur l'accueil ;
- dans l'onglet Cuisiner ;
- à la fin d'une leçon.

Elles peuvent être retirées manuellement.

### 3. Recette ouverte en contexte de pratique

Quand une recette est ouverte depuis une pratique, l'écran affiche un bandeau :

- cours pratiqué ;
- raison du choix de cette recette ;
- points à observer ;
- critères de réussite.

Exemple d'URL interne :

```text
#recipe/legumes-sautes-maitrises/practice-maitriser-intensite-feu
```

### 4. Mode cuisine compatible

Le mode cuisine conserve le contexte de pratique :

```text
#cooking/legumes-sautes-maitrises/practice-maitriser-intensite-feu
```

Quand la recette est terminée, la pratique correspondante est retirée de la liste.

### 5. Contenu enrichi

Toutes les leçons qui avaient déjà `linkedRecipes` reçoivent maintenant un `practiceRecipes`.

Les premières leçons et les cours clés ont été enrichis manuellement, notamment :

- Lire une recette comme un cuisinier ;
- Construire un poste de travail efficace ;
- Faire une vraie mise en place ;
- Gérer le timing d'un plat simple ;
- Choisir le bon ustensile ;
- Poêle, casserole, sauteuse ;
- Maîtriser l'intensité du feu ;
- Travailler en sécurité ;
- Comprendre ce que fait la chaleur ;
- Chaleur douce, moyenne, forte ;
- Lire les signes de cuisson ;
- Repos et cuisson résiduelle.

Les autres leçons reçoivent une version générique basée sur leurs recettes liées, à améliorer progressivement.

## Logique produit retenue

La recette n'est pas obligatoire après chaque cours.

La logique devient :

```text
Cours terminé
→ pratiques recommandées ajoutées
→ possibilité de continuer les cours
→ cuisine plus tard avec un focus clair
```

Cela conserve la progression tout en rendant les recettes plus cohérentes avec l'apprentissage.

## Service worker

Le cache passe à :

```js
chef-coach-v9
```

pour forcer le rafraîchissement sur GitHub Pages.
