# Guide de rédaction du contenu — Chef Coach

Ce fichier décrit exactement comment ajouter du contenu dans `content/data.js`.
**Ne change jamais le code de l'app** (js/, app.css, index.html) — uniquement `content/data.js`.

---

## Structure générale

`content/data.js` contient 4 tableaux (utilise `var`, pas `export`) :
- `MODULES` — les modules (groupes de leçons)
- `LESSONS` — toutes les leçons
- `RECIPES` — toutes les recettes
- `TECHNIQUES` — les fiches techniques de référence rapide (section "Apprendre")

---

## MODULES

Un module regroupe des leçons sur un même thème.

```js
// Dans content/data.js — utilise var (pas export, pas const)
{
  id: 'cuissons',           // identifiant unique, sans espaces, en minuscules
  title: 'Les cuissons',    // nom affiché dans l'app
  emoji: '🔥',              // un seul emoji
  description: 'Texte court décrivant le module (max 60 caractères)',
  color: '#2563eb',         // couleur hex pour l'UI
  lessonIds: ['cuisson-poele', 'cuisson-four', 'mijotage'],  // IDs dans l'ordre
}
```

**Règles :**
- `id` doit être unique dans tout le fichier
- `lessonIds` doit pointer vers des leçons existantes dans `LESSONS`

---

## LEÇONS

Une leçon = une session d'apprentissage de 5-15 minutes.

```js
{
  id: 'cuisson-poele',        // unique, tirets autorisés
  moduleId: 'cuissons',       // doit correspondre à un module existant
  title: 'La cuisson à la poêle',
  subtitle: 'Saisir, colorer, cuire à cœur',  // accroche courte
  duration: 10,               // en minutes (estimation de lecture + quiz)

  objectives: [               // EXACTEMENT 3 objectifs
    'Comprendre la réaction de Maillard',
    'Maîtriser le timing feu fort / feu doux',
    'Éviter les 3 erreurs qui empêchent la croûte de se former',
  ],
  // Format : verbe à l'infinitif + résultat concret

  concepts: [                 // 3 à 5 concepts obligatoires
    {
      title: 'La réaction de Maillard',
      body: 'Texte explicatif...',   // peut contenir du HTML simple (<strong>, <br>)
      tip: 'Astuce ou mémo court',  // OPTIONNEL — null ou absent si pas d'astuce
    },
    // ...
  ],

  goFurther: {                // OPTIONNEL — bloc "pour aller plus loin"
    title: 'Titre court',
    content: 'Contenu développé...',
  },
  // Mettre null ou ne pas inclure la clé si pas de "aller plus loin"

  quiz: [                     // 3 à 5 questions
    {
      q: 'La question posée à l\'élève ?',
      options: [              // EXACTEMENT 4 choix
        'Choix A',
        'Choix B',
        'Choix C',
        'Choix D',
      ],
      answer: 1,              // index du bon choix (0 = premier, 1 = deuxième...)
      explanation: 'Pourquoi c\'est cette réponse. Max 2 phrases.',
    },
    // ...
  ],

  linkedRecipes: ['poulet-roti', 'steak-beurre'],  // 1 ou 2 IDs de recettes
}
```

### Règles de rédaction des leçons

**Concepts :**
- Le premier concept = définition / contexte
- Les suivants = technique / erreurs / nuances
- Le dernier avant quiz = toujours le plus pratique / actionnable
- `body` : 2-5 phrases max. Privilégier des phrases courtes et concrètes.
- `tip` : 1 phrase max, mémo facile à retenir

**Quiz :**
- Questions orientées "diagnostic" ou "méthode", pas de mémorisation bête
- Le bon choix doit être celui qui révèle la vraie compréhension
- Les mauvaises réponses doivent être plausibles (erreurs fréquentes)
- Chaque explication doit dire POURQUOI c'est cette réponse

---

## RECETTES

Une recette = support pratique pour mettre en application les leçons.

```js
{
  id: 'poulet-roti',          // unique, tirets
  title: 'Poulet rôti parfait',
  family: 'viande',           // VALEURS AUTORISÉES ci-dessous

  difficulty: 2,              // 1 = facile, 2 = intermédiaire, 3 = avancé, 4 = expert
  timePrep: 15,               // minutes de préparation (découpe, mise en place)
  timeCook: 80,               // minutes de cuisson totale
  servings: 4,                // nombre de personnes

  skills: ['cuisson-four', 'assaisonnement'],  // compétences développées (libres)

  objectives: [               // 2 à 3 objectifs de la recette
    'Obtenir une peau dorée et croustillante',
    'Cuisson à cœur parfaite sans dessèchement',
  ],

  ingredients: [
    { qty: '1',  unit: '',      item: 'poulet fermier',  note: '1,4–1,6 kg' },
    { qty: '50', unit: 'g',     item: 'beurre',           note: 'pommade' },
    { qty: '',   unit: '',      item: 'sel, poivre',       note: 'généreux' },
  ],
  // qty et unit peuvent être vides (string vide '')
  // note est optionnel (string vide '' ou précision)

  steps: [                    // 4 à 8 étapes
    {
      id: 1,                  // numéro séquentiel commençant à 1
      title: 'Préparer le poulet',
      action: 'Ce que l\'utilisateur fait exactement. Phrases courtes, verbes à l\'impératif.',
      why: 'Pourquoi cette étape est importante. Max 2 phrases.',
      mistake: 'L\'erreur typique à éviter et sa conséquence.',
      timer: 30,              // OPTIONNEL — minutes du minuteur, null si pas de timer
    },
    // ...
  ],

  tips: [                     // 2 à 3 tips du chef (optionnel mais recommandé)
    'Un conseil pro ou une variation.',
    'Un autre conseil.',
  ],
}
```

### Valeurs autorisées pour `family`

| Valeur | Affiché |
|--------|---------|
| `viande` | 🥩 Viande |
| `poisson` | 🐟 Poisson |
| `légume` | 🥦 Légumes |
| `sauce` | 🫙 Sauces |
| `pâtisserie` | 🥐 Pâtisserie |
| `pâtes` | 🍝 Pâtes & riz |
| `œufs` | 🥚 Œufs |
| `soupe` | 🍲 Soupes |
| `dessert` | 🍰 Desserts |

### Règles de rédaction des recettes

**`action`** : l'utilisateur cuisine souvent avec les mains mouillées. Phrases courtes, impératives, précises. Pas de "vous pouvez aussi..." — une seule instruction claire par phrase.

**`why`** : le "pourquoi pédagogique". C'est ce qui distingue cette app d'un simple livre de recettes. Ne pas l'écrire si on n'a pas une vraie raison chimique/culinaire à donner.

**`mistake`** : toujours formulé comme "Action incorrecte → conséquence concrète". Réel, pas théorique.

**`timer`** : uniquement pour les étapes où l'utilisateur doit vraiment surveiller le temps. Ne pas en mettre partout.

---

## Checklist avant de valider un ajout

### Pour une leçon :
- [ ] 3 objectifs (verbe à l'infinitif)
- [ ] 3-5 concepts avec `title` + `body`
- [ ] 3-5 questions quiz, chacune avec 4 choix et une explication
- [ ] `linkedRecipes` pointe vers des recettes existantes
- [ ] L'`id` est unique dans LESSONS

### Pour une recette :
- [ ] `family` est une valeur autorisée
- [ ] 4-8 étapes, chacune avec `action` + `why` + `mistake`
- [ ] `linkedRecipes` dans les leçons correspondantes pointent vers cette recette
- [ ] L'`id` est unique dans RECIPES

---

## TECHNIQUES (fiches de référence rapide)

Visibles dans l'onglet "Apprendre" → section accordéon en bas.
Idéales pour des infos consultables rapidement en cuisine.

```js
var TECHNIQUES = [
  {
    id: 'mon-id-unique',         // unique, tirets
    title: 'Titre de la fiche',
    emoji: '🌡️',                 // un seul emoji
    color: '#dc2626',            // couleur hex (teinte de l'icône)
    subtitle: 'Description courte visible avant ouverture',
    items: [                     // 4 à 10 lignes
      { label: 'Étiquette',  value: 'Valeur',    note: 'précision optionnelle' },
      { label: 'Bœuf saignant', value: '52–54°C', note: 'cœur rouge vif' },
    ],
  },
];
```

**Règles :** `label` et `value` obligatoires, `note` facultatif. Pas de HTML.

---

## Prérequis de leçons (verrouillage progressif)

Ajoute `prerequisites: ['id-leçon']` à une leçon pour la verrouiller jusqu'à ce que la leçon prérequis soit terminée.

```js
{
  id: 'ma-lecon',
  prerequisites: ['lecon-prealable'],  // [] ou absent = pas de verrou
  moduleId: '...',
  ...
}
```

---

## Syntaxe importante

Les quatre tableaux utilisent `var` (pas `export const`, pas `const`) :
```js
var MODULES    = [ ... ];
var LESSONS    = [ ... ];
var RECIPES    = [ ... ];
var TECHNIQUES = [ ... ];
```
Ne pas modifier cette syntaxe — l'app lit ces variables directement.

## Ajouter un nouveau module

1. Ajouter l'objet dans `MODULES`
2. Ajouter les leçons correspondantes dans `LESSONS` avec le bon `moduleId`
3. Les recettes liées n'ont pas besoin d'être dans un module — elles apparaissent dans la section Cuisiner

---

## Ajouter rapidement du contenu

Ordre recommandé :
1. Créer le module dans `MODULES`
2. Écrire les leçons une par une dans `LESSONS`
3. Écrire les recettes dans `RECIPES`
4. Vérifier les `linkedRecipes` dans les leçons

---

## Notes sur le HTML dans les textes

Les champs `body` (concepts), `action`, `why`, `mistake` supportent du HTML simple :
- `<strong>texte</strong>` → **gras**
- `<br>` → saut de ligne

Ne pas utiliser de balises complexes (div, p, ul...).

---

## LOT 3 — Relier fortement les cours et les recettes

Pour éviter que les recettes soient seulement affichées comme des contenus associés, chaque leçon peut désormais définir des **recettes de pratique contextualisées** avec `practiceRecipes`.

L'ancien champ `linkedRecipes` reste accepté pour compatibilité, mais `practiceRecipes` est prioritaire dans l'interface.

### Format recommandé

```js
practiceRecipes: [
  {
    id: 'legumes-sautes-maitrises',
    type: 'direct', // direct | contrast | synthesis | transfer
    label: 'Exercice direct',
    reason: 'Pourquoi cette recette applique précisément la leçon.',
    focus: [
      'Point précis à observer pendant la recette',
      'Geste ou signe de cuisson à travailler',
      'Erreur à éviter'
    ],
    successCriteria: [
      'Critère concret de réussite observable',
      'Texture, couleur, goût ou organisation attendue'
    ]
  }
]
```

### Types de pratiques

| Type | Usage |
|------|-------|
| `direct` | La meilleure recette à faire juste après le cours |
| `contrast` | Une recette qui montre le principe inverse ou complémentaire |
| `synthesis` | Une recette qui combine plusieurs notions récentes |
| `transfer` | Une recette plus avancée qui transfère la compétence à un autre produit |

### Règle pédagogique

Ne force pas une recette après chaque cours. L'app ajoute les pratiques dans une liste **À pratiquer**, afin que l'utilisateur puisse enchaîner plusieurs leçons puis cuisiner plus tard.

La bonne logique est :

```text
Cours → pratique recommandée stockée → recette faite plus tard avec un focus précis
```

### Exemple : Maîtriser l'intensité du feu

```js
practiceRecipes: [
  {
    id: 'legumes-sautes-maitrises',
    type: 'direct',
    label: 'Exercice direct',
    reason: 'C’est la meilleure recette pour voir immédiatement l’effet du feu fort, de l’humidité et de la baisse du feu.',
    focus: [
      'Démarrer avec une poêle assez chaude',
      'Ne pas surcharger la poêle',
      'Écouter le grésillement',
      'Baisser le feu quand la coloration démarre'
    ],
    successCriteria: [
      'Les légumes sont dorés, pas bouillis',
      'Ils restent légèrement croquants',
      'Aucune odeur de brûlé'
    ]
  }
]
```

### Bonnes pratiques

- Une leçon peut avoir 1 à 3 pratiques maximum.
- La première pratique doit être la plus évidente et la plus directement liée.
- Le champ `reason` doit expliquer le lien cours-recette.
- Le champ `focus` doit guider l'observation pendant la recette.
- Le champ `successCriteria` doit permettre de savoir si l'exercice est réussi.


## Cadence recommandée

L'app privilégie une seule recette poussée par semaine. Les leçons peuvent être faites librement, sans obligation de cuisiner immédiatement. Quand une leçon est terminée, ses `practiceRecipes` alimentent la liste “À pratiquer”. La recette hebdomadaire est choisie prioritairement dans cette liste, puis dans la prochaine leçon disponible, puis dans les recettes non cuisinées.


## Débriefs et maîtrise

Chaque recette peut être suivie d'un bilan. Le bilan doit capter : résultat, erreurs rencontrées, compétences travaillées et note pour la prochaine tentative. Ces données alimentent la progression par compétence : vu, compris, pratiqué, maîtrisé.


## Révision intelligente et niveaux

Les erreurs de quiz, les bilans de recettes et les compétences peu pratiquées alimentent une section de révision courte. Les niveaux culinaires synthétisent la progression globale, sans remplacer le verrouillage progressif des leçons.
