// ════════════════════════════════════════════════
//   CONTENT/DATA.JS — Chef Coach
//
//   C'est ici que tu ajoutes tout le contenu :
//   modules, leçons et recettes.
//
//   Consulte CONTENT_GUIDE.md pour le schéma
//   complet et les règles à respecter.
// ════════════════════════════════════════════════


// ════════════════════════════════════════════════
//   MODULES
//   Un module regroupe plusieurs leçons liées.
// ════════════════════════════════════════════════
var MODULES = [
  {
    id: 'bases',
    title: 'Les bases',
    emoji: '🔪',
    description: 'Gestes fondamentaux, découpe, mise en place',
    color: '#e85d04',
    lessonIds: ['couteaux', 'mise-en-place', 'assaisonnement'],
  },
  {
    id: 'cuissons',
    title: 'Les cuissons',
    emoji: '🔥',
    description: 'Poêle, four, vapeur, mijotage, rôtissage',
    color: '#2563eb',
    lessonIds: ['cuisson-poele', 'cuisson-four', 'mijotage'],
  },
  {
    id: 'sauces',
    title: 'Les sauces',
    emoji: '🫙',
    description: 'Émulsions, jus, crèmes, vinaigrettes',
    color: '#16a34a',
    lessonIds: ['sauce-base', 'emulsions'],
  },
];


// ════════════════════════════════════════════════
//   LEÇONS
//   Voir CONTENT_GUIDE.md pour le schéma complet.
// ════════════════════════════════════════════════
var LESSONS = [

  // ─────────────────────────────────────────────
  // MODULE : BASES
  // ─────────────────────────────────────────────
  {
    id: 'couteaux',
    moduleId: 'bases',
    title: 'Maîtriser le couteau',
    subtitle: 'Prise, découpes essentielles, sécurité',
    duration: 8,
    objectives: [
      'Tenir le couteau avec la prise chef pour plus de contrôle',
      'Réaliser les 4 découpes fondamentales (julienne, brunoise, chiffonnade, ciseler)',
      'Comprendre pourquoi la taille de coupe change le résultat final',
    ],
    concepts: [
      {
        title: 'La prise chef',
        body: 'Pince le dos de la lame entre le pouce et l\'index. Les trois autres doigts s\'enroulent sur le manche. C\'est contre-intuitif mais c\'est ce qui donne le contrôle direct sur l\'angle et la trajectoire.',
        tip: 'Si tu as peur de la lame et que tu la tiens trop loin, tu risques paradoxalement plus de te couper.',
      },
      {
        title: 'La main guide — la "griffe"',
        body: 'La main qui tient l\'aliment fait une "griffe" : doigts repliés, jointures en avant. Le plat du couteau glisse contre les jointures. Cette position protège les doigts automatiquement, même à vitesse.',
        tip: 'Si tu vois tes ongles pointer vers la lame, c\'est mal — replie davantage.',
      },
      {
        title: 'Les 4 découpes à connaître',
        body: '<strong>Julienne</strong> : fins bâtonnets (2-3mm). <strong>Brunoise</strong> : petits dés réguliers issus de la julienne. <strong>Chiffonnade</strong> : herbes roulées puis tranchées en fines lanières. <strong>Ciseler</strong> : oignon en coups horizontaux puis verticaux, en tenant le bout pour ne pas perdre la forme.',
      },
      {
        title: 'Pourquoi la taille change le goût',
        body: 'Petit morceau = plus de surface exposée = cuisson plus rapide, saveurs vives et concentrées. Grand morceau = cuisson lente, saveurs plus profondes et fondantes. Une brunoise d\'ail fond en 30 secondes et devient douce. Un ail entier en chemise dans un ragoût 2h apporte une saveur radicalement différente.',
      },
    ],
    goFurther: {
      title: 'Aiguiser vs affûter : quelle différence ?',
      content: 'Un couteau qu\'il faut forcer est dangereux — la force compense le manque de tranchant et fait dévier la lame. Affûter sur une pierre = recréer le fil de la lame. Réaligner sur un fusil = remettre droit un fil tordu. Un couteau bien affûté glisse dans une tomate sans aucune pression.',
    },
    quiz: [
      {
        q: 'Où place-t-on le pouce et l\'index dans la prise chef ?',
        options: [
          'Tout en haut du manche, le plus loin possible',
          'Directement sur le dos de la lame (prise en pince)',
          'Sur le talon du couteau uniquement',
          'Sur la pointe pour guider la découpe',
        ],
        answer: 1,
        explanation: 'Pincer le dos de la lame avec pouce et index donne un contrôle direct sur l\'angle et la trajectoire. C\'est la base de la prise professionnelle.',
      },
      {
        q: 'Pourquoi des morceaux réguliers sont-ils importants ?',
        options: [
          'Pour faire joli dans l\'assiette uniquement',
          'Des morceaux inégaux cuisent inégalement — les petits brûlent pendant que les grands restent crus',
          'C\'est une convention sans impact réel sur le goût',
          'Pour que les ingrédients tiennent mieux dans la casserole',
        ],
        answer: 1,
        explanation: 'La taille détermine directement la vitesse de cuisson. L\'uniformité est une question de maîtrise, pas seulement d\'esthétique.',
      },
      {
        q: 'Comment faire la "griffe" pour protéger tes doigts ?',
        options: [
          'Étirer les doigts à plat, loin de la lame',
          'Replier les doigts, jointures en avant, le couteau glisse contre les jointures',
          'Poser la main à plat sur l\'aliment',
          'Tenir l\'aliment avec deux doigts seulement',
        ],
        answer: 1,
        explanation: 'La griffe place les jointures comme un rail — le couteau s\'y appuie et les doigts sont protégés naturellement.',
      },
      {
        q: 'Qu\'est-ce qu\'une brunoise ?',
        options: [
          'De fins bâtonnets de 5mm de long',
          'Une coupe en rondelles fines',
          'De petits dés réguliers de 1 à 3mm de côté',
          'Des herbes finement ciselées',
        ],
        answer: 2,
        explanation: 'La brunoise = petits cubes issus de la julienne. Utilisée pour bases de sauce, garnitures, farces.',
      },
    ],
    linkedRecipes: ['salade-composee', 'soupe-legumes'],
  },

  {
    id: 'mise-en-place',
    moduleId: 'bases',
    title: 'La mise en place',
    subtitle: 'S\'organiser avant de cuisiner comme un pro',
    duration: 7,
    objectives: [
      'Préparer tous les ingrédients avant de commencer à cuire',
      'Organiser son poste de travail pour éviter le stress',
      'Comprendre le rôle du timing dans la cuisine',
    ],
    concepts: [
      {
        title: 'Qu\'est-ce que la mise en place ?',
        body: 'C\'est le principe fondateur de la cuisine professionnelle : tout préparer, mesurer, découper et organiser AVANT d\'allumer le feu. Dans les grands restaurants, la mise en place commence des heures avant le service.',
        tip: 'Le chaos en cuisine vient presque toujours d\'une mauvaise mise en place, pas d\'un manque de talent.',
      },
      {
        title: 'Les 3 étapes d\'une bonne mise en place',
        body: '1. <strong>Lire la recette entièrement</strong> avant de commencer — repérer les temps et les étapes critiques. 2. <strong>Préparer et peser</strong> tous les ingrédients (petits bols, ramequins). 3. <strong>Organiser l\'espace</strong> : outils à portée, ingrédients dans l\'ordre d\'utilisation.',
      },
      {
        title: 'Lire et anticiper le timing',
        body: 'Certaines étapes se font en parallèle (légumes qui rôtissent pendant que tu fais la sauce). Repère les temps de cuisson longs et démarre-les en premier. La question à se poser : "Qu\'est-ce qui prend le plus de temps ?" C\'est toujours ça qu\'on met en route en premier.',
        tip: 'Écrire l\'ordre des tâches sur papier avant de commencer pour une recette complexe.',
      },
    ],
    quiz: [
      {
        q: 'Quand doit-on préparer les ingrédients ?',
        options: [
          'Au fur et à mesure qu\'on en a besoin',
          'Tout avant d\'allumer le feu',
          'Uniquement les ingrédients difficiles à découper',
          'Pendant la cuisson pour gagner du temps',
        ],
        answer: 1,
        explanation: 'La mise en place avant cuisson élimine le stress et les erreurs. Chercher un ingrédient pendant qu\'une sauce brûle, c\'est la source de la plupart des ratés.',
      },
      {
        q: 'Quelle est la première chose à faire avant de cuisiner ?',
        options: [
          'Allumer les feux à la bonne température',
          'Lire la recette entièrement',
          'Sortir tous les ustensiles',
          'Préchauffer le four',
        ],
        answer: 1,
        explanation: 'Lire la recette en entier permet d\'anticiper les étapes longues, les techniques difficiles et les temps de repos.',
      },
      {
        q: 'Quelle tâche démarre-t-on en premier dans une recette ?',
        options: [
          'La plus facile pour se mettre en confiance',
          'Celle qui prend le plus de temps',
          'La préparation des ingrédients les plus chers',
          'N\'importe laquelle, l\'ordre ne compte pas',
        ],
        answer: 1,
        explanation: 'Toujours démarrer ce qui prend le plus de temps : la viande qui doit mariner, le fond qui mijote, la pâte qui doit reposer.',
      },
    ],
    linkedRecipes: ['poulet-roti', 'salade-composee'],
  },

  {
    id: 'assaisonnement',
    moduleId: 'bases',
    title: 'Saler, assaisonner, équilibrer',
    subtitle: 'Le geste qui change tout dans un plat',
    duration: 9,
    objectives: [
      'Comprendre le rôle du sel au-delà du "goût salé"',
      'Savoir quand et comment assaisonner à chaque étape',
      'Équilibrer les 5 saveurs : salé, sucré, acide, amer, umami',
    ],
    concepts: [
      {
        title: 'Le sel n\'est pas là pour "saler"',
        body: 'Le sel rehausse toutes les autres saveurs et supprime l\'amertume. Un plat fade est presque toujours un plat sous-salé. Le sel doit être ajouté progressivement tout au long de la cuisson, pas uniquement à la fin.',
        tip: 'La règle des pros : saler à chaque étape (légumes à la poêle, eau de cuisson, assaisonnement final) plutôt que beaucoup d\'un coup à la fin.',
      },
      {
        title: 'Quand saler ?',
        body: 'Sel <strong>avant cuisson</strong> : viande (30 min avant = croûte meilleure), légumes (libère l\'humidité, concentre les saveurs). Sel <strong>pendant</strong> : eau des pâtes (doit être "aussi salée que la mer"), sauces. Sel <strong>à la fin</strong> : ajustement final, fleur de sel sur viande cuite, salade.',
      },
      {
        title: 'L\'acide, secret des cuisiniers',
        body: 'Un filet de citron ou de vinaigre en fin de cuisson "soulève" un plat et lui donne de la vivacité. Si un plat est fade malgré le sel, c\'est souvent un manque d\'acidité. Essaie : soupe, ragoût, viande rôtie — quelques gouttes de citron transforment tout.',
        tip: 'Avant de ressaler, essaie d\'abord un filet de citron ou une goutte de vinaigre.',
      },
      {
        title: 'Les 5 saveurs à équilibrer',
        body: '<strong>Salé</strong> : sel, soja, anchois. <strong>Sucré</strong> : caramelisation, miel, réduction. <strong>Acide</strong> : citron, vinaigre, tomate. <strong>Amer</strong> : café, chocolat noir, chicorée. <strong>Umami</strong> : parmesan, champignons, tomate concentrée, viande longuement cuite. Un grand plat joue sur plusieurs de ces saveurs à la fois.',
      },
    ],
    goFurther: {
      title: 'Poivre : quand l\'ajouter ?',
      content: 'Le poivre perd ses arômes à haute température. Pour une utilisation maximale : poivrer en fin de cuisson ou au dressage. En revanche, on peut poivrer une viande avant cuisson car l\'objectif est alors de créer une croûte et non de préserver les arômes délicats.',
    },
    quiz: [
      {
        q: 'Quel est le rôle principal du sel dans un plat ?',
        options: [
          'Rendre le plat salé uniquement',
          'Rehausser toutes les saveurs et supprimer l\'amertume',
          'Conserver les aliments plus longtemps',
          'Changer la texture des viandes',
        ],
        answer: 1,
        explanation: 'Le sel amplifie les arômes existants. Un plat sous-salé ne déploie jamais tout son potentiel de saveur, même si la recette est parfaite par ailleurs.',
      },
      {
        q: 'Qu\'est-ce que tu fais si un plat est fade malgré le sel ?',
        options: [
          'Tu rajoutes beaucoup de sel',
          'Tu ajoutes du sucre',
          'Tu essaies un filet de citron ou de vinaigre',
          'Tu prolonges la cuisson',
        ],
        answer: 2,
        explanation: 'La fadeur vient souvent d\'un manque d\'acidité autant que de sel. Le citron ou le vinaigre "soulèvent" le plat et révèlent les saveurs.',
      },
      {
        q: 'Quand faut-il saler l\'eau des pâtes ?',
        options: [
          'Après avoir ajouté les pâtes',
          'Uniquement si la sauce n\'est pas déjà salée',
          'Avant de mettre les pâtes — l\'eau doit être "aussi salée que la mer"',
          'Jamais, les pâtes absorbent trop de sel',
        ],
        answer: 2,
        explanation: 'L\'eau de cuisson des pâtes doit être généreusement salée : c\'est la seule occasion de saler la pâte elle-même. Une eau fade = pâtes fades, quelle que soit la sauce.',
      },
    ],
    linkedRecipes: ['salade-composee'],
  },

  // ─────────────────────────────────────────────
  // MODULE : CUISSONS
  // ─────────────────────────────────────────────
  {
    id: 'cuisson-poele',
    moduleId: 'cuissons',
    title: 'La cuisson à la poêle',
    subtitle: 'Saisir, colorer, cuire à cœur',
    duration: 10,
    objectives: [
      'Comprendre la réaction de Maillard et pourquoi elle est clé',
      'Maîtriser le timing feu fort / feu doux',
      'Éviter les 3 erreurs qui empêchent la croûte de se former',
    ],
    concepts: [
      {
        title: 'La réaction de Maillard',
        body: 'Quand la surface d\'un aliment dépasse 140°C, les protéines et sucres réagissent entre eux pour créer des centaines de nouveaux arômes et cette couleur brune appétissante. C\'est cette réaction qui distingue une viande rôtie d\'une viande bouillie.',
        tip: 'Pas de croûte = pas de Maillard = pas de goût. La coloration n\'est pas cosmétique, c\'est chimique.',
      },
      {
        title: 'Les 3 erreurs qui tuent la croûte',
        body: '1. <strong>Poêle pas assez chaude</strong> : l\'aliment "sue" plutôt que de saisir. 2. <strong>Poêle trop chargée</strong> : la vapeur s\'accumule et empêche la coloration. 3. <strong>Déplacer l\'aliment trop tôt</strong> : il faut attendre qu\'il se détache tout seul — quand il accroche encore, c\'est qu\'il n\'est pas prêt.',
      },
      {
        title: 'Feu fort puis feu moyen',
        body: 'La technique de base : saisir à feu fort pour créer la croûte (30s à 2 min selon l\'épaisseur), puis baisser à feu moyen pour finir la cuisson à cœur sans brûler. Pour une pièce épaisse : saisir → finir au four.',
        tip: 'On entend la cuisson : le grésillement fort = bon signe. Le silence = température trop basse.',
      },
      {
        title: 'Rôle du corps gras',
        body: 'L\'huile neutre supporte des hautes températures (250°C+). Le beurre apporte le goût mais brûle rapidement. <strong>Technique pro</strong> : commencer à l\'huile pour la chaleur, ajouter du beurre en fin de cuisson et arroser la pièce (basting) pour les arômes.',
      },
    ],
    quiz: [
      {
        q: 'Pourquoi faut-il ne pas bouger la viande juste après l\'avoir posée ?',
        options: [
          'Pour ne pas abîmer la surface de la poêle',
          'Elle doit se détacher seule — si elle accroche, la croûte n\'est pas formée',
          'Pour éviter les éclaboussures de graisse',
          'C\'est une légende, on peut la bouger sans problème',
        ],
        answer: 1,
        explanation: 'La viande qui accroche, c\'est la croûte en train de se former. Elle se détachera seule quand la réaction de Maillard sera complète. Insister trop tôt arrache la croûte.',
      },
      {
        q: 'Une poêle trop chargée donne quel problème ?',
        options: [
          'La cuisson est plus rapide',
          'La vapeur s\'accumule et empêche la coloration',
          'Le fond de la poêle se détériore',
          'Aucun problème, c\'est une question d\'esthétique',
        ],
        answer: 1,
        explanation: 'Trop d\'aliments dans la poêle = la température chute et l\'humidité ne peut pas s\'évaporer assez vite. Résultat : les aliments cuisent à la vapeur au lieu de rôtir.',
      },
      {
        q: 'Pourquoi ajouter le beurre en fin de cuisson et non au début ?',
        options: [
          'Le beurre au début empêche la réaction de Maillard',
          'Le beurre brûle à haute température et devient amer',
          'Le beurre ne fondra pas si la poêle est trop froide',
          'C\'est une question de coût uniquement',
        ],
        answer: 1,
        explanation: 'Le beurre brûle vers 150-170°C. En l\'ajoutant en fin de cuisson à température plus basse, on profite de ses arômes (noisette) sans l\'amertume du beurre brûlé.',
      },
    ],
    linkedRecipes: ['poulet-roti', 'oeufs-cocotte'],
  },

  {
    id: 'cuisson-four',
    moduleId: 'cuissons',
    title: 'Le four : rôtissage et cuisson douce',
    subtitle: 'Chaleur tournante, températures et contrôle',
    duration: 8,
    objectives: [
      'Choisir entre chaleur tournante et sole/voûte selon le résultat voulu',
      'Comprendre l\'importance de la température interne des viandes',
      'Maîtriser le temps de repos après cuisson',
    ],
    concepts: [
      {
        title: 'Chaleur tournante vs sole/voûte',
        body: '<strong>Chaleur tournante</strong> : le ventilateur distribue uniformément la chaleur. Idéale pour viandes rôties, légumes, biscuits. Cuisson plus rapide et homogène. <strong>Sole/voûte</strong> : chaleur statique. Meilleure pour les pâtisseries qui doivent lever uniformément (tarte, soufflé) et les plats qui ne doivent pas se dessécher en surface.',
        tip: 'En chaleur tournante, baisser la température de 20°C par rapport à une recette en chaleur statique.',
      },
      {
        title: 'La règle de la température interne',
        body: 'La couleur extérieure ne dit rien sur la cuisson à cœur. Seul un thermomètre de cuisine est fiable. Repères : bœuf saignant 52°C, à point 57°C, bien cuit 65°C. Poulet 74°C (jambe). Porc 65°C. Poisson : 55-60°C. Le thermomètre est l\'investissement cuisine qui change le plus les résultats.',
      },
      {
        title: 'Laisser reposer la viande — pourquoi ?',
        body: 'Pendant la cuisson, les jus migrent vers le centre. En laissant reposer, ils se redistribuent. Couper trop tôt = les jus se répandent dans l\'assiette, la viande est sèche. Règle : reposer aussi longtemps que la pièce a cuit, jusqu\'à 15-20 min pour un rôti.',
        tip: 'Couvrir d\'une feuille d\'alu sans fermer hermétiquement (pour ne pas créer de condensation et ramollir la croûte).',
      },
    ],
    quiz: [
      {
        q: 'Pour quelle cuisson préfère-t-on la chaleur statique (sole/voûte) ?',
        options: [
          'Poulet rôti',
          'Légumes rôtis',
          'Tarte ou soufflé qui doit lever uniformément',
          'Viande saignante',
        ],
        answer: 2,
        explanation: 'La chaleur statique est plus douce et ne dessèche pas les surfaces. Idéale pour les préparations qui lèvent (soufflé, tarte) ou qui ne doivent pas former de croûte épaisse.',
      },
      {
        q: 'Comment sait-on qu\'un poulet est cuit à cœur ?',
        options: [
          'La peau est bien dorée',
          'Le jus ressort clair en piquant la cuisse, ou 74°C au thermomètre',
          'Il a l\'air cuit quand on regarde',
          'Après le temps indiqué dans la recette exactement',
        ],
        answer: 1,
        explanation: 'Le temps indiqué est une estimation — le poids réel, le four et la température initiale changent tout. Seul le test du jus ou le thermomètre est fiable.',
      },
    ],
    linkedRecipes: ['poulet-roti'],
  },

  {
    id: 'mijotage',
    moduleId: 'cuissons',
    title: 'Mijoter et braiser',
    subtitle: 'Transformer les viandes dures en plats fondants',
    duration: 9,
    objectives: [
      'Comprendre pourquoi les morceaux durs mijotés sont souvent les meilleurs',
      'Maîtriser la technique du braisage en 3 phases',
      'Reconnaître une cuisson longue réussie',
    ],
    concepts: [
      {
        title: 'Pourquoi cuire longtemps ?',
        body: 'Les morceaux dits "bon marché" (joue, paleron, jarret, poitrine) sont riches en collagène. Cuit rapidement = caoutchouteux. Mijoté 2-3h entre 85-95°C = le collagène se transforme en gélatine, qui donne une texture fondante et un jus soyeux. C\'est le contraire de la cuisson rapide : plus c\'est long, meilleur c\'est.',
        tip: 'Un mijoté doit frémir, pas bouillir. Trop fort = viande sèche. Trop doux = pas de transformation.',
      },
      {
        title: 'Les 3 phases du braisage',
        body: '1. <strong>Saisir</strong> : colorer la viande à feu vif de tous les côtés (réaction de Maillard). 2. <strong>Mouiller</strong> : déglacer les sucs, ajouter le liquide (vin, bouillon) aux 2/3 de la viande. 3. <strong>Mijoter couvert</strong> : au four ou sur feu doux, entre 85-95°C, minimum 1h30.',
      },
      {
        title: 'Lire la cuisson',
        body: 'Un mijoté est prêt quand : la viande se détache à la fourchette sans couteau, le jus est épais et nappant, la gélatine a rendu la sauce brillante. Goûter et ajuster l\'assaisonnement à la fin car la réduction concentre les saveurs — attendre avant de saler à nouveau.',
      },
    ],
    quiz: [
      {
        q: 'Pourquoi un morceau de viande dur devient-il fondant après mijotage ?',
        options: [
          'La viande se dilate avec la chaleur',
          'Le collagène se transforme en gélatine après cuisson longue',
          'L\'eau du liquide pénètre dans les fibres',
          'La viande devient plus tendre car elle se réhydrate',
        ],
        answer: 1,
        explanation: 'Le collagène (abondant dans les morceaux à mijoter) nécessite 80-90°C sur une longue durée pour se dissoudre en gélatine. C\'est cette gélatine qui donne le fondant et le brillant de la sauce.',
      },
      {
        q: 'Quelle température pour un mijotage ? On doit voir :',
        options: [
          'Un bouillon à gros bouillons',
          'Un frémissement régulier, quelques bulles douces',
          'Aucune bulle — cuisson très douce uniquement',
          'Peu importe, la température ne change pas le résultat',
        ],
        answer: 1,
        explanation: 'Le frémissement (85-95°C) transforme le collagène sans dessécher la viande. L\'ébullition violente (100°C+) serre les fibres et donne une viande sèche et filandreuse.',
      },
    ],
    linkedRecipes: ['boeuf-carottes'],
  },

  // ─────────────────────────────────────────────
  // MODULE : SAUCES
  // ─────────────────────────────────────────────
  {
    id: 'sauce-base',
    moduleId: 'sauces',
    title: 'Les jus et sauces déglacées',
    subtitle: 'Récupérer les sucs de cuisson',
    duration: 7,
    objectives: [
      'Comprendre ce que sont les sucs et pourquoi ils sont précieux',
      'Maîtriser le déglaçage pour une sauce rapide',
      'Obtenir une sauce nappante par réduction',
    ],
    concepts: [
      {
        title: 'Qu\'est-ce que les sucs ?',
        body: 'Après avoir saisi une viande, il reste dans la poêle des résidus dorés collés au fond. Ce sont des sucs caramélisés, concentrés en arômes. Jeter ça ou laver la poêle = gâcher la meilleure partie de ta sauce.',
      },
      {
        title: 'Le déglaçage',
        body: 'Retirer la viande, jeter l\'excès de graisse. À feu moyen-fort, verser un liquide froid (vin, bouillon, eau) et racler le fond à la spatule : les sucs se dissolvent. C\'est la base de toute sauce de poêle.',
        tip: 'Le contraste chaud/froid déclenche l\'évaporation de l\'alcool et libère les arômes. Pas de fumée = poêle pas assez chaude.',
      },
      {
        title: 'La réduction',
        body: 'Laisser le liquide bouillir pour qu\'il s\'évapore et se concentre. Quand la sauce nappe une cuillère (elle y reste sans couler rapidement), c\'est prêt. Finir avec du beurre froid coupé en morceaux hors du feu : ça lie la sauce et lui donne du brillant (technique dite "monter au beurre").',
      },
    ],
    quiz: [
      {
        q: 'Qu\'est-ce qu\'on appelle "sucs de cuisson" ?',
        options: [
          'Le jus qui s\'écoule de la viande pendant le repos',
          'Les résidus dorés caramélisés au fond de la poêle après saisie',
          'La graisse fondue pendant la cuisson',
          'Le bouillon ajouté en fin de cuisson',
        ],
        answer: 1,
        explanation: 'Les sucs sont des protéines et sucres caramélisés collés au fond. Ils concentrent tous les arômes de la cuisson — c\'est la base des meilleures sauces.',
      },
      {
        q: 'Que signifie "monter au beurre" ?',
        options: [
          'Faire fondre du beurre dans une casserole à part',
          'Ajouter du beurre froid en petits morceaux hors du feu pour lier et faire briller la sauce',
          'Faire cuire le beurre jusqu\'à coloration noisette',
          'Incorporer du beurre avec un mixer',
        ],
        answer: 1,
        explanation: 'Hors du feu, on ajoute du beurre froid en dés et on tourbillonne la casserole. Le beurre lie la sauce et lui donne texture soyeuse et brillance.',
      },
    ],
    linkedRecipes: ['poulet-roti', 'boeuf-carottes'],
  },

  {
    id: 'emulsions',
    moduleId: 'sauces',
    title: 'Émulsions : vinaigrette et mayonnaise',
    subtitle: 'Faire coexister l\'huile et l\'eau',
    duration: 8,
    objectives: [
      'Comprendre ce qu\'est une émulsion et pourquoi elle "prend"',
      'Réussir une vinaigrette qui tient',
      'Faire une mayonnaise maison à la fourchette',
    ],
    concepts: [
      {
        title: 'Qu\'est-ce qu\'une émulsion ?',
        body: 'L\'huile et l\'eau ne se mélangent normalement pas. Un émulsifiant (moutarde, jaune d\'œuf, lécithine) enrobe les gouttelettes d\'huile et leur permet de rester en suspension dans l\'eau. Résultat : une sauce lisse, crémeuse, stable.',
      },
      {
        title: 'La vinaigrette qui tient',
        body: 'Base : 3 parts d\'huile pour 1 part d\'acide (vinaigre ou citron). Ajouter ½ cuillère de moutarde comme émulsifiant. Fouetter l\'acide + moutarde + sel d\'abord, puis incorporer l\'huile en filet en fouettant. La moutarde forme une "barrière" autour des gouttes d\'huile.',
        tip: 'Verser l\'huile trop vite = émulsion qui ne prend pas. Filet régulier = sauce onctueuse.',
      },
      {
        title: 'La mayonnaise maison',
        body: 'Jaune d\'œuf à température ambiante + moutarde + sel. Fouetter. Ajouter l\'huile goutte à goutte au début, puis en filet une fois que l\'émulsion a "pris". Monter avec 150-200ml d\'huile par jaune. Ajouter quelques gouttes de citron à la fin. Si elle tranche (huile et eau séparées) : recommencer avec un nouveau jaune, en incorporant la mayonnaise ratée.',
      },
    ],
    quiz: [
      {
        q: 'Quel est le rôle de la moutarde dans une vinaigrette ?',
        options: [
          'Apporter de l\'acidité',
          'Émulsifier — enrober les gouttes d\'huile pour qu\'elles restent en suspension',
          'Conserver la vinaigrette plus longtemps',
          'Épaissir la sauce uniquement',
        ],
        answer: 1,
        explanation: 'La moutarde contient de la lécithine, un émulsifiant naturel qui empêche l\'huile et le vinaigre de se séparer.',
      },
      {
        q: 'La mayonnaise tranche (se sépare). Comment la rattraper ?',
        options: [
          'Ajouter plus d\'huile très vite',
          'La réchauffer doucement',
          'Recommencer avec un nouveau jaune et incorporer la mayo ratée en filet',
          'Ajouter du sel et fouetter très fort',
        ],
        answer: 2,
        explanation: 'Un nouveau jaune d\'œuf relance l\'émulsion. On y incorpore progressivement la mayo ratée, qui finit par s\'émulsionner correctement.',
      },
    ],
    linkedRecipes: ['salade-composee'],
  },
];


// ════════════════════════════════════════════════
//   RECETTES
//   Voir CONTENT_GUIDE.md pour le schéma complet.
// ════════════════════════════════════════════════
var RECIPES = [
  {
    id: 'poulet-roti',
    title: 'Poulet rôti parfait',
    family: 'viande',
    difficulty: 2,
    timePrep: 15,
    timeCook: 80,
    servings: 4,
    skills: ['cuisson-four', 'assaisonnement'],
    objectives: [
      'Obtenir une peau dorée et croustillante',
      'Cuisson à cœur parfaite sans dessèchement',
    ],
    ingredients: [
      { qty: '1',  unit: '',         item: 'poulet fermier',    note: '1,4–1,6 kg' },
      { qty: '50', unit: 'g',        item: 'beurre',             note: 'pommade' },
      { qty: '1',  unit: '',         item: 'citron jaune',       note: '' },
      { qty: '4',  unit: 'branches', item: 'thym frais',         note: '' },
      { qty: '2',  unit: 'feuilles', item: 'laurier',            note: '' },
      { qty: '',   unit: '',         item: 'sel fin et poivre',  note: 'généreux' },
    ],
    steps: [
      {
        id: 1,
        title: 'Préparer le poulet',
        action: 'Sortir le poulet du frigo 30 min avant. Sécher toute la peau avec du papier absorbant. Préchauffer le four à 210°C chaleur tournante.',
        why: 'Peau sèche = peau croustillante. Poulet à température ambiante = cuisson uniforme entre la surface et le cœur.',
        mistake: 'Enfourner directement sorti du frigo → peau molle, cuisson inégale, poitrine sèche avant que les cuisses soient cuites.',
        timer: null,
      },
      {
        id: 2,
        title: 'Assaisonner généreusement',
        action: 'Mélanger le beurre pommade avec le zeste du citron, du sel et du poivre. Enduire tout le poulet. Glisser le reste du beurre sous la peau de la poitrine avec les doigts. Farcir la cavité avec le thym, le laurier et le demi-citron pressé.',
        why: 'Le beurre sous la peau hydrate et protège la poitrine (partie qui s\'assèche le plus vite) et cuit la peau directement pour la croûtiller.',
        mistake: 'Sous-assaisonner → poulet fade. Ne pas mettre de beurre sous la peau → poitrine sèche.',
        timer: null,
      },
      {
        id: 3,
        title: 'Rôtir en deux temps',
        action: 'Poser le poulet dos vers le haut dans un plat. Enfourner 20 min. Retourner poitrine vers le haut. Continuer 55–60 min. Arroser avec le jus du plat toutes les 20 min.',
        why: 'Commencer dos en haut : le gras des cuisses fond et s\'écoule vers la poitrine, l\'hydratant naturellement pendant les 20 premières minutes cruciales.',
        mistake: 'Ouvrir le four trop souvent → perte de chaleur → peau qui ne croustille pas. Ne pas arroser → dessèchement.',
        timer: 80,
      },
      {
        id: 4,
        title: 'Vérifier la cuisson et laisser reposer',
        action: 'Piquer la cuisse profondément : le jus doit ressortir parfaitement clair (pas rosé). Ou thermomètre : 74°C dans la cuisse. Sortir du four et laisser reposer 10 min sous papier alu posé (non fermé).',
        why: 'Le repos redistribue les jus dans toute la chair. Couper trop tôt = les jus s\'échappent dans l\'assiette, chair sèche.',
        mistake: 'Sauter le repos ou l\'écourter → perte des jus au découpage.',
        timer: 10,
      },
    ],
    tips: [
      'Veille : frotter avec ail + herbes la veille, laisser au frigo à découvert toute la nuit → peau encore plus sèche et croustillante.',
      'Sauce rapide : déglacer le plat de cuisson avec 10 cl de vin blanc ou bouillon, racler les sucs, réduire 2 min.',
    ],
  },

  {
    id: 'salade-composee',
    title: 'Salade composée et vinaigrette maison',
    family: 'légume',
    difficulty: 1,
    timePrep: 20,
    timeCook: 0,
    servings: 2,
    skills: ['découpe', 'assaisonnement', 'émulsion'],
    objectives: [
      'Maîtriser la brunoise et la julienne sur des légumes réels',
      'Réussir une vinaigrette émulsionnée qui tient',
    ],
    ingredients: [
      { qty: '1',  unit: '',  item: 'laitue ou mesclun',   note: '' },
      { qty: '2',  unit: '',  item: 'carottes',             note: '' },
      { qty: '1',  unit: '',  item: 'concombre',            note: '' },
      { qty: '10', unit: '',  item: 'tomates cerises',      note: '' },
      { qty: '2',  unit: '',  item: 'œufs durs',            note: 'optionnel' },
      { qty: '1',  unit: 'c. à soupe', item: 'moutarde de Dijon', note: '' },
      { qty: '3',  unit: 'c. à soupe', item: 'huile d\'olive',    note: '' },
      { qty: '1',  unit: 'c. à soupe', item: 'vinaigre de vin',   note: '' },
      { qty: '',   unit: '',  item: 'sel, poivre',           note: '' },
    ],
    steps: [
      {
        id: 1,
        title: 'Préparer les légumes',
        action: 'Éplucher et râper les carottes en julienne fine. Couper le concombre en demi-lunes de 3-4mm. Couper les tomates cerises en deux. Laver et essorer la salade.',
        why: 'Des légumes taillés régulièrement donnent une texture agréable et une salade visuellement cohérente. La julienne de carotte se mélange mieux au reste.',
        mistake: 'Salade non essorée → la vinaigrette glisse sur les feuilles mouillées et ne tient pas.',
        timer: null,
      },
      {
        id: 2,
        title: 'Réaliser la vinaigrette',
        action: 'Dans un bol, mélanger vinaigre + moutarde + sel + poivre. Fouetter. Verser l\'huile en filet tout en fouettant continuellement jusqu\'à obtenir une sauce onctueuse et liée.',
        why: 'La moutarde est l\'émulsifiant : elle enrobe les gouttes d\'huile. Verser l\'huile lentement permet aux gouttes de rester en suspension.',
        mistake: 'Verser toute l\'huile d\'un coup → la vinaigrette ne s\'émulsionne pas, reste séparée.',
        timer: null,
      },
      {
        id: 3,
        title: 'Dresser et assaisonner',
        action: 'Disposer la salade en premier, puis les légumes par-dessus. Assaisonner juste avant de servir en versant la vinaigrette et en mélangeant délicatement.',
        why: 'On assaisonne au dernier moment : le sel et l\'acide de la vinaigrette font "tomber" la salade rapidement.',
        mistake: 'Préparer trop à l\'avance → feuilles molles, salade détrempée.',
        timer: null,
      },
    ],
    tips: [
      'Changer le vinaigre selon l\'humeur : balsamique avec mozzarella, de cidre avec salade d\'endives, xérès avec salade tiède.',
      'Ajouter graines de tournesol, noix ou croûtons pour le croquant.',
    ],
  },

  {
    id: 'soupe-legumes',
    title: 'Soupe de légumes de saison',
    family: 'soupe',
    difficulty: 1,
    timePrep: 20,
    timeCook: 30,
    servings: 4,
    skills: ['découpe', 'cuisson-douce', 'assaisonnement'],
    objectives: [
      'Réaliser une soupe équilibrée en saveurs avec ce qu\'on a',
      'Maîtriser le mirepoix comme base aromatique',
    ],
    ingredients: [
      { qty: '2',   unit: '',      item: 'poireaux',             note: '' },
      { qty: '3',   unit: '',      item: 'pommes de terre',       note: 'grosses' },
      { qty: '2',   unit: '',      item: 'carottes',              note: '' },
      { qty: '1',   unit: '',      item: 'oignon',                note: '' },
      { qty: '2',   unit: 'gousses', item: 'ail',                note: '' },
      { qty: '1',   unit: 'L',    item: 'bouillon de légumes ou eau', note: '' },
      { qty: '2',   unit: 'c. à soupe', item: 'huile d\'olive',  note: '' },
      { qty: '',    unit: '',      item: 'sel, poivre',            note: '' },
      { qty: '',    unit: '',      item: 'crème fraîche ou beurre', note: 'optionnel, pour finir' },
    ],
    steps: [
      {
        id: 1,
        title: 'Suer les aromates',
        action: 'Émincer finement l\'oignon et le poireau. Chauffer l\'huile à feu doux dans une grande casserole. Ajouter l\'oignon, poireau et ail. Cuire 5-7 min en remuant sans colorer — juste pour fondre.',
        why: 'Cuire les aromates à feu doux sans coloration "sue" les légumes : ils libèrent leurs sucres naturels et créent une base douce et sucrée plutôt qu\'une base amère.',
        mistake: 'Cuire trop fort → légumes qui colorent → saveur amère dans la soupe.',
        timer: null,
      },
      {
        id: 2,
        title: 'Ajouter les légumes et couvrir de bouillon',
        action: 'Éplucher et couper carottes et pommes de terre en morceaux réguliers (3cm). Ajouter dans la casserole. Verser le bouillon à hauteur. Porter à ébullition puis baisser à frémissement.',
        why: 'Des morceaux réguliers cuisent en même temps. Le bouillon (pas l\'eau) apporte déjà du corps et de la saveur.',
        mistake: 'Bouillon à gros bouillons → légumes qui se défont, soupe trouble.',
        timer: 25,
      },
      {
        id: 3,
        title: 'Mixer et assaisonner',
        action: 'Vérifier la cuisson en piquant un morceau (doit s\'écraser sans résistance). Mixer avec un mixeur plongeant jusqu\'à consistance souhaitée (lisse ou légèrement rustique). Goûter, saler, poivrer. Finir avec un filet de crème ou une noix de beurre hors du feu.',
        why: 'La crème ou le beurre hors du feu lie la soupe et lui donne de l\'onctuosité sans casser l\'émulsion.',
        mistake: 'Saler avant de mixer : la réduction concentre les saveurs — saler toujours en dernier.',
        timer: null,
      },
    ],
    tips: [
      'Trop épais : ajouter un peu d\'eau chaude ou bouillon. Trop liquide : laisser réduire quelques minutes à feu moyen.',
      'Finitions selon l\'humeur : huile de truffe, croûtons, ciboulette, crème fraîche, chips de lard.',
    ],
  },

  {
    id: 'boeuf-carottes',
    title: 'Bœuf carottes mijoté',
    family: 'viande',
    difficulty: 2,
    timePrep: 25,
    timeCook: 150,
    servings: 4,
    skills: ['mijotage', 'braisage', 'assaisonnement'],
    objectives: [
      'Transformer un morceau dur en viande fondante',
      'Construire une sauce riche par réduction',
    ],
    ingredients: [
      { qty: '1,2', unit: 'kg',   item: 'paleron ou joue de bœuf', note: 'en gros dés de 5cm' },
      { qty: '4',   unit: '',     item: 'carottes',                  note: 'en rondelles épaisses' },
      { qty: '2',   unit: '',     item: 'oignons',                   note: '' },
      { qty: '3',   unit: 'gousses', item: 'ail',                   note: '' },
      { qty: '1',   unit: 'bouteille', item: 'vin rouge corsé',     note: 'type Côtes-du-Rhône' },
      { qty: '30',  unit: 'cl',   item: 'bouillon de bœuf',          note: '' },
      { qty: '1',   unit: 'c. à soupe', item: 'concentré de tomate', note: '' },
      { qty: '1',   unit: 'bouquet', item: 'garni',                  note: 'thym, laurier, persil' },
      { qty: '',    unit: '',     item: 'sel, poivre, huile',         note: '' },
    ],
    steps: [
      {
        id: 1,
        title: 'Saisir la viande en petites quantités',
        action: 'Sécher la viande avec du papier absorbant. Assaisonner sel + poivre. Faire chauffer l\'huile à feu fort dans une cocotte. Saisir la viande en plusieurs fois (ne pas surcharger) jusqu\'à coloration brune sur toutes les faces. Réserver.',
        why: 'La réaction de Maillard sur la viande est la base du goût du plat entier. Surcharger la cocotte = vapeur = pas de coloration = plat fade.',
        mistake: 'Mettre toute la viande en même temps → chute de température → viande bouillie et grise, sans goût.',
        timer: null,
      },
      {
        id: 2,
        title: 'Faire revenir les légumes',
        action: 'Dans la même cocotte, faire revenir les oignons et ail 3 min. Ajouter le concentré de tomate, cuire 2 min en remuant (il doit s\'assombrir légèrement).',
        why: 'Cuire le concentré de tomate le "pincer" — réduit son acidité et concentre son umami. Les sucs dorés de la viande s\'intègrent aux légumes.',
        mistake: 'Sauter cette étape → sauce acide et moins profonde en goût.',
        timer: null,
      },
      {
        id: 3,
        title: 'Déglacer et construire le mijoté',
        action: 'Remettre la viande dans la cocotte. Verser le vin, racler le fond avec une spatule. Ajouter le bouillon et le bouquet garni. Porter à ébullition, écumer si nécessaire. Baisser à frémissement doux.',
        why: 'Le déglaçage au vin récupère tous les sucs collés — la saveur concentrée de la saisie. L\'alcool s\'évapore, les tanins attendrissent la viande.',
        mistake: 'Oublier d\'écumer les premières impuretés qui remontent → sauce trouble et légèrement amère.',
        timer: null,
      },
      {
        id: 4,
        title: 'Mijoter longuement',
        action: 'Couvrir et cuire à frémissement : 2h au moins, ou 3h pour une texture "fondant à la cuillère". Ajouter les carottes après 1h (elles cuisent plus vite que la viande). Goûter et ajuster l\'assaisonnement en fin de cuisson seulement.',
        why: 'Le collagène du paleron se transforme en gélatine entre 85-90°C sur la durée. C\'est cette gélatine qui donne le fondant et l\'onctuosité de la sauce.',
        mistake: 'Cuire à gros bouillons → fibres serrées → viande sèche. Saler trop tôt → la réduction concentre encore le sel.',
        timer: 120,
      },
    ],
    tips: [
      'Meilleur le lendemain : le plat réchauffé doucement est toujours plus savoureux car les saveurs ont eu le temps de se marier.',
      'Si la sauce est trop liquide en fin de cuisson : retirer la viande, faire réduire la sauce à feu moyen 10-15 min.',
    ],
  },

  {
    id: 'oeufs-cocotte',
    title: 'Œufs cocotte à la crème',
    family: 'œufs',
    difficulty: 1,
    timePrep: 5,
    timeCook: 15,
    servings: 2,
    skills: ['cuisson-four', 'assaisonnement'],
    objectives: [
      'Maîtriser la cuisson délicate des œufs au four',
      'Comprendre la notion de cuisson juste pour les œufs',
    ],
    ingredients: [
      { qty: '4',  unit: '',       item: 'œufs frais',             note: '' },
      { qty: '4',  unit: 'c. à soupe', item: 'crème fraîche épaisse', note: '' },
      { qty: '20', unit: 'g',      item: 'beurre',                  note: '' },
      { qty: '',   unit: '',       item: 'sel, poivre',              note: '' },
      { qty: '',   unit: '',       item: 'ciboulette, cerfeuil',     note: 'optionnel' },
    ],
    steps: [
      {
        id: 1,
        title: 'Préparer le bain-marie',
        action: 'Préchauffer le four à 180°C. Beurrer 2 ramequins. Verser 2 cm d\'eau chaude dans un plat à gratin. Poser les ramequins dans le plat.',
        why: 'Le bain-marie transmet une chaleur douce et homogène — indispensable pour les œufs qui coagulent vite et deviennent caoutchouteux avec une chaleur directe.',
        mistake: 'Four trop chaud sans bain-marie → blanc cuit mais jaune dur, texture caoutchouteuse.',
        timer: null,
      },
      {
        id: 2,
        title: 'Garnir et enfourner',
        action: 'Verser 2 cuillères de crème dans chaque ramequin. Casser délicatement 2 œufs dessus sans crever le jaune. Assaisonner sel + poivre. Enfourner 12-15 min.',
        why: 'L\'œuf posé sur la crème cuit dans un environnement humide et gras qui protège le blanc. Le jaune doit rester coulant.',
        mistake: 'Crever le jaune → il cuit trop vite, devient sec au centre.',
        timer: 13,
      },
      {
        id: 3,
        title: 'Surveiller et servir immédiatement',
        action: 'Le blanc doit être pris (opaque) et le jaune encore brillant et tremblotant. Sortir du four — les œufs continuent de cuire dans les ramequins chauds. Servir immédiatement avec mouillettes de pain grillé.',
        why: 'La cuisson résiduelle dans le ramequin chaud peut surcuire les jaunes en 2 minutes. Il vaut mieux sortir 30 secondes avant l\'idéal.',
        mistake: 'Attendre que le jaune soit "bien pris" avant de sortir → jaune dur à la dégustation.',
        timer: null,
      },
    ],
    tips: [
      'Variantes : ajouter champignons sautés, lard fumé, ou saumon fumé sous les œufs.',
      'Garnitures fraîches ajoutées après cuisson : ciboulette, caviar, herbes fraîches.',
    ],
  },
];
