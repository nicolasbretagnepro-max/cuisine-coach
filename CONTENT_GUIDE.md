# Guide de rédaction du contenu — Chef Coach

Ce fichier décrit exactement comment ajouter du contenu dans `content/data.js`.
**Ne change jamais le code de l'app** (js/, app.css, index.html) — uniquement `content/data.js`.

---

## Structure générale

`content/data.js` contient 3 exports :
- `MODULES` — les modules (groupes de leçons)
- `LESSONS` — toutes les leçons
- `RECIPES` — toutes les recettes

---

## MODULES

Un module regroupe des leçons sur un même thème.

```js
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
