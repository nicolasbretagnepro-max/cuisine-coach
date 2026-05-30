// =============================================================================
//   CONTENT/DATA.JS - Chef Coach
//
//   Contenu pedagogique integre depuis les documents fournis.
//   L'app lit directement ces quatre variables globales.
// =============================================================================

var MODULES = [
  {
    "id": "organisation",
    "title": "Organisation et mise en place",
    "emoji": "🧑‍🍳",
    "description": "Méthode, poste, timing, ordre des tâches",
    "color": "#e85d04",
    "lessonIds": [
      "lire-recette-cuisinier",
      "poste-travail-efficace",
      "mise-en-place-pro",
      "timing-plat-simple"
    ]
  },
  {
    "id": "materiel-feu",
    "title": "Matériel, feu et sécurité",
    "emoji": "🔥",
    "description": "Choisir les bons outils et maîtriser la chaleur",
    "color": "#e85d04",
    "lessonIds": [
      "choisir-bon-ustensile",
      "poele-casserole-sauteuse",
      "maitriser-intensite-feu",
      "securite-cuisine"
    ]
  },
  {
    "id": "couteau-decoupes",
    "title": "Couteau et découpes",
    "emoji": "🔪",
    "description": "Prise, sécurité, régularité, tailles utiles",
    "color": "#e85d04",
    "lessonIds": [
      "prise-couteau-griffe",
      "emincer-ciseler-hacher",
      "tailles-regulieres",
      "decouper-pour-cuire"
    ]
  },
  {
    "id": "bases-cuisson",
    "title": "Les bases de la cuisson",
    "emoji": "🍳",
    "description": "Comprendre chaleur, texture, repos et cuisson juste",
    "color": "#2563eb",
    "lessonIds": [
      "comprendre-chaleur",
      "chaleur-douce-forte",
      "signes-cuisson",
      "repos-cuisson-residuelle"
    ]
  },
  {
    "id": "eau-vapeur-pochage",
    "title": "Eau, vapeur et pochage",
    "emoji": "💧",
    "description": "Bouillir, frémir, pocher, vapeur et légumes verts",
    "color": "#2563eb",
    "lessonIds": [
      "bouillir-fremir-pocher",
      "cuisson-anglaise-legumes",
      "vapeur-papillote",
      "pochage-delicat"
    ]
  },
  {
    "id": "cuissons-poele",
    "title": "Cuissons à la poêle",
    "emoji": "🔥",
    "description": "Saisir, sauter, colorer, arroser et finir juste",
    "color": "#dc2626",
    "lessonIds": [
      "saisir-colorer-maillard",
      "sauter-sans-detremper",
      "cuire-au-beurre-arroser",
      "corriger-cuisson-poele"
    ]
  },
  {
    "id": "four-rotissage-gratins",
    "title": "Four, rôtissage et gratins",
    "emoji": "🔥",
    "description": "Rôtir, gratiner, sécher, cuire à cœur",
    "color": "#dc2626",
    "lessonIds": [
      "comprendre-four",
      "rotir-legumes",
      "rotir-viande-volaille",
      "gratiner-sans-dessecher"
    ]
  },
  {
    "id": "mijotes-braisages",
    "title": "Mijotés, braisages et cuissons longues",
    "emoji": "🍲",
    "description": "Transformer le dur en fondant",
    "color": "#92400e",
    "lessonIds": [
      "principe-cuisson-longue",
      "braiser-en-trois-temps",
      "mijoter-sans-bouillir",
      "reduire-sauce-mijotee"
    ]
  },
  {
    "id": "assaisonnement-equilibre",
    "title": "Assaisonnement et équilibre",
    "emoji": "🧂",
    "description": "Saler, acidifier, équilibrer, corriger",
    "color": "#16a34a",
    "lessonIds": [
      "saler-par-couches",
      "acidite-reveiller-plat",
      "gras-sucre-amer-umami",
      "corriger-plat-rate"
    ]
  },
  {
    "id": "herbes-epices-aromates",
    "title": "Herbes, épices et aromates",
    "emoji": "🌿",
    "description": "Construire le parfum d’un plat",
    "color": "#16a34a",
    "lessonIds": [
      "ail-oignon-echalote",
      "herbes-fraiches-seches",
      "epices-torrefier-infuser",
      "finitions-aromatiques"
    ]
  },
  {
    "id": "sauces-froides-emulsions",
    "title": "Sauces froides et émulsions simples",
    "emoji": "🫙",
    "description": "Vinaigrette, mayonnaise, pesto, sauces crues",
    "color": "#16a34a",
    "lessonIds": [
      "comprendre-emulsion",
      "vinaigrette-equilibree",
      "mayonnaise-maison",
      "sauces-crues-herbes"
    ]
  },
  {
    "id": "sauces-chaudes-base",
    "title": "Sauces chaudes de base",
    "emoji": "🥣",
    "description": "Lier, réduire, napper, corriger",
    "color": "#f97316",
    "lessonIds": [
      "comprendre-liaison-sauce",
      "roux-bechamel-veloute",
      "sauce-tomate-reduite",
      "sauce-creme-nappante"
    ]
  },
  {
    "id": "jus-deglacage-sauces-cuisson",
    "title": "Jus, déglaçage et sauces de cuisson",
    "emoji": "🍖",
    "description": "Utiliser les sucs pour construire une sauce",
    "color": "#92400e",
    "lessonIds": [
      "comprendre-sucs-cuisson",
      "deglacer-correctement",
      "reduire-jus-court",
      "monter-sauce-beurre"
    ]
  },
  {
    "id": "fonds-bouillons-fumets",
    "title": "Fonds, bouillons et fumets",
    "emoji": "🍲",
    "description": "Créer des bases de goût propres et profondes",
    "color": "#92400e",
    "lessonIds": [
      "role-fond-bouillon",
      "bouillon-legumes-volaille",
      "fond-brun-simple",
      "fumet-poisson-court"
    ]
  },
  {
    "id": "sauces-emulsionnees-chaudes",
    "title": "Sauces émulsionnées chaudes",
    "emoji": "🧈",
    "description": "Beurre blanc, hollandaise, béarnaise",
    "color": "#facc15",
    "lessonIds": [
      "principe-emulsion-chaude",
      "beurre-blanc",
      "hollandaise-sabayon",
      "bearnaise-rattrapage"
    ]
  },
  {
    "id": "oeufs",
    "title": "Œufs",
    "emoji": "🥚",
    "description": "Coagulation, cuisson juste, liaison",
    "color": "#facc15",
    "lessonIds": [
      "coagulation-oeufs",
      "oeufs-coque-mollet-dur",
      "omelette-brouilles",
      "oeuf-poche",
      "oeufs-liant-cremes-appareils"
    ]
  },
  {
    "id": "legumes",
    "title": "Légumes",
    "emoji": "🥦",
    "description": "Choisir, préparer, cuire et assaisonner les légumes",
    "color": "#16a34a",
    "lessonIds": [
      "comprendre-legumes",
      "preparer-legumes",
      "cuire-legumes-selon-texture",
      "legumes-verts-couleur-croquant",
      "corriger-legumes-rates"
    ]
  },
  {
    "id": "feculents-riz-pates-pommes-terre",
    "title": "Féculents, riz, pâtes et pommes de terre",
    "emoji": "🍚",
    "description": "Maîtriser amidon, absorption, cuisson et texture",
    "color": "#f59e0b",
    "lessonIds": [
      "comprendre-amidon",
      "cuire-pates-justes",
      "cuire-riz-absorption-pilaf",
      "pommes-terre-cuissons",
      "purees-ecrases-gratins",
      "corriger-feculents-rates"
    ]
  },
  {
    "id": "viandes-rouges-porc",
    "title": "Viandes rouges et porc",
    "emoji": "🥩",
    "description": "Saisir, rôtir, mijoter, reposer et découper juste",
    "color": "#991b1b",
    "lessonIds": [
      "comprendre-viande",
      "cuire-steak-cote-piece-rouge",
      "porc-cuisson-juste",
      "morceaux-a-mijoter",
      "repos-decoupe-viande"
    ]
  },
  {
    "id": "volailles",
    "title": "Volailles",
    "emoji": "🍗",
    "description": "Cuire blanc, cuisse, volaille entière et jus",
    "color": "#d97706",
    "lessonIds": [
      "comprendre-volaille",
      "cuire-blanc-volaille",
      "cuire-cuisses-volaille",
      "rotir-volaille-entiere",
      "jus-volaille-et-securite"
    ]
  },
  {
    "id": "poissons-fruits-mer",
    "title": "Poissons et fruits de mer",
    "emoji": "🐟",
    "description": "Cuissons courtes, chair fragile, nacré et coquillages",
    "color": "#0f766e",
    "lessonIds": [
      "comprendre-poisson",
      "poisson-poele-peau",
      "poisson-vapeur-poche-papillote",
      "fruits-mer-coquillages",
      "corriger-poisson-trop-cuit"
    ]
  },
  {
    "id": "pates-salees-bases-boulangeres",
    "title": "Pâtes salées et bases boulangères simples",
    "emoji": "🥖",
    "description": "Pâte brisée, pâte à pizza, pain simple, repos et cuisson",
    "color": "#b45309",
    "lessonIds": [
      "comprendre-pates-farine-eau-gras",
      "pate-brisee-salee",
      "pate-levee-pizza-focaccia",
      "pain-simple-maison",
      "cuisson-pates-salees"
    ]
  },
  {
    "id": "patisserie-base",
    "title": "Pâtisserie de base",
    "emoji": "🍰",
    "description": "Peser, mélanger, foisonner, cuire et comprendre les textures",
    "color": "#db2777",
    "lessonIds": [
      "comprendre-patisserie-precision",
      "cremes-base-patisserie",
      "pates-gateaux-cakes",
      "pates-tartes-sucrees",
      "meringues-cremes-fouettees",
      "corriger-patisserie-ratee"
    ]
  },
  {
    "id": "patisserie-sensible-meringue-caramel-chocolat",
    "title": "Pâtisserie sensible : meringue, caramel, chocolat",
    "emoji": "🍫",
    "description": "Température, précision, cristallisation, texture et timing",
    "color": "#7c2d12",
    "lessonIds": [
      "meringue-maitrisee",
      "caramel-sec-humide",
      "chocolat-fondre-sans-bruler",
      "ganache-et-textures-chocolat",
      "corriger-patisserie-sensible"
    ]
  },
  {
    "id": "dressage-service",
    "title": "Dressage et service",
    "emoji": "🍽️",
    "description": "Composer l’assiette, gérer le chaud, servir net et lisible",
    "color": "#334155",
    "lessonIds": [
      "comprendre-dressage",
      "dresser-assiette-equilibree",
      "textures-couleurs-volumes",
      "timing-service-chaud-froid",
      "sauces-finitions-service"
    ]
  },
  {
    "id": "correction-improvisation-creation",
    "title": "Correction, improvisation et création",
    "emoji": "🧠",
    "description": "Diagnostiquer, adapter, remplacer, créer sans recette",
    "color": "#4f46e5",
    "lessonIds": [
      "diagnostiquer-un-plat",
      "corriger-gout-texture-cuisson",
      "improviser-avec-ce-qu-on-a",
      "creer-une-assiette-equilibree",
      "construire-sa-propre-recette"
    ]
  }
];

var LESSONS = [
  {
    "id": "lire-recette-cuisinier",
    "moduleId": "organisation",
    "title": "Lire une recette comme un cuisinier",
    "subtitle": "Repérer les pièges avant d’allumer le feu",
    "duration": 9,
    "objectives": [
      "Identifier les étapes critiques avant de commencer",
      "Anticiper les temps de repos, cuisson et refroidissement",
      "Transformer une recette en ordre d’action clair"
    ],
    "concepts": [
      {
        "title": "Une recette n’est pas une simple liste d’instructions",
        "body": "Un débutant lit souvent la recette au fur et à mesure, quand il est déjà en train de cuire. Un bon cuisinier la lit d’abord comme un plan de travail. Il repère les cuissons longues, les gestes rapides, les temps de repos et les moments où il ne faudra pas hésiter. Cette lecture évite de découvrir trop tard qu’un four devait être chaud, qu’une pâte devait reposer ou qu’une sauce devait être servie immédiatement.",
        "tip": "Si tu découvres une étape au moment de la faire, tu es déjà en retard."
      },
      {
        "title": "Repérer les étapes irréversibles",
        "body": "Certaines actions peuvent attendre : laver une salade, sortir une assiette, couper une carotte. D’autres sont plus sensibles : verser des œufs dans une poêle chaude, égoutter des pâtes, retourner un poisson fragile ou monter une mayonnaise. Ces moments doivent être préparés avant, car une hésitation de 30 secondes peut changer la texture du plat.",
        "tip": "Plus une étape est courte, plus elle doit être anticipée."
      },
      {
        "title": "Identifier les temps cachés",
        "body": "Le temps affiché dans une recette ne dit pas toujours tout. Il peut oublier le préchauffage, le lavage, l’épluchage, le repos, le refroidissement ou la vaisselle intermédiaire. En cuisine réelle, le temps dépend aussi du niveau de découpe, du matériel disponible et de l’espace sur le plan de travail. Un bon cuisinier ajoute toujours une marge quand il découvre une recette.",
        "tip": "Le temps de recette est une estimation, pas une promesse."
      },
      {
        "title": "Transformer la recette en ordre logique",
        "body": "L’ordre écrit n’est pas toujours le meilleur ordre de travail. Si des légumes doivent rôtir 30 minutes, ils passent avant une sauce minute. Si une viande doit reposer, ce repos devient le moment idéal pour finir la garniture. Penser en ordre logique permet de cuisiner plus calmement et de servir chaud.",
        "tip": "La vraie question : qu’est-ce qui doit être prêt en dernier ?"
      }
    ],
    "goFurther": {
      "title": "Recette vs fiche technique",
      "content": "Une recette raconte comment faire un plat. Une fiche technique organise la production : quantités, matériel, ordre des tâches, points de contrôle, temps et critères de réussite. Pour progresser, il faut apprendre à lire une recette comme une fiche technique simplifiée."
    },
    "quiz": [
      {
        "q": "Tu démarres une tarte à 19h et tu découvres au milieu de la recette que la pâte doit reposer 1h au froid. Quelle erreur as-tu faite ?",
        "options": [
          "Tu as choisi un moule trop petit",
          "Tu n’as pas identifié les temps cachés avant de commencer",
          "Tu as trop travaillé la farine",
          "Tu aurais dû mettre le four plus chaud"
        ],
        "answer": 1,
        "explanation": "Les temps de repos, refroidissement, marinade ou préchauffage doivent être repérés avant de commencer. Ce sont eux qui changent le vrai planning."
      },
      {
        "q": "Tu cuisines des pâtes avec une sauce minute. Les pâtes sont égouttées, mais la sauce n’est pas prête. Quel est le vrai problème ?",
        "options": [
          "Les pâtes ont été trop salées",
          "Le timing n’a pas été construit autour de l’élément le plus fragile",
          "La casserole était trop grande",
          "Il fallait mettre moins d’eau"
        ],
        "answer": 1,
        "explanation": "Les pâtes attendent mal : elles collent, refroidissent et absorbent la sauce. La sauce doit être prête avant ou terminée exactement au moment où les pâtes sortent de l’eau."
      },
      {
        "q": "Une recette indique \"préparation 15 min\", mais tu mets 35 min. Quelle conclusion est la plus juste ?",
        "options": [
          "La recette est forcément mauvaise",
          "Ton matériel, ton niveau de découpe et les temps cachés ont probablement rallongé la préparation",
          "Il faut toujours doubler les quantités pour gagner du temps",
          "Le temps de cuisson a été trop court"
        ],
        "answer": 1,
        "explanation": "Le temps annoncé suppose souvent une bonne organisation, des gestes maîtrisés et un poste prêt. Le vrai temps dépend beaucoup de la mise en place."
      },
      {
        "q": "Tu vois qu’une sauce doit être fouettée sans pause pendant 2 minutes. Que dois-tu préparer avant de commencer ?",
        "options": [
          "Uniquement la casserole",
          "Tous les ingrédients mesurés, le fouet, le bol ou l’assiette finale, et un plan de travail dégagé",
          "Seulement le sel et le poivre",
          "Rien, tu peux chercher les éléments pendant que tu fouettes"
        ],
        "answer": 1,
        "explanation": "Une étape continue ne laisse pas le temps de chercher un ingrédient ou un ustensile. Tout doit être prêt avant le premier geste."
      }
    ],
    "linkedRecipes": [
      "omelette-herbes-organisee",
      "pates-sauce-minute"
    ],
    "prerequisites": []
  },
  {
    "id": "poste-travail-efficace",
    "prerequisites": [
      "lire-recette-cuisinier"
    ],
    "moduleId": "organisation",
    "title": "Construire un poste de travail efficace",
    "subtitle": "Cuisiner plus proprement avec moins de stress",
    "duration": 8,
    "objectives": [
      "Organiser son espace pour limiter les gestes inutiles",
      "Séparer les zones propres, sales, crues et cuites",
      "Réduire les erreurs grâce à un poste lisible"
    ],
    "concepts": [
      {
        "title": "Un poste clair crée de meilleurs gestes",
        "body": "Le poste de travail n’est pas seulement une question de rangement. C’est ce qui permet d’enchaîner les gestes sans perdre le fil. Quand la planche est encombrée, le couteau disparaît sous les épluchures, les bols se mélangent et la cuisson n’est plus surveillée. Un poste clair libère de l’attention pour ce qui compte : la texture, la chaleur, l’assaisonnement.",
        "tip": "Un plan dégagé donne une tête dégagée."
      },
      {
        "title": "La logique des zones",
        "body": "Un bon poste sépare les fonctions : une zone pour découper, une zone pour les ingrédients prêts, une zone pour le sale, une zone pour la cuisson. Les aliments crus, surtout viande, poisson et œufs, ne doivent pas toucher ce qui est déjà prêt à manger. Cette séparation évite les contaminations, mais aussi les confusions pendant le service.",
        "tip": "Cru d’un côté, prêt à manger de l’autre."
      },
      {
        "title": "Le bol à déchets",
        "body": "Un bol à déchets paraît simple, mais il change tout. Il évite les allers-retours vers la poubelle, garde la planche propre et réduit le risque de poser un couteau dans des épluchures. Il permet aussi de voir si tu jettes trop de produit utile, comme des tiges d’herbes, du vert de poireau ou des parures utilisables en bouillon.",
        "tip": "Un bol à déchets vaut dix allers-retours."
      },
      {
        "title": "Nettoyer pendant les temps morts",
        "body": "La cuisine devient stressante quand toute la vaisselle s’accumule à la fin. Dès qu’une cuisson longue démarre ou qu’un plat repose, il faut utiliser ce temps pour nettoyer, ranger et préparer la suite. C’est ce qui permet d’arriver au dressage avec un poste calme, pas avec une pile de bols sales autour de l’assiette.",
        "tip": "Un temps mort est rarement mort : il sert à reprendre le contrôle."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les pros rangent autant",
      "content": "En cuisine professionnelle, l’ordre n’est pas une manie esthétique. Il sert à éviter les erreurs sous pression. Quand tout est toujours au même endroit, le cuisinier n’a pas besoin de réfléchir pour trouver son sel, sa pince, son torchon ou son fouet."
    },
    "quiz": [
      {
        "q": "Tu dois égoutter des pâtes dans 30 secondes, mais ton évier est rempli de vaisselle sale. Quel problème ton poste crée-t-il ?",
        "options": [
          "La recette manque de sel",
          "Tu as bloqué une zone nécessaire au moment critique",
          "Les pâtes ont été mises trop tôt dans l’eau",
          "La casserole est trop grande"
        ],
        "answer": 1,
        "explanation": "L’évier fait partie du poste. S’il est inutilisable au moment d’égoutter, une étape simple devient urgente et risquée."
      },
      {
        "q": "Tu coupes du poulet cru puis tu cisèles du persil sur la même planche sans la laver. Quel est le vrai risque ?",
        "options": [
          "Le persil va cuire plus vite",
          "Le poulet va perdre son jus",
          "Le persil peut être contaminé par les jus de volaille crue",
          "Le couteau va moins bien couper les herbes"
        ],
        "answer": 2,
        "explanation": "Les aliments prêts à manger ne doivent pas toucher une surface utilisée pour du cru. C’est une erreur d’hygiène classique."
      },
      {
        "q": "Pendant une cuisson de 20 minutes, quelle action est la plus intelligente ?",
        "options": [
          "Rester immobile devant la casserole",
          "Lancer une nouvelle recette sans réfléchir",
          "Nettoyer, ranger et préparer les éléments de finition",
          "Goûter toutes les 10 secondes"
        ],
        "answer": 2,
        "explanation": "Un temps de cuisson long est le bon moment pour remettre le poste en état et préparer le dressage ou l’assaisonnement final."
      },
      {
        "q": "Ton couteau est posé dans un tas d’épluchures. Pourquoi est-ce une mauvaise habitude ?",
        "options": [
          "Il risque de rouiller immédiatement",
          "La lame devient moins visible et augmente le risque de coupure",
          "Les légumes deviennent amers",
          "La découpe devient automatiquement irrégulière"
        ],
        "answer": 1,
        "explanation": "Un couteau doit rester visible, lame orientée de manière sûre. Caché sous des déchets, il devient dangereux."
      }
    ],
    "linkedRecipes": [
      "salade-composee-methode",
      "omelette-herbes-organisee"
    ]
  },
  {
    "id": "mise-en-place-pro",
    "prerequisites": [
      "poste-travail-efficace"
    ],
    "moduleId": "organisation",
    "title": "Faire une vraie mise en place",
    "subtitle": "Préparer avant de cuire, sans tout préparer trop tôt",
    "duration": 9,
    "objectives": [
      "Préparer les ingrédients dans l’ordre utile",
      "Distinguer ce qui peut attendre de ce qui doit rester frais",
      "Cuisiner sans chercher un ingrédient pendant une étape chaude"
    ],
    "concepts": [
      {
        "title": "La mise en place n’est pas tout couper d’un coup",
        "body": "La mise en place consiste à préparer ce qui doit l’être avant l’action, mais pas à abîmer les ingrédients fragiles trop tôt. Une carotte coupée peut attendre. Une herbe fraîche ciselée, un avocat ouvert ou une pomme coupée perdent vite en qualité. La bonne mise en place prépare le travail sans sacrifier la fraîcheur.",
        "tip": "Tout prévoir ne veut pas dire tout couper trop tôt."
      },
      {
        "title": "Préparer par familles d’action",
        "body": "Les ingrédients qui entrent ensemble dans la recette peuvent être regroupés. Oignon, ail et carotte pour une base aromatique. Citron, herbes et huile pour une finition. Farine, beurre et lait pour une sauce. Cette organisation évite d’avoir vingt petits bols sans logique et rend l’ordre de cuisson plus évident.",
        "tip": "Regroupe ce qui part ensemble dans la casserole."
      },
      {
        "title": "Mesurer ce qui ne pardonne pas",
        "body": "Certaines quantités peuvent être ajustées à la fin, comme le poivre, les herbes ou un filet de citron. D’autres doivent être prêtes et justes : farine dans une sauce, levure en pâtisserie, liquide pour déglacer, huile pour une mayonnaise. Plus une étape est rapide ou technique, plus la mesure doit être faite avant.",
        "tip": "Ce qui doit être versé vite doit être mesuré avant."
      },
      {
        "title": "La mise en place réduit la charge mentale",
        "body": "Quand les ingrédients sont prêts et placés dans l’ordre, le cerveau peut se concentrer sur les signes de cuisson : bruit, couleur, odeur, texture. Sans mise en place, l’attention part dans la recherche du sel, du fouet ou du citron. C’est là que les sauces brûlent, que les œufs surcuisent et que les aliments accrochent.",
        "tip": "Moins tu cherches, plus tu cuisines."
      }
    ],
    "goFurther": {
      "title": "La mise en place évolue avec le niveau",
      "content": "Au début, il vaut mieux tout préparer très en avance. Avec l’expérience, on apprend à préparer certaines choses pendant les temps morts. Mais cette souplesse vient seulement quand les gestes et le timing sont déjà maîtrisés."
    },
    "quiz": [
      {
        "q": "Tu vas faire une mayonnaise. Quelle mise en place est la plus sûre ?",
        "options": [
          "Sortir l’huile après avoir commencé à fouetter",
          "Mesurer l’huile, préparer le jaune, la moutarde, le sel et le bol avant de commencer",
          "Casser l’œuf directement dans la bouteille d’huile",
          "Préparer seulement le fouet, le reste peut attendre"
        ],
        "answer": 1,
        "explanation": "Une émulsion demande un geste continu. Les ingrédients doivent être prêts avant le début, sinon l’huile risque d’être ajoutée trop vite ou trop tard."
      },
      {
        "q": "Tu prépares une salade avec avocat, herbes fraîches et carottes. Que peux-tu préparer le plus tôt ?",
        "options": [
          "L’avocat coupé",
          "Les herbes ciselées très finement",
          "Les carottes lavées et taillées",
          "Le jus de citron déjà mélangé à la salade"
        ],
        "answer": 2,
        "explanation": "Les carottes supportent mieux l’attente. L’avocat s’oxyde, les herbes perdent leur fraîcheur et la salade assaisonnée retombe vite."
      },
      {
        "q": "Tu as préparé vingt petits bols, mais tu ne sais plus dans quel ordre les utiliser. Qu’est-ce qui n’a pas fonctionné ?",
        "options": [
          "Tu as trop bien préparé la recette",
          "Tu as préparé les ingrédients sans logique d’utilisation",
          "Tu as coupé trop régulièrement",
          "Tu as utilisé trop peu de vaisselle"
        ],
        "answer": 1,
        "explanation": "Une bonne mise en place n’est pas seulement quantitative. Elle doit suivre l’ordre réel des gestes et regrouper les éléments qui s’utilisent ensemble."
      },
      {
        "q": "Pendant que tes oignons colorent trop vite, tu cherches encore le bouillon pour déglacer. Quelle erreur est la plus probable ?",
        "options": [
          "Le bouillon était trop froid",
          "Le liquide de déglaçage n’était pas prêt avant l’étape chaude",
          "Les oignons ont été coupés trop finement uniquement",
          "La casserole était trop haute"
        ],
        "answer": 1,
        "explanation": "Un déglaçage arrive souvent à un moment précis. Le liquide doit être mesuré et proche de la zone de cuisson avant que les sucs brûlent."
      }
    ],
    "linkedRecipes": [
      "pates-sauce-minute",
      "salade-composee-methode"
    ]
  },
  {
    "id": "timing-plat-simple",
    "prerequisites": [
      "mise-en-place-pro"
    ],
    "moduleId": "organisation",
    "title": "Gérer le timing d’un plat simple",
    "subtitle": "Servir chaud, net et sans précipitation",
    "duration": 10,
    "objectives": [
      "Classer les tâches selon leur durée et leur fragilité",
      "Synchroniser garniture, sauce et élément principal",
      "Utiliser les temps morts pour préparer la finition"
    ],
    "concepts": [
      {
        "title": "Le timing commence par l’élément le plus long",
        "body": "Un plat se construit autour de ce qui prend le plus de temps : pommes de terre, riz, légumes rôtis, viande au four, légumineuses. Les éléments rapides doivent venir ensuite. Si tu commences par une sauce minute avant un riz de 18 minutes, la sauce attendra, réduira ou tranchera avant que le plat soit prêt.",
        "tip": "Ce qui prend le plus longtemps démarre en premier."
      },
      {
        "title": "Les éléments fragiles se font au dernier moment",
        "body": "Tout ne supporte pas l’attente. Un poisson poêlé, une omelette, des herbes fraîches, un risotto ou une sauce montée au beurre doivent être proches du service. Plus un élément est fragile, plus il doit être planifié vers la fin.",
        "tip": "Fragile = dernier moment."
      },
      {
        "title": "Le repos peut devenir un outil",
        "body": "Le repos d’une viande n’est pas un temps perdu. C’est le moment idéal pour finir une sauce, réchauffer une garniture ou dresser les assiettes. Un bon timing utilise ces pauses naturelles pour avancer sans stresser.",
        "tip": "Le repos d’un élément sert à finir les autres."
      },
      {
        "title": "Le dressage fait partie du timing",
        "body": "Un plat n’est pas terminé quand la cuisson est finie. Il faut encore goûter, ajuster, dresser, saucer et servir. Si l’assiette, la cuillère ou les herbes de finition ne sont pas prêtes, le plat chaud attendra trop longtemps. Le dressage doit être prévu comme une étape de cuisson.",
        "tip": "Un plat chaud attend rarement bien."
      }
    ],
    "goFurther": {
      "title": "Penser en heure de service",
      "content": "Pour progresser, pars de l’heure à laquelle tu veux servir, puis remonte le temps : dressage, cuisson minute, repos, cuisson longue, préparation. C’est la logique du rétroplanning."
    },
    "quiz": [
      {
        "q": "Tu prépares riz, poisson poêlé et sauce citron. Quel élément dois-tu probablement lancer en premier ?",
        "options": [
          "Le poisson, car il est le plus fragile",
          "Le riz, car il prend le plus de temps et supporte mieux l’attente courte",
          "La sauce citron, car elle doit réduire pendant 30 minutes",
          "Les herbes de finition"
        ],
        "answer": 1,
        "explanation": "Le riz a un temps plus long et peut attendre brièvement couvert. Le poisson, lui, doit être cuit proche du service."
      },
      {
        "q": "Ton steak repose 5 minutes. Quelle action est la plus utile pendant ce temps ?",
        "options": [
          "Le couper immédiatement pour vérifier la cuisson",
          "Faire ou finir le jus dans la poêle",
          "Le remettre à feu fort pour garder la croûte chaude",
          "L’assaisonner fortement avec du sel fin"
        ],
        "answer": 1,
        "explanation": "Le repos laisse le temps de déglacer la poêle et de construire une sauce courte sans sacrifier les jus de la viande."
      },
      {
        "q": "Ton risotto est prêt, mais tes invités ne sont pas encore à table. Quel était le problème de timing ?",
        "options": [
          "Le risotto est un plat qui supporte très bien l’attente",
          "Tu as fini trop tôt un élément qui doit être servi immédiatement",
          "Tu as mis trop peu de parmesan",
          "Tu aurais dû le cuire à gros bouillons"
        ],
        "answer": 1,
        "explanation": "Un risotto continue d’absorber le liquide et perd son crémeux. Il doit être terminé au plus près du service."
      },
      {
        "q": "Tu as tout cuit correctement, mais le plat arrive tiède car tu as cherché les assiettes et les herbes à la fin. Que faut-il corriger la prochaine fois ?",
        "options": [
          "Prévoir le dressage comme une étape à part entière",
          "Cuire tous les aliments plus longtemps",
          "Saler uniquement après service",
          "Ne pas utiliser d’herbes"
        ],
        "answer": 0,
        "explanation": "Le dressage prend du temps. Les assiettes, ustensiles et finitions doivent être prêts avant les dernières cuissons."
      }
    ],
    "linkedRecipes": [
      "pates-sauce-minute",
      "omelette-herbes-organisee"
    ]
  },
  {
    "id": "choisir-bon-ustensile",
    "moduleId": "materiel-feu",
    "title": "Choisir le bon ustensile",
    "subtitle": "Utiliser l’outil qui sert vraiment le geste",
    "duration": 8,
    "objectives": [
      "Associer chaque geste à l’ustensile adapté",
      "Éviter les erreurs causées par un mauvais contenant",
      "Préparer seulement le matériel utile à la recette"
    ],
    "concepts": [
      {
        "title": "Le matériel ne fait pas le cuisinier, mais il limite les erreurs",
        "body": "Un bon ustensile ne remplace jamais la technique. Mais un mauvais ustensile force à compenser : une poêle trop petite crée de la vapeur, une casserole trop large fait réduire trop vite, un couteau émoussé oblige à forcer. Choisir le bon outil, c’est rendre le bon geste plus facile.",
        "tip": "Le bon outil évite beaucoup de mauvais gestes."
      },
      {
        "title": "La taille compte autant que la matière",
        "body": "Une grande poêle permet à l’humidité de s’évaporer et aux aliments de colorer. Une petite casserole garde mieux un volume de liquide. Une plaque de four trop remplie transforme des légumes rôtis en légumes vapeur. Le contenant doit être choisi pour la quantité réelle, pas seulement pour la recette.",
        "tip": "Trop serré, ça bout ; trop large, ça sèche."
      },
      {
        "title": "Le minimum efficace",
        "body": "Sortir trop de matériel encombre le poste et ralentit le travail. Pour une recette simple, une planche, un couteau, un bol, une poêle ou une casserole, une spatule et une assiette suffisent souvent. L’objectif n’est pas d’avoir beaucoup d’outils, mais d’avoir les bons à portée de main.",
        "tip": "Un poste efficace n’est pas un tiroir ouvert."
      },
      {
        "title": "Les outils de contrôle",
        "body": "Certains ustensiles ne cuisent pas, mais améliorent la précision : balance, thermomètre, minuteur, chinois, maryse, pince. Ils aident à mesurer, vérifier, filtrer ou manipuler sans casser. Plus une technique est sensible, plus ces outils deviennent utiles.",
        "tip": "Ce qu’on mesure se maîtrise mieux."
      }
    ],
    "goFurther": {
      "title": "Le thermomètre change le niveau",
      "content": "Le thermomètre n’est pas un gadget. Il supprime une grande part d’incertitude sur les viandes, poissons, crèmes, sirops et fritures. Il apprend aussi à relier une température à une texture réelle."
    },
    "quiz": [
      {
        "q": "Tu veux faire dorer 600 g de champignons dans une petite poêle. Que risque-t-il de se passer ?",
        "options": [
          "Ils vont mieux colorer car ils sont serrés",
          "Ils vont rendre de l’eau et cuire à la vapeur au lieu de dorer",
          "Ils vont cuire moins vite mais devenir plus croustillants",
          "La taille de la poêle ne change rien"
        ],
        "answer": 1,
        "explanation": "Une poêle trop petite concentre l’humidité. Les champignons ne peuvent pas évaporer assez vite et deviennent mous."
      },
      {
        "q": "Tu fais une petite sauce avec 10 cl de liquide dans une très grande casserole. Quel est le risque principal ?",
        "options": [
          "La sauce peut réduire trop vite et devenir trop salée",
          "La sauce ne chauffera jamais",
          "La casserole empêchera l’assaisonnement",
          "Le liquide deviendra automatiquement plus acide"
        ],
        "answer": 0,
        "explanation": "Une grande surface accélère l’évaporation. Sur une petite quantité, la sauce peut réduire trop vite et concentrer sel et acidité."
      },
      {
        "q": "Tu dois retourner un filet de poisson fragile. Quel outil est le plus adapté ?",
        "options": [
          "Une fourchette qui pique la chair",
          "Une pince ou une spatule large selon la forme du poisson",
          "Un fouet",
          "Un couteau à pain"
        ],
        "answer": 1,
        "explanation": "Un poisson fragile doit être soutenu sans être percé. Une spatule large ou une pince bien utilisée limite la casse."
      },
      {
        "q": "Pourquoi un couteau émoussé est-il dangereux ?",
        "options": [
          "Il coupe trop vite",
          "Il oblige à forcer, ce qui augmente le risque de dérapage",
          "Il rend les aliments plus humides",
          "Il chauffe les légumes"
        ],
        "answer": 1,
        "explanation": "Quand la lame ne coupe pas, on compense avec de la force. C’est là que le couteau dévie et devient dangereux."
      }
    ],
    "linkedRecipes": [
      "legumes-sautes-maitrises",
      "soupe-legumes-methode"
    ],
    "prerequisites": [
      "timing-plat-simple"
    ]
  },
  {
    "id": "poele-casserole-sauteuse",
    "prerequisites": [
      "choisir-bon-ustensile"
    ],
    "moduleId": "materiel-feu",
    "title": "Poêle, casserole, sauteuse",
    "subtitle": "Choisir le bon contenant selon la cuisson",
    "duration": 8,
    "objectives": [
      "Différencier les usages de la poêle, de la casserole et de la sauteuse",
      "Comprendre l’effet de la surface sur l’évaporation",
      "Adapter le contenant à la quantité et au résultat voulu"
    ],
    "concepts": [
      {
        "title": "La poêle colore",
        "body": "La poêle est large et peu haute. Elle favorise le contact direct avec la chaleur et l’évaporation rapide de l’humidité. Elle est donc adaptée pour saisir, sauter, colorer ou faire réduire une petite quantité de liquide. Si tu veux une croûte ou une coloration, la poêle est souvent le bon choix.",
        "tip": "Pour colorer, il faut de la surface."
      },
      {
        "title": "La casserole cuit dans le liquide",
        "body": "La casserole est plus haute et garde mieux les liquides. Elle convient aux soupes, bouillons, sauces, pâtes, pommes de terre ou cuissons à l’eau. Sa forme limite les projections et permet de garder un liquide suffisamment profond.",
        "tip": "Pour cuire dans l’eau, il faut de la hauteur."
      },
      {
        "title": "La sauteuse fait le lien",
        "body": "La sauteuse a une grande surface et des bords plus hauts. Elle permet de colorer puis d’ajouter un liquide sans changer de contenant. Elle est très utile pour une poêlée, un plat mijoté court, des légumes glacés ou une sauce avec garniture.",
        "tip": "La sauteuse sert quand la recette change de phase."
      },
      {
        "title": "Surface, évaporation, concentration",
        "body": "Plus la surface exposée est grande, plus l’eau s’évapore vite. C’est utile pour concentrer une sauce ou sécher une poêlée. Mais c’est risqué pour une petite quantité de liquide, qui peut réduire trop vite et devenir trop salée.",
        "tip": "Grande surface = évaporation rapide."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les bords changent la cuisson",
      "content": "Des bords bas laissent sortir l’humidité et favorisent la coloration. Des bords hauts retiennent davantage la vapeur et les liquides. C’est pour cela qu’une poêle et une casserole ne donnent pas le même résultat avec les mêmes ingrédients."
    },
    "quiz": [
      {
        "q": "Tu veux saisir des courgettes sans qu’elles rendent trop d’eau. Quel choix est le plus logique ?",
        "options": [
          "Une petite casserole couverte",
          "Une grande poêle bien chaude",
          "Un bol froid",
          "Une casserole très haute remplie d’eau"
        ],
        "answer": 1,
        "explanation": "La grande poêle favorise l’évaporation et la coloration. Une casserole couverte retiendrait l’humidité."
      },
      {
        "q": "Tu dois cuire des pommes de terre dans l’eau. Pourquoi une casserole est-elle plus adaptée qu’une poêle ?",
        "options": [
          "Elle garde assez de profondeur pour immerger les pommes de terre",
          "Elle colore mieux les pommes de terre",
          "Elle empêche l’eau de chauffer",
          "Elle supprime le besoin de sel"
        ],
        "answer": 0,
        "explanation": "La casserole permet une cuisson régulière dans un volume de liquide suffisant."
      },
      {
        "q": "Tu veux colorer des morceaux de poulet puis ajouter une sauce crème. Quel contenant est le plus pratique ?",
        "options": [
          "Une sauteuse",
          "Une passoire",
          "Une plaque froide",
          "Un saladier"
        ],
        "answer": 0,
        "explanation": "La sauteuse permet de colorer avec assez de surface, puis de contenir la sauce grâce à ses bords plus hauts."
      },
      {
        "q": "Ta sauce réduit trop vite et devient trop salée. Quel choix de matériel a pu aggraver le problème ?",
        "options": [
          "Une casserole trop étroite",
          "Une grande surface de cuisson pour une petite quantité",
          "Une cuillère en bois",
          "Un bol à déchets"
        ],
        "answer": 1,
        "explanation": "Une grande surface accélère l’évaporation. Si la quantité est faible, la concentration devient vite excessive."
      }
    ],
    "linkedRecipes": [
      "legumes-sautes-maitrises",
      "poulet-creme-moutarde-simple"
    ]
  },
  {
    "id": "maitriser-intensite-feu",
    "prerequisites": [
      "poele-casserole-sauteuse"
    ],
    "moduleId": "materiel-feu",
    "title": "Maîtriser l’intensité du feu",
    "subtitle": "Doux, moyen, fort : choisir au bon moment",
    "duration": 10,
    "objectives": [
      "Comprendre le rôle du feu doux, moyen et fort",
      "Ajuster la chaleur selon le bruit, la couleur et l’humidité",
      "Corriger une cuisson trop faible ou trop agressive"
    ],
    "concepts": [
      {
        "title": "Le feu doux donne du contrôle",
        "body": "Le feu doux sert à cuire sans brutaliser : œufs, sauces, beurre, poisson fragile, oignons à faire suer. Il laisse le temps aux textures de se former sans brûler la surface. Il est lent, mais précis.",
        "tip": "Doux = contrôle, pas lenteur inutile."
      },
      {
        "title": "Le feu moyen construit la cuisson",
        "body": "Le feu moyen est souvent la zone la plus utile en cuisine domestique. Il permet de cuire régulièrement sans brûler trop vite. On l’utilise pour des légumes qui doivent s’attendrir, une viande déjà saisie qui doit finir à cœur, ou une sauce qui doit réduire sans attacher.",
        "tip": "Moyen = cuisson régulière."
      },
      {
        "title": "Le feu fort sert à colorer ou évaporer",
        "body": "Le feu fort est utile pour saisir, faire dorer, évaporer vite ou lancer une ébullition. Mais il laisse peu de marge : beurre qui brûle, sucs qui noircissent, ail amer, aliment coloré dehors mais cru dedans. Le feu fort doit souvent être temporaire.",
        "tip": "Fort = action rapide, attention rapide."
      },
      {
        "title": "Le feu se corrige en continu",
        "body": "Le réglage du feu n’est pas une décision prise une fois pour toute. Si le grésillement disparaît, il faut parfois remonter le feu ou retirer une partie des aliments. Si l’huile fume fortement ou que les sucs noircissent, il faut baisser ou retirer la poêle quelques secondes. Cuisiner, c’est ajuster.",
        "tip": "Le bon feu se lit, il ne se devine pas."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les plaques réagissent différemment",
      "content": "Le gaz réagit vite, l’induction très vite, certaines plaques électriques avec retard. Il faut apprendre l’inertie de son matériel. Sur une plaque lente, baisser le feu trop tard peut laisser la chaleur continuer longtemps."
    },
    "quiz": [
      {
        "q": "Ton ail haché brunit en quelques secondes et sent amer. Quelle correction est la plus logique ?",
        "options": [
          "Ajouter plus d’ail",
          "Baisser le feu ou ajouter l’ail plus tard dans la cuisson",
          "Couvrir la poêle pour concentrer la chaleur",
          "Saler plus fort"
        ],
        "answer": 1,
        "explanation": "L’ail brûle vite à feu fort. Il doit souvent être ajouté après les ingrédients plus longs ou cuit à chaleur modérée."
      },
      {
        "q": "Tu saisis une viande, mais aucun grésillement net ne se produit. Que comprends-tu ?",
        "options": [
          "La poêle est probablement trop froide ou trop chargée",
          "La viande est déjà trop cuite",
          "Il faut couvrir immédiatement",
          "Le sel empêche toujours le bruit"
        ],
        "answer": 0,
        "explanation": "Le grésillement signale l’évaporation de l’eau au contact de la chaleur. Sans bruit, la saisie est souvent insuffisante."
      },
      {
        "q": "Tu veux faire fondre des oignons sans les colorer. Quel feu choisis-tu ?",
        "options": [
          "Feu très fort sans matière grasse",
          "Feu doux à moyen avec un peu de matière grasse",
          "Feu fort puis couvercle fermé pendant 30 minutes sans remuer",
          "Four en grill"
        ],
        "answer": 1,
        "explanation": "Faire suer demande une chaleur douce à moyenne. L’objectif est d’attendrir et de libérer les sucres, pas de brûler."
      },
      {
        "q": "Une sauce réduit correctement puis commence à accrocher au fond. Que fais-tu ?",
        "options": [
          "Tu augmentes le feu pour aller plus vite",
          "Tu baisses le feu et tu remues en raclant le fond",
          "Tu ajoutes du sel pour empêcher l’accroche",
          "Tu arrêtes de remuer"
        ],
        "answer": 1,
        "explanation": "Quand une sauce se concentre, elle accroche plus facilement. Il faut réduire l’intensité et garder le fond propre."
      }
    ],
    "linkedRecipes": [
      "legumes-sautes-maitrises",
      "omelette-herbes-organisee"
    ]
  },
  {
    "id": "securite-cuisine",
    "prerequisites": [
      "maitriser-intensite-feu"
    ],
    "moduleId": "materiel-feu",
    "title": "Travailler en sécurité",
    "subtitle": "Éviter coupures, brûlures et gestes à risque",
    "duration": 8,
    "objectives": [
      "Identifier les situations dangereuses avant l’accident",
      "Manipuler couteaux, huile chaude et four avec méthode",
      "Adopter des réflexes simples de sécurité au quotidien"
    ],
    "concepts": [
      {
        "title": "La sécurité commence avant le geste",
        "body": "Une planche qui glisse, un manche tourné vers le passage ou un couteau caché sous des épluchures sont des accidents en préparation. La plupart des blessures viennent d’un poste mal organisé plus que d’une technique difficile. La sécurité consiste à rendre les dangers visibles et stables.",
        "tip": "Ce qu’on ne voit pas peut couper ou brûler."
      },
      {
        "title": "L’huile chaude n’est pas de l’eau chaude",
        "body": "L’huile chaude colle à la peau et brûle fortement. Si un aliment humide entre dans l’huile, l’eau se transforme brutalement en vapeur et provoque des projections. Sécher les aliments avant la cuisson n’améliore pas seulement la coloration : cela protège aussi les mains.",
        "tip": "Humidité + huile chaude = projections."
      },
      {
        "title": "Torchons, manches et four",
        "body": "Un torchon humide conduit rapidement la chaleur. Il protège mal d’un plat chaud et peut brûler la main. Les manches de poêle doivent rester orientés vers l’intérieur, sans dépasser dans le passage ni au-dessus d’un autre feu. Les plaques et plats sortis du four doivent rester signalés comme chauds.",
        "tip": "Torchon humide, main brûlée."
      },
      {
        "title": "Ne jamais rattraper à tout prix",
        "body": "Un couteau qui tombe, une casserole qui glisse ou un aliment qui part dans l’huile ne se rattrapent pas à main nue. Le réflexe de sauver l’objet crée souvent la blessure. Il vaut mieux perdre un ingrédient qu’une main disponible pour cuisiner.",
        "tip": "Ce qui tombe tombe. Tes doigts passent avant."
      }
    ],
    "goFurther": {
      "title": "Sécurité et vitesse",
      "content": "La vitesse vient de gestes répétés et stables, pas de précipitation. Un cuisinier rapide n’est pas quelqu’un qui s’agite : c’est quelqu’un qui fait moins de gestes inutiles."
    },
    "quiz": [
      {
        "q": "Tu viens de sortir un plat du four et tu le poses sur le plan de travail. Quel réflexe évite le plus d’accidents ?",
        "options": [
          "Le laisser sans indication",
          "Laisser un torchon sec ou une manique visible sur le plat pour signaler qu’il est chaud",
          "Le déplacer toutes les 30 secondes",
          "Le mettre sous l’eau froide immédiatement"
        ],
        "answer": 1,
        "explanation": "Un plat sorti du four reste dangereux plusieurs minutes. Le signal visuel évite de saisir la poignée chaude par automatisme."
      },
      {
        "q": "Tu mets des légumes encore mouillés dans une poêle avec de l’huile chaude. Que risque-t-il de se passer ?",
        "options": [
          "Ils vont mieux dorer",
          "L’eau va provoquer des projections d’huile",
          "Ils vont cuire sans chaleur",
          "L’huile va devenir froide définitivement"
        ],
        "answer": 1,
        "explanation": "L’eau se transforme en vapeur au contact de l’huile chaude. Cette vapeur projette l’huile hors de la poêle."
      },
      {
        "q": "Ton couteau tombe du plan de travail. Quel est le bon réflexe ?",
        "options": [
          "Le rattraper par réflexe",
          "Mettre le pied dessous",
          "Reculer les mains et le laisser tomber",
          "Le pousser avec l’autre main"
        ],
        "answer": 2,
        "explanation": "Un couteau qui tombe ne se rattrape pas. Le risque de coupure est supérieur à la valeur de l’objet."
      },
      {
        "q": "Tu tiens une plaque chaude avec un torchon légèrement humide. Pourquoi est-ce risqué ?",
        "options": [
          "L’humidité conduit vite la chaleur vers la main",
          "Le torchon devient plus isolant",
          "La plaque refroidit trop vite",
          "Le four perd sa chaleur"
        ],
        "answer": 0,
        "explanation": "L’eau transmet la chaleur beaucoup plus vite que l’air sec. Un torchon humide peut brûler presque immédiatement."
      }
    ],
    "linkedRecipes": [
      "legumes-sautes-maitrises",
      "poulet-creme-moutarde-simple"
    ]
  },
  {
    "id": "prise-couteau-griffe",
    "moduleId": "couteau-decoupes",
    "title": "Tenir un couteau et protéger ses doigts",
    "subtitle": "Prise chef, main guide et stabilité",
    "duration": 9,
    "objectives": [
      "Tenir le couteau avec une prise stable et précise",
      "Utiliser la griffe pour protéger les doigts",
      "Stabiliser les aliments avant de couper"
    ],
    "concepts": [
      {
        "title": "La prise chef",
        "body": "La prise chef consiste à pincer la base de la lame entre le pouce et l’index, puis à enrouler les autres doigts autour du manche. Cette prise paraît moins naturelle au début, mais elle donne plus de contrôle sur l’angle et la trajectoire. Tenir le couteau tout au bout du manche donne souvent moins de précision et oblige à forcer.",
        "tip": "Plus tu contrôles la lame, moins tu as besoin de force."
      },
      {
        "title": "La main guide en griffe",
        "body": "La main qui tient l’aliment doit former une griffe : doigts repliés, jointures vers l’avant. Le plat de la lame glisse contre les jointures, tandis que les bouts des doigts restent protégés. Cette position permet de couper près de la main sans exposer les ongles à la lame.",
        "tip": "Si tu vois tes ongles, replie davantage."
      },
      {
        "title": "Créer une base stable",
        "body": "Un aliment rond roule sous la lame. Avant de couper une carotte, un oignon ou une pomme de terre, il faut souvent créer une face plate. Cette base transforme un aliment instable en objet contrôlable. Beaucoup de coupures viennent d’un aliment qui bouge, pas d’un couteau trop rapide.",
        "tip": "Rond qui roule, coupe dangereuse."
      },
      {
        "title": "Le couteau doit glisser, pas écraser",
        "body": "Un bon geste utilise le tranchant et un mouvement fluide, pas une pression verticale brutale. Si tu dois appuyer fort, c’est souvent que la lame est émoussée, que l’aliment est mal stabilisé ou que le geste n’est pas adapté. Forcer rend la coupe moins précise et plus risquée.",
        "tip": "Un couteau qui force est un couteau qui dévie."
      }
    ],
    "goFurther": {
      "title": "Vitesse et régularité",
      "content": "La vitesse n’est jamais l’objectif au début. Elle apparaît quand la prise, la griffe et la stabilité deviennent automatiques. Chercher à aller vite trop tôt crée de mauvais gestes."
    },
    "quiz": [
      {
        "q": "Tu coupes une carotte entière qui roule sur la planche. Quelle correction doit venir avant de continuer ?",
        "options": [
          "Appuyer plus fort avec le couteau",
          "Créer une face plate pour stabiliser la carotte",
          "Mouiller la planche",
          "Utiliser un couteau plus petit mais toujours sans stabiliser"
        ],
        "answer": 1,
        "explanation": "Un aliment stable se coupe mieux et plus sûrement. Créer une face plate supprime le roulement."
      },
      {
        "q": "Tu vois tes ongles pointer vers la lame pendant que tu coupes. Quel est le problème ?",
        "options": [
          "La main guide n’est pas assez repliée en griffe",
          "Le couteau est trop propre",
          "La planche est trop grande",
          "Les morceaux sont trop réguliers"
        ],
        "answer": 0,
        "explanation": "Les bouts des doigts doivent être protégés derrière les jointures. Si les ongles sont exposés, la lame peut les atteindre."
      },
      {
        "q": "Tu dois forcer fortement pour couper une tomate. Quelle cause est la plus probable ?",
        "options": [
          "La tomate est trop mûre uniquement",
          "Le couteau manque de tranchant ou le geste écrase au lieu de trancher",
          "Il faut toujours couper les tomates avec une cuillère",
          "La planche absorbe le jus"
        ],
        "answer": 1,
        "explanation": "Une tomate demande une lame tranchante. Si tu forces, la lame risque de glisser sur la peau avant de l’ouvrir."
      },
      {
        "q": "Pourquoi la prise chef donne-t-elle plus de contrôle ?",
        "options": [
          "Parce qu’elle éloigne la main de la lame",
          "Parce que le pouce et l’index guident directement la base de la lame",
          "Parce qu’elle rend le couteau plus lourd",
          "Parce qu’elle empêche de couper finement"
        ],
        "answer": 1,
        "explanation": "La prise en pince rapproche le contrôle de la lame elle-même. Le mouvement devient plus précis."
      }
    ],
    "linkedRecipes": [
      "soupe-legumes-methode",
      "salade-composee-methode"
    ],
    "prerequisites": [
      "securite-cuisine"
    ]
  },
  {
    "id": "emincer-ciseler-hacher",
    "prerequisites": [
      "prise-couteau-griffe"
    ],
    "moduleId": "couteau-decoupes",
    "title": "Émincer, ciseler, hacher",
    "subtitle": "Choisir le bon geste selon l’ingrédient",
    "duration": 9,
    "objectives": [
      "Différencier émincer, ciseler et hacher",
      "Adapter la coupe au rôle de l’ingrédient",
      "Préserver texture, parfum et régularité"
    ],
    "concepts": [
      {
        "title": "Émincer : trancher finement",
        "body": "Émincer consiste à couper en tranches fines. C’est utile pour les oignons, poireaux, champignons, choux ou légumes qui doivent cuire assez vite. L’épaisseur change la texture : un oignon très fin fondra dans une sauce, un oignon plus épais restera perceptible.",
        "tip": "Émincer, c’est choisir l’épaisseur de présence."
      },
      {
        "title": "Ciseler : rendre le goût discret",
        "body": "Ciseler consiste à couper très finement, souvent une échalote, un oignon ou des herbes. Une échalote bien ciselée parfume une sauce sans créer de morceaux agressifs. Une herbe ciselée proprement reste fraîche ; écrasée, elle noircit et perd son parfum.",
        "tip": "Ciseler, c’est rendre le goût présent sans le rendre lourd."
      },
      {
        "title": "Hacher : fragmenter rapidement",
        "body": "Hacher réduit un ingrédient en petits fragments, parfois moins réguliers. C’est adapté à l’ail, aux herbes, aux noix ou à certaines garnitures. Mais il ne faut pas confondre hacher et massacrer : trop d’allers-retours sur des herbes les écrase et libère de l’humidité.",
        "tip": "Hacher vite, mais ne pas broyer."
      },
      {
        "title": "La coupe change l’intensité du goût",
        "body": "Plus un ingrédient est coupé fin, plus il expose de surface et plus son goût se diffuse vite. De l’ail haché devient puissant et brûle rapidement. Une gousse d’ail en chemise cuit lentement et donne un goût plus doux. La taille ne change pas seulement la cuisson : elle change aussi la perception aromatique.",
        "tip": "Petit morceau = goût plus rapide, parfois plus fort."
      }
    ],
    "goFurther": {
      "title": "Pourquoi l’ail brûle si vite",
      "content": "L’ail haché contient peu d’eau et beaucoup de composés aromatiques sensibles. Coupé très fin, il expose une grande surface à la chaleur. Il doit souvent être ajouté après l’oignon ou cuit à feu plus doux."
    },
    "quiz": [
      {
        "q": "Tu fais revenir de l’ail haché en même temps que de gros dés de carotte. Que risque-t-il de se passer ?",
        "options": [
          "L’ail va brûler avant que la carotte soit cuite",
          "La carotte va cuire plus vite que l’ail",
          "Les deux cuiront forcément au même rythme",
          "L’ail empêchera la carotte de colorer"
        ],
        "answer": 0,
        "explanation": "L’ail haché est très petit et sensible à la chaleur. Les gros dés de carotte demandent beaucoup plus de temps."
      },
      {
        "q": "Tu veux une échalote discrète dans une vinaigrette. Quelle coupe choisis-tu ?",
        "options": [
          "De gros quartiers",
          "Une échalote ciselée très finement",
          "Une échalote entière non pelée",
          "Des rondelles épaisses"
        ],
        "answer": 1,
        "explanation": "Le ciselage fin répartit l’échalote dans la sauce sans donner de morceaux trop dominants."
      },
      {
        "q": "Tes herbes hachées deviennent humides et foncées. Quelle erreur est probable ?",
        "options": [
          "Elles ont été coupées avec trop d’insistance ou avec une lame peu tranchante",
          "Elles ont été lavées trop tôt uniquement",
          "Elles ont été salées trop tard",
          "Elles ont été coupées trop régulièrement"
        ],
        "answer": 0,
        "explanation": "Les herbes fragiles noircissent quand elles sont écrasées. Une lame nette et peu de passages préservent leur fraîcheur."
      },
      {
        "q": "Pourquoi un oignon émincé très fin ne donne-t-il pas le même résultat qu’un oignon coupé épais ?",
        "options": [
          "Il cuit et fond plus vite dans la préparation",
          "Il devient automatiquement plus salé",
          "Il ne peut plus colorer",
          "Il empêche toute réduction"
        ],
        "answer": 0,
        "explanation": "L’épaisseur influence le temps de cuisson et la texture finale. Plus c’est fin, plus l’oignon se fond dans le plat."
      }
    ],
    "linkedRecipes": [
      "salade-composee-methode",
      "soupe-legumes-methode"
    ]
  },
  {
    "id": "tailles-regulieres",
    "prerequisites": [
      "emincer-ciseler-hacher"
    ],
    "moduleId": "couteau-decoupes",
    "title": "Comprendre les tailles régulières",
    "subtitle": "Même taille, même cuisson",
    "duration": 10,
    "objectives": [
      "Comprendre pourquoi la régularité change la cuisson",
      "Choisir une taille adaptée au temps et au plat",
      "Éviter les mélanges de textures involontaires"
    ],
    "concepts": [
      {
        "title": "La régularité est une technique de cuisson",
        "body": "Couper régulièrement ne sert pas seulement à faire joli. Des morceaux de même taille cuisent à une vitesse proche. Si les tailles sont très différentes, les petits deviennent mous ou brûlés pendant que les gros restent fermes. La régularité permet de maîtriser la texture finale.",
        "tip": "Même taille, même cuisson."
      },
      {
        "title": "Julienne, brunoise, mirepoix",
        "body": "La julienne donne de fins bâtonnets, utiles pour une cuisson rapide ou une garniture. La brunoise donne de petits dés, parfaits pour une base de sauce ou une garniture fine. La mirepoix est plus grosse et sert souvent aux soupes, fonds, jus et plats mijotés. Chaque taille a un usage, pas seulement une forme.",
        "tip": "La taille doit servir le plat, pas l’ego."
      },
      {
        "title": "Petit morceau, cuisson rapide",
        "body": "Plus un aliment est coupé petit, plus la chaleur atteint vite son centre. Une brunoise de carotte cuit en quelques minutes, une grosse rondelle demande beaucoup plus de temps. C’est utile pour aller vite, mais risqué avec des aliments fragiles qui peuvent se défaire.",
        "tip": "Plus c’est petit, plus ça va vite."
      },
      {
        "title": "Gros morceau, texture plus présente",
        "body": "Un gros morceau garde davantage de texture et supporte mieux une cuisson longue. C’est pour cela qu’un mijoté utilise souvent de gros morceaux et qu’une soupe mixée accepte des découpes moins précises. La taille doit être choisie selon ce que tu veux sentir en bouche.",
        "tip": "On coupe pour obtenir une texture, pas seulement une forme."
      }
    ],
    "goFurther": {
      "title": "La découpe influence aussi l’assaisonnement",
      "content": "De petits morceaux exposent plus de surface au sel, au gras et à l’acidité. Ils s’assaisonnent plus vite. De gros morceaux demandent souvent plus de temps pour absorber les saveurs."
    },
    "quiz": [
      {
        "q": "Tu mets dans la même poêle des dés de courgette de 5 mm et des morceaux de carotte de 3 cm. Que va-t-il se passer ?",
        "options": [
          "Tout cuira de façon homogène si tu remues souvent",
          "La courgette risque de ramollir avant que la carotte soit cuite",
          "La carotte va cuire plus vite car elle est plus dense",
          "La taille ne compte que pour la présentation"
        ],
        "answer": 1,
        "explanation": "La vitesse de cuisson dépend beaucoup de la taille. Des morceaux très différents donnent une cuisson inégale."
      },
      {
        "q": "Tu veux faire une base aromatique qui fonde dans une sauce. Quelle taille est la plus adaptée ?",
        "options": [
          "De très gros quartiers",
          "Une brunoise ou un ciselage fin",
          "Des morceaux entiers non pelés",
          "Des rondelles épaisses"
        ],
        "answer": 1,
        "explanation": "Une coupe fine cuit vite et se fond dans la sauce. Elle parfume sans rester trop présente."
      },
      {
        "q": "Pourquoi une mirepoix convient-elle bien aux fonds ou aux mijotés ?",
        "options": [
          "Parce qu’elle disparaît instantanément",
          "Parce que ses morceaux plus gros supportent une cuisson longue",
          "Parce qu’elle empêche le liquide de chauffer",
          "Parce qu’elle remplace le bouquet garni"
        ],
        "answer": 1,
        "explanation": "Les fonds et mijotés cuisent longtemps. Une taille plus grosse libère du goût sans se désintégrer trop vite."
      },
      {
        "q": "Tu veux cuire rapidement des légumes pour une garniture croquante. Quelle stratégie est la plus cohérente ?",
        "options": [
          "Les couper de façon régulière et plutôt fine",
          "Mélanger volontairement gros et petits morceaux",
          "Les laisser entiers quelle que soit leur taille",
          "Les couper après cuisson uniquement"
        ],
        "answer": 0,
        "explanation": "Une coupe régulière et fine permet une cuisson rapide et contrôlée, tout en gardant du croquant si le temps est court."
      }
    ],
    "linkedRecipes": [
      "soupe-legumes-methode",
      "legumes-sautes-maitrises"
    ]
  },
  {
    "id": "decouper-pour-cuire",
    "prerequisites": [
      "tailles-regulieres"
    ],
    "moduleId": "couteau-decoupes",
    "title": "Découper pour cuire",
    "subtitle": "Adapter la coupe au résultat voulu",
    "duration": 10,
    "objectives": [
      "Adapter la découpe à la méthode de cuisson",
      "Prévoir l’effet de la taille sur texture et goût",
      "Choisir une coupe cohérente avec le service final"
    ],
    "concepts": [
      {
        "title": "La cuisson dicte souvent la découpe",
        "body": "Une cuisson rapide demande souvent des morceaux plus petits ou plus fins. Une cuisson longue accepte des morceaux plus gros. Une cuisson à la poêle demande de la surface et de la régularité. Une cuisson en soupe mixée demande surtout des tailles proches pour cuire ensemble.",
        "tip": "Avant de couper, demande-toi comment ça va cuire."
      },
      {
        "title": "Découpe et évaporation",
        "body": "Plus les morceaux sont petits, plus ils libèrent vite leur eau. Dans une poêle, cela peut aider à concentrer le goût si la chaleur est forte et la quantité raisonnable. Mais si la poêle est trop chargée, cette eau s’accumule et empêche la coloration.",
        "tip": "Petite coupe + poêle pleine = risque de vapeur."
      },
      {
        "title": "Découpe et dressage",
        "body": "La coupe influence aussi la façon de manger. Une salade demande des morceaux faciles à prendre à la fourchette. Une soupe rustique peut garder des morceaux plus visibles. Une garniture de restaurant demande souvent plus de régularité pour être lisible et agréable.",
        "tip": "La bonne taille est celle qui se mange bien."
      },
      {
        "title": "Découpe et transfert de technique",
        "body": "Comprendre la découpe permet d’adapter une recette. Si tu remplaces une courgette par une carotte, tu ne peux pas toujours garder la même taille : la carotte est plus dense et cuit plus lentement. Adapter la coupe permet de remplacer un ingrédient sans déséquilibrer la cuisson.",
        "tip": "Changer d’ingrédient implique souvent de changer de taille."
      }
    ],
    "goFurther": {
      "title": "La densité des aliments",
      "content": "Deux morceaux de même taille ne cuisent pas toujours pareil. Une courgette, une pomme de terre et une carotte n’ont pas la même densité ni la même teneur en eau. La régularité est une base, mais la nature de l’aliment compte aussi."
    },
    "quiz": [
      {
        "q": "Tu remplaces des courgettes par des carottes dans une poêlée rapide. Que dois-tu probablement modifier ?",
        "options": [
          "Couper les carottes plus finement ou les précuire",
          "Couper les carottes plus gros que les courgettes",
          "Ne rien changer, tous les légumes cuisent pareil",
          "Ajouter les carottes uniquement après cuisson"
        ],
        "answer": 0,
        "explanation": "La carotte est plus dense et cuit plus lentement que la courgette. Une coupe plus fine ou une précuisson rééquilibre le temps."
      },
      {
        "q": "Tu veux une salade facile à manger à la fourchette. Quelle erreur de découpe gênera le plus ?",
        "options": [
          "Des morceaux trop gros et irréguliers",
          "Des herbes ajoutées au dernier moment",
          "Une vinaigrette à part",
          "Des légumes bien égouttés"
        ],
        "answer": 0,
        "explanation": "Une salade doit être agréable à prendre et à mâcher. Des morceaux trop gros cassent l’équilibre du plat."
      },
      {
        "q": "Tu prépares une soupe mixée. Pourquoi faut-il quand même couper les légumes en tailles proches ?",
        "options": [
          "Pour que tous les légumes cuisent au même moment avant mixage",
          "Pour que la soupe reste en morceaux",
          "Pour empêcher l’eau de bouillir",
          "Pour éviter d’utiliser du sel"
        ],
        "answer": 0,
        "explanation": "Même si la soupe est mixée, les légumes doivent être assez cuits ensemble pour donner une texture homogène."
      },
      {
        "q": "Tes légumes très finement coupés rendent beaucoup d’eau en poêle et ne colorent pas. Quelle action corrige le mieux ?",
        "options": [
          "Ajouter un couvercle",
          "Cuire en plus petite quantité ou avec plus de surface et de chaleur",
          "Ajouter beaucoup d’eau",
          "Baisser le feu au minimum dès le début"
        ],
        "answer": 1,
        "explanation": "Les petits morceaux libèrent vite leur humidité. Il faut assez de chaleur et d’espace pour évaporer cette eau."
      }
    ],
    "linkedRecipes": [
      "legumes-sautes-maitrises",
      "salade-composee-methode"
    ]
  },
  {
    "id": "comprendre-chaleur",
    "moduleId": "bases-cuisson",
    "title": "Comprendre ce que fait la chaleur",
    "subtitle": "Cuire, ce n’est pas seulement chauffer",
    "duration": 10,
    "prerequisites": [
      "decouper-pour-cuire"
    ],
    "objectives": [
      "Comprendre comment la chaleur transforme eau, fibres et protéines",
      "Choisir une méthode de cuisson selon le résultat recherché",
      "Identifier pourquoi un aliment devient tendre, sec, doré ou mou"
    ],
    "concepts": [
      {
        "title": "Cuire, c’est transformer",
        "body": "La cuisson ne fait pas seulement monter la température d’un aliment. Elle modifie l’eau qu’il contient, ses fibres, ses protéines, ses sucres, son gras et parfois sa structure entière. Une carotte crue devient tendre, un œuf liquide devient pris, une viande colore, une sauce réduit. Comprendre ces transformations permet de choisir une cuisson au lieu de subir le résultat.",
        "tip": "La chaleur change la matière, pas seulement la température."
      },
      {
        "title": "L’eau est le premier élément à surveiller",
        "body": "Presque tous les aliments contiennent de l’eau. Quand elle reste piégée, l’aliment cuit à la vapeur et ramollit. Quand elle s’évapore vite, la surface peut sécher, colorer et concentrer le goût. C’est pour cela qu’un champignon entassé devient gris et mou, alors qu’un champignon bien espacé dans une poêle chaude peut dorer.",
        "tip": "Pas d’évaporation, pas de vraie coloration."
      },
      {
        "title": "Les protéines coagulent",
        "body": "Les œufs, les poissons et les viandes changent de texture parce que leurs protéines coagulent avec la chaleur. Trop peu de chaleur : l’aliment reste cru ou mou. Trop de chaleur ou trop longtemps : les protéines se serrent, expulsent l’eau et deviennent sèches. La cuisson juste consiste souvent à arrêter avant que cette contraction soit excessive.",
        "tip": "Sec en bouche = souvent protéines trop serrées."
      },
      {
        "title": "Les sucres et protéines colorent",
        "body": "Quand la surface devient assez chaude et sèche, les sucres et protéines créent des arômes de grillé, de noisette et de rôti. C’est la logique derrière une croûte de viande, un légume rôti ou un pain doré. Cette coloration demande de la chaleur, du contact et peu d’humidité en surface.",
        "tip": "La couleur est du goût, tant qu’elle ne devient pas brûlure."
      }
    ],
    "goFurther": {
      "title": "Pourquoi deux cuissons donnent deux goûts différents",
      "content": "Un même aliment peut donner deux résultats opposés. Une carotte pochée reste douce, humide et végétale. Une carotte rôtie perd de l’eau, concentre ses sucres et développe des notes plus profondes. La technique ne change pas seulement la texture : elle change l’identité du goût."
    },
    "quiz": [
      {
        "q": "Tes champignons sont gris, mous et rendent beaucoup d’eau. Quel phénomène domine probablement la cuisson ?",
        "options": [
          "Ils colorent correctement grâce à une chaleur sèche",
          "Ils cuisent surtout dans leur propre vapeur",
          "Ils sont trop salés après cuisson",
          "Ils manquent uniquement de poivre"
        ],
        "answer": 1,
        "explanation": "Quand l’eau ne s’évapore pas assez vite, les champignons cuisent à la vapeur. La surface ne sèche pas, donc la coloration ne démarre pas vraiment."
      },
      {
        "q": "Tu cuis un blanc de poulet à feu fort jusqu’à ce qu’il soit très ferme. Pourquoi devient-il sec ?",
        "options": [
          "Les protéines se sont trop contractées et ont expulsé l’eau",
          "Le sel empêche toujours la viande de cuire",
          "Le poulet a absorbé trop d’huile",
          "La poêle était forcément trop petite"
        ],
        "answer": 0,
        "explanation": "La surcuisson serre les protéines. Elles retiennent moins bien l’eau, ce qui donne une texture sèche et fibreuse."
      },
      {
        "q": "Tu veux obtenir des carottes plus concentrées et légèrement sucrées. Quelle cuisson est la plus cohérente ?",
        "options": [
          "Les cuire longtemps dans beaucoup d’eau non salée",
          "Les rôtir ou les glacer pour évaporer et concentrer",
          "Les refroidir immédiatement sans cuisson",
          "Les couvrir dans une poêle froide"
        ],
        "answer": 1,
        "explanation": "Rôtir ou glacer permet de perdre une partie de l’eau et de concentrer les sucres naturels. Le goût devient plus intense."
      },
      {
        "q": "Un aliment est très doré dehors mais cru dedans. Quel est le diagnostic le plus probable ?",
        "options": [
          "La chaleur extérieure était trop forte par rapport à l’épaisseur",
          "Il a été trop salé après cuisson",
          "Il manque forcément d’acidité",
          "Il a été coupé trop régulièrement"
        ],
        "answer": 0,
        "explanation": "La surface a cuit plus vite que la chaleur n’a pu atteindre le centre. Il faut souvent saisir puis finir plus doucement."
      }
    ],
    "linkedRecipes": [
      "oeufs-brouilles-cremeux",
      "poulet-moelleux-legumes-rotis"
    ]
  },
  {
    "id": "chaleur-douce-forte",
    "prerequisites": [
      "comprendre-chaleur"
    ],
    "moduleId": "bases-cuisson",
    "title": "Chaleur douce, moyenne, forte",
    "subtitle": "Choisir l’intensité selon le résultat",
    "duration": 10,
    "objectives": [
      "Différencier les usages du feu doux, moyen et fort",
      "Adapter l’intensité selon l’aliment et son épaisseur",
      "Corriger une cuisson trop agressive ou trop faible"
    ],
    "concepts": [
      {
        "title": "Le feu doux protège les textures fragiles",
        "body": "Le feu doux sert aux œufs, aux sauces, aux poissons délicats, au beurre, aux crèmes et aux cuissons qui demandent du contrôle. Il évite de brusquer les protéines et de brûler les matières grasses sensibles. Il ne sert pas à tout cuire lentement par principe : il sert quand la précision vaut plus que la vitesse.",
        "tip": "Doux = contrôle."
      },
      {
        "title": "Le feu moyen construit la cuisson",
        "body": "Le feu moyen est la zone de travail la plus fréquente. Il permet d’attendrir, de cuire à cœur et de réduire sans brûler immédiatement. Après une saisie forte, on baisse souvent à feu moyen pour finir une viande, un poisson ou une poêlée sans carboniser la surface.",
        "tip": "Moyen = cuisson régulière."
      },
      {
        "title": "Le feu fort sert à démarrer, colorer ou évaporer",
        "body": "Le feu fort est utile pour saisir une viande, sauter des légumes, lancer une ébullition ou évaporer rapidement. Mais il laisse peu de marge. L’ail brûle vite, le beurre noircit, les sucs deviennent amers et les aliments fins peuvent cuire trop fort dehors avant d’être prêts dedans.",
        "tip": "Fort = action rapide, surveillance rapide."
      },
      {
        "title": "L’intensité se règle pendant la cuisson",
        "body": "Un réglage de feu n’est pas une décision définitive. Si le grésillement disparaît, la température est peut-être trop basse ou la poêle trop chargée. Si l’huile fume fortement ou que les sucs noircissent, il faut baisser le feu ou retirer la poêle quelques secondes. Cuisiner, c’est ajuster en fonction des signes.",
        "tip": "Le bon feu se lit, il ne se devine pas."
      }
    ],
    "goFurther": {
      "title": "L’inertie du matériel",
      "content": "Une poêle en fonte garde longtemps la chaleur, même quand le feu baisse. Une poêle fine réagit plus vite mais pardonne moins les variations. Une plaque électrique peut continuer à chauffer après avoir été baissée. La même recette doit donc être adaptée à ton matériel."
    },
    "quiz": [
      {
        "q": "Ton ail haché brunit en quelques secondes et sent amer. Quelle correction est la plus logique ?",
        "options": [
          "Ajouter plus d’ail pour compenser",
          "Baisser le feu ou ajouter l’ail plus tard",
          "Couvrir la poêle pour concentrer la chaleur",
          "Ajouter beaucoup de sel pour stopper la cuisson"
        ],
        "answer": 1,
        "explanation": "L’ail haché brûle très vite. Il doit souvent être cuit plus doucement ou ajouté après les ingrédients plus longs."
      },
      {
        "q": "Tu veux cuire des œufs brouillés crémeux. Quel choix de chaleur est le plus cohérent ?",
        "options": [
          "Feu très fort pour coaguler vite",
          "Feu doux à moyen-doux, avec retrait possible hors du feu",
          "Four très chaud en grill",
          "Eau bouillante directement dans les œufs"
        ],
        "answer": 1,
        "explanation": "Les œufs coagulent vite. Une chaleur douce permet de garder une texture humide et crémeuse."
      },
      {
        "q": "Tu as bien coloré une escalope épaisse, mais le centre reste cru. Que fais-tu ?",
        "options": [
          "Tu continues à feu très fort jusqu’à ce que l’extérieur soit noir",
          "Tu baisses le feu et tu finis plus doucement, éventuellement couvert ou au four",
          "Tu ajoutes de l’eau froide dans la poêle",
          "Tu la coupes immédiatement en morceaux après 10 secondes"
        ],
        "answer": 1,
        "explanation": "La surface a déjà reçu assez de chaleur. Il faut maintenant laisser la chaleur atteindre le centre sans brûler l’extérieur."
      },
      {
        "q": "Ta sauce réduit bien puis commence à attacher au fond. Quel geste montre que tu comprends la cuisson ?",
        "options": [
          "Augmenter le feu pour finir plus vite",
          "Baisser le feu et racler le fond régulièrement",
          "Ajouter du sel pour empêcher l’accroche",
          "Arrêter de remuer pour ne pas casser la sauce"
        ],
        "answer": 1,
        "explanation": "Plus une sauce se concentre, plus elle accroche facilement. Il faut baisser l’intensité et garder le fond propre."
      }
    ],
    "linkedRecipes": [
      "oeufs-brouilles-cremeux",
      "poulet-moelleux-legumes-rotis"
    ]
  },
  {
    "id": "signes-cuisson",
    "prerequisites": [
      "chaleur-douce-forte"
    ],
    "moduleId": "bases-cuisson",
    "title": "Lire les signes de cuisson",
    "subtitle": "Observer couleur, bruit, odeur et texture",
    "duration": 10,
    "objectives": [
      "Utiliser les signes sensoriels pour ajuster la cuisson",
      "Reconnaître une cuisson trop faible ou trop forte",
      "Arrêter la cuisson selon un critère visible plutôt qu’un temps seul"
    ],
    "concepts": [
      {
        "title": "La couleur indique l’intensité",
        "body": "La couleur donne une première information sur la cuisson. Blond indique une cuisson légère, doré indique un début de concentration des arômes, brun donne un goût plus profond, noir annonce souvent l’amertume. La couleur ne dit pas tout, mais elle permet d’agir avant que l’erreur soit irréversible.",
        "tip": "Doré donne du goût ; noir donne souvent de l’amertume."
      },
      {
        "title": "Le son révèle l’humidité",
        "body": "Un grésillement net indique que l’eau s’évapore au contact de la chaleur. Un bruit faible peut signaler une poêle trop froide ou trop chargée. Un crépitement violent peut signaler trop d’eau dans l’huile ou une chaleur trop agressive. Une cuisson s’écoute autant qu’elle se regarde.",
        "tip": "Le silence dans une poêle chaude est rarement bon signe."
      },
      {
        "title": "L’odeur prévient avant la brûlure",
        "body": "L’odeur change avant que l’œil voie tout. Une odeur de noisette peut indiquer un beurre bien coloré. Une odeur piquante, âcre ou fumée signale que l’on approche de la brûlure. Apprendre à sentir permet de corriger plus tôt.",
        "tip": "Quand ça sent brûlé, c’est souvent déjà trop tard."
      },
      {
        "title": "La texture confirme",
        "body": "La couleur seule ne suffit pas. Un légume peut être doré mais encore trop ferme, un poisson peut être opaque dehors mais trop cru au centre, une sauce peut sembler brillante mais trop liquide. La texture confirme ce que la couleur suggère : piquer, presser, napper une cuillère ou observer la résistance est souvent indispensable.",
        "tip": "La couleur informe, la texture confirme."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les temps sont indicatifs",
      "content": "Les temps dépendent de l’épaisseur, de la température de départ, du matériel, de la quantité et de l’intensité réelle du feu. Une recette fiable donne un temps, mais un cuisinier progresse en observant le résultat."
    },
    "quiz": [
      {
        "q": "Tes légumes sont pâles et humides après 6 minutes de poêle. Quel signe aurait dû t’alerter ?",
        "options": [
          "Un grésillement faible ou absent",
          "Une couleur trop rouge",
          "Une odeur de noisette",
          "Une texture trop croustillante"
        ],
        "answer": 0,
        "explanation": "Un grésillement faible indique souvent que l’eau ne s’évapore pas assez vite. Les légumes cuisent alors à la vapeur."
      },
      {
        "q": "Ton beurre commence à sentir la noisette et devient blond. Que comprends-tu ?",
        "options": [
          "Il est encore froid",
          "Il développe des arômes mais peut vite basculer vers le brûlé",
          "Il ne peut plus cuire aucun aliment",
          "Il faut forcément ajouter de l’eau"
        ],
        "answer": 1,
        "explanation": "Le beurre noisette est aromatique, mais il évolue vite. Il faut surveiller ou baisser le feu si la cuisson continue."
      },
      {
        "q": "Une sauce doit napper la cuillère. Que dois-tu observer ?",
        "options": [
          "Elle doit couler comme de l’eau",
          "Elle doit tenir légèrement sur le dos de la cuillère",
          "Elle doit faire de gros morceaux",
          "Elle doit devenir noire"
        ],
        "answer": 1,
        "explanation": "Une sauce nappante adhère légèrement à la cuillère. C’est un signe de réduction ou de liaison suffisante."
      },
      {
        "q": "Un poisson est doré côté peau mais la chair reste très translucide au-dessus. Que dois-tu éviter ?",
        "options": [
          "Le brûler côté peau en attendant que tout cuise uniquement par dessous",
          "Finir doucement quelques instants ou couvrir brièvement",
          "Le plonger dans l’eau froide",
          "Le presser fortement contre la poêle jusqu’à casser la chair"
        ],
        "answer": 1,
        "explanation": "La peau est déjà colorée. Il faut finir la cuisson plus doucement pour atteindre le haut du filet sans brûler la base."
      }
    ],
    "linkedRecipes": [
      "poisson-vapeur-citron-herbes",
      "champignons-sautes"
    ]
  },
  {
    "id": "repos-cuisson-residuelle",
    "prerequisites": [
      "signes-cuisson"
    ],
    "moduleId": "bases-cuisson",
    "title": "Repos et cuisson résiduelle",
    "subtitle": "Arrêter avant de surcuire",
    "duration": 9,
    "objectives": [
      "Comprendre que la cuisson continue après retrait du feu",
      "Utiliser le repos pour garder viandes et poissons plus juteux",
      "Sortir certains aliments avant leur point final"
    ],
    "concepts": [
      {
        "title": "La chaleur continue de circuler",
        "body": "Un aliment chaud ne cesse pas instantanément de cuire quand il sort de la poêle, du four ou de l’eau. La chaleur accumulée en surface continue de se diffuser vers le centre. C’est la cuisson résiduelle. Elle est particulièrement importante pour les viandes, poissons, œufs, légumes denses et préparations servies dans un plat chaud.",
        "tip": "Sorti du feu ne veut pas dire arrêté."
      },
      {
        "title": "Le repos protège les jus",
        "body": "Une viande coupée immédiatement après cuisson perd plus facilement ses jus. Pendant le repos, la chaleur se répartit et la pression interne baisse. La découpe devient plus propre, la chair semble plus juteuse et le jus reste davantage dans la viande.",
        "tip": "Une viande pressée perd son jus."
      },
      {
        "title": "Les œufs et poissons se retirent avant le point parfait",
        "body": "Les œufs brouillés doivent sortir encore un peu crémeux, car ils continuent à coaguler. Un poisson délicat peut finir avec sa propre chaleur ou sous un court couvercle hors feu. Si le résultat est parfait dans la poêle, il risque d’être trop cuit dans l’assiette.",
        "tip": "Pour arriver juste, sors un peu avant."
      },
      {
        "title": "Le contenant compte",
        "body": "Une cocotte, un ramequin ou une poêle épaisse garde beaucoup de chaleur. Un œuf cocotte, une crème ou un gratin continuent donc à cuire après sortie du four. Plus le contenant est chaud et massif, plus il faut anticiper la fin.",
        "tip": "Le plat chaud continue le travail."
      }
    ],
    "goFurther": {
      "title": "Repos ne veut pas dire refroidissement complet",
      "content": "Pour une petite pièce, quelques minutes suffisent. Pour une grosse pièce, le repos peut être plus long, idéalement sous une protection légère qui garde la chaleur sans enfermer trop de vapeur. Couvrir hermétiquement peut ramollir une croûte."
    },
    "quiz": [
      {
        "q": "Tu coupes un steak dès sa sortie de poêle et beaucoup de jus coule dans l’assiette. Quelle étape a manqué ?",
        "options": [
          "Le repos",
          "Le lavage de la poêle",
          "Le passage sous l’eau froide",
          "Le sucre en fin de cuisson"
        ],
        "answer": 0,
        "explanation": "Le repos limite la fuite des jus au moment de la découpe. Il améliore la sensation de jutosité."
      },
      {
        "q": "Tes œufs brouillés sont parfaits dans la poêle, puis secs dans l’assiette. Que fallait-il faire ?",
        "options": [
          "Les retirer plus tôt, encore légèrement crémeux",
          "Les cuire plus fort",
          "Ajouter du sel uniquement après 30 minutes",
          "Les laisser dans la poêle chaude hors du feu pendant 10 minutes"
        ],
        "answer": 0,
        "explanation": "Les œufs continuent à coaguler avec la chaleur résiduelle. Il faut les arrêter avant le point final."
      },
      {
        "q": "Pourquoi une côte épaisse continue-t-elle à monter légèrement en température après cuisson ?",
        "options": [
          "La chaleur de surface continue de se diffuser vers le centre",
          "Le sel crée de la chaleur",
          "L’assiette ajoute de l’eau",
          "La viande devient plus froide au centre"
        ],
        "answer": 0,
        "explanation": "La chaleur accumulée à l’extérieur continue de se répartir. C’est la cuisson résiduelle."
      },
      {
        "q": "Tu sors des œufs cocotte du four quand le jaune est déjà très ferme. Que va-t-il se passer ?",
        "options": [
          "Ils vont redevenir coulants",
          "Ils risquent de continuer à durcir dans le ramequin chaud",
          "La crème va refroidir instantanément",
          "Le blanc va redevenir transparent"
        ],
        "answer": 1,
        "explanation": "Le ramequin garde la chaleur. La cuisson continue quelques minutes après sortie du four."
      }
    ],
    "linkedRecipes": [
      "oeufs-brouilles-cremeux",
      "poulet-moelleux-legumes-rotis"
    ]
  },
  {
    "id": "bouillir-fremir-pocher",
    "moduleId": "eau-vapeur-pochage",
    "title": "Bouillir, frémir, pocher",
    "subtitle": "Choisir la bonne agitation du liquide",
    "duration": 10,
    "prerequisites": [
      "repos-cuisson-residuelle"
    ],
    "objectives": [
      "Différencier ébullition, frémissement et pochage",
      "Adapter l’agitation du liquide à la fragilité de l’aliment",
      "Éviter de casser, dessécher ou délaver les aliments"
    ],
    "concepts": [
      {
        "title": "Bouillir : beaucoup d’énergie",
        "body": "Bouillir signifie cuire dans un liquide très chaud et très agité. C’est utile pour les pâtes, certains légumes verts ou pour relancer rapidement une cuisson. Mais cette agitation peut abîmer les aliments fragiles. Un filet de poisson, un œuf poché ou une volaille délicate supportent mal les gros bouillons.",
        "tip": "Bouillir secoue : ce n’est pas toujours mieux cuire."
      },
      {
        "title": "Frémir : cuire sans brutaliser",
        "body": "Frémir signifie maintenir de petites bulles régulières. C’est la cuisson des soupes claires, bouillons, pommes de terre, viandes pochées ou préparations qui doivent rester nettes. Le frémissement apporte assez de chaleur pour cuire, mais sans casser les formes ni troubler autant le liquide.",
        "tip": "Frémir, c’est cuire sans bousculer."
      },
      {
        "title": "Pocher : chaleur douce et liquide aromatique",
        "body": "Pocher consiste à cuire doucement dans un liquide chaud, souvent parfumé. L’objectif est de préserver la forme et l’humidité de l’aliment. Un poisson poché doit rester nacré, un œuf poché doit garder un jaune coulant, une volaille pochée doit rester moelleuse.",
        "tip": "Pocher, c’est cuire avec délicatesse."
      },
      {
        "title": "Le liquide de cuisson compte",
        "body": "L’eau seule cuit, mais elle n’apporte pas toujours de goût. Sel, aromates, citron, vin, bouillon, fumet ou épices peuvent transformer une cuisson simple en base savoureuse. À l’inverse, une eau mal salée peut donner des légumes ou des pâtes fades dès le départ.",
        "tip": "Le liquide de cuisson est déjà un assaisonnement."
      }
    ],
    "goFurther": {
      "title": "Pourquoi l’eau bout toujours autour de 100°C",
      "content": "À pression normale, l’eau bouillante ne devient pas beaucoup plus chaude en mettant le feu plus fort. Un feu plus fort augmente surtout l’agitation et l’évaporation. Une fois l’ébullition atteinte, il faut souvent baisser pour garder une cuisson plus propre."
    },
    "quiz": [
      {
        "q": "Tu poches un œuf dans une eau à gros bouillons. Le blanc se disperse partout. Quelle est l’erreur principale ?",
        "options": [
          "L’eau est trop agitée pour un aliment fragile",
          "L’œuf manque forcément de sel",
          "Il aurait fallu utiliser une poêle sèche",
          "Le jaune était trop froid pour coaguler"
        ],
        "answer": 0,
        "explanation": "Le pochage demande un liquide peu agité. Les gros bouillons cassent la forme de l’œuf."
      },
      {
        "q": "Tu cuis des pommes de terre et l’eau déborde à gros bouillons. Quel réglage est le plus logique ?",
        "options": [
          "Baisser pour maintenir un frémissement régulier",
          "Ajouter de l’huile froide",
          "Couvrir hermétiquement et augmenter le feu",
          "Retirer tout le sel"
        ],
        "answer": 0,
        "explanation": "Une fois l’ébullition atteinte, un frémissement suffit souvent. Il cuit proprement sans débordement inutile."
      },
      {
        "q": "Tu veux cuire un filet de poisson sans le casser. Quel liquide est le plus adapté ?",
        "options": [
          "Eau à gros bouillons violents",
          "Liquide frémissant ou presque frémissant, aromatisé",
          "Huile froide",
          "Eau glacée salée"
        ],
        "answer": 1,
        "explanation": "Un poisson fragile demande une chaleur douce et peu d’agitation. Le liquide peut aussi apporter des aromates."
      },
      {
        "q": "Pourquoi saler l’eau des légumes ou des pâtes dès le départ ?",
        "options": [
          "Pour assaisonner l’aliment pendant qu’il cuit",
          "Pour empêcher l’eau de chauffer",
          "Pour supprimer toute évaporation",
          "Pour rendre le liquide sucré"
        ],
        "answer": 0,
        "explanation": "La cuisson dans l’eau est une occasion d’assaisonner l’intérieur ou la surface de l’aliment. Une eau fade donne souvent un résultat fade."
      }
    ],
    "linkedRecipes": [
      "haricots-verts-oeuf-poche",
      "pommes-terre-vapeur-herbes"
    ]
  },
  {
    "id": "cuisson-anglaise-legumes",
    "prerequisites": [
      "bouillir-fremir-pocher"
    ],
    "moduleId": "eau-vapeur-pochage",
    "title": "Cuire les légumes à l’anglaise",
    "subtitle": "Garder couleur, croquant et assaisonnement",
    "duration": 10,
    "objectives": [
      "Cuire des légumes verts dans une eau abondante et salée",
      "Stopper la cuisson pour préserver couleur et texture",
      "Assaisonner après cuisson sans détremper"
    ],
    "concepts": [
      {
        "title": "La cuisson à l’anglaise",
        "body": "Cuire à l’anglaise signifie cuire dans une grande quantité d’eau bouillante salée. Cette technique est très utile pour les légumes verts, car elle cuit rapidement tout en gardant une couleur nette si la cuisson est courte. L’eau doit être assez abondante pour ne pas trop refroidir quand les légumes entrent.",
        "tip": "Grande eau, bon sel, cuisson courte."
      },
      {
        "title": "Pourquoi l’eau doit être salée",
        "body": "Le sel ne sert pas seulement à donner du goût à l’eau. Il assaisonne le légume pendant la cuisson. Si l’eau est fade, le légume sera souvent fade au cœur, même avec une finition correcte ensuite.",
        "tip": "L’eau de cuisson doit déjà avoir du goût."
      },
      {
        "title": "Refroidir pour stopper",
        "body": "Un légume chaud continue de cuire après égouttage. Si tu veux garder une texture croquante ou préparer les légumes à l’avance, il faut les refroidir rapidement. L’eau froide ou glacée met la cuisson en pause et aide à garder une couleur plus vive.",
        "tip": "Refroidir, c’est appuyer sur pause."
      },
      {
        "title": "Réchauffer sans recuire",
        "body": "Un légume blanchi peut être réchauffé rapidement au beurre, à l’huile d’olive ou dans une sauce. Le but n’est pas de le recuire longtemps, mais de le remettre à température et de l’assaisonner. S’il reste plusieurs minutes à la poêle, il perd le bénéfice du blanchiment.",
        "tip": "Blanchi puis réchauffé : pas cuit deux fois."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les légumes verts deviennent ternes",
      "content": "Une cuisson trop longue, une attente chaude ou une acidité ajoutée trop tôt peuvent ternir les légumes verts. Pour garder une couleur nette, mieux vaut cuire vite, refroidir si besoin, puis assaisonner au dernier moment."
    },
    "quiz": [
      {
        "q": "Tes haricots verts sont mous et kaki au lieu d’être verts et croquants. Quelle cause est la plus probable ?",
        "options": [
          "Cuisson trop longue ou attente chaude après égouttage",
          "Eau trop salée",
          "Trop de refroidissement",
          "Découpe trop régulière"
        ],
        "answer": 0,
        "explanation": "Les légumes verts perdent vite couleur et croquant en cas de surcuisson ou de chaleur résiduelle prolongée."
      },
      {
        "q": "Tu ajoutes une grosse quantité de haricots froids dans une petite casserole d’eau. Que risque-t-il de se passer ?",
        "options": [
          "L’eau chute en température et la cuisson devient moins nette",
          "Les haricots vont frire",
          "L’eau devient plus salée automatiquement",
          "La couleur devient forcément plus vive"
        ],
        "answer": 0,
        "explanation": "Une petite quantité d’eau refroidit fortement quand on ajoute les légumes. La cuisson devient plus lente et moins précise."
      },
      {
        "q": "Tu veux préparer des brocolis pour les servir plus tard. Quelle méthode est la plus sûre ?",
        "options": [
          "Les cuire puis les laisser chauds dans la passoire",
          "Les cuire brièvement, refroidir, égoutter, puis réchauffer rapidement au service",
          "Les cuire 30 minutes à gros bouillons",
          "Les saler seulement après refroidissement complet sans goûter"
        ],
        "answer": 1,
        "explanation": "Refroidir stoppe la cuisson. Le réchauffage final doit être court pour garder texture et couleur."
      },
      {
        "q": "Pourquoi goûter un légume pendant la cuisson plutôt que suivre seulement un minuteur ?",
        "options": [
          "Parce que la taille, la fraîcheur et la quantité changent le temps réel",
          "Parce que les minuteurs ne fonctionnent jamais",
          "Parce que le sel disparaît après 2 minutes",
          "Parce que tous les légumes cuisent pareil"
        ],
        "answer": 0,
        "explanation": "Le temps dépend de l’épaisseur, de la variété, de la quantité et de la puissance de l’ébullition. Goûter reste le meilleur contrôle."
      }
    ],
    "linkedRecipes": [
      "haricots-verts-oeuf-poche"
    ]
  },
  {
    "id": "vapeur-papillote",
    "prerequisites": [
      "cuisson-anglaise-legumes"
    ],
    "moduleId": "eau-vapeur-pochage",
    "title": "Vapeur et papillote",
    "subtitle": "Cuire avec humidité sans délaver",
    "duration": 10,
    "objectives": [
      "Utiliser la vapeur pour cuire doucement les aliments fragiles",
      "Comprendre le rôle du couvercle et de l’humidité",
      "Assaisonner une cuisson vapeur pour éviter un résultat fade"
    ],
    "concepts": [
      {
        "title": "La vapeur cuit sans immerger",
        "body": "La vapeur apporte une chaleur humide sans plonger l’aliment dans l’eau. Elle convient aux poissons, légumes, ravioles, volailles fines ou aliments que l’on veut préserver. Comme le liquide ne délave pas directement l’aliment, les textures restent souvent plus nettes qu’en immersion.",
        "tip": "Vapeur = chaleur douce et humide."
      },
      {
        "title": "Le couvercle est le moteur",
        "body": "Sans couvercle, la vapeur s’échappe et la cuisson ralentit. Avec couvercle, la chaleur circule autour de l’aliment. Ouvrir trop souvent fait perdre de la vapeur et rallonge le temps. Il vaut mieux contrôler à des moments précis plutôt que soulever toutes les 20 secondes.",
        "tip": "Chaque ouverture relance presque la cuisson."
      },
      {
        "title": "La papillote crée une mini-vapeur aromatique",
        "body": "Dans une papillote, l’eau des aliments, un peu de jus, de vin, de citron ou de légumes crée une vapeur parfumée. Le poisson ou la volaille cuit dans son propre environnement aromatique. Mais si la papillote contient trop de liquide, le résultat devient bouilli plutôt que délicatement cuit.",
        "tip": "La papillote parfume ; elle ne doit pas noyer."
      },
      {
        "title": "La finition donne le goût",
        "body": "La vapeur cuit proprement, mais elle ne remplace pas l’assaisonnement. Sel, beurre, huile, citron, herbes, sauce vierge ou condiment doivent souvent arriver à la fin. C’est cette finition qui transforme une cuisson saine mais fade en plat agréable.",
        "tip": "La vapeur cuit, la finition donne le goût."
      }
    ],
    "goFurther": {
      "title": "Pourquoi la vapeur est utile pour apprendre",
      "content": "La vapeur rend visible la notion de cuisson juste. Un poisson trop cuit devient sec et fibreux, un légume trop cuit devient mou. Comme il y a peu de coloration ou de sauce pour masquer les défauts, elle apprend à lire la texture."
    },
    "quiz": [
      {
        "q": "Ton poisson vapeur est bien cuit mais fade. Quelle correction est la plus juste ?",
        "options": [
          "Le cuire plus longtemps",
          "Ajouter une finition : sel, citron, huile, herbes ou sauce",
          "Le recuire à gros bouillons",
          "Le laisser refroidir dans le panier vapeur"
        ],
        "answer": 1,
        "explanation": "La vapeur cuit doucement mais assaisonne peu. La finition apporte relief, gras, acidité et parfum."
      },
      {
        "q": "Tu ouvres le panier vapeur toutes les 30 secondes. Quel effet cela produit-il ?",
        "options": [
          "La vapeur s’échappe et la cuisson devient moins régulière",
          "La cuisson accélère toujours",
          "Les aliments deviennent automatiquement croustillants",
          "Le sel disparaît"
        ],
        "answer": 0,
        "explanation": "La vapeur est la source de chaleur. En ouvrant trop souvent, tu perds cette chaleur et tu rallonges la cuisson."
      },
      {
        "q": "Dans une papillote de poisson, tu ajoutes beaucoup de liquide. Que risques-tu d’obtenir ?",
        "options": [
          "Une cuisson plus proche du bouilli qu’une vapeur aromatique",
          "Une peau plus croustillante",
          "Un poisson moins humide",
          "Une coloration forte"
        ],
        "answer": 0,
        "explanation": "La papillote a besoin d’un peu d’humidité, pas d’un bain. Trop de liquide change la méthode de cuisson."
      },
      {
        "q": "Quel signe indique qu’un poisson vapeur approche de la cuisson juste ?",
        "options": [
          "La chair devient opaque et se détache en feuillets sans sécher",
          "La chair devient très dure et grise",
          "La peau devient noire",
          "Le poisson perd toute son eau dans l’assiette"
        ],
        "answer": 0,
        "explanation": "Un poisson juste cuit devient opaque et se sépare facilement. S’il durcit ou sèche, il est allé trop loin."
      }
    ],
    "linkedRecipes": [
      "poisson-vapeur-citron-herbes",
      "pommes-terre-vapeur-herbes"
    ]
  },
  {
    "id": "pochage-delicat",
    "prerequisites": [
      "vapeur-papillote"
    ],
    "moduleId": "eau-vapeur-pochage",
    "title": "Pocher les aliments délicats",
    "subtitle": "Œufs, poissons, volailles : cuire sans agresser",
    "duration": 10,
    "objectives": [
      "Pocher dans un liquide chaud mais peu agité",
      "Préserver la forme et l’humidité des aliments fragiles",
      "Utiliser un liquide aromatique comme outil de goût"
    ],
    "concepts": [
      {
        "title": "Le pochage protège la texture",
        "body": "Pocher, c’est cuire doucement dans un liquide qui ne secoue pas l’aliment. Cette méthode est utile quand une poêle serait trop agressive ou qu’une ébullition casserait la forme. Elle permet de garder un œuf coulant, un poisson nacré ou une volaille moelleuse.",
        "tip": "Le pochage cherche la tendreté, pas la puissance."
      },
      {
        "title": "Le liquide doit être chaud mais calme",
        "body": "Pour pocher, le liquide doit être assez chaud pour cuire, mais pas assez agité pour déchirer. Les petites bulles sont acceptables ; les gros bouillons sont un signal d’alerte. Une eau trop agitée disperse un œuf, casse un poisson et durcit les chairs délicates.",
        "tip": "Si ça secoue, ce n’est plus vraiment pocher."
      },
      {
        "title": "Le goût vient du liquide",
        "body": "Un liquide de pochage peut être simplement salé, ou devenir un court-bouillon avec aromates, citron, vin blanc, légumes, herbes ou épices. L’aliment absorbe légèrement cet environnement. Un poisson poché dans une eau plate et non salée aura rarement beaucoup de relief.",
        "tip": "Un pochage fade commence par un liquide fade."
      },
      {
        "title": "Égoutter sans abîmer",
        "body": "Un aliment poché est souvent fragile en sortie de cuisson. Il faut le récupérer avec une écumoire, une araignée ou une spatule large, puis l’égoutter sans le presser. Le geste de sortie compte autant que la cuisson elle-même.",
        "tip": "Un aliment délicat se sort comme il se cuit : doucement."
      }
    ],
    "goFurther": {
      "title": "Pocher à chaud ou départ à froid",
      "content": "Certains aliments fragiles se pochent dans un liquide déjà chaud pour fixer rapidement leur forme. D’autres, comme certaines volailles ou pommes de terre selon le résultat voulu, peuvent partir à froid pour une cuisson plus progressive. La méthode dépend de la structure de l’aliment."
    },
    "quiz": [
      {
        "q": "Tu poches un filet de cabillaud et il se défait dans la casserole. Quel diagnostic est le plus probable ?",
        "options": [
          "Le liquide était trop agité ou la manipulation trop brutale",
          "Le poisson manquait de farine",
          "Il fallait le cuire à feu plus fort",
          "Le poisson avait trop de sel en surface"
        ],
        "answer": 0,
        "explanation": "Le cabillaud est fragile. De gros bouillons ou une sortie trop brusque peuvent casser les feuillets."
      },
      {
        "q": "Tu veux pocher une volaille pour qu’elle reste moelleuse. Quel liquide est préférable ?",
        "options": [
          "Une eau non salée sans aucun aromate",
          "Un bouillon ou liquide aromatique maintenu à frémissement doux",
          "Une huile fumante",
          "Une sauce très réduite à gros bouillons"
        ],
        "answer": 1,
        "explanation": "Un liquide aromatique doux cuit sans agresser et apporte du goût. L’ébullition violente dessèche et durcit."
      },
      {
        "q": "Ton œuf poché a un blanc très dispersé. Quel geste peut améliorer le résultat ?",
        "options": [
          "Utiliser une eau frémissante, un œuf frais et le verser doucement depuis un petit bol",
          "Le casser directement de très haut dans l’eau bouillante",
          "Ajouter de l’huile dans l’eau",
          "Le remuer fortement pendant toute la cuisson"
        ],
        "answer": 0,
        "explanation": "Un œuf frais a un blanc plus groupé. Une eau peu agitée et un versement doux aident à garder la forme."
      },
      {
        "q": "Pourquoi ne faut-il pas presser un poisson poché pour l’égoutter ?",
        "options": [
          "Tu risques de casser la chair et d’expulser son humidité",
          "Il va devenir plus cru",
          "Le sel va disparaître",
          "Le liquide va se transformer en huile"
        ],
        "answer": 0,
        "explanation": "Après pochage, la chair est tendre et fragile. Il faut égoutter sans écraser."
      }
    ],
    "linkedRecipes": [
      "haricots-verts-oeuf-poche",
      "cabillaud-poche-court-bouillon"
    ]
  },
  {
    "id": "saisir-colorer-maillard",
    "moduleId": "cuissons-poele",
    "title": "Saisir et colorer",
    "subtitle": "Créer une croûte sans brûler",
    "duration": 10,
    "prerequisites": [
      "pochage-delicat"
    ],
    "objectives": [
      "Comprendre pourquoi la surface doit sécher avant de colorer",
      "Maîtriser la saisie pour obtenir une croûte dorée",
      "Éviter les erreurs qui donnent une viande grise ou une poêlée molle"
    ],
    "concepts": [
      {
        "title": "La coloration demande une surface sèche",
        "body": "Avant de colorer, la surface de l’aliment doit perdre son humidité. Tant qu’il y a trop d’eau en surface, l’énergie sert surtout à évaporer, pas à créer une croûte. C’est pour cela qu’il faut sécher une viande, un poisson ou des champignons avant la poêle.",
        "tip": "Humide en surface = coloration retardée."
      },
      {
        "title": "La réaction de Maillard",
        "body": "Quand la surface devient assez chaude, les protéines et les sucres réagissent pour créer des arômes de rôti, de grillé et de noisette. Cette coloration n’est pas décorative : elle construit une grande partie du goût. Une viande grise ou des légumes pâles peuvent être cuits, mais ils auront moins de profondeur.",
        "tip": "Pas de croûte = beaucoup moins de goût."
      },
      {
        "title": "Ne pas bouger trop tôt",
        "body": "Un aliment qui accroche légèrement au début de la saisie n’est pas forcément en train de rater. La croûte se forme et finit souvent par se détacher naturellement. Si tu forces trop tôt, tu arraches la surface en formation et tu perds une partie de la coloration.",
        "tip": "Si ça accroche au début, attends avant de paniquer."
      },
      {
        "title": "Saisir fort, finir plus doux",
        "body": "La saisie sert à créer la surface, pas toujours à cuire entièrement. Pour une pièce épaisse, on peut saisir à feu fort puis baisser, couvrir brièvement ou finir au four. Rester à feu fort du début à la fin donne souvent un extérieur brûlé et un centre mal maîtrisé.",
        "tip": "Fort pour la croûte, plus doux pour le cœur."
      }
    ],
    "goFurther": {
      "title": "Pourquoi sécher le poisson côté peau",
      "content": "Une peau humide colle, se déchire et croustille mal. En pressant légèrement le filet au départ et en gardant la peau au contact de la poêle, on obtient une cuisson plus régulière et une peau plus nette."
    },
    "quiz": [
      {
        "q": "Tu poses un steak humide dans une poêle chaude. Il grésille fort puis rend beaucoup d’eau. Quel problème as-tu créé ?",
        "options": [
          "La surface doit d’abord évaporer l’eau avant de colorer",
          "La viande est déjà trop cuite",
          "Le sel empêche toute réaction",
          "Il manque forcément du beurre"
        ],
        "answer": 0,
        "explanation": "L’humidité de surface retarde la coloration. Sécher l’aliment avant cuisson accélère la formation de croûte."
      },
      {
        "q": "Ton steak accroche après 20 secondes. Que fais-tu ?",
        "options": [
          "Tu le décolles immédiatement en grattant",
          "Tu attends encore un peu pour laisser la croûte se former",
          "Tu ajoutes un verre d’eau",
          "Tu couvres et tu baisses au minimum"
        ],
        "answer": 1,
        "explanation": "Une viande accroche souvent au début. Quand la croûte est formée, elle se détache plus facilement."
      },
      {
        "q": "Une pièce épaisse est bien dorée dehors mais froide au centre. Quelle stratégie est la meilleure la prochaine fois ?",
        "options": [
          "Saisir puis finir plus doucement",
          "Saisir encore plus fort jusqu’à noircissement",
          "Ne jamais la retourner",
          "La plonger dans l’eau après saisie"
        ],
        "answer": 0,
        "explanation": "La saisie crée la croûte. La cuisson à cœur demande ensuite une chaleur plus douce et du temps."
      },
      {
        "q": "Pourquoi une viande grise a-t-elle souvent moins de goût qu’une viande dorée ?",
        "options": [
          "Elle n’a pas développé autant d’arômes de coloration",
          "Elle contient moins de sel naturellement",
          "Elle est forcément crue",
          "Elle a perdu toute sa graisse"
        ],
        "answer": 0,
        "explanation": "La coloration développe des composés aromatiques. Sans croûte, le goût reste plus plat."
      }
    ],
    "linkedRecipes": [
      "steak-beurre-thym",
      "saumon-cote-peau"
    ]
  },
  {
    "id": "sauter-sans-detremper",
    "prerequisites": [
      "saisir-colorer-maillard"
    ],
    "moduleId": "cuissons-poele",
    "title": "Sauter sans détremper",
    "subtitle": "Cuire vite avec chaleur et espace",
    "duration": 10,
    "objectives": [
      "Sauter des légumes ou champignons sans accumulation d’eau",
      "Comprendre le rôle de la quantité dans la poêle",
      "Corriger une poêlée qui cuit à la vapeur au lieu de colorer"
    ],
    "concepts": [
      {
        "title": "Sauter, ce n’est pas remuer sans arrêt",
        "body": "Sauter signifie cuire rapidement dans peu de matière grasse avec une chaleur assez vive. Les aliments doivent toucher la poêle pour colorer. Si tu remues sans pause, tu empêches le contact prolongé et tu ralentis la coloration.",
        "tip": "Pour dorer, il faut parfois laisser tranquille."
      },
      {
        "title": "L’espace est une condition de cuisson",
        "body": "Une poêle trop remplie chute en température et retient l’humidité. Les aliments rendent de l’eau, puis cuisent dans cette vapeur. Pour sauter correctement, il vaut souvent mieux cuire en deux fois qu’entasser en une seule fois.",
        "tip": "Trop plein = vapeur, pas sauté."
      },
      {
        "title": "Le sel peut faire sortir l’eau",
        "body": "Saler tôt certains légumes ou champignons accélère la sortie d’eau. Ce n’est pas toujours mauvais : cela peut aider à les faire tomber. Mais si l’objectif est une coloration rapide, saler trop tôt peut compliquer la saisie.",
        "tip": "Saler tôt attendrit ; saler tard aide à colorer."
      },
      {
        "title": "Une poêlée se finit souvent hors feu",
        "body": "Les herbes fraîches, le citron, certaines huiles parfumées ou le fromage râpé se mettent souvent à la fin. Le feu fort qui sert à sauter peut abîmer ces finitions. Finir hors feu permet de garder fraîcheur, parfum et contrôle.",
        "tip": "Feu pour cuire, hors feu pour finir."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les champignons sont un excellent test",
      "content": "Les champignons contiennent beaucoup d’eau. Ils révèlent immédiatement une poêle trop froide ou trop chargée. Bien sautés, ils dorent et concentrent leur goût. Mal sautés, ils deviennent gris, spongieux et fades."
    },
    "quiz": [
      {
        "q": "Tes champignons rendent beaucoup d’eau et ne dorent pas. Quelle action corrige le mieux ?",
        "options": [
          "Couvrir pour accélérer",
          "Retirer une partie, remonter le feu et laisser évaporer",
          "Ajouter plus de champignons",
          "Ajouter beaucoup de sel immédiatement"
        ],
        "answer": 1,
        "explanation": "Il faut redonner de la surface et de la chaleur. Une poêle trop chargée piège l’humidité."
      },
      {
        "q": "Tu remues des courgettes toutes les 3 secondes et elles restent pâles. Pourquoi ?",
        "options": [
          "Elles n’ont pas assez de contact prolongé avec la poêle",
          "Elles sont trop vertes",
          "Elles manquent uniquement de citron",
          "Le sel empêche toujours la coloration"
        ],
        "answer": 0,
        "explanation": "La coloration demande un contact avec la surface chaude. Remuer trop souvent retarde ce contact."
      },
      {
        "q": "Tu veux des légumes sautés plus croquants et moins aqueux. Quelle stratégie est cohérente ?",
        "options": [
          "Les couper régulièrement, ne pas trop remplir la poêle et saler plutôt en fin",
          "Les couvrir dès le départ",
          "Les cuire dans beaucoup d’eau",
          "Les laisser en gros morceaux irréguliers"
        ],
        "answer": 0,
        "explanation": "Régularité, chaleur, espace et salage maîtrisé donnent une poêlée plus nette."
      },
      {
        "q": "Tu ajoutes du basilic frais dans une poêle très chaude et il noircit. Que fallait-il faire ?",
        "options": [
          "L’ajouter hors du feu ou au dernier moment",
          "Le cuire plus longtemps",
          "Le saler fortement avant",
          "Le hacher plus grossièrement uniquement"
        ],
        "answer": 0,
        "explanation": "Les herbes fraîches sont fragiles. La finition hors feu garde couleur et parfum."
      }
    ],
    "linkedRecipes": [
      "champignons-sautes",
      "legumes-sautes-maitrises"
    ]
  },
  {
    "id": "cuire-au-beurre-arroser",
    "prerequisites": [
      "sauter-sans-detremper"
    ],
    "moduleId": "cuissons-poele",
    "title": "Cuire au beurre et arroser",
    "subtitle": "Utiliser le gras pour parfumer et protéger",
    "duration": 10,
    "objectives": [
      "Comprendre quand utiliser huile, beurre ou les deux",
      "Maîtriser l’arrosage au beurre sans brûler",
      "Utiliser les aromates pour parfumer une cuisson courte"
    ],
    "concepts": [
      {
        "title": "L’huile pour la chaleur, le beurre pour le goût",
        "body": "L’huile supporte mieux les températures élevées que le beurre entier. Le beurre apporte du goût, mais ses particules de lait brûlent plus vite. Une technique sûre consiste à saisir d’abord avec de l’huile, puis ajouter le beurre quand la chaleur baisse légèrement.",
        "tip": "Huile pour saisir, beurre pour parfumer."
      },
      {
        "title": "Le beurre mousseux",
        "body": "Quand le beurre fond, il mousse parce que son eau s’évapore. Tant qu’il mousse doucement et sent bon, il peut nourrir la cuisson. Quand il devient noir ou sent âcre, il brûle et donne de l’amertume. La couleur du beurre est donc un vrai signe de cuisson.",
        "tip": "Noisette oui, noir non."
      },
      {
        "title": "Arroser pour cuire et parfumer",
        "body": "Arroser consiste à incliner la poêle et verser le beurre chaud sur la pièce avec une cuillère. Cela parfume la surface, accélère légèrement la cuisson du dessus et aide à répartir les arômes. C’est utile pour steak, poisson épais, volaille ou légumes rôtis à la poêle.",
        "tip": "Le beurre devient une petite cascade aromatique."
      },
      {
        "title": "Aromates : ail, thym, laurier, romarin",
        "body": "Les aromates parfument le beurre, puis le beurre parfume l’aliment. L’ail en chemise brûle moins vite que l’ail haché. Les herbes robustes comme thym ou romarin supportent mieux la chaleur que le persil ou le basilic.",
        "tip": "Aromate fragile = fin de cuisson."
      }
    ],
    "goFurther": {
      "title": "Beurre clarifié",
      "content": "Le beurre clarifié est débarrassé d’une partie de l’eau et des particules lactées. Il supporte mieux la chaleur que le beurre entier. Pour une app débutant/intermédiaire, la règle simple reste : huile au départ, beurre en finition."
    },
    "quiz": [
      {
        "q": "Tu mets beaucoup de beurre dès le début d’une saisie très chaude. Il noircit avant que la viande soit cuite. Quelle était l’erreur ?",
        "options": [
          "Le beurre entier brûle vite à haute température",
          "La viande était trop froide uniquement",
          "Il fallait ajouter plus de beurre",
          "Le thym empêche toujours la cuisson"
        ],
        "answer": 0,
        "explanation": "Le beurre apporte du goût mais supporte moins bien la haute température. Il vaut mieux commencer à l’huile puis ajouter le beurre ensuite."
      },
      {
        "q": "Tu veux parfumer un steak avec ail et thym sans brûler l’ail. Quelle option est la plus sûre ?",
        "options": [
          "Ail haché dès le début à feu très fort",
          "Ail en chemise et thym ajoutés avec le beurre en cours ou fin de cuisson",
          "Ail cru posé sur la viande après 20 minutes",
          "Ail brûlé puis retiré"
        ],
        "answer": 1,
        "explanation": "L’ail en chemise protège mieux de la brûlure. Le beurre sert de support aromatique."
      },
      {
        "q": "Pourquoi incliner la poêle pour arroser au beurre ?",
        "options": [
          "Pour regrouper le beurre et le verser facilement sur l’aliment",
          "Pour refroidir la viande",
          "Pour empêcher toute coloration",
          "Pour retirer le sel"
        ],
        "answer": 0,
        "explanation": "Incliner la poêle crée une réserve de beurre chaud. La cuillère permet de nourrir la surface régulièrement."
      },
      {
        "q": "Ton beurre sent âcre et devient noir. Que fais-tu ?",
        "options": [
          "Tu continues pour renforcer le goût",
          "Tu arrêtes, retires ou changes le beurre avant qu’il donne de l’amertume",
          "Tu ajoutes du sucre",
          "Tu couvres pour enfermer l’odeur"
        ],
        "answer": 1,
        "explanation": "Le beurre brûlé donne une amertume marquée. Il vaut mieux l’arrêter que tenter de masquer le goût."
      }
    ],
    "linkedRecipes": [
      "steak-beurre-thym",
      "saumon-cote-peau"
    ]
  },
  {
    "id": "corriger-cuisson-poele",
    "prerequisites": [
      "cuire-au-beurre-arroser"
    ],
    "moduleId": "cuissons-poele",
    "title": "Corriger une cuisson à la poêle",
    "subtitle": "Diagnostiquer avant de rater",
    "duration": 10,
    "objectives": [
      "Reconnaître une poêle trop froide, trop chaude ou trop pleine",
      "Corriger une cuisson avant que le résultat soit perdu",
      "Adapter la méthode selon humidité, épaisseur et fragilité"
    ],
    "concepts": [
      {
        "title": "Poêle trop froide",
        "body": "Une poêle trop froide donne peu de bruit, peu de coloration et beaucoup d’humidité. L’aliment semble cuire, mais il sue plus qu’il ne saisit. La correction consiste à retirer une partie de la charge si besoin, remonter le feu et laisser l’eau s’évaporer avant de chercher la couleur.",
        "tip": "Silence + humidité = chaleur insuffisante."
      },
      {
        "title": "Poêle trop chaude",
        "body": "Une poêle trop chaude fume fortement, brûle les sucs et colore trop vite. La surface noircit avant que l’intérieur soit prêt. Il faut baisser, déplacer la poêle hors du feu quelques secondes, ou ajouter un élément adapté comme une noix de beurre seulement quand la température est redevenue contrôlable.",
        "tip": "Noir trop vite = feu trop agressif."
      },
      {
        "title": "Poêle trop pleine",
        "body": "Même avec un feu fort, une poêle trop pleine chute en température. Les aliments se touchent, l’humidité reste piégée et la coloration devient impossible. La bonne correction n’est pas d’ajouter plus d’huile, mais de cuire en plusieurs fois.",
        "tip": "La place est un ingrédient invisible."
      },
      {
        "title": "Aliment trop épais ou trop fragile",
        "body": "Si un aliment est épais, la poêle seule peut brûler l’extérieur avant de cuire le cœur. Si un aliment est fragile, une chaleur trop forte peut le casser ou le dessécher. Savoir corriger, c’est parfois changer de méthode : couvrir brièvement, baisser, finir au four ou passer à la vapeur.",
        "tip": "Changer de méthode n’est pas tricher : c’est cuisiner."
      }
    ],
    "goFurther": {
      "title": "Diagnostic en 10 secondes",
      "content": "Regarde la couleur, écoute le bruit, observe l’humidité et sens les sucs. Si c’est pâle et humide : manque de chaleur ou trop de charge. Si c’est noir et sec : excès de chaleur. Si c’est doré mais cru dedans : finir plus doucement."
    },
    "quiz": [
      {
        "q": "Tes légumes sont pâles, humides et la poêle ne fait presque plus de bruit. Que fais-tu ?",
        "options": [
          "Tu couvres pour garder encore plus d’humidité",
          "Tu retires une partie si nécessaire, remontes le feu et laisses évaporer",
          "Tu ajoutes beaucoup d’huile froide",
          "Tu ajoutes du citron immédiatement"
        ],
        "answer": 1,
        "explanation": "Le problème est l’humidité et la perte de température. Il faut redonner chaleur et espace."
      },
      {
        "q": "Ton steak noircit en surface alors que le centre est encore froid. Quelle correction est la plus logique ?",
        "options": [
          "Continuer à feu maximal",
          "Baisser le feu et finir plus doucement, voire au four",
          "Ajouter de l’eau froide sur le steak",
          "Le couper immédiatement en très petits morceaux sans repos"
        ],
        "answer": 1,
        "explanation": "La surface a reçu trop de chaleur par rapport au centre. Il faut ralentir l’extérieur et laisser le cœur cuire."
      },
      {
        "q": "Tu as mis trop de champignons dans la poêle. Quelle mauvaise solution est tentante mais peu efficace ?",
        "options": [
          "Cuire en deux fois",
          "Ajouter plus d’huile en espérant mieux colorer",
          "Utiliser une poêle plus grande",
          "Laisser l’eau s’évaporer avant de finir"
        ],
        "answer": 1,
        "explanation": "Le problème n’est pas le manque de gras, mais l’excès d’eau et le manque de surface. Plus d’huile ne règle pas la vapeur."
      },
      {
        "q": "Un filet de poisson commence à se casser quand tu le retournes. Que peux-tu en déduire ?",
        "options": [
          "Il a peut-être été déplacé trop tôt ou manipulé trop brutalement",
          "Il faut le retourner plus souvent",
          "Il manque forcément de farine",
          "La chair devient plus solide quand on la presse"
        ],
        "answer": 0,
        "explanation": "Un poisson fragile doit être manipulé quand la surface est prête et avec un outil large. Forcer trop tôt casse les feuillets."
      }
    ],
    "linkedRecipes": [
      "champignons-sautes",
      "saumon-cote-peau"
    ]
  },
  {
    "id": "comprendre-four",
    "moduleId": "four-rotissage-gratins",
    "title": "Comprendre son four",
    "subtitle": "Chaleur tournante, statique, grill et inertie",
    "duration": 10,
    "prerequisites": [
      "corriger-cuisson-poele"
    ],
    "objectives": [
      "Choisir le mode de four selon le résultat recherché",
      "Comprendre pourquoi temps et températures sont indicatifs",
      "Adapter la cuisson à l’épaisseur, au plat et au matériel"
    ],
    "concepts": [
      {
        "title": "Un four n’est pas une température parfaite",
        "body": "Deux fours réglés à 180°C ne cuisent pas toujours pareil. Certains chauffent plus fort au fond, d’autres par le haut, d’autres perdent beaucoup de chaleur à l’ouverture. Une température de recette donne un point de départ, pas une vérité absolue. Il faut apprendre à lire le résultat : coloration, texture, humidité, cœur cuit ou non.",
        "tip": "Le four donne un cadre ; les signes donnent la vérité."
      },
      {
        "title": "Chaleur tournante",
        "body": "La chaleur tournante fait circuler l’air chaud avec un ventilateur. Elle favorise une cuisson plus homogène et accélère souvent l’évaporation. Elle convient bien aux légumes rôtis, plaques multiples, volailles, biscuits ou cuissons où l’on veut sécher et colorer. Elle peut en revanche dessécher les préparations fragiles si la température est trop élevée.",
        "tip": "Chaleur tournante = plus d’air, donc plus d’évaporation."
      },
      {
        "title": "Chaleur statique",
        "body": "La chaleur statique chauffe sans ventilation forte. Elle est plus douce pour les tartes, certains gratins, les flans, les soufflés et les préparations qui doivent cuire sans trop sécher en surface. Elle demande parfois plus de temps, mais donne une cuisson moins agressive.",
        "tip": "Statique = plus doux, souvent plus régulier pour les préparations fragiles."
      },
      {
        "title": "Le grill n’est pas une cuisson complète",
        "body": "Le grill chauffe très fort par le haut. Il sert à gratiner, colorer ou finir une surface, pas à cuire à cœur un aliment épais. Si le centre est cru, le grill brûlera le dessus avant de résoudre le problème. Pour cuire à cœur, il faut du temps et une chaleur plus enveloppante.",
        "tip": "Le grill finit une surface, il ne remplace pas une cuisson."
      }
    ],
    "goFurther": {
      "title": "Pourquoi préchauffer",
      "content": "Le préchauffage évite de commencer la cuisson dans une zone tiède et instable. Pour rôtir, saisir au four ou cuire une pâte, un four déjà chaud aide à fixer la structure et à lancer l’évaporation. Pour certaines cuissons longues, le préchauffage est moins critique, mais il reste utile pour contrôler le temps."
    },
    "quiz": [
      {
        "q": "Tes légumes mettent longtemps à colorer au four et rendent beaucoup d’eau. Quel diagnostic est le plus probable ?",
        "options": [
          "Le four n’était pas assez chaud, la plaque trop remplie, ou l’air ne circulait pas assez",
          "Les légumes ont été trop salés uniquement à la fin",
          "Le four était forcément trop chaud",
          "La cuisson aurait été meilleure avec un couvercle fermé"
        ],
        "answer": 0,
        "explanation": "Pour rôtir, il faut chaleur, espace et évaporation. Une plaque trop chargée ou un four tiède transforme souvent le rôtissage en étuvage."
      },
      {
        "q": "Tu veux dorer rapidement le dessus d’un gratin déjà cuit. Quel mode est le plus logique ?",
        "options": [
          "Grill court en surveillant",
          "Four froid pendant 40 minutes",
          "Vapeur douce",
          "Chaleur très basse avec couvercle"
        ],
        "answer": 0,
        "explanation": "Le grill est adapté à une finition de surface. Il faut surveiller car la coloration peut basculer vite vers le brûlé."
      },
      {
        "q": "Une recette indique 25 minutes à 180°C, mais ton plat est encore pâle et humide. Quelle réaction est la plus intelligente ?",
        "options": [
          "Sortir quand même, car le temps est écrit",
          "Prolonger ou ajuster la température en observant couleur et texture",
          "Ajouter de l’eau pour accélérer la coloration",
          "Couvrir hermétiquement"
        ],
        "answer": 1,
        "explanation": "Le temps est indicatif. Le résultat attendu se vérifie avec des signes visibles : couleur, texture, évaporation et cuisson à cœur."
      },
      {
        "q": "Tu utilises le grill pour cuire une grosse pièce crue. Que risques-tu ?",
        "options": [
          "Dessus brûlé avant cœur cuit",
          "Cuisson parfaitement homogène",
          "Chair plus juteuse automatiquement",
          "Aucune coloration"
        ],
        "answer": 0,
        "explanation": "Le grill agit surtout en surface. Une pièce épaisse demande une chaleur plus progressive pour cuire le centre."
      }
    ],
    "linkedRecipes": [
      "legumes-rotis-plaque",
      "gratin-dauphinois-simple"
    ]
  },
  {
    "id": "rotir-legumes",
    "prerequisites": [
      "comprendre-four"
    ],
    "moduleId": "four-rotissage-gratins",
    "title": "Rôtir des légumes",
    "subtitle": "Concentrer les saveurs sans les détremper",
    "duration": 10,
    "objectives": [
      "Préparer des légumes pour favoriser évaporation et coloration",
      "Adapter taille, matière grasse et espace sur plaque",
      "Corriger des légumes pâles, mous ou brûlés"
    ],
    "concepts": [
      {
        "title": "Rôtir, c’est concentrer",
        "body": "Au four, les légumes perdent une partie de leur eau. Le goût devient plus concentré, les sucres naturels ressortent et la surface peut colorer. Une carotte rôtie n’a pas le même goût qu’une carotte bouillie : elle est plus douce, plus intense, parfois légèrement caramélisée.",
        "tip": "Rôtir = enlever de l’eau pour gagner du goût."
      },
      {
        "title": "La taille contrôle le rythme",
        "body": "Des morceaux trop petits brûlent avant d’être fondants. Des morceaux trop gros restent durs pendant que l’extérieur sèche. La bonne taille dépend du légume : une carotte dense se coupe plus fin qu’une courgette, une pomme de terre demande un morceau régulier, un oignon peut rester plus gros pour fondre lentement.",
        "tip": "Même four, tailles différentes, résultats différents."
      },
      {
        "title": "L’espace sur la plaque",
        "body": "Si les légumes se touchent trop, l’eau qu’ils rendent reste piégée. Ils cuisent à la vapeur au lieu de rôtir. Une plaque bien espacée donne plus de coloration et une texture plus nette. Pour une grande quantité, mieux vaut deux plaques qu’une montagne de légumes.",
        "tip": "Plaque pleine = vapeur ; plaque espacée = rôtissage."
      },
      {
        "title": "Matière grasse et assaisonnement",
        "body": "La matière grasse aide la chaleur à circuler en surface et limite le dessèchement. Trop peu : légumes secs et ternes. Trop : légumes gras et mous. Le sel peut être ajouté avant pour assaisonner et aider à sortir l’eau, mais les finitions fraîches comme citron, herbes ou fromage se mettent souvent après cuisson.",
        "tip": "Four pour concentrer, finition pour réveiller."
      }
    ],
    "goFurther": {
      "title": "Retourner ou ne pas retourner",
      "content": "Retourner à mi-cuisson aide à colorer plusieurs faces, mais ouvrir trop souvent fait perdre de la chaleur. Pour des légumes coupés petits, une seule rotation suffit souvent. Pour des grosses pièces, on peut laisser une face bien colorer avant de toucher."
    },
    "quiz": [
      {
        "q": "Tes légumes rôtis sont mous, pâles et rendent du liquide sur la plaque. Quelle cause est la plus probable ?",
        "options": [
          "Plaque trop chargée ou four pas assez chaud",
          "Trop peu d’eau ajoutée dans la plaque",
          "Herbes ajoutées trop tard",
          "Légumes coupés trop régulièrement"
        ],
        "answer": 0,
        "explanation": "Quand l’eau ne s’évapore pas, les légumes étuvent. Il faut plus d’espace, plus de chaleur ou moins de quantité par plaque."
      },
      {
        "q": "Tu rôtis carottes et courgettes en morceaux de même taille. La courgette s’écrase avant que la carotte soit tendre. Que fallait-il adapter ?",
        "options": [
          "La taille ou le moment d’ajout selon la densité des légumes",
          "La couleur de la plaque",
          "Le sel uniquement en fin de cuisson",
          "Le nombre d’herbes"
        ],
        "answer": 0,
        "explanation": "La carotte est plus dense que la courgette. Il faut la couper plus fin, la précuire ou ajouter la courgette plus tard."
      },
      {
        "q": "Tes légumes commencent à brûler en surface mais restent fermes au centre. Quelle correction est la plus cohérente ?",
        "options": [
          "Baisser légèrement la température et prolonger",
          "Passer en grill plus fort",
          "Ajouter du sucre et continuer",
          "Les entasser pour garder l’humidité"
        ],
        "answer": 0,
        "explanation": "La surface va trop vite par rapport au cœur. Une chaleur moins agressive laisse le centre cuire sans noircir."
      },
      {
        "q": "Tu veux ajouter persil et citron à des légumes rôtis. Quel moment est le plus logique ?",
        "options": [
          "En finition, à la sortie du four",
          "Au début pendant 45 minutes",
          "Quand le four est encore froid",
          "Uniquement avant d’éplucher les légumes"
        ],
        "answer": 0,
        "explanation": "Le persil garde mieux son parfum et le citron sa vivacité s’ils sont ajoutés après la cuisson."
      }
    ],
    "linkedRecipes": [
      "legumes-rotis-plaque"
    ]
  },
  {
    "id": "rotir-viande-volaille",
    "prerequisites": [
      "rotir-legumes"
    ],
    "moduleId": "four-rotissage-gratins",
    "title": "Rôtir une viande ou une volaille",
    "subtitle": "Colorer dehors, cuire juste dedans",
    "duration": 11,
    "objectives": [
      "Comprendre la différence entre coloration et cuisson à cœur",
      "Utiliser température interne, repos et arrosage",
      "Éviter une viande dorée dehors mais sèche dedans"
    ],
    "concepts": [
      {
        "title": "La peau ou la surface doit sécher",
        "body": "Pour rôtir correctement, la surface doit être la plus sèche possible. Une peau humide commence par évaporer de l’eau au lieu de croustiller. Sécher une volaille, saler à l’avance ou laisser à découvert au froid peut améliorer la coloration et la peau.",
        "tip": "Peau sèche = peau qui rôtit, pas qui vapeur."
      },
      {
        "title": "Coloration et cuisson à cœur sont deux choses différentes",
        "body": "Une peau dorée ne prouve pas que le centre est cuit. Une viande peut être très colorée dehors et trop crue dedans, ou cuite à cœur mais pâle dehors. Le bon rôtissage cherche les deux : une surface savoureuse et un cœur juste.",
        "tip": "La couleur parle de surface, pas toujours du cœur."
      },
      {
        "title": "Le repos fait partie de la cuisson",
        "body": "Après le four, la chaleur continue de circuler. Le repos permet aussi aux jus de mieux se répartir avant découpe. Couper une volaille ou un rôti immédiatement donne souvent plus de jus dans la planche que dans la viande.",
        "tip": "Le repos n’est pas une pause, c’est une étape."
      },
      {
        "title": "Arroser, protéger, adapter",
        "body": "Arroser avec le jus ou le gras du plat peut aider à parfumer et protéger certaines surfaces. Mais ouvrir le four trop souvent fait chuter la chaleur. Pour une volaille, on peut aussi protéger la poitrine avec du beurre ou démarrer avec une position qui favorise une cuisson plus équilibrée.",
        "tip": "Arroser utilement, pas nerveusement."
      }
    ],
    "goFurther": {
      "title": "Thermomètre et précision",
      "content": "Le thermomètre n’enlève pas l’instinct, il l’éduque. En reliant une température à une texture, tu comprends mieux ce que signifie saignant, rosé, juteux ou sec. C’est particulièrement utile pour volailles, porc et grosses pièces."
    },
    "quiz": [
      {
        "q": "Ton poulet a une peau dorée mais le jus de la cuisse ressort rosé. Quelle conclusion est correcte ?",
        "options": [
          "La peau dorée ne suffit pas à prouver la cuisson à cœur",
          "Le poulet est forcément trop cuit",
          "Il faut seulement ajouter du citron",
          "La cuisson est terminée car la couleur est belle"
        ],
        "answer": 0,
        "explanation": "La couleur renseigne surtout la surface. La cuisson à cœur se vérifie dans la partie épaisse, idéalement avec jus clair ou thermomètre."
      },
      {
        "q": "Tu coupes un rôti dès la sortie du four et beaucoup de jus s’écoule. Quelle étape a été négligée ?",
        "options": [
          "Le repos",
          "Le préchauffage uniquement",
          "Le choix de la garniture",
          "Le lavage du plat"
        ],
        "answer": 0,
        "explanation": "Le repos limite la fuite des jus et donne une découpe plus propre."
      },
      {
        "q": "Ta volaille est sèche au niveau des blancs mais les cuisses sont juste cuites. Quel problème classique cela montre-t-il ?",
        "options": [
          "Les différentes parties ne cuisent pas au même rythme",
          "La peau empêche toute cuisson",
          "Le four ne peut pas cuire les volailles",
          "Le sel rend toujours le blanc sec"
        ],
        "answer": 0,
        "explanation": "Les blancs sèchent plus vite que les cuisses. Il faut parfois protéger la poitrine ou adapter la position et le repos."
      },
      {
        "q": "Pourquoi sécher une volaille avant de la rôtir ?",
        "options": [
          "Pour éviter que l’énergie serve d’abord à évaporer l’eau de surface",
          "Pour empêcher la viande de cuire",
          "Pour remplacer l’assaisonnement",
          "Pour rendre la chair froide"
        ],
        "answer": 0,
        "explanation": "Une surface humide retarde la coloration et le croustillant. Sécher accélère le vrai rôtissage."
      }
    ],
    "linkedRecipes": [
      "poulet-roti-jus-simple"
    ]
  },
  {
    "id": "gratiner-sans-dessecher",
    "prerequisites": [
      "rotir-viande-volaille"
    ],
    "moduleId": "four-rotissage-gratins",
    "title": "Gratiner sans dessécher",
    "subtitle": "Obtenir une surface dorée et un intérieur moelleux",
    "duration": 10,
    "objectives": [
      "Comprendre le rôle du gratinage comme finition",
      "Protéger l’intérieur d’un plat pendant la coloration",
      "Corriger un gratin brûlé dessus ou liquide dessous"
    ],
    "concepts": [
      {
        "title": "Gratiner, c’est finir une surface",
        "body": "Le gratinage sert à colorer le dessus d’un plat avec fromage, chapelure, crème, beurre ou sauce. Il donne une surface dorée, parfois croustillante, mais ne doit pas dessécher tout l’intérieur. Un gratin réussi oppose souvent dessus coloré et cœur moelleux.",
        "tip": "Le gratinage est une finition, pas une punition."
      },
      {
        "title": "L’intérieur doit être presque prêt",
        "body": "Si le cœur du plat est encore cru, le dessus risque de brûler avant que l’intérieur soit cuit. Pour un gratin dauphinois, les pommes de terre doivent cuire doucement dans le liquide. Pour un gratin de légumes déjà cuits, le four sert surtout à chauffer et colorer.",
        "tip": "Dessus doré ne rattrape pas dessous cru."
      },
      {
        "title": "Liquide, amidon, crème, fromage",
        "body": "Un gratin se tient grâce à l’équilibre entre liquide et éléments qui absorbent ou lient. Trop de liquide : gratin aqueux. Pas assez : gratin sec. L’amidon des pommes de terre, une béchamel, une crème réduite ou du fromage peuvent aider à obtenir une texture nappante.",
        "tip": "Un gratin doit être lié, pas noyé."
      },
      {
        "title": "Gérer la coloration",
        "body": "Si le dessus colore trop vite, il faut baisser, couvrir légèrement ou descendre le plat. Si le dessus reste pâle alors que le cœur est cuit, un passage court sous le grill peut finir le travail. La surveillance est essentielle, car quelques minutes changent tout.",
        "tip": "Grill = finition courte, yeux ouverts."
      }
    ],
    "goFurther": {
      "title": "Repos du gratin",
      "content": "Un gratin sorti du four est souvent trop liquide pour être coupé proprement. Quelques minutes de repos permettent aux liquides de se stabiliser et à la texture de se tenir. Comme pour une viande, le repos améliore le service."
    },
    "quiz": [
      {
        "q": "Ton gratin est brûlé dessus mais les pommes de terre sont encore fermes. Quel est le diagnostic ?",
        "options": [
          "La surface a coloré plus vite que l’intérieur n’a cuit",
          "Il y avait trop peu de fromage uniquement",
          "Le plat était trop froid au service",
          "Il fallait ajouter plus de chapelure au début"
        ],
        "answer": 0,
        "explanation": "Il faut cuire plus doucement ou couvrir au début, puis gratiner en finition."
      },
      {
        "q": "Ton gratin rend beaucoup de liquide dans l’assiette. Quelle cause est probable ?",
        "options": [
          "Trop de liquide, légumes mal égouttés ou liaison insuffisante",
          "Four trop bien préchauffé",
          "Fromage ajouté trop tard uniquement",
          "Trop de repos après cuisson"
        ],
        "answer": 0,
        "explanation": "Un gratin doit équilibrer humidité et liaison. Des légumes aqueux ou une crème trop liquide peuvent le détremper."
      },
      {
        "q": "Le cœur de ton gratin est cuit mais le dessus manque de couleur. Que fais-tu ?",
        "options": [
          "Passage court sous le grill en surveillant",
          "Ajouter de l’eau et couvrir",
          "Cuire 1 heure de plus à basse température",
          "Remuer tout le gratin"
        ],
        "answer": 0,
        "explanation": "Quand l’intérieur est prêt, le grill peut colorer la surface rapidement sans recuire tout le plat."
      },
      {
        "q": "Pourquoi laisser reposer un gratin quelques minutes avant service ?",
        "options": [
          "Pour stabiliser les liquides et faciliter le service",
          "Pour le rendre cru",
          "Pour annuler le gratinage",
          "Pour supprimer le sel"
        ],
        "answer": 0,
        "explanation": "Le repos aide le gratin à se tenir et évite une assiette trop liquide."
      }
    ],
    "linkedRecipes": [
      "gratin-dauphinois-simple"
    ]
  },
  {
    "id": "principe-cuisson-longue",
    "moduleId": "mijotes-braisages",
    "title": "Pourquoi cuire longtemps ?",
    "subtitle": "Transformer le ferme en fondant",
    "duration": 10,
    "prerequisites": [
      "gratiner-sans-dessecher"
    ],
    "objectives": [
      "Comprendre pourquoi certains morceaux demandent du temps",
      "Différencier tendreté immédiate et tendreté par cuisson longue",
      "Reconnaître une cuisson longue réussie"
    ],
    "concepts": [
      {
        "title": "Tous les morceaux ne se cuisent pas pareil",
        "body": "Un filet tendre supporte une cuisson courte. Une joue, un paleron, une épaule ou un jarret demandent du temps. Ces morceaux travaillent beaucoup dans l’animal et contiennent davantage de tissu conjonctif. Cuits vite, ils restent durs. Cuits longtemps et doucement, ils deviennent fondants.",
        "tip": "Morceau qui travaille = cuisson qui prend son temps."
      },
      {
        "title": "Le collagène devient gélatine",
        "body": "Dans les cuissons longues, le collagène se transforme progressivement en gélatine. C’est elle qui donne une sensation fondante et une sauce brillante. Une cuisson trop courte donne une viande ferme ; une cuisson longue et douce donne une viande qui se détache sans couteau.",
        "tip": "Le fondant se construit lentement."
      },
      {
        "title": "Frémir, pas bouillir violemment",
        "body": "Une ébullition forte secoue, évapore vite et peut durcir les fibres. Un mijoté doit vivre doucement : petites bulles, chaleur régulière, couvercle partiel ou total selon la réduction souhaitée. Le liquide doit bouger, mais pas agresser.",
        "tip": "Un mijoté chuchote, il ne crie pas."
      },
      {
        "title": "Le temps ne suffit pas : il faut lire la texture",
        "body": "Un temps de recette donne une estimation. La vraie fin de cuisson se lit à la fourchette : la viande cède, les légumes sont tendres, la sauce devient nappante. Si la viande résiste encore, elle n’est pas prête, même si le minuteur dit le contraire.",
        "tip": "La fourchette décide plus que l’horloge."
      }
    ],
    "goFurther": {
      "title": "Pourquoi c’est souvent meilleur le lendemain",
      "content": "Les plats mijotés gagnent souvent en cohérence après repos. Les graisses se figent et peuvent être retirées, les arômes se diffusent, la sauce se stabilise. Le réchauffage doit rester doux pour ne pas casser le travail de cuisson."
    },
    "quiz": [
      {
        "q": "Ton paleron mijoté depuis 1h est encore dur. Quelle décision est la plus juste ?",
        "options": [
          "Continuer doucement : le collagène n’a probablement pas encore assez fondu",
          "Le servir immédiatement car le temps minimal est passé",
          "Le saisir à feu très fort dans une poêle sèche",
          "Ajouter beaucoup de sel pour l’attendrir instantanément"
        ],
        "answer": 0,
        "explanation": "Un morceau à mijoter devient tendre avec le temps. S’il résiste, il faut prolonger doucement plutôt que brutaliser."
      },
      {
        "q": "Ton mijoté bout violemment depuis 40 minutes. Quelle conséquence est probable ?",
        "options": [
          "La viande risque de devenir sèche ou filandreuse",
          "La sauce sera forcément plus douce",
          "Le collagène disparaît immédiatement",
          "La cuisson sera toujours meilleure"
        ],
        "answer": 0,
        "explanation": "Les gros bouillons agressent les fibres et évaporent vite. Le mijotage demande un frémissement régulier."
      },
      {
        "q": "Pourquoi une joue de bœuf n’est-elle pas adaptée à une cuisson rapide comme un steak ?",
        "options": [
          "Elle contient plus de tissu conjonctif et demande une cuisson longue",
          "Elle ne contient aucune saveur",
          "Elle ne peut pas être salée",
          "Elle cuit toujours en 3 minutes"
        ],
        "answer": 0,
        "explanation": "Les morceaux riches en collagène doivent cuire longtemps pour devenir fondants."
      },
      {
        "q": "Comment reconnais-tu une viande mijotée prête ?",
        "options": [
          "Elle se détache facilement à la fourchette",
          "Elle est noire en surface",
          "Elle rebondit comme du caoutchouc",
          "Elle flotte forcément au-dessus du liquide"
        ],
        "answer": 0,
        "explanation": "La texture est le critère principal. La viande doit céder sans effort."
      }
    ],
    "linkedRecipes": [
      "boeuf-carottes-fondant"
    ]
  },
  {
    "id": "braiser-en-trois-temps",
    "prerequisites": [
      "principe-cuisson-longue"
    ],
    "moduleId": "mijotes-braisages",
    "title": "Braiser en trois temps",
    "subtitle": "Saisir, mouiller, cuire doucement",
    "duration": 11,
    "objectives": [
      "Construire le goût par la saisie et les sucs",
      "Mouiller à bonne hauteur pour braiser sans noyer",
      "Conduire une cuisson longue régulière"
    ],
    "concepts": [
      {
        "title": "Temps 1 : saisir",
        "body": "La saisie crée une coloration sur la viande et des sucs au fond de la cocotte. Ces sucs deviendront la base du goût de la sauce. Si la viande est entassée, elle rend de l’eau et grise au lieu de colorer. Il vaut mieux saisir en plusieurs fois.",
        "tip": "Pas de coloration au départ, sauce moins profonde à l’arrivée."
      },
      {
        "title": "Temps 2 : déglacer et mouiller",
        "body": "Après la saisie, on ajoute souvent aromates, légumes, tomate ou farine selon la recette, puis un liquide : vin, bouillon, eau, fond. Le déglaçage dissout les sucs. Le liquide ne doit pas forcément couvrir entièrement : braiser, c’est cuire avec humidité et concentration, pas faire une soupe.",
        "tip": "Mouiller pour cuire, pas noyer."
      },
      {
        "title": "Temps 3 : cuire doucement",
        "body": "La cocotte peut aller sur feu doux ou au four modéré. Le four donne souvent une chaleur plus enveloppante et régulière. Le couvercle limite l’évaporation ; entrouvert, il laisse réduire. Le choix dépend de la texture de sauce recherchée.",
        "tip": "Couvercle fermé garde, entrouvert concentre."
      },
      {
        "title": "Les légumes n’ont pas tous le même timing",
        "body": "Dans un braisage, la viande peut demander 2 à 3 heures. Des carottes, pommes de terre ou champignons peuvent être ajoutés plus tard pour ne pas se défaire. Tout mettre au début est simple, mais pas toujours bon pour la texture.",
        "tip": "Ce qui cuit vite entre plus tard."
      }
    ],
    "goFurther": {
      "title": "Singer ou ne pas singer",
      "content": "Singer consiste à saupoudrer un peu de farine sur les éléments revenus avant de mouiller. La farine aide à lier la sauce. Trop de farine donne une sauce lourde ; pas assez de cuisson après ajout peut laisser un goût farineux."
    },
    "quiz": [
      {
        "q": "Tu mets toute la viande froide d’un coup dans la cocotte. Elle rend beaucoup d’eau et ne colore pas. Quelle erreur as-tu faite ?",
        "options": [
          "Tu as surchargé la cocotte et fait chuter la température",
          "Tu as utilisé trop peu de liquide final",
          "Tu as trop attendu avant de servir",
          "Tu as ajouté les carottes trop tard"
        ],
        "answer": 0,
        "explanation": "La saisie demande chaleur et espace. Trop de viande d’un coup crée de la vapeur au lieu de la coloration."
      },
      {
        "q": "Pourquoi racler le fond après ajout du vin ou du bouillon ?",
        "options": [
          "Pour dissoudre les sucs et les intégrer à la sauce",
          "Pour refroidir la cocotte définitivement",
          "Pour retirer tout le goût",
          "Pour empêcher la viande de cuire"
        ],
        "answer": 0,
        "explanation": "Les sucs concentrent les arômes de saisie. Le déglaçage les transforme en base de sauce."
      },
      {
        "q": "Ton braisage a beaucoup de liquide et peu de goût. Quelle piste est la plus probable ?",
        "options": [
          "Trop de mouillage ou pas assez de réduction",
          "Viande trop bien colorée",
          "Cocotte trop propre",
          "Légumes ajoutés trop tard uniquement"
        ],
        "answer": 0,
        "explanation": "Trop de liquide dilue. Une réduction douce concentre le goût et donne une sauce plus nappante."
      },
      {
        "q": "Tes carottes sont en purée dans ton bœuf braisé. Que peux-tu changer la prochaine fois ?",
        "options": [
          "Les ajouter plus tard ou les couper plus gros",
          "Les râper très fin dès le début",
          "Les cuire à gros bouillons",
          "Les saler uniquement après trois jours"
        ],
        "answer": 0,
        "explanation": "Les légumes cuisent plus vite que certains morceaux de viande. Leur timing doit être adapté."
      }
    ],
    "linkedRecipes": [
      "boeuf-carottes-fondant"
    ]
  },
  {
    "id": "mijoter-sans-bouillir",
    "prerequisites": [
      "braiser-en-trois-temps"
    ],
    "moduleId": "mijotes-braisages",
    "title": "Mijoter sans bouillir",
    "subtitle": "Tenir une cuisson douce pendant longtemps",
    "duration": 10,
    "objectives": [
      "Maintenir un frémissement stable",
      "Utiliser couvercle, four ou feu doux selon le plat",
      "Éviter évaporation excessive, viande sèche et sauce trouble"
    ],
    "concepts": [
      {
        "title": "Le frémissement idéal",
        "body": "Un mijoté doit montrer quelques petites bulles régulières. Pas un calme total pendant des heures, pas une ébullition violente. Ce mouvement doux permet à la chaleur de travailler sans casser les aliments ni durcir les fibres.",
        "tip": "Quelques bulles suffisent."
      },
      {
        "title": "Feu direct ou four",
        "body": "Sur une plaque, la chaleur vient surtout du dessous et peut accrocher si le fond est mal surveillé. Au four, la chaleur enveloppe davantage la cocotte et peut donner une cuisson plus régulière. Pour les longues cuissons, le four modéré est souvent plus stable.",
        "tip": "Le four calme les mijotés nerveux."
      },
      {
        "title": "Couvercle et évaporation",
        "body": "Couvercle fermé : moins d’évaporation, plus d’humidité. Couvercle entrouvert : plus de réduction, goût plus concentré. Sans couvercle : évaporation rapide, risque de sauce trop réduite. Le couvercle est un outil de texture.",
        "tip": "Le couvercle règle la concentration."
      },
      {
        "title": "Écumer et dégraisser",
        "body": "Au début d’une cuisson longue, des impuretés peuvent remonter. Les retirer donne un jus plus net. En fin de cuisson, un excès de gras en surface peut alourdir la sauce ; le dégraissage améliore la lisibilité du goût.",
        "tip": "Un bon mijoté est riche, pas gras."
      }
    ],
    "goFurther": {
      "title": "Pourquoi une sauce trouble n’est pas toujours grave",
      "content": "Dans un plat familial, une sauce trouble peut rester bonne. Mais apprendre à écumer, cuire doucement et filtrer si nécessaire donne des jus plus nets. C’est une compétence qui servira ensuite aux fonds et sauces."
    },
    "quiz": [
      {
        "q": "Ton mijoté réduit trop vite et commence à accrocher. Quelle action est la plus cohérente ?",
        "options": [
          "Baisser le feu, ajouter un peu de liquide chaud et couvrir davantage",
          "Augmenter le feu pour finir plus vite",
          "Retirer toute la sauce",
          "Ajouter beaucoup de farine sans mélanger"
        ],
        "answer": 0,
        "explanation": "La cuisson est trop concentrée ou trop forte. Il faut restaurer l’humidité et stabiliser la chaleur."
      },
      {
        "q": "Ton plat mijote à gros bouillons avec le couvercle fermé. Que risques-tu ?",
        "options": [
          "Viande plus sèche et sauce moins nette",
          "Viande automatiquement plus tendre",
          "Aucun effet, un mijoté doit bouillir fort",
          "Sauce plus froide"
        ],
        "answer": 0,
        "explanation": "Les gros bouillons durcissent et secouent les aliments. Le mijotage demande une agitation douce."
      },
      {
        "q": "Tu veux concentrer une sauce en fin de mijotage. Que fais-tu ?",
        "options": [
          "Retirer ou entrouvrir le couvercle et laisser réduire doucement",
          "Ajouter beaucoup d’eau froide",
          "Couvrir hermétiquement et couper le feu",
          "Ajouter les herbes fraîches pendant 2 heures"
        ],
        "answer": 0,
        "explanation": "Réduire demande de laisser l’eau s’évaporer. Le couvercle doit donc être ouvert ou entrouvert."
      },
      {
        "q": "Une couche de gras épaisse flotte sur ton mijoté. Quelle correction améliore le goût ?",
        "options": [
          "Dégraisser partiellement",
          "Mélanger très fort pour tout incorporer",
          "Ajouter du sucre",
          "Faire bouillir plus fort"
        ],
        "answer": 0,
        "explanation": "Un peu de gras porte les arômes, trop de gras masque le goût et alourdit la sauce."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "reduire-sauce-mijotee",
    "prerequisites": [
      "mijoter-sans-bouillir"
    ],
    "moduleId": "mijotes-braisages",
    "title": "Réduire et finir une sauce mijotée",
    "subtitle": "Concentrer sans sursalage",
    "duration": 10,
    "objectives": [
      "Concentrer une sauce par réduction contrôlée",
      "Ajuster sel, acidité et gras en fin de cuisson",
      "Obtenir une texture nappante sans lourdeur"
    ],
    "concepts": [
      {
        "title": "Réduire concentre tout",
        "body": "Quand une sauce réduit, l’eau s’évapore mais le sel, le sucre, l’acidité, la gélatine et les arômes restent. Le goût devient plus intense. C’est pour cela qu’il faut saler prudemment au début et ajuster à la fin.",
        "tip": "Réduire concentre le goût, mais aussi les erreurs."
      },
      {
        "title": "Napper sans épaissir lourdement",
        "body": "Une bonne sauce mijotée peut napper grâce à la gélatine, à la réduction ou à une liaison légère. Trop de farine ou trop de réduction donne une sauce lourde. La texture idéale reste fluide, brillante et capable de tenir sur la viande.",
        "tip": "Nappant ne veut pas dire pâteux."
      },
      {
        "title": "Acidité finale",
        "body": "Un mijoté riche peut sembler lourd même s’il est bien salé. Une petite touche de vinaigre, de citron ou de moutarde peut réveiller la sauce. L’acidité finale ne doit pas dominer ; elle doit rendre le plat plus lisible.",
        "tip": "Un trait d’acide peut alléger sans retirer de richesse."
      },
      {
        "title": "Filtrer, monter, finir",
        "body": "Selon le plat, on peut filtrer une sauce, la réduire à part, puis la remettre avec la viande. Une noix de beurre hors du feu peut donner brillance et rondeur. Les herbes fraîches arrivent à la fin pour garder leur parfum.",
        "tip": "La finition donne le dernier niveau de précision."
      }
    ],
    "goFurther": {
      "title": "Réduire avec ou sans viande",
      "content": "Pour éviter de surcuire la viande, on peut la retirer quand elle est tendre, réduire la sauce seule, puis remettre la viande au dernier moment. C’est souvent plus précis."
    },
    "quiz": [
      {
        "q": "Tu sales fortement un mijoté au début, puis tu réduis la sauce 30 minutes. Que risques-tu ?",
        "options": [
          "Une sauce trop salée en fin de cuisson",
          "Une viande crue",
          "Une sauce sans goût",
          "Une cuisson plus froide"
        ],
        "answer": 0,
        "explanation": "La réduction évapore l’eau mais garde le sel. L’assaisonnement final doit attendre la concentration."
      },
      {
        "q": "Ta sauce est riche mais semble lourde et plate. Que testes-tu avant de rajouter du sel ?",
        "options": [
          "Une petite touche d’acidité",
          "Une grosse cuillère de farine",
          "De l’eau froide en grande quantité",
          "Une cuisson à gros bouillons pendant 2 heures"
        ],
        "answer": 0,
        "explanation": "L’acidité peut réveiller une sauce riche sans la sursaler ni l’alourdir."
      },
      {
        "q": "Ta viande est tendre mais la sauce trop liquide. Quelle méthode est la plus précise ?",
        "options": [
          "Retirer la viande, réduire la sauce seule, puis réunir",
          "Continuer à cuire la viande jusqu’à évaporation complète",
          "Ajouter du sel pour épaissir",
          "Mixer la viande dans la sauce"
        ],
        "answer": 0,
        "explanation": "Réduire la sauce seule évite de surcuire une viande déjà prête."
      },
      {
        "q": "Une sauce est très épaisse, farineuse et lourde. Quelle erreur est probable ?",
        "options": [
          "Liaison excessive ou farine mal cuite",
          "Trop d’herbes fraîches en finition",
          "Pas assez de gros bouillons",
          "Viande trop tendre"
        ],
        "answer": 0,
        "explanation": "Une sauce liée doit rester fluide. Trop de farine ou une cuisson insuffisante de la liaison donne une texture pâteuse."
      }
    ],
    "linkedRecipes": [
      "boeuf-carottes-fondant"
    ]
  },
  {
    "id": "saler-par-couches",
    "moduleId": "assaisonnement-equilibre",
    "title": "Saler par couches",
    "subtitle": "Construire le goût sans sursaler",
    "duration": 10,
    "prerequisites": [
      "reduire-sauce-mijotee"
    ],
    "objectives": [
      "Comprendre le rôle du sel au-delà du goût salé",
      "Assaisonner progressivement selon les étapes",
      "Éviter le plat fade ou trop salé en fin de cuisson"
    ],
    "concepts": [
      {
        "title": "Le sel révèle plus qu’il ne sale",
        "body": "Le sel ne sert pas seulement à rendre un plat salé. Il révèle les arômes, réduit certaines impressions d’amertume et donne plus de netteté au goût. Un plat fade n’a pas toujours besoin d’un ingrédient en plus : il a souvent besoin d’un assaisonnement plus juste.",
        "tip": "Le sel allume le goût."
      },
      {
        "title": "Saler par couches",
        "body": "Saler seulement à la fin donne souvent un goût de sel en surface. Saler par couches signifie assaisonner l’eau de cuisson, les légumes pendant qu’ils cuisent, la sauce pendant sa construction, puis ajuster à la fin. Chaque élément a alors du goût.",
        "tip": "Un plat bien salé n’a pas forcément un goût salé."
      },
      {
        "title": "Attention aux réductions",
        "body": "Quand une sauce réduit, le sel se concentre. Un bouillon, une sauce soja, un fromage, une charcuterie ou des anchois apportent déjà du sel. Avant d’ajouter une pincée, il faut penser à ce qui va encore réduire ou fondre dans le plat.",
        "tip": "Ce qui réduit concentre le sel."
      },
      {
        "title": "Goûter au bon moment",
        "body": "Goûter trop tôt peut être trompeur si la sauce doit réduire. Goûter trop tard ne laisse plus beaucoup de marge. Le bon réflexe est de goûter à plusieurs moments : avant réduction, après réduction, puis juste avant service.",
        "tip": "Goûter, corriger, regoûter."
      }
    ],
    "goFurther": {
      "title": "Sel fin, gros sel, fleur de sel",
      "content": "Le sel fin se dissout vite et sert à assaisonner pendant la cuisine. Le gros sel est utile pour l’eau de cuisson ou certaines cuissons en croûte. La fleur de sel sert plutôt en finition, pour apporter un relief croquant et ponctuel."
    },
    "quiz": [
      {
        "q": "Ta soupe est fade malgré beaucoup d’herbes. Que vérifies-tu en premier ?",
        "options": [
          "Le niveau de sel, car les arômes peuvent rester éteints sans assaisonnement",
          "La couleur de la casserole",
          "La taille du bol",
          "La quantité de poivre uniquement"
        ],
        "answer": 0,
        "explanation": "Les herbes ne compensent pas toujours un manque de sel. Le sel révèle les goûts déjà présents."
      },
      {
        "q": "Tu fais réduire une sauce déjà salée avec du bouillon. Quel risque surveiller ?",
        "options": [
          "Le sursalage final",
          "La disparition complète du goût",
          "La sauce qui devient sucrée automatiquement",
          "La baisse de température du sel"
        ],
        "answer": 0,
        "explanation": "La réduction concentre le sel du bouillon. Il faut ajuster l’assaisonnement après réduction."
      },
      {
        "q": "Tes pâtes sont bien nappées, mais elles restent fades même avec une bonne sauce. Quelle erreur est probable ?",
        "options": [
          "L’eau de cuisson n’était pas assez salée",
          "La poêle était trop grande uniquement",
          "Le parmesan était râpé trop fin",
          "La sauce était trop chaude"
        ],
        "answer": 0,
        "explanation": "L’eau de cuisson est le moment où les pâtes elles-mêmes prennent du goût. Une pâte fade reste souvent fade sous la sauce."
      },
      {
        "q": "Tu goûtes un mijoté avant 45 minutes de réduction et il est presque assez salé. Que fais-tu ?",
        "options": [
          "Tu attends avant de resaler",
          "Tu sales fortement tout de suite",
          "Tu ajoutes de la fleur de sel pour réduire plus vite",
          "Tu retires toute la sauce"
        ],
        "answer": 0,
        "explanation": "Si le plat va réduire, le sel va se concentrer. Il vaut mieux ajuster à la fin."
      }
    ],
    "linkedRecipes": [
      "soupe-correction-assaisonnement"
    ]
  },
  {
    "id": "acidite-reveiller-plat",
    "prerequisites": [
      "saler-par-couches"
    ],
    "moduleId": "assaisonnement-equilibre",
    "title": "Utiliser l’acidité",
    "subtitle": "Réveiller un plat sans le surcharger",
    "duration": 10,
    "objectives": [
      "Comprendre comment l’acidité donne du relief",
      "Choisir entre citron, vinaigre, vin, tomate ou condiment",
      "Corriger un plat lourd ou plat sans ajouter trop de sel"
    ],
    "concepts": [
      {
        "title": "L’acidité donne de la vivacité",
        "body": "Un plat peut être correctement salé et pourtant sembler plat. L’acidité apporte de la tension et rend les saveurs plus lisibles. Quelques gouttes de citron, de vinaigre ou un condiment acidulé peuvent transformer une soupe, un ragoût, une sauce grasse ou des légumes rôtis.",
        "tip": "Avant de ressaler, teste parfois l’acide."
      },
      {
        "title": "Chaque acide a son caractère",
        "body": "Le citron est frais et direct. Le vinaigre de vin est plus vif. Le vinaigre de cidre est plus doux. Le vin apporte acidité et arômes, mais doit cuire pour perdre son agressivité. La tomate apporte acidité, sucre et umami en même temps.",
        "tip": "L’acide se choisit comme un assaisonnement, pas au hasard."
      },
      {
        "title": "L’acidité en début ou en fin",
        "body": "Un vin ajouté dans une sauce doit cuire pour s’intégrer. Un filet de citron ajouté en fin de cuisson garde sa fraîcheur. Un vinaigre réduit devient plus doux et concentré. Le moment d’ajout change donc le résultat.",
        "tip": "Acide cuit = fondu ; acide final = vivant."
      },
      {
        "title": "Trop d’acide se corrige par l’équilibre",
        "body": "Si un plat devient trop acide, on ne retire pas l’acidité. On l’équilibre : un peu de gras, de douceur, de féculent, de crème ou de réduction peut l’arrondir. Mais ajouter du sucre sans réfléchir peut donner un goût artificiel.",
        "tip": "Corriger l’acide, c’est arrondir, pas masquer."
      }
    ],
    "goFurther": {
      "title": "Pourquoi le vinaigre est puissant en cuisine",
      "content": "Le vinaigre peut servir à déglacer, équilibrer une sauce grasse, réveiller des légumes, structurer une vinaigrette ou donner du relief à un jus. Utilisé en petite quantité, il ne donne pas forcément un goût vinaigré : il rend le plat plus net."
    },
    "quiz": [
      {
        "q": "Ta sauce crème est bien salée mais semble lourde. Que testes-tu en premier ?",
        "options": [
          "Quelques gouttes de citron ou de vinaigre",
          "Une grosse quantité de sel",
          "Plus de crème",
          "Une cuisson plus longue à gros bouillons"
        ],
        "answer": 0,
        "explanation": "L’acidité coupe la lourdeur et donne du relief sans augmenter le sel ou le gras."
      },
      {
        "q": "Tu ajoutes du vin dans une sauce et tu ne le laisses presque pas cuire. Quel goût risques-tu ?",
        "options": [
          "Une acidité crue et agressive",
          "Une sauce automatiquement sucrée",
          "Une sauce sans aucun parfum",
          "Une texture de mayonnaise"
        ],
        "answer": 0,
        "explanation": "Le vin doit souvent réduire pour perdre son agressivité et intégrer ses arômes."
      },
      {
        "q": "Tu veux garder une note très fraîche de citron sur des légumes rôtis. Quand l’ajoutes-tu ?",
        "options": [
          "À la sortie du four",
          "Au début pour 45 minutes de cuisson",
          "Avant de laver les légumes",
          "Uniquement dans l’eau froide"
        ],
        "answer": 0,
        "explanation": "L’acidité ajoutée en finition garde sa vivacité. Cuite longtemps, elle devient plus fondue."
      },
      {
        "q": "Ta vinaigrette est trop acide. Quelle correction est la plus logique ?",
        "options": [
          "Ajouter un peu d’huile, goûter, puis ajuster",
          "Ajouter plus de vinaigre",
          "Ajouter du sel jusqu’à ne plus sentir l’acide",
          "La faire bouillir 2 heures"
        ],
        "answer": 0,
        "explanation": "L’huile arrondit l’acidité et rééquilibre le ratio. Il faut corriger progressivement."
      }
    ],
    "linkedRecipes": [
      "vinaigrette-moutarde-equilibree"
    ]
  },
  {
    "id": "gras-sucre-amer-umami",
    "prerequisites": [
      "acidite-reveiller-plat"
    ],
    "moduleId": "assaisonnement-equilibre",
    "title": "Gras, sucre, amer, umami",
    "subtitle": "Comprendre les équilibres qui donnent du relief",
    "duration": 11,
    "objectives": [
      "Utiliser le gras pour porter le goût sans alourdir",
      "Comprendre sucre, amertume et umami dans l’équilibre d’un plat",
      "Corriger une sensation de plat plat, dur ou lourd"
    ],
    "concepts": [
      {
        "title": "Le gras porte les arômes",
        "body": "Beurre, huile, crème, jus gras ou fromage transportent beaucoup d’arômes. Ils donnent de la rondeur et une sensation agréable en bouche. Mais trop de gras rend le plat lourd si rien ne vient le tendre : sel, acide, herbes, amertume ou texture croquante.",
        "tip": "Le gras arrondit ; l’acide réveille."
      },
      {
        "title": "Le sucre équilibre et colore",
        "body": "Le sucre n’est pas réservé aux desserts. Il existe dans les légumes rôtis, les oignons fondus, les tomates réduites, le miel, certaines sauces ou la caramélisation. Il peut arrondir une acidité, mais trop de sucre rend un plat mou et écœurant.",
        "tip": "Le sucre adoucit, mais peut endormir."
      },
      {
        "title": "L’amertume donne de la profondeur",
        "body": "L’amertume peut venir du café, du cacao, des endives, des agrumes, de certaines salades, d’une coloration poussée ou d’un brûlé. Maîtrisée, elle donne de la profondeur. Subie, elle rend le plat agressif.",
        "tip": "Amer maîtrisé = relief ; brûlé subi = défaut."
      },
      {
        "title": "L’umami donne de la longueur",
        "body": "Parmesan, champignons, tomate concentrée, sauce soja, anchois, miso, bouillons et viandes mijotées donnent une sensation savoureuse et persistante. L’umami ne remplace pas le sel, mais il donne du fond. Un plat végétal peut gagner beaucoup avec champignons, tomate réduite ou parmesan.",
        "tip": "Umami = goût qui reste."
      }
    ],
    "goFurther": {
      "title": "Texture et équilibre",
      "content": "Un plat équilibré n’est pas seulement une affaire de saveurs. Un élément croustillant peut alléger une purée, une herbe fraîche peut réveiller une sauce, un condiment acide peut équilibrer une viande grasse. La texture agit comme un assaisonnement."
    },
    "quiz": [
      {
        "q": "Ta purée est riche en beurre mais semble lourde. Que peux-tu ajouter au service pour mieux l’équilibrer ?",
        "options": [
          "Une touche d’acidité, d’herbes ou un élément croquant",
          "Encore beaucoup de beurre uniquement",
          "De l’eau froide",
          "Du sucre en grande quantité"
        ],
        "answer": 0,
        "explanation": "Le gras gagne en lisibilité quand il est équilibré par fraîcheur, acidité ou contraste."
      },
      {
        "q": "Ta sauce tomate est très acide. Quelle correction peut être cohérente ?",
        "options": [
          "La réduire doucement, ajouter un peu de matière grasse ou une légère douceur si nécessaire",
          "Ajouter beaucoup de vinaigre",
          "La servir crue immédiatement",
          "Ajouter du sel jusqu’à masquer l’acidité"
        ],
        "answer": 0,
        "explanation": "La cuisson, le gras et une douceur mesurée peuvent arrondir l’acidité de la tomate."
      },
      {
        "q": "Un plat végétal manque de profondeur malgré le sel et l’acidité. Quel ajout peut aider ?",
        "options": [
          "Champignons poêlés, tomate concentrée, parmesan ou sauce soja",
          "Eau froide",
          "Sucre glace uniquement",
          "Plus de laitue crue"
        ],
        "answer": 0,
        "explanation": "Ces ingrédients apportent de l’umami, donc une sensation plus longue et savoureuse."
      },
      {
        "q": "Tu as poussé une coloration jusqu’au noir et le plat devient agressif. Quelle saveur domine probablement ?",
        "options": [
          "Amertume de brûlé",
          "Umami propre",
          "Sucré naturel",
          "Acidité fraîche"
        ],
        "answer": 0,
        "explanation": "Le brun peut donner du goût, mais le noir apporte souvent une amertume de brûlé difficile à masquer."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "corriger-plat-rate",
    "prerequisites": [
      "gras-sucre-amer-umami"
    ],
    "moduleId": "assaisonnement-equilibre",
    "title": "Corriger un plat raté",
    "subtitle": "Diagnostiquer avant d’ajouter au hasard",
    "duration": 12,
    "objectives": [
      "Identifier si un plat manque de sel, d’acide, de gras ou de profondeur",
      "Corriger progressivement sans aggraver le défaut",
      "Sauver les erreurs fréquentes d’assaisonnement et de texture"
    ],
    "concepts": [
      {
        "title": "Corriger commence par goûter précisément",
        "body": "Dire ? ce n?est pas bon ? ne suffit pas. Il faut identifier le défaut : fade, trop salé, trop acide, trop gras, trop sucré, trop amer, trop liquide, trop sec. Chaque problème appelle une correction différente. Ajouter du sel au hasard peut empirer un plat déjà déséquilibré.",
        "tip": "Nomme le défaut avant de corriger."
      },
      {
        "title": "Plat fade",
        "body": "Un plat fade manque souvent de sel, d’acidité ou d’umami. La bonne méthode : ajouter une petite pincée de sel, goûter ; puis tester une goutte d’acide ; puis chercher du fond si besoin. Corriger par étapes évite de basculer dans l’excès.",
        "tip": "Fade ne veut pas toujours dire pas assez salé."
      },
      {
        "title": "Plat trop salé",
        "body": "On ne retire pas facilement le sel. Il faut diluer, ajouter un élément non salé, augmenter la quantité, ajouter un féculent ou équilibrer avec gras et acidité selon le cas. Le sucre ne supprime pas le sel ; il peut seulement détourner la perception dans certaines sauces.",
        "tip": "Trop salé se dilue plus qu’il ne se masque."
      },
      {
        "title": "Texture ratée",
        "body": "Une sauce trop liquide peut réduire ou être liée. Une sauce trop épaisse peut être détendue. Une viande sèche peut être servie plus finement avec sauce ou jus. Une purée collante ne redevient pas parfaite, mais on peut parfois l’alléger avec beurre, liquide chaud et service adapté.",
        "tip": "On ne sauve pas toujours tout, mais on peut souvent servir mieux."
      }
    ],
    "goFurther": {
      "title": "La correction minimale",
      "content": "La meilleure correction est souvent petite. Une goutte de citron, une noisette de beurre, une pincée de sel ou une cuillère d’eau peuvent suffire. Les grosses corrections créent souvent un deuxième problème."
    },
    "quiz": [
      {
        "q": "Ta soupe est fade. Tu ajoutes du sel, elle est mieux mais reste plate. Que testes-tu ensuite ?",
        "options": [
          "Une petite touche d’acidité",
          "Une grosse dose de sucre",
          "Beaucoup plus de sel",
          "Une cuisson à gros bouillons jusqu’à évaporation complète"
        ],
        "answer": 0,
        "explanation": "Si le sel est présent mais que le plat reste plat, l’acidité peut réveiller les saveurs."
      },
      {
        "q": "Ta sauce est trop salée après réduction. Quelle correction est la plus réaliste ?",
        "options": [
          "Allonger avec un liquide non salé ou ajouter un élément non salé",
          "Ajouter encore du sel pour équilibrer",
          "Faire réduire davantage",
          "Ajouter du poivre uniquement"
        ],
        "answer": 0,
        "explanation": "La réduction a concentré le sel. Il faut diluer ou augmenter la masse non salée."
      },
      {
        "q": "Ta vinaigrette est trop grasse et lourde. Que fais-tu ?",
        "options": [
          "Ajouter un peu d’acide et de sel, puis regoûter",
          "Ajouter plus d’huile",
          "La faire bouillir",
          "Ajouter de la farine"
        ],
        "answer": 0,
        "explanation": "L’acidité et le sel redonnent de la tension à une sauce trop grasse."
      },
      {
        "q": "Tu as une viande sèche. Quelle option améliore le service sans mentir sur la cuisson ?",
        "options": [
          "Trancher plus finement et servir avec sauce ou jus",
          "La recuire longtemps à feu fort",
          "Ajouter du sel sec en grande quantité",
          "La laisser refroidir complètement"
        ],
        "answer": 0,
        "explanation": "Une sauce et une découpe fine améliorent la perception de jutosité. Recuisiner fort aggrave la sécheresse."
      }
    ],
    "linkedRecipes": [
      "soupe-correction-assaisonnement"
    ]
  },
  {
    "id": "ail-oignon-echalote",
    "moduleId": "herbes-epices-aromates",
    "title": "Ail, oignon, échalote",
    "subtitle": "Construire une base aromatique",
    "duration": 10,
    "prerequisites": [
      "corriger-plat-rate"
    ],
    "objectives": [
      "Différencier le rôle de l’ail, de l’oignon et de l’échalote",
      "Cuire les aromates sans les brûler",
      "Adapter la découpe et le timing au résultat recherché"
    ],
    "concepts": [
      {
        "title": "L’oignon donne une base douce",
        "body": "Cuit doucement, l’oignon libère de l’eau puis développe des notes sucrées et rondes. Coloré plus fort, il donne un goût plus profond. Brûlé, il devient amer. L’oignon est souvent le début d’un plat, mais son feu doit être contrôlé.",
        "tip": "Oignon fondu = douceur ; oignon brûlé = amertume."
      },
      {
        "title": "L’échalote est plus fine et plus fragile",
        "body": "L’échalote apporte un parfum plus délicat, souvent utilisé dans les sauces, vinaigrettes, beurres composés ou cuissons courtes. Elle brûle plus vite qu’un gros oignon et devient vite amère si elle est ciselée finement à feu fort.",
        "tip": "Échalote fine, feu modéré."
      },
      {
        "title": "L’ail est puissant et sensible",
        "body": "L’ail haché parfume vite mais brûle vite. L’ail en chemise diffuse plus doucement et supporte mieux une cuisson à la poêle ou au four. Plus l’ail est coupé fin, plus son goût est intense et sa cuisson rapide.",
        "tip": "Ail haché = rapide ; ail en chemise = doux."
      },
      {
        "title": "La découpe change le parfum",
        "body": "Un oignon émincé reste plus présent qu’un oignon ciselé très fin. Une échalote ciselée se fond dans une sauce. Une gousse d’ail écrasée donne un parfum moins agressif qu’un ail haché. La découpe est un réglage d’intensité.",
        "tip": "Couper plus fin, c’est souvent parfumer plus fort."
      }
    ],
    "goFurther": {
      "title": "Pincer une base aromatique",
      "content": "Faire cuire doucement oignon, ail, concentré de tomate ou épices dans un peu de gras développe des arômes plus profonds. Mais cette base doit être surveillée : si elle accroche et brûle, tout le plat prendra l’amertume."
    },
    "quiz": [
      {
        "q": "Tu ajoutes de l’ail haché en début de cuisson à feu fort avec des gros morceaux de carotte. Que risques-tu ?",
        "options": [
          "L’ail brûle avant que la carotte soit cuite",
          "La carotte brûle avant l’ail",
          "Tout cuit au même rythme",
          "L’ail empêche la carotte de cuire"
        ],
        "answer": 0,
        "explanation": "L’ail haché est petit et fragile. Il doit souvent arriver plus tard ou cuire à feu plus doux."
      },
      {
        "q": "Tu veux un parfum d’ail doux dans un poulet rôti. Quelle forme est la plus adaptée ?",
        "options": [
          "Gousses en chemise écrasées",
          "Ail haché très fin sous le grill pendant 30 minutes",
          "Ail brûlé puis retiré",
          "Ail cru ajouté en grande quantité après service"
        ],
        "answer": 0,
        "explanation": "L’ail en chemise diffuse lentement et brûle moins vite. Il donne un parfum plus doux."
      },
      {
        "q": "Ton échalote ciselée devient noire dans la sauce. Quel réglage est probablement mauvais ?",
        "options": [
          "Feu trop fort ou cuisson trop longue",
          "Pas assez de poivre",
          "Trop d’eau dans la casserole",
          "Échalote coupée trop gros uniquement"
        ],
        "answer": 0,
        "explanation": "L’échalote fine brûle vite. Elle demande une chaleur modérée."
      },
      {
        "q": "Pourquoi faire suer un oignon sans coloration ?",
        "options": [
          "Pour obtenir une base douce sans amertume",
          "Pour le rendre cru",
          "Pour supprimer son parfum",
          "Pour empêcher la sauce de cuire"
        ],
        "answer": 0,
        "explanation": "La cuisson douce attendrit l’oignon et développe sa douceur sans goût brûlé."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "herbes-fraiches-seches",
    "prerequisites": [
      "ail-oignon-echalote"
    ],
    "moduleId": "herbes-epices-aromates",
    "title": "Herbes fraîches et herbes sèches",
    "subtitle": "Les ajouter au bon moment",
    "duration": 10,
    "objectives": [
      "Différencier l’usage des herbes tendres et robustes",
      "Préserver couleur et parfum des herbes fraîches",
      "Utiliser les herbes sèches sans goût poussiéreux"
    ],
    "concepts": [
      {
        "title": "Herbes tendres",
        "body": "Persil, basilic, ciboulette, coriandre, cerfeuil ou aneth sont fragiles. Elles apportent fraîcheur, couleur et parfum immédiat. Elles supportent mal les longues cuissons et se mettent souvent en finition ou hors feu.",
        "tip": "Herbe tendre = fin de cuisson."
      },
      {
        "title": "Herbes robustes",
        "body": "Thym, romarin, laurier, sauge ou sarriette supportent mieux la chaleur. Elles peuvent infuser dans un bouillon, un rôti, un mijoté ou une huile. Mais elles doivent être dosées : trop de romarin ou de laurier peut dominer tout le plat.",
        "tip": "Robuste ne veut pas dire illimité."
      },
      {
        "title": "Herbes sèches",
        "body": "Les herbes sèches sont plus concentrées mais moins fraîches. Elles ont besoin de temps ou de chaleur douce pour se réhydrater et libérer leur parfum. Les jeter à cru sur un plat fini peut donner une sensation sèche et poussiéreuse.",
        "tip": "Sec = à infuser, pas à saupoudrer au hasard."
      },
      {
        "title": "Couper sans écraser",
        "body": "Les herbes fraîches doivent être lavées, séchées et coupées avec une lame nette. Les écraser libère trop d’eau, noircit les feuilles et affaiblit le parfum. Une herbe ciselée proprement doit rester légère et verte.",
        "tip": "Herbe mouillée + couteau émoussé = purée verte."
      }
    ],
    "goFurther": {
      "title": "Tiges et feuilles",
      "content": "Les tiges de persil, coriandre ou basilic peuvent parfumer un bouillon, une huile ou une sauce, même si les feuilles servent en finition. Tout ne se jette pas : il faut adapter l’usage."
    },
    "quiz": [
      {
        "q": "Tu ajoutes du basilic frais au début d’une sauce qui mijote 45 minutes. Que risques-tu ?",
        "options": [
          "Perdre sa fraîcheur et obtenir une couleur terne",
          "Renforcer automatiquement son parfum",
          "Créer une sauce plus croustillante",
          "Empêcher la sauce de réduire"
        ],
        "answer": 0,
        "explanation": "Le basilic est fragile. Il garde mieux son parfum en finition ou cuisson très courte."
      },
      {
        "q": "Tu veux parfumer un ragoût pendant 2 heures. Quelle herbe est plus adaptée ?",
        "options": [
          "Thym ou laurier",
          "Ciboulette fraîche ciselée dès le départ",
          "Basilic fragile",
          "Cerfeuil haché"
        ],
        "answer": 0,
        "explanation": "Les herbes robustes supportent mieux les longues cuissons et infusent progressivement."
      },
      {
        "q": "Tes herbes hachées deviennent noires et humides. Quelle erreur est probable ?",
        "options": [
          "Elles étaient mouillées, écrasées ou coupées avec une lame peu nette",
          "Elles ont été trop bien séchées",
          "Elles manquaient de sel",
          "Elles ont été ajoutées trop tard"
        ],
        "answer": 0,
        "explanation": "Les herbes fraîches doivent être sèches et coupées net. Sinon elles s’oxydent et s’écrasent."
      },
      {
        "q": "Pourquoi ajouter des herbes sèches plus tôt qu’une herbe fraîche tendre ?",
        "options": [
          "Elles ont besoin de temps ou de chaleur pour libérer leur parfum",
          "Elles ne donnent jamais de goût",
          "Elles brûlent moins que le sel",
          "Elles remplacent l’huile"
        ],
        "answer": 0,
        "explanation": "Les herbes sèches se réhydratent et infusent mieux pendant la cuisson."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "epices-torrefier-infuser",
    "prerequisites": [
      "herbes-fraiches-seches"
    ],
    "moduleId": "herbes-epices-aromates",
    "title": "Épices : torréfier et infuser",
    "subtitle": "Réveiller les parfums sans les brûler",
    "duration": 10,
    "objectives": [
      "Comprendre pourquoi la chaleur révèle les épices",
      "Torréfier ou infuser sans brûler",
      "Doser les épices selon leur puissance et leur forme"
    ],
    "concepts": [
      {
        "title": "La chaleur réveille les épices",
        "body": "Beaucoup d’épices libèrent mieux leurs parfums avec une chaleur douce. Torréfier rapidement des graines ou faire revenir une poudre dans un peu de gras peut donner plus de profondeur. Mais une épice brûlée devient amère et domine tout.",
        "tip": "Épice réveillée oui, épice brûlée non."
      },
      {
        "title": "Graines ou poudre",
        "body": "Les graines entières se conservent mieux et peuvent être torréfiées avant d’être moulues. Les poudres diffusent vite mais brûlent plus facilement. Une poudre demande souvent un feu plus doux et un contact plus court.",
        "tip": "Poudre = rapide et fragile."
      },
      {
        "title": "Infuser dans le gras ou le liquide",
        "body": "Certaines molécules aromatiques se diffusent très bien dans l’huile, le beurre, la crème ou le bouillon. C’est pour cela qu’on peut parfumer une huile au cumin, un beurre au curry ou un lait à la vanille. Le support choisi influence le résultat.",
        "tip": "Le parfum a besoin d’un véhicule."
      },
      {
        "title": "Doser pour soutenir, pas écraser",
        "body": "Une épice doit souvent soutenir le plat plutôt que l’annoncer dès la première bouchée. Trop de cannelle, cumin, clou de girofle ou curry peut écraser le produit principal. Mieux vaut ajouter peu, goûter, puis corriger.",
        "tip": "Une épice réussie se remarque parfois à peine."
      }
    ],
    "goFurther": {
      "title": "Épices et acidité",
      "content": "Une touche d’acidité en fin de cuisson peut rendre les épices plus nettes. C’est fréquent dans les currys, légumes rôtis ou sauces au yaourt. Le citron ne remplace pas les épices, il les rend plus lisibles."
    },
    "quiz": [
      {
        "q": "Tu ajoutes du paprika dans une poêle très chaude et il devient brun foncé avec une odeur amère. Quelle erreur as-tu faite ?",
        "options": [
          "Tu as brûlé une épice en poudre fragile",
          "Tu as trop peu salé",
          "Tu as ajouté trop d’eau",
          "Tu as utilisé une casserole trop haute"
        ],
        "answer": 0,
        "explanation": "Les poudres d’épices brûlent vite. Elles demandent souvent une chaleur modérée et un temps court."
      },
      {
        "q": "Pourquoi torréfier rapidement des graines de cumin avant de les moudre ?",
        "options": [
          "Pour réveiller leurs arômes",
          "Pour les rendre sans goût",
          "Pour les humidifier",
          "Pour les transformer en sel"
        ],
        "answer": 0,
        "explanation": "La chaleur douce libère des composés aromatiques. Il faut arrêter avant la brûlure."
      },
      {
        "q": "Tu veux parfumer une huile avec du curry. Quelle méthode est la plus sûre ?",
        "options": [
          "Chauffer doucement le curry dans l’huile sans le brûler",
          "Le jeter dans une huile fumante pendant 5 minutes",
          "Le saupoudrer sur la plaque froide uniquement",
          "Le rincer à l’eau avant usage"
        ],
        "answer": 0,
        "explanation": "La chaleur douce diffuse le parfum dans le gras. Trop chaud, la poudre devient amère."
      },
      {
        "q": "Ton plat ne sent plus que le clou de girofle. Quel principe as-tu probablement oublié ?",
        "options": [
          "Les épices puissantes se dosent très progressivement",
          "Il faut toujours mettre toutes les épices en grande quantité",
          "Le clou de girofle disparaît à la cuisson",
          "Le sel annule toutes les épices"
        ],
        "answer": 0,
        "explanation": "Certaines épices dominent vite. Il faut les utiliser comme un accent, pas comme une base massive."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "finitions-aromatiques",
    "prerequisites": [
      "epices-torrefier-infuser"
    ],
    "moduleId": "herbes-epices-aromates",
    "title": "Finitions aromatiques",
    "subtitle": "Finir un plat avec précision",
    "duration": 10,
    "objectives": [
      "Utiliser herbes, zestes, huiles et condiments au bon moment",
      "Ajouter de la fraîcheur sans masquer le plat",
      "Construire une finition qui équilibre goût, texture et parfum"
    ],
    "concepts": [
      {
        "title": "La finition n’est pas une décoration",
        "body": "Une finition aromatique doit changer la dégustation. Un zeste apporte fraîcheur, une herbe apporte parfum, une huile apporte rondeur, un condiment apporte acidité, un croquant apporte contraste. Si la finition ne sert qu’à faire joli, elle est secondaire.",
        "tip": "Une bonne finition se mange, elle ne pose pas."
      },
      {
        "title": "Zestes et agrumes",
        "body": "Le zeste apporte le parfum de l’agrume sans toute l’acidité du jus. Il se met souvent à la fin pour garder ses huiles essentielles. Le jus, lui, apporte de l’acidité. Zeste et jus n’ont donc pas le même rôle.",
        "tip": "Zeste = parfum ; jus = acidité."
      },
      {
        "title": "Huiles et beurres aromatiques",
        "body": "Une huile aux herbes, un beurre maître d’hôtel ou une huile épicée peuvent finir un plat très simplement. Ils apportent du gras, donc de la longueur, mais doivent rester dosés. Trop d’huile en finition rend le plat lourd.",
        "tip": "La finition doit signer le plat, pas le noyer."
      },
      {
        "title": "Condiments et croquants",
        "body": "Pickles, câpres, cornichons, graines, noix, croûtons ou chapelure grillée peuvent corriger un plat trop mou ou trop riche. Ils ajoutent tension et texture. Ce sont de vrais outils d’équilibre.",
        "tip": "Un plat mou a souvent besoin de contraste."
      }
    ],
    "goFurther": {
      "title": "Finition minute",
      "content": "Les finitions sont souvent les éléments les plus fragiles. Elles doivent être prêtes avant le dressage, mais ajoutées au dernier moment. C’est une application directe de la mise en place."
    },
    "quiz": [
      {
        "q": "Ton plat est bon mais très mou : purée, poisson tendre, sauce crémeuse. Quelle finition peut l’améliorer ?",
        "options": [
          "Un élément croquant ou acidulé",
          "Plus de cuisson longue",
          "Plus d’eau",
          "Un couvercle fermé"
        ],
        "answer": 0,
        "explanation": "Le contraste de texture et d’acidité peut rendre le plat plus vivant."
      },
      {
        "q": "Tu veux parfumer un plat au citron sans l’acidifier fortement. Que choisis-tu ?",
        "options": [
          "Le zeste",
          "Beaucoup de jus",
          "Du vinaigre rouge",
          "Du sel uniquement"
        ],
        "answer": 0,
        "explanation": "Le zeste apporte les huiles parfumées de l’agrume avec peu d’acidité."
      },
      {
        "q": "Tu ajoutes une huile aux herbes en grande quantité sur un plat déjà gras. Quel risque ?",
        "options": [
          "Alourdir et masquer le plat",
          "Le rendre plus croquant",
          "Supprimer le sel",
          "Cuire le plat à cœur"
        ],
        "answer": 0,
        "explanation": "Le gras porte les arômes, mais en excès il peut saturer la bouche."
      },
      {
        "q": "Pourquoi les herbes de finition doivent-elles être prêtes avant le dressage mais ajoutées au dernier moment ?",
        "options": [
          "Pour garder fraîcheur et éviter de faire attendre le plat chaud",
          "Pour les cuire 30 minutes",
          "Pour les rendre noires",
          "Pour remplacer la sauce"
        ],
        "answer": 0,
        "explanation": "La mise en place évite le retard, l’ajout final préserve le parfum."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "comprendre-emulsion",
    "moduleId": "sauces-froides-emulsions",
    "title": "Comprendre une émulsion",
    "subtitle": "Faire coexister eau et huile",
    "duration": 10,
    "prerequisites": [
      "finitions-aromatiques"
    ],
    "objectives": [
      "Comprendre pourquoi huile et eau se séparent",
      "Utiliser un émulsifiant pour stabiliser une sauce",
      "Diagnostiquer une sauce qui tranche"
    ],
    "concepts": [
      {
        "title": "Huile et eau ne se mélangent pas naturellement",
        "body": "Une vinaigrette, une mayonnaise ou un aïoli cherchent à maintenir ensemble deux mondes qui se repoussent : le gras et l’eau. Si on les mélange vite sans structure, ils se séparent. Une émulsion réussie disperse de très petites gouttes de gras dans une phase aqueuse.",
        "tip": "Émulsion = gouttes de gras bien dispersées."
      },
      {
        "title": "Le rôle de l’émulsifiant",
        "body": "Moutarde, jaune d’œuf, ail ou certains ingrédients riches en lécithine aident à stabiliser l’émulsion. Ils se placent entre l’eau et l’huile, comme un médiateur. Sans eux, une sauce peut tenir quelques secondes, puis se séparer.",
        "tip": "L’émulsifiant fait le pont."
      },
      {
        "title": "Le débit compte",
        "body": "Verser l’huile trop vite est l’erreur classique. Au début, il faut ajouter le gras goutte à goutte ou en filet mince pour laisser l’émulsion se former. Une fois la base stable, on peut aller un peu plus vite.",
        "tip": "Au début, lentement. Après prise, plus librement."
      },
      {
        "title": "Une sauce tranchée n’est pas toujours perdue",
        "body": "Quand une émulsion tranche, l’huile et l’eau se séparent. Il faut souvent repartir d’une petite base stable : un jaune, un peu de moutarde, un peu d’eau ou de vinaigre, puis incorporer la sauce ratée progressivement. On ne répare pas une séparation en ajoutant plus d’huile d’un coup.",
        "tip": "Pour rattraper, reconstruis une base."
      }
    ],
    "goFurther": {
      "title": "Émulsion temporaire ou stable",
      "content": "Une vinaigrette simple est souvent temporaire : elle se sépare avec le temps. Une mayonnaise est plus stable grâce au jaune d’œuf et à l’incorporation progressive de l’huile. Comprendre cette différence évite de croire que toutes les sauces doivent tenir pareil."
    },
    "quiz": [
      {
        "q": "Ta sauce huile-citron se sépare quelques secondes après mélange. Que manque-t-il probablement pour la stabiliser ?",
        "options": [
          "Un émulsifiant ou un fouettage plus progressif",
          "Plus de sel uniquement",
          "Une cuisson longue",
          "Un passage au four"
        ],
        "answer": 0,
        "explanation": "Huile et eau se séparent naturellement. Un émulsifiant et une bonne dispersion aident à stabiliser."
      },
      {
        "q": "Tu montes une mayonnaise et ajoutes l’huile très vite dès le départ. Que risques-tu ?",
        "options": [
          "L’émulsion ne prend pas ou tranche",
          "La mayonnaise devient automatiquement plus ferme",
          "Le jaune cuit",
          "Le sel disparaît"
        ],
        "answer": 0,
        "explanation": "Au début, la base est fragile. L’huile doit être incorporée lentement pour former de petites gouttes stables."
      },
      {
        "q": "Ta mayonnaise tranche. Quelle méthode est la plus logique ?",
        "options": [
          "Repartir avec une petite base stable et incorporer la sauce ratée progressivement",
          "Ajouter toute l’huile restante d’un coup",
          "La cuire à gros bouillons",
          "Ajouter uniquement du poivre"
        ],
        "answer": 0,
        "explanation": "On reconstruit l’émulsion depuis une base stable. Ajouter plus d’huile aggrave la séparation."
      },
      {
        "q": "Pourquoi la moutarde aide-t-elle une vinaigrette à tenir ?",
        "options": [
          "Elle joue le rôle d’émulsifiant entre l’eau et l’huile",
          "Elle remplace toute l’huile",
          "Elle supprime l’acidité",
          "Elle rend la sauce chaude"
        ],
        "answer": 0,
        "explanation": "La moutarde aide à disperser et stabiliser les gouttelettes de gras."
      }
    ],
    "linkedRecipes": [
      "vinaigrette-moutarde-equilibree",
      "mayonnaise-maison-rattrapage"
    ]
  },
  {
    "id": "vinaigrette-equilibree",
    "prerequisites": [
      "comprendre-emulsion"
    ],
    "moduleId": "sauces-froides-emulsions",
    "title": "Réussir une vinaigrette",
    "subtitle": "Équilibrer acide, gras, sel et moutarde",
    "duration": 10,
    "objectives": [
      "Construire une vinaigrette équilibrée",
      "Dissoudre le sel au bon moment",
      "Adapter la sauce à la salade ou au légume"
    ],
    "concepts": [
      {
        "title": "Le ratio de départ",
        "body": "Une base classique est 1 part d’acide pour 3 parts d’huile. Ce n’est pas une loi fixe, mais un repère. Une salade amère peut aimer une vinaigrette plus douce, des légumes rôtis peuvent supporter plus d’acidité, une salade fragile demande une sauce moins lourde.",
        "tip": "3 pour 1 est un point de départ, pas une prison."
      },
      {
        "title": "Dissoudre le sel dans l’acide",
        "body": "Le sel se dissout mieux dans le vinaigre ou le citron que dans l’huile. Il faut donc mélanger acide, sel, poivre et moutarde avant d’ajouter l’huile. Cette étape améliore l’assaisonnement et évite les grains de sel mal répartis.",
        "tip": "Sel d’abord dans l’acide."
      },
      {
        "title": "L’huile en filet",
        "body": "Ajouter l’huile progressivement en fouettant donne une texture plus liée. Si l’huile est versée d’un coup, la sauce peut rester séparée. Ce n’est pas forcément grave pour une vinaigrette rustique, mais une vinaigrette nappante demande un filet régulier.",
        "tip": "Filet régulier = sauce plus nappante."
      },
      {
        "title": "Assaisonner au dernier moment",
        "body": "Le sel et l’acide font tomber les feuilles tendres. Une salade assaisonnée trop tôt devient molle et rend de l’eau. En revanche, des légumes plus fermes ou rôtis peuvent être assaisonnés un peu avant pour absorber.",
        "tip": "Feuille tendre = vinaigrette tardive."
      }
    ],
    "goFurther": {
      "title": "Changer de vinaigre",
      "content": "Vinaigre de vin : vif. Cidre : plus doux. Xérès : profond. Balsamique : plus sucré. Citron : frais. Le choix de l’acide change l’identité de la salade autant que le choix de l’huile."
    },
    "quiz": [
      {
        "q": "Ta vinaigrette a des grains de sel perceptibles et mal répartis. Quelle étape a probablement été ratée ?",
        "options": [
          "Le sel n’a pas été dissous dans l’acide avant l’huile",
          "L’huile était trop jaune",
          "La salade était trop verte",
          "La moutarde était trop froide uniquement"
        ],
        "answer": 0,
        "explanation": "Le sel se dissout mal dans l’huile. Il faut le dissoudre dans vinaigre ou citron avant d’émulsionner."
      },
      {
        "q": "Ta salade verte devient molle avant d’arriver à table. Que corriger ?",
        "options": [
          "Assaisonner au dernier moment",
          "Ajouter la vinaigrette 30 minutes avant",
          "Saler davantage",
          "Mixer la salade"
        ],
        "answer": 0,
        "explanation": "Sel et acide font tomber les feuilles. Les salades tendres doivent être assaisonnées juste avant service."
      },
      {
        "q": "Ta vinaigrette est agressive et trop acide. Quelle correction est logique ?",
        "options": [
          "Ajouter progressivement de l’huile et regoûter",
          "Ajouter plus de vinaigre",
          "Ajouter de la farine",
          "La cuire au four"
        ],
        "answer": 0,
        "explanation": "L’huile arrondit l’acidité. Il faut ajuster par petites quantités."
      },
      {
        "q": "Tu prépares une salade d’endives assez amère. Quel choix peut équilibrer ?",
        "options": [
          "Une vinaigrette un peu plus douce ou ronde, avec huile de noix ou balsamique léger",
          "Uniquement du vinaigre blanc fort",
          "Aucune matière grasse",
          "Beaucoup de sel pour supprimer toute amertume"
        ],
        "answer": 0,
        "explanation": "L’amertume aime souvent la rondeur : huile de noix, douceur mesurée ou vinaigre moins agressif."
      }
    ],
    "linkedRecipes": [
      "vinaigrette-moutarde-equilibree"
    ]
  },
  {
    "id": "mayonnaise-maison",
    "prerequisites": [
      "vinaigrette-equilibree"
    ],
    "moduleId": "sauces-froides-emulsions",
    "title": "Mayonnaise maison",
    "subtitle": "Monter, stabiliser, rattraper",
    "duration": 11,
    "objectives": [
      "Monter une mayonnaise stable avec un filet d’huile progressif",
      "Comprendre le rôle du jaune, de la moutarde et de la température",
      "Rattraper une mayonnaise tranchée"
    ],
    "concepts": [
      {
        "title": "La base doit être stable",
        "body": "Une mayonnaise commence avec jaune d’œuf, moutarde, sel et parfois une petite touche d’acide. Cette base contient l’eau et les émulsifiants qui vont accueillir l’huile. Si la base est trop faible ou mal mélangée, l’huile se séparera plus facilement.",
        "tip": "Bonne base, mayonnaise plus sûre."
      },
      {
        "title": "L’huile goutte à goutte au début",
        "body": "Le début est le moment critique. Il faut verser l’huile très lentement en fouettant pour créer une émulsion fine. Quand la sauce épaissit et devient brillante, l’émulsion est prise ; on peut alors verser un peu plus vite.",
        "tip": "La mayonnaise se gagne dans les premières gouttes."
      },
      {
        "title": "Texture et détente",
        "body": "Plus on ajoute d’huile, plus la mayonnaise épaissit. Si elle devient trop ferme, quelques gouttes d’eau, de citron ou de vinaigre peuvent la détendre. L’acide final équilibre aussi le gras.",
        "tip": "Trop épais ? Une goutte d’eau ou d’acide."
      },
      {
        "title": "Rattraper une mayonnaise tranchée",
        "body": "Une mayonnaise tranchée montre l’huile séparée. Pour la rattraper, on repart avec une petite base : jaune, moutarde ou même une cuillère d’eau. On ajoute la mayonnaise ratée en filet comme si c’était l’huile. Il faut reconstruire l’émulsion, pas la brutaliser.",
        "tip": "Ne sauve pas en ajoutant plus d’huile : recommence petit."
      }
    ],
    "goFurther": {
      "title": "Hygiène et conservation",
      "content": "Une mayonnaise maison contient du jaune cru. Elle doit être préparée proprement, conservée au frais et consommée rapidement. Pour une app débutant, mieux vaut enseigner de petites quantités et une conservation courte."
    },
    "quiz": [
      {
        "q": "Ta mayonnaise reste liquide et l’huile flotte. Quelle erreur est la plus probable ?",
        "options": [
          "Huile ajoutée trop vite au début",
          "Trop peu de poivre",
          "Bol trop rond",
          "Moutarde trop jaune"
        ],
        "answer": 0,
        "explanation": "L’émulsion doit se construire progressivement. Trop d’huile trop vite casse la dispersion."
      },
      {
        "q": "Ta mayonnaise est très épaisse et lourde. Que peux-tu faire ?",
        "options": [
          "Ajouter quelques gouttes d’eau, citron ou vinaigre",
          "Ajouter beaucoup d’huile",
          "La cuire à feu fort",
          "Ajouter de la farine"
        ],
        "answer": 0,
        "explanation": "Un peu d’eau ou d’acide détend la mayonnaise et équilibre le gras."
      },
      {
        "q": "Ta mayonnaise tranche. Quelle méthode a le plus de chances de marcher ?",
        "options": [
          "Nouvelle base + incorporation progressive de la mayo ratée",
          "Ajout immédiat d’un grand verre d’huile",
          "Passage au four",
          "Ajout de sel jusqu’à épaississement"
        ],
        "answer": 0,
        "explanation": "Il faut recréer une émulsion stable, puis y incorporer progressivement la sauce ratée."
      },
      {
        "q": "Pourquoi ajouter du citron ou du vinaigre à la fin d’une mayonnaise ?",
        "options": [
          "Pour équilibrer le gras et ajuster la texture",
          "Pour supprimer l’huile",
          "Pour cuire le jaune",
          "Pour remplacer le fouet"
        ],
        "answer": 0,
        "explanation": "L’acidité donne du relief et peut détendre légèrement une mayonnaise trop ferme."
      }
    ],
    "linkedRecipes": [
      "mayonnaise-maison-rattrapage"
    ]
  },
  {
    "id": "sauces-crues-herbes",
    "prerequisites": [
      "mayonnaise-maison"
    ],
    "moduleId": "sauces-froides-emulsions",
    "title": "Sauces crues aux herbes",
    "subtitle": "Pesto, sauce vierge, yaourt, herbes fraîches",
    "duration": 10,
    "objectives": [
      "Construire une sauce froide sans cuisson",
      "Préserver fraîcheur, couleur et texture",
      "Équilibrer herbes, gras, acide et sel"
    ],
    "concepts": [
      {
        "title": "Une sauce crue dépend de la qualité des ingrédients",
        "body": "Sans cuisson, rien ne masque vraiment un produit faible. Herbes fraîches, bonne huile, citron juste pressé, yaourt équilibré, tomates mûres ou fruits secs de qualité changent immédiatement le résultat. Une sauce crue doit être nette.",
        "tip": "Cru = aucun cache-misère."
      },
      {
        "title": "Sauce vierge",
        "body": "La sauce vierge combine souvent huile d’olive, tomate, herbes, citron ou vinaigre, parfois échalote ou câpres. Elle apporte gras, acidité, fraîcheur et texture. Elle convient aux poissons, légumes grillés, volailles froides ou pommes de terre.",
        "tip": "Sauce vierge = fraîcheur structurée."
      },
      {
        "title": "Pesto et mixage",
        "body": "Un pesto demande de préserver les herbes. Mixer trop longtemps chauffe la préparation et peut ternir le basilic. Il vaut mieux travailler par impulsions, avec assez d’huile pour protéger et une finition en sel/acide/fromage selon le résultat voulu.",
        "tip": "Mixer court pour garder vert."
      },
      {
        "title": "Sauce yaourt",
        "body": "Le yaourt apporte fraîcheur, acidité et légèreté. Il aime les herbes, l’ail, le citron, les épices douces, le concombre ou l’huile d’olive. Mais il peut devenir liquide si on ajoute trop de sel trop tôt à des légumes aqueux.",
        "tip": "Yaourt + herbes = fraîcheur rapide."
      }
    ],
    "goFurther": {
      "title": "Temps de repos court",
      "content": "Certaines sauces crues gagnent à reposer 10 minutes pour que les parfums se diffusent. Trop longtemps, les herbes peuvent noircir, les tomates rendre de l’eau ou l’ail dominer."
    },
    "quiz": [
      {
        "q": "Ton pesto devient sombre et sent l’herbe chauffée. Quelle erreur est probable ?",
        "options": [
          "Mixage trop long ou trop chaud",
          "Pas assez de cuisson au four",
          "Trop peu de gros sel dans l’eau",
          "Trop de repos au congélateur"
        ],
        "answer": 0,
        "explanation": "Le mixage chauffe vite les herbes. Il faut mixer par impulsions et protéger avec l’huile."
      },
      {
        "q": "Ta sauce vierge est plate malgré de bonnes tomates. Que vérifies-tu ?",
        "options": [
          "Sel, acidité et qualité de l’huile",
          "Température du four",
          "Quantité de farine",
          "Temps de mijotage de 2 heures"
        ],
        "answer": 0,
        "explanation": "Une sauce crue se construit avec équilibre : gras, sel, acide, fraîcheur."
      },
      {
        "q": "Tu ajoutes du concombre salé dans une sauce yaourt longtemps avant service. Que risques-tu ?",
        "options": [
          "Une sauce qui rend de l’eau",
          "Une sauce plus croustillante",
          "Une émulsion chaude",
          "Un goût de rôti"
        ],
        "answer": 0,
        "explanation": "Le sel fait sortir l’eau du concombre. La sauce peut se détendre et devenir aqueuse."
      },
      {
        "q": "Pourquoi une sauce crue demande-t-elle une huile de bonne qualité ?",
        "options": [
          "Parce que son goût reste directement perceptible",
          "Parce qu’elle va cuire 3 heures",
          "Parce qu’elle remplace le sel",
          "Parce qu’elle empêche les herbes d’exister"
        ],
        "answer": 0,
        "explanation": "Sans cuisson, l’huile n’est pas transformée ni masquée. Son goût structure la sauce."
      }
    ],
    "linkedRecipes": [
      "sauce-vierge-tomate-herbes"
    ]
  },
  {
    "id": "comprendre-liaison-sauce",
    "moduleId": "sauces-chaudes-base",
    "title": "Comprendre la liaison d’une sauce",
    "subtitle": "Passer d’un liquide à une texture nappante",
    "duration": 11,
    "prerequisites": [
      "sauces-crues-herbes"
    ],
    "objectives": [
      "Comprendre les principales façons d’épaissir une sauce",
      "Obtenir une texture nappante sans lourdeur",
      "Corriger une sauce trop liquide, trop épaisse ou granuleuse"
    ],
    "concepts": [
      {
        "title": "Une sauce doit avoir une texture",
        "body": "Une sauce n’est pas seulement un liquide parfumé. Elle doit accrocher légèrement à l’aliment, napper la cuillère, rester agréable en bouche et porter le goût. Trop liquide, elle glisse au fond de l’assiette. Trop épaisse, elle devient lourde et masque le plat. La bonne texture dépend du plat : un jus court reste fluide, une béchamel nappe franchement, une sauce crème doit rester souple.",
        "tip": "Une sauce réussie accompagne, elle ne noie pas."
      },
      {
        "title": "Réduction, amidon, gras, œuf",
        "body": "Il existe plusieurs façons de lier : réduire pour concentrer, utiliser un roux ou de la fécule pour épaissir, monter au beurre pour donner brillance et rondeur, ou lier au jaune d’œuf pour une texture plus riche. Chaque liaison a son usage. Une sauce réduite garde un goût plus direct ; une sauce liée à la farine donne plus de corps ; une liaison au jaune demande plus de douceur.",
        "tip": "La liaison choisie change le goût autant que la texture."
      },
      {
        "title": "Napper la cuillère",
        "body": "Le test classique consiste à tremper une cuillère dans la sauce. Si la sauce reste légèrement sur le dos de la cuillère et qu’un trait de doigt reste visible quelques secondes, elle est nappante. Ce signe est plus fiable qu’un temps de cuisson fixe.",
        "tip": "La cuillère est un thermomètre de texture."
      },
      {
        "title": "Corriger par petites touches",
        "body": "Une sauce trop liquide peut réduire, recevoir une liaison ou être mixée avec un élément qui donne du corps. Une sauce trop épaisse se détend avec un liquide chaud. Une sauce granuleuse vient souvent d’un ajout trop brutal, d’un feu trop fort ou d’une farine mal incorporée. La correction doit être progressive, sinon on crée un second problème.",
        "tip": "Détendre, réduire, lier : une correction à la fois."
      }
    ],
    "goFurther": {
      "title": "Pourquoi la sauce est un marqueur de niveau",
      "content": "Une sauce oblige à comprendre le goût, la texture, la chaleur et le timing. Elle révèle vite les erreurs : manque de réduction, excès de sel, liaison lourde, feu trop fort, absence d’acidité. C’est pour cela qu’elle fait progresser rapidement."
    },
    "quiz": [
      {
        "q": "Ta sauce est bonne en goût mais coule comme de l’eau et reste au fond de l’assiette. Quel est le problème principal ?",
        "options": [
          "Elle manque de texture ou de liaison",
          "Elle manque forcément de poivre",
          "Elle contient trop de couleur",
          "Elle a été servie dans une assiette trop grande uniquement"
        ],
        "answer": 0,
        "explanation": "Une sauce doit accrocher un minimum à l’aliment. Si elle fuit complètement, il faut réduire ou lier."
      },
      {
        "q": "Ta sauce est trop épaisse et pâteuse. Quelle correction est la plus logique ?",
        "options": [
          "La détendre progressivement avec un liquide chaud",
          "Ajouter plus de farine",
          "La faire réduire davantage",
          "Ajouter du sel pour la liquéfier"
        ],
        "answer": 0,
        "explanation": "Une sauce trop épaisse se corrige avec un liquide adapté, ajouté petit à petit pour retrouver une texture souple."
      },
      {
        "q": "Tu fais réduire une sauce déjà salée. Que dois-tu surveiller ?",
        "options": [
          "Le sel va se concentrer avec la réduction",
          "Le sel va disparaître",
          "La sauce va devenir froide",
          "La texture ne changera jamais"
        ],
        "answer": 0,
        "explanation": "La réduction évapore l’eau mais garde le sel. Il faut ajuster l’assaisonnement après réduction."
      },
      {
        "q": "Ta sauce nappe la cuillère mais reste fluide et brillante. Que peux-tu en déduire ?",
        "options": [
          "La texture est probablement proche du bon point",
          "Elle est forcément ratée",
          "Elle doit être bouillie encore 30 minutes",
          "Elle contient trop peu de liquide"
        ],
        "answer": 0,
        "explanation": "Une sauce nappante, fluide et brillante est souvent bien équilibrée en texture."
      }
    ],
    "linkedRecipes": [
      "bechamel-sans-grumeaux",
      "sauce-creme-champignons"
    ]
  },
  {
    "id": "roux-bechamel-veloute",
    "moduleId": "sauces-chaudes-base",
    "title": "Roux, béchamel et velouté",
    "subtitle": "Lier sans grumeaux ni goût de farine",
    "duration": 12,
    "prerequisites": [
      "comprendre-liaison-sauce"
    ],
    "objectives": [
      "Préparer un roux correctement cuit",
      "Incorporer un liquide sans créer de grumeaux",
      "Différencier béchamel et velouté selon le liquide utilisé"
    ],
    "concepts": [
      {
        "title": "Le roux : farine + matière grasse",
        "body": "Un roux est un mélange de farine et de matière grasse, souvent beurre, cuit quelques instants avant ajout du liquide. La matière grasse enrobe la farine et aide à limiter les grumeaux. La cuisson du roux retire le goût cru de farine. Plus il colore, plus son goût devient marqué, mais moins son pouvoir épaississant est fort.",
        "tip": "Un roux doit cuire, pas brûler."
      },
      {
        "title": "Béchamel ou velouté",
        "body": "La béchamel est liée avec un roux et du lait. Elle sert aux gratins, croque-monsieur, lasagnes ou légumes. Le velouté utilise un fond ou un bouillon à la place du lait. Même technique, identité différente : le liquide choisi donne le caractère de la sauce.",
        "tip": "Même roux, autre liquide, autre sauce."
      },
      {
        "title": "Liquide progressif, fouet actif",
        "body": "Les grumeaux apparaissent quand le liquide est ajouté trop brutalement ou que la farine n’est pas bien dispersée. Il faut ajouter une partie du liquide, fouetter pour obtenir une pâte lisse, puis continuer progressivement. Un liquide chaud s’incorpore souvent plus facilement, mais demande plus de vigilance.",
        "tip": "D’abord détendre, ensuite allonger."
      },
      {
        "title": "Cuire après liaison",
        "body": "Une fois le liquide ajouté, la sauce doit cuire quelques minutes. Cela termine l’épaississement et retire le goût farineux. Une sauce liée au roux qui n’a pas assez cuit paraît lourde et crayeuse.",
        "tip": "Une sauce liée doit mijoter pour devenir propre."
      }
    ],
    "goFurther": {
      "title": "Roux blanc, blond, brun",
      "content": "Le roux blanc est peu coloré et sert aux sauces claires comme la béchamel. Le roux blond apporte une note plus noisette. Le roux brun est plus marqué, utile pour certaines sauces brunes, mais il lie moins fortement."
    },
    "quiz": [
      {
        "q": "Ta béchamel a un goût de farine crue. Quelle erreur est probable ?",
        "options": [
          "Le roux ou la sauce n’a pas assez cuit",
          "Tu as mis trop peu de muscade",
          "Le lait était trop blanc",
          "Tu as fouetté trop régulièrement"
        ],
        "answer": 0,
        "explanation": "La farine doit cuire dans le roux puis dans la sauce. Sinon le goût cru reste perceptible."
      },
      {
        "q": "Tu verses tout le lait d’un coup sur le roux et des grumeaux apparaissent. Quelle méthode aurait été plus sûre ?",
        "options": [
          "Ajouter le liquide progressivement en fouettant",
          "Ne jamais utiliser de fouet",
          "Ajouter plus de farine sèche",
          "Faire bouillir sans remuer"
        ],
        "answer": 0,
        "explanation": "Le liquide progressif permet de détendre le roux sans former de blocs de farine."
      },
      {
        "q": "Quelle est la différence principale entre une béchamel et un velouté ?",
        "options": [
          "Le liquide utilisé : lait pour béchamel, fond ou bouillon pour velouté",
          "La béchamel ne contient jamais de farine",
          "Le velouté est toujours froid",
          "La béchamel se fait sans cuisson"
        ],
        "answer": 0,
        "explanation": "La technique de liaison est proche. Le liquide donne la famille de sauce."
      },
      {
        "q": "Ta sauce devient trop épaisse en refroidissant légèrement. Que fais-tu ?",
        "options": [
          "Tu la détends avec un peu de liquide chaud en fouettant",
          "Tu ajoutes de la farine",
          "Tu la fais réduire davantage",
          "Tu ajoutes du sel pour la fluidifier"
        ],
        "answer": 0,
        "explanation": "Une sauce au roux épaissit en reposant. Un peu de liquide chaud permet de retrouver une texture nappante."
      }
    ],
    "linkedRecipes": [
      "bechamel-sans-grumeaux"
    ]
  },
  {
    "id": "sauce-tomate-reduite",
    "moduleId": "sauces-chaudes-base",
    "title": "Sauce tomate réduite",
    "subtitle": "Concentrer sans rendre acide ou lourde",
    "duration": 10,
    "prerequisites": [
      "roux-bechamel-veloute"
    ],
    "objectives": [
      "Construire une sauce tomate à partir d’une base aromatique",
      "Réduire pour concentrer sans brûler",
      "Équilibrer acidité, sel, sucre naturel et gras"
    ],
    "concepts": [
      {
        "title": "La tomate demande du temps",
        "body": "Une sauce tomate rapide peut être fraîche et vive, mais une sauce tomate réduite demande du temps pour perdre son eau et concentrer son goût. La cuisson adoucit l’acidité crue, concentre l’umami et donne une texture plus nappante.",
        "tip": "La tomate devient sauce quand elle perd son eau."
      },
      {
        "title": "Base aromatique douce",
        "body": "Oignon, ail, huile d’olive, parfois carotte ou céleri, forment la base. Ils doivent cuire sans brûler avant l’ajout de tomate. Un ail brûlé ou un oignon noir donnera de l’amertume à toute la sauce.",
        "tip": "Une sauce tomate commence avant la tomate."
      },
      {
        "title": "Réduire sans accrocher",
        "body": "La tomate épaissit en réduisant et accroche plus facilement au fond. Il faut cuire à feu modéré, remuer régulièrement et surveiller les projections. Une sauce qui attache prend vite un goût brûlé difficile à corriger.",
        "tip": "Plus c’est épais, plus ça accroche."
      },
      {
        "title": "Équilibrer l’acidité",
        "body": "Si la sauce est trop acide, il ne faut pas sucrer automatiquement. Il faut d’abord cuire davantage, ajouter un peu de gras, vérifier le sel et seulement ensuite corriger avec une petite douceur si nécessaire. Une sauce trop sucrée devient vite plate.",
        "tip": "La cuisson corrige souvent mieux que le sucre."
      }
    ],
    "goFurther": {
      "title": "Tomate fraîche, concassée, concentré",
      "content": "La tomate fraîche donne de la vivacité, la tomate en conserve donne de la régularité, le concentré apporte profondeur et umami s’il est cuit dans le gras. Les combiner permet d’équilibrer fraîcheur et fond."
    },
    "quiz": [
      {
        "q": "Ta sauce tomate reste aqueuse et le goût paraît dispersé. Quelle action est la plus logique ?",
        "options": [
          "La réduire doucement pour évaporer l’eau",
          "Ajouter beaucoup d’eau froide",
          "Ajouter de l’huile jusqu’à couvrir la surface",
          "La servir sans cuisson"
        ],
        "answer": 0,
        "explanation": "La réduction concentre les arômes et donne une texture plus nappante."
      },
      {
        "q": "Ton ail devient brun foncé avant l’ajout de tomate. Que risques-tu ?",
        "options": [
          "Une amertume dans toute la sauce",
          "Une sauce plus fraîche",
          "Une texture plus crémeuse",
          "Une acidité supprimée"
        ],
        "answer": 0,
        "explanation": "L’ail brûlé diffuse son amertume dans la sauce entière."
      },
      {
        "q": "Ta sauce tomate est acide après 5 minutes de cuisson. Que testes-tu avant d’ajouter du sucre ?",
        "options": [
          "Prolonger la cuisson douce, vérifier le sel et ajouter un peu de gras si besoin",
          "Ajouter beaucoup de sucre immédiatement",
          "Ajouter du vinaigre",
          "Mixer avec de la farine crue"
        ],
        "answer": 0,
        "explanation": "La cuisson et l’équilibre sel/gras adoucissent souvent l’acidité. Le sucre doit rester une correction mesurée."
      },
      {
        "q": "Ta sauce tomate commence à épaissir et à éclabousser. Quel geste est utile ?",
        "options": [
          "Baisser légèrement, remuer et couvrir partiellement si nécessaire",
          "Augmenter au maximum",
          "Ne plus jamais remuer",
          "Ajouter du sel pour arrêter les projections"
        ],
        "answer": 0,
        "explanation": "Une sauce épaisse accroche et projette. Il faut contrôler chaleur et évaporation."
      }
    ],
    "linkedRecipes": [
      "sauce-tomate-base"
    ]
  },
  {
    "id": "sauce-creme-nappante",
    "moduleId": "sauces-chaudes-base",
    "title": "Sauce crème nappante",
    "subtitle": "Réduire et équilibrer sans alourdir",
    "duration": 10,
    "prerequisites": [
      "sauce-tomate-reduite"
    ],
    "objectives": [
      "Réduire une sauce crème jusqu’à texture nappante",
      "Équilibrer richesse, sel et acidité",
      "Éviter une crème séparée, trop salée ou trop lourde"
    ],
    "concepts": [
      {
        "title": "La crème donne du corps",
        "body": "La crème apporte gras, eau et protéines. En réduisant, elle épaissit naturellement et devient nappante. Elle donne de la rondeur, mais peut vite devenir lourde si rien ne l’équilibre.",
        "tip": "Crème = rondeur, mais attention à la lourdeur."
      },
      {
        "title": "Réduire doucement",
        "body": "Une crème bouillie trop violemment peut accrocher, réduire trop vite ou se séparer selon sa composition. Une réduction douce donne une texture plus régulière. Il faut remuer et surveiller le fond, surtout si la sauce contient fromage, moutarde ou sucs.",
        "tip": "La crème aime la réduction calme."
      },
      {
        "title": "L’acidité comme équilibre",
        "body": "Une sauce crème gagne souvent avec une pointe d’acidité : moutarde, vin réduit, citron, vinaigre doux. Cette acidité ne doit pas dominer ; elle coupe la lourdeur et rend la sauce plus lisible.",
        "tip": "Une sauce crème a souvent besoin d’un réveil."
      },
      {
        "title": "Sel et ingrédients salés",
        "body": "Parmesan, bouillon, moutarde, lardons ou jus réduit apportent déjà du sel. Comme la crème réduit, l’assaisonnement se concentre. Il vaut mieux saler prudemment et ajuster à la fin.",
        "tip": "Crème qui réduit = sel qui monte."
      }
    ],
    "goFurther": {
      "title": "Crème entière ou légère",
      "content": "Une crème entière donne une texture plus stable et plus ronde. Une crème légère peut être plus fragile à la réduction. Pour apprendre, il vaut mieux travailler avec une crème qui supporte la cuisson."
    },
    "quiz": [
      {
        "q": "Ta sauce crème est riche mais plate. Que peux-tu tester avant d’ajouter plus de crème ?",
        "options": [
          "Une petite touche d’acidité ou de moutarde",
          "Beaucoup de sucre",
          "Encore plus de crème",
          "De l’eau froide en grande quantité"
        ],
        "answer": 0,
        "explanation": "L’acidité équilibre la richesse et donne du relief à une sauce crème."
      },
      {
        "q": "Ta sauce crème devient trop salée après réduction. Quelle erreur est probable ?",
        "options": [
          "Tu as salé trop tôt ou utilisé des ingrédients déjà salés",
          "Tu as trop peu remué uniquement",
          "Tu as ajouté trop peu de poivre",
          "La crème n’était pas assez blanche"
        ],
        "answer": 0,
        "explanation": "La réduction concentre le sel. Les ingrédients salés doivent être pris en compte avant d’assaisonner."
      },
      {
        "q": "Ta crème accroche au fond pendant la réduction. Que fais-tu ?",
        "options": [
          "Baisser le feu et remuer en raclant le fond",
          "Augmenter le feu pour aller plus vite",
          "Arrêter de remuer",
          "Ajouter de la farine sèche"
        ],
        "answer": 0,
        "explanation": "Une sauce qui épaissit accroche plus facilement. La chaleur doit être contrôlée."
      },
      {
        "q": "Comment savoir si une sauce crème est nappante ?",
        "options": [
          "Elle tient légèrement sur le dos de la cuillère",
          "Elle devient solide",
          "Elle coule comme de l’eau",
          "Elle bout à gros bouillons pendant 20 minutes"
        ],
        "answer": 0,
        "explanation": "Le test de la cuillère indique une texture suffisante pour enrober sans être lourde."
      }
    ],
    "linkedRecipes": [
      "sauce-creme-champignons",
      "poulet-creme-moutarde-simple"
    ]
  },
  {
    "id": "comprendre-sucs-cuisson",
    "moduleId": "jus-deglacage-sauces-cuisson",
    "title": "Comprendre les sucs de cuisson",
    "subtitle": "Lire le fond de la poêle",
    "duration": 10,
    "prerequisites": [
      "sauce-creme-nappante"
    ],
    "objectives": [
      "Identifier les sucs utiles et les sucs brûlés",
      "Construire une sauce à partir d’une cuisson",
      "Éviter de laver le goût avant de faire la sauce"
    ],
    "concepts": [
      {
        "title": "Les sucs sont du goût concentré",
        "body": "Après avoir saisi une viande, une volaille, des champignons ou certains légumes, des traces brunes restent au fond de la poêle. Ce sont souvent des sucs : protéines, sucres et jus concentrés par la chaleur. Dissous dans un liquide, ils deviennent la base d’une sauce rapide.",
        "tip": "Le fond brun de la poêle est souvent le début de la sauce."
      },
      {
        "title": "Brun n’est pas noir",
        "body": "Des sucs bruns donnent du goût. Des sucs noirs donnent souvent de l’amertume. La différence est essentielle. Si le fond sent le brûlé, mieux vaut ne pas construire toute une sauce dessus. Une sauce ne corrige pas toujours l’amertume d’un fond carbonisé.",
        "tip": "Brun se déglace ; noir se méfie."
      },
      {
        "title": "Le gras se distingue des sucs",
        "body": "Après cuisson, il peut y avoir du gras liquide et des sucs collés. Le gras porte des arômes mais peut alourdir. On peut en retirer une partie avant de déglacer, tout en gardant les sucs au fond.",
        "tip": "Dégraisser n’est pas jeter le goût."
      },
      {
        "title": "La sauce commence pendant la cuisson",
        "body": "Une bonne sauce de cuisson dépend de ce qui s’est passé avant : aliment bien séché, bonne coloration, feu contrôlé, fond non brûlé. Si la saisie est pâle ou noyée d’eau, la sauce aura moins de profondeur.",
        "tip": "Une sauce minute se prépare avant le déglaçage."
      }
    ],
    "goFurther": {
      "title": "Pourquoi l’inox est utile",
      "content": "Une poêle inox laisse souvent apparaître les sucs plus clairement qu’une poêle antiadhésive. Elle peut sembler plus exigeante, mais elle apprend à lire la coloration et à construire une sauce."
    },
    "quiz": [
      {
        "q": "Après cuisson d’un steak, tu vois des traces brunes au fond de la poêle. Que fais-tu si elles ne sentent pas brûlé ?",
        "options": [
          "Tu les dissous avec un liquide pour faire une sauce",
          "Tu laves immédiatement la poêle",
          "Tu ajoutes du sucre et tu grattes à sec",
          "Tu les ignores car elles n’ont aucun goût"
        ],
        "answer": 0,
        "explanation": "Les sucs bruns sont une base de goût. Le déglaçage les transforme en sauce."
      },
      {
        "q": "Le fond de ta poêle est noir et sent âcre. Que dois-tu éviter ?",
        "options": [
          "Construire toute ta sauce dessus",
          "Changer de poêle si nécessaire",
          "Baisser le feu la prochaine fois",
          "Identifier la surcuisson"
        ],
        "answer": 0,
        "explanation": "Un fond brûlé apporte de l’amertume. Il vaut mieux recommencer la base que concentrer le défaut."
      },
      {
        "q": "Ta poêle contient beaucoup de gras après cuisson d’un magret. Quelle action est logique avant de déglacer ?",
        "options": [
          "Retirer une partie du gras tout en gardant les sucs",
          "Garder tout le gras sans réfléchir",
          "Ajouter beaucoup d’eau froide dans tout le gras",
          "Laver le fond pour repartir propre"
        ],
        "answer": 0,
        "explanation": "Trop de gras alourdit la sauce. Les sucs, eux, doivent rester pour le goût."
      },
      {
        "q": "Ta viande n’a pas coloré et a rendu beaucoup d’eau. Quel impact sur la sauce ?",
        "options": [
          "Moins de sucs et donc moins de profondeur",
          "Une sauce forcément plus intense",
          "Une sauce automatiquement nappante",
          "Aucun impact"
        ],
        "answer": 0,
        "explanation": "Sans coloration, il y a moins de sucs concentrés. La sauce de cuisson sera moins profonde."
      }
    ],
    "linkedRecipes": [
      "steak-sauce-echalote"
    ]
  },
  {
    "id": "deglacer-correctement",
    "moduleId": "jus-deglacage-sauces-cuisson",
    "title": "Déglacer correctement",
    "subtitle": "Dissoudre les sucs sans diluer le goût",
    "duration": 10,
    "prerequisites": [
      "comprendre-sucs-cuisson"
    ],
    "objectives": [
      "Choisir un liquide de déglaçage adapté",
      "Racler les sucs sans brûler la sauce",
      "Réduire après déglaçage pour concentrer"
    ],
    "concepts": [
      {
        "title": "Déglacer, c’est décoller le goût",
        "body": "Déglacer consiste à ajouter un liquide dans une poêle ou cocotte chaude pour dissoudre les sucs. On racle ensuite avec une spatule pour les intégrer au liquide. Ce geste transforme le fond de cuisson en base de sauce.",
        "tip": "Le déglaçage récupère ce que la cuisson a concentré."
      },
      {
        "title": "Choisir le bon liquide",
        "body": "Eau, bouillon, vin, vinaigre, jus, crème ou fond ne donnent pas le même résultat. L’eau récupère les sucs sans ajouter de goût. Le vin apporte acidité et arômes mais doit réduire. Le bouillon apporte du fond. Le vinaigre réveille mais doit être dosé.",
        "tip": "Le liquide de déglaçage donne la direction de la sauce."
      },
      {
        "title": "Attention aux vapeurs et au feu",
        "body": "Ajouter un liquide dans une poêle chaude crée de la vapeur. Il faut verser prudemment, baisser si nécessaire et éviter de mettre le visage au-dessus. Si le feu est trop fort, le liquide s’évapore avant d’avoir dissous correctement les sucs.",
        "tip": "Déglacer chaud, mais pas dans la panique."
      },
      {
        "title": "Déglacer puis réduire",
        "body": "Après déglaçage, le liquide est souvent trop fluide et trop dispersé. Il faut réduire pour concentrer. C’est à ce moment que le sel et l’acidité montent. L’assaisonnement final doit donc arriver après réduction.",
        "tip": "Déglacer récupère, réduire concentre."
      }
    ],
    "goFurther": {
      "title": "Déglacer au vinaigre",
      "content": "Le vinaigre est très utile pour équilibrer une viande grasse ou une sauce lourde. Il doit souvent être réduit pour perdre son agressivité. Quelques gouttes peuvent suffire."
    },
    "quiz": [
      {
        "q": "Tu ajoutes du vin pour déglacer puis tu sers immédiatement. Le goût est agressif. Quelle étape manque ?",
        "options": [
          "Réduire le vin pour intégrer son acidité",
          "Ajouter plus de vin cru",
          "Laver la poêle",
          "Mettre le feu au maximum sans surveiller"
        ],
        "answer": 0,
        "explanation": "Le vin doit souvent réduire pour perdre son côté cru et concentrer ses arômes."
      },
      {
        "q": "Tu verses de l’eau dans une poêle très chaude et un nuage de vapeur monte. Quel réflexe est correct ?",
        "options": [
          "Garder le visage éloigné et racler prudemment",
          "Mettre le visage au-dessus pour sentir",
          "Ajouter l’eau depuis très haut",
          "Jeter la poêle"
        ],
        "answer": 0,
        "explanation": "Le déglaçage produit de la vapeur chaude. Il faut rester prudent et contrôler le feu."
      },
      {
        "q": "Après déglaçage, ta sauce est très liquide. Que fais-tu ?",
        "options": [
          "Tu la fais réduire doucement",
          "Tu ajoutes beaucoup de sel",
          "Tu la sers telle quelle forcément",
          "Tu ajoutes de l’eau"
        ],
        "answer": 0,
        "explanation": "La réduction évapore l’eau et concentre le goût."
      },
      {
        "q": "Tu veux une sauce plus ronde après cuisson d’une volaille. Quel liquide est plus cohérent qu’une eau seule ?",
        "options": [
          "Un bouillon ou un fond léger",
          "De l’eau glacée non salée uniquement",
          "Un grand volume de vinaigre pur",
          "Du sucre sec"
        ],
        "answer": 0,
        "explanation": "Un bouillon ou fond apporte du goût en plus des sucs récupérés."
      }
    ],
    "linkedRecipes": [
      "steak-sauce-echalote"
    ]
  },
  {
    "id": "reduire-jus-court",
    "moduleId": "jus-deglacage-sauces-cuisson",
    "title": "Réduire un jus court",
    "subtitle": "Concentrer sans sursaler",
    "duration": 10,
    "prerequisites": [
      "deglacer-correctement"
    ],
    "objectives": [
      "Transformer un déglaçage en jus court",
      "Obtenir une texture brillante et concentrée",
      "Éviter une sauce trop salée, trop acide ou brûlée"
    ],
    "concepts": [
      {
        "title": "Un jus court reste intense et fluide",
        "body": "Un jus court n’est pas une grande sauce épaisse. C’est une petite quantité de liquide concentré, souvent issue des sucs, d’un fond ou d’un bouillon réduit. Il doit être intense, brillant et assez fluide pour napper légèrement.",
        "tip": "Un jus court se dose en cuillères, pas en bols."
      },
      {
        "title": "La réduction concentre tout",
        "body": "En réduisant, tu retires de l’eau. Le sel, l’acidité, le sucre, la gélatine et les arômes restent. C’est pour cela qu’un jus peut passer de délicieux à trop salé en deux minutes.",
        "tip": "La fin d’une réduction demande le plus d’attention."
      },
      {
        "title": "Texture brillante",
        "body": "Un jus devient brillant quand il contient assez de gélatine, de gras bien intégré ou de beurre monté. Il ne doit pas forcément être épais comme une crème. La brillance et l’intensité comptent plus que le volume.",
        "tip": "Brillant et court vaut mieux que long et fade."
      },
      {
        "title": "Goûter avant de servir",
        "body": "Un jus se goûte à la fin, après réduction. S’il est trop fort, on peut l’allonger avec un peu d’eau ou de bouillon non salé. S’il est plat, on peut réduire un peu plus ou ajouter une pointe d’acidité.",
        "tip": "Un jus se règle au dernier moment."
      }
    ],
    "goFurther": {
      "title": "La gélatine naturelle",
      "content": "Les os, parures, cartilages et cuissons longues apportent de la gélatine. Elle donne au jus une texture brillante et nappante sans ajout de farine."
    },
    "quiz": [
      {
        "q": "Ton jus réduit devient très salé alors qu’il était juste au départ. Pourquoi ?",
        "options": [
          "La réduction a concentré le sel",
          "Le sel a doublé tout seul",
          "Le beurre a créé du sel",
          "La poêle a refroidi"
        ],
        "answer": 0,
        "explanation": "L’eau s’évapore, le sel reste. Il faut saler prudemment avant réduction."
      },
      {
        "q": "Ton jus est abondant mais fade. Quelle action est la plus logique ?",
        "options": [
          "Réduire pour concentrer",
          "Ajouter beaucoup d’eau",
          "Le servir en grande quantité",
          "Ajouter de la farine sèche sans cuisson"
        ],
        "answer": 0,
        "explanation": "Un jus court doit être concentré. Trop de volume dilue le goût."
      },
      {
        "q": "Ton jus est trop réduit et trop puissant. Que peux-tu faire ?",
        "options": [
          "L’allonger avec un peu d’eau ou de bouillon non salé",
          "Le réduire encore",
          "Ajouter beaucoup de sel",
          "Le faire brûler pour l’adoucir"
        ],
        "answer": 0,
        "explanation": "Quand la concentration est excessive, il faut diluer avec un liquide neutre ou peu salé."
      },
      {
        "q": "Un jus court réussi est plutôt :",
        "options": [
          "Intense, brillant et servi en petite quantité",
          "Très pâle, très abondant et sans goût",
          "Solide comme une pâte",
          "Toujours sucré"
        ],
        "answer": 0,
        "explanation": "Le jus court est concentré. Il accompagne le plat sans l’inonder."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "monter-sauce-beurre",
    "moduleId": "jus-deglacage-sauces-cuisson",
    "title": "Monter une sauce au beurre",
    "subtitle": "Donner brillance et rondeur hors du feu",
    "duration": 10,
    "prerequisites": [
      "reduire-jus-court"
    ],
    "objectives": [
      "Monter une sauce avec du beurre froid",
      "Comprendre pourquoi la température doit rester contrôlée",
      "Rattraper une sauce trop grasse ou séparée"
    ],
    "concepts": [
      {
        "title": "Monter au beurre",
        "body": "Monter au beurre consiste à incorporer de petits morceaux de beurre froid dans un jus réduit ou une sauce, souvent hors du feu ou à feu très doux. Le beurre donne de la brillance, de la rondeur et une texture plus nappante.",
        "tip": "Beurre froid, sauce chaude, feu doux."
      },
      {
        "title": "La température est critique",
        "body": "Si la sauce bout fortement après ajout du beurre, l’émulsion peut se casser et le gras ressortir. Il faut garder une chaleur suffisante pour fondre le beurre, mais pas assez forte pour séparer la sauce.",
        "tip": "Monter au beurre ne veut pas dire faire bouillir le beurre."
      },
      {
        "title": "Ajouter progressivement",
        "body": "Le beurre s’ajoute en petits morceaux, en fouettant ou en remuant. Chaque morceau doit presque être intégré avant le suivant. Cela donne une sauce plus stable et plus brillante.",
        "tip": "Petit à petit, la sauce devient brillante."
      },
      {
        "title": "Équilibrer la richesse",
        "body": "Le beurre arrondit mais peut alourdir. Une pointe d’acidité, un jus réduit bien concentré ou une herbe fraîche peut garder la sauce nette. Si elle devient trop grasse, il faut parfois l’allonger ou ajouter un peu d’acidité.",
        "tip": "Le beurre finit la sauce ; il ne doit pas l’écraser."
      }
    ],
    "goFurther": {
      "title": "Beurre monté et beurre blanc",
      "content": "Le principe du beurre monté prépare aux sauces émulsionnées chaudes. Dans un beurre blanc, le beurre est incorporé dans une réduction acide. Dans un jus monté, il finit une sauce de cuisson."
    },
    "quiz": [
      {
        "q": "Tu ajoutes du beurre dans une sauce qui bout fortement et le gras ressort. Quelle erreur est probable ?",
        "options": [
          "Température trop élevée pendant le montage",
          "Beurre trop froid uniquement",
          "Sauce trop peu salée",
          "Trop peu de poivre"
        ],
        "answer": 0,
        "explanation": "Une ébullition forte peut casser l’émulsion. Le beurre s’incorpore à chaleur douce."
      },
      {
        "q": "Pourquoi utiliser du beurre froid en petits morceaux ?",
        "options": [
          "Pour l’incorporer progressivement et stabiliser la sauce",
          "Pour refroidir complètement le plat",
          "Pour empêcher toute brillance",
          "Pour supprimer le goût du jus"
        ],
        "answer": 0,
        "explanation": "Le beurre froid fond progressivement et aide à créer une texture brillante."
      },
      {
        "q": "Ta sauce montée au beurre devient lourde. Que peux-tu tester ?",
        "options": [
          "Une petite pointe d’acidité",
          "Encore beaucoup de beurre",
          "Une réduction extrême",
          "Du sucre en grande quantité"
        ],
        "answer": 0,
        "explanation": "L’acidité peut équilibrer la richesse du beurre et rendre la sauce plus lisible."
      },
      {
        "q": "Quand faut-il généralement monter un jus au beurre ?",
        "options": [
          "À la fin, après réduction",
          "Avant toute cuisson",
          "Avant d’obtenir les sucs",
          "Dans une poêle froide avec viande crue"
        ],
        "answer": 0,
        "explanation": "Le jus doit d’abord être concentré. Le beurre intervient en finition."
      }
    ],
    "linkedRecipes": [
      "steak-sauce-echalote"
    ]
  },
  {
    "id": "role-fond-bouillon",
    "moduleId": "fonds-bouillons-fumets",
    "title": "À quoi sert un fond ou un bouillon ?",
    "subtitle": "Créer une base de goût réutilisable",
    "duration": 10,
    "prerequisites": [
      "monter-sauce-beurre"
    ],
    "objectives": [
      "Différencier eau, bouillon, fond et fumet",
      "Comprendre leur rôle dans les sauces, soupes et cuissons",
      "Identifier ce qui donne goût, corps et netteté"
    ],
    "concepts": [
      {
        "title": "L’eau cuit, le bouillon nourrit le goût",
        "body": "L’eau permet de cuire, mais elle n’apporte pas de profondeur. Un bouillon ou un fond ajoute des arômes, du sel parfois, du corps et une base gustative. C’est la différence entre cuire un risotto à l’eau et le cuire avec un bon bouillon.",
        "tip": "Un bon liquide change tout le plat."
      },
      {
        "title": "Bouillon, fond, fumet",
        "body": "Un bouillon est souvent plus léger, prêt à être consommé ou utilisé. Un fond est plus structurant, souvent réduit, destiné aux sauces et jus. Un fumet est un fond court à base de poisson ou d’arêtes, cuit rapidement pour éviter l’amertume.",
        "tip": "Bouillon pour cuire, fond pour construire, fumet pour poisson."
      },
      {
        "title": "Goût et corps",
        "body": "Le goût vient des légumes, aromates, viandes, os, parures ou arêtes. Le corps vient notamment de la gélatine des os, cartilages et tissus. Un bon fond peut donner une sauce brillante sans farine.",
        "tip": "Le corps d’un fond ne vient pas que du goût, mais de la matière."
      },
      {
        "title": "Netteté",
        "body": "Un fond ou bouillon propre demande cuisson douce, écumage si nécessaire, filtration et refroidissement correct. Une ébullition violente trouble le liquide et peut donner un goût moins net.",
        "tip": "Un bon fond mijote, il ne se défend pas."
      }
    ],
    "goFurther": {
      "title": "Le piège du bouillon trop salé",
      "content": "Un bouillon destiné à réduire doit être peu salé. Sinon, la réduction concentre le sel et rend la sauce difficile à corriger. Saler fort un fond au départ est rarement une bonne idée."
    },
    "quiz": [
      {
        "q": "Pourquoi un risotto au bouillon a-t-il plus de profondeur qu’un risotto à l’eau ?",
        "options": [
          "Le bouillon apporte des arômes et du corps pendant l’absorption",
          "Le bouillon empêche le riz de cuire",
          "L’eau rend toujours le riz sucré",
          "Le bouillon remplace le beurre uniquement"
        ],
        "answer": 0,
        "explanation": "Le riz absorbe le liquide. Si ce liquide a du goût, le riz en gagne aussi."
      },
      {
        "q": "Tu veux faire réduire un fond pour une sauce. Quelle précaution est importante ?",
        "options": [
          "Utiliser un fond peu salé",
          "Le saler fortement dès le départ",
          "Le faire bouillir violemment sans surveillance",
          "Ne jamais le filtrer"
        ],
        "answer": 0,
        "explanation": "La réduction concentre le sel. Un fond peu salé laisse plus de contrôle."
      },
      {
        "q": "Quelle différence simple entre fond et fumet ?",
        "options": [
          "Le fumet est une base courte, souvent de poisson, qui ne doit pas cuire trop longtemps",
          "Le fumet est toujours sucré",
          "Le fond est toujours froid",
          "Le fumet ne sert jamais aux sauces"
        ],
        "answer": 0,
        "explanation": "Les arêtes de poisson donnent vite du goût mais peuvent devenir amères si elles cuisent trop longtemps."
      },
      {
        "q": "Ton bouillon bout violemment et devient trouble. Quelle correction est préférable ?",
        "options": [
          "Baisser pour maintenir un frémissement doux",
          "Augmenter encore le feu",
          "Ajouter de la farine",
          "Couvrir hermétiquement et oublier"
        ],
        "answer": 0,
        "explanation": "Une cuisson douce garde un liquide plus net et plus propre."
      }
    ],
    "linkedRecipes": [
      "bouillon-legumes-propre"
    ]
  },
  {
    "id": "bouillon-legumes-volaille",
    "moduleId": "fonds-bouillons-fumets",
    "title": "Bouillon de légumes et de volaille",
    "subtitle": "Extraire du goût sans troubler",
    "duration": 11,
    "prerequisites": [
      "role-fond-bouillon"
    ],
    "objectives": [
      "Construire un bouillon avec légumes, aromates et parures",
      "Maintenir une cuisson douce et propre",
      "Filtrer, refroidir et conserver correctement"
    ],
    "concepts": [
      {
        "title": "La garniture aromatique",
        "body": "Oignon, carotte, poireau, céleri, ail, thym, laurier, queues de persil ou parures propres peuvent parfumer un bouillon. Tout ne doit pas être noble : les parures bien lavées sont utiles. Mais les éléments abîmés, terreux ou amers donnent un mauvais goût.",
        "tip": "Parure propre oui, déchet sale non."
      },
      {
        "title": "Départ à froid ou à chaud",
        "body": "Pour extraire progressivement le goût d’une volaille, d’os ou de légumes, le départ à froid est souvent utile. La montée douce en température permet aux arômes de se diffuser. Pour certains légumes verts ou cuissons précises, on choisit au contraire un départ à chaud, mais ce n’est pas la logique d’un bouillon d’extraction.",
        "tip": "Bouillon d’extraction : la patience commence à froid."
      },
      {
        "title": "Frémissement et écumage",
        "body": "Un bouillon doit frémir doucement. Si des impuretés remontent, on les retire avec une écumoire. Les gros bouillons cassent les éléments, troublent le liquide et peuvent donner une extraction moins nette.",
        "tip": "Petit frémissement, grand résultat."
      },
      {
        "title": "Filtrer et refroidir",
        "body": "Après cuisson, il faut filtrer sans presser trop fort les éléments, pour éviter de troubler le bouillon. Puis refroidir rapidement si on ne l’utilise pas tout de suite. Un bouillon est un produit fragile : la conservation fait partie de la technique.",
        "tip": "Un bouillon propre se finit aussi hors du feu."
      }
    ],
    "goFurther": {
      "title": "Conservation",
      "content": "Un bouillon se garde peu de temps au réfrigérateur et peut être congelé en portions. Pour une utilisation en sauce, congeler en petits volumes est très pratique."
    },
    "quiz": [
      {
        "q": "Tu fais un bouillon avec des verts de poireaux mal lavés. Quel risque ?",
        "options": [
          "Goût terreux et liquide sale",
          "Bouillon plus clair",
          "Extraction plus douce",
          "Meilleure conservation"
        ],
        "answer": 0,
        "explanation": "Les parures sont utiles seulement si elles sont propres. La terre donne un goût désagréable."
      },
      {
        "q": "Ton bouillon bout très fort pendant 1 heure. Quel résultat risques-tu ?",
        "options": [
          "Liquide trouble et goût moins net",
          "Bouillon plus clair",
          "Aucune évaporation",
          "Goût automatiquement plus délicat"
        ],
        "answer": 0,
        "explanation": "Les gros bouillons cassent les éléments et troublent le liquide. Le frémissement est plus propre."
      },
      {
        "q": "Pourquoi éviter de presser fortement les légumes dans la passoire après filtration ?",
        "options": [
          "Cela peut troubler le bouillon et extraire des goûts moins nets",
          "Cela supprime tout le sel",
          "Cela rend le liquide froid",
          "Cela empêche la conservation"
        ],
        "answer": 0,
        "explanation": "Presser fort fait passer des particules fines et parfois des goûts moins propres."
      },
      {
        "q": "Tu ne l’utilises pas tout de suite. Quel réflexe est important ?",
        "options": [
          "Refroidir rapidement et conserver correctement",
          "Le laisser toute la nuit à température ambiante",
          "Le garder dans la casserole chaude fermée",
          "Ajouter beaucoup de farine"
        ],
        "answer": 0,
        "explanation": "Un bouillon est sensible. Le refroidissement et la conservation sont des gestes de sécurité et de qualité."
      }
    ],
    "linkedRecipes": [
      "bouillon-legumes-propre"
    ]
  },
  {
    "id": "fond-brun-simple",
    "moduleId": "fonds-bouillons-fumets",
    "title": "Fond brun simple",
    "subtitle": "Colorer pour donner de la profondeur",
    "duration": 12,
    "prerequisites": [
      "bouillon-legumes-volaille"
    ],
    "objectives": [
      "Comprendre pourquoi on colore os, parures ou légumes",
      "Construire un fond brun sans brûler",
      "Réduire et utiliser un fond dans une sauce"
    ],
    "concepts": [
      {
        "title": "Le fond brun commence par la coloration",
        "body": "Contrairement à un bouillon clair, un fond brun cherche la profondeur. Os, parures ou légumes peuvent être rôtis ou bien colorés avant mouillage. Cette étape crée des arômes grillés et une base plus sombre.",
        "tip": "Fond brun = coloration maîtrisée."
      },
      {
        "title": "Colorer n’est pas brûler",
        "body": "Des éléments bien bruns donnent du goût. Des éléments noirs donnent de l’amertume. Il faut surveiller le four ou la cocotte, retourner si nécessaire, et éviter les sucs carbonisés.",
        "tip": "Brun profond oui, noir amer non."
      },
      {
        "title": "Mouiller et frémir longtemps",
        "body": "Après coloration, on mouille avec de l’eau froide ou un liquide adapté, puis on cuit doucement. Le temps extrait gélatine, arômes et corps. L’ébullition violente trouble et évapore trop vite.",
        "tip": "Après la force de la coloration, la douceur du frémissement."
      },
      {
        "title": "Un fond est une base, pas toujours une sauce",
        "body": "Un fond peut sembler léger seul, mais il devient puissant après réduction ou dans une sauce. Il doit rester assez peu salé pour pouvoir être concentré. Son rôle est de donner de la profondeur, pas de remplacer tous les assaisonnements.",
        "tip": "Le fond prépare la sauce, il ne la termine pas."
      }
    ],
    "goFurther": {
      "title": "Fond brun domestique",
      "content": "À la maison, on peut faire un fond brun simplifié avec os de volaille rôtis, parures de viande ou légumes très colorés. Même une petite quantité congelée peut améliorer un jus ou un mijoté."
    },
    "quiz": [
      {
        "q": "Tes os rôtis deviennent noirs et sentent brûlé. Quel impact sur le fond ?",
        "options": [
          "Risque d’amertume dans tout le fond",
          "Fond plus délicat",
          "Fond plus clair",
          "Aucun impact"
        ],
        "answer": 0,
        "explanation": "La brûlure infuse dans le liquide. Il faut chercher le brun, pas le noir."
      },
      {
        "q": "Pourquoi ne pas saler fortement un fond brun dès le départ ?",
        "options": [
          "Parce qu’il sera souvent réduit ensuite",
          "Parce que le sel empêche l’eau de chauffer",
          "Parce qu’un fond ne contient jamais de goût",
          "Parce que le sel rend les os crus"
        ],
        "answer": 0,
        "explanation": "La réduction concentre le sel. Un fond doit rester contrôlable."
      },
      {
        "q": "Après coloration, tu ajoutes de l’eau et fais bouillir violemment. Quel risque ?",
        "options": [
          "Fond trouble et extraction moins nette",
          "Fond plus clair et parfait",
          "Aucune évaporation",
          "Arômes supprimés"
        ],
        "answer": 0,
        "explanation": "Un fond demande un frémissement doux après la coloration."
      },
      {
        "q": "Ton fond paraît léger juste après filtration. Que peux-tu faire avant de l’utiliser en sauce ?",
        "options": [
          "Le réduire doucement pour concentrer",
          "Ajouter beaucoup de sel immédiatement",
          "Le jeter forcément",
          "Le mixer avec les os"
        ],
        "answer": 0,
        "explanation": "La réduction concentre le goût et le corps du fond."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "fumet-poisson-court",
    "moduleId": "fonds-bouillons-fumets",
    "title": "Fumet de poisson court",
    "subtitle": "Extraire vite sans amertume",
    "duration": 11,
    "prerequisites": [
      "fond-brun-simple"
    ],
    "objectives": [
      "Préparer un fumet avec arêtes et garniture aromatique",
      "Cuire court pour éviter amertume et lourdeur",
      "Utiliser le fumet dans une sauce poisson"
    ],
    "concepts": [
      {
        "title": "Le fumet est rapide",
        "body": "Les arêtes et parures de poisson donnent vite leur goût. Contrairement à un fond brun, un fumet ne doit pas cuire pendant des heures. Une cuisson courte donne un parfum net ; une cuisson trop longue peut devenir amère ou lourde.",
        "tip": "Fumet long = souvent fumet lourd."
      },
      {
        "title": "Arêtes propres",
        "body": "Les arêtes doivent être fraîches et rincées si nécessaire pour retirer le sang ou les impuretés. Les branchies ou parties abîmées donnent un goût fort et désagréable. La qualité de départ est essentielle.",
        "tip": "Poisson frais, fumet net."
      },
      {
        "title": "Suer sans colorer",
        "body": "Pour un fumet clair, on fait souvent suer échalote, poireau ou champignons sans coloration, puis on ajoute les arêtes et le liquide. Le but est d’extraire un parfum délicat, pas de créer un goût rôti.",
        "tip": "Fumet clair : parfum, pas grillé."
      },
      {
        "title": "Utiliser rapidement ou refroidir",
        "body": "Un fumet est fragile. Il doit être filtré et utilisé rapidement, ou refroidi vite. Il sert aux sauces vin blanc, beurre blanc, risotto de poisson, pochage ou cuisson courte.",
        "tip": "Un fumet propre ne traîne pas."
      }
    ],
    "goFurther": {
      "title": "Quels poissons éviter",
      "content": "Les poissons très gras ou très puissants donnent parfois des fumets lourds. Pour apprendre, mieux vaut commencer avec des arêtes de poissons blancs."
    },
    "quiz": [
      {
        "q": "Tu cuis un fumet de poisson pendant 3 heures. Quel risque ?",
        "options": [
          "Goût amer, lourd ou trop fort",
          "Fumet plus frais",
          "Aucune extraction",
          "Fumet automatiquement plus clair"
        ],
        "answer": 0,
        "explanation": "Les arêtes de poisson donnent vite. Une cuisson trop longue extrait des notes moins agréables."
      },
      {
        "q": "Pourquoi éviter les arêtes avec beaucoup de sang ou des parties abîmées ?",
        "options": [
          "Elles peuvent donner un goût fort et trouble",
          "Elles empêchent l’eau de chauffer",
          "Elles rendent le fumet sucré",
          "Elles remplacent les légumes"
        ],
        "answer": 0,
        "explanation": "Les impuretés donnent un goût moins net. Un fumet dépend beaucoup de la propreté du produit."
      },
      {
        "q": "Tu veux un fumet clair et délicat. Que fais-tu avec les aromates ?",
        "options": [
          "Les faire suer sans coloration",
          "Les brûler fortement",
          "Les frire jusqu’au noir",
          "Les ajouter uniquement après filtration"
        ],
        "answer": 0,
        "explanation": "Suer sans colorer développe un parfum doux sans notes grillées."
      },
      {
        "q": "Tu veux faire une sauce vin blanc pour poisson. Pourquoi utiliser un fumet plutôt que de l’eau ?",
        "options": [
          "Le fumet apporte une base de goût cohérente avec le poisson",
          "L’eau empêche toute cuisson",
          "Le fumet remplace le beurre",
          "Le fumet rend la sauce froide"
        ],
        "answer": 0,
        "explanation": "Le fumet donne une profondeur marine et relie la sauce au produit principal."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "principe-emulsion-chaude",
    "moduleId": "sauces-emulsionnees-chaudes",
    "title": "Comprendre une émulsion chaude",
    "subtitle": "Stabiliser le gras avec chaleur contrôlée",
    "duration": 11,
    "prerequisites": [
      "fumet-poisson-court"
    ],
    "objectives": [
      "Comprendre pourquoi une sauce chaude peut trancher",
      "Contrôler température, acidité et incorporation du gras",
      "Reconnaître une sauce stable, nappante et brillante"
    ],
    "concepts": [
      {
        "title": "Une émulsion chaude est fragile",
        "body": "Comme une mayonnaise, une sauce émulsionnée chaude cherche à maintenir ensemble de l’eau et du gras. Mais la chaleur ajoute un risque : trop chaud, le gras se sépare ou le jaune coagule ; trop froid, le beurre ne s’incorpore pas bien. La stabilité dépend du contrôle.",
        "tip": "Chaud, mais jamais brutal."
      },
      {
        "title": "Acidité et eau comme base",
        "body": "Beurre blanc, hollandaise ou béarnaise commencent toujours avec une phase aqueuse : réduction de vin/vinaigre, jus de citron, eau, jaune ou sabayon. Cette base accueille le beurre. Sans assez de phase aqueuse, le beurre se sépare plus facilement.",
        "tip": "Le beurre a besoin d’une base pour s’accrocher."
      },
      {
        "title": "Incorporer progressivement",
        "body": "Le beurre s’ajoute petit à petit, en fouettant. Chaque ajout doit être incorporé avant le suivant. Si on ajoute trop de beurre trop vite, la sauce peut trancher. Le geste doit rester régulier, mais la température compte autant que le fouet.",
        "tip": "Petit beurre après petit beurre."
      },
      {
        "title": "Rattraper une sauce tranchée",
        "body": "Une sauce tranchée montre du gras séparé. Pour la rattraper, il faut souvent repartir avec une petite cuillère d’eau tiède, de réduction ou de jaune selon la sauce, puis réincorporer progressivement la sauce tranchée. Ajouter encore du beurre aggrave souvent le problème.",
        "tip": "Quand ça tranche, recrée une base."
      }
    ],
    "goFurther": {
      "title": "Pourquoi ces sauces sont avancées",
      "content": "Elles demandent de comprendre plusieurs choses à la fois : réduction, émulsion, température, acidité, texture et service immédiat. Elles sont excellentes pour former le sens du geste."
    },
    "quiz": [
      {
        "q": "Ton beurre ressort en surface dans une sauce chaude. Quel diagnostic est probable ?",
        "options": [
          "L’émulsion a tranché",
          "La sauce est parfaitement stable",
          "La sauce manque forcément de farine",
          "La sauce est trop froide pour être servie uniquement"
        ],
        "answer": 0,
        "explanation": "Quand le gras se sépare, la sauce a perdu son émulsion."
      },
      {
        "q": "Pourquoi ne faut-il pas ajouter tout le beurre d’un coup ?",
        "options": [
          "La base ne peut pas l’incorporer progressivement",
          "Le beurre devient sucré",
          "Le vinaigre disparaît",
          "La sauce devient froide définitivement"
        ],
        "answer": 0,
        "explanation": "L’émulsion se construit par petits ajouts. Trop de gras trop vite casse l’équilibre."
      },
      {
        "q": "Ta sauce commence à trancher. Quelle réaction est la plus logique ?",
        "options": [
          "Arrêter d’ajouter du beurre et repartir avec une petite base aqueuse",
          "Ajouter encore plus de beurre",
          "Faire bouillir violemment",
          "Ajouter de la farine sèche"
        ],
        "answer": 0,
        "explanation": "Il faut reconstruire une base stable avant de réincorporer la sauce."
      },
      {
        "q": "Quel signe indique une émulsion chaude réussie ?",
        "options": [
          "Sauce brillante, nappante et homogène",
          "Gras flottant en surface",
          "Morceaux de jaune coagulé",
          "Liquide séparé en deux couches"
        ],
        "answer": 0,
        "explanation": "La sauce doit être lisse, brillante et tenir légèrement sur la cuillère."
      }
    ],
    "linkedRecipes": [
      "beurre-blanc-poisson",
      "hollandaise-asperges"
    ]
  },
  {
    "id": "beurre-blanc",
    "moduleId": "sauces-emulsionnees-chaudes",
    "title": "Beurre blanc",
    "subtitle": "Monter du beurre dans une réduction acide",
    "duration": 12,
    "prerequisites": [
      "principe-emulsion-chaude"
    ],
    "objectives": [
      "Préparer une réduction échalote-vin-vinaigre",
      "Incorporer le beurre froid sans faire trancher",
      "Équilibrer acidité, sel et richesse"
    ],
    "concepts": [
      {
        "title": "La réduction donne l’ossature",
        "body": "Un beurre blanc commence avec une réduction de vin blanc, vinaigre et échalote. Cette base apporte acidité, parfum et phase aqueuse. Si elle est trop abondante, la sauce sera agressive ; si elle est totalement évaporée, le beurre n’a plus de base pour s’émulsionner.",
        "tip": "Réduction courte, goût net."
      },
      {
        "title": "Beurre froid, feu doux",
        "body": "Le beurre doit être ajouté froid, en morceaux, sur feu très doux ou hors du feu. Il fond progressivement et forme une émulsion avec la réduction. Si la casserole est trop chaude, le beurre fond trop vite et la sauce tranche.",
        "tip": "Le beurre blanc se monte, il ne se bout pas."
      },
      {
        "title": "Fouetter ou tourner",
        "body": "Le fouet aide à incorporer le beurre, mais il ne remplace pas la température. On peut fouetter doucement ou tourner la casserole. L’essentiel est d’ajouter le beurre progressivement et de garder une chaleur contrôlée.",
        "tip": "Le geste aide, la température décide."
      },
      {
        "title": "Servir sans attendre",
        "body": "Le beurre blanc est une sauce de service. Elle supporte mal l’attente, le refroidissement et le réchauffage brutal. Elle doit rester tiède-chaude, jamais bouillante. Si elle attend, elle peut trancher.",
        "tip": "Beurre blanc prêt = plat prêt."
      }
    ],
    "goFurther": {
      "title": "Filtrer ou garder l’échalote",
      "content": "Un beurre blanc classique peut être filtré pour une texture lisse ou garder l’échalote pour un côté plus rustique. Le choix dépend du style du plat."
    },
    "quiz": [
      {
        "q": "Ta réduction est totalement sèche avant d’ajouter le beurre. Quel risque ?",
        "options": [
          "Le beurre aura moins de phase aqueuse pour s’émulsionner",
          "La sauce sera plus stable automatiquement",
          "La sauce deviendra une béchamel",
          "Le beurre ne fondra jamais"
        ],
        "answer": 0,
        "explanation": "Il faut garder un peu de liquide acide pour accueillir le beurre."
      },
      {
        "q": "Tu ajoutes le beurre dans une casserole très chaude et la sauce tranche. Quelle erreur ?",
        "options": [
          "Température trop élevée",
          "Pas assez de sel uniquement",
          "Échalote trop fine",
          "Vin trop blanc"
        ],
        "answer": 0,
        "explanation": "Le beurre blanc demande une chaleur douce. Trop chaud, le gras se sépare."
      },
      {
        "q": "Pourquoi ajouter le beurre froid par petits morceaux ?",
        "options": [
          "Pour construire l’émulsion progressivement",
          "Pour refroidir définitivement le plat",
          "Pour empêcher tout goût",
          "Pour supprimer l’acidité"
        ],
        "answer": 0,
        "explanation": "Chaque morceau s’incorpore dans la base avant le suivant, ce qui stabilise la sauce."
      },
      {
        "q": "Ton beurre blanc est prêt mais le poisson n’est pas cuit. Quel problème d’organisation cela révèle ?",
        "options": [
          "La sauce a été lancée trop tôt pour une sauce fragile",
          "Le poisson aurait dû être cru",
          "Il fallait faire bouillir la sauce plus longtemps",
          "L’échalote aurait dû être plus grosse"
        ],
        "answer": 0,
        "explanation": "Le beurre blanc doit être proche du service. Le timing est essentiel."
      }
    ],
    "linkedRecipes": [
      "beurre-blanc-poisson"
    ]
  },
  {
    "id": "hollandaise-sabayon",
    "moduleId": "sauces-emulsionnees-chaudes",
    "title": "Hollandaise et sabayon salé",
    "subtitle": "Épaissir des jaunes sans les brouiller",
    "duration": 12,
    "prerequisites": [
      "beurre-blanc"
    ],
    "objectives": [
      "Comprendre le rôle du jaune dans une sauce chaude",
      "Monter un sabayon à chaleur douce",
      "Incorporer le beurre clarifié ou fondu sans coaguler les œufs"
    ],
    "concepts": [
      {
        "title": "Le jaune épaissit et stabilise",
        "body": "Dans une hollandaise, le jaune d’œuf sert à la fois de liaison et d’émulsifiant. Chauffé doucement avec un peu d’eau ou de citron, il épaissit en sabayon. Trop chaud, il coagule en petits grains comme des œufs brouillés.",
        "tip": "Le jaune aime la chaleur douce."
      },
      {
        "title": "Le bain-marie donne du contrôle",
        "body": "Le bain-marie chauffe plus doucement qu’un feu direct. Il laisse le temps de fouetter et d’observer la texture. Le bol ne doit pas devenir brûlant, sinon les jaunes coagulent trop vite.",
        "tip": "Bain-marie = filet de sécurité."
      },
      {
        "title": "Sabayon : mousse puis ruban",
        "body": "Le sabayon commence mousseux puis épaissit. Il doit devenir plus clair, plus volumineux, et laisser une trace légère au fouet. C’est le moment d’incorporer progressivement le beurre.",
        "tip": "Mousse légère, puis texture qui tient."
      },
      {
        "title": "Beurre et acidité",
        "body": "Le beurre apporte richesse et texture. Le citron ou la réduction acide équilibre le gras. Une hollandaise sans acidité paraît lourde ; trop acide, elle devient agressive. L’équilibre se règle à la fin, par petites touches.",
        "tip": "Le beurre donne le corps, l’acide donne la tension."
      }
    ],
    "goFurther": {
      "title": "Beurre clarifié ou beurre fondu",
      "content": "Le beurre clarifié donne une sauce plus stable car il contient moins d’eau et de particules lactées. À la maison, un beurre fondu tiède peut fonctionner, mais il doit être incorporé progressivement."
    },
    "quiz": [
      {
        "q": "Tes jaunes forment des petits grains dans la hollandaise. Quel est le diagnostic ?",
        "options": [
          "Ils ont trop chauffé et commencent à coaguler",
          "Ils manquent de farine",
          "Ils ne contiennent pas assez de sel",
          "Ils sont trop froids pour toujours"
        ],
        "answer": 0,
        "explanation": "Les jaunes coagulent si la chaleur est trop forte. Il faut contrôler la température."
      },
      {
        "q": "Pourquoi utiliser un bain-marie pour une hollandaise ?",
        "options": [
          "Pour chauffer plus doucement et contrôler la coagulation",
          "Pour faire bouillir les jaunes",
          "Pour refroidir le beurre",
          "Pour éviter de fouetter"
        ],
        "answer": 0,
        "explanation": "Le bain-marie rend la chaleur plus progressive, ce qui réduit le risque d’œufs brouillés."
      },
      {
        "q": "Ta hollandaise est très riche et lourde. Que peux-tu ajuster ?",
        "options": [
          "Quelques gouttes de citron ou une pointe d’acidité",
          "Encore plus de beurre uniquement",
          "Beaucoup de farine",
          "Une cuisson à gros bouillons"
        ],
        "answer": 0,
        "explanation": "L’acidité équilibre la richesse du beurre."
      },
      {
        "q": "Quand incorporer le beurre dans une hollandaise ?",
        "options": [
          "Quand les jaunes ont épaissi en sabayon léger",
          "Avant de fouetter les jaunes",
          "Quand les jaunes sont complètement brouillés",
          "Après refroidissement complet"
        ],
        "answer": 0,
        "explanation": "Le sabayon donne la base émulsionnante capable d’accueillir le beurre."
      }
    ],
    "linkedRecipes": [
      "hollandaise-asperges"
    ]
  },
  {
    "id": "bearnaise-rattrapage",
    "moduleId": "sauces-emulsionnees-chaudes",
    "title": "Béarnaise et rattrapages",
    "subtitle": "Parfumer, monter, sauver",
    "duration": 12,
    "prerequisites": [
      "hollandaise-sabayon"
    ],
    "objectives": [
      "Construire une réduction aromatique pour béarnaise",
      "Monter une sauce proche de l’hollandaise",
      "Rattraper une sauce tranchée ou trop épaisse"
    ],
    "concepts": [
      {
        "title": "Une béarnaise est une hollandaise aromatisée",
        "body": "La béarnaise reprend la logique de l’hollandaise : jaunes, réduction acide, beurre, chaleur douce. Sa personnalité vient de la réduction échalote-vinaigre-vin et des herbes comme estragon et cerfeuil.",
        "tip": "Même logique, parfum différent."
      },
      {
        "title": "La réduction doit être puissante mais courte",
        "body": "La réduction concentre acidité et aromates. Elle doit être assez réduite pour parfumer, mais pas brûlée ni totalement sèche. Si elle est trop acide, la sauce sera agressive ; si elle est trop faible, la béarnaise sera fade.",
        "tip": "La réduction signe la sauce."
      },
      {
        "title": "Rattraper une sauce trop épaisse",
        "body": "Une béarnaise ou hollandaise trop épaisse peut être détendue avec quelques gouttes d’eau tiède ou de réduction. Il faut ajouter très peu de liquide à la fois, puis fouetter.",
        "tip": "Une goutte peut suffire."
      },
      {
        "title": "Rattraper une sauce tranchée",
        "body": "Si le gras se sépare, il faut arrêter la chaleur. On peut repartir dans un bol avec une cuillère d’eau tiède ou un jaune, puis incorporer doucement la sauce tranchée. Le but est de reconstruire l’émulsion, pas de la battre violemment à chaud.",
        "tip": "Sauce tranchée : calme, base, réincorporation."
      }
    ],
    "goFurther": {
      "title": "Service",
      "content": "Ces sauces se servent rapidement, tièdes-chaudes. Les maintenir longtemps est difficile. Mieux vaut les finir juste avant le service plutôt que les préparer trop tôt."
    },
    "quiz": [
      {
        "q": "Ta béarnaise a un goût trop agressif de vinaigre. Quelle étape est probablement en cause ?",
        "options": [
          "Réduction trop acide ou pas assez équilibrée",
          "Beurre ajouté trop froid uniquement",
          "Trop de fouet",
          "Pas assez de farine"
        ],
        "answer": 0,
        "explanation": "La réduction porte l’acidité principale. Elle doit être concentrée mais équilibrée."
      },
      {
        "q": "Ta sauce est trop épaisse mais pas tranchée. Que fais-tu ?",
        "options": [
          "Ajouter quelques gouttes d’eau tiède ou de réduction en fouettant",
          "Ajouter beaucoup de beurre",
          "Faire bouillir fortement",
          "Ajouter de la farine"
        ],
        "answer": 0,
        "explanation": "Quelques gouttes suffisent souvent à détendre une sauce émulsionnée."
      },
      {
        "q": "Ta béarnaise tranche. Que fais-tu en premier ?",
        "options": [
          "Tu retires de la chaleur et reconstruis une base stable",
          "Tu continues à feu fort",
          "Tu ajoutes tout le beurre restant",
          "Tu la mets au four"
        ],
        "answer": 0,
        "explanation": "La chaleur aggrave souvent la séparation. Il faut repartir d’une base aqueuse ou d’un jaune."
      },
      {
        "q": "Pourquoi ajouter les herbes fraîches de béarnaise plutôt en fin de préparation ?",
        "options": [
          "Pour garder leur parfum et leur couleur",
          "Pour les faire brûler",
          "Pour épaissir la sauce à la farine",
          "Pour supprimer l’acidité"
        ],
        "answer": 0,
        "explanation": "Les herbes tendres perdent vite leur fraîcheur avec une chaleur prolongée."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "coagulation-oeufs",
    "moduleId": "oeufs",
    "title": "Comprendre la coagulation des œufs",
    "subtitle": "Le bon œuf est une question de chaleur",
    "duration": 10,
    "prerequisites": [
      "bearnaise-rattrapage"
    ],
    "objectives": [
      "Comprendre pourquoi blanc et jaune ne cuisent pas pareil",
      "Utiliser la chaleur douce pour contrôler la texture",
      "Éviter les œufs caoutchouteux, secs ou granuleux"
    ],
    "concepts": [
      {
        "title": "Le blanc et le jaune réagissent différemment",
        "body": "Le blanc coagule en devenant opaque et ferme. Le jaune épaissit puis durcit plus progressivement. C’est pour cela qu’un œuf mollet peut avoir un blanc pris et un jaune coulant. Comprendre cette différence permet de choisir le bon temps et la bonne intensité.",
        "tip": "Un œuf contient deux cuissons en une."
      },
      {
        "title": "La chaleur douce donne du contrôle",
        "body": "Les œufs cuisent vite. À feu trop fort, ils deviennent secs, caoutchouteux ou granuleux. Une chaleur douce laisse le temps d’arrêter au bon point, surtout pour omelette, œufs brouillés, crème anglaise ou liaison.",
        "tip": "Œuf fragile, feu patient."
      },
      {
        "title": "La cuisson résiduelle compte beaucoup",
        "body": "Un œuf continue de cuire hors du feu : dans une poêle chaude, une casserole, une coquille ou un ramequin. Si la texture est parfaite dans le récipient brûlant, elle sera souvent trop cuite dans l’assiette.",
        "tip": "Pour les œufs, arrête avant le point parfait."
      },
      {
        "title": "Sel, gras et liquide modifient la texture",
        "body": "Le sel assaisonne, le beurre ou la crème apportent de la rondeur, un peu de liquide peut détendre, mais aucun ingrédient ne compense totalement une chaleur trop forte. La texture d’un œuf se joue d’abord au feu.",
        "tip": "La garniture aide, la chaleur décide."
      }
    ],
    "goFurther": {
      "title": "Pourquoi les œufs sont une école de précision",
      "content": "Ils coûtent peu, cuisent vite et montrent immédiatement les erreurs de chaleur. Les maîtriser améliore toutes les techniques sensibles : sauces, crèmes, liaisons et cuissons douces."
    },
    "quiz": [
      {
        "q": "Tes œufs brouillés deviennent secs et granuleux. Quelle cause est la plus probable ?",
        "options": [
          "Chaleur trop forte ou cuisson trop longue",
          "Pas assez de poivre",
          "Bol trop petit avant cuisson",
          "Œufs trop bien battus uniquement"
        ],
        "answer": 0,
        "explanation": "Les protéines ont trop coagulé. Les œufs demandent une chaleur douce et un arrêt anticipé."
      },
      {
        "q": "Pourquoi un œuf mollet peut-il avoir un blanc pris et un jaune coulant ?",
        "options": [
          "Blanc et jaune ne coagulent pas exactement de la même manière",
          "Le jaune ne cuit jamais",
          "Le blanc reste cru",
          "La coquille chauffe seulement le blanc"
        ],
        "answer": 0,
        "explanation": "Le blanc et le jaune ont des compositions différentes et ne prennent pas au même rythme."
      },
      {
        "q": "Ton omelette est parfaite dans la poêle mais sèche dans l’assiette. Que devais-tu anticiper ?",
        "options": [
          "La cuisson résiduelle",
          "Le manque de couteau",
          "L’absence de farine",
          "La couleur de l’assiette"
        ],
        "answer": 0,
        "explanation": "La poêle et l’omelette restent chaudes. La cuisson continue après retrait du feu."
      },
      {
        "q": "Quel est le meilleur outil de contrôle pour les œufs ?",
        "options": [
          "Une chaleur douce et une observation constante de la texture",
          "Un feu maximal",
          "Une cuisson sans regarder",
          "Une grande quantité de sel"
        ],
        "answer": 0,
        "explanation": "Les œufs changent vite. Il faut lire la texture et ajuster la chaleur."
      }
    ],
    "linkedRecipes": [
      "oeufs-brouilles-cremeux",
      "omelette-herbes-baveuse"
    ]
  },
  {
    "id": "oeufs-coque-mollet-dur",
    "moduleId": "oeufs",
    "title": "Œufs coque, mollet et dur",
    "subtitle": "Maîtriser temps, refroidissement et texture",
    "duration": 10,
    "prerequisites": [
      "coagulation-oeufs"
    ],
    "objectives": [
      "Différencier les cuissons coque, mollet et dur",
      "Utiliser le refroidissement pour stopper la cuisson",
      "Éviter jaune trop cuit, blanc caoutchouteux ou coquille difficile"
    ],
    "concepts": [
      {
        "title": "Même ingrédient, trois textures",
        "body": "L’œuf coque garde un jaune liquide et un blanc juste pris. L’œuf mollet a un blanc pris et un jaune coulant ou crémeux. L’œuf dur a blanc et jaune pris. La différence se joue à quelques minutes, selon la taille de l’œuf et sa température de départ.",
        "tip": "Un œuf, trois résultats, quelques minutes d’écart."
      },
      {
        "title": "Départ eau bouillante ou froide",
        "body": "Le départ en eau bouillante donne un timing plus précis pour les œufs coque et mollets. Le départ à froid est parfois utilisé pour les œufs durs, mais il dépend plus de la montée en température. Pour apprendre, l’eau bouillante donne un repère plus clair.",
        "tip": "Pour apprendre le timing, pars d’une eau déjà prête."
      },
      {
        "title": "Refroidir pour stopper",
        "body": "Un œuf chaud continue de cuire dans sa coquille. Pour un œuf mollet ou dur, le refroidissement rapide arrête la cuisson et facilite souvent l’écalage. Sans refroidissement, un jaune coulant peut devenir trop pris.",
        "tip": "Eau froide = stop cuisson."
      },
      {
        "title": "Le jaune gris-vert",
        "body": "Un œuf dur trop cuit peut développer un cercle gris-vert autour du jaune. Ce n’est pas dangereux en soi, mais cela signale une surcuisson et donne souvent un jaune plus sec et une odeur plus soufrée.",
        "tip": "Œuf dur ne veut pas dire œuf oublié."
      }
    ],
    "goFurther": {
      "title": "Variables de cuisson",
      "content": "La taille de l’œuf, sa température de départ, l’altitude, la quantité d’eau et l’intensité de l’ébullition changent légèrement le résultat. Il faut tester avec ses œufs et son matériel."
    },
    "quiz": [
      {
        "q": "Ton œuf mollet est parfait en sortie d’eau, mais le jaune durcit pendant que tu prépares la salade. Que manquait-il ?",
        "options": [
          "Un refroidissement rapide pour stopper la cuisson",
          "Plus de cuisson",
          "Un passage au four",
          "Du sel sur la coquille"
        ],
        "answer": 0,
        "explanation": "La chaleur continue dans la coquille. Refroidir stoppe la cuisson."
      },
      {
        "q": "Ton œuf dur a un jaune sec avec un cercle gris-vert. Quel est le diagnostic ?",
        "options": [
          "Surcuisson",
          "Œuf cru",
          "Manque de vinaigre",
          "Trop peu d’eau froide avant cuisson"
        ],
        "answer": 0,
        "explanation": "Le cercle gris-vert apparaît souvent après une cuisson excessive."
      },
      {
        "q": "Pourquoi partir d’une eau bouillante peut aider pour les œufs mollets ?",
        "options": [
          "Le départ est plus stable et le timing plus précis",
          "L’eau bouillante empêche toute coagulation",
          "La coquille devient comestible",
          "Le jaune ne chauffe jamais"
        ],
        "answer": 0,
        "explanation": "Quand le départ est stable, le temps mesuré donne un résultat plus reproductible."
      },
      {
        "q": "Tu veux un jaune coulant pour une salade. Quel œuf choisis-tu plutôt ?",
        "options": [
          "Œuf mollet",
          "Œuf dur très cuit",
          "Œuf oublié 20 minutes",
          "Œuf cru entier avec coquille"
        ],
        "answer": 0,
        "explanation": "L’œuf mollet donne un blanc pris et un jaune coulant ou crémeux."
      }
    ],
    "linkedRecipes": [
      "oeuf-mollet-salade"
    ]
  },
  {
    "id": "omelette-brouilles",
    "moduleId": "oeufs",
    "title": "Omelette et œufs brouillés",
    "subtitle": "Garder du moelleux",
    "duration": 11,
    "prerequisites": [
      "oeufs-coque-mollet-dur"
    ],
    "objectives": [
      "Cuire les œufs à la poêle sans les dessécher",
      "Différencier omelette baveuse et œufs brouillés crémeux",
      "Arrêter la cuisson avant surcuisson"
    ],
    "concepts": [
      {
        "title": "L’omelette demande vitesse et douceur",
        "body": "Une omelette cuit vite. Il faut une poêle prête, des œufs battus, une assiette proche et une chaleur modérée. Trop chaud, l’extérieur sèche avant l’intérieur. Trop lent ou trop froid, l’omelette accroche et manque de structure.",
        "tip": "Omelette = poste prêt, geste calme."
      },
      {
        "title": "Baveux ne veut pas dire cru",
        "body": "Une omelette baveuse garde une humidité contrôlée au centre. Les œufs sont en train de finir de coaguler. Si on attend que tout soit ferme dans la poêle, la chaleur résiduelle donnera souvent une texture sèche.",
        "tip": "L’omelette se termine dans l’assiette."
      },
      {
        "title": "Les œufs brouillés sont une cuisson de précision",
        "body": "Les œufs brouillés crémeux demandent une chaleur douce, du mouvement et parfois des retraits du feu. L’objectif n’est pas de former de gros blocs secs, mais une texture souple, brillante et homogène.",
        "tip": "Brouillé crémeux = remuer et anticiper."
      },
      {
        "title": "Garnitures et herbes",
        "body": "Une garniture aqueuse ou crue peut détremper une omelette. Les champignons, légumes ou lardons doivent souvent être cuits avant. Les herbes tendres se mettent à la fin pour garder leur parfum.",
        "tip": "Garniture humide d’abord cuite, herbe fraîche à la fin."
      }
    ],
    "goFurther": {
      "title": "Poêle antiadhésive ou acier",
      "content": "Pour apprendre, une bonne poêle antiadhésive simplifie le contrôle. Une poêle acier ou inox demande plus de maîtrise du feu et de la matière grasse. L’objectif pédagogique reste la texture, pas la difficulté gratuite."
    },
    "quiz": [
      {
        "q": "Ton omelette est sèche et colorée fortement dessous mais encore mal roulée. Quelle erreur est probable ?",
        "options": [
          "Feu trop fort ou cuisson trop longue",
          "Trop peu de poivre uniquement",
          "Assiette trop proche",
          "Herbes ajoutées trop tard"
        ],
        "answer": 0,
        "explanation": "Une omelette demande une chaleur modérée. Trop chaud, elle sèche avant d’être travaillée."
      },
      {
        "q": "Tes œufs brouillés sont parfaits puis deviennent secs dans l’assiette. Que fallait-il faire ?",
        "options": [
          "Les retirer plus tôt, encore brillants",
          "Les cuire plus longtemps",
          "Augmenter le feu à la fin",
          "Ajouter de la farine"
        ],
        "answer": 0,
        "explanation": "La cuisson résiduelle continue. Il faut arrêter avant la texture finale."
      },
      {
        "q": "Tu ajoutes des champignons crus dans une omelette. Elle devient aqueuse. Pourquoi ?",
        "options": [
          "Les champignons rendent de l’eau pendant la cuisson",
          "Les œufs ne contiennent pas d’eau",
          "La poêle était trop sèche uniquement",
          "Les herbes ont bloqué la coagulation"
        ],
        "answer": 0,
        "explanation": "Les garnitures aqueuses doivent souvent être cuites avant d’être ajoutées aux œufs."
      },
      {
        "q": "Quel signe indique des œufs brouillés crémeux réussis ?",
        "options": [
          "Texture brillante, souple et encore légèrement humide",
          "Texture sèche, mate et granuleuse",
          "Fond brûlé",
          "Blocs très durs"
        ],
        "answer": 0,
        "explanation": "La brillance indique qu’il reste de l’humidité. C’est le bon moment pour arrêter."
      }
    ],
    "linkedRecipes": [
      "oeufs-brouilles-cremeux",
      "omelette-herbes-baveuse"
    ]
  },
  {
    "id": "oeuf-poche",
    "moduleId": "oeufs",
    "title": "Œuf poché",
    "subtitle": "Blanc pris, jaune coulant",
    "duration": 10,
    "prerequisites": [
      "omelette-brouilles"
    ],
    "objectives": [
      "Pocher un œuf dans une eau frémissante",
      "Préserver une forme compacte",
      "Égoutter et servir sans casser le jaune"
    ],
    "concepts": [
      {
        "title": "L’œuf frais tient mieux",
        "body": "Un œuf très frais a un blanc plus dense, qui reste mieux autour du jaune. Un œuf plus vieux a un blanc plus liquide, qui se disperse davantage dans l’eau. La fraîcheur change donc la réussite du pochage.",
        "tip": "Plus l’œuf est frais, plus il se tient."
      },
      {
        "title": "Eau frémissante, pas bouillante",
        "body": "L’eau doit être chaude mais calme. Les gros bouillons déchirent le blanc et dispersent l’œuf. Un frémissement doux cuit le blanc sans secouer le jaune.",
        "tip": "Si l’eau secoue l’œuf, elle est trop forte."
      },
      {
        "title": "Verser depuis un petit bol",
        "body": "Casser l’œuf dans un petit bol permet de vérifier l’absence de coquille et de le déposer doucement dans l’eau. Casser directement au-dessus de la casserole augmente le risque de coquille, de chute brutale et de forme irrégulière.",
        "tip": "Le petit bol donne du contrôle."
      },
      {
        "title": "Égoutter et parer",
        "body": "Après cuisson, l’œuf doit être retiré avec une écumoire, égoutté et éventuellement paré si des filaments de blanc gênent. Le geste doit rester doux pour ne pas percer le jaune.",
        "tip": "Un œuf poché se manipule comme un aliment fragile."
      }
    ],
    "goFurther": {
      "title": "Vinaigre ou pas vinaigre",
      "content": "Un peu de vinaigre peut aider le blanc à coaguler plus vite. Il doit rester discret pour ne pas parfumer excessivement l’œuf. Avec un œuf très frais et une eau calme, on peut parfois s’en passer."
    },
    "quiz": [
      {
        "q": "Ton blanc se disperse en filaments partout dans l’eau. Quelle cause est probable ?",
        "options": [
          "Œuf peu frais ou eau trop agitée",
          "Jaune trop jaune",
          "Pas assez de poivre",
          "Bol trop froid"
        ],
        "answer": 0,
        "explanation": "Un blanc liquide ou une eau à gros bouillons empêche l’œuf de rester compact."
      },
      {
        "q": "Pourquoi casser l’œuf dans un petit bol avant de le pocher ?",
        "options": [
          "Pour le verser doucement et vérifier coquille/fraîcheur",
          "Pour le cuire dans le bol",
          "Pour supprimer le blanc",
          "Pour le saler automatiquement"
        ],
        "answer": 0,
        "explanation": "Le bol donne du contrôle et limite les accidents dans la casserole."
      },
      {
        "q": "L’eau bout fortement pendant le pochage. Que fais-tu ?",
        "options": [
          "Tu baisses pour revenir à un frémissement",
          "Tu augmentes encore le feu",
          "Tu remues violemment",
          "Tu ajoutes de l’huile"
        ],
        "answer": 0,
        "explanation": "Le pochage demande une eau calme pour préserver la forme de l’œuf."
      },
      {
        "q": "Tu veux un jaune coulant. Quel est le bon signe de fin ?",
        "options": [
          "Blanc pris, jaune encore souple",
          "Jaune dur et friable",
          "Blanc transparent",
          "Œuf qui flotte depuis 20 minutes"
        ],
        "answer": 0,
        "explanation": "Le blanc doit être coagulé, mais le jaune ne doit pas avoir durci."
      }
    ],
    "linkedRecipes": [
      "haricots-verts-oeuf-poche"
    ]
  },
  {
    "id": "oeufs-liant-cremes-appareils",
    "moduleId": "oeufs",
    "title": "Œufs comme liant",
    "subtitle": "Crèmes, quiches, appareils et sauces",
    "duration": 11,
    "prerequisites": [
      "oeuf-poche"
    ],
    "objectives": [
      "Utiliser les œufs pour lier une préparation",
      "Tempérer des œufs avec un liquide chaud",
      "Éviter les appareils granuleux ou trop cuits"
    ],
    "concepts": [
      {
        "title": "L’œuf lie en coagulant",
        "body": "Dans une quiche, une crème prise, une crème anglaise ou une liaison de sauce, l’œuf donne de la structure en coagulant. La difficulté est de cuire assez pour tenir, mais pas trop pour éviter une texture granuleuse ou caoutchouteuse.",
        "tip": "L’œuf lie quand il prend, mais il durcit s’il va trop loin."
      },
      {
        "title": "Tempérer",
        "body": "Tempérer consiste à verser un liquide chaud progressivement sur les œufs en fouettant, avant de remettre l’ensemble à cuire. Cela évite le choc thermique qui transformerait les œufs en morceaux coagulés.",
        "tip": "Liquide chaud petit à petit, œufs sauvés."
      },
      {
        "title": "Cuisson douce",
        "body": "Les appareils à œufs aiment les cuissons modérées. Une quiche trop chaude peut gonfler, rendre de l’eau ou devenir granuleuse. Une crème anglaise trop chauffée tranche en œufs brouillés sucrés.",
        "tip": "Une liaison aux œufs se chauffe avec respect."
      },
      {
        "title": "Signes de cuisson",
        "body": "Une crème anglaise nappe la cuillère. Une quiche doit être prise mais encore légèrement tremblotante au centre. Une crème prise doit bouger légèrement sans être liquide. Ces signes sont plus utiles qu’une couleur très dorée.",
        "tip": "Tremblotant ne veut pas dire cru."
      }
    ],
    "goFurther": {
      "title": "Bain-marie",
      "content": "Le bain-marie protège les crèmes et flans en diffusant la chaleur plus doucement. Il limite les surcuissons sur les bords et donne une texture plus fine."
    },
    "quiz": [
      {
        "q": "Tu verses du lait bouillant d’un coup sur des jaunes et ils font des morceaux. Quelle étape a manqué ?",
        "options": [
          "Tempérer progressivement",
          "Ajouter de la farine sèche",
          "Fouetter moins",
          "Cuire plus fort"
        ],
        "answer": 0,
        "explanation": "Le liquide chaud doit être ajouté petit à petit pour réchauffer les œufs sans les coaguler brutalement."
      },
      {
        "q": "Ta crème anglaise devient granuleuse. Que s’est-il probablement passé ?",
        "options": [
          "Les jaunes ont trop chauffé",
          "Il manque du sel",
          "Le lait était trop froid pour toujours",
          "La cuillère était trop grande"
        ],
        "answer": 0,
        "explanation": "Une crème anglaise trop chauffée coagule en petits grains."
      },
      {
        "q": "Ta quiche est très gonflée au four puis rend de l’eau. Quelle cause est probable ?",
        "options": [
          "Cuisson trop forte ou appareil surcuit",
          "Pas assez de couteau",
          "Trop peu de moule",
          "Sel ajouté trop tard uniquement"
        ],
        "answer": 0,
        "explanation": "Une chaleur trop forte peut faire gonfler et surcuire l’appareil, qui devient moins stable."
      },
      {
        "q": "Quel signe indique qu’une quiche est proche de la bonne cuisson ?",
        "options": [
          "Bords pris et centre encore légèrement tremblotant",
          "Centre liquide comme de l’eau",
          "Surface noire",
          "Appareil entièrement soufflé puis craquelé"
        ],
        "answer": 0,
        "explanation": "Le centre finira de se stabiliser avec la chaleur résiduelle."
      }
    ],
    "linkedRecipes": [
      "quiche-appareil-cremeux"
    ]
  },
  {
    "id": "comprendre-legumes",
    "moduleId": "legumes",
    "title": "Comprendre les légumes",
    "subtitle": "Eau, fibres, sucres, couleur et texture",
    "duration": 11,
    "prerequisites": [
      "oeufs-liant-cremes-appareils"
    ],
    "objectives": [
      "Comprendre pourquoi les légumes ne cuisent pas tous pareil",
      "Adapter la cuisson selon eau, fibres et densité",
      "Préserver goût, couleur et texture selon le résultat recherché"
    ],
    "concepts": [
      {
        "title": "Un légume, c’est surtout de l’eau et des fibres",
        "body": "La plupart des légumes contiennent beaucoup d’eau. La cuisson doit donc gérer cette eau : la garder pour une texture moelleuse, l’évaporer pour concentrer, ou l’utiliser pour attendrir. Les fibres donnent la tenue. Une carotte dense demande plus de temps qu’une courgette aqueuse. Un poireau fond doucement, un brocoli surcuit vite. Penser eau et fibres évite de tout cuire de la même manière.",
        "tip": "Plus un légume est dense, plus il demande du temps ou une coupe fine."
      },
      {
        "title": "La coupe change la cuisson",
        "body": "Une même carotte ne donne pas le même résultat en julienne, en rondelles épaisses ou en gros tronçons. Plus la coupe est fine, plus la chaleur atteint vite le centre. Plus elle est grosse, plus le légume garde une texture présente. La découpe doit donc être choisie selon la cuisson : sauté rapide, soupe, rôtissage, mijoté ou vapeur.",
        "tip": "Avant de couper, décide comment tu veux cuire."
      },
      {
        "title": "Cuire pour attendrir ou pour concentrer",
        "body": "Cuire à l’eau ou à la vapeur attendrit en gardant beaucoup d’humidité. Rôtir ou sauter évapore et concentre. Glacer combine un peu d’eau, de beurre et de réduction pour rendre le légume brillant. Chaque méthode change le goût : un navet vapeur reste doux et humide, un navet rôti devient plus intense et sucré.",
        "tip": "Même légume, autre cuisson, autre personnalité."
      },
      {
        "title": "La couleur est un signe, pas une décoration",
        "body": "Un légume vert terne signale souvent une surcuisson ou une attente chaude. Une carotte légèrement dorée indique concentration et développement des sucres. Un oignon brun donne de la profondeur ; noir, il devient amer. Lire la couleur permet de corriger avant que la texture soit perdue.",
        "tip": "La couleur raconte ce que la chaleur a fait."
      }
    ],
    "goFurther": {
      "title": "Penser par familles de légumes",
      "content": "Les légumes racines comme carotte, panais, navet et betterave aiment les cuissons plus longues. Les légumes verts comme haricot, brocoli ou petits pois demandent souvent une cuisson courte. Les légumes aqueux comme courgette, tomate ou champignon doivent souvent évaporer pour concentrer leur goût."
    },
    "quiz": [
      {
        "q": "Tu cuis carottes et courgettes en morceaux identiques dans la même poêle. La courgette devient molle avant que la carotte soit cuite. Que fallait-il anticiper ?",
        "options": [
          "La carotte est plus dense et demande une coupe plus fine ou une cuisson plus longue",
          "La courgette aurait dû être salée beaucoup plus fort",
          "Les deux légumes cuisent toujours au même rythme",
          "La poêle aurait dû être couverte tout le temps"
        ],
        "answer": 0,
        "explanation": "La densité et la teneur en eau changent le temps de cuisson. Il faut adapter taille ou ordre d’ajout."
      },
      {
        "q": "Tu veux obtenir des légumes plus concentrés, légèrement dorés et moins aqueux. Quelle méthode est la plus cohérente ?",
        "options": [
          "Rôtir ou sauter avec assez d’espace",
          "Les cuire longtemps dans beaucoup d’eau",
          "Les couvrir dans une poêle froide",
          "Les laisser tremper après cuisson"
        ],
        "answer": 0,
        "explanation": "Rôtir ou sauter permet d’évaporer l’eau et de concentrer les saveurs, à condition de ne pas entasser."
      },
      {
        "q": "Un brocoli devient kaki et mou. Quel diagnostic est le plus probable ?",
        "options": [
          "Surcuisson ou attente chaude après cuisson",
          "Manque d’huile uniquement",
          "Coupe trop régulière",
          "Sel ajouté trop tard uniquement"
        ],
        "answer": 0,
        "explanation": "Les légumes verts perdent couleur et croquant quand ils cuisent trop longtemps ou restent chauds après cuisson."
      },
      {
        "q": "Pourquoi une coupe fine accélère-t-elle la cuisson ?",
        "options": [
          "La chaleur atteint le centre plus vite",
          "Le légume devient automatiquement plus salé",
          "L’eau ne peut plus s’évaporer",
          "La poêle devient plus chaude"
        ],
        "answer": 0,
        "explanation": "Plus le morceau est petit, plus la distance entre surface et centre est courte. La cuisson est donc plus rapide."
      }
    ],
    "linkedRecipes": [
      "legumes-sautes-par-densite",
      "legumes-rotis-plaque"
    ]
  },
  {
    "id": "preparer-legumes",
    "moduleId": "legumes",
    "title": "Préparer les légumes",
    "subtitle": "Laver, éplucher, tailler, parer sans gaspiller",
    "duration": 10,
    "prerequisites": [
      "comprendre-legumes"
    ],
    "objectives": [
      "Préparer les légumes proprement selon leur usage",
      "Limiter le gaspillage sans sacrifier la qualité",
      "Choisir entre éplucher, brosser, parer ou garder la peau"
    ],
    "concepts": [
      {
        "title": "Laver avant de couper",
        "body": "Un légume se lave généralement avant découpe. Une fois coupé, il absorbe plus facilement l’eau et perd une partie de ses saveurs. Les poireaux, salades et herbes demandent une attention particulière, car la terre se cache entre les feuilles. Un mauvais lavage se retrouve dans l’assiette, même avec une bonne cuisson.",
        "tip": "La terre ne se corrige pas avec une sauce."
      },
      {
        "title": "Éplucher n’est pas automatique",
        "body": "Certaines peaux sont agréables et savoureuses si elles sont propres : pommes de terre nouvelles, carottes fines, courgettes, aubergines. D’autres sont dures, épaisses ou amères. Le choix dépend du légume, de sa qualité, de la cuisson et du résultat recherché.",
        "tip": "On épluche pour une raison, pas par réflexe."
      },
      {
        "title": "Parer avec intelligence",
        "body": "Parer consiste à retirer ce qui gêne : partie sèche, abîmée, trop fibreuse, dure ou terreuse. Mais beaucoup de parties sont utilisables : tiges de persil, vert tendre de poireau, fanes propres, parures de carotte ou d’oignon pour bouillon. Parer correctement, c’est améliorer la qualité sans jeter inutilement.",
        "tip": "Déchet sale non ; parure propre oui."
      },
      {
        "title": "Sécher avant certaines cuissons",
        "body": "Pour sauter, frire ou rôtir, l’humidité en surface gêne la coloration et provoque parfois des projections. Une salade mal essorée dilue la vinaigrette. Des champignons lavés trop abondamment rendent plus d’eau. Sécher est souvent une étape de cuisson invisible.",
        "tip": "Ce qui doit colorer doit d’abord sécher."
      }
    ],
    "goFurther": {
      "title": "Préparer selon le timing",
      "content": "Certains légumes peuvent être préparés en avance : carottes, pommes de terre dans l’eau, poireaux lavés, choux taillés. D’autres s’abîment vite : avocat, herbes ciselées, pomme, salade assaisonnée. La bonne préparation respecte aussi la fraîcheur."
    },
    "quiz": [
      {
        "q": "Tu laves des champignons longuement sous l’eau puis tu les mets directement en poêle. Ils rendent beaucoup d’eau. Quelle étape a manqué ?",
        "options": [
          "Les sécher et limiter l’humidité de surface",
          "Les saler deux fois plus",
          "Les couvrir immédiatement",
          "Les couper après cuisson uniquement"
        ],
        "answer": 0,
        "explanation": "L’eau en surface retarde la coloration et augmente l’humidité dans la poêle."
      },
      {
        "q": "Tu cuisines un poireau et tu sens du sable sous la dent. Quelle erreur est la plus probable ?",
        "options": [
          "Le lavage entre les feuilles était insuffisant",
          "Le feu était trop doux",
          "Le poireau a été coupé trop régulièrement",
          "Il manquait de beurre"
        ],
        "answer": 0,
        "explanation": "Le poireau retient souvent de la terre entre ses couches. Il faut le fendre et le laver soigneusement."
      },
      {
        "q": "Tu as des tiges de persil propres après avoir gardé les feuilles pour une finition. Que peux-tu en faire ?",
        "options": [
          "Les utiliser pour parfumer un bouillon, une huile ou une sauce",
          "Les jeter systématiquement",
          "Les cuire comme des pâtes",
          "Les ajouter entières dans une salade fine"
        ],
        "answer": 0,
        "explanation": "Les tiges propres ont du parfum. Elles sont utiles en infusion ou dans une base aromatique."
      },
      {
        "q": "Pourquoi ne faut-il pas laver une salade après l’avoir assaisonnée ?",
        "options": [
          "Cela retire l’assaisonnement et détrempe les feuilles",
          "Cela rend la vinaigrette plus stable",
          "Cela améliore le croquant",
          "Cela cuit les feuilles"
        ],
        "answer": 0,
        "explanation": "Une salade doit être lavée et bien essorée avant assaisonnement. Après, l’eau dilue tout."
      }
    ],
    "linkedRecipes": [
      "poireaux-vinaigrette-propres"
    ]
  },
  {
    "id": "cuire-legumes-selon-texture",
    "moduleId": "legumes",
    "title": "Cuire selon la texture voulue",
    "subtitle": "Croquant, fondant, rôti, glacé ou confit",
    "duration": 12,
    "prerequisites": [
      "preparer-legumes"
    ],
    "objectives": [
      "Choisir une cuisson selon la texture finale",
      "Adapter chaleur, liquide et matière grasse au légume",
      "Passer d’un légume fade à une garniture construite"
    ],
    "concepts": [
      {
        "title": "Croquant : cuisson courte",
        "body": "Pour garder du croquant, la cuisson doit être courte et contrôlée : anglaise, vapeur rapide, sauté vif, wok ou blanchiment. Le légume doit être cuit mais garder une résistance agréable. Trop de cuisson ou une attente chaude transforme vite le croquant en mou.",
        "tip": "Croquant = cuisson courte + arrêt net."
      },
      {
        "title": "Fondant : cuisson douce",
        "body": "Pour obtenir du fondant, il faut laisser le temps aux fibres de s’attendrir : poireaux étuvés, oignons fondus, carottes glacées, aubergines confites. Une chaleur trop forte brûle l’extérieur avant que l’intérieur devienne tendre.",
        "tip": "Fondant = chaleur douce + patience."
      },
      {
        "title": "Rôti : chaleur sèche",
        "body": "Pour rôtir, il faut chaleur, matière grasse, espace et évaporation. Les légumes perdent de l’eau, concentrent leurs sucres et colorent. Les légumes racines, courges, choux-fleurs, oignons et pommes de terre s’y prêtent très bien.",
        "tip": "Rôti = sec en surface, chaud autour."
      },
      {
        "title": "Glacé : peu d’eau, beurre, réduction",
        "body": "Glacer des légumes consiste à les cuire avec un fond d’eau, du beurre, du sel et parfois une pointe de sucre, jusqu’à évaporation presque complète. Le liquide réduit et enrobe le légume d’une pellicule brillante. C’est une cuisson de précision : trop d’eau, c’est bouilli ; trop réduit, ça accroche.",
        "tip": "Glacer, c’est cuire et saucer en même temps."
      }
    ],
    "goFurther": {
      "title": "La même carotte en quatre textures",
      "content": "Crue : croquante et fraîche. Anglaise : nette et douce. Rôtie : concentrée et sucrée. Glacée : fondante, brillante, assaisonnée à cœur. Comprendre cela permet de choisir la technique selon le plat, pas seulement selon l’habitude."
    },
    "quiz": [
      {
        "q": "Tu veux des carottes fondantes et brillantes, pas seulement bouillies. Quelle méthode est la plus adaptée ?",
        "options": [
          "Glacer avec peu d’eau, beurre, sel, puis réduire",
          "Les cuire dans beaucoup d’eau puis les laisser refroidir dedans",
          "Les brûler à sec",
          "Les couper après cuisson uniquement"
        ],
        "answer": 0,
        "explanation": "Le glaçage cuit le légume et concentre le liquide pour l’enrober."
      },
      {
        "q": "Tes poireaux deviennent bruns avant d’être fondants. Que dois-tu corriger ?",
        "options": [
          "Baisser le feu et cuire plus doucement",
          "Augmenter le feu",
          "Ajouter du sucre et continuer à brûler",
          "Les couper plus gros sans changer le feu"
        ],
        "answer": 0,
        "explanation": "Le fondant demande une chaleur douce. La coloration trop rapide indique une cuisson trop agressive."
      },
      {
        "q": "Tu veux garder des petits pois verts et légèrement croquants. Quelle stratégie est cohérente ?",
        "options": [
          "Cuisson courte et arrêt rapide",
          "Cuisson longue à gros bouillons",
          "Attente chaude de 30 minutes",
          "Four très sec pendant 1 heure"
        ],
        "answer": 0,
        "explanation": "Les petits légumes verts supportent mal la surcuisson. Ils demandent précision et refroidissement si besoin."
      },
      {
        "q": "Tes légumes rôtis restent mous et pâles. Quel principe n’est probablement pas respecté ?",
        "options": [
          "Chaleur sèche, espace et évaporation",
          "Refroidissement dans l’eau",
          "Cuisson à couvert",
          "Taille volontairement irrégulière"
        ],
        "answer": 0,
        "explanation": "Le rôtissage exige que l’eau puisse s’échapper. Sinon les légumes étuvent."
      }
    ],
    "linkedRecipes": [
      "carottes-glacees"
    ]
  },
  {
    "id": "legumes-verts-couleur-croquant",
    "moduleId": "legumes",
    "title": "Légumes verts : couleur et croquant",
    "subtitle": "Cuire net sans finir kaki",
    "duration": 10,
    "prerequisites": [
      "cuire-legumes-selon-texture"
    ],
    "objectives": [
      "Cuire des légumes verts sans ternir leur couleur",
      "Utiliser eau bouillante salée et refroidissement si besoin",
      "Réchauffer sans recuire"
    ],
    "concepts": [
      {
        "title": "L’eau bouillante salée",
        "body": "Pour beaucoup de légumes verts, une grande eau bouillante salée donne une cuisson rapide et nette. L’eau abondante limite la chute de température quand les légumes entrent. Le sel assaisonne pendant la cuisson.",
        "tip": "Grande eau, bon sel, cuisson courte."
      },
      {
        "title": "La couleur se perd vite",
        "body": "Haricots verts, brocolis, petits pois ou asperges passent vite de vert vif à vert terne si la cuisson dure trop longtemps ou s’ils restent chauds après égouttage. La couleur est un indicateur de fraîcheur visuelle, mais aussi souvent de texture.",
        "tip": "Vert terne annonce souvent trop cuit."
      },
      {
        "title": "Refroidir pour préparer en avance",
        "body": "Si les légumes ne sont pas servis immédiatement, il faut les refroidir rapidement après cuisson. Le froid stoppe la cuisson et garde mieux couleur et croquant. Il faut ensuite bien égoutter pour ne pas détremper la finition.",
        "tip": "Refroidir stoppe ; égoutter prépare la finition."
      },
      {
        "title": "Réchauffer rapidement",
        "body": "Des légumes blanchis se réchauffent vite : poêle avec beurre, huile d’olive, vapeur courte ou passage rapide dans une sauce. Le but n’est pas de les recuire, mais de les remettre à température et de les assaisonner.",
        "tip": "Réchauffer n’est pas recuire."
      }
    ],
    "goFurther": {
      "title": "Acidité et légumes verts",
      "content": "L’acidité peut ternir certains légumes verts si elle est ajoutée trop tôt ou cuite longtemps. Pour garder un vert plus net, mieux vaut souvent ajouter citron ou vinaigre en finition."
    },
    "quiz": [
      {
        "q": "Tes haricots verts sont mous et kaki après cuisson. Quelle erreur est la plus probable ?",
        "options": [
          "Cuisson trop longue ou absence de refroidissement",
          "Eau trop salée uniquement",
          "Poêle trop grande",
          "Herbes ajoutées à la fin"
        ],
        "answer": 0,
        "explanation": "Les légumes verts se dégradent vite avec une cuisson prolongée ou une attente chaude."
      },
      {
        "q": "Tu veux cuire beaucoup de brocolis dans une petite quantité d’eau. Que risques-tu ?",
        "options": [
          "L’eau chute en température et la cuisson devient moins nette",
          "Les brocolis deviennent croustillants",
          "Le sel disparaît",
          "La couleur devient toujours plus vive"
        ],
        "answer": 0,
        "explanation": "Une petite quantité d’eau refroidit fortement. La cuisson devient plus lente, donc moins précise."
      },
      {
        "q": "Tu as blanchi des asperges pour les servir plus tard. Quelle suite est la plus correcte ?",
        "options": [
          "Refroidir, égoutter, puis réchauffer brièvement au service",
          "Les laisser chaudes dans la passoire",
          "Les cuire encore 20 minutes",
          "Les couvrir d’eau chaude jusqu’au service"
        ],
        "answer": 0,
        "explanation": "Le refroidissement stoppe la cuisson. Le réchauffage final doit être court."
      },
      {
        "q": "Tu veux ajouter citron et herbes à des légumes verts. Quel moment préserve le mieux couleur et fraîcheur ?",
        "options": [
          "En finition",
          "Au début de 30 minutes de cuisson",
          "Avant de laver les légumes",
          "Dans l’eau froide avant cuisson uniquement"
        ],
        "answer": 0,
        "explanation": "Le citron et les herbes gardent mieux leur vivacité en finition."
      }
    ],
    "linkedRecipes": [
      "haricots-verts-beurre-citron"
    ]
  },
  {
    "id": "corriger-legumes-rates",
    "moduleId": "legumes",
    "title": "Corriger des légumes ratés",
    "subtitle": "Mous, fades, brûlés, aqueux : quoi faire ?",
    "duration": 12,
    "prerequisites": [
      "legumes-verts-couleur-croquant"
    ],
    "objectives": [
      "Diagnostiquer les défauts courants des légumes",
      "Corriger texture, assaisonnement et excès d’eau",
      "Transformer un ratage en garniture acceptable"
    ],
    "concepts": [
      {
        "title": "Légumes mous",
        "body": "Des légumes trop cuits ne redeviendront pas croquants. La correction consiste à changer leur destination : purée, soupe, écrasé, poêlée avec élément croquant, gratin ou sauce. Il faut arrêter de chercher la texture perdue et construire une nouvelle logique.",
        "tip": "Texture perdue ? Change de rôle."
      },
      {
        "title": "Légumes aqueux",
        "body": "Des légumes aqueux viennent souvent d’une poêle trop pleine, d’un salage trop précoce ou d’un manque d’évaporation. On peut retirer le couvercle, augmenter légèrement le feu, égoutter ou finir en poêlée plus sèche. Ajouter du gras ne règle pas l’excès d’eau.",
        "tip": "Trop d’eau se règle par évaporation ou égouttage, pas par plus d’huile."
      },
      {
        "title": "Légumes fades",
        "body": "Un légume fade peut manquer de sel, d’acidité, de gras ou d’aromates. La correction doit être progressive : sel, goût ; acidité, goût ; matière grasse ou herbes, goût. Les légumes vapeur ou bouillis ont souvent besoin d’une finition assumée.",
        "tip": "La vapeur cuit ; la finition donne le goût."
      },
      {
        "title": "Légumes brûlés",
        "body": "Si une petite partie est trop colorée, on peut la retirer. Si l’amertume a envahi tout le plat, la correction est limitée. Gras, acidité ou douceur peuvent arrondir un peu, mais ils ne suppriment pas un vrai goût de brûlé.",
        "tip": "Le brûlé se prévient mieux qu’il ne se corrige."
      }
    ],
    "goFurther": {
      "title": "Sauver par contraste",
      "content": "Des légumes un peu mous peuvent être améliorés avec un croquant : noix, graines, chapelure, croûtons. Des légumes un peu fades peuvent être réveillés par citron, vinaigre, herbes, yaourt, beurre noisette ou sauce. La correction passe souvent par un contraste."
    },
    "quiz": [
      {
        "q": "Tes courgettes sont molles et aqueuses. Quelle correction est la plus logique ?",
        "options": [
          "Égoutter ou évaporer, puis finir avec assaisonnement et élément frais",
          "Ajouter beaucoup d’huile pour absorber l’eau",
          "Couvrir davantage",
          "Ajouter du sel fort sans goûter"
        ],
        "answer": 0,
        "explanation": "L’excès d’eau doit être retiré ou évaporé. Ensuite seulement on reconstruit le goût."
      },
      {
        "q": "Tes légumes vapeur sont cuits mais fades. Que testes-tu ?",
        "options": [
          "Sel, gras, acidité et herbes en finition",
          "Une cuisson supplémentaire de 30 minutes",
          "Un passage sous l’eau froide puis service sans sauce",
          "Plus de vapeur uniquement"
        ],
        "answer": 0,
        "explanation": "La vapeur donne une cuisson propre mais peu de goût. La finition est essentielle."
      },
      {
        "q": "Tes haricots verts sont trop cuits. Quelle option est la plus réaliste ?",
        "options": [
          "Les transformer en salade, soupe, purée ou garniture avec contraste",
          "Les rendre croquants en les cuisant encore",
          "Les mettre au congélateur pour retrouver le croquant",
          "Ajouter du sel pour reconstruire les fibres"
        ],
        "answer": 0,
        "explanation": "Une texture trop cuite ne revient pas. Il faut changer l’usage."
      },
      {
        "q": "Une poêlée a un vrai goût de brûlé. Quelle phrase est la plus juste ?",
        "options": [
          "On peut parfois arrondir, mais pas supprimer complètement le brûlé",
          "Un peu de sucre efface toujours le brûlé",
          "Le citron annule totalement l’amertume",
          "Il suffit de saler plus"
        ],
        "answer": 0,
        "explanation": "Le brûlé marque fortement le plat. Les corrections sont limitées."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "comprendre-amidon",
    "moduleId": "feculents-riz-pates-pommes-terre",
    "title": "Comprendre l’amidon",
    "subtitle": "Le secret des pâtes, riz, pommes de terre et purées",
    "duration": 11,
    "prerequisites": [
      "corriger-legumes-rates"
    ],
    "objectives": [
      "Comprendre comment l’amidon influence texture et liaison",
      "Éviter collant, pâteux, sec ou aqueux",
      "Utiliser l’amidon comme outil de sauce et de texture"
    ],
    "concepts": [
      {
        "title": "L’amidon absorbe l’eau",
        "body": "Riz, pâtes, pommes de terre, semoule et légumineuses contiennent de l’amidon. À la cuisson, l’amidon absorbe l’eau, gonfle et transforme la texture. Bien géré, il donne du moelleux, de la tenue et parfois une sauce liée. Mal géré, il donne du collant, du pâteux ou une texture lourde.",
        "tip": "L’amidon est utile, mais il faut le contrôler."
      },
      {
        "title": "Trop remuer peut libérer trop d’amidon",
        "body": "Dans une purée ou certaines pommes de terre, trop travailler écrase les cellules et libère beaucoup d’amidon. Résultat : texture élastique, collante ou gluante. Pour une purée, on écrase doucement et on évite le mixeur plongeant.",
        "tip": "Purée mixée trop fort = colle."
      },
      {
        "title": "L’eau de cuisson des pâtes est une sauce",
        "body": "L’eau de cuisson des pâtes contient du sel et de l’amidon. Elle aide à lier une sauce avec le gras, le fromage ou le jus de cuisson. La jeter entièrement retire un outil important. Quelques cuillères peuvent transformer une sauce sèche en sauce brillante.",
        "tip": "Garde toujours un peu d’eau de cuisson des pâtes."
      },
      {
        "title": "Refroidir change l’amidon",
        "body": "Un féculent refroidi ne se comporte plus exactement pareil. Le riz froid est plus ferme, les pommes de terre cuites refroidies tiennent mieux en salade ou à rissoler, les pâtes froides absorbent la sauce différemment. La température de service compte.",
        "tip": "Un féculent chaud et un féculent froid ne boivent pas pareil."
      }
    ],
    "goFurther": {
      "title": "Amidon et liaison",
      "content": "L’amidon est l’une des liaisons les plus utiles en cuisine. Il épaissit une sauce, donne de l’onctuosité à un risotto, aide le fromage à enrober les pâtes et donne de la tenue à une purée. L’enjeu est de l’utiliser sans le rendre lourd."
    },
    "quiz": [
      {
        "q": "Ta purée devient élastique et collante après passage au mixeur plongeant. Quel est le problème ?",
        "options": [
          "Trop d’amidon a été libéré par un travail trop violent",
          "Il manque forcément du sel",
          "La pomme de terre ne contient pas d’amidon",
          "Le beurre était trop froid uniquement"
        ],
        "answer": 0,
        "explanation": "Mixer les pommes de terre travaille trop l’amidon. La texture devient gluante."
      },
      {
        "q": "Tu jettes toute l’eau des pâtes puis ta sauce accroche mal. Que manquait-il ?",
        "options": [
          "Un peu d’eau de cuisson amidonnée pour lier",
          "Une cuisson plus longue des pâtes",
          "De l’eau froide",
          "Plus de poivre uniquement"
        ],
        "answer": 0,
        "explanation": "L’eau amidonnée aide la sauce à enrober les pâtes."
      },
      {
        "q": "Pourquoi un riz froid est-il souvent plus ferme qu’un riz chaud ?",
        "options": [
          "L’amidon change de texture en refroidissant",
          "Le sel disparaît",
          "Le riz perd tout son amidon",
          "L’eau devient grasse"
        ],
        "answer": 0,
        "explanation": "En refroidissant, l’amidon se réorganise et la texture se raffermit."
      },
      {
        "q": "Un féculent paraît pâteux. Quel diagnostic général est plausible ?",
        "options": [
          "Trop d’eau absorbée, surcuisson ou amidon trop travaillé",
          "Pas assez de couleur verte",
          "Trop peu d’assiette",
          "Trop de croquant"
        ],
        "answer": 0,
        "explanation": "Les textures pâteuses viennent souvent d’une mauvaise gestion de l’eau, du temps ou de l’amidon."
      }
    ],
    "linkedRecipes": [
      "pates-sauce-amidon",
      "puree-pommes-terre-maitrisee"
    ]
  },
  {
    "id": "cuire-pates-justes",
    "moduleId": "feculents-riz-pates-pommes-terre",
    "title": "Cuire les pâtes justes",
    "subtitle": "Al dente, eau salée, sauce liée",
    "duration": 11,
    "prerequisites": [
      "comprendre-amidon"
    ],
    "objectives": [
      "Cuire les pâtes al dente dans une eau correctement salée",
      "Finir les pâtes dans la sauce sans les surcuire",
      "Utiliser l’eau de cuisson pour lier"
    ],
    "concepts": [
      {
        "title": "L’eau doit être salée",
        "body": "Les pâtes absorbent de l’eau pendant la cuisson. Si cette eau est fade, les pâtes seront fades au cœur. Saler seulement la sauce ne corrige pas toujours une pâte mal assaisonnée. L’eau doit avoir un goût salé net, sans devenir une saumure excessive.",
        "tip": "Les pâtes prennent leur premier goût dans l’eau."
      },
      {
        "title": "Al dente : ferme, pas cru",
        "body": "Al dente signifie que la pâte garde une résistance au centre. Elle n’est pas dure ni farineuse. Si elle doit finir dans la sauce, il faut souvent l’égoutter un peu avant le point final pour qu’elle termine en absorbant la sauce.",
        "tip": "La pâte finit souvent dans la sauce, pas dans la passoire."
      },
      {
        "title": "La sauce doit être prête avant les pâtes",
        "body": "Les pâtes attendent mal : elles collent, refroidissent et continuent d’absorber. La sauce doit être prête ou presque prête au moment de l’égouttage. C’est une leçon de timing autant que de cuisson.",
        "tip": "Les pâtes n’attendent pas. La sauce, oui."
      },
      {
        "title": "Mantecare : lier dans la poêle",
        "body": "Mélanger les pâtes avec la sauce, un peu d’eau de cuisson et parfois du fromage ou du gras permet de créer une sauce brillante et liée. Cette étape finale est souvent ce qui sépare des pâtes correctes de bonnes pâtes.",
        "tip": "La liaison finale fait le plat."
      }
    ],
    "goFurther": {
      "title": "Pourquoi ne pas trop rincer",
      "content": "Rincer des pâtes chaudes retire l’amidon de surface qui aide la sauce à accrocher. On rince surtout pour certaines salades froides ou usages spécifiques. Pour des pâtes chaudes en sauce, mieux vaut éviter."
    },
    "quiz": [
      {
        "q": "Tes pâtes sont bien cuites mais fades malgré une bonne sauce. Quelle erreur est probable ?",
        "options": [
          "L’eau de cuisson n’était pas assez salée",
          "La sauce était trop chaude",
          "Les pâtes ont été trop égouttées uniquement",
          "Il manquait de persil"
        ],
        "answer": 0,
        "explanation": "Les pâtes doivent être assaisonnées pendant leur cuisson. La sauce ne suffit pas toujours à corriger."
      },
      {
        "q": "Tu égouttes les pâtes puis tu commences seulement la sauce. Quel problème va apparaître ?",
        "options": [
          "Pâtes qui collent, refroidissent et absorbent mal",
          "Sauce plus rapide",
          "Pâtes plus croquantes",
          "Eau de cuisson plus salée"
        ],
        "answer": 0,
        "explanation": "La sauce doit être prête avant ou pendant la cuisson des pâtes."
      },
      {
        "q": "Ta sauce est sèche et n’enrobe pas les pâtes. Que peux-tu ajouter ?",
        "options": [
          "Un peu d’eau de cuisson des pâtes",
          "De l’eau froide non salée en grande quantité",
          "De la farine sèche",
          "Plus de cuisson à sec"
        ],
        "answer": 0,
        "explanation": "L’eau amidonnée aide à lier et détendre la sauce."
      },
      {
        "q": "Pourquoi sortir les pâtes un peu avant le point parfait si elles finissent dans la sauce ?",
        "options": [
          "Elles continueront à cuire et absorberont la sauce",
          "Elles ne cuiront plus jamais",
          "La sauce les rendra crues",
          "Le sel disparaîtra"
        ],
        "answer": 0,
        "explanation": "La finition en sauce ajoute chaleur et liquide. Les pâtes continuent donc leur cuisson."
      }
    ],
    "linkedRecipes": [
      "pates-sauce-amidon"
    ]
  },
  {
    "id": "cuire-riz-absorption-pilaf",
    "moduleId": "feculents-riz-pates-pommes-terre",
    "title": "Cuire le riz : absorption et pilaf",
    "subtitle": "Des grains séparés, pas une masse collante",
    "duration": 12,
    "prerequisites": [
      "cuire-pates-justes"
    ],
    "objectives": [
      "Comprendre les ratios eau/riz selon la méthode",
      "Cuire un riz par absorption sans le remuer inutilement",
      "Différencier riz nature, pilaf et riz sauté"
    ],
    "concepts": [
      {
        "title": "Le riz absorbe son liquide",
        "body": "Dans une cuisson par absorption, le riz cuit en absorbant une quantité mesurée d’eau ou de bouillon. Trop de liquide donne un riz mou ; pas assez donne un riz dur. Le ratio dépend du type de riz, du rinçage, du couvercle et de la casserole.",
        "tip": "Avec le riz, le liquide se prévoit."
      },
      {
        "title": "Rincer ou ne pas rincer",
        "body": "Rincer le riz retire une partie de l’amidon de surface et donne souvent des grains plus séparés. Pour certains plats crémeux, comme le risotto, on ne cherche pas le même résultat. Le rinçage dépend donc du plat.",
        "tip": "Rincer pour séparer, garder l’amidon pour crémer."
      },
      {
        "title": "Ne pas soulever sans arrêt",
        "body": "Pendant une cuisson à couvert, la vapeur participe à la cuisson. Ouvrir souvent fait perdre chaleur et vapeur, perturbe le ratio et rallonge le temps. Il vaut mieux cuire doucement, couvert, puis laisser reposer hors feu.",
        "tip": "Le riz cuit aussi dans sa vapeur."
      },
      {
        "title": "Pilaf : nacrer puis mouiller",
        "body": "Le riz pilaf commence souvent par faire revenir le riz dans un peu de matière grasse avec des aromates, jusqu’à ce qu’il soit nacré. On ajoute ensuite le liquide mesuré et on cuit couvert. Cela donne un riz parfumé avec des grains mieux individualisés.",
        "tip": "Pilaf = parfum avant absorption."
      }
    ],
    "goFurther": {
      "title": "Repos du riz",
      "content": "Après cuisson, le repos couvert hors feu permet à l’humidité de se répartir. Égrainer ensuite à la fourchette donne une texture plus légère. Servir immédiatement après évaporation peut donner un riz inégal."
    },
    "quiz": [
      {
        "q": "Ton riz par absorption est mou et détrempé. Quelle cause est probable ?",
        "options": [
          "Trop de liquide, cuisson trop longue ou couvercle mal géré",
          "Pas assez de sel uniquement",
          "Riz trop bien rincé obligatoirement",
          "Casserole trop propre"
        ],
        "answer": 0,
        "explanation": "Le riz absorbe ce qu’on lui donne. Trop d’eau ou trop de cuisson donne une texture molle."
      },
      {
        "q": "Tu ouvres la casserole toutes les deux minutes pendant la cuisson. Que risques-tu ?",
        "options": [
          "Perte de vapeur et cuisson irrégulière",
          "Riz plus parfumé automatiquement",
          "Grains plus croustillants",
          "Riz qui cuit sans liquide"
        ],
        "answer": 0,
        "explanation": "La vapeur fait partie de la cuisson. Laisser couvert stabilise le résultat."
      },
      {
        "q": "Tu veux des grains plus séparés pour un riz nature. Quel geste peut aider avant cuisson ?",
        "options": [
          "Rincer le riz",
          "Le mixer",
          "Le remuer fortement pendant toute la cuisson",
          "Ajouter beaucoup de farine"
        ],
        "answer": 0,
        "explanation": "Le rinçage retire une partie de l’amidon de surface, ce qui limite le collage."
      },
      {
        "q": "Dans un riz pilaf, pourquoi faire revenir le riz avant d’ajouter le liquide ?",
        "options": [
          "Pour le nacrer, le parfumer et améliorer la tenue des grains",
          "Pour le brûler volontairement",
          "Pour supprimer toute cuisson",
          "Pour remplacer le liquide"
        ],
        "answer": 0,
        "explanation": "Le nacrage enrobe les grains de matière grasse et développe une base aromatique."
      }
    ],
    "linkedRecipes": [
      "riz-pilaf-oignon"
    ]
  },
  {
    "id": "pommes-terre-cuissons",
    "moduleId": "feculents-riz-pates-pommes-terre",
    "title": "Pommes de terre : choisir la bonne cuisson",
    "subtitle": "Vapeur, eau, rissolée, purée, gratin",
    "duration": 12,
    "prerequisites": [
      "cuire-riz-absorption-pilaf"
    ],
    "objectives": [
      "Choisir une variété et une cuisson selon le résultat",
      "Cuire les pommes de terre sans les gorger d’eau",
      "Obtenir fondant, croustillant ou purée selon la technique"
    ],
    "concepts": [
      {
        "title": "Toutes les pommes de terre ne se valent pas",
        "body": "Certaines variétés tiennent bien à la cuisson et conviennent aux salades, vapeur ou rissolées. D’autres sont plus farineuses et conviennent mieux aux purées, frites ou gnocchis. La variété influence l’absorption d’eau, la tenue et la texture finale.",
        "tip": "La bonne pomme de terre évite déjà la moitié des problèmes."
      },
      {
        "title": "Départ eau froide pour cuire à cœur",
        "body": "Pour des pommes de terre entières ou en gros morceaux à l’eau, le départ à froid aide à cuire régulièrement jusqu’au centre. Si l’extérieur reçoit une chaleur trop brutale, il peut se défaire avant que le cœur soit tendre.",
        "tip": "Grosse pomme de terre : départ froid, cuisson régulière."
      },
      {
        "title": "Vapeur pour garder le goût",
        "body": "La vapeur cuit sans immerger. Les pommes de terre absorbent moins d’eau et gardent une saveur plus nette. C’est très utile pour salade, écrasé ou accompagnement simple.",
        "tip": "Vapeur = goût plus concentré, texture moins gorgée."
      },
      {
        "title": "Rissoler demande du sec",
        "body": "Pour rissoler, les pommes de terre doivent être sèches en surface. Des pommes de terre trop humides cuisent à la vapeur dans la poêle et colorent mal. Les précuire puis les laisser sécher donne souvent un meilleur croustillant.",
        "tip": "Pour croustiller, il faut sécher."
      }
    ],
    "goFurther": {
      "title": "Pommes de terre refroidies",
      "content": "Des pommes de terre cuites puis refroidies tiennent mieux pour une salade ou une poêlée. Elles se cassent moins et dorent parfois plus régulièrement après séchage."
    },
    "quiz": [
      {
        "q": "Tes pommes de terre rissolées restent pâles et molles. Quelle cause est probable ?",
        "options": [
          "Elles étaient trop humides ou la poêle trop chargée",
          "Elles étaient trop bien séchées",
          "Elles manquaient de vinaigre uniquement",
          "Elles ont été coupées trop régulièrement"
        ],
        "answer": 0,
        "explanation": "L’humidité empêche la coloration. Il faut sécher, espacer et chauffer correctement."
      },
      {
        "q": "Tu cuis de grosses pommes de terre à l’eau et l’extérieur se défait avant que le centre soit tendre. Que peux-tu corriger ?",
        "options": [
          "Départ à froid et cuisson plus douce",
          "Départ à très gros bouillons",
          "Les remuer constamment",
          "Ajouter de l’huile dans l’eau"
        ],
        "answer": 0,
        "explanation": "Le départ à froid donne une montée en température plus progressive jusqu’au cœur."
      },
      {
        "q": "Pourquoi la vapeur est-elle intéressante pour des pommes de terre en salade ?",
        "options": [
          "Elle les cuit sans les gorger d’eau",
          "Elle les rend toujours croustillantes",
          "Elle remplace le sel",
          "Elle les transforme en purée"
        ],
        "answer": 0,
        "explanation": "La vapeur garde une texture nette et un goût moins dilué."
      },
      {
        "q": "Tu veux faire une purée très légère. Quelle famille de pomme de terre est plutôt adaptée ?",
        "options": [
          "Une variété farineuse",
          "Une variété très cireuse uniquement",
          "Une pomme de terre crue",
          "Une pomme de terre verte"
        ],
        "answer": 0,
        "explanation": "Les variétés farineuses s’écrasent mieux et donnent une purée plus légère si elles ne sont pas trop travaillées."
      }
    ],
    "linkedRecipes": [
      "pommes-terre-vapeur-herbes",
      "pommes-terre-rissolees"
    ]
  },
  {
    "id": "purees-ecrases-gratins",
    "moduleId": "feculents-riz-pates-pommes-terre",
    "title": "Purées, écrasés et gratins",
    "subtitle": "Texture lisse, rustique ou fondante",
    "duration": 12,
    "prerequisites": [
      "pommes-terre-cuissons"
    ],
    "objectives": [
      "Différencier purée lisse, écrasé rustique et gratin",
      "Éviter la purée collante",
      "Assaisonner et enrichir sans alourdir"
    ],
    "concepts": [
      {
        "title": "Purée : écraser sans mixer",
        "body": "Une purée de pommes de terre doit être écrasée au presse-purée, moulin ou fouet léger selon la texture. Le mixeur libère trop d’amidon et rend la purée collante. Le geste doit être efficace mais pas violent.",
        "tip": "Purée de pomme de terre : jamais mixeur plongeant."
      },
      {
        "title": "Écrasé : garder de la matière",
        "body": "Un écrasé accepte des morceaux, des peaux fines, de l’huile d’olive, des herbes ou du beurre. Il demande moins de lissage qu’une purée et garde plus de mâche. C’est souvent plus tolérant et très utile pour valoriser des pommes de terre vapeur.",
        "tip": "Écrasé = texture assumée."
      },
      {
        "title": "Liquide et gras chauds",
        "body": "Le lait, la crème ou le beurre s’incorporent mieux chauds ou tièdes. Un liquide froid refroidit la purée et peut donner une texture moins agréable. Ajouter progressivement permet de contrôler la consistance.",
        "tip": "Ajoute chaud, petit à petit."
      },
      {
        "title": "Gratin : amidon et cuisson lente",
        "body": "Dans un gratin de pommes de terre, l’amidon aide à lier crème ou lait. Une cuisson trop forte brûle la surface avant que les tranches soient fondantes. Une cuisson douce permet aux pommes de terre de cuire et à la sauce de se stabiliser.",
        "tip": "Le gratin fondant demande du temps, pas seulement du fromage."
      }
    ],
    "goFurther": {
      "title": "Assaisonner une purée",
      "content": "Une purée demande plus d’assaisonnement qu’on ne le croit, car la pomme de terre absorbe beaucoup. Sel, beurre, muscade, huile d’olive, ail confit ou herbes peuvent fonctionner, mais il faut goûter après chaque ajout."
    },
    "quiz": [
      {
        "q": "Ta purée devient gluante après avoir utilisé un mixeur plongeant. Pourquoi ?",
        "options": [
          "Trop d’amidon libéré par un travail violent",
          "Pas assez de cuisson",
          "Trop de vapeur",
          "Trop de sel uniquement"
        ],
        "answer": 0,
        "explanation": "Le mixeur casse trop les cellules et libère l’amidon. La texture devient collante."
      },
      {
        "q": "Tu ajoutes du lait froid dans une purée chaude. Quel risque ?",
        "options": [
          "Refroidir la purée et rendre l’incorporation moins agréable",
          "La rendre croustillante",
          "Supprimer l’amidon",
          "La cuire davantage"
        ],
        "answer": 0,
        "explanation": "Un liquide chaud ou tiède s’intègre mieux et garde la purée à bonne température."
      },
      {
        "q": "Tu veux un accompagnement rustique avec texture et herbes. Que choisis-tu plutôt ?",
        "options": [
          "Un écrasé de pommes de terre",
          "Une purée mixée longuement",
          "Une pomme de terre crue",
          "Un gratin brûlé"
        ],
        "answer": 0,
        "explanation": "L’écrasé garde des morceaux et accepte très bien herbes, huile ou beurre."
      },
      {
        "q": "Ton gratin est doré dessus mais les pommes de terre sont fermes. Que fallait-il corriger ?",
        "options": [
          "Cuire plus doucement et plus longtemps avant la finition de surface",
          "Mettre le grill dès le début",
          "Ajouter plus de fromage seulement",
          "Couper les pommes de terre après cuisson"
        ],
        "answer": 0,
        "explanation": "Le dessus colore plus vite que le cœur. Un gratin demande une cuisson douce pour devenir fondant."
      }
    ],
    "linkedRecipes": [
      "puree-pommes-terre-maitrisee"
    ]
  },
  {
    "id": "corriger-feculents-rates",
    "moduleId": "feculents-riz-pates-pommes-terre",
    "title": "Corriger des féculents ratés",
    "subtitle": "Collant, sec, trop cuit, fade ou détrempé",
    "duration": 12,
    "prerequisites": [
      "purees-ecrases-gratins"
    ],
    "objectives": [
      "Diagnostiquer les défauts courants des féculents",
      "Corriger ou réorienter un plat selon sa texture",
      "Prévenir les erreurs de timing, d’eau et d’amidon"
    ],
    "concepts": [
      {
        "title": "Pâtes trop cuites",
        "body": "Des pâtes trop cuites ne redeviennent pas al dente. Il faut éviter de les maltraiter davantage. On peut les transformer en gratin, salade froide, poêlée croustillante ou plat très saucé. La correction consiste à changer de destination.",
        "tip": "Trop cuit ne revient pas ; il se réutilise autrement."
      },
      {
        "title": "Riz collant",
        "body": "Un riz collant peut venir d’un excès d’eau, d’un riz non rincé alors qu’on voulait des grains séparés, d’un remuage excessif ou d’une surcuisson. On peut parfois l’étaler pour le sécher, le transformer en riz sauté ou en galettes. Mais il ne redeviendra pas parfaitement léger.",
        "tip": "Riz collant : sèche, saute ou transforme."
      },
      {
        "title": "Pommes de terre aqueuses",
        "body": "Des pommes de terre trop gorgées d’eau donnent une purée fade et lourde. Il faut les égoutter soigneusement, les remettre quelques instants à sec dans la casserole chaude pour évaporer, puis ajouter le gras et le liquide progressivement.",
        "tip": "Avant d’écraser, fais sortir l’eau."
      },
      {
        "title": "Féculents fades",
        "body": "Les féculents absorbent beaucoup. S’ils n’ont pas été assaisonnés pendant la cuisson, ils peuvent rester fades malgré une sauce. La correction passe par une sauce plus liée, un assaisonnement progressif, du gras, de l’acidité ou un ingrédient puissant comme fromage, herbes ou bouillon réduit.",
        "tip": "Un féculent fade demande une sauce qui accroche."
      }
    ],
    "goFurther": {
      "title": "Prévention par timing",
      "content": "Les féculents attendent rarement bien. Les pâtes collent, le riz sèche, les pommes de terre refroidissent et la purée fige. Le service doit être prévu avant la fin de cuisson, pas improvisé après."
    },
    "quiz": [
      {
        "q": "Tes pâtes sont trop cuites. Quelle stratégie est la plus réaliste ?",
        "options": [
          "Les transformer en gratin, salade ou poêlée plutôt que chercher à les rendre al dente",
          "Les recuire longtemps dans l’eau",
          "Les mettre au congélateur pour retrouver la fermeté",
          "Ajouter du sel sec pour les durcir"
        ],
        "answer": 0,
        "explanation": "Une surcuisson ne se répare pas vraiment. On change l’usage pour mieux servir."
      },
      {
        "q": "Ton riz nature est collant alors que tu voulais des grains séparés. Quelle cause est probable ?",
        "options": [
          "Trop d’eau, pas de rinçage, surcuisson ou trop de remuage",
          "Pas assez de sauce tomate",
          "Assiette trop froide",
          "Couvercle trop propre"
        ],
        "answer": 0,
        "explanation": "Le riz collant vient souvent d’un excès d’amidon disponible ou d’un mauvais ratio de cuisson."
      },
      {
        "q": "Tes pommes de terre cuites à l’eau semblent gorgées d’eau avant purée. Que fais-tu ?",
        "options": [
          "Les égoutter puis les dessécher quelques instants dans la casserole chaude",
          "Ajouter immédiatement beaucoup de lait froid",
          "Les mixer longuement",
          "Les remettre dans l’eau froide"
        ],
        "answer": 0,
        "explanation": "Dessécher un peu les pommes de terre améliore la texture et évite une purée aqueuse."
      },
      {
        "q": "Ton riz cuit est fade. Quelle correction fonctionne mieux qu’une pincée de sel sèche mal répartie ?",
        "options": [
          "Le mélanger avec un assaisonnement liquide ou gras qui enrobe : bouillon réduit, beurre, huile, sauce",
          "Le laisser sécher à l’air libre toute la nuit",
          "Ajouter de la farine",
          "Le rincer à grande eau"
        ],
        "answer": 0,
        "explanation": "Un féculent cuit absorbe et accroche mieux un assaisonnement réparti dans un liquide ou un gras."
      }
    ],
    "linkedRecipes": [
      "riz-saute-recuperation"
    ]
  },
  {
    "id": "comprendre-viande",
    "moduleId": "viandes-rouges-porc",
    "title": "Comprendre la viande",
    "subtitle": "Muscle, gras, collagène, jutosité et cuisson",
    "duration": 12,
    "prerequisites": [
      "corriger-feculents-rates"
    ],
    "objectives": [
      "Comprendre pourquoi tous les morceaux ne se cuisent pas de la même manière",
      "Différencier viande à saisir, à rôtir et à mijoter",
      "Préserver jutosité, tendreté et goût grâce à la bonne méthode"
    ],
    "concepts": [
      {
        "title": "La viande est un muscle",
        "body": "Une viande n’est pas seulement un morceau à cuire. C’est un muscle composé de fibres, d’eau, de gras et parfois de collagène. Plus un muscle a travaillé dans l’animal, plus il est riche en tissus fermes et demande souvent une cuisson longue. Plus un morceau est naturellement tendre, plus il supporte une cuisson courte et précise.",
        "tip": "Morceau tendre = cuisson courte ; morceau ferme = cuisson longue."
      },
      {
        "title": "Le gras donne du goût et protège",
        "body": "Le gras intramusculaire, la couche de gras ou le persillé apportent du goût et aident à protéger la viande pendant la cuisson. Une viande très maigre, comme un filet ou certaines côtes de porc, sèche plus vite. Elle demande donc plus de précision, de repos et parfois une sauce ou un jus.",
        "tip": "Viande maigre = marge d’erreur plus faible."
      },
      {
        "title": "Le collagène demande du temps",
        "body": "Paleron, joue, jarret, poitrine ou épaule contiennent davantage de collagène. À cuisson courte, ils restent durs. À cuisson longue et douce, le collagène se transforme en gélatine et donne une texture fondante. C’est la logique des braisages, mijotés et effilochés.",
        "tip": "Le fondant des morceaux fermes se gagne lentement."
      },
      {
        "title": "La jutosité dépend de la cuisson et du repos",
        "body": "Une viande trop cuite expulse son eau et devient sèche. Une viande coupée trop tôt perd son jus dans l’assiette. La jutosité ne dépend donc pas seulement de la qualité du morceau : elle dépend aussi de la température, du temps, de la saisie et du repos.",
        "tip": "Une bonne viande peut devenir sèche par mauvais timing."
      }
    ],
    "goFurther": {
      "title": "Pourquoi le thermomètre aide vraiment",
      "content": "Le thermomètre ne remplace pas le toucher ou l’observation, mais il apprend à relier une température à une texture. Il est particulièrement utile pour le porc, les grosses pièces, les rôtis et les cuissons où la couleur intérieure peut être trompeuse."
    },
    "quiz": [
      {
        "q": "Tu cuis une joue de bœuf comme un steak, 3 minutes par face. Elle reste dure. Pourquoi ?",
        "options": [
          "C’est un morceau riche en collagène qui demande une cuisson longue",
          "Elle manque uniquement de poivre",
          "Elle aurait dû être coupée après cuisson seulement",
          "La poêle était forcément trop grande"
        ],
        "answer": 0,
        "explanation": "Les morceaux qui travaillent beaucoup ne deviennent pas tendres par cuisson courte. Ils ont besoin de temps pour transformer le collagène."
      },
      {
        "q": "Une côte de porc très maigre devient sèche rapidement. Quelle cause est la plus probable ?",
        "options": [
          "La faible quantité de gras laisse peu de marge à la surcuisson",
          "Le porc ne peut jamais être juteux",
          "Il fallait la cuire uniquement à gros bouillons",
          "Le sel empêche toujours la tendreté"
        ],
        "answer": 0,
        "explanation": "Une viande maigre protège moins bien son humidité. Elle demande une cuisson plus précise et souvent un repos."
      },
      {
        "q": "Pourquoi laisser reposer une viande après cuisson ?",
        "options": [
          "Pour limiter la fuite de jus à la découpe",
          "Pour la rendre crue",
          "Pour supprimer la coloration",
          "Pour retirer tout le gras"
        ],
        "answer": 0,
        "explanation": "Pendant le repos, la chaleur se répartit et la pression interne baisse. La découpe perd moins de jus."
      },
      {
        "q": "Un morceau très persillé a souvent quel avantage en cuisson ?",
        "options": [
          "Il apporte plus de goût et tolère mieux une cuisson qu’un morceau très maigre",
          "Il ne peut jamais être trop cuit",
          "Il ne doit jamais reposer",
          "Il cuit toujours plus vite à cœur"
        ],
        "answer": 0,
        "explanation": "Le gras apporte goût et sensation de jutosité, mais il ne dispense pas de maîtriser la cuisson."
      }
    ],
    "linkedRecipes": [
      "steak-saisi-repos",
      "boeuf-braise-simple"
    ]
  },
  {
    "id": "cuire-steak-cote-piece-rouge",
    "moduleId": "viandes-rouges-porc",
    "title": "Cuire une pièce de viande rouge",
    "subtitle": "Saisir, contrôler, reposer",
    "duration": 12,
    "prerequisites": [
      "comprendre-viande"
    ],
    "objectives": [
      "Saisir une pièce de viande rouge pour obtenir une croûte",
      "Adapter la cuisson à l’épaisseur et au point souhaité",
      "Laisser reposer et découper sans perdre le jus"
    ],
    "concepts": [
      {
        "title": "Tempérer sans laisser traîner",
        "body": "Sortir une viande épaisse un peu avant cuisson aide à réduire l’écart entre extérieur et centre. Cela ne veut pas dire la laisser des heures sur le plan de travail. L’objectif est de limiter le choc thermique, pas de négliger l’hygiène.",
        "tip": "Tempérer un peu, pas oublier."
      },
      {
        "title": "Sécher pour colorer",
        "body": "Une viande humide commence par évaporer l’eau de surface. La coloration est retardée et la croûte se forme moins bien. Sécher au papier absorbant avant cuisson est un geste simple qui améliore nettement la saisie.",
        "tip": "Surface sèche = croûte plus rapide."
      },
      {
        "title": "Saisir puis ajuster",
        "body": "La saisie crée les arômes de surface. Pour une pièce fine, elle peut suffire à cuire. Pour une pièce épaisse, il faut souvent saisir fort puis finir plus doucement, au four ou à feu réduit. Sinon l’extérieur brûle avant que le centre soit au bon point.",
        "tip": "Fort pour la croûte, doux pour le cœur."
      },
      {
        "title": "Le repos et la découpe",
        "body": "Après cuisson, une pièce de viande doit reposer. Ensuite, la découpe doit respecter le sens des fibres. Couper à contre-fil raccourcit les fibres en bouche et donne une sensation plus tendre. Couper dans le sens des fibres rend la mâche plus longue et plus ferme.",
        "tip": "Repos pour le jus, contre-fil pour la tendreté."
      }
    ],
    "goFurther": {
      "title": "Toucher, température, observation",
      "content": "Le toucher donne des indications avec l’expérience, mais il varie selon le morceau. La température interne est plus fiable. L’observation de la croûte, du jus et de la résistance complète le diagnostic."
    },
    "quiz": [
      {
        "q": "Ton steak sort gris et humide au lieu d’être bien doré. Quelle erreur est probable ?",
        "options": [
          "Viande trop humide, poêle trop froide ou trop chargée",
          "Repos trop long après cuisson",
          "Découpe à contre-fil",
          "Poivre ajouté trop tard"
        ],
        "answer": 0,
        "explanation": "Pour saisir, il faut une surface sèche, une poêle chaude et assez de contact avec la chaleur."
      },
      {
        "q": "Une côte épaisse est brûlée dehors mais trop crue dedans. Que fallait-il faire ?",
        "options": [
          "Saisir puis finir plus doucement",
          "Continuer à feu maximal",
          "Ajouter de l’eau froide pendant la saisie",
          "La couper dès la pose en poêle"
        ],
        "answer": 0,
        "explanation": "Une pièce épaisse demande deux phases : coloration de surface, puis cuisson plus progressive du centre."
      },
      {
        "q": "Pourquoi couper une bavette à contre-fil ?",
        "options": [
          "Pour raccourcir les fibres et rendre la mâche plus tendre",
          "Pour faire sortir tout le jus",
          "Pour la refroidir plus vite",
          "Pour empêcher la croûte d’exister"
        ],
        "answer": 0,
        "explanation": "La découpe influence la perception de tendreté. À contre-fil, les fibres sont plus courtes en bouche."
      },
      {
        "q": "Tu coupes immédiatement un steak après cuisson et le jus coule beaucoup. Quelle étape a manqué ?",
        "options": [
          "Le repos",
          "Le lavage de la viande",
          "La cuisson à l’eau",
          "Le passage au congélateur"
        ],
        "answer": 0,
        "explanation": "Le repos limite la fuite des jus et donne une viande plus agréable à la découpe."
      }
    ],
    "linkedRecipes": [
      "steak-saisi-repos",
      "bavette-echalote-contre-fil"
    ]
  },
  {
    "id": "porc-cuisson-juste",
    "moduleId": "viandes-rouges-porc",
    "title": "Cuire le porc juste",
    "subtitle": "Éviter le porc sec sans négliger la sécurité",
    "duration": 11,
    "prerequisites": [
      "cuire-steak-cote-piece-rouge"
    ],
    "objectives": [
      "Comprendre pourquoi le porc sèche vite selon les morceaux",
      "Adapter cuisson courte ou longue selon côte, filet, échine ou épaule",
      "Utiliser repos, sauce et température pour obtenir une texture juteuse"
    ],
    "concepts": [
      {
        "title": "Le porc n’est pas un seul produit",
        "body": "Un filet mignon, une côte, une échine, une poitrine et une épaule ne se cuisent pas pareil. Le filet est maigre et sèche vite. L’échine est plus grasse et tolérante. L’épaule aime les cuissons longues. La poitrine peut devenir croustillante ou fondante selon la méthode.",
        "tip": "Porc maigre : précision. Porc gras : patience ou croustillant."
      },
      {
        "title": "Le porc trop cuit devient vite sec",
        "body": "Par prudence, beaucoup de cuisiniers cuisent le porc trop longtemps. Résultat : chair sèche, dure et peu agréable. La sécurité reste importante, mais elle doit passer par une cuisson maîtrisée, pas par une surcuisson systématique.",
        "tip": "Sécurité ne veut pas dire dessèchement."
      },
      {
        "title": "Saisir puis finir doucement",
        "body": "Pour une côte ou un filet mignon, la logique est souvent de colorer à la poêle, puis finir doucement au four ou à feu réduit. Cela permet d’avoir du goût en surface et une chair plus juteuse au centre.",
        "tip": "Le porc maigre aime les fins de cuisson douces."
      },
      {
        "title": "Sauces et jus sont utiles",
        "body": "Le porc se marie bien avec moutarde, crème, jus court, cidre, vinaigre, herbes ou fruits. Une sauce ne doit pas masquer une surcuisson, mais elle peut équilibrer et apporter de la jutosité perçue, surtout sur les morceaux maigres.",
        "tip": "Le porc aime l’acidité douce et les jus courts."
      }
    ],
    "goFurther": {
      "title": "Morceaux de porc et usage",
      "content": "Filet mignon : cuisson courte et douce. Côte : saisie puis finition. Échine : grill, poêle ou mijoté court. Épaule : braisage ou effiloché. Poitrine : confite, croustillante ou mijotée."
    },
    "quiz": [
      {
        "q": "Ton filet mignon est sec alors qu’il est bien doré. Quelle erreur est probable ?",
        "options": [
          "Cuisson trop longue ou trop forte après la saisie",
          "Manque de coloration uniquement",
          "Repos trop long avant cuisson",
          "Trop de sauce à côté"
        ],
        "answer": 0,
        "explanation": "Le filet mignon est maigre. Après coloration, il doit finir doucement et ne pas dépasser son point."
      },
      {
        "q": "Quel morceau de porc tolère mieux une cuisson longue ?",
        "options": [
          "Épaule",
          "Filet mignon très maigre",
          "Côte fine",
          "Médaillon très mince"
        ],
        "answer": 0,
        "explanation": "L’épaule contient davantage de tissu conjonctif et devient fondante avec une cuisson longue."
      },
      {
        "q": "Pourquoi une sauce moutarde ou cidre fonctionne bien avec le porc ?",
        "options": [
          "L’acidité et le parfum équilibrent la richesse ou la douceur de la viande",
          "Elle empêche toute cuisson",
          "Elle remplace le repos",
          "Elle rend la viande crue"
        ],
        "answer": 0,
        "explanation": "Le porc aime les équilibres entre gras, douceur, acidité et aromates."
      },
      {
        "q": "Tu cuis une côte de porc fine à feu fort longtemps. Que risques-tu ?",
        "options": [
          "Une chair sèche et dure",
          "Une viande forcément plus juteuse",
          "Un cœur fondant comme un mijoté",
          "Une sauce automatique"
        ],
        "answer": 0,
        "explanation": "Une côte fine cuit vite. Prolonger à feu fort expulse l’eau et durcit les fibres."
      }
    ],
    "linkedRecipes": [
      "filet-mignon-moutarde"
    ]
  },
  {
    "id": "morceaux-a-mijoter",
    "moduleId": "viandes-rouges-porc",
    "title": "Morceaux à mijoter et à braiser",
    "subtitle": "Transformer le ferme en fondant",
    "duration": 12,
    "prerequisites": [
      "porc-cuisson-juste"
    ],
    "objectives": [
      "Choisir les morceaux adaptés aux cuissons longues",
      "Construire le goût par saisie, mouillage et frémissement",
      "Reconnaître une viande braisée prête à la texture"
    ],
    "concepts": [
      {
        "title": "Les bons morceaux pour mijoter",
        "body": "Joue, paleron, macreuse, jarret, queue, épaule, poitrine et collier sont adaptés aux cuissons longues. Ils sont moins tendres au départ, mais riches en goût et en collagène. Bien cuits, ils donnent une texture plus profonde qu’un morceau tendre mal utilisé.",
        "tip": "Un morceau ferme n’est pas mauvais : il demande la bonne cuisson."
      },
      {
        "title": "La saisie construit le fond",
        "body": "Avant de mouiller, il faut souvent saisir la viande pour créer des sucs. Ces sucs donneront de la profondeur à la sauce. Si la viande est entassée, elle rend de l’eau et ne colore pas. Il vaut mieux saisir en plusieurs fois.",
        "tip": "Saisie bâclée, sauce affaiblie."
      },
      {
        "title": "Mouiller à bonne hauteur",
        "body": "Pour braiser, le liquide doit cuire et nourrir la sauce sans forcément noyer la viande. Trop peu de liquide : ça accroche. Trop : le goût se dilue. Le couvercle, le four ou le feu doux servent ensuite à contrôler évaporation et tendreté.",
        "tip": "Mouiller pour cuire, pas pour diluer."
      },
      {
        "title": "La texture décide",
        "body": "Une viande braisée est prête quand elle cède facilement à la fourchette. Si elle est encore ferme, elle manque souvent de temps. Augmenter violemment le feu ne remplace pas une cuisson lente.",
        "tip": "La fourchette juge mieux que l’horloge."
      }
    ],
    "goFurther": {
      "title": "Retirer la viande pour réduire",
      "content": "Quand la viande est tendre mais la sauce trop liquide, il faut retirer la viande et réduire la sauce seule. Cela évite de surcuire une viande déjà prête."
    },
    "quiz": [
      {
        "q": "Ton bœuf braisé est encore dur après 1h30. Que fais-tu ?",
        "options": [
          "Tu prolonges doucement jusqu’à ce que la viande cède",
          "Tu augmentes au maximum pour forcer la tendreté",
          "Tu le sers immédiatement",
          "Tu ajoutes du sel pour attendrir instantanément"
        ],
        "answer": 0,
        "explanation": "Les morceaux riches en collagène demandent du temps. La tendreté arrive progressivement."
      },
      {
        "q": "Tu veux saisir 1 kg de viande dans une petite cocotte en une seule fois. Que risques-tu ?",
        "options": [
          "La viande va rendre de l’eau et griser",
          "La viande va mieux colorer",
          "La sauce sera plus concentrée",
          "La viande deviendra plus sèche uniquement après repos"
        ],
        "answer": 0,
        "explanation": "Trop de viande fait chuter la température. La vapeur remplace la coloration."
      },
      {
        "q": "La viande est tendre mais la sauce est trop liquide. Quelle méthode est la plus précise ?",
        "options": [
          "Retirer la viande et réduire la sauce seule",
          "Continuer à cuire la viande jusqu’à ce qu’elle se défasse complètement",
          "Ajouter du sel",
          "Mixer la viande avec la sauce"
        ],
        "answer": 0,
        "explanation": "On protège la viande prête et on concentre la sauce à part."
      },
      {
        "q": "Un braisage bout violemment pendant toute la cuisson. Quel défaut peut apparaître ?",
        "options": [
          "Viande plus sèche, fibres agressées, sauce moins nette",
          "Viande toujours plus tendre",
          "Sauce plus fraîche",
          "Aucune évaporation"
        ],
        "answer": 0,
        "explanation": "Le braisage demande un frémissement doux. Les gros bouillons sont trop agressifs."
      }
    ],
    "linkedRecipes": [
      "boeuf-braise-simple"
    ]
  },
  {
    "id": "repos-decoupe-viande",
    "moduleId": "viandes-rouges-porc",
    "title": "Repos, jus et découpe",
    "subtitle": "Servir une viande plus juteuse et plus tendre",
    "duration": 10,
    "prerequisites": [
      "morceaux-a-mijoter"
    ],
    "objectives": [
      "Utiliser le repos selon la taille de la pièce",
      "Découper à contre-fil pour améliorer la tendreté",
      "Récupérer les jus sans détremper la viande"
    ],
    "concepts": [
      {
        "title": "Le repos dépend de la taille",
        "body": "Un steak demande quelques minutes. Une côte épaisse ou un rôti demande davantage. Le repos permet à la chaleur de se répartir et au jus de moins s’échapper à la découpe. Il doit rester proportionné : trop court, la viande perd son jus ; trop long sans protection, elle refroidit.",
        "tip": "Plus la pièce est grosse, plus le repos compte."
      },
      {
        "title": "Couvrir sans étouffer",
        "body": "Couvrir légèrement avec une feuille d’aluminium peut garder la chaleur, mais enfermer hermétiquement crée de la vapeur et ramollit la croûte. Pour une viande saisie, il faut protéger sans étouffer.",
        "tip": "Garde chaud, mais laisse respirer la croûte."
      },
      {
        "title": "Découper à contre-fil",
        "body": "Les fibres musculaires ont un sens. Les couper à contre-fil raccourcit les fibres et donne une sensation plus tendre. C’est essentiel pour bavette, onglet, hampe, poitrine, rôti ou morceaux fibreux.",
        "tip": "Le couteau peut rendre une viande plus tendre."
      },
      {
        "title": "Jus de repos",
        "body": "Le jus qui se forme pendant le repos peut être ajouté à une sauce ou versé sur la viande. Il contient du goût. Mais s’il est simplement répandu dans l’assiette sans contrôle, il peut détremper une garniture ou diluer une sauce.",
        "tip": "Le jus de repos se récupère, il ne se subit pas."
      }
    ],
    "goFurther": {
      "title": "Découpe et dressage",
      "content": "Une viande bien cuite peut être mal servie si elle est coupée trop épais, dans le mauvais sens ou sans sauce. Le service fait partie de la technique."
    },
    "quiz": [
      {
        "q": "Tu coupes une bavette dans le sens des fibres et elle paraît dure. Que fallait-il faire ?",
        "options": [
          "Couper à contre-fil",
          "La cuire plus fort uniquement",
          "La rincer après cuisson",
          "La saler après découpe uniquement"
        ],
        "answer": 0,
        "explanation": "À contre-fil, les fibres sont plus courtes en bouche et la viande paraît plus tendre."
      },
      {
        "q": "Tu couvres hermétiquement un steak très croustillant pendant 10 minutes. Que risques-tu ?",
        "options": [
          "Ramollir la croûte avec la vapeur",
          "Le rendre plus croustillant",
          "Supprimer le repos",
          "Le refroidir immédiatement"
        ],
        "answer": 0,
        "explanation": "Une couverture trop fermée piège la vapeur. La croûte perd sa netteté."
      },
      {
        "q": "Le jus s’accumule dans l’assiette après repos. Comment l’utiliser intelligemment ?",
        "options": [
          "L’intégrer à la sauce ou le verser proprement sur la viande",
          "Le jeter systématiquement",
          "Le mélanger à une salade verte sans réfléchir",
          "Le faire brûler à sec"
        ],
        "answer": 0,
        "explanation": "Le jus de repos contient du goût. Il peut enrichir une sauce ou un jus court."
      },
      {
        "q": "Pourquoi une grosse pièce demande-t-elle plus de repos qu’un petit steak ?",
        "options": [
          "Elle contient plus de chaleur accumulée et de jus à stabiliser",
          "Elle est toujours crue",
          "Elle ne peut pas être découpée",
          "Elle refroidit plus vite qu’une pièce fine"
        ],
        "answer": 0,
        "explanation": "La chaleur interne continue de se répartir plus longtemps dans une grosse pièce."
      }
    ],
    "linkedRecipes": [
      "bavette-echalote-contre-fil"
    ]
  },
  {
    "id": "comprendre-volaille",
    "moduleId": "volailles",
    "title": "Comprendre la volaille",
    "subtitle": "Blanc, cuisse, peau, os et sécurité",
    "duration": 12,
    "prerequisites": [
      "repos-decoupe-viande"
    ],
    "objectives": [
      "Différencier les cuissons du blanc et de la cuisse",
      "Comprendre le rôle de la peau, des os et du repos",
      "Cuire la volaille en sécurité sans la dessécher"
    ],
    "concepts": [
      {
        "title": "Le blanc et la cuisse ne cuisent pas pareil",
        "body": "Le blanc est maigre et sèche vite. La cuisse est plus riche en collagène, en gras et en tissu conjonctif ; elle supporte mieux les cuissons longues et gagne à être bien cuite. Une volaille entière pose donc un défi : cuire les cuisses suffisamment sans dessécher les blancs.",
        "tip": "Blanc fragile, cuisse patiente."
      },
      {
        "title": "La peau protège et colore",
        "body": "Une peau bien séchée peut devenir dorée et croustillante. Elle protège aussi partiellement la chair. Une peau humide cuit à la vapeur et colore mal. Pour une belle peau, il faut sécher, saler et cuire avec assez de chaleur au départ.",
        "tip": "Peau sèche = peau qui rôtit."
      },
      {
        "title": "L’os ralentit mais donne du goût",
        "body": "Une pièce avec os cuit souvent plus lentement qu’un morceau désossé, mais elle garde mieux une certaine jutosité et donne plus de goût aux jus. Les cuisses, pilons et volailles entières demandent donc plus de temps qu’une escalope fine.",
        "tip": "Avec os : plus lent, souvent plus savoureux."
      },
      {
        "title": "Sécurité sans surcuisson",
        "body": "La volaille doit être cuite correctement pour des raisons sanitaires. Mais cela ne signifie pas qu’il faut la cuire jusqu’à sécheresse. Le bon résultat passe par la température, l’épaisseur régulière, le repos, et parfois une sauce ou un jus.",
        "tip": "Volaille sûre, oui ; volaille sèche, non."
      }
    ],
    "goFurther": {
      "title": "Thermomètre conseillé",
      "content": "Pour la volaille, le thermomètre est particulièrement utile. Il permet d’éviter deux erreurs opposées : servir insuffisamment cuit ou cuire tellement longtemps que la chair devient sèche."
    },
    "quiz": [
      {
        "q": "Pourquoi un blanc de poulet sèche-t-il plus vite qu’une cuisse ?",
        "options": [
          "Il est plus maigre et contient moins de tissu conjonctif",
          "Il contient plus d’os",
          "Il ne contient aucune eau",
          "Il ne peut jamais être bien cuit"
        ],
        "answer": 0,
        "explanation": "Le blanc est maigre et sensible à la surcuisson. La cuisse supporte mieux une cuisson plus longue."
      },
      {
        "q": "Ta peau de poulet reste molle et pâle. Quelle cause est probable ?",
        "options": [
          "Peau humide, four pas assez chaud ou manque d’évaporation",
          "Trop de repos après cuisson",
          "Trop peu de citron en finition",
          "Couteau mal aiguisé"
        ],
        "answer": 0,
        "explanation": "Une peau croustillante demande une surface sèche et assez de chaleur pour évaporer et colorer."
      },
      {
        "q": "Une cuisse avec os cuit plus lentement qu’une escalope fine. Pourquoi ?",
        "options": [
          "L’épaisseur et l’os ralentissent la diffusion de chaleur",
          "L’os empêche toute cuisson",
          "La cuisse ne contient pas de muscle",
          "L’escalope est toujours crue"
        ],
        "answer": 0,
        "explanation": "La chaleur met plus de temps à atteindre le centre d’une pièce épaisse avec os."
      },
      {
        "q": "Quel est le meilleur objectif pour une volaille ?",
        "options": [
          "Cuisson sûre, chair juteuse, repos adapté",
          "Cuisson très longue systématique",
          "Chair sèche mais peau pâle",
          "Aucune vérification de cuisson"
        ],
        "answer": 0,
        "explanation": "La volaille demande sécurité et précision. La surcuisson n’est pas une méthode fiable de qualité."
      }
    ],
    "linkedRecipes": [
      "blanc-poulet-moelleux",
      "poulet-roti-jus-simple"
    ]
  },
  {
    "id": "cuire-blanc-volaille",
    "moduleId": "volailles",
    "title": "Cuire un blanc de volaille moelleux",
    "subtitle": "Épaisseur régulière, feu contrôlé, repos",
    "duration": 11,
    "prerequisites": [
      "comprendre-volaille"
    ],
    "objectives": [
      "Préparer un blanc de volaille pour une cuisson régulière",
      "Saisir puis finir doucement sans sécher",
      "Utiliser repos et sauce pour préserver la jutosité"
    ],
    "concepts": [
      {
        "title": "L’épaisseur régulière change tout",
        "body": "Un blanc de poulet est souvent épais d’un côté et fin de l’autre. Si on le cuit tel quel, la pointe fine sèche avant que le centre épais soit prêt. Aplatir légèrement ou ouvrir en portefeuille permet une cuisson plus régulière.",
        "tip": "Même épaisseur, cuisson plus juste."
      },
      {
        "title": "Saisir sans brutaliser",
        "body": "Une légère coloration donne du goût, mais le blanc n’a pas besoin d’être agressé longtemps à feu fort. On peut saisir rapidement, puis baisser le feu, couvrir brièvement ou finir au four doux.",
        "tip": "Colorer vite, finir calme."
      },
      {
        "title": "La marinade n’est pas une assurance tous risques",
        "body": "Une marinade peut parfumer et apporter un peu de protection, surtout avec sel, yaourt, huile, citron ou épices. Mais une cuisson trop forte ou trop longue rendra quand même la volaille sèche. La marinade aide, la cuisson décide.",
        "tip": "Mariner ne remplace pas maîtriser."
      },
      {
        "title": "Le repos est court mais utile",
        "body": "Un blanc de volaille cuit doit reposer quelques minutes. Cela aide les jus à se stabiliser. Pendant ce temps, on peut finir une sauce, dresser ou préparer une garniture.",
        "tip": "Même un blanc de poulet mérite son repos."
      }
    ],
    "goFurther": {
      "title": "Découpe après cuisson",
      "content": "Trancher un blanc trop tôt fait sortir le jus. Le trancher après repos, en biais, donne une sensation plus tendre et une présentation plus nette."
    },
    "quiz": [
      {
        "q": "Ton blanc de poulet est sec à la pointe mais juste au centre. Quelle préparation aurait aidé ?",
        "options": [
          "L’aplatir ou l’ouvrir pour régulariser l’épaisseur",
          "Le cuire plus fort",
          "Le couper après 30 minutes de repos seulement",
          "Ajouter du sucre sec"
        ],
        "answer": 0,
        "explanation": "Une épaisseur régulière évite que les parties fines surcuisent avant le centre."
      },
      {
        "q": "Tu saisis un blanc longtemps à feu très fort jusqu’à cuisson complète. Quel risque ?",
        "options": [
          "Surface sèche et centre moins juteux",
          "Chair forcément plus moelleuse",
          "Peau croustillante même sans peau",
          "Cuisson plus douce"
        ],
        "answer": 0,
        "explanation": "Le blanc est maigre. Une cuisson trop agressive expulse son humidité."
      },
      {
        "q": "Une marinade peut aider, mais que ne peut-elle pas corriger ?",
        "options": [
          "Une surcuisson importante",
          "Un manque d’assiette",
          "Une découpe à contre-fil",
          "Une sauce trop brillante"
        ],
        "answer": 0,
        "explanation": "La marinade peut parfumer et attendrir légèrement, mais la texture finale dépend surtout de la cuisson."
      },
      {
        "q": "Que faire pendant le repos d’un blanc de poulet ?",
        "options": [
          "Finir la sauce ou la garniture",
          "Le couper immédiatement en petits morceaux",
          "Le remettre à feu fort sans raison",
          "Le refroidir sous l’eau"
        ],
        "answer": 0,
        "explanation": "Le repos protège la jutosité et libère du temps pour finaliser le plat."
      }
    ],
    "linkedRecipes": [
      "blanc-poulet-moelleux"
    ]
  },
  {
    "id": "cuire-cuisses-volaille",
    "moduleId": "volailles",
    "title": "Cuire les cuisses de volaille",
    "subtitle": "Fondant, peau dorée et cuisson à cœur",
    "duration": 11,
    "prerequisites": [
      "cuire-blanc-volaille"
    ],
    "objectives": [
      "Comprendre pourquoi les cuisses demandent plus de cuisson que les blancs",
      "Obtenir une peau dorée et une chair fondante",
      "Adapter poêle, four, braisage ou mijotage selon le résultat"
    ],
    "concepts": [
      {
        "title": "La cuisse aime le temps",
        "body": "La cuisse contient plus de collagène, de gras et de tissu conjonctif que le blanc. Elle devient agréable quand elle est bien cuite, parfois plus longtemps qu’on ne l’imagine. Une cuisse insuffisamment cuite peut être ferme autour de l’os.",
        "tip": "La cuisse doit être vraiment cuite pour être bonne."
      },
      {
        "title": "Peau côté chaleur",
        "body": "Pour une cuisse avec peau, commencer côté peau dans une poêle ou un four chaud aide à faire fondre le gras et à colorer. Il faut ensuite laisser le temps à la chaleur d’atteindre l’os.",
        "tip": "Peau d’abord, cœur ensuite."
      },
      {
        "title": "Braiser pour le fondant",
        "body": "Une cuisse peut être saisie puis cuite avec un peu de liquide, à couvert ou au four. Cette méthode donne une chair fondante et une sauce. Si on veut garder la peau croustillante, il faut éviter de la noyer dans le liquide.",
        "tip": "Liquide pour fondre, air chaud pour croustiller."
      },
      {
        "title": "Signes de cuisson",
        "body": "La chair doit être tendre, le jus clair, et la zone près de l’os ne doit pas être rouge. Une température interne fiable aide beaucoup. Pour une cuisse braisée, la chair doit presque se détacher.",
        "tip": "Autour de l’os, la cuisson se vérifie vraiment."
      }
    ],
    "goFurther": {
      "title": "Cuisse désossée",
      "content": "Une cuisse désossée cuit plus vite et se prête bien à la poêle, aux brochettes, aux marinades ou au grill. Elle reste plus tolérante qu’un blanc grâce à son gras."
    },
    "quiz": [
      {
        "q": "Ta cuisse de poulet est dorée dehors mais rouge près de l’os. Que comprends-tu ?",
        "options": [
          "La surface est cuite, mais le cœur manque de cuisson",
          "Elle est forcément trop cuite",
          "La peau empêche toute cuisson",
          "Il faut la servir immédiatement"
        ],
        "answer": 0,
        "explanation": "La zone proche de l’os cuit plus lentement. La coloration extérieure ne suffit pas."
      },
      {
        "q": "Pourquoi une cuisse supporte-t-elle mieux une cuisson longue qu’un blanc ?",
        "options": [
          "Elle contient plus de gras et de tissu conjonctif",
          "Elle ne contient aucune eau",
          "Elle est toujours plus fine",
          "Elle ne coagule pas"
        ],
        "answer": 0,
        "explanation": "La structure de la cuisse la rend plus adaptée aux cuissons prolongées."
      },
      {
        "q": "Tu veux une cuisse fondante avec sauce. Quelle méthode est cohérente ?",
        "options": [
          "Saisir puis braiser doucement avec un peu de liquide",
          "Cuire 2 minutes à feu fort",
          "La cuire uniquement sous l’eau froide",
          "La couper crue après cuisson"
        ],
        "answer": 0,
        "explanation": "La saisie donne le goût, le braisage donne le fondant et la sauce."
      },
      {
        "q": "Tu noies entièrement la peau dans le liquide pendant le braisage. Quel résultat sur la peau ?",
        "options": [
          "Elle risque de devenir molle",
          "Elle restera forcément croustillante",
          "Elle va frire",
          "Elle ne cuira pas"
        ],
        "answer": 0,
        "explanation": "Le liquide ramollit la peau. Pour du croustillant, il faut exposition à chaleur sèche."
      }
    ],
    "linkedRecipes": [
      "cuisses-poulet-braisees"
    ]
  },
  {
    "id": "rotir-volaille-entiere",
    "moduleId": "volailles",
    "title": "Rôtir une volaille entière",
    "subtitle": "Peau dorée, blancs moelleux, cuisses cuites",
    "duration": 13,
    "prerequisites": [
      "cuire-cuisses-volaille"
    ],
    "objectives": [
      "Préparer une volaille entière pour une cuisson plus régulière",
      "Gérer le contraste entre blancs et cuisses",
      "Faire reposer, découper et servir avec un jus"
    ],
    "concepts": [
      {
        "title": "Le défi de la volaille entière",
        "body": "Une volaille entière réunit des morceaux qui ne veulent pas exactement la même cuisson. Les blancs sèchent vite, les cuisses demandent plus de temps. Le bon rôtissage consiste à trouver un compromis : peau sèche, chaleur initiale, position, arrosage raisonnable, repos et découpe propre.",
        "tip": "Une volaille entière est un exercice de compromis."
      },
      {
        "title": "Assaisonner en profondeur",
        "body": "Saler uniquement la peau donne une peau savoureuse mais une chair parfois fade. Assaisonner la cavité, glisser un peu de beurre ou d’aromates, saler à l’avance si possible, améliore le goût global. Il ne faut pas compter uniquement sur la sauce pour corriger une chair fade.",
        "tip": "Une volaille se sale dehors et dedans."
      },
      {
        "title": "Chaleur de départ et suite plus douce",
        "body": "Un départ plus chaud peut aider à colorer la peau. Une suite plus modérée laisse le temps aux cuisses de cuire sans trop sécher les blancs. Rester très chaud tout du long donne souvent une belle peau mais une chair sèche.",
        "tip": "Départ pour la peau, suite pour la chair."
      },
      {
        "title": "Repos et découpe",
        "body": "Une volaille rôtie doit reposer avant découpe. Ensuite, on sépare les cuisses, les blancs, les ailes. Une découpe méthodique évite de déchirer la chair et permet de servir chaque partie avec un peu de jus.",
        "tip": "La découpe fait partie du service, pas du bricolage."
      }
    ],
    "goFurther": {
      "title": "Papillon ou crapaudine",
      "content": "Ouvrir une volaille en crapaudine l’aplatit et rend la cuisson plus régulière. C’est souvent plus facile pour obtenir peau dorée et cuisson homogène qu’une volaille entière traditionnelle."
    },
    "quiz": [
      {
        "q": "Les blancs de ton poulet sont secs mais les cuisses sont juste cuites. Quel problème classique cela montre-t-il ?",
        "options": [
          "Les différentes parties ne cuisent pas au même rythme",
          "La volaille ne devait pas reposer",
          "La peau était trop dorée uniquement",
          "Le four était forcément trop doux"
        ],
        "answer": 0,
        "explanation": "Le blanc sèche plus vite que la cuisse. Il faut adapter chaleur, position, protection ou découpe."
      },
      {
        "q": "Pourquoi sécher la peau avant cuisson ?",
        "options": [
          "Pour favoriser coloration et croustillant",
          "Pour empêcher la cuisson de la chair",
          "Pour remplacer le sel",
          "Pour refroidir le four"
        ],
        "answer": 0,
        "explanation": "Une peau humide commence par évaporer l’eau. Elle colore moins bien."
      },
      {
        "q": "Tu assaisonnes uniquement l’extérieur du poulet. Quel risque ?",
        "options": [
          "Chair fade malgré une peau bien salée",
          "Cuisson trop rapide des cuisses",
          "Peau impossible à colorer",
          "Jus automatiquement trop acide"
        ],
        "answer": 0,
        "explanation": "L’assaisonnement doit aussi atteindre l’intérieur et la chair autant que possible."
      },
      {
        "q": "Quel est l’intérêt du repos après rôtissage ?",
        "options": [
          "Limiter la fuite de jus et faciliter la découpe",
          "Rendre le poulet cru",
          "Faire disparaître la peau",
          "Remplacer le jus de cuisson"
        ],
        "answer": 0,
        "explanation": "Le repos stabilise les jus et donne une découpe plus propre."
      }
    ],
    "linkedRecipes": [
      "poulet-roti-jus-simple",
      "poulet-crapaudine-herbes"
    ]
  },
  {
    "id": "jus-volaille-et-securite",
    "moduleId": "volailles",
    "title": "Jus de volaille et sécurité",
    "subtitle": "Récupérer le goût sans prendre de risque",
    "duration": 11,
    "prerequisites": [
      "rotir-volaille-entiere"
    ],
    "objectives": [
      "Utiliser les sucs et parures de volaille pour faire un jus",
      "Dégraisser et réduire sans sursaler",
      "Appliquer les bons réflexes d’hygiène avec la volaille crue"
    ],
    "concepts": [
      {
        "title": "La volaille donne de très bons sucs",
        "body": "Après rôtissage ou saisie, le plat contient souvent des sucs, du gras et parfois des morceaux d’aromates. Les sucs bruns donnent le goût du jus. Le gras peut être partiellement retiré. Un peu d’eau, de bouillon ou de fond permet de décoller et concentrer.",
        "tip": "Sucs bruns + liquide + réduction = jus simple."
      },
      {
        "title": "Dégraisser sans appauvrir",
        "body": "Un jus de volaille trop gras devient lourd. Il faut retirer une partie du gras liquide tout en gardant les sucs collés et les jus savoureux. Tout jeter serait perdre le goût ; tout garder serait alourdir.",
        "tip": "Garde le goût, retire l’excès."
      },
      {
        "title": "Réduire et goûter à la fin",
        "body": "Un jus réduit concentre tout : sel, aromates, acidité, sucs. Il faut donc saler peu au départ, réduire, puis goûter. Une noix de beurre peut finir le jus, mais seulement hors feu ou à feu doux.",
        "tip": "Le jus se sale après concentration."
      },
      {
        "title": "Hygiène de la volaille crue",
        "body": "La volaille crue impose une séparation stricte : planche, couteau, mains, torchons, surfaces. On ne réutilise pas une assiette ou une pince ayant touché du cru pour servir du cuit sans lavage. La sécurité doit être intégrée au poste, pas improvisée.",
        "tip": "Cru et cuit ne partagent pas les mêmes outils."
      }
    ],
    "goFurther": {
      "title": "Carcasse et bouillon",
      "content": "Une carcasse de volaille rôtie peut devenir un bouillon ou un fond léger. C’est une excellente manière de prolonger le goût d’un poulet rôti."
    },
    "quiz": [
      {
        "q": "Ton plat de poulet rôti contient beaucoup de gras et des sucs bruns. Que fais-tu pour un bon jus ?",
        "options": [
          "Retirer une partie du gras, garder les sucs, déglacer et réduire",
          "Tout jeter et servir de l’eau",
          "Garder tout le gras sans réduire",
          "Ajouter de la farine sèche sans liquide"
        ],
        "answer": 0,
        "explanation": "Les sucs donnent le goût. L’excès de gras alourdit. Le déglaçage récupère la base du jus."
      },
      {
        "q": "Pourquoi faut-il saler prudemment un jus avant réduction ?",
        "options": [
          "Le sel se concentre pendant la réduction",
          "Le sel disparaît en chauffant",
          "Le sel empêche les sucs de se décoller",
          "Le jus ne peut jamais être salé"
        ],
        "answer": 0,
        "explanation": "La réduction évapore l’eau, pas le sel. L’ajustement se fait à la fin."
      },
      {
        "q": "Tu utilises la même pince pour manipuler du poulet cru puis servir le poulet cuit. Quel est le problème ?",
        "options": [
          "Risque de contamination croisée",
          "La pince devient trop chaude",
          "La viande perd son jus automatiquement",
          "La peau devient molle"
        ],
        "answer": 0,
        "explanation": "Les outils qui touchent du cru doivent être lavés avant de toucher du cuit."
      },
      {
        "q": "Ton jus est bon mais trop gras en bouche. Que peux-tu faire ?",
        "options": [
          "Dégraisser partiellement",
          "Ajouter plus de gras",
          "Faire bouillir plus fort sans retirer le gras",
          "Ajouter du sucre uniquement"
        ],
        "answer": 0,
        "explanation": "Trop de gras masque le goût. Un jus doit rester riche mais lisible."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "comprendre-poisson",
    "moduleId": "poissons-fruits-mer",
    "title": "Comprendre le poisson",
    "subtitle": "Chair fragile, cuisson courte et signes précis",
    "duration": 12,
    "prerequisites": [
      "jus-volaille-et-securite"
    ],
    "objectives": [
      "Comprendre pourquoi le poisson cuit plus vite que la viande",
      "Reconnaître une chair juste cuite, nacrée ou surcuite",
      "Adapter la méthode selon filet, pavé, poisson entier ou fruit de mer"
    ],
    "concepts": [
      {
        "title": "Le poisson est fragile",
        "body": "La chair du poisson contient des fibres plus courtes et moins de tissu conjonctif que beaucoup de viandes. Elle cuit vite et se défait facilement. Une minute de trop peut suffire à passer de nacré et juteux à sec et fibreux.",
        "tip": "Poisson = cuisson courte, attention longue."
      },
      {
        "title": "Nacré, opaque, sec",
        "body": "Un poisson juste cuit devient opaque en surface mais peut rester légèrement nacré au centre selon l’espèce et l’épaisseur. Trop cuit, il devient sec, dur, friable et parfois il exsude de l’albumine blanche, notamment sur le saumon.",
        "tip": "Nacré est souvent mieux que totalement sec."
      },
      {
        "title": "La taille change tout",
        "body": "Un filet fin cuit en quelques minutes. Un pavé épais demande une cuisson plus progressive. Un poisson entier avec arêtes et peau garde mieux son humidité mais demande un peu plus de temps. La méthode doit suivre l’épaisseur.",
        "tip": "Épaisseur du poisson = stratégie de cuisson."
      },
      {
        "title": "La fraîcheur se lit avant cuisson",
        "body": "Un poisson frais doit sentir la mer propre, pas l’ammoniaque ou le rance. La chair doit être ferme, brillante, non visqueuse. Pour un poisson entier, l’œil et les branchies donnent aussi des indices. La cuisson ne sauve pas un produit douteux.",
        "tip": "Un poisson moyen ne devient pas excellent à la poêle."
      }
    ],
    "goFurther": {
      "title": "Chair blanche, poisson gras, fruits de mer",
      "content": "Un poisson blanc maigre sèche vite et aime les cuissons douces. Un poisson gras comme saumon ou maquereau tolère mieux la poêle ou le grill. Les fruits de mer demandent souvent des cuissons très courtes."
    },
    "quiz": [
      {
        "q": "Ton cabillaud se défait en morceaux secs et durs. Quelle cause est probable ?",
        "options": [
          "Surcuisson ou manipulation trop brutale",
          "Manque de farine uniquement",
          "Pas assez de sucre",
          "Poêle trop propre"
        ],
        "answer": 0,
        "explanation": "Le cabillaud est fragile. Trop de cuisson ou de gestes agressifs casse et sèche la chair."
      },
      {
        "q": "Quel signe indique souvent un saumon trop cuit ?",
        "options": [
          "Chair sèche avec albumine blanche abondante en surface",
          "Centre légèrement nacré",
          "Peau croustillante",
          "Chair brillante"
        ],
        "answer": 0,
        "explanation": "L’albumine blanche peut apparaître avec la chaleur. En excès, elle signale souvent une cuisson trop poussée."
      },
      {
        "q": "Pourquoi un filet fin ne se cuit-il pas comme un pavé épais ?",
        "options": [
          "La chaleur atteint son centre beaucoup plus vite",
          "Il contient toujours plus de gras",
          "Il ne contient pas de protéines",
          "Il doit toujours cuire 30 minutes"
        ],
        "answer": 0,
        "explanation": "L’épaisseur détermine le temps nécessaire pour cuire le centre."
      },
      {
        "q": "Un poisson sent fortement l’ammoniaque avant cuisson. Quelle décision est la plus prudente ?",
        "options": [
          "Ne pas l’utiliser",
          "Le cuire plus fort pour masquer",
          "Ajouter beaucoup de citron pour tout régler",
          "Le servir cru"
        ],
        "answer": 0,
        "explanation": "Une mauvaise odeur est un signal de fraîcheur douteuse. La cuisson ne corrige pas ce problème."
      }
    ],
    "linkedRecipes": [
      "cabillaud-nacre-vapeur",
      "saumon-cote-peau-croustillant"
    ]
  },
  {
    "id": "poisson-poele-peau",
    "moduleId": "poissons-fruits-mer",
    "title": "Poisson à la poêle côté peau",
    "subtitle": "Peau croustillante, chair juste cuite",
    "duration": 12,
    "prerequisites": [
      "comprendre-poisson"
    ],
    "objectives": [
      "Sécher et préparer un filet avec peau",
      "Cuire majoritairement côté peau pour protéger la chair",
      "Retourner ou finir sans casser le poisson"
    ],
    "concepts": [
      {
        "title": "Sécher la peau",
        "body": "Une peau humide colle, fume, cuit à la vapeur et croustille mal. Il faut éponger soigneusement, saler légèrement et poser dans une poêle suffisamment chaude avec un peu de matière grasse.",
        "tip": "Peau humide = peau molle."
      },
      {
        "title": "Presser au départ",
        "body": "La peau se rétracte au contact de la chaleur et peut bomber le filet. Presser doucement les premières secondes avec une spatule garde la peau au contact de la poêle. Le contact régulier donne une peau plus croustillante.",
        "tip": "Contact régulier = croustillant régulier."
      },
      {
        "title": "Cuire surtout côté peau",
        "body": "Pour un pavé de saumon ou un filet avec peau, la majorité de la cuisson se fait côté peau. La peau protège la chair et laisse la chaleur monter progressivement. Le côté chair se cuit très brièvement, parfois presque pas.",
        "tip": "La peau est un bouclier de cuisson."
      },
      {
        "title": "Ne pas forcer si ça colle",
        "body": "Un poisson peut coller au début puis se détacher quand la peau est suffisamment saisie. Forcer trop tôt arrache la peau et casse le filet. Il faut attendre, contrôler la chaleur et utiliser une spatule large.",
        "tip": "Si ça colle, ce n’est pas toujours raté : attends."
      }
    ],
    "goFurther": {
      "title": "Poêle antiadhésive ou inox",
      "content": "Une poêle antiadhésive facilite l’apprentissage du poisson. L’inox donne une belle saisie mais demande plus de contrôle : poisson bien sec, poêle chaude, matière grasse et patience avant de décoller."
    },
    "quiz": [
      {
        "q": "La peau de ton saumon reste molle. Quelle cause est probable ?",
        "options": [
          "Peau pas assez sèche ou contact insuffisant avec la poêle",
          "Trop de repos après cuisson",
          "Poisson trop épais uniquement",
          "Manque de citron"
        ],
        "answer": 0,
        "explanation": "Pour croustiller, la peau doit être sèche et en contact avec une surface chaude."
      },
      {
        "q": "Le filet se bombe dès qu’il touche la poêle. Que fais-tu ?",
        "options": [
          "Tu presses doucement quelques secondes avec une spatule",
          "Tu le retournes immédiatement dix fois",
          "Tu ajoutes de l’eau",
          "Tu couvres hermétiquement"
        ],
        "answer": 0,
        "explanation": "La pression légère au départ garde la peau en contact avec la poêle."
      },
      {
        "q": "Tu essaies de décoller un poisson après 15 secondes et la peau se déchire. Que fallait-il faire ?",
        "options": [
          "Attendre que la peau soit mieux saisie",
          "Forcer plus fort",
          "Ajouter du sucre",
          "Le cuire dans beaucoup d’eau"
        ],
        "answer": 0,
        "explanation": "La peau se détache mieux quand la croûte est formée. Forcer trop tôt casse le filet."
      },
      {
        "q": "Pourquoi cuire majoritairement côté peau ?",
        "options": [
          "La peau protège la chair et permet une montée progressive de chaleur",
          "La chair ne doit jamais chauffer",
          "La peau remplace le sel",
          "Le poisson devient cru côté chair"
        ],
        "answer": 0,
        "explanation": "La peau sert de barrière et aide à obtenir une cuisson plus douce de la chair."
      }
    ],
    "linkedRecipes": [
      "saumon-cote-peau-croustillant"
    ]
  },
  {
    "id": "poisson-vapeur-poche-papillote",
    "moduleId": "poissons-fruits-mer",
    "title": "Poisson vapeur, poché ou en papillote",
    "subtitle": "Cuire doucement sans dessécher",
    "duration": 12,
    "prerequisites": [
      "poisson-poele-peau"
    ],
    "objectives": [
      "Choisir une cuisson douce pour les poissons fragiles",
      "Assaisonner le liquide, la vapeur ou la papillote",
      "Lire une chair juste cuite sans la casser"
    ],
    "concepts": [
      {
        "title": "La cuisson douce protège",
        "body": "La vapeur, le pochage et la papillote apportent une chaleur humide et modérée. Elles conviennent aux poissons blancs, filets fragiles et cuissons où l’on veut préserver le moelleux. Elles donnent peu de coloration, donc la finition aromatique est importante.",
        "tip": "Cuisson douce = texture protégée, finition nécessaire."
      },
      {
        "title": "Pochage : liquide calme",
        "body": "Un poisson poché cuit dans un liquide chaud, mais peu agité. Les gros bouillons cassent la chair. Le liquide peut être un court-bouillon, un fumet, un lait aromatisé ou une eau parfumée. Il doit assaisonner sans dominer.",
        "tip": "Pocher, c’est cuire sans secouer."
      },
      {
        "title": "Vapeur : attention au timing",
        "body": "La vapeur cuit vite et proprement. Le couvercle garde la chaleur. Ouvrir sans arrêt fait perdre la vapeur ; oublier le poisson le rend sec. Il faut contrôler à un moment précis et sortir avant dessèchement.",
        "tip": "La vapeur est douce, pas magique."
      },
      {
        "title": "Papillote : mini-environnement",
        "body": "Dans une papillote, le poisson cuit avec un peu d’humidité, d’aromates et parfois de légumes. Trop de liquide donne un effet bouilli. Trop peu avec un four fort peut dessécher. La papillote doit parfumer et protéger, pas noyer.",
        "tip": "Papillote parfumée, pas piscine."
      }
    ],
    "goFurther": {
      "title": "Finition indispensable",
      "content": "Poisson vapeur ou poché gagne souvent avec huile d’olive, beurre blanc, sauce vierge, citron, herbes, beurre noisette ou jus court. La cuisson donne la texture ; la finition donne le relief."
    },
    "quiz": [
      {
        "q": "Ton poisson poché se casse dans la casserole. Quelle cause est probable ?",
        "options": [
          "Liquide trop agité ou manipulation trop brutale",
          "Manque de poivre",
          "Liquide trop parfumé uniquement",
          "Poisson trop blanc"
        ],
        "answer": 0,
        "explanation": "Le poisson poché doit cuire dans un liquide calme et être retiré délicatement."
      },
      {
        "q": "Ton poisson vapeur est cuit mais fade. Que manque-t-il probablement ?",
        "options": [
          "Une finition : sel, gras, acidité, herbes ou sauce",
          "Une cuisson beaucoup plus longue",
          "Une coloration noire",
          "Une pâte autour"
        ],
        "answer": 0,
        "explanation": "La vapeur préserve la texture mais apporte peu de goût. La finition est essentielle."
      },
      {
        "q": "Dans une papillote, tu ajoutes beaucoup de liquide. Que risques-tu ?",
        "options": [
          "Une cuisson bouillie plutôt qu’une vapeur aromatique",
          "Une peau croustillante",
          "Une coloration de grill",
          "Un poisson plus sec"
        ],
        "answer": 0,
        "explanation": "La papillote a besoin d’un peu d’humidité, pas d’un bain."
      },
      {
        "q": "Quel signe indique qu’un poisson blanc est proche de la cuisson juste ?",
        "options": [
          "Chair opaque, nacrée au centre, qui se détache en feuillets",
          "Chair dure, sèche et cassante",
          "Odeur brûlée",
          "Liquide noir"
        ],
        "answer": 0,
        "explanation": "Un poisson juste cuit se sépare facilement sans devenir sec."
      }
    ],
    "linkedRecipes": [
      "cabillaud-nacre-vapeur"
    ]
  },
  {
    "id": "fruits-mer-coquillages",
    "moduleId": "poissons-fruits-mer",
    "title": "Fruits de mer et coquillages",
    "subtitle": "Cuissons très courtes et fraîcheur non négociable",
    "duration": 12,
    "prerequisites": [
      "poisson-vapeur-poche-papillote"
    ],
    "objectives": [
      "Identifier les signes de fraîcheur et les risques évidents",
      "Cuire crevettes, moules et coquillages sans les durcir",
      "Utiliser jus de cuisson et assaisonnement sans masquer"
    ],
    "concepts": [
      {
        "title": "La fraîcheur est centrale",
        "body": "Les fruits de mer sont plus sensibles que beaucoup d’autres produits. Une mauvaise odeur, une texture visqueuse, des coquillages morts ou des crevettes douteuses ne se rattrapent pas à la cuisson. La première compétence est de savoir refuser un produit suspect.",
        "tip": "Fruit de mer douteux : on ne négocie pas."
      },
      {
        "title": "Les coquillages doivent s’ouvrir",
        "body": "Les moules et palourdes vivantes s’ouvrent généralement à la cuisson. Il faut éliminer celles qui sont cassées, mortes avant cuisson, ou qui restent fermées après cuisson. Le tri fait partie de la recette.",
        "tip": "Coquillage fermé après cuisson : prudence."
      },
      {
        "title": "Les crevettes cuisent vite",
        "body": "Une crevette trop cuite devient ferme, sèche et caoutchouteuse. Elle change rapidement de couleur et de forme. La cuisson doit être courte, souvent à feu vif, vapeur ou court-bouillon selon l’usage.",
        "tip": "Crevette trop longue = gomme."
      },
      {
        "title": "Le jus des coquillages est précieux",
        "body": "Les moules et palourdes rendent un jus très salé et parfumé. Il peut servir de base de sauce, mais il faut le filtrer pour retirer sable ou débris, et goûter avant de saler. Ce jus concentre déjà la mer.",
        "tip": "Le jus des coquillages se filtre et se respecte."
      }
    ],
    "goFurther": {
      "title": "Sable et coquillages",
      "content": "Certains coquillages doivent être dégorgés selon leur provenance. Une sauce parfaite ne compensera pas du sable sous la dent. Le nettoyage est une vraie étape culinaire."
    },
    "quiz": [
      {
        "q": "Une moule reste fermée après cuisson. Que fais-tu ?",
        "options": [
          "Tu l’écartes par prudence",
          "Tu la forces et la manges systématiquement",
          "Tu la mixes dans la sauce",
          "Tu la recuis pendant 1 heure"
        ],
        "answer": 0,
        "explanation": "Les coquillages qui restent fermés après cuisson sont généralement écartés par sécurité."
      },
      {
        "q": "Tes crevettes sont dures et caoutchouteuses. Quelle cause est probable ?",
        "options": [
          "Surcuisson",
          "Manque de farine",
          "Trop peu de sel dans l’assiette",
          "Trop de repos à froid avant cuisson uniquement"
        ],
        "answer": 0,
        "explanation": "Les crevettes cuisent très vite. Trop de temps les durcit."
      },
      {
        "q": "Pourquoi filtrer le jus des moules avant de l’utiliser en sauce ?",
        "options": [
          "Pour retirer sable, coquilles ou impuretés",
          "Pour enlever tout le goût",
          "Pour le rendre sucré",
          "Pour l’épaissir automatiquement"
        ],
        "answer": 0,
        "explanation": "Le jus est savoureux mais peut contenir sable ou fragments. Il faut le filtrer."
      },
      {
        "q": "Un fruit de mer sent mauvais avant cuisson. Quelle est la bonne décision ?",
        "options": [
          "Ne pas l’utiliser",
          "Ajouter beaucoup d’ail pour masquer",
          "Le cuire deux fois plus longtemps",
          "Le servir froid"
        ],
        "answer": 0,
        "explanation": "La cuisson ne rend pas fiable un produit douteux. La sécurité prime."
      }
    ],
    "linkedRecipes": [
      "moules-marinieres",
      "crevettes-sautees-ail-citron"
    ]
  },
  {
    "id": "corriger-poisson-trop-cuit",
    "moduleId": "poissons-fruits-mer",
    "title": "Corriger un poisson ou fruit de mer raté",
    "subtitle": "Sec, cassé, fade, trop salé ou caoutchouteux",
    "duration": 11,
    "prerequisites": [
      "fruits-mer-coquillages"
    ],
    "objectives": [
      "Diagnostiquer les défauts courants du poisson et des fruits de mer",
      "Limiter les dégâts sans prétendre revenir en arrière",
      "Prévenir les erreurs par timing, chaleur et finition"
    ],
    "concepts": [
      {
        "title": "Poisson trop cuit",
        "body": "Un poisson trop cuit ne redevient pas nacré. La correction consiste à l’accompagner : sauce, beurre, huile d’olive, citron, herbes, bouillon court, écrasé de légumes. On peut aussi l’émietter dans une salade, des rillettes, une croquette ou des pâtes.",
        "tip": "Poisson sec : humidité et nouvel usage."
      },
      {
        "title": "Poisson cassé",
        "body": "Un filet cassé peut encore être très bon. Il faut arrêter de chercher une présentation entière et le servir autrement : effeuillé sur une garniture, intégré à une sauce, en brandade, en salade tiède ou en bol. La texture dicte le dressage.",
        "tip": "Cassé n’est pas forcément raté, mais il faut changer de présentation."
      },
      {
        "title": "Poisson fade",
        "body": "Un poisson fade manque souvent de sel, d’acidité, de gras ou de sauce. Comme sa chair est délicate, la correction doit rester précise : beurre citronné, sauce vierge, herbes, huile d’olive, court jus, condiment doux. Trop d’ail ou trop d’épices peuvent l’écraser.",
        "tip": "Poisson délicat : correction nette, pas lourde."
      },
      {
        "title": "Fruits de mer caoutchouteux",
        "body": "Des crevettes, calamars ou coquillages trop cuits ne retrouvent pas leur texture initiale. On peut les couper plus fin, les intégrer à une sauce ou une salade, mais la meilleure correction reste la prévention : cuisson courte et arrêt immédiat.",
        "tip": "Fruit de mer trop cuit : difficile à sauver, facile à prévenir."
      }
    ],
    "goFurther": {
      "title": "Sauces de secours",
      "content": "Pour poisson sec : sauce yaourt-herbes, beurre citronné, sauce vierge, mayonnaise légère, jus de coquillage filtré, fumet réduit, huile d’olive citronnée. Le but est d’apporter humidité et relief sans masquer complètement."
    },
    "quiz": [
      {
        "q": "Ton poisson blanc est sec et s’effrite. Quelle solution est la plus réaliste ?",
        "options": [
          "Le servir avec une sauce ou le réutiliser émietté dans une autre préparation",
          "Le recuire longtemps pour le rendre nacré",
          "Le passer sous l’eau froide et le ressaisir",
          "Ajouter du sel pour recréer de l’eau"
        ],
        "answer": 0,
        "explanation": "Une surcuisson ne s’annule pas. Il faut apporter humidité ou changer l’usage."
      },
      {
        "q": "Ton filet se casse au retournement mais il est bien cuit. Que peux-tu faire ?",
        "options": [
          "Adapter le dressage : effeuillé, salade, bol, sauce ou garniture",
          "Le jeter systématiquement",
          "Le recoller avec de la farine crue",
          "Le cuire 20 minutes de plus"
        ],
        "answer": 0,
        "explanation": "Un poisson cassé peut rester bon. On change la présentation pour assumer la texture."
      },
      {
        "q": "Un poisson vapeur est fade. Quelle correction est la plus adaptée ?",
        "options": [
          "Sel, citron, herbes, huile ou sauce légère",
          "Cuisson supplémentaire jusqu’à sécheresse",
          "Beaucoup de sucre",
          "Grill jusqu’au noir"
        ],
        "answer": 0,
        "explanation": "Une cuisson vapeur demande souvent une finition aromatique."
      },
      {
        "q": "Tes crevettes sont caoutchouteuses. Quelle leçon retenir ?",
        "options": [
          "La cuisson était trop longue ; la prévention est essentielle",
          "Il fallait les cuire encore plus",
          "Elles manquaient de farine",
          "La sauce était trop froide"
        ],
        "answer": 0,
        "explanation": "Les crevettes durcissent très vite avec la surcuisson. Le contrôle du temps est déterminant."
      }
    ],
    "linkedRecipes": [
      "rillettes-poisson-sec"
    ]
  },
  {
    "id": "comprendre-pates-farine-eau-gras",
    "moduleId": "pates-salees-bases-boulangeres",
    "title": "Comprendre les pâtes salées",
    "subtitle": "Farine, eau, gras, gluten, repos et texture",
    "duration": 12,
    "prerequisites": [
      "corriger-poisson-trop-cuit"
    ],
    "objectives": [
      "Comprendre le rôle de la farine, de l’eau, du gras et du sel",
      "Différencier pâte friable, pâte levée et pâte élastique",
      "Utiliser le repos pour améliorer texture, tenue et goût"
    ],
    "concepts": [
      {
        "title": "La farine donne la structure",
        "body": "La farine contient de l’amidon et des protéines capables de former du gluten au contact de l’eau et du travail mécanique. C’est ce réseau qui donne de l’élasticité à une pâte à pizza ou à pain. Dans une pâte brisée, au contraire, on cherche à limiter ce réseau pour obtenir une texture friable.",
        "tip": "Plus tu travailles une pâte hydratée, plus tu développes sa structure."
      },
      {
        "title": "L’eau active la pâte",
        "body": "L’eau hydrate la farine et permet au gluten de se former. Trop peu d’eau donne une pâte sèche et cassante. Trop d’eau donne une pâte collante, parfois difficile à manipuler. La quantité idéale dépend de la farine, de l’humidité ambiante et du type de pâte recherché.",
        "tip": "L’eau ne se verse pas toujours d’un coup : elle s’ajuste."
      },
      {
        "title": "Le gras raccourcit la pâte",
        "body": "Le beurre, l’huile ou le saindoux enrobent une partie de la farine et limitent la formation du gluten. C’est utile pour les pâtes brisées et sablées, qui doivent rester friables. Dans une pâte à pizza ou à focaccia, l’huile apporte plutôt souplesse, goût et moelleux.",
        "tip": "Le gras rend une pâte plus tendre, mais peut limiter l’élasticité."
      },
      {
        "title": "Le repos change la pâte",
        "body": "Le repos permet à la farine de finir de s’hydrater, au gluten de se détendre et aux pâtes levées de fermenter. Une pâte brisée se rétracte moins après repos. Une pâte à pizza devient plus extensible. Une pâte à pain développe plus de goût avec le temps.",
        "tip": "Le repos n’est pas une attente passive : c’est une étape technique."
      }
    ],
    "goFurther": {
      "title": "Pourquoi certaines pâtes se rétractent",
      "content": "Une pâte trop travaillée, pas assez reposée ou abaissée trop brutalement peut se rétracter à la cuisson. C’est souvent le signe d’un gluten trop tendu. Le repos au froid ou à température ambiante selon la pâte permet de détendre cette tension."
    },
    "quiz": [
      {
        "q": "Ta pâte à tarte se rétracte fortement à la cuisson. Quelle cause est probable ?",
        "options": [
          "Pâte trop travaillée ou pas assez reposée",
          "Pas assez de sucre",
          "Four trop froid uniquement",
          "Beurre ajouté trop tard après cuisson"
        ],
        "answer": 0,
        "explanation": "Le gluten trop tendu provoque la rétraction. Le repos permet de détendre la pâte avant cuisson."
      },
      {
        "q": "Pourquoi une pâte à pizza doit-elle être plus élastique qu’une pâte brisée ?",
        "options": [
          "Elle doit pouvoir s’étirer et retenir les gaz de fermentation",
          "Elle doit être friable",
          "Elle ne contient jamais d’eau",
          "Elle ne doit pas lever"
        ],
        "answer": 0,
        "explanation": "Une pâte à pizza a besoin d’un réseau de gluten suffisant pour s’étirer et retenir l’air produit par la levure."
      },
      {
        "q": "Tu ajoutes trop d’eau dans une pâte brisée. Que risques-tu ?",
        "options": [
          "Une pâte collante et plus élastique, donc moins friable",
          "Une pâte plus croustillante automatiquement",
          "Une pâte qui ne cuit jamais",
          "Une pâte sans gluten"
        ],
        "answer": 0,
        "explanation": "L’excès d’eau hydrate fortement la farine et favorise le développement du gluten."
      },
      {
        "q": "Quel est le rôle principal du repos dans une pâte à pain ou à pizza ?",
        "options": [
          "Hydrater, détendre et permettre la fermentation",
          "Supprimer toute structure",
          "Remplacer la cuisson",
          "Empêcher la levure d’agir"
        ],
        "answer": 0,
        "explanation": "Le repos donne du temps à la farine, au gluten et à la levure pour transformer la pâte."
      }
    ],
    "linkedRecipes": [
      "pate-brisee-salee-base",
      "pate-pizza-simple"
    ]
  },
  {
    "id": "pate-brisee-salee",
    "moduleId": "pates-salees-bases-boulangeres",
    "title": "Pâte brisée salée",
    "subtitle": "Friable, nette, sans rétraction excessive",
    "duration": 12,
    "prerequisites": [
      "comprendre-pates-farine-eau-gras"
    ],
    "objectives": [
      "Préparer une pâte brisée salée sans trop développer le gluten",
      "Comprendre le sablage et le fraisage",
      "Foncer un moule et cuire à blanc correctement"
    ],
    "concepts": [
      {
        "title": "Le sablage protège la friabilité",
        "body": "Le sablage consiste à mélanger farine et beurre froid jusqu’à obtenir une texture sableuse. Le beurre enrobe une partie de la farine, ce qui limite la formation du gluten quand l’eau arrive. C’est ce qui donne une pâte courte, friable et non élastique.",
        "tip": "Pour une pâte brisée, le beurre doit rester froid et la main légère."
      },
      {
        "title": "L’eau doit être minimale",
        "body": "On ajoute juste assez d’eau pour rassembler la pâte. Une pâte brisée ne doit pas devenir souple comme une pâte à pain. Si elle est trop humide, elle colle, se rétracte et devient plus dure après cuisson.",
        "tip": "Ajoute l’eau par petites quantités."
      },
      {
        "title": "Fraiser sans pétrir",
        "body": "Fraiser consiste à écraser rapidement la pâte avec la paume pour homogénéiser beurre et farine. Il ne faut pas pétrir longuement. Le but est d’unifier, pas de créer de l’élasticité.",
        "tip": "Fraiser une ou deux fois, puis arrêter."
      },
      {
        "title": "Cuisson à blanc",
        "body": "Pour une tarte salée avec garniture humide, précuire la pâte évite un fond détrempé. On pique, on refroidit, on couvre de papier cuisson et de poids, puis on cuit jusqu’à ce que la pâte commence à sécher. On peut finir quelques minutes sans poids pour colorer.",
        "tip": "Fond humide ? Pâte précuite."
      }
    ],
    "goFurther": {
      "title": "Pourquoi refroidir avant cuisson",
      "content": "Le froid raffermit le beurre et détend la pâte. Cela limite l’affaissement des bords et la rétraction. Une pâte foncée puis mise au froid cuit souvent plus proprement."
    },
    "quiz": [
      {
        "q": "Ta pâte brisée est dure après cuisson. Quelle erreur est probable ?",
        "options": [
          "Elle a été trop travaillée ou trop hydratée",
          "Elle a trop reposé au froid",
          "Elle manque de levure boulangère",
          "Elle a été trop peu salée uniquement"
        ],
        "answer": 0,
        "explanation": "Trop d’eau et trop de travail développent le gluten, ce qui rend la pâte plus dure."
      },
      {
        "q": "Pourquoi utiliser du beurre froid pour une pâte brisée ?",
        "options": [
          "Pour garder une texture friable et limiter le mélange complet avec la farine",
          "Pour empêcher la pâte de cuire",
          "Pour remplacer l’eau",
          "Pour faire lever la pâte comme du pain"
        ],
        "answer": 0,
        "explanation": "Le beurre froid crée une texture plus sablée et limite le développement d’une pâte élastique."
      },
      {
        "q": "Tu garnis une pâte crue avec un appareil très humide. Que risques-tu ?",
        "options": [
          "Un fond détrempé",
          "Une pâte plus croustillante automatiquement",
          "Une garniture moins liquide",
          "Une cuisson plus rapide du fond"
        ],
        "answer": 0,
        "explanation": "Une garniture humide empêche le fond de sécher correctement. La cuisson à blanc aide à protéger la pâte."
      },
      {
        "q": "À quoi sert le repos au froid après fonçage ?",
        "options": [
          "Limiter la rétraction et raffermir la pâte",
          "Faire pousser la levure",
          "Cuire la pâte sans four",
          "Faire fondre le beurre"
        ],
        "answer": 0,
        "explanation": "Le froid détend la pâte et raffermit le beurre, ce qui donne une cuisson plus nette."
      }
    ],
    "linkedRecipes": [
      "pate-brisee-salee-base",
      "quiche-appareil-cremeux"
    ]
  },
  {
    "id": "pate-levee-pizza-focaccia",
    "moduleId": "pates-salees-bases-boulangeres",
    "title": "Pâte levée : pizza et focaccia",
    "subtitle": "Hydratation, pétrissage, fermentation et extensibilité",
    "duration": 13,
    "prerequisites": [
      "pate-brisee-salee"
    ],
    "objectives": [
      "Comprendre le rôle de la levure et de la fermentation",
      "Pétrir une pâte pour obtenir force et extensibilité",
      "Adapter repos, façonnage et cuisson selon pizza ou focaccia"
    ],
    "concepts": [
      {
        "title": "La levure produit du gaz et du goût",
        "body": "La levure transforme une partie des sucres de la farine en gaz et en composés aromatiques. Le gaz fait lever la pâte, mais le temps développe aussi le goût. Une pâte levée vite peut fonctionner, mais une fermentation plus longue donne souvent une pâte plus digeste, plus parfumée et plus souple.",
        "tip": "La levée donne du volume ; la fermentation donne aussi du goût."
      },
      {
        "title": "Le pétrissage construit le réseau",
        "body": "Pétrir aligne et renforce le gluten. La pâte devient plus lisse, plus élastique et capable de retenir les gaz. Trop peu de pétrissage donne une pâte fragile qui se déchire. Trop de manipulation après levée peut chasser trop de gaz.",
        "tip": "Pétrir pour construire, manipuler doucement pour garder."
      },
      {
        "title": "Hydratation et texture",
        "body": "Une pâte à pizza classique reste manipulable. Une focaccia est souvent plus hydratée, donc plus collante, mais donne plus de moelleux. Une pâte très hydratée ne se corrige pas en ajoutant beaucoup de farine au façonnage, sinon elle devient dense.",
        "tip": "Pâte collante ne veut pas toujours dire pâte ratée."
      },
      {
        "title": "Façonner sans déchirer",
        "body": "Une pâte bien reposée s’étire plus facilement. Si elle se rétracte, elle manque souvent de détente. Il vaut mieux attendre 10 minutes que forcer. Forcer déchire le réseau et chasse les gaz.",
        "tip": "Si la pâte résiste, repose-la."
      }
    ],
    "goFurther": {
      "title": "Température et fermentation",
      "content": "La chaleur accélère la fermentation, le froid la ralentit. Un repos au réfrigérateur permet de mieux contrôler le timing et de développer le goût. À température ambiante, la pâte pousse plus vite mais peut sur-fermenter."
    },
    "quiz": [
      {
        "q": "Ta pâte à pizza se rétracte dès que tu l’étales. Que fais-tu ?",
        "options": [
          "Tu la laisses reposer 10 à 15 minutes avant de reprendre",
          "Tu forces au rouleau jusqu’à la déchirer",
          "Tu ajoutes beaucoup de farine",
          "Tu la mets directement sous l’eau"
        ],
        "answer": 0,
        "explanation": "La pâte manque de détente. Un repos court permet au gluten de se relâcher."
      },
      {
        "q": "Ta focaccia est dense et peu alvéolée. Quelle cause est plausible ?",
        "options": [
          "Fermentation insuffisante ou pâte trop dégazée au façonnage",
          "Trop de repos forcément",
          "Trop peu de sel uniquement",
          "Four trop propre"
        ],
        "answer": 0,
        "explanation": "Une pâte levée a besoin de fermentation et d’une manipulation qui préserve une partie des gaz."
      },
      {
        "q": "Pourquoi une pâte levée développe-t-elle plus de goût avec le temps ?",
        "options": [
          "La fermentation produit des composés aromatiques",
          "La farine disparaît",
          "L’eau se transforme en sucre",
          "Le sel cuit la pâte"
        ],
        "answer": 0,
        "explanation": "La fermentation transforme la pâte et crée des arômes plus complexes."
      },
      {
        "q": "Tu ajoutes beaucoup de farine pour rendre une pâte collante plus facile à manipuler. Quel risque ?",
        "options": [
          "Obtenir une pâte plus dense et moins moelleuse",
          "Faire lever plus vite",
          "Créer plus d’eau",
          "Empêcher toute cuisson"
        ],
        "answer": 0,
        "explanation": "Ajouter trop de farine change la formule et réduit l’hydratation, donc le moelleux."
      }
    ],
    "linkedRecipes": [
      "pate-pizza-simple",
      "focaccia-debutant"
    ]
  },
  {
    "id": "pain-simple-maison",
    "moduleId": "pates-salees-bases-boulangeres",
    "title": "Pain simple maison",
    "subtitle": "Pétrir, lever, façonner, grigner, cuire",
    "duration": 14,
    "prerequisites": [
      "pate-levee-pizza-focaccia"
    ],
    "objectives": [
      "Préparer un pain simple avec farine, eau, levure et sel",
      "Comprendre pointage, façonnage et apprêt",
      "Cuire avec chaleur et vapeur pour obtenir croûte et mie"
    ],
    "concepts": [
      {
        "title": "Une pâte à pain est vivante",
        "body": "Après pétrissage, la pâte évolue. Elle se détend, fermente, gonfle et développe des arômes. Le pointage correspond à la première fermentation. L’apprêt correspond à la fermentation après façonnage. Chaque étape influence volume, goût et mie.",
        "tip": "Pain réussi = pâte observée, pas seulement minuteur suivi."
      },
      {
        "title": "Le sel vient contrôler et assaisonner",
        "body": "Le sel donne du goût, renforce la structure et ralentit la fermentation. Oublier le sel donne un pain fade et une pâte parfois plus molle. En mettre trop freine la levure et déséquilibre le goût.",
        "tip": "Le sel structure autant qu’il assaisonne."
      },
      {
        "title": "Façonner pour tendre la surface",
        "body": "Façonner un pain ne consiste pas seulement à lui donner une forme. Il faut créer une légère tension en surface, ce qui aide le pain à se tenir et à se développer au four. Une pâte juste posée sans tension s’étale plus facilement.",
        "tip": "Le façonnage donne une peau au pain."
      },
      {
        "title": "Vapeur et croûte",
        "body": "Au début de la cuisson, la vapeur retarde la formation de la croûte et permet au pain de mieux se développer. Ensuite, l’air sec aide la croûte à colorer et à devenir croustillante. Un four bien préchauffé est essentiel.",
        "tip": "Vapeur au départ, séchage ensuite."
      }
    ],
    "goFurther": {
      "title": "Sous-fermentation et sur-fermentation",
      "content": "Une pâte sous-fermentée manque de volume et se déchire parfois. Une pâte sur-fermentée devient fragile, s’affaisse et manque de ressort. Le bon point se lit avec le volume, la souplesse et la réaction de la pâte au toucher."
    },
    "quiz": [
      {
        "q": "Ton pain est dense avec peu de volume. Quelle cause est plausible ?",
        "options": [
          "Fermentation insuffisante, pétrissage faible ou four pas assez chaud",
          "Trop de coloration",
          "Croûte trop fine uniquement",
          "Trop peu de couteau"
        ],
        "answer": 0,
        "explanation": "Le volume dépend de la structure, de la fermentation et de la poussée au four."
      },
      {
        "q": "Pourquoi grigner un pain avant cuisson ?",
        "options": [
          "Pour guider son expansion au four",
          "Pour l’empêcher de lever",
          "Pour remplacer le sel",
          "Pour sécher la mie"
        ],
        "answer": 0,
        "explanation": "La grigne crée une ouverture contrôlée. Sans elle, le pain peut éclater au hasard."
      },
      {
        "q": "Ton pain est fade malgré une belle cuisson. Quelle erreur est probable ?",
        "options": [
          "Manque de sel ou fermentation trop courte",
          "Trop de vapeur au début",
          "Croûte trop dorée",
          "Pâte trop bien façonnée"
        ],
        "answer": 0,
        "explanation": "Le goût du pain vient du sel et de la fermentation. Une pâte levée trop vite peut manquer de profondeur."
      },
      {
        "q": "Pourquoi ajouter de la vapeur au début de la cuisson ?",
        "options": [
          "Pour permettre au pain de se développer avant que la croûte fige",
          "Pour rendre la croûte molle définitivement",
          "Pour empêcher toute coloration",
          "Pour cuire sans chaleur"
        ],
        "answer": 0,
        "explanation": "La vapeur retarde la prise de croûte et favorise l’expansion initiale."
      }
    ],
    "linkedRecipes": [
      "focaccia-debutant"
    ]
  },
  {
    "id": "cuisson-pates-salees",
    "moduleId": "pates-salees-bases-boulangeres",
    "title": "Cuire les pâtes salées",
    "subtitle": "Fond cuit, croûte nette, garniture équilibrée",
    "duration": 12,
    "prerequisites": [
      "pain-simple-maison"
    ],
    "objectives": [
      "Cuire une pâte salée sans fond détrempé",
      "Adapter température et support de cuisson",
      "Équilibrer cuisson de pâte, garniture et fromage"
    ],
    "concepts": [
      {
        "title": "Le fond doit recevoir assez de chaleur",
        "body": "Dans une tarte, pizza ou quiche, le fond est souvent la partie la plus difficile à cuire. Il est isolé par la garniture humide. Une plaque chaude, une pierre, une cuisson à blanc ou un moule adapté aident à obtenir un dessous plus net.",
        "tip": "Une pâte se cuit aussi par dessous."
      },
      {
        "title": "Garniture humide = vigilance",
        "body": "Tomates, champignons, courgettes, poireaux ou appareil à quiche apportent de l’eau. Si cette eau n’est pas gérée, la pâte devient molle. Il faut précuire, égoutter, réduire ou doser la garniture.",
        "tip": "Une garniture trop humide vole le croustillant."
      },
      {
        "title": "Four fort ou four modéré",
        "body": "Une pizza demande souvent un four très chaud pour saisir la pâte et éviter qu’elle sèche. Une quiche ou une tarte épaisse demande une chaleur plus modérée pour cuire l’appareil sans brûler la pâte. La température dépend du rapport pâte/garniture.",
        "tip": "Pizza : chaleur forte. Quiche : chaleur maîtrisée."
      },
      {
        "title": "Repos après cuisson",
        "body": "Une tarte salée ou une quiche gagne souvent à reposer quelques minutes. La garniture se stabilise, la découpe est plus propre et le fond supporte mieux le service. Une pizza, au contraire, se sert rapidement pour garder la pâte vivante.",
        "tip": "Quiche repose ; pizza se mange vite."
      }
    ],
    "goFurther": {
      "title": "Barrière contre l’humidité",
      "content": "Dans certaines tartes, une fine couche de moutarde, fromage, chapelure, semoule fine ou blanc d’œuf peut aider à limiter l’humidité au contact du fond. Ce n’est pas une solution magique, mais une protection utile."
    },
    "quiz": [
      {
        "q": "Ta quiche a un fond mou et humide. Quelle cause est probable ?",
        "options": [
          "Garniture trop humide, fond non précuit ou chaleur insuffisante dessous",
          "Trop de repos après cuisson",
          "Trop peu de poivre",
          "Pâte trop fine uniquement"
        ],
        "answer": 0,
        "explanation": "Le fond détrempé vient souvent d’un excès d’humidité et d’une cuisson insuffisante par dessous."
      },
      {
        "q": "Pourquoi cuire une pizza dans un four très chaud ?",
        "options": [
          "Pour saisir la pâte rapidement et garder une bonne texture",
          "Pour sécher la garniture pendant une heure",
          "Pour empêcher la pâte de lever",
          "Pour cuire comme une crème"
        ],
        "answer": 0,
        "explanation": "Une cuisson rapide et forte aide à obtenir une pâte plus nette et moins sèche."
      },
      {
        "q": "Tu mets des champignons crus très humides sur une tarte. Que risques-tu ?",
        "options": [
          "Ils rendent de l’eau et détrempent la pâte",
          "Ils rendent la pâte plus croustillante",
          "Ils remplacent la cuisson à blanc",
          "Ils empêchent le four de chauffer"
        ],
        "answer": 0,
        "explanation": "Les champignons rendent beaucoup d’eau. Ils gagnent souvent à être précuits."
      },
      {
        "q": "Pourquoi laisser reposer une quiche quelques minutes avant découpe ?",
        "options": [
          "Pour stabiliser l’appareil et obtenir des parts plus nettes",
          "Pour la rendre crue",
          "Pour faire disparaître la pâte",
          "Pour augmenter l’humidité du fond"
        ],
        "answer": 0,
        "explanation": "Le repos aide l’appareil à se tenir et limite l’écoulement à la découpe."
      }
    ],
    "linkedRecipes": [
      "quiche-appareil-cremeux"
    ]
  },
  {
    "id": "comprendre-patisserie-precision",
    "moduleId": "patisserie-base",
    "title": "Comprendre la pâtisserie",
    "subtitle": "Peser, respecter les températures, observer les textures",
    "duration": 12,
    "prerequisites": [
      "cuisson-pates-salees"
    ],
    "objectives": [
      "Comprendre pourquoi la précision compte davantage en pâtisserie",
      "Identifier les rôles du sucre, du beurre, des œufs, de la farine et de la levure",
      "Lire les textures avant et après cuisson"
    ],
    "concepts": [
      {
        "title": "La pâtisserie tolère moins l’à-peu-près",
        "body": "En cuisine salée, on peut souvent corriger en goûtant. En pâtisserie, la structure dépend de proportions précises : farine, œufs, sucre, beurre, liquide, levure. Une petite variation peut changer la texture finale. Peser est donc une compétence, pas une contrainte inutile.",
        "tip": "En pâtisserie, la balance est un outil de cuisson."
      },
      {
        "title": "Chaque ingrédient a un rôle technique",
        "body": "La farine structure, le sucre sucre mais retient aussi l’humidité et aide la coloration, les œufs lient et donnent du volume, le beurre apporte goût et tendreté, la levure chimique crée du gaz, le sel renforce les saveurs. Remplacer un ingrédient change souvent plusieurs choses à la fois.",
        "tip": "Un ingrédient ne sert presque jamais à une seule chose."
      },
      {
        "title": "La température change le résultat",
        "body": "Beurre froid, beurre pommade et beurre fondu ne donnent pas la même texture. Des œufs froids s’incorporent moins facilement dans une crème au beurre ou un appareil. Un four mal préchauffé peut empêcher une bonne levée ou donner une cuisson irrégulière.",
        "tip": "Même recette, températures différentes, résultat différent."
      },
      {
        "title": "Observer avant de cuire",
        "body": "Une pâte à cake doit être homogène, une crème pâtissière lisse, une meringue brillante, une pâte sablée peu travaillée. La texture avant cuisson annonce souvent le résultat. Si l’appareil est tranché, trop liquide ou trop travaillé, le four ne réparera pas tout.",
        "tip": "Le four révèle les erreurs plus qu’il ne les corrige."
      }
    ],
    "goFurther": {
      "title": "Mise en place sucrée",
      "content": "En pâtisserie, peser tous les ingrédients avant de commencer limite les oublis. Il faut aussi préparer moule, papier cuisson, fouet, maryse et four. Une pâte qui attend trop ou un four froid au mauvais moment peut modifier le résultat."
    },
    "quiz": [
      {
        "q": "Pourquoi remplacer du beurre fondu par du beurre pommade peut changer une recette ?",
        "options": [
          "La texture et l’incorporation de l’air ne seront pas les mêmes",
          "Le beurre pommade ne contient pas de gras",
          "Le beurre fondu ne cuit jamais",
          "Cela ne change absolument rien"
        ],
        "answer": 0,
        "explanation": "Le beurre pommade peut emprisonner de l’air avec le sucre. Le beurre fondu donne souvent une texture plus dense ou fondante."
      },
      {
        "q": "Ton gâteau ne lève pas bien alors que tu as suivi les ingrédients. Quelle cause est plausible ?",
        "options": [
          "Four pas assez préchauffé, levure inactive ou appareil trop travaillé",
          "Trop peu de décoration",
          "Moule trop propre",
          "Sucre ajouté au bon moment"
        ],
        "answer": 0,
        "explanation": "La levée dépend des agents levants, du mélange et de la chaleur initiale du four."
      },
      {
        "q": "Pourquoi peser plutôt qu’utiliser seulement des verres ou cuillères approximatives ?",
        "options": [
          "Les proportions structurent la texture finale",
          "La balance remplace le four",
          "Le sucre devient plus sucré",
          "La farine ne peut pas être mesurée autrement"
        ],
        "answer": 0,
        "explanation": "En pâtisserie, une variation de quantité peut modifier structure, humidité et cuisson."
      },
      {
        "q": "Un appareil à gâteau tranche avant cuisson. Que cela signifie-t-il souvent ?",
        "options": [
          "La matière grasse, les œufs ou les liquides se sont mal incorporés",
          "Le gâteau est forcément réussi",
          "La farine a disparu",
          "Le four est trop chaud uniquement"
        ],
        "answer": 0,
        "explanation": "Un appareil tranché indique une émulsion ou une incorporation instable. Le résultat peut être plus lourd ou irrégulier."
      }
    ],
    "linkedRecipes": [
      "cake-citron-base",
      "creme-patissiere-base"
    ]
  },
  {
    "id": "cremes-base-patisserie",
    "moduleId": "patisserie-base",
    "title": "Crèmes de base",
    "subtitle": "Crème pâtissière, anglaise et chantilly",
    "duration": 13,
    "prerequisites": [
      "comprendre-patisserie-precision"
    ],
    "objectives": [
      "Comprendre les crèmes liées à l’œuf ou à l’amidon",
      "Éviter grumeaux, œufs brouillés et crème tranchée",
      "Refroidir et conserver proprement les crèmes"
    ],
    "concepts": [
      {
        "title": "Crème pâtissière : œuf + amidon",
        "body": "La crème pâtissière épaissit grâce aux jaunes, à l’amidon et à la cuisson. Elle doit bouillir brièvement pour que l’amidon cuise et stabilise la texture. Si elle n’est pas assez cuite, elle garde un goût farineux et peut être instable.",
        "tip": "Une crème pâtissière doit cuire vraiment, mais sans brûler."
      },
      {
        "title": "Crème anglaise : œuf sans amidon",
        "body": "La crème anglaise épaissit grâce aux jaunes seuls. Elle ne doit pas bouillir, sinon les jaunes coagulent et la crème graine. Elle doit napper la cuillère. C’est une cuisson de précision.",
        "tip": "Crème anglaise : nappante, jamais bouillante."
      },
      {
        "title": "Tempérer les œufs",
        "body": "Verser un liquide chaud progressivement sur les œufs en fouettant évite le choc thermique. Ensuite, on remet à cuire doucement. Si on verse tout d’un coup, les œufs peuvent coaguler en morceaux.",
        "tip": "Liquide chaud petit à petit, œufs protégés."
      },
      {
        "title": "Chantilly : crème froide et air",
        "body": "La chantilly est une crème fouettée qui emprisonne de l’air. Elle demande une crème assez grasse, bien froide, et un fouettage contrôlé. Trop fouettée, elle graine puis commence à tourner en beurre.",
        "tip": "Chantilly : froid, gras, surveillance."
      }
    ],
    "goFurther": {
      "title": "Refroidissement",
      "content": "Une crème pâtissière doit être débarrassée dans un récipient propre, filmée au contact et refroidie rapidement. Cela évite la croûte en surface et limite les risques sanitaires."
    },
    "quiz": [
      {
        "q": "Ta crème anglaise fait des petits grains. Quelle erreur est probable ?",
        "options": [
          "Elle a trop chauffé et les jaunes ont coagulé",
          "Elle manque de farine",
          "Elle a été trop peu sucrée uniquement",
          "Elle a été trop bien filtrée"
        ],
        "answer": 0,
        "explanation": "Sans amidon, la crème anglaise ne doit pas bouillir. Les jaunes coagulent si la température monte trop."
      },
      {
        "q": "Pourquoi une crème pâtissière doit-elle bouillir brièvement ?",
        "options": [
          "Pour cuire l’amidon et stabiliser la texture",
          "Pour faire trancher les œufs",
          "Pour supprimer tout goût",
          "Pour la rendre liquide"
        ],
        "answer": 0,
        "explanation": "L’amidon a besoin d’une vraie cuisson pour épaissir correctement et perdre le goût cru."
      },
      {
        "q": "Ta chantilly devient granuleuse. Que s’est-il probablement passé ?",
        "options": [
          "Elle a été trop fouettée",
          "Elle était trop froide",
          "Elle manquait de farine",
          "Elle n’a pas assez bouilli"
        ],
        "answer": 0,
        "explanation": "Une crème trop fouettée se sépare progressivement et commence à devenir du beurre."
      },
      {
        "q": "Pourquoi filmer une crème pâtissière au contact ?",
        "options": [
          "Pour éviter la formation d’une peau en surface",
          "Pour la faire lever",
          "Pour la rendre croustillante",
          "Pour la cuire plus vite"
        ],
        "answer": 0,
        "explanation": "Le film au contact empêche la surface de sécher et de former une croûte."
      }
    ],
    "linkedRecipes": [
      "creme-patissiere-base",
      "chantilly-stable"
    ]
  },
  {
    "id": "pates-gateaux-cakes",
    "moduleId": "patisserie-base",
    "title": "Pâtes à gâteaux et cakes",
    "subtitle": "Moelleux, levée, mélange et cuisson à cœur",
    "duration": 13,
    "prerequisites": [
      "cremes-base-patisserie"
    ],
    "objectives": [
      "Comprendre comment obtenir un gâteau moelleux",
      "Mélanger sans trop travailler la farine",
      "Cuire un cake à cœur sans le dessécher"
    ],
    "concepts": [
      {
        "title": "Moelleux = équilibre",
        "body": "Un gâteau moelleux dépend de l’équilibre entre farine, œufs, sucre, matière grasse, liquide et agent levant. Trop de farine donne une texture sèche. Trop de liquide donne une mie humide ou compacte. Trop peu de gras donne moins de tendreté.",
        "tip": "Le moelleux se construit dans les proportions."
      },
      {
        "title": "Crémer beurre et sucre",
        "body": "Dans certaines recettes, battre beurre pommade et sucre incorpore de l’air. Cet air aide la levée et donne une texture plus légère. Si le beurre est trop froid, il ne se mélange pas bien. S’il est fondu alors qu’il devait être pommade, la texture change.",
        "tip": "Beurre pommade = souple, pas fondu."
      },
      {
        "title": "Ne pas trop travailler après la farine",
        "body": "Une fois la farine ajoutée, il faut mélanger juste assez pour homogénéiser. Trop mélanger développe le gluten et peut donner un gâteau plus dense, plus élastique ou plus sec.",
        "tip": "Farine ajoutée : mélange minimal."
      },
      {
        "title": "Cuisson à cœur",
        "body": "Un cake peut être doré dehors mais cru dedans. Il faut vérifier le centre avec une lame ou une sonde. Si le dessus colore trop vite, on peut baisser légèrement le four ou couvrir sans bloquer complètement la cuisson.",
        "tip": "La couleur extérieure ne prouve pas la cuisson du centre."
      }
    ],
    "goFurther": {
      "title": "Pourquoi certains cakes fendent",
      "content": "La fente d’un cake est souvent normale. Le dessus se fige pendant que l’intérieur continue de pousser. Une fente nette peut même être recherchée. Ce n’est pas un défaut si la texture est bonne."
    },
    "quiz": [
      {
        "q": "Ton cake est doré dehors mais cru au centre. Quelle correction est logique ?",
        "options": [
          "Prolonger à température plus modérée, éventuellement couvrir le dessus",
          "Le sortir car la couleur suffit",
          "Augmenter le grill",
          "Le couper immédiatement pour finir la cuisson"
        ],
        "answer": 0,
        "explanation": "Le centre a besoin de temps. Il faut éviter de brûler le dessus pendant que l’intérieur finit de cuire."
      },
      {
        "q": "Pourquoi éviter de trop mélanger après ajout de la farine ?",
        "options": [
          "Pour limiter le développement du gluten",
          "Pour empêcher le sucre de sucrer",
          "Pour faire disparaître la levure",
          "Pour garder la farine crue"
        ],
        "answer": 0,
        "explanation": "Trop de travail après la farine peut rendre la texture plus dense ou élastique."
      },
      {
        "q": "Ton beurre devait être pommade, mais tu l’as fondu. Que risques-tu ?",
        "options": [
          "Une texture différente, souvent plus dense ou moins aérée",
          "Aucun changement possible",
          "Une levée plus forte garantie",
          "Un gâteau cru"
        ],
        "answer": 0,
        "explanation": "Le beurre pommade peut incorporer de l’air avec le sucre. Le beurre fondu ne donne pas la même structure."
      },
      {
        "q": "À quoi sert la lame plantée au centre d’un cake ?",
        "options": [
          "Vérifier la cuisson à cœur",
          "Créer une décoration",
          "Remplacer le préchauffage",
          "Faire lever le cake"
        ],
        "answer": 0,
        "explanation": "Le centre est la zone qui cuit le plus lentement. La lame aide à vérifier s’il reste de la pâte crue."
      }
    ],
    "linkedRecipes": [
      "cake-citron-base"
    ]
  },
  {
    "id": "pates-tartes-sucrees",
    "moduleId": "patisserie-base",
    "title": "Pâtes à tartes sucrées",
    "subtitle": "Sablée, sucrée, fonçage et cuisson nette",
    "duration": 12,
    "prerequisites": [
      "pates-gateaux-cakes"
    ],
    "objectives": [
      "Préparer une pâte sucrée ou sablée sans la durcir",
      "Foncer un cercle ou moule proprement",
      "Cuire à blanc sans affaissement ni fond cru"
    ],
    "concepts": [
      {
        "title": "Pâte sablée ou sucrée",
        "body": "Une pâte sablée est friable et fondante. Une pâte sucrée est souvent un peu plus structurée et nette, utile pour les tartes aux fruits ou fonds garnis de crème. Dans les deux cas, il faut éviter de trop travailler la pâte après ajout de la farine.",
        "tip": "Friable et net demandent peu de travail."
      },
      {
        "title": "Le beurre doit être maîtrisé",
        "body": "Trop froid, il s’incorpore mal. Trop mou ou fondu, la pâte devient grasse, collante et difficile à foncer. Selon la méthode, on cherche un beurre froid sablé ou un beurre pommade crémé, mais pas un beurre fondu par accident.",
        "tip": "La texture du beurre dirige la texture de la pâte."
      },
      {
        "title": "Foncer sans tirer",
        "body": "Foncer consiste à installer la pâte dans le moule ou le cercle. Il ne faut pas tirer sur la pâte pour l’ajuster, sinon elle se rétracte. Il faut la déposer, l’accompagner dans les angles, puis couper l’excédent.",
        "tip": "Une pâte tirée se venge à la cuisson."
      },
      {
        "title": "Cuisson à blanc précise",
        "body": "Pour une tarte garnie après cuisson, le fond doit être bien cuit, pas seulement blond en surface. Une pâte insuffisamment cuite devient molle au contact de la crème. Une pâte trop cuite devient amère ou cassante. Les poids aident à garder la forme au début.",
        "tip": "Un fond de tarte doit être cuit jusqu’au centre."
      }
    ],
    "goFurther": {
      "title": "Imperméabiliser un fond",
      "content": "Après cuisson, on peut parfois badigeonner le fond avec un peu de chocolat fondu, de beurre de cacao ou de blanc d’œuf puis repasser brièvement au four. Cela limite l’humidité d’une crème ou de fruits juteux."
    },
    "quiz": [
      {
        "q": "Ta pâte à tarte sucrée s’affaisse sur les bords. Quelle cause est probable ?",
        "options": [
          "Pâte trop chaude, mal reposée ou foncée en tirant",
          "Trop peu de sucre glace uniquement",
          "Four trop bien préchauffé",
          "Fond trop cuit"
        ],
        "answer": 0,
        "explanation": "Le repos, le froid et un fonçage sans tension aident les bords à tenir."
      },
      {
        "q": "Pourquoi ne faut-il pas tirer sur la pâte en fonçant un moule ?",
        "options": [
          "Elle risque de se rétracter à la cuisson",
          "Elle devient plus sucrée",
          "Elle cuit instantanément",
          "Elle lève comme du pain"
        ],
        "answer": 0,
        "explanation": "Une pâte étirée garde une tension. À la cuisson, elle se rétracte."
      },
      {
        "q": "Ton fond de tarte est joli mais mou sous la crème. Quelle erreur est probable ?",
        "options": [
          "Fond insuffisamment cuit ou pas protégé de l’humidité",
          "Trop de repos après cuisson",
          "Trop peu de décoration",
          "Crème trop froide uniquement"
        ],
        "answer": 0,
        "explanation": "Un fond destiné à recevoir une crème doit être assez cuit et parfois imperméabilisé."
      },
      {
        "q": "Pourquoi remettre une pâte foncée au froid avant cuisson ?",
        "options": [
          "Pour raffermir le beurre et limiter la déformation",
          "Pour la faire lever",
          "Pour la rendre liquide",
          "Pour supprimer le sucre"
        ],
        "answer": 0,
        "explanation": "Le froid stabilise la pâte avant l’entrée au four."
      }
    ],
    "linkedRecipes": [
      "pate-sucree-base"
    ]
  },
  {
    "id": "meringues-cremes-fouettees",
    "moduleId": "patisserie-base",
    "title": "Meringues et crèmes fouettées",
    "subtitle": "Monter, stabiliser, ne pas sur-fouetter",
    "duration": 12,
    "prerequisites": [
      "pates-tartes-sucrees"
    ],
    "objectives": [
      "Monter des blancs en neige ou une crème fouettée proprement",
      "Comprendre le rôle du sucre dans la stabilité",
      "Éviter meringue grainée, chantilly tranchée ou blancs retombés"
    ],
    "concepts": [
      {
        "title": "Les blancs emprisonnent de l’air",
        "body": "Quand on fouette des blancs, les protéines se déploient et retiennent de l’air. On obtient une mousse. Cette mousse est fragile : un bol gras, des traces de jaune ou un fouettage mal conduit peuvent empêcher une bonne montée.",
        "tip": "Blancs en neige : bol propre, pas de gras."
      },
      {
        "title": "Le sucre stabilise",
        "body": "Dans une meringue, le sucre ne sert pas seulement à sucrer. Il stabilise la mousse, donne de la brillance et influence la texture après cuisson. Ajouté trop tôt, il ralentit la montée ; ajouté progressivement, il aide à obtenir une meringue plus stable.",
        "tip": "Le sucre se mérite progressivement."
      },
      {
        "title": "Becs souples ou fermes",
        "body": "Selon l’usage, on ne cherche pas toujours la même tenue. Des blancs souples s’incorporent mieux dans un appareil. Des blancs fermes servent à meringuer ou pocher. Trop fouettés, les blancs deviennent granuleux et s’incorporent mal.",
        "tip": "Plus ferme n’est pas toujours mieux."
      },
      {
        "title": "La crème fouettée peut trancher",
        "body": "Une crème fouettée monte grâce au froid et au gras. Elle doit être arrêtée quand elle tient mais reste lisse. Trop fouettée, elle devient granuleuse et commence à se séparer en beurre et petit-lait.",
        "tip": "Chantilly ferme mais lisse, pas granuleuse."
      }
    ],
    "goFurther": {
      "title": "Meringue française, suisse, italienne",
      "content": "La meringue française est simple : blancs montés avec sucre. La suisse est chauffée au bain-marie avant montage, plus stable. L’italienne reçoit un sirop chaud, très stable mais plus technique. Pour une base, il faut d’abord maîtriser la française."
    },
    "quiz": [
      {
        "q": "Tes blancs ne montent pas correctement. Quelle cause est probable ?",
        "options": [
          "Présence de gras ou de jaune dans le bol",
          "Trop de bol propre",
          "Pas assez de farine",
          "Four pas assez chaud"
        ],
        "answer": 0,
        "explanation": "Le gras empêche les protéines du blanc de former une mousse stable."
      },
      {
        "q": "Ta meringue devient granuleuse. Que s’est-il probablement passé ?",
        "options": [
          "Blancs trop fouettés ou sucre mal incorporé",
          "Trop peu de cuisson à l’eau",
          "Beurre trop froid",
          "Farine trop tamisée"
        ],
        "answer": 0,
        "explanation": "Une mousse trop travaillée se déstructure. Le sucre doit être incorporé progressivement."
      },
      {
        "q": "Pourquoi ne cherche-t-on pas toujours des blancs très fermes ?",
        "options": [
          "Ils peuvent être difficiles à incorporer et casser l’appareil",
          "Ils ne contiennent plus d’air",
          "Ils deviennent salés",
          "Ils empêchent toute cuisson"
        ],
        "answer": 0,
        "explanation": "Pour certains appareils, des blancs souples s’incorporent mieux et gardent une texture plus légère."
      },
      {
        "q": "Ta chantilly commence à faire des grains. Que dois-tu faire ?",
        "options": [
          "Arrêter immédiatement de fouetter",
          "Fouetter plus vite pendant 10 minutes",
          "La faire bouillir",
          "Ajouter de la farine"
        ],
        "answer": 0,
        "explanation": "Les grains indiquent un sur-fouettage. Continuer peut transformer la crème en beurre."
      }
    ],
    "linkedRecipes": [
      "chantilly-stable"
    ]
  },
  {
    "id": "corriger-patisserie-ratee",
    "moduleId": "patisserie-base",
    "title": "Corriger une pâtisserie ratée",
    "subtitle": "Comprendre ce qui est récupérable et ce qui ne l’est pas",
    "duration": 12,
    "prerequisites": [
      "meringues-cremes-fouettees"
    ],
    "objectives": [
      "Diagnostiquer les défauts fréquents en pâtisserie",
      "Savoir quand corriger, recycler ou recommencer",
      "Prévenir les erreurs par méthode et observation"
    ],
    "concepts": [
      {
        "title": "Tout ne se rattrape pas",
        "body": "Une crème légèrement trop épaisse peut se détendre. Une pâte à cake trop cuite ne redevient pas moelleuse. Une meringue effondrée peut parfois être recyclée, mais pas redevenir parfaite. En pâtisserie, il faut distinguer correction, transformation et recommencement.",
        "tip": "Corriger n’est pas toujours revenir au résultat prévu."
      },
      {
        "title": "Gâteau sec",
        "body": "Un gâteau sec vient souvent d’une surcuisson, d’un excès de farine ou d’un manque de gras/liquide. On peut le servir avec sirop, crème, compote, glace ou le transformer en verrine, cake pops ou pudding. Mais la mie ne redevient pas identique.",
        "tip": "Gâteau sec : apporte humidité ou change de service."
      },
      {
        "title": "Crème ratée",
        "body": "Une crème pâtissière avec grumeaux peut être fouettée ou mixée si elle n’est pas brûlée. Une crème anglaise légèrement grainée peut parfois être mixée et filtrée. Une crème brûlée au fond garde souvent un goût difficile à masquer.",
        "tip": "Grumeaux se mixent ; brûlé se cache mal."
      },
      {
        "title": "Pâte trop travaillée",
        "body": "Une pâte à tarte trop travaillée ou trop hydratée risque d’être dure et de se rétracter. On peut la reposer longtemps au froid pour limiter les dégâts, mais elle restera moins friable. La prévention reste meilleure que la correction.",
        "tip": "Une pâte trop travaillée se calme, mais ne s’oublie pas."
      }
    ],
    "goFurther": {
      "title": "Recycler intelligemment",
      "content": "Un cake sec devient verrine avec crème et fruit. Une pâte cassée devient crumble. Une meringue imparfaite devient éclats pour dessert. Une crème trop épaisse devient garniture. Savoir recycler fait partie de l’autonomie."
    },
    "quiz": [
      {
        "q": "Ton gâteau est sec. Quelle solution est la plus réaliste ?",
        "options": [
          "Le servir avec sirop, crème, fruit ou le transformer",
          "Le remettre au four pour le rendre moelleux",
          "Ajouter de l’eau sur la mie et prétendre que rien n’a changé",
          "Le fouetter"
        ],
        "answer": 0,
        "explanation": "La surcuisson ne s’annule pas. On apporte de l’humidité ou on change la présentation."
      },
      {
        "q": "Ta crème pâtissière a des grumeaux mais n’est pas brûlée. Que peux-tu tenter ?",
        "options": [
          "La fouetter, mixer puis éventuellement filtrer",
          "La jeter automatiquement",
          "Ajouter de la farine crue",
          "La cuire à feu très fort"
        ],
        "answer": 0,
        "explanation": "Les grumeaux peuvent souvent être lissés si le goût n’est pas altéré."
      },
      {
        "q": "Ta pâte à tarte est devenue élastique. Quelle action limite les dégâts ?",
        "options": [
          "La laisser reposer longtemps au froid avant de l’abaisser",
          "La pétrir encore plus",
          "Ajouter beaucoup d’eau",
          "La cuire immédiatement sans repos"
        ],
        "answer": 0,
        "explanation": "Le repos détend le gluten et réduit la rétraction, même si la pâte restera moins friable."
      },
      {
        "q": "Une préparation a un goût de brûlé. Quelle affirmation est juste ?",
        "options": [
          "C’est difficile à masquer complètement",
          "Le sucre annule toujours le brûlé",
          "La vanille supprime tout",
          "Il suffit de refroidir"
        ],
        "answer": 0,
        "explanation": "Le brûlé marque fortement les préparations sucrées. La correction est limitée."
      }
    ],
    "linkedRecipes": [
      "verrine-cake-sec-recuperation"
    ]
  },
  {
    "id": "meringue-maitrisee",
    "moduleId": "patisserie-sensible-meringue-caramel-chocolat",
    "title": "Meringue maîtrisée",
    "subtitle": "Air, sucre, stabilité et cuisson douce",
    "duration": 13,
    "prerequisites": [
      "corriger-patisserie-ratee"
    ],
    "objectives": [
      "Monter une meringue stable et brillante",
      "Comprendre le rôle du sucre, du fouettage et de la cuisson",
      "Éviter meringue grainée, collante, fissurée ou affaissée"
    ],
    "concepts": [
      {
        "title": "Une meringue est une mousse stabilisée",
        "body": "La meringue repose sur des blancs d’œufs fouettés qui emprisonnent de l’air. Le sucre stabilise cette mousse, apporte de la brillance et influence la texture finale. Sans assez de sucre, la meringue est fragile. Avec un sucre mal incorporé, elle peut grainer, pleurer ou cuire de manière irrégulière.",
        "tip": "Une meringue réussie est une mousse tenue par le sucre."
      },
      {
        "title": "Bol propre, blancs propres",
        "body": "Le gras empêche les blancs de monter correctement. Une trace de jaune, un bol mal lavé ou un fouet gras peuvent suffire à rendre la mousse instable. Avant de commencer, le matériel doit être parfaitement propre et sec.",
        "tip": "Blancs en neige : zéro gras."
      },
      {
        "title": "Ajouter le sucre progressivement",
        "body": "Le sucre doit être incorporé peu à peu, quand les blancs commencent déjà à mousser. Ajouté trop tôt en grande quantité, il ralentit la montée. Ajouté trop tard ou trop vite, il se dissout mal. Une bonne meringue devient brillante, dense et forme un bec net.",
        "tip": "Le sucre stabilise mieux quand il arrive progressivement."
      },
      {
        "title": "Cuire ou sécher",
        "body": "Une meringue ne se cuit pas comme un gâteau. Elle sèche doucement. Un four trop chaud colore, fissure ou laisse l’intérieur collant. Un séchage long et modéré donne une meringue plus nette, croquante dehors et éventuellement fondante dedans selon le résultat recherché.",
        "tip": "La meringue aime le temps doux, pas la chaleur brutale."
      }
    ],
    "goFurther": {
      "title": "Meringue française, suisse, italienne",
      "content": "La meringue française est la plus simple : blancs montés et sucre ajouté progressivement. La suisse est chauffée avec le sucre avant montage, plus stable. L’italienne reçoit un sirop chaud, très stable mais plus technique. Dans une app de progression, la française doit être maîtrisée avant les deux autres."
    },
    "quiz": [
      {
        "q": "Tes blancs ne montent presque pas malgré un long fouettage. Quelle cause est la plus probable ?",
        "options": [
          "Présence de gras ou de jaune dans le bol",
          "Four trop froid",
          "Trop peu de farine",
          "Sucre ajouté en finition uniquement"
        ],
        "answer": 0,
        "explanation": "Le gras empêche les protéines du blanc de former une mousse stable. Le matériel doit être parfaitement propre."
      },
      {
        "q": "Ta meringue devient granuleuse et terne. Que s’est-il probablement passé ?",
        "options": [
          "Sucre mal incorporé ou blancs trop fouettés",
          "Cuisson trop courte des jaunes",
          "Trop peu de beurre",
          "Pâte trop hydratée"
        ],
        "answer": 0,
        "explanation": "Une meringue doit rester brillante et lisse. Un fouettage excessif ou un sucre mal dissous dégrade la texture."
      },
      {
        "q": "Tes meringues colorent trop vite mais restent collantes dedans. Quelle correction est logique ?",
        "options": [
          "Baisser la température et prolonger le séchage",
          "Monter le four au maximum",
          "Ajouter du beurre fondu",
          "Les sortir dès qu’elles brunissent"
        ],
        "answer": 0,
        "explanation": "La meringue doit sécher doucement. Une chaleur trop forte colore avant de sécher l’intérieur."
      },
      {
        "q": "Quel signe indique une meringue prête à pocher ?",
        "options": [
          "Masse brillante, dense, avec un bec qui tient",
          "Liquide transparent",
          "Mousse très grossière qui retombe immédiatement",
          "Texture grasse et séparée"
        ],
        "answer": 0,
        "explanation": "Une meringue prête doit être stable, brillante et capable de garder sa forme."
      }
    ],
    "linkedRecipes": [
      "meringue-francaise-sechee"
    ]
  },
  {
    "id": "caramel-sec-humide",
    "moduleId": "patisserie-sensible-meringue-caramel-chocolat",
    "title": "Caramel sec et caramel humide",
    "subtitle": "Faire fondre le sucre sans cristalliser ni brûler",
    "duration": 14,
    "prerequisites": [
      "meringue-maitrisee"
    ],
    "objectives": [
      "Comprendre les deux méthodes de caramel",
      "Identifier les stades de couleur et de goût",
      "Éviter cristallisation, brûlure et projections"
    ],
    "concepts": [
      {
        "title": "Le sucre change de goût avec la chaleur",
        "body": "Le caramel n’est pas seulement du sucre fondu. À mesure qu’il chauffe, il passe du blond clair au doré, puis à l’ambré et au brun. Plus il fonce, plus il gagne en amertume et en profondeur. Trop clair, il manque de caractère. Trop foncé, il devient amer et brûlé.",
        "tip": "La couleur du caramel annonce son goût."
      },
      {
        "title": "Caramel sec",
        "body": "Le caramel sec se fait avec du sucre seul, fondu progressivement dans une casserole. Il est rapide, mais demande une chaleur régulière et de la surveillance. On évite de remuer brutalement au début ; on peut incliner la casserole pour répartir la chaleur.",
        "tip": "Caramel sec : rapide, direct, surveillé."
      },
      {
        "title": "Caramel humide",
        "body": "Le caramel humide commence avec sucre et eau. L’eau permet une fonte plus progressive, mais elle doit ensuite s’évaporer avant que le sucre caramélise. Le risque principal est la cristallisation si des cristaux de sucre se forment sur les bords ou si l’on remue trop tôt.",
        "tip": "Caramel humide : plus progressif, mais attention aux cristaux."
      },
      {
        "title": "Décuire en sécurité",
        "body": "Ajouter crème, beurre ou liquide dans un caramel chaud provoque de fortes bulles et de la vapeur. Il faut utiliser une casserole assez haute, ajouter progressivement et garder le visage éloigné. Le caramel est l’une des préparations les plus brûlantes en cuisine.",
        "tip": "Caramel chaud = danger réel, gestes calmes."
      }
    ],
    "goFurther": {
      "title": "Cristallisation",
      "content": "Si le sucre masse et devient sableux, il a cristallisé. On peut parfois poursuivre doucement pour le refondre, mais le résultat est moins contrôlé. Pour limiter le risque : casserole propre, bords non chargés en cristaux, pas de remuage excessif au début."
    },
    "quiz": [
      {
        "q": "Ton caramel devient sableux et blanc au lieu de fondre proprement. Que s’est-il passé ?",
        "options": [
          "Le sucre a cristallisé",
          "Le sucre a été trop peu sucré",
          "Le beurre a coagulé",
          "La meringue est retombée"
        ],
        "answer": 0,
        "explanation": "Un caramel qui masse devient sableux : c’est une cristallisation du sucre."
      },
      {
        "q": "Ton caramel est brun très foncé et sent âcre. Quelle conclusion est correcte ?",
        "options": [
          "Il est probablement brûlé ou trop amer",
          "Il est forcément plus doux",
          "Il manque d’eau",
          "Il doit cuire encore longtemps"
        ],
        "answer": 0,
        "explanation": "Un caramel trop foncé développe une amertume forte et peut devenir brûlé."
      },
      {
        "q": "Pourquoi utiliser une casserole haute pour ajouter de la crème dans un caramel ?",
        "options": [
          "Le mélange mousse fortement et peut projeter",
          "La crème ne chauffe jamais",
          "Le sucre devient froid instantanément",
          "Le caramel ne fait aucune bulle"
        ],
        "answer": 0,
        "explanation": "Décuire un caramel crée de fortes bulles et de la vapeur. Il faut anticiper le volume."
      },
      {
        "q": "Quelle attitude est la plus sûre avec un caramel en cuisson ?",
        "options": [
          "Surveiller sans mettre le visage au-dessus et manipuler calmement",
          "Goûter avec le doigt",
          "Ajouter de l’eau froide brusquement depuis très haut",
          "Quitter la cuisine pendant la coloration"
        ],
        "answer": 0,
        "explanation": "Le caramel est extrêmement chaud. La sécurité prime sur la vitesse."
      }
    ],
    "linkedRecipes": [
      "caramel-beurre-sale"
    ]
  },
  {
    "id": "chocolat-fondre-sans-bruler",
    "moduleId": "patisserie-sensible-meringue-caramel-chocolat",
    "title": "Faire fondre le chocolat",
    "subtitle": "Chaleur douce, eau interdite, texture lisse",
    "duration": 12,
    "prerequisites": [
      "caramel-sec-humide"
    ],
    "objectives": [
      "Faire fondre du chocolat sans le brûler",
      "Comprendre pourquoi l’eau peut faire masser le chocolat",
      "Choisir entre bain-marie et micro-ondes contrôlé"
    ],
    "concepts": [
      {
        "title": "Le chocolat brûle facilement",
        "body": "Le chocolat contient cacao, sucre et matière grasse. Il fond à une température relativement basse et brûle si la chaleur est trop forte. Un chocolat brûlé devient épais, terne, granuleux et amer. Il faut donc chauffer progressivement.",
        "tip": "Le chocolat se chauffe moins qu’on ne croit."
      },
      {
        "title": "Bain-marie contrôlé",
        "body": "Le bain-marie donne une chaleur douce, mais il impose une règle : l’eau ne doit pas entrer dans le chocolat. Même quelques gouttes peuvent le faire masser, surtout si la quantité de chocolat est faible. Le bol ne doit pas toucher une eau bouillante violente.",
        "tip": "Bain-marie oui, vapeur dans le chocolat non."
      },
      {
        "title": "Micro-ondes par impulsions",
        "body": "Au micro-ondes, le chocolat doit être chauffé par séquences courtes, puis mélangé. Il continue de fondre avec sa propre chaleur. Attendre qu’il soit totalement fondu visuellement avant de mélanger conduit souvent à le surchauffer.",
        "tip": "Chauffe court, mélange souvent."
      },
      {
        "title": "Chocolat massé",
        "body": "Un chocolat massé devient épais et pâteux, souvent à cause d’un contact avec de l’eau ou d’une surchauffe. Pour une ganache, on peut parfois le récupérer avec plus de liquide chaud. Pour un chocolat de couverture lisse, c’est plus difficile.",
        "tip": "Chocolat pâteux : identifie eau ou surchauffe."
      }
    ],
    "goFurther": {
      "title": "Tempérage, niveau avancé",
      "content": "Le tempérage consiste à contrôler précisément la cristallisation du beurre de cacao pour obtenir un chocolat brillant et cassant. C’est utile pour moulages et décors, mais avant cela il faut maîtriser la fonte simple sans brûler."
    },
    "quiz": [
      {
        "q": "Ton chocolat devient épais et pâteux après contact avec quelques gouttes d’eau. Que s’est-il passé ?",
        "options": [
          "Il a massé",
          "Il a levé",
          "Il a caramélisé correctement",
          "Il s’est transformé en meringue"
        ],
        "answer": 0,
        "explanation": "Une petite quantité d’eau peut faire masser le chocolat en créant une texture pâteuse."
      },
      {
        "q": "Pourquoi chauffer le chocolat au micro-ondes par petites séquences ?",
        "options": [
          "Pour éviter les points de surchauffe et laisser la chaleur se répartir",
          "Pour le rendre plus sucré",
          "Pour empêcher toute fonte",
          "Pour remplacer le cacao"
        ],
        "answer": 0,
        "explanation": "Le chocolat peut brûler localement. Les impulsions et le mélange régulier limitent ce risque."
      },
      {
        "q": "Ton bol de bain-marie touche une eau en forte ébullition. Quel risque ?",
        "options": [
          "Chaleur trop forte et vapeur pouvant entrer dans le chocolat",
          "Fonte plus stable garantie",
          "Chocolat automatiquement tempéré",
          "Aucun risque possible"
        ],
        "answer": 0,
        "explanation": "Le bain-marie doit rester doux. Trop de chaleur ou d’humidité peut abîmer le chocolat."
      },
      {
        "q": "Quel signe indique un chocolat probablement brûlé ?",
        "options": [
          "Texture épaisse, terne, granuleuse et odeur amère",
          "Texture lisse et brillante",
          "Fonte homogène",
          "Parfum net de cacao"
        ],
        "answer": 0,
        "explanation": "Un chocolat surchauffé perd sa fluidité et peut devenir amer."
      }
    ],
    "linkedRecipes": [
      "ganache-chocolat-base"
    ]
  },
  {
    "id": "ganache-et-textures-chocolat",
    "moduleId": "patisserie-sensible-meringue-caramel-chocolat",
    "title": "Ganache et textures chocolat",
    "subtitle": "Émulsionner crème et chocolat",
    "duration": 13,
    "prerequisites": [
      "chocolat-fondre-sans-bruler"
    ],
    "objectives": [
      "Comprendre la ganache comme une émulsion",
      "Adapter les ratios selon texture souhaitée",
      "Rattraper une ganache tranchée ou trop ferme"
    ],
    "concepts": [
      {
        "title": "La ganache est une émulsion",
        "body": "Une ganache mélange chocolat et crème. Le chocolat apporte cacao, sucre et matière grasse ; la crème apporte eau et gras. Pour obtenir une texture lisse, il faut créer une émulsion stable. Verser, attendre, puis mélanger depuis le centre aide à former un noyau brillant.",
        "tip": "Ganache lisse = émulsion réussie."
      },
      {
        "title": "Le ratio décide la texture",
        "body": "Plus il y a de chocolat, plus la ganache devient ferme. Plus il y a de crème, plus elle reste souple. Une ganache de glaçage, une ganache montée et une ganache de tarte n’ont pas le même ratio. Il faut choisir la texture avant de peser.",
        "tip": "La texture finale se décide au ratio."
      },
      {
        "title": "Température et patience",
        "body": "Une crème trop froide ne fait pas fondre correctement le chocolat. Une crème trop chaude peut déstabiliser certains chocolats. Une ganache trop mélangée avec brutalité peut incorporer trop d’air. Le geste doit être progressif.",
        "tip": "Chocolat et crème demandent une chaleur juste."
      },
      {
        "title": "Ganache tranchée",
        "body": "Une ganache tranchée devient huileuse ou granuleuse. On peut souvent la rattraper avec un peu de liquide chaud ajouté progressivement, ou en mixant au mixeur plongeant sans incorporer d’air. L’objectif est de recréer une émulsion.",
        "tip": "Ganache tranchée : reconstruire l’émulsion."
      }
    ],
    "goFurther": {
      "title": "Ganache montée",
      "content": "Une ganache montée contient généralement plus de crème et doit reposer au froid avant d’être fouettée. Elle doit être montée comme une chantilly : froide, surveillée et arrêtée avant de grainer."
    },
    "quiz": [
      {
        "q": "Ta ganache est huileuse et séparée. Que s’est-il probablement passé ?",
        "options": [
          "L’émulsion a tranché",
          "La crème a levé",
          "Le chocolat a été trop peu sucré uniquement",
          "Le sucre a cristallisé en caramel"
        ],
        "answer": 0,
        "explanation": "Une ganache huileuse indique que le gras s’est séparé de la phase aqueuse."
      },
      {
        "q": "Tu veux une ganache ferme pour garnir une tarte. Quel paramètre est central ?",
        "options": [
          "Augmenter la proportion de chocolat par rapport à la crème",
          "Ajouter beaucoup d’eau",
          "Supprimer tout repos",
          "La cuire comme une béchamel"
        ],
        "answer": 0,
        "explanation": "Le ratio chocolat/crème détermine la tenue finale."
      },
      {
        "q": "Pourquoi mélanger une ganache depuis le centre au départ ?",
        "options": [
          "Pour créer progressivement un noyau d’émulsion lisse",
          "Pour refroidir instantanément la crème",
          "Pour empêcher le chocolat de fondre",
          "Pour faire monter les blancs"
        ],
        "answer": 0,
        "explanation": "Le mélange depuis le centre aide à former une émulsion stable avant d’élargir le mouvement."
      },
      {
        "q": "Ta ganache montée graine au fouet. Quelle erreur est probable ?",
        "options": [
          "Elle a été trop fouettée",
          "Elle n’a pas assez bouilli",
          "Elle manque de farine",
          "Elle contient trop peu de cacao pour cuire"
        ],
        "answer": 0,
        "explanation": "Comme une chantilly, une ganache montée peut grainer si elle est fouettée trop longtemps."
      }
    ],
    "linkedRecipes": [
      "ganache-chocolat-base"
    ]
  },
  {
    "id": "corriger-patisserie-sensible",
    "moduleId": "patisserie-sensible-meringue-caramel-chocolat",
    "title": "Corriger les préparations sensibles",
    "subtitle": "Savoir sauver, transformer ou recommencer",
    "duration": 12,
    "prerequisites": [
      "ganache-et-textures-chocolat"
    ],
    "objectives": [
      "Identifier ce qui est récupérable en meringue, caramel et chocolat",
      "Appliquer les corrections réalistes",
      "Savoir quand recommencer pour ne pas aggraver"
    ],
    "concepts": [
      {
        "title": "Le sucre brûlé ne se sauve presque pas",
        "body": "Un caramel trop foncé ou brûlé garde une amertume forte. Ajouter crème, beurre ou chocolat peut l’arrondir légèrement, mais pas supprimer le brûlé. Si l’amertume domine, mieux vaut recommencer.",
        "tip": "Caramel brûlé : recommencer vaut souvent mieux."
      },
      {
        "title": "Le chocolat massé peut changer d’usage",
        "body": "Un chocolat massé ne redevient pas toujours fluide pour un décor ou un enrobage. En revanche, il peut parfois devenir une ganache, une sauce, une base de gâteau ou une crème si on ajoute du liquide chaud progressivement.",
        "tip": "Chocolat raté pour décor peut devenir dessert."
      },
      {
        "title": "La meringue instable se recycle",
        "body": "Une meringue trop liquide ou mal montée ne donnera pas de belles formes. Mais elle peut parfois servir dans un appareil, être cuite en plaque irrégulière pour des éclats, ou devenir une base de dessert moins exigeante. Si elle contient du gras, mieux vaut souvent recommencer.",
        "tip": "Meringue imparfaite : baisse l’ambition de forme."
      },
      {
        "title": "Ne pas corriger en panique",
        "body": "Les préparations sensibles réagissent vite. Ajouter beaucoup de liquide, fouetter trop fort, remettre à feu vif ou refroidir brutalement peut empirer. Il faut d’abord nommer le défaut : brûlé, massé, tranché, grainé, trop ferme, trop liquide.",
        "tip": "Diagnostic avant correction."
      }
    ],
    "goFurther": {
      "title": "Règle de décision",
      "content": "Si le goût est brûlé ou douteux, recommencer. Si la texture est ratée mais le goût bon, transformer. Si l’émulsion est cassée, tenter une reconstruction progressive. Si la mousse est instable, réduire l’exigence de dressage."
    },
    "quiz": [
      {
        "q": "Ton caramel sent franchement le brûlé. Quelle décision est la plus professionnelle ?",
        "options": [
          "Recommencer plutôt que masquer",
          "Ajouter beaucoup de vanille pour annuler",
          "Continuer à cuire",
          "Le fouetter avec des blancs"
        ],
        "answer": 0,
        "explanation": "Un goût de brûlé est très difficile à masquer. Recommencer évite de gâcher le reste du dessert."
      },
      {
        "q": "Ton chocolat a massé mais son goût reste bon. Quelle transformation est réaliste ?",
        "options": [
          "L’utiliser dans une ganache, sauce ou pâte à gâteau",
          "Le tempérer immédiatement pour des décors fins",
          "Le sécher au four",
          "Le transformer en caramel"
        ],
        "answer": 0,
        "explanation": "La texture n’est plus adaptée à un décor, mais peut être récupérée dans une préparation avec liquide."
      },
      {
        "q": "Ta meringue ne tient pas assez pour pocher de belles formes. Que peux-tu faire ?",
        "options": [
          "La cuire en plaque pour des éclats si le goût est bon",
          "Ajouter du beurre fondu",
          "Ajouter de l’eau",
          "La faire bouillir"
        ],
        "answer": 0,
        "explanation": "On peut transformer l’usage plutôt que chercher une forme impossible."
      },
      {
        "q": "Avant de corriger une préparation sensible, quel est le premier réflexe ?",
        "options": [
          "Identifier précisément le défaut",
          "Ajouter du liquide au hasard",
          "Augmenter le feu",
          "Fouetter plus fort sans regarder"
        ],
        "answer": 0,
        "explanation": "La correction dépend du défaut. Sans diagnostic, on risque d’aggraver."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "comprendre-dressage",
    "moduleId": "dressage-service",
    "title": "Comprendre le dressage",
    "subtitle": "Lisibilité, appétence, ordre et intention",
    "duration": 11,
    "prerequisites": [
      "corriger-patisserie-sensible"
    ],
    "objectives": [
      "Comprendre le rôle du dressage dans l’expérience du plat",
      "Dresser sans surcharger ni cacher les défauts",
      "Rendre une assiette lisible, appétissante et cohérente"
    ],
    "concepts": [
      {
        "title": "Le dressage doit servir le plat",
        "body": "Dresser ne veut pas dire décorer au hasard. Une bonne assiette montre ce qu’on va manger, donne envie, facilite la dégustation et respecte les textures. Si le dressage complique la bouchée ou cache le produit principal, il dessert le plat.",
        "tip": "Le dressage est une mise en valeur, pas un déguisement."
      },
      {
        "title": "Lisibilité",
        "body": "Une assiette lisible permet d’identifier l’élément principal, la garniture, la sauce et la finition. Trop d’éléments dispersés donnent une impression confuse. Une bonne règle : savoir expliquer en une phrase ce que raconte l’assiette.",
        "tip": "Si on ne comprend pas l’assiette, elle est trop confuse."
      },
      {
        "title": "Propreté",
        "body": "Une assiette propre change immédiatement la perception du niveau. Les traces de sauce, les gouttes grasses non voulues, les bords sales ou les herbes jetées sans intention donnent une impression négligée. Essuyer un bord fait partie du service.",
        "tip": "Un bord propre est un geste de respect."
      },
      {
        "title": "Manger facilement",
        "body": "Le dressage doit être beau mais mangeable. Une pièce trop haute qui s’écroule, une sauce inaccessible ou une garniture impossible à couper créent une mauvaise expérience. Le visuel ne doit pas contredire le confort de dégustation.",
        "tip": "Une belle assiette doit aussi se manger simplement."
      }
    ],
    "goFurther": {
      "title": "Assiette maison vs assiette restaurant",
      "content": "À la maison, le dressage doit rester efficace. Il n’est pas nécessaire de copier un restaurant gastronomique. L’objectif est une assiette nette, chaude, équilibrée et appétissante."
    },
    "quiz": [
      {
        "q": "Une assiette est jolie mais impossible à manger proprement. Quel est le problème ?",
        "options": [
          "Le dressage ne respecte pas la dégustation",
          "Elle manque forcément de hauteur",
          "Il fallait ajouter plus d’herbes",
          "La sauce est toujours inutile"
        ],
        "answer": 0,
        "explanation": "Le dressage doit aider l’expérience, pas créer une difficulté."
      },
      {
        "q": "Pourquoi éviter trop d’éléments dispersés dans une assiette ?",
        "options": [
          "Cela rend le plat confus et moins lisible",
          "Cela refroidit toujours instantanément",
          "Cela supprime le goût",
          "Cela empêche toute sauce"
        ],
        "answer": 0,
        "explanation": "Une assiette doit être comprise rapidement : produit, garniture, sauce, finition."
      },
      {
        "q": "Quel geste simple augmente immédiatement la perception de soin ?",
        "options": [
          "Essuyer les bords de l’assiette",
          "Ajouter du poivre partout",
          "Empiler tous les éléments",
          "Servir la sauce froide"
        ],
        "answer": 0,
        "explanation": "La propreté du bord est un marqueur simple de service soigné."
      },
      {
        "q": "Le dressage sert d’abord à :",
        "options": [
          "Mettre en valeur le plat et faciliter la dégustation",
          "Cacher tous les défauts",
          "Ajouter des éléments non comestibles",
          "Rendre le plat plus compliqué"
        ],
        "answer": 0,
        "explanation": "Le dressage doit rendre le plat plus lisible, plus appétissant et plus agréable."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "dresser-assiette-equilibree",
    "moduleId": "dressage-service",
    "title": "Dresser une assiette équilibrée",
    "subtitle": "Produit, garniture, sauce, finition",
    "duration": 12,
    "prerequisites": [
      "comprendre-dressage"
    ],
    "objectives": [
      "Structurer une assiette autour d’un élément principal",
      "Placer sauce et garniture avec intention",
      "Créer une bouchée équilibrée"
    ],
    "concepts": [
      {
        "title": "L’élément principal guide l’assiette",
        "body": "Viande, poisson, légume principal ou dessert : l’élément central doit être identifiable. La garniture le soutient, la sauce le relie, la finition apporte relief. Si tout a la même importance visuelle, rien ne ressort.",
        "tip": "Un plat a besoin d’un sujet principal."
      },
      {
        "title": "La sauce relie",
        "body": "La sauce peut être dessous, autour, à côté ou nappée. Elle doit rester accessible à chaque bouchée. Trop de sauce noie, trop peu frustre. Une sauce brillante et bien placée donne immédiatement du niveau.",
        "tip": "La sauce doit être disponible, pas envahissante."
      },
      {
        "title": "La garniture donne le volume",
        "body": "Purée, légumes, riz, pâtes ou salade créent le support. Une garniture peut porter l’élément principal, le cadrer ou le compléter. Elle ne doit pas cacher totalement la cuisson du produit.",
        "tip": "La garniture soutient, elle ne camoufle pas."
      },
      {
        "title": "La finition signe",
        "body": "Herbes, zeste, huile, graines, croquant, fleur de sel ou condiment donnent la dernière impression. Une finition doit avoir un rôle gustatif ou textural. Sinon, elle n’est qu’un décor faible.",
        "tip": "La finition doit se goûter."
      }
    ],
    "goFurther": {
      "title": "Penser la bouchée",
      "content": "Un bon dressage permet de prendre une bouchée complète : un peu de produit, un peu de garniture, un peu de sauce, parfois une finition. Si les éléments sont trop séparés, le convive doit reconstruire le plat lui-même."
    },
    "quiz": [
      {
        "q": "Tu mets toute la sauce sous une grosse pièce de viande impossible à déplacer. Quel risque ?",
        "options": [
          "La sauce devient difficile à atteindre pendant la dégustation",
          "La viande sera forcément plus tendre",
          "La sauce devient plus chaude automatiquement",
          "Le plat devient plus lisible"
        ],
        "answer": 0,
        "explanation": "La sauce doit accompagner les bouchées. Si elle est inaccessible, le dressage gêne la dégustation."
      },
      {
        "q": "Pourquoi identifier un élément principal avant de dresser ?",
        "options": [
          "Pour organiser l’assiette autour d’une intention claire",
          "Pour cacher les garnitures",
          "Pour supprimer la sauce",
          "Pour rendre tous les éléments identiques"
        ],
        "answer": 0,
        "explanation": "L’assiette devient plus lisible quand elle a un sujet principal."
      },
      {
        "q": "Une finition d’herbes sans goût et jetée au hasard sert-elle vraiment le plat ?",
        "options": [
          "Non, une finition doit apporter goût, fraîcheur ou texture",
          "Oui, toute herbe améliore toujours tout",
          "Oui, même si elle gêne la dégustation",
          "Oui, surtout si elle est sèche"
        ],
        "answer": 0,
        "explanation": "Une finition doit être utile. Sinon elle ressemble à une décoration automatique."
      },
      {
        "q": "Quel est l’objectif d’une bouchée équilibrée ?",
        "options": [
          "Retrouver produit, garniture, sauce et relief dans une proportion agréable",
          "Manger uniquement la sauce",
          "Séparer tous les éléments sans lien",
          "Empiler au maximum"
        ],
        "answer": 0,
        "explanation": "Le dressage doit aider le convive à comprendre et goûter le plat dans son équilibre."
      }
    ],
    "linkedRecipes": [
      "assiette-poisson-legumes-sauce"
    ]
  },
  {
    "id": "textures-couleurs-volumes",
    "moduleId": "dressage-service",
    "title": "Textures, couleurs et volumes",
    "subtitle": "Créer du contraste sans surcharge",
    "duration": 11,
    "prerequisites": [
      "dresser-assiette-equilibree"
    ],
    "objectives": [
      "Utiliser les contrastes pour rendre une assiette plus appétissante",
      "Éviter les assiettes plates, molles ou monochromes",
      "Composer avec hauteur, relief et espace vide"
    ],
    "concepts": [
      {
        "title": "La texture se voit et se mange",
        "body": "Une assiette où tout est mou peut sembler fade même si le goût est correct. Ajouter du croustillant, du croquant ou une finition fraîche change la perception. La texture est un outil de dressage autant qu’un outil gustatif.",
        "tip": "Un plat mou demande souvent un contraste."
      },
      {
        "title": "La couleur doit rester naturelle",
        "body": "Les couleurs donnent envie, mais elles doivent rester cohérentes avec le plat. Un vert frais, une sauce brillante, une croûte dorée ou une purée bien lisse suffisent souvent. Trop de couleurs sans logique donne un effet confus.",
        "tip": "Couleur oui, carnaval non."
      },
      {
        "title": "Le volume rend l’assiette vivante",
        "body": "Une assiette totalement plate peut manquer d’appétence. Donner un léger volume avec une quenelle, une garniture posée proprement ou une pièce découpée en biais crée du relief. Mais trop de hauteur instable devient artificiel.",
        "tip": "Cherche le relief, pas la tour."
      },
      {
        "title": "L’espace vide compte",
        "body": "Ne pas remplir toute l’assiette permet aux éléments de respirer. L’espace vide rend le dressage plus lisible. À l’inverse, une assiette trop grande avec une portion minuscule peut paraître froide ou prétentieuse.",
        "tip": "L’assiette doit respirer sans paraître vide."
      }
    ],
    "goFurther": {
      "title": "Contraste chaud/froid",
      "content": "Un contraste chaud/froid peut être intéressant, mais il doit être maîtrisé : sauce chaude avec salade froide, dessert tiède avec crème froide, légume rôti avec condiment frais. Mal géré, il donne une impression de plat refroidi."
    },
    "quiz": [
      {
        "q": "Ton assiette contient purée, poisson vapeur et sauce crème. Tout est mou. Que peux-tu ajouter ?",
        "options": [
          "Un élément croquant ou une finition fraîche",
          "Plus de purée",
          "Une deuxième sauce molle",
          "Une cuisson plus longue du poisson"
        ],
        "answer": 0,
        "explanation": "Un contraste de texture rend l’assiette plus vivante."
      },
      {
        "q": "Pourquoi éviter d’ajouter des couleurs sans logique ?",
        "options": [
          "Cela peut rendre l’assiette confuse",
          "Cela empêche la cuisson",
          "Cela rend toujours le plat froid",
          "Cela supprime le sel"
        ],
        "answer": 0,
        "explanation": "Les couleurs doivent aider la lisibilité et l’appétence, pas brouiller le message."
      },
      {
        "q": "Une assiette très haute mais instable pose quel problème ?",
        "options": [
          "Elle devient difficile à manger et peut s’écrouler",
          "Elle garde toujours mieux la chaleur",
          "Elle améliore automatiquement le goût",
          "Elle remplace la sauce"
        ],
        "answer": 0,
        "explanation": "Le volume doit servir le plat. Une construction instable gêne la dégustation."
      },
      {
        "q": "À quoi sert l’espace vide dans une assiette ?",
        "options": [
          "À rendre les éléments plus lisibles",
          "À montrer qu’il manque une portion",
          "À refroidir volontairement",
          "À remplacer la garniture"
        ],
        "answer": 0,
        "explanation": "Un peu d’espace aide l’œil à comprendre le plat."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "timing-service-chaud-froid",
    "moduleId": "dressage-service",
    "title": "Timing du service",
    "subtitle": "Servir chaud, net et au bon moment",
    "duration": 12,
    "prerequisites": [
      "textures-couleurs-volumes"
    ],
    "objectives": [
      "Organiser les dernières minutes avant service",
      "Éviter assiettes froides, sauces figées et garnitures molles",
      "Prioriser ce qui doit être fait au dernier moment"
    ],
    "concepts": [
      {
        "title": "Le service se prépare avant la cuisson finale",
        "body": "Un plat réussi peut être gâché par un service désorganisé. Les assiettes, couverts, sauces, garnitures et finitions doivent être prêts avant la dernière cuisson. Sinon, le produit principal attend, refroidit ou surcuit.",
        "tip": "Le service commence avant la fin de cuisson."
      },
      {
        "title": "Tout n’attend pas pareil",
        "body": "Un mijoté attend bien. Une salade assaisonnée attend mal. Une viande peut reposer. Un poisson se sert vite. Une sauce émulsionnée chaude est fragile. Chaque élément a une tolérance différente à l’attente.",
        "tip": "Savoir ce qui peut attendre évite la panique."
      },
      {
        "title": "Assiettes chaudes, assiettes froides",
        "body": "Pour un plat chaud, une assiette froide accélère le refroidissement. Pour un dessert frais ou une salade, une assiette chaude est une erreur. Adapter la température du contenant fait partie du service.",
        "tip": "Le contenant influence la température réelle du plat."
      },
      {
        "title": "Dernière minute",
        "body": "Certaines actions doivent rester finales : herbes fraîches, citron, croustillant, sauce fragile, découpe d’une viande reposée, assaisonnement d’une salade. Les faire trop tôt dégrade texture et fraîcheur.",
        "tip": "Tout ce qui est frais ou croustillant vient tard."
      }
    ],
    "goFurther": {
      "title": "Plan de service",
      "content": "Avant de lancer la dernière cuisson, il faut pouvoir répondre : qu’est-ce qui est prêt, qu’est-ce qui attend, qu’est-ce qui doit être fait à la dernière minute, qu’est-ce qui risque de refroidir ?"
    },
    "quiz": [
      {
        "q": "Ton poisson est prêt mais tu commences seulement à préparer la sauce et les assiettes. Quel problème apparaît ?",
        "options": [
          "Le poisson attend, refroidit ou continue de cuire",
          "Le poisson devient plus nacré automatiquement",
          "La sauce sera plus rapide",
          "La garniture devient plus croustillante"
        ],
        "answer": 0,
        "explanation": "Le poisson supporte mal l’attente. Le service doit être préparé avant sa cuisson finale."
      },
      {
        "q": "Quel élément peut généralement attendre le mieux ?",
        "options": [
          "Un mijoté tenu doucement",
          "Une salade déjà assaisonnée",
          "Une meringue en train de monter",
          "Un poisson vapeur cuit"
        ],
        "answer": 0,
        "explanation": "Les plats mijotés supportent mieux l’attente douce que les préparations fragiles ou fraîches."
      },
      {
        "q": "Pourquoi chauffer une assiette pour un plat chaud ?",
        "options": [
          "Pour ralentir le refroidissement du plat",
          "Pour cuire la viande à cœur",
          "Pour remplacer le four",
          "Pour faire épaissir la sauce froide"
        ],
        "answer": 0,
        "explanation": "L’assiette froide absorbe la chaleur du plat. Une assiette tiède ou chaude aide le service."
      },
      {
        "q": "Quelle action doit souvent être faite au dernier moment ?",
        "options": [
          "Ajouter herbes fraîches, citron ou élément croustillant",
          "Cuire un mijoté pendant trois heures",
          "Faire refroidir une crème pâtissière",
          "Préparer une pâte à pain"
        ],
        "answer": 0,
        "explanation": "Les finitions fraîches ou croustillantes perdent vite leur intérêt si elles attendent."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "sauces-finitions-service",
    "moduleId": "dressage-service",
    "title": "Sauces et finitions au service",
    "subtitle": "Napper, tracer, verser, finir sans salir",
    "duration": 11,
    "prerequisites": [
      "timing-service-chaud-froid"
    ],
    "objectives": [
      "Placer une sauce proprement",
      "Adapter quantité et texture au dressage",
      "Utiliser les finitions pour réveiller le plat au dernier moment"
    ],
    "concepts": [
      {
        "title": "La sauce doit avoir la bonne texture",
        "body": "Une sauce trop liquide s’étale et salit l’assiette. Une sauce trop épaisse fait bloc. Pour dresser, la sauce doit être assez fluide pour se placer, assez nappante pour rester lisible. La texture de service est parfois différente de la texture en casserole.",
        "tip": "Une sauce se règle avant d’entrer dans l’assiette."
      },
      {
        "title": "Napper ou servir à côté",
        "body": "Napper convient quand la sauce fait partie intégrante du plat. Servir à côté protège une peau croustillante, une panure ou un élément fragile. Le choix dépend de la texture à préserver.",
        "tip": "Une sauce peut valoriser ou ruiner un croustillant."
      },
      {
        "title": "Finition en trois fonctions",
        "body": "Une finition peut apporter fraîcheur, texture ou intensité. Herbes et agrumes apportent de la vivacité. Graines, chapelure ou noix apportent du croquant. Fleur de sel, huile ou condiment apportent une dernière précision.",
        "tip": "Chaque finition doit avoir une fonction claire."
      },
      {
        "title": "Moins mais mieux",
        "body": "Trop de sauce, trop d’herbes, trop d’huile ou trop de décor rendent le plat lourd. Une finition juste se remarque parce qu’elle améliore la bouchée, pas parce qu’elle occupe toute l’assiette.",
        "tip": "La finition doit préciser, pas couvrir."
      }
    ],
    "goFurther": {
      "title": "Saucière",
      "content": "Pour un plat familial, servir une partie de la sauce en saucière peut être plus intelligent que tout mettre en assiette. Cela garde le dressage net et laisse chacun ajuster."
    },
    "quiz": [
      {
        "q": "Tu nappes une peau de poisson croustillante avec beaucoup de sauce. Que risques-tu ?",
        "options": [
          "Ramollir la peau",
          "La rendre plus croustillante",
          "La cuire à nouveau",
          "La rendre plus sèche"
        ],
        "answer": 0,
        "explanation": "Une sauce humide ramollit les éléments croustillants. Il vaut mieux la placer à côté ou dessous."
      },
      {
        "q": "Ta sauce coule partout dans l’assiette. Quel défaut est probable ?",
        "options": [
          "Elle est trop liquide pour ce dressage",
          "Elle est trop chaude uniquement",
          "Elle manque de décoration",
          "Elle contient trop peu d’herbes"
        ],
        "answer": 0,
        "explanation": "Une sauce de dressage doit être nappante pour rester lisible."
      },
      {
        "q": "Une finition utile doit apporter au moins :",
        "options": [
          "Goût, texture, fraîcheur ou précision",
          "Uniquement de la couleur au hasard",
          "Un élément non comestible",
          "Plus de volume sans fonction"
        ],
        "answer": 0,
        "explanation": "Une finition doit améliorer la dégustation, pas seulement remplir l’assiette."
      },
      {
        "q": "Pourquoi servir parfois la sauce à part ?",
        "options": [
          "Pour préserver certaines textures et laisser ajuster",
          "Parce qu’une sauce ne doit jamais toucher un plat",
          "Pour refroidir le plat",
          "Pour cacher son goût"
        ],
        "answer": 0,
        "explanation": "La saucière est utile quand la sauce risque de détremper ou quand chacun peut doser."
      }
    ],
    "linkedRecipes": [
      "assiette-poisson-legumes-sauce"
    ]
  },
  {
    "id": "diagnostiquer-un-plat",
    "moduleId": "correction-improvisation-creation",
    "title": "Diagnostiquer un plat",
    "subtitle": "Nommer le problème avant d’agir",
    "duration": 13,
    "prerequisites": [
      "sauces-finitions-service"
    ],
    "objectives": [
      "Analyser un plat selon goût, texture, cuisson et température",
      "Distinguer défaut réel et préférence personnelle",
      "Éviter les corrections automatiques qui aggravent"
    ],
    "concepts": [
      {
        "title": "Un plat raté n’est pas un seul problème",
        "body": "Dire ? ce n?est pas bon ? ne suffit pas. Il faut identifier ce qui bloque : manque de sel, manque d’acidité, excès de gras, texture molle, cuisson trop poussée, sauce trop liquide, plat froid, amertume, fadeur ou absence de contraste. Chaque défaut demande une réponse différente.",
        "tip": "Nommer le défaut, c’est déjà corriger à moitié."
      },
      {
        "title": "Goût, texture, cuisson, température",
        "body": "Un diagnostic complet regarde quatre axes. Le goût : sel, acide, gras, amertume, umami. La texture : croquant, moelleux, sec, pâteux, granuleux. La cuisson : cru, juste, trop cuit. La température : trop froid, trop chaud, sauce figée, salade tiède.",
        "tip": "Un bon cuisinier goûte avec plus que la langue."
      },
      {
        "title": "Ne pas tout corriger en même temps",
        "body": "Ajouter sel, citron, beurre, sucre et épices en même temps empêche de comprendre ce qui a fonctionné. Il faut corriger par petites touches et goûter entre chaque ajout. La progression est plus lente, mais plus fiable.",
        "tip": "Une correction, un test, puis une décision."
      },
      {
        "title": "Préférence ou défaut",
        "body": "Un plat peut être techniquement correct mais ne pas correspondre à un goût personnel. Trop acidulé pour quelqu’un, pas assez pimenté pour un autre. Il faut distinguer un défaut objectif comme brûlé, cru ou trop salé d’un ajustement de préférence.",
        "tip": "Tout désaccord de goût n’est pas une erreur technique."
      }
    ],
    "goFurther": {
      "title": "La grille 4 questions",
      "content": "Avant de corriger : est-ce assez assaisonné ? La texture est-elle agréable ? La cuisson est-elle juste ? La température de service est-elle bonne ? Cette grille simple résout beaucoup de problèmes."
    },
    "quiz": [
      {
        "q": "Un plat est fade. Quelle démarche est la plus fiable ?",
        "options": [
          "Ajouter une petite quantité de sel, goûter, puis tester acidité ou umami si besoin",
          "Ajouter beaucoup de sel immédiatement",
          "Ajouter sucre, citron, beurre et épices en même temps",
          "Le cuire encore une heure sans goûter"
        ],
        "answer": 0,
        "explanation": "La correction progressive permet d’identifier ce qui manque vraiment."
      },
      {
        "q": "Un plat est bon en goût mais désagréable parce que tout est mou. Quel axe du diagnostic est central ?",
        "options": [
          "La texture",
          "Le sel uniquement",
          "La couleur de l’assiette",
          "Le nom de la recette"
        ],
        "answer": 0,
        "explanation": "Un plat peut être bien assaisonné mais manquer de contraste ou de mâche."
      },
      {
        "q": "Pourquoi ne pas corriger cinq choses à la fois ?",
        "options": [
          "On ne sait plus quelle correction a aidé ou aggravé",
          "Le plat devient toujours froid",
          "Le sel cesse de fonctionner",
          "La sauce disparaît"
        ],
        "answer": 0,
        "explanation": "Une correction isolée permet d’apprendre et de garder le contrôle."
      },
      {
        "q": "Une personne trouve un plat trop citronné, une autre le trouve parfait. Que peux-tu en déduire ?",
        "options": [
          "Il peut s’agir d’une préférence, pas forcément d’un défaut technique",
          "Le plat est forcément brûlé",
          "Le plat est forcément cru",
          "Il faut ajouter beaucoup de sel"
        ],
        "answer": 0,
        "explanation": "Certains équilibres relèvent du goût personnel. Il faut distinguer préférence et erreur technique."
      }
    ],
    "linkedRecipes": [
      "atelier-diagnostic-soupe"
    ]
  },
  {
    "id": "corriger-gout-texture-cuisson",
    "moduleId": "correction-improvisation-creation",
    "title": "Corriger goût, texture et cuisson",
    "subtitle": "Les bons leviers pour sauver un plat",
    "duration": 14,
    "prerequisites": [
      "diagnostiquer-un-plat"
    ],
    "objectives": [
      "Utiliser les leviers de correction adaptés",
      "Savoir ce qui est réversible ou non",
      "Transformer un défaut en autre préparation si nécessaire"
    ],
    "concepts": [
      {
        "title": "Corriger le goût",
        "body": "Un plat fade peut demander sel, acide ou umami. Un plat trop salé demande dilution ou ajout d’éléments non salés. Un plat trop gras demande acidité, herbes ou amertume légère. Un plat trop acide demande gras, douceur ou dilution. Ces leviers ne sont pas interchangeables.",
        "tip": "Chaque déséquilibre a son contrepoids."
      },
      {
        "title": "Corriger la texture",
        "body": "Une sauce trop liquide peut réduire ou être liée. Une sauce trop épaisse peut être détendue. Un élément mou peut recevoir du croquant. Un élément sec peut recevoir sauce ou gras. En revanche, un légume trop cuit ou une pâte trop cuite ne redevient pas croquant ou al dente.",
        "tip": "Certaines textures se corrigent, d’autres se réorientent."
      },
      {
        "title": "Corriger la cuisson",
        "body": "Pas assez cuit se corrige souvent : prolonger, couvrir, finir au four, couper plus petit. Trop cuit se corrige rarement. On peut seulement compenser ou transformer : sauce, effiloché, gratin, soupe, salade, croquettes.",
        "tip": "Sous-cuit se rattrape ; trop cuit se transforme."
      },
      {
        "title": "Transformer au lieu de sauver",
        "body": "Un riz trop collant devient riz sauté ou galettes. Un poisson sec devient rillettes. Des légumes trop cuits deviennent soupe. Un cake sec devient verrine. Cette capacité à changer de destination est une vraie compétence.",
        "tip": "Changer de plat peut être la meilleure correction."
      }
    ],
    "goFurther": {
      "title": "Correction minimale",
      "content": "La meilleure correction est souvent petite : quelques gouttes d’acide, une cuillère d’eau, une noisette de beurre, une pincée de sel, une poignée d’herbes, un élément croquant. Les grosses corrections créent souvent un nouveau défaut."
    },
    "quiz": [
      {
        "q": "Une sauce est trop liquide mais bien assaisonnée. Quelle correction est logique ?",
        "options": [
          "Réduire ou lier sans resaler",
          "Ajouter beaucoup de sel",
          "Ajouter de l’eau",
          "La servir froide"
        ],
        "answer": 0,
        "explanation": "Le problème est la texture, pas le goût. Il faut concentrer ou lier."
      },
      {
        "q": "Un plat est trop salé. Quelle correction est généralement la plus réaliste ?",
        "options": [
          "Diluer ou ajouter un élément non salé",
          "Ajouter du sel pour équilibrer",
          "Faire réduire davantage",
          "Ajouter du poivre uniquement"
        ],
        "answer": 0,
        "explanation": "On ne retire pas facilement le sel. Il faut augmenter la masse non salée ou diluer."
      },
      {
        "q": "Des pâtes trop cuites peuvent-elles redevenir al dente ?",
        "options": [
          "Non, il faut changer d’usage",
          "Oui, en les recuisant",
          "Oui, en ajoutant du sel",
          "Oui, en les rinçant très longtemps"
        ],
        "answer": 0,
        "explanation": "La surcuisson est irréversible. On peut transformer les pâtes en gratin, salade ou poêlée."
      },
      {
        "q": "Un plat trop gras paraît lourd. Que peux-tu tester ?",
        "options": [
          "Acidité, herbes, amertume légère ou élément frais",
          "Plus de gras",
          "Plus de cuisson dans l’huile",
          "Une grande quantité de sucre"
        ],
        "answer": 0,
        "explanation": "L’acidité et la fraîcheur allègent la perception du gras."
      }
    ],
    "linkedRecipes": [
      "rillettes-poisson-sec"
    ]
  },
  {
    "id": "improviser-avec-ce-qu-on-a",
    "moduleId": "correction-improvisation-creation",
    "title": "Improviser avec ce qu’on a",
    "subtitle": "Transformer un frigo en repas cohérent",
    "duration": 13,
    "prerequisites": [
      "corriger-gout-texture-cuisson"
    ],
    "objectives": [
      "Construire un repas à partir d’ingrédients disponibles",
      "Identifier produit principal, base, sauce et finition",
      "Remplacer intelligemment sans casser l’équilibre"
    ],
    "concepts": [
      {
        "title": "Commencer par les contraintes",
        "body": "Improviser commence par regarder ce qui doit être utilisé : légumes fatigués, reste de riz, œufs, fromage, herbes, viande déjà cuite. Ensuite on choisit une direction : poêlée, soupe, salade complète, gratin, bol, pâtes, omelette, tartine ou curry simple.",
        "tip": "L’improvisation part du réel, pas d’une recette idéale."
      },
      {
        "title": "La structure simple",
        "body": "Une assiette improvisée fonctionne souvent avec quatre éléments : une base rassasiante, un produit ou légume principal, une sauce ou liaison, une finition. Exemple : riz + légumes sautés + œuf + sauce soja/citron/herbes. Cette structure évite les plats dispersés.",
        "tip": "Base + principal + sauce + finition."
      },
      {
        "title": "Remplacer par fonction",
        "body": "On ne remplace pas seulement par ingrédient similaire, mais par fonction. Citron, vinaigre ou yaourt peuvent apporter de l’acidité. Parmesan, sauce soja ou champignons apportent de l’umami. Noix, chapelure ou graines apportent du croquant.",
        "tip": "Remplace la fonction, pas seulement le produit."
      },
      {
        "title": "Limiter l’ambition",
        "body": "Improviser ne veut pas dire tout faire. Mieux vaut un plat simple et cohérent qu’une accumulation de restes. Trop d’ingrédients rendent le goût confus et compliquent la cuisson.",
        "tip": "Un bon plat improvisé a peu d’idées, mais claires."
      }
    ],
    "goFurther": {
      "title": "La règle des familles",
      "content": "Pour improviser vite, pense par familles : féculent, légume, protéine, sauce, herbe, croquant. S’il manque une famille, le plat peut sembler incomplet. S’il y en a trop, il devient confus."
    },
    "quiz": [
      {
        "q": "Tu as riz froid, carotte, œuf et sauce soja. Quelle structure de plat est cohérente ?",
        "options": [
          "Riz sauté avec légumes, œuf et assaisonnement soja",
          "Tarte sucrée au riz",
          "Meringue salée",
          "Caramel de carotte"
        ],
        "answer": 0,
        "explanation": "Le riz froid est idéal pour un riz sauté. L’œuf apporte protéine et texture, la sauce soja apporte sel et umami."
      },
      {
        "q": "Tu n’as pas de citron mais tu veux réveiller un plat gras. Que peux-tu utiliser ?",
        "options": [
          "Un vinaigre doux, un yaourt ou un condiment acidulé",
          "Plus d’huile",
          "Du sucre uniquement",
          "De la farine"
        ],
        "answer": 0,
        "explanation": "On remplace ici la fonction acidité, pas forcément l’ingrédient citron."
      },
      {
        "q": "Pourquoi éviter d’ajouter tous les restes du frigo dans un seul plat ?",
        "options": [
          "Le goût devient souvent confus et les cuissons incompatibles",
          "Cela rend toujours le plat cru",
          "Cela empêche le sel d’agir",
          "Cela supprime les textures"
        ],
        "answer": 0,
        "explanation": "L’improvisation doit garder une intention. Trop d’éléments brouillent le résultat."
      },
      {
        "q": "Une assiette improvisée manque de contraste. Quelle famille peut aider ?",
        "options": [
          "Un élément croquant ou frais",
          "Plus de cuisson longue",
          "Plus de féculent uniquement",
          "Un deuxième élément mou"
        ],
        "answer": 0,
        "explanation": "Le croquant ou la fraîcheur donne du relief aux plats improvisés."
      }
    ],
    "linkedRecipes": [
      "bol-improvise-riz-legumes-oeuf"
    ]
  },
  {
    "id": "creer-une-assiette-equilibree",
    "moduleId": "correction-improvisation-creation",
    "title": "Créer une assiette équilibrée",
    "subtitle": "Goût, texture, température et proportion",
    "duration": 13,
    "prerequisites": [
      "improviser-avec-ce-qu-on-a"
    ],
    "objectives": [
      "Composer une assiette complète sans recette",
      "Équilibrer gras, acide, sel, douceur, amertume et umami",
      "Penser proportion et expérience de dégustation"
    ],
    "concepts": [
      {
        "title": "L’équilibre est multidimensionnel",
        "body": "Une assiette équilibrée ne dépend pas seulement du goût. Elle combine saveurs, textures, températures, proportions, couleurs et facilité de dégustation. Un plat peut être bien salé mais trop mou, bien cuit mais trop sec, beau mais froid.",
        "tip": "L’équilibre ne se limite pas à l’assaisonnement."
      },
      {
        "title": "Proportions",
        "body": "Trop de sauce noie. Trop de féculent alourdit. Trop peu de garniture rend le plat pauvre. Trop d’acidité fatigue. L’équilibre se joue aussi en quantité. Une assiette bien pensée donne envie jusqu’à la dernière bouchée.",
        "tip": "La quantité de chaque élément change le goût global."
      },
      {
        "title": "Contraste contrôlé",
        "body": "Un bon contraste rend le plat vivant : chaud/froid, croquant/fondant, gras/acide, doux/amer, riche/frais. Mais trop de contrastes donnent une assiette instable. Il faut choisir un ou deux contrastes dominants.",
        "tip": "Un contraste clair vaut mieux que cinq idées faibles."
      },
      {
        "title": "Dernière bouchée",
        "body": "Un plat réussi reste agréable jusqu’à la fin. Si les premières bouchées sont bonnes mais que le plat devient lourd, il manque peut-être d’acidité, de fraîcheur ou de proportion. Penser la dernière bouchée aide à doser.",
        "tip": "La dernière bouchée juge l’équilibre réel."
      }
    ],
    "goFurther": {
      "title": "Méthode de création",
      "content": "Choisis un produit principal, une cuisson, une base, une sauce, une finition. Puis vérifie : est-ce salé, acide, gras, texturé, chaud/froid correctement, facile à manger ?"
    },
    "quiz": [
      {
        "q": "Un plat est agréable au début mais devient lourd après quelques bouchées. Que manque-t-il probablement ?",
        "options": [
          "Acidité, fraîcheur ou contraste",
          "Plus de gras",
          "Plus de sauce lourde",
          "Une cuisson plus longue"
        ],
        "answer": 0,
        "explanation": "La lourdeur apparaît souvent quand le gras ou le féculent n’est pas équilibré par de la fraîcheur ou de l’acidité."
      },
      {
        "q": "Pourquoi la proportion de sauce est-elle importante ?",
        "options": [
          "Elle peut relier ou noyer le plat",
          "Elle n’a aucun impact",
          "Elle remplace toujours la garniture",
          "Elle empêche la dégustation si elle est chaude"
        ],
        "answer": 0,
        "explanation": "Une sauce bien dosée accompagne. En excès, elle masque les textures et les goûts."
      },
      {
        "q": "Quel contraste est cohérent avec une purée très lisse et un poisson tendre ?",
        "options": [
          "Un croquant ou une finition fraîche",
          "Une deuxième purée lisse",
          "Une sauce encore plus épaisse sans acidité",
          "Un élément brûlé"
        ],
        "answer": 0,
        "explanation": "Une assiette très tendre gagne avec un contraste de texture ou de fraîcheur."
      },
      {
        "q": "Créer une assiette équilibrée commence par :",
        "options": [
          "Définir le produit principal et l’intention",
          "Ajouter toutes les épices disponibles",
          "Choisir une assiette au hasard",
          "Faire la sauce avant de savoir le plat"
        ],
        "answer": 0,
        "explanation": "Le produit principal et l’intention structurent les choix de cuisson, garniture, sauce et finition."
      }
    ],
    "linkedRecipes": []
  },
  {
    "id": "construire-sa-propre-recette",
    "moduleId": "correction-improvisation-creation",
    "title": "Construire sa propre recette",
    "subtitle": "De l’idée au plat reproductible",
    "duration": 14,
    "prerequisites": [
      "creer-une-assiette-equilibree"
    ],
    "objectives": [
      "Transformer une idée de plat en recette claire",
      "Tester, noter et améliorer une préparation",
      "Construire son autonomie culinaire"
    ],
    "concepts": [
      {
        "title": "Une recette est une hypothèse organisée",
        "body": "Créer une recette, ce n’est pas deviner parfaitement du premier coup. C’est formuler une hypothèse : avec ces ingrédients, cette cuisson, cette sauce et cette finition, je cherche tel résultat. Ensuite on teste, on observe et on corrige.",
        "tip": "Une recette personnelle commence par une intention."
      },
      {
        "title": "Écrire pour reproduire",
        "body": "Si une création réussit mais que rien n’est noté, elle est difficile à refaire. Il faut noter les quantités clés, les temps, les signes observés, les corrections et le résultat. Le journal de cuisine devient un outil de progression.",
        "tip": "Ce qui n’est pas noté est difficile à améliorer."
      },
      {
        "title": "Changer une variable à la fois",
        "body": "Pour améliorer une recette, il faut éviter de tout modifier d’un coup. Si tu changes la cuisson, la sauce, la taille de coupe et l’assaisonnement en même temps, tu ne sais pas ce qui a amélioré le plat. Une variable à la fois permet d’apprendre.",
        "tip": "Améliorer, c’est tester proprement."
      },
      {
        "title": "Créer une bibliothèque personnelle",
        "body": "Avec le temps, tu construis des bases réutilisables : une vinaigrette, une sauce tomate, une pâte à tarte, une cuisson de riz, une méthode pour poisson, un assaisonnement de légumes. Ces briques deviennent ton langage culinaire.",
        "tip": "L’autonomie vient des bases que tu sais recombiner."
      }
    ],
    "goFurther": {
      "title": "Format de note utile",
      "content": "Note : intention du plat, ingrédients, étapes clés, signes de cuisson, correction faite, résultat, ce que tu changerais la prochaine fois. C’est plus utile qu’une simple note de goût."
    },
    "quiz": [
      {
        "q": "Tu modifies une recette en changeant quatre choses à la fois. Quel problème cela crée ?",
        "options": [
          "Tu ne sais pas quelle modification a vraiment amélioré ou dégradé le résultat",
          "La recette devient toujours meilleure",
          "Le plat ne peut plus cuire",
          "Le sel disparaît"
        ],
        "answer": 0,
        "explanation": "Pour apprendre, il faut isoler les variables. Sinon l’analyse devient floue."
      },
      {
        "q": "Pourquoi tenir un journal de cuisine ?",
        "options": [
          "Pour reproduire, comparer et améliorer ses essais",
          "Pour remplacer le goût",
          "Pour éviter de cuisiner",
          "Pour suivre seulement les calories"
        ],
        "answer": 0,
        "explanation": "Le journal transforme une expérience ponctuelle en apprentissage durable."
      },
      {
        "q": "Une recette personnelle doit commencer par :",
        "options": [
          "Une intention de résultat",
          "Une liste aléatoire d’ingrédients",
          "Une décoration imposée",
          "Une sauce choisie sans plat"
        ],
        "answer": 0,
        "explanation": "L’intention guide les choix de technique, de goût et de texture."
      },
      {
        "q": "Que devient une base maîtrisée comme une vinaigrette ou une sauce tomate ?",
        "options": [
          "Une brique réutilisable pour créer d’autres plats",
          "Une recette à ne jamais modifier",
          "Un élément inutile dès qu’on progresse",
          "Un simple exercice sans usage"
        ],
        "answer": 0,
        "explanation": "Les bases maîtrisées permettent de recombiner et d’improviser avec plus de sécurité."
      }
    ],
    "linkedRecipes": [
      "atelier-creation-recette"
    ]
  }
];

var RECIPES = [
  {
    "id": "oeufs-brouilles-cremeux",
    "title": "Œufs brouillés crémeux",
    "family": "œufs",
    "difficulty": 1,
    "timePrep": 5,
    "timeCook": 5,
    "servings": 1,
    "skills": [
      "bases-cuisson",
      "chaleur-douce",
      "cuisson-residuelle",
      "assaisonnement"
    ],
    "objectives": [
      "Utiliser une chaleur douce pour contrôler la coagulation",
      "Retirer les œufs avant surcuisson",
      "Obtenir une texture crémeuse sans crème obligatoire"
    ],
    "ingredients": [
      {
        "qty": "3",
        "unit": "",
        "item": "œufs",
        "note": "frais"
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": "froid, en petits morceaux"
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel fin",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "poivre",
        "note": "facultatif"
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "ciboulette",
        "note": "facultatif, ajoutée à la fin"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer avant de chauffer",
        "action": "Casser les œufs dans un bol. Ajouter une pincée de sel. Battre juste assez pour mélanger blanc et jaune. Préparer une spatule et une assiette.",
        "why": "La cuisson est courte. Tout doit être prêt avant d’allumer le feu pour éviter la surcuisson.",
        "mistake": "Chercher l’assiette pendant la cuisson → œufs qui continuent de coaguler et deviennent secs.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Démarrer doucement",
        "action": "Mettre les œufs et le beurre dans une petite casserole ou poêle froide. Chauffer à feu doux en remuant constamment avec la spatule.",
        "why": "Le départ doux donne du contrôle et permet aux œufs de coaguler progressivement.",
        "mistake": "Feu fort dès le départ → gros morceaux secs et fond accroché.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Contrôler la texture",
        "action": "Quand les œufs épaississent et deviennent crémeux, retirer du feu quelques secondes en continuant de remuer. Remettre brièvement si nécessaire.",
        "why": "Alterner feu et hors-feu limite l’excès de chaleur. Les œufs continuent de cuire avec la chaleur accumulée.",
        "mistake": "Attendre une texture parfaite sur le feu → texture trop ferme dans l’assiette.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Arrêter avant le point final",
        "action": "Verser dans l’assiette quand les œufs sont encore légèrement brillants et souples. Ajouter poivre et ciboulette.",
        "why": "La cuisson résiduelle termine la prise. La brillance indique qu’il reste de l’humidité.",
        "mistake": "Servir quand les œufs sont mats et très fermes → œufs secs.",
        "timer": null
      }
    ],
    "tips": [
      "Une petite noix de beurre froid ajoutée hors du feu peut ralentir la cuisson et rendre les œufs plus brillants.",
      "Pour une version plus riche, ajoute une cuillère de crème fraîche hors du feu.",
      "La bonne texture doit pouvoir se tenir à la cuillère sans devenir granuleuse."
    ]
  },
  {
    "id": "poulet-moelleux-legumes-rotis",
    "title": "Poulet moelleux et légumes rôtis",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 30,
    "servings": 2,
    "skills": [
      "bases-cuisson",
      "chaleur-forte-douce",
      "repos",
      "cuisson-four"
    ],
    "objectives": [
      "Combiner saisie et cuisson douce",
      "Utiliser le repos pour préserver le jus",
      "Lire les signes de cuisson des légumes et du poulet"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "blancs de poulet",
        "note": "épaisseur régulière"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": "en bâtonnets fins"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "courgette",
        "note": "en demi-rondelles épaisses"
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "écrasée"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préchauffer et préparer",
        "action": "Préchauffer le four à 200°C. Tailler les légumes régulièrement. Les mélanger avec 1 c. à soupe d’huile, sel et poivre.",
        "why": "Le four chaud lance la coloration. Des légumes réguliers cuisent ensemble.",
        "mistake": "Enfourner dans un four froid → légumes mous avant coloration.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Rôtir les légumes",
        "action": "Étaler les légumes en une seule couche sur une plaque. Enfourner 25 à 30 minutes, jusqu’à légère coloration.",
        "why": "L’espace laisse l’eau s’évaporer. Les légumes rôtissent au lieu de cuire à la vapeur.",
        "mistake": "Plaque trop remplie → légumes humides, pâles et mous.",
        "timer": 25
      },
      {
        "id": 3,
        "title": "Saisir le poulet",
        "action": "Sécher le poulet, saler, poivrer. Chauffer une poêle à feu moyen-fort avec 1 c. à soupe d’huile. Saisir 2 minutes par face.",
        "why": "La saisie crée une surface dorée et des sucs sans cuire totalement l’intérieur.",
        "mistake": "Poulet humide ou poêle froide → surface pâle et jus qui sort.",
        "timer": 4
      },
      {
        "id": 4,
        "title": "Finir doucement",
        "action": "Baisser le feu. Ajouter beurre et ail. Couvrir et cuire 5 à 7 minutes selon l’épaisseur.",
        "why": "La chaleur douce termine la cuisson à cœur sans sécher l’extérieur.",
        "mistake": "Rester à feu fort → extérieur sec avant centre cuit.",
        "timer": 6
      },
      {
        "id": 5,
        "title": "Laisser reposer",
        "action": "Retirer le poulet sur une assiette. Laisser reposer 5 minutes avant de couper. Servir avec les légumes rôtis.",
        "why": "Le repos limite la perte de jus à la découpe.",
        "mistake": "Couper immédiatement → jus dans l’assiette, viande plus sèche.",
        "timer": 5
      }
    ],
    "tips": [
      "Si les blancs sont très épais, aplatis-les légèrement avant cuisson.",
      "Un filet de citron au service réveille le poulet et équilibre le beurre.",
      "Pour vérifier sans thermomètre, coupe seulement un petit point sur le côté le plus épais si nécessaire."
    ]
  },
  {
    "id": "haricots-verts-oeuf-poche",
    "title": "Haricots verts croquants et œuf poché",
    "family": "œufs",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "cuisson-anglaise",
      "pochage",
      "assaisonnement",
      "eau-vapeur-pochage"
    ],
    "objectives": [
      "Cuire des légumes verts à l’anglaise",
      "Pocher un œuf dans une eau frémissante",
      "Associer cuisson douce et finition assaisonnée"
    ],
    "ingredients": [
      {
        "qty": "300",
        "unit": "g",
        "item": "haricots verts",
        "note": "équeutés"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "œufs",
        "note": "extra frais si possible"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "vinaigre blanc",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer deux eaux",
        "action": "Porter une grande casserole d’eau salée à ébullition pour les haricots. Préparer une autre casserole d’eau frémissante avec le vinaigre pour les œufs.",
        "why": "Les haricots demandent une eau bouillante. Les œufs demandent une eau plus calme.",
        "mistake": "Utiliser une eau à gros bouillons pour les œufs → blanc dispersé et forme abîmée.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire les haricots",
        "action": "Plonger les haricots dans l’eau bouillante salée. Cuire 4 à 5 minutes, puis goûter.",
        "why": "L’eau salée assaisonne pendant la cuisson. Goûter permet d’arrêter au bon croquant.",
        "mistake": "Suivre le temps sans goûter → haricots trop fermes ou trop mous selon leur taille.",
        "timer": 5
      },
      {
        "id": 3,
        "title": "Stopper la cuisson",
        "action": "Égoutter les haricots et les refroidir sous eau froide ou dans un bain glacé. Égoutter soigneusement.",
        "why": "Le froid stoppe la cuisson et garde une texture plus croquante.",
        "mistake": "Laisser les haricots chauds dans la passoire → cuisson qui continue, texture molle.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Pocher les œufs",
        "action": "Casser chaque œuf dans un petit bol. Verser doucement dans l’eau frémissante. Cuire 3 minutes, puis retirer avec une écumoire.",
        "why": "Le bol permet de déposer l’œuf sans le casser. Le frémissement cuit le blanc sans durcir le jaune trop vite.",
        "mistake": "Casser directement dans l’eau bouillante → coquille possible, blanc dispersé, jaune trop cuit.",
        "timer": 3
      },
      {
        "id": 5,
        "title": "Assaisonner et servir",
        "action": "Mélanger les haricots avec huile d’olive, citron, sel et poivre. Déposer les œufs dessus et servir.",
        "why": "La finition apporte gras, acidité et assaisonnement à une cuisson douce.",
        "mistake": "Assaisonner sans goûter → plat trop acide ou encore fade.",
        "timer": null
      }
    ],
    "tips": [
      "Plus les œufs sont frais, plus le blanc reste groupé.",
      "Les haricots doivent être bien égouttés pour que l’assaisonnement accroche.",
      "Pour un plat plus complet, ajoute des pommes de terre vapeur ou des croûtons."
    ]
  },
  {
    "id": "poisson-vapeur-citron-herbes",
    "title": "Poisson vapeur citron-herbes",
    "family": "poisson",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "vapeur",
      "cuisson-douce",
      "assaisonnement",
      "poisson"
    ],
    "objectives": [
      "Cuire un poisson doucement sans le dessécher",
      "Lire une chair nacrée et juste cuite",
      "Utiliser la finition pour donner du goût"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "filets de poisson blanc",
        "note": "cabillaud, lieu, merlu"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "citron jaune",
        "note": "zeste + jus"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "persil, aneth ou ciboulette"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le poisson",
        "action": "Sécher les filets. Les saler légèrement. Préparer le zeste, le jus de citron, l’huile et les herbes.",
        "why": "Le poisson cuit vite. La finition doit être prête avant la sortie vapeur.",
        "mistake": "Préparer la finition après cuisson → poisson qui attend et continue à cuire.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Installer la vapeur",
        "action": "Porter un fond d’eau à frémissement dans une casserole. Poser le panier vapeur sans que l’eau touche le poisson.",
        "why": "La vapeur doit cuire, pas l’eau bouillante. Le poisson ne doit pas baigner.",
        "mistake": "Eau en contact direct → poisson poché involontairement, texture plus fragile.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Cuire couvert",
        "action": "Déposer les filets dans le panier. Couvrir et cuire 6 à 8 minutes selon l’épaisseur.",
        "why": "Le couvercle garde la vapeur autour du poisson. La chair doit devenir opaque et se détacher sans sécher.",
        "mistake": "Ouvrir toutes les 30 secondes → perte de vapeur et cuisson irrégulière.",
        "timer": 7
      },
      {
        "id": 4,
        "title": "Finir hors cuisson",
        "action": "Sortir délicatement le poisson. Ajouter huile d’olive, zeste, quelques gouttes de citron, poivre et herbes.",
        "why": "La vapeur cuit proprement mais apporte peu de goût. La finition donne relief et parfum.",
        "mistake": "Noyer le poisson sous le citron → acidité agressive qui masque la chair.",
        "timer": null
      }
    ],
    "tips": [
      "Un poisson trop cuit devient sec et se casse en miettes dures.",
      "Pour une vapeur plus parfumée, ajoute des tiges d’herbes ou une rondelle de citron dans l’eau.",
      "Les herbes se mettent après cuisson pour garder leur couleur."
    ]
  },
  {
    "id": "pommes-terre-vapeur-herbes",
    "title": "Pommes de terre vapeur aux herbes",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 20,
    "servings": 2,
    "skills": [
      "vapeur",
      "cuisson-douce",
      "assaisonnement"
    ],
    "objectives": [
      "Cuire des pommes de terre régulièrement à la vapeur",
      "Vérifier la texture avec un critère simple",
      "Assaisonner une cuisson douce sans l’alourdir"
    ],
    "ingredients": [
      {
        "qty": "500",
        "unit": "g",
        "item": "pommes de terre",
        "note": "petites ou coupées en morceaux réguliers"
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre",
        "note": "ou huile d’olive"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "persil, ciboulette"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer des tailles régulières",
        "action": "Laver les pommes de terre. Couper les plus grosses pour obtenir des morceaux proches en taille.",
        "why": "Des tailles proches cuisent à la même vitesse.",
        "mistake": "Mélanger petites entières et grosses entières → cuisson inégale.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire à la vapeur",
        "action": "Placer dans un panier vapeur au-dessus d’une eau frémissante. Couvrir et cuire 18 à 22 minutes.",
        "why": "La vapeur cuit doucement sans gorger les pommes de terre d’eau.",
        "mistake": "Ouvrir souvent → perte de vapeur, temps rallongé.",
        "timer": 20
      },
      {
        "id": 3,
        "title": "Tester la cuisson",
        "action": "Piquer avec la pointe d’un couteau. Elle doit entrer sans résistance jusqu’au centre.",
        "why": "La texture est plus fiable que le temps seul.",
        "mistake": "Arrêter quand l’extérieur semble tendre mais le centre résiste → pommes de terre dures au cœur.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Assaisonner chaud",
        "action": "Mélanger encore chaud avec beurre, sel, poivre et herbes. Servir immédiatement.",
        "why": "La chaleur aide le beurre à enrober. Les herbes apportent de la fraîcheur.",
        "mistake": "Ajouter les herbes pendant toute la cuisson → parfum affaibli, couleur terne.",
        "timer": null
      }
    ],
    "tips": [
      "Les pommes de terre vapeur sont un excellent support pour travailler le sel : goûte avant et après assaisonnement.",
      "Pour plus de relief, ajoute quelques gouttes de vinaigre ou de citron."
    ]
  },
  {
    "id": "cabillaud-poche-court-bouillon",
    "title": "Cabillaud poché au court-bouillon",
    "family": "poisson",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "pochage",
      "poisson",
      "cuisson-douce",
      "assaisonnement"
    ],
    "objectives": [
      "Pocher un poisson sans le casser",
      "Parfumer un liquide de cuisson",
      "Sortir et égoutter un aliment fragile"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "dos de cabillaud",
        "note": "150 à 180 g chacun"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "carotte",
        "note": "en fines rondelles"
      },
      {
        "qty": "1/2",
        "unit": "",
        "item": "oignon",
        "note": "émincé"
      },
      {
        "qty": "1",
        "unit": "branche",
        "item": "thym",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "feuille",
        "item": "laurier",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "50",
        "unit": "cl",
        "item": "eau",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le liquide",
        "action": "Mettre eau, carotte, oignon, thym, laurier, citron, sel et poivre dans une casserole large. Porter à frémissement 8 minutes.",
        "why": "Le liquide doit prendre du goût avant de recevoir le poisson.",
        "mistake": "Pocher dans une eau non assaisonnée → poisson fade.",
        "timer": 8
      },
      {
        "id": 2,
        "title": "Baisser l’agitation",
        "action": "Réduire le feu pour obtenir un liquide presque calme, avec seulement quelques petites bulles.",
        "why": "Le cabillaud est fragile. Une eau trop agitée casse les feuillets.",
        "mistake": "Gros bouillons → poisson abîmé et cuisson trop brutale.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Pocher le poisson",
        "action": "Déposer les dos de cabillaud dans le liquide. Cuire 6 à 8 minutes selon l’épaisseur.",
        "why": "La chaleur douce cuit la chair sans la dessécher. Le poisson doit devenir opaque et se détacher légèrement.",
        "mistake": "Prolonger jusqu’à chair très ferme → poisson sec.",
        "timer": 7
      },
      {
        "id": 4,
        "title": "Sortir sans casser",
        "action": "Retirer avec une écumoire ou une spatule large. Égoutter sans presser. Servir avec un filet d’huile ou une sauce légère.",
        "why": "Après pochage, la chair est tendre et fragile. La sortie doit respecter cette texture.",
        "mistake": "Attraper avec une pince trop serrée → poisson cassé.",
        "timer": null
      }
    ],
    "tips": [
      "Le liquide de pochage peut être filtré puis réduit pour devenir une base de sauce.",
      "Une rondelle de citron et un filet d’huile d’olive suffisent si la cuisson est juste."
    ]
  },
  {
    "id": "steak-beurre-thym",
    "title": "Steak beurre-thym",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "cuisson-poele",
      "saisie",
      "maillard",
      "basting"
    ],
    "objectives": [
      "Obtenir une croûte dorée sans surcuire",
      "Utiliser huile puis beurre pour parfumer",
      "Laisser reposer avant découpe"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "pavés de bœuf",
        "note": "180 à 220 g chacun, 2 à 3 cm d’épaisseur"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile neutre",
        "note": ""
      },
      {
        "qty": "35",
        "unit": "g",
        "item": "beurre",
        "note": "froid, en morceaux"
      },
      {
        "qty": "2",
        "unit": "gousses",
        "item": "ail",
        "note": "en chemise, écrasées"
      },
      {
        "qty": "3",
        "unit": "branches",
        "item": "thym",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Tempérer et sécher",
        "action": "Sortir les steaks 20 minutes avant cuisson. Sécher soigneusement avec du papier absorbant. Saler juste avant cuisson.",
        "why": "Une surface sèche colore mieux. Une viande moins froide cuit plus régulièrement.",
        "mistake": "Viande humide sortie du frigo directement → surface grise, cuisson moins régulière.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Saisir sans bouger",
        "action": "Chauffer la poêle à feu fort. Ajouter l’huile. Poser les steaks et ne pas bouger pendant 2 minutes.",
        "why": "Le contact fixe avec la poêle chaude crée la croûte.",
        "mistake": "Déplacer trop tôt → croûte arrachée, coloration irrégulière.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Retourner et baisser",
        "action": "Retourner les steaks. Cuire 1 minute, puis baisser à feu moyen.",
        "why": "La deuxième face colore plus vite car la poêle est déjà très chaude.",
        "mistake": "Rester à feu très fort jusqu’à la fin → extérieur brûlé, cœur mal contrôlé.",
        "timer": 1
      },
      {
        "id": 4,
        "title": "Ajouter beurre et aromates",
        "action": "Ajouter beurre, ail et thym. Quand le beurre mousse, incliner la poêle et arroser les steaks pendant 1 à 2 minutes.",
        "why": "Le beurre parfume la surface et transporte les arômes de l’ail et du thym.",
        "mistake": "Ajouter le beurre dès le début à feu très fort → beurre brûlé et amer.",
        "timer": 2
      },
      {
        "id": 5,
        "title": "Laisser reposer",
        "action": "Retirer les steaks sur une assiette. Laisser reposer 5 minutes avant de servir.",
        "why": "Le repos limite la perte de jus à la découpe.",
        "mistake": "Couper immédiatement → jus dans l’assiette, viande moins juteuse.",
        "timer": 5
      }
    ],
    "tips": [
      "Pour une pièce plus épaisse, saisis puis finis quelques minutes au four doux.",
      "Le beurre doit sentir la noisette, pas le brûlé.",
      "Poivre plutôt après cuisson si tu veux préserver ses arômes."
    ]
  },
  {
    "id": "champignons-sautes",
    "title": "Champignons sautés bien dorés",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "cuisson-poele",
      "sauter",
      "evaporation",
      "assaisonnement"
    ],
    "objectives": [
      "Faire évaporer l’eau avant coloration",
      "Ne pas surcharger la poêle",
      "Finir avec ail, herbes et acidité sans brûler"
    ],
    "ingredients": [
      {
        "qty": "400",
        "unit": "g",
        "item": "champignons de Paris",
        "note": "ou mélange de champignons"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile neutre ou olive",
        "note": ""
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "hachée finement"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "persil",
        "note": "haché"
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": "facultatif"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer sans détremper",
        "action": "Brosser ou essuyer les champignons. Les couper en quartiers ou lamelles épaisses.",
        "why": "Les champignons absorbent facilement l’eau. Moins ils sont mouillés, mieux ils colorent.",
        "mistake": "Les laver longuement puis les cuire humides → poêle pleine d’eau.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Chauffer la poêle",
        "action": "Chauffer une grande poêle à feu moyen-fort. Ajouter l’huile, puis les champignons en une couche.",
        "why": "La grande surface aide l’eau à s’évaporer rapidement.",
        "mistake": "Poêle petite et pleine → champignons vapeur, gris et mous.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Laisser évaporer",
        "action": "Ne pas remuer pendant 2 minutes. Mélanger ensuite et cuire jusqu’à disparition de l’eau visible.",
        "why": "Le contact fixe aide à colorer. L’eau doit partir avant que les champignons dorent vraiment.",
        "mistake": "Remuer sans arrêt dès le début → coloration retardée.",
        "timer": 5
      },
      {
        "id": 4,
        "title": "Finir au beurre",
        "action": "Ajouter le beurre, puis l’ail. Cuire 1 minute sans brûler l’ail.",
        "why": "Le beurre apporte du goût quand l’eau est partie. L’ail arrive tard pour éviter l’amertume.",
        "mistake": "Ajouter l’ail au début → ail brûlé avant champignons dorés.",
        "timer": 1
      },
      {
        "id": 5,
        "title": "Assaisonner et servir",
        "action": "Saler, poivrer, ajouter persil et un trait de citron hors du feu. Servir chaud.",
        "why": "Le citron réveille le goût et les herbes gardent leur fraîcheur hors feu.",
        "mistake": "Persil ajouté trop tôt → couleur terne et parfum affaibli.",
        "timer": null
      }
    ],
    "tips": [
      "Si les champignons rendent trop d’eau, continue sans couvrir jusqu’à évaporation.",
      "Pour une grande quantité, cuis en deux fois.",
      "Une touche de vinaigre ou citron équilibre le beurre et le côté terreux."
    ]
  },
  {
    "id": "saumon-cote-peau",
    "title": "Saumon côté peau croustillant",
    "family": "poisson",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "cuisson-poele",
      "poisson",
      "saisie",
      "cuisson-residuelle"
    ],
    "objectives": [
      "Sécher la peau pour la rendre croustillante",
      "Cuire majoritairement côté peau",
      "Finir doucement sans dessécher la chair"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "pavés de saumon",
        "note": "avec peau"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile neutre",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "g",
        "item": "beurre",
        "note": "facultatif, finition"
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher la peau",
        "action": "Éponger soigneusement la peau du saumon avec du papier absorbant. Saler légèrement.",
        "why": "Une peau sèche accroche moins et croustille mieux.",
        "mistake": "Peau humide → vapeur, peau molle, risque d’accroche.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Démarrer côté peau",
        "action": "Chauffer une poêle à feu moyen-fort avec l’huile. Poser le saumon côté peau et presser légèrement 10 secondes.",
        "why": "La pression garde la peau bien au contact de la poêle au début.",
        "mistake": "Ne pas presser → peau qui se rétracte, contact irrégulier.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Cuire majoritairement côté peau",
        "action": "Cuire 5 à 6 minutes côté peau, jusqu’à voir la cuisson monter sur les côtés du pavé.",
        "why": "La peau protège la chair et permet une cuisson progressive.",
        "mistake": "Retourner trop souvent → chair cassée, peau moins croustillante.",
        "timer": 6
      },
      {
        "id": 4,
        "title": "Finir brièvement",
        "action": "Retourner 30 à 60 secondes côté chair, puis retirer. Ajouter citron et poivre au service.",
        "why": "La chair du saumon sèche vite. La cuisson résiduelle termine le centre.",
        "mistake": "Cuire longtemps côté chair → saumon sec et albumine blanche en surface.",
        "timer": 1
      }
    ],
    "tips": [
      "Si la peau colle, attends encore : elle se détache souvent quand elle est assez croustillante.",
      "Un saumon juste cuit reste légèrement nacré au centre.",
      "Évite de noyer la peau avec du citron avant service, elle perdrait son croustillant."
    ]
  },
  {
    "id": "omelette-herbes-organisee",
    "title": "Omelette aux herbes bien organisée",
    "family": "œufs",
    "difficulty": 1,
    "timePrep": 8,
    "timeCook": 4,
    "servings": 1,
    "skills": [
      "organisation",
      "mise-en-place",
      "cuisson-douce",
      "oeufs"
    ],
    "objectives": [
      "Organiser tous les éléments avant une cuisson rapide",
      "Cuire des œufs sans les dessécher",
      "Ajouter les herbes au bon moment pour garder leur fraîcheur"
    ],
    "ingredients": [
      {
        "qty": "3",
        "unit": "",
        "item": "œufs",
        "note": "frais"
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": "froid ou demi-sel selon goût"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "ciboulette, persil, cerfeuil"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "poivre",
        "note": "fraîchement moulu"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le poste",
        "action": "Sortir les œufs, le beurre, les herbes, un bol, une fourchette, une poêle, une spatule et une assiette. Poser l’assiette près de la zone de cuisson.",
        "why": "L’omelette cuit en quelques minutes. Si tu cherches l’assiette ou la spatule pendant la cuisson, les œufs continuent de coaguler.",
        "mistake": "Chercher le matériel après avoir versé les œufs → omelette trop cuite avant le dressage.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Préparer les herbes",
        "action": "Laver les herbes, les sécher soigneusement, puis les ciseler finement. Les garder de côté.",
        "why": "Les herbes sèches se coupent plus net et n’apportent pas d’eau inutile dans les œufs.",
        "mistake": "Ajouter des herbes mouillées → omelette plus aqueuse et goût dilué.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Battre les œufs",
        "action": "Casser les œufs dans le bol. Ajouter une pincée de sel et du poivre. Battre jusqu’à obtenir un mélange homogène, sans chercher à faire mousser.",
        "why": "Un mélange homogène donne une coagulation plus régulière. Trop battre incorpore de l’air sans intérêt pour une omelette simple.",
        "mistake": "Battre trop peu → blanc et jaune cuisent séparément, texture irrégulière.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire doucement",
        "action": "Chauffer la poêle à feu moyen. Ajouter le beurre. Quand il mousse sans brunir, verser les œufs. Remuer doucement avec la spatule pendant 30 secondes.",
        "why": "Une chaleur modérée fait coaguler les œufs sans les sécher. Le beurre mousseux indique une chaleur suffisante mais pas agressive.",
        "mistake": "Feu trop fort → œufs secs en surface avant d’être moelleux au centre.",
        "timer": 1
      },
      {
        "id": 5,
        "title": "Finir et servir",
        "action": "Ajouter les herbes quand les œufs sont encore légèrement baveux. Replier l’omelette et la glisser immédiatement dans l’assiette.",
        "why": "La chaleur résiduelle termine la cuisson dans l’assiette. Les herbes ajoutées à la fin gardent leur parfum.",
        "mistake": "Attendre que l’omelette soit totalement prise dans la poêle → texture sèche à la dégustation.",
        "timer": null
      }
    ],
    "tips": [
      "Pour une omelette très moelleuse, retire la poêle du feu dès que les œufs sont presque pris.",
      "Si le beurre brunit avant d’ajouter les œufs, baisse le feu ou recommence : le goût sera plus amer.",
      "Les herbes fragiles se mettent à la fin ; les garnitures cuites, comme des champignons, se préparent avant."
    ]
  },
  {
    "id": "pates-sauce-minute",
    "title": "Pâtes sauce minute ail, citron, parmesan",
    "family": "pâtes",
    "difficulty": 1,
    "timePrep": 8,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "organisation",
      "timing",
      "assaisonnement",
      "cuisson-eau"
    ],
    "objectives": [
      "Synchroniser une sauce rapide avec la cuisson des pâtes",
      "Utiliser l’eau de cuisson pour lier une sauce",
      "Servir un plat minute sans laisser les pâtes attendre"
    ],
    "ingredients": [
      {
        "qty": "200",
        "unit": "g",
        "item": "spaghetti ou linguine",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "finement hachée"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "citron jaune",
        "note": "zeste + un filet de jus"
      },
      {
        "qty": "40",
        "unit": "g",
        "item": "parmesan",
        "note": "râpé finement"
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin",
        "note": "pour l’eau de cuisson"
      },
      {
        "qty": "",
        "unit": "",
        "item": "poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer avant cuisson",
        "action": "Râper le parmesan, zester le citron, hacher l’ail et préparer une louche pour récupérer l’eau des pâtes.",
        "why": "La sauce se fait pendant les dernières minutes de cuisson. Tous les éléments doivent être prêts avant d’égoutter.",
        "mistake": "Râper le parmesan après égouttage → pâtes qui collent et refroidissent.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire les pâtes",
        "action": "Porter une grande casserole d’eau salée à ébullition. Ajouter les pâtes et cuire 1 minute de moins que le temps indiqué.",
        "why": "Les pâtes termineront dans la sauce. Les sortir légèrement fermes évite la surcuisson.",
        "mistake": "Cuire les pâtes complètement avant la sauce → texture molle après mélange final.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Lancer la sauce au bon moment",
        "action": "Deux minutes avant la fin des pâtes, chauffer l’huile à feu doux dans une grande poêle. Ajouter l’ail et cuire sans coloration pendant 30 secondes.",
        "why": "L’ail doit parfumer l’huile sans brûler. Le feu doux protège ses arômes.",
        "mistake": "Ail brun ou noir → goût amer dans tout le plat.",
        "timer": 1
      },
      {
        "id": 4,
        "title": "Lier avec l’eau de cuisson",
        "action": "Prélever une louche d’eau de cuisson. Égoutter les pâtes, les mettre dans la poêle, ajouter un peu d’eau de cuisson et mélanger.",
        "why": "L’amidon de l’eau de cuisson aide à créer une sauce légère qui enrobe les pâtes.",
        "mistake": "Jeter toute l’eau de cuisson → sauce plus sèche et moins liée.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Finir hors du feu",
        "action": "Hors du feu, ajouter parmesan, zeste de citron, poivre et un filet de jus de citron. Mélanger jusqu’à ce que les pâtes soient brillantes.",
        "why": "Le parmesan fond mieux hors du feu et le citron garde sa fraîcheur.",
        "mistake": "Ajouter le parmesan sur feu fort → fromage qui accroche et texture granuleuse.",
        "timer": null
      }
    ],
    "tips": [
      "Si les pâtes semblent sèches, ajoute une cuillère d’eau de cuisson et mélange de nouveau.",
      "Le citron doit réveiller le plat, pas le dominer : ajoute le jus progressivement.",
      "Cette recette teste surtout le timing : la sauce doit attendre les pâtes, pas l’inverse."
    ]
  },
  {
    "id": "salade-composee-methode",
    "title": "Salade composée méthodique",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 20,
    "timeCook": 0,
    "servings": 2,
    "skills": [
      "organisation",
      "decoupe",
      "assaisonnement",
      "emulsion"
    ],
    "objectives": [
      "Organiser une préparation froide sans détremper les ingrédients",
      "Tailler les légumes selon leur texture",
      "Assaisonner au dernier moment pour préserver la fraîcheur"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "laitue ou mesclun",
        "note": "lavé et bien essoré"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "carotte",
        "note": "en julienne ou râpée gros"
      },
      {
        "qty": "1/2",
        "unit": "",
        "item": "concombre",
        "note": "en demi-lunes fines"
      },
      {
        "qty": "8",
        "unit": "",
        "item": "tomates cerises",
        "note": "coupées en deux"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "vinaigre",
        "note": "vin, cidre ou xérès"
      },
      {
        "qty": "3",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "moutarde",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Organiser les zones",
        "action": "Préparer une planche pour les légumes, un saladier pour les éléments prêts, un bol pour la vinaigrette et un bol à déchets.",
        "why": "Une salade demande peu de cuisson, mais beaucoup de manipulation. Un poste clair évite de mélanger propre, sale et déchets.",
        "mistake": "Couper tous les légumes au milieu des épluchures → poste encombré et risque d’oublier un élément.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Préparer les légumes secs d’abord",
        "action": "Tailler la carotte, le concombre et les tomates. Garder la salade bien essorée à part.",
        "why": "Les légumes fermes supportent l’attente. La salade, elle, doit rester sèche pour que la vinaigrette accroche.",
        "mistake": "Salade mal essorée → vinaigrette diluée qui glisse au fond du saladier.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Faire la vinaigrette",
        "action": "Mélanger vinaigre, moutarde, sel et poivre. Ajouter l’huile en filet en fouettant jusqu’à obtenir une sauce liée.",
        "why": "Le sel se dissout mieux dans le vinaigre. La moutarde aide l’huile et le vinaigre à rester liés.",
        "mistake": "Verser l’huile d’un coup → vinaigrette séparée et moins nappante.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Assembler au dernier moment",
        "action": "Mettre salade et légumes dans le saladier. Ajouter la vinaigrette juste avant de servir. Mélanger délicatement.",
        "why": "Le sel et l’acide font tomber les feuilles. Assaisonner au dernier moment garde du volume et du croquant.",
        "mistake": "Assaisonner 20 minutes avant → salade molle et détrempée.",
        "timer": null
      }
    ],
    "tips": [
      "Pour une salade plus complète, ajoute œuf dur, fromage, croûtons ou légumineuses.",
      "Une salade réussie dépend autant de l’essorage que de la vinaigrette.",
      "Pour une meilleure texture, mélange feuilles tendres et éléments croquants."
    ]
  },
  {
    "id": "legumes-sautes-maitrises",
    "title": "Légumes sautés maîtrisés",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "materiel-feu",
      "decoupe",
      "cuisson-poele",
      "securite"
    ],
    "objectives": [
      "Choisir une poêle adaptée à une cuisson rapide",
      "Tailler les légumes pour une cuisson homogène",
      "Sauter sans détremper ni brûler"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "courgette",
        "note": "moyenne"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "carotte",
        "note": "moyenne"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "poivron",
        "note": "petit"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "jus de citron",
        "note": "optionnel"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le poste et la poêle",
        "action": "Sortir une grande poêle, une spatule, une planche, un couteau et une assiette de service. Placer l’assiette près de la zone de cuisson.",
        "why": "Les légumes sautés cuisent vite. Quitter la poêle pour chercher du matériel peut faire passer de doré à brûlé.",
        "mistake": "Chercher l’assiette à la fin → légumes qui continuent de cuire et perdent leur croquant.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Tailler selon la densité",
        "action": "Couper la carotte plus finement que la courgette. Couper le poivron en lanières fines. Sécher les légumes si nécessaire.",
        "why": "La carotte est plus dense et cuit plus lentement. La couper plus fin équilibre le temps de cuisson.",
        "mistake": "Même gros morceau pour tous les légumes → courgette molle avant carotte cuite.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Chauffer avant d’ajouter",
        "action": "Chauffer la poêle à feu moyen-fort. Ajouter l’huile quand la poêle est chaude, puis les légumes en une couche aussi régulière que possible.",
        "why": "Une poêle chaude évapore vite l’humidité et favorise une légère coloration.",
        "mistake": "Départ poêle froide → légumes qui rendent de l’eau et deviennent mous.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Sauter sans couvrir",
        "action": "Cuire 6 à 8 minutes en remuant régulièrement, sans couvrir. Les légumes doivent rester légèrement croquants.",
        "why": "Couvrir retient la vapeur. Pour sauter, il faut laisser l’humidité s’échapper.",
        "mistake": "Couvrir pour accélérer → légumes étuvés, moins colorés, texture molle.",
        "timer": 7
      },
      {
        "id": 5,
        "title": "Assaisonner et finir",
        "action": "Saler, poivrer et ajouter un filet de citron hors du feu. Servir immédiatement.",
        "why": "Le citron ajouté à la fin garde sa fraîcheur et réveille le goût des légumes.",
        "mistake": "Saler très tôt en grande quantité → les légumes rendent plus d’eau pendant la cuisson.",
        "timer": null
      }
    ],
    "tips": [
      "Si la poêle est trop pleine, cuis les légumes en deux fois plutôt que de les entasser.",
      "Un grésillement net est bon signe. Le silence indique souvent une poêle trop froide ou trop humide.",
      "Pour plus de goût, ajoute des herbes fraîches seulement à la fin."
    ]
  },
  {
    "id": "soupe-legumes-methode",
    "title": "Soupe de légumes méthode",
    "family": "soupe",
    "difficulty": 1,
    "timePrep": 20,
    "timeCook": 30,
    "servings": 4,
    "skills": [
      "decoupe",
      "mise-en-place",
      "cuisson-douce",
      "assaisonnement"
    ],
    "objectives": [
      "Tailler des légumes de façon cohérente",
      "Construire une base aromatique douce",
      "Mixer et ajuster une soupe sans la rendre fade"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": "moyennes"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "pommes de terre",
        "note": "moyennes"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "poireau",
        "note": "blanc et vert tendre"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon",
        "note": "jaune"
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "optionnel"
      },
      {
        "qty": "1",
        "unit": "L",
        "item": "eau ou bouillon de légumes",
        "note": "chaud si possible"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer et laver",
        "action": "Laver tous les légumes. Préparer une planche, un couteau, un économe, une casserole et un bol à déchets.",
        "why": "Laver avant découpe évite de perdre du goût et rend les légumes plus simples à manipuler.",
        "mistake": "Laver après découpe → petits morceaux gorgés d’eau et manipulation moins nette.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Tailler régulièrement",
        "action": "Éplucher carottes, pommes de terre et oignon. Couper les légumes en morceaux d’environ 2 à 3 cm.",
        "why": "Des morceaux proches cuisent à une vitesse proche, ce qui donne une soupe plus homogène au mixage.",
        "mistake": "Morceaux très irréguliers → certains légumes s’écrasent pendant que d’autres restent fermes.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Faire suer les aromates",
        "action": "Chauffer l’huile à feu moyen-doux. Ajouter oignon, poireau et ail. Cuire 5 minutes sans coloration.",
        "why": "Faire suer développe une base douce et aromatique. La coloration trop forte donnerait une amertume inutile.",
        "mistake": "Feu trop fort → oignon brûlé, goût amer dans toute la soupe.",
        "timer": 5
      },
      {
        "id": 4,
        "title": "Cuire à frémissement",
        "action": "Ajouter carottes et pommes de terre. Couvrir avec l’eau ou le bouillon. Porter à ébullition, puis baisser à frémissement pendant 25 minutes.",
        "why": "Le frémissement cuit sans agitation violente et garde un goût plus net.",
        "mistake": "Gros bouillons pendant toute la cuisson → légumes cassés, liquide trouble, évaporation excessive.",
        "timer": 25
      },
      {
        "id": 5,
        "title": "Mixer et ajuster",
        "action": "Mixer jusqu’à la texture souhaitée. Goûter, puis ajuster sel, poivre et éventuellement un filet d’huile ou une noix de beurre.",
        "why": "L’assaisonnement final se fait après concentration des goûts. Le gras ajouté à la fin arrondit la texture.",
        "mistake": "Saler fortement au début → soupe trop salée après réduction.",
        "timer": null
      }
    ],
    "tips": [
      "Trop épais : ajoute un peu d’eau chaude ou de bouillon. Trop liquide : fais réduire quelques minutes sans couvercle.",
      "Pour plus de relief, ajoute un trait de citron ou de vinaigre doux au moment de servir.",
      "Les parures propres de poireau, carotte et oignon peuvent servir à faire un bouillon."
    ]
  },
  {
    "id": "poulet-creme-moutarde-simple",
    "title": "Poulet crème moutarde simple",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 18,
    "servings": 2,
    "skills": [
      "materiel-feu",
      "cuisson-poele",
      "sauce-minute",
      "securite"
    ],
    "objectives": [
      "Choisir une sauteuse pour colorer puis saucer",
      "Gérer feu fort puis feu doux",
      "Construire une sauce courte sans brûler les sucs"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "blancs de poulet",
        "note": "épaisseur régulière si possible"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "échalote",
        "note": "ciselée"
      },
      {
        "qty": "10",
        "unit": "cl",
        "item": "crème liquide",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "moutarde",
        "note": "Dijon ou ancienne"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile neutre",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer la sauteuse",
        "action": "Sortir une sauteuse, une pince, une assiette et tous les ingrédients de sauce. Sécher les blancs de poulet avec du papier absorbant.",
        "why": "La sauteuse permet de colorer puis de faire la sauce dans le même contenant. Le poulet sec colore mieux et projette moins.",
        "mistake": "Poulet humide dans l’huile chaude → projections et mauvaise coloration.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Saisir le poulet",
        "action": "Saler et poivrer. Chauffer l’huile à feu moyen-fort. Saisir le poulet 2 minutes par face sans le déplacer trop tôt.",
        "why": "La saisie crée des sucs au fond de la sauteuse. Ces sucs donneront du goût à la sauce.",
        "mistake": "Bouger le poulet dès qu’il accroche → croûte arrachée et sucs moins nets.",
        "timer": 4
      },
      {
        "id": 3,
        "title": "Finir doucement",
        "action": "Baisser à feu doux. Ajouter le beurre. Couvrir et cuire 6 à 8 minutes selon l’épaisseur.",
        "why": "Le feu doux termine la cuisson à cœur sans dessécher l’extérieur.",
        "mistake": "Rester à feu fort → extérieur sec avant que le centre soit cuit.",
        "timer": 7
      },
      {
        "id": 4,
        "title": "Réserver et faire la sauce",
        "action": "Retirer le poulet sur une assiette. Ajouter l’échalote dans la sauteuse et cuire 1 minute. Ajouter la crème et la moutarde. Racler le fond.",
        "why": "Les sucs se dissolvent dans la crème et donnent une sauce plus profonde.",
        "mistake": "Laver la sauteuse avant la sauce → perte de la meilleure partie du goût.",
        "timer": 2
      },
      {
        "id": 5,
        "title": "Napper et servir",
        "action": "Remettre le poulet dans la sauce 1 minute. Goûter, ajuster le sel et servir immédiatement.",
        "why": "Le retour court dans la sauce réchauffe et nappe sans surcuire.",
        "mistake": "Faire bouillir longtemps la crème → sauce réduite, trop salée ou séparée.",
        "timer": 1
      }
    ],
    "tips": [
      "Si les blancs sont très épais, aplatis-les légèrement pour une cuisson plus régulière.",
      "Si la sauce devient trop épaisse, ajoute une cuillère d’eau ou de bouillon.",
      "La moutarde se dose progressivement : elle doit relever la sauce, pas la rendre agressive."
    ]
  },
  {
    "id": "legumes-sautes-par-densite",
    "title": "Légumes sautés par densité",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "legumes",
      "decoupe",
      "cuisson-poele",
      "diagnostic"
    ],
    "objectives": [
      "Adapter la taille des légumes à leur densité",
      "Sauter sans détremper",
      "Finir avec acidité et herbes"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": "en fins bâtonnets"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "courgette",
        "note": "en demi-rondelles épaisses"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "poivron",
        "note": "en lanières"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": "finition"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "persil ou basilic"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Tailler selon la densité",
        "action": "Couper les carottes plus finement que les courgettes. Couper le poivron en lanières régulières.",
        "why": "La carotte est plus dense et cuit plus lentement. Une coupe plus fine équilibre la cuisson.",
        "mistake": "Même gros morceau pour tous les légumes → courgette molle avant carotte tendre.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Chauffer la poêle",
        "action": "Chauffer une grande poêle à feu moyen-fort. Ajouter l’huile, puis les carottes et le poivron.",
        "why": "Les légumes les plus longs à cuire entrent d’abord.",
        "mistake": "Tout ajouter en même temps sans réfléchir → cuisson inégale.",
        "timer": 3
      },
      {
        "id": 3,
        "title": "Ajouter la courgette",
        "action": "Ajouter la courgette et cuire encore 4 à 5 minutes sans couvrir, en remuant de temps en temps.",
        "why": "La courgette cuit vite et rend de l’eau. Elle doit garder une légère tenue.",
        "mistake": "Couvrir pour accélérer → légumes étuvés et mous.",
        "timer": 5
      },
      {
        "id": 4,
        "title": "Assaisonner en fin",
        "action": "Saler, poivrer, ajouter le citron et les herbes hors du feu.",
        "why": "L’assaisonnement final donne du relief sans faire rendre trop d’eau pendant la cuisson.",
        "mistake": "Saler fortement au début → courgette plus aqueuse.",
        "timer": null
      }
    ],
    "tips": [
      "Si la poêle devient silencieuse et humide, retire une partie des légumes ou monte le feu.",
      "Pour une version plus complète, ajoute un œuf mollet, du riz ou des nouilles."
    ]
  },
  {
    "id": "carottes-glacees",
    "title": "Carottes glacées",
    "family": "légume",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 20,
    "servings": 2,
    "skills": [
      "legumes",
      "glacage",
      "reduction",
      "assaisonnement"
    ],
    "objectives": [
      "Cuire et saucer un légume en même temps",
      "Réduire un liquide de glaçage sans brûler",
      "Obtenir des carottes fondantes et brillantes"
    ],
    "ingredients": [
      {
        "qty": "400",
        "unit": "g",
        "item": "carottes",
        "note": "petites ou en bâtonnets réguliers"
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sucre",
        "note": "facultatif"
      },
      {
        "qty": "15",
        "unit": "cl",
        "item": "eau",
        "note": "environ, à ajuster"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron",
        "note": "finition facultative"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Tailler régulièrement",
        "action": "Éplucher si nécessaire et tailler les carottes en morceaux réguliers.",
        "why": "Des tailles proches cuisent au même rythme.",
        "mistake": "Mélanger gros et petits morceaux → petits trop cuits avant gros fondants.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Mettre en cuisson",
        "action": "Mettre carottes, beurre, sel, sucre et eau dans une sauteuse. L’eau doit arriver à mi-hauteur environ.",
        "why": "Le peu d’eau cuit les carottes, puis réduit pour les enrober.",
        "mistake": "Mettre trop d’eau → cuisson bouillie longue, goût dilué.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Cuire couvert puis découvrir",
        "action": "Couvrir et cuire doucement 10 minutes. Découvrir ensuite et laisser réduire.",
        "why": "Le couvercle attendrit d’abord, puis l’évaporation concentre le glaçage.",
        "mistake": "Découvrir trop tôt à feu fort → liquide évaporé avant carottes cuites.",
        "timer": 15
      },
      {
        "id": 4,
        "title": "Glacer",
        "action": "Quand le liquide devient sirupeux, rouler les carottes dedans jusqu’à ce qu’elles soient brillantes.",
        "why": "La réduction enrobe les carottes et concentre l’assaisonnement.",
        "mistake": "Pousser trop loin → beurre et sucre accrochent, goût brûlé.",
        "timer": 3
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Poivrer et ajouter éventuellement quelques gouttes de citron.",
        "why": "L’acidité équilibre la douceur des carottes et du beurre.",
        "mistake": "Ajouter beaucoup de citron → glaçage dominé par l’acide.",
        "timer": null
      }
    ],
    "tips": [
      "Le glaçage doit être brillant, pas noyé.",
      "Si les carottes sont encore fermes et qu’il n’y a plus d’eau, ajoute une petite cuillère d’eau et poursuis doucement."
    ]
  },
  {
    "id": "haricots-verts-beurre-citron",
    "title": "Haricots verts beurre-citron",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "legumes-verts",
      "cuisson-anglaise",
      "refroidissement",
      "assaisonnement"
    ],
    "objectives": [
      "Cuire des haricots verts croquants",
      "Stopper la cuisson pour garder la couleur",
      "Réchauffer sans recuire"
    ],
    "ingredients": [
      {
        "qty": "300",
        "unit": "g",
        "item": "haricots verts",
        "note": "équeutés"
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "persil",
        "note": "haché"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer l’eau",
        "action": "Porter une grande casserole d’eau salée à ébullition.",
        "why": "Une grande eau limite la chute de température et assaisonne les haricots.",
        "mistake": "Petite eau peu salée → cuisson moins nette et haricots fades.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire court",
        "action": "Plonger les haricots et cuire 4 à 6 minutes selon leur taille. Goûter.",
        "why": "Le temps varie selon fraîcheur et épaisseur. Goûter évite la surcuisson.",
        "mistake": "Attendre qu’ils soient très mous → couleur terne, texture perdue.",
        "timer": 5
      },
      {
        "id": 3,
        "title": "Refroidir",
        "action": "Égoutter et refroidir immédiatement dans de l’eau froide ou glacée. Égoutter soigneusement.",
        "why": "Le froid stoppe la cuisson. L’égouttage permet au beurre d’accrocher.",
        "mistake": "Laisser chauds dans la passoire → cuisson qui continue.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Réchauffer au beurre",
        "action": "Faire fondre le beurre à feu doux. Ajouter les haricots et réchauffer 1 à 2 minutes.",
        "why": "Le but est de réchauffer et d’enrober, pas de recuire.",
        "mistake": "Les laisser longtemps à la poêle → haricots mous.",
        "timer": 2
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Ajouter citron, poivre et persil hors du feu. Goûter le sel.",
        "why": "Le citron et le persil gardent leur fraîcheur en finition.",
        "mistake": "Citron trop tôt sur feu fort → fraîcheur perdue et couleur moins nette.",
        "timer": null
      }
    ],
    "tips": [
      "Pour une version plus gourmande, ajoute des amandes torréfiées.",
      "Si tu sers immédiatement, tu peux éviter le bain froid, mais surveille la cuisson de près."
    ]
  },
  {
    "id": "poireaux-vinaigrette-propres",
    "title": "Poireaux vinaigrette propres",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 15,
    "servings": 2,
    "skills": [
      "legumes",
      "lavage",
      "vapeur",
      "vinaigrette"
    ],
    "objectives": [
      "Laver correctement un légume terreux",
      "Cuire des poireaux fondants sans les casser",
      "Assaisonner avec une vinaigrette équilibrée"
    ],
    "ingredients": [
      {
        "qty": "4",
        "unit": "",
        "item": "poireaux",
        "note": "moyens"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "vinaigre",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "c. à soupe",
        "item": "huile",
        "note": "olive ou noix"
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "moutarde",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes",
        "note": "persil ou ciboulette"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Fendre et laver",
        "action": "Retirer les parties trop dures. Fendre les poireaux dans la longueur sans les séparer complètement. Rincer entre les couches.",
        "why": "La terre se cache entre les feuilles. Il faut la retirer avant cuisson.",
        "mistake": "Lavage de surface seulement → sable sous la dent.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire doucement",
        "action": "Cuire à la vapeur ou dans une eau frémissante salée 12 à 15 minutes, jusqu’à tendreté.",
        "why": "Le poireau doit devenir fondant sans se déliter.",
        "mistake": "Gros bouillons violents → poireaux abîmés et fibres détachées.",
        "timer": 14
      },
      {
        "id": 3,
        "title": "Égoutter",
        "action": "Égoutter soigneusement, sans écraser. Laisser tiédir.",
        "why": "Trop d’eau dilue la vinaigrette.",
        "mistake": "Presser brutalement → poireaux cassés et texture fibreuse.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Faire la vinaigrette",
        "action": "Mélanger vinaigre, moutarde, sel et poivre, puis ajouter l’huile en fouettant.",
        "why": "Le sel se dissout dans l’acide et la moutarde aide la liaison.",
        "mistake": "Ajouter l’huile avant le sel → assaisonnement mal réparti.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Servir",
        "action": "Napper les poireaux tièdes ou froids avec la vinaigrette. Ajouter les herbes.",
        "why": "Le poireau doux aime l’acidité et les herbes fraîches.",
        "mistake": "Trop de vinaigrette → légume noyé et moins lisible.",
        "timer": null
      }
    ],
    "tips": [
      "Les verts tendres peuvent être gardés pour une soupe ou un bouillon.",
      "Ajoute œuf dur haché ou noisettes pour une version plus complète."
    ]
  },
  {
    "id": "pates-sauce-amidon",
    "title": "Pâtes liées à l’eau de cuisson",
    "family": "pâtes",
    "difficulty": 1,
    "timePrep": 8,
    "timeCook": 12,
    "servings": 2,
    "skills": [
      "pates",
      "amidon",
      "liaison",
      "timing"
    ],
    "objectives": [
      "Cuire les pâtes al dente",
      "Utiliser l’eau amidonnée pour lier",
      "Finir les pâtes dans la sauce"
    ],
    "ingredients": [
      {
        "qty": "200",
        "unit": "g",
        "item": "spaghetti",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "écrasée ou hachée"
      },
      {
        "qty": "40",
        "unit": "g",
        "item": "parmesan",
        "note": "râpé finement"
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron",
        "note": "facultatif"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer la finition",
        "action": "Râper le parmesan, préparer l’ail, sortir une poêle large et une louche.",
        "why": "Les pâtes doivent être finies rapidement après cuisson.",
        "mistake": "Râper le fromage après égouttage → pâtes qui attendent et collent.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire les pâtes",
        "action": "Cuire les pâtes dans une grande eau salée, 1 minute de moins que le temps indiqué.",
        "why": "Elles termineront dans la sauce et absorberont encore du liquide.",
        "mistake": "Cuire au point parfait dans l’eau puis recuire en sauce → pâtes trop molles.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Parfumer l’huile",
        "action": "Pendant la fin de cuisson, chauffer l’huile doucement avec l’ail sans coloration excessive.",
        "why": "L’ail parfume l’huile. Trop chaud, il devient amer.",
        "mistake": "Ail brun foncé → goût amer dans tout le plat.",
        "timer": 1
      },
      {
        "id": 4,
        "title": "Lier",
        "action": "Prélever une louche d’eau de cuisson. Mettre les pâtes dans la poêle avec un peu d’eau. Mélanger énergiquement.",
        "why": "L’amidon de l’eau aide l’huile et le fromage à former une sauce brillante.",
        "mistake": "Égoutter complètement sans garder d’eau → sauce sèche.",
        "timer": 1
      },
      {
        "id": 5,
        "title": "Finir hors feu",
        "action": "Ajouter parmesan, poivre et citron hors du feu. Ajuster avec un peu d’eau de cuisson si besoin.",
        "why": "Hors feu, le fromage fond sans devenir granuleux.",
        "mistake": "Parmesan sur feu fort → texture qui accroche ou graine.",
        "timer": null
      }
    ],
    "tips": [
      "La sauce doit briller et enrober, pas former une flaque.",
      "Si c’est sec, ajoute eau de cuisson. Si c’est liquide, mélange encore sur feu doux."
    ]
  },
  {
    "id": "riz-pilaf-oignon",
    "title": "Riz pilaf à l’oignon",
    "family": "pâtes",
    "difficulty": 1,
    "timePrep": 8,
    "timeCook": 18,
    "servings": 2,
    "skills": [
      "riz",
      "absorption",
      "pilaf",
      "aromates"
    ],
    "objectives": [
      "Nacrer le riz avant mouillage",
      "Cuire par absorption sans remuer",
      "Égrainer après repos"
    ],
    "ingredients": [
      {
        "qty": "150",
        "unit": "g",
        "item": "riz long",
        "note": "basmati ou long grain"
      },
      {
        "qty": "1/2",
        "unit": "",
        "item": "oignon",
        "note": "ciselé"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile ou beurre",
        "note": ""
      },
      {
        "qty": "25",
        "unit": "cl",
        "item": "eau ou bouillon",
        "note": "chaud, à ajuster selon riz"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Faire suer l’oignon",
        "action": "Cuire l’oignon dans l’huile à feu moyen-doux, sans coloration forte.",
        "why": "L’oignon parfume le riz sans apporter d’amertume.",
        "mistake": "Oignon brûlé → goût amer dans tout le riz.",
        "timer": 3
      },
      {
        "id": 2,
        "title": "Nacrer le riz",
        "action": "Ajouter le riz et mélanger 1 à 2 minutes jusqu’à ce que les grains soient légèrement brillants.",
        "why": "La matière grasse enrobe les grains et donne une texture plus séparée.",
        "mistake": "Brûler le riz à sec → goût amer et cuisson irrégulière.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Mouiller",
        "action": "Ajouter le liquide chaud et le sel. Porter à frémissement.",
        "why": "Le liquide chaud stabilise la cuisson et commence l’absorption.",
        "mistake": "Trop de liquide → riz mou et détrempé.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire couvert",
        "action": "Couvrir et cuire à feu doux environ 12 minutes sans ouvrir.",
        "why": "La vapeur enfermée participe à la cuisson.",
        "mistake": "Ouvrir et remuer souvent → vapeur perdue, grains cassés ou collants.",
        "timer": 12
      },
      {
        "id": 5,
        "title": "Reposer et égrainer",
        "action": "Couper le feu et laisser reposer 5 minutes couvert. Égrainer à la fourchette.",
        "why": "Le repos répartit l’humidité. La fourchette sépare sans écraser.",
        "mistake": "Servir sans repos → riz inégal, humide par endroits.",
        "timer": 5
      }
    ],
    "tips": [
      "Le ratio dépend du riz : ajuste après test avec ta marque.",
      "Pour plus de parfum, remplace l’eau par un bouillon peu salé."
    ]
  },
  {
    "id": "puree-pommes-terre-maitrisee",
    "title": "Purée de pommes de terre maîtrisée",
    "family": "pâtes",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 25,
    "servings": 4,
    "skills": [
      "pommes-terre",
      "puree",
      "amidon",
      "texture"
    ],
    "objectives": [
      "Cuire les pommes de terre régulièrement",
      "Écraser sans rendre la purée collante",
      "Incorporer beurre et lait progressivement"
    ],
    "ingredients": [
      {
        "qty": "800",
        "unit": "g",
        "item": "pommes de terre farineuses",
        "note": ""
      },
      {
        "qty": "80",
        "unit": "g",
        "item": "beurre",
        "note": "en dés"
      },
      {
        "qty": "15",
        "unit": "cl",
        "item": "lait",
        "note": "chaud, à ajuster"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, muscade",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Cuire régulièrement",
        "action": "Éplucher et couper les pommes de terre en gros morceaux réguliers. Départ eau froide salée, puis frémissement jusqu’à tendreté.",
        "why": "Le départ froid cuit régulièrement jusqu’au centre.",
        "mistake": "Gros bouillons violents → extérieur qui se défait avant cœur tendre.",
        "timer": 25
      },
      {
        "id": 2,
        "title": "Égoutter et dessécher",
        "action": "Égoutter, puis remettre 1 minute dans la casserole chaude hors feu pour évaporer l’excès d’eau.",
        "why": "Moins d’eau donne une purée plus nette et moins fade.",
        "mistake": "Écraser directement des pommes de terre gorgées d’eau → purée aqueuse.",
        "timer": 1
      },
      {
        "id": 3,
        "title": "Écraser",
        "action": "Passer au presse-purée ou moulin. Éviter le mixeur plongeant.",
        "why": "Un écrasement doux limite la libération excessive d’amidon.",
        "mistake": "Mixer violemment → texture collante et élastique.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Incorporer beurre et lait",
        "action": "Ajouter le beurre, puis le lait chaud progressivement jusqu’à texture souhaitée.",
        "why": "Le gras apporte rondeur, le lait ajuste la fluidité. Chauds, ils s’incorporent mieux.",
        "mistake": "Verser tout le lait d’un coup → purée trop liquide difficile à corriger.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Assaisonner",
        "action": "Goûter, saler, poivrer, ajouter muscade si souhaité.",
        "why": "La pomme de terre absorbe beaucoup. Il faut goûter après enrichissement.",
        "mistake": "Sous-assaisonner → purée riche mais fade.",
        "timer": null
      }
    ],
    "tips": [
      "Pour une purée très lisse, passe au tamis après presse-purée, pas au mixeur.",
      "Si la purée est trop épaisse, ajoute du lait chaud petit à petit."
    ]
  },
  {
    "id": "pommes-terre-rissolees",
    "title": "Pommes de terre rissolées",
    "family": "pâtes",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 25,
    "servings": 3,
    "skills": [
      "pommes-terre",
      "poele",
      "croustillant",
      "sechage"
    ],
    "objectives": [
      "Précuire sans détremper",
      "Sécher avant coloration",
      "Rissoler avec assez d’espace"
    ],
    "ingredients": [
      {
        "qty": "700",
        "unit": "g",
        "item": "pommes de terre à chair ferme",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": "finition"
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "en chemise, facultatif"
      },
      {
        "qty": "1",
        "unit": "branche",
        "item": "thym",
        "note": "facultatif"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Précuire",
        "action": "Couper les pommes de terre en cubes réguliers. Les cuire 8 à 10 minutes dans l’eau salée, jusqu’à presque tendres.",
        "why": "La précuisson permet d’avoir un cœur fondant avant la coloration.",
        "mistake": "Cuire complètement dans l’eau → cubes qui se cassent à la poêle.",
        "timer": 9
      },
      {
        "id": 2,
        "title": "Égoutter et sécher",
        "action": "Égoutter soigneusement et laisser sécher quelques minutes sur un torchon propre ou dans la passoire.",
        "why": "La surface sèche colore mieux et éclabousse moins.",
        "mistake": "Mettre humide en poêle → vapeur et faible croustillant.",
        "timer": 5
      },
      {
        "id": 3,
        "title": "Rissoler",
        "action": "Chauffer une grande poêle avec l’huile. Ajouter les pommes de terre en une couche. Laisser colorer avant de remuer.",
        "why": "Le contact prolongé crée la croûte.",
        "mistake": "Remuer sans arrêt → coloration faible et pommes de terre cassées.",
        "timer": 8
      },
      {
        "id": 4,
        "title": "Finir au beurre",
        "action": "Ajouter beurre, ail et thym en fin de cuisson. Mélanger doucement.",
        "why": "Le beurre parfume sans brûler s’il arrive après la coloration principale.",
        "mistake": "Beurre dès le début à feu fort → beurre noir et goût amer.",
        "timer": 2
      },
      {
        "id": 5,
        "title": "Assaisonner",
        "action": "Saler et poivrer à la fin. Servir chaud.",
        "why": "Le sel final garde la surface plus nette et permet d’ajuster précisément.",
        "mistake": "Couvrir après cuisson → vapeur qui ramollit le croustillant.",
        "timer": null
      }
    ],
    "tips": [
      "Si la poêle est petite, cuis en deux fois.",
      "Pour plus de croustillant, laisse les pommes de terre refroidir après précuisson avant de les rissoler."
    ]
  },
  {
    "id": "riz-saute-recuperation",
    "title": "Riz sauté de récupération",
    "family": "pâtes",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "riz",
      "recuperation",
      "poele",
      "assaisonnement"
    ],
    "objectives": [
      "Transformer un riz froid ou collant",
      "Sauter à feu vif sans détremper",
      "Assaisonner avec sauce et aromates"
    ],
    "ingredients": [
      {
        "qty": "300",
        "unit": "g",
        "item": "riz cuit froid",
        "note": "idéalement de la veille"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "œuf",
        "note": "facultatif"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "carotte",
        "note": "en petite brunoise"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon nouveau",
        "note": "émincé"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "sauce soja",
        "note": "à ajuster"
      },
      {
        "qty": "",
        "unit": "",
        "item": "poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le riz",
        "action": "Égrainer le riz froid avec les doigts ou une fourchette. Préparer les légumes et la sauce.",
        "why": "Un riz froid et séparé saute mieux qu’un riz chaud humide.",
        "mistake": "Utiliser un riz chaud et mouillé → poêlée pâteuse.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Sauter les légumes",
        "action": "Chauffer la poêle à feu vif. Ajouter l’huile, puis la carotte. Cuire 2 minutes.",
        "why": "La petite taille permet une cuisson rapide sans détremper le riz.",
        "mistake": "Morceaux trop gros → légumes crus quand le riz est déjà chaud.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Ajouter le riz",
        "action": "Ajouter le riz et le faire sauter 3 à 4 minutes en remuant régulièrement.",
        "why": "Le feu vif sèche et réchauffe le riz tout en le séparant.",
        "mistake": "Feu faible → riz qui colle et absorbe l’huile.",
        "timer": 4
      },
      {
        "id": 4,
        "title": "Assaisonner",
        "action": "Ajouter la sauce soja progressivement. Poivrer. Ajouter l’oignon nouveau hors feu.",
        "why": "La sauce soja apporte sel et umami. L’oignon nouveau garde sa fraîcheur.",
        "mistake": "Trop de sauce soja d’un coup → riz trop salé et humide.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Option œuf",
        "action": "Pousser le riz sur le côté, brouiller rapidement l’œuf dans la poêle, puis mélanger.",
        "why": "L’œuf apporte texture et richesse sans détremper si la poêle est chaude.",
        "mistake": "Ajouter l’œuf dans une poêle froide → œuf qui colle et riz humide.",
        "timer": 1
      }
    ],
    "tips": [
      "Le riz de la veille fonctionne mieux car il est plus sec.",
      "Ajoute peu de sauce au départ : on peut toujours en remettre."
    ]
  },
  {
    "id": "legumes-rotis-plaque",
    "title": "Légumes rôtis sur plaque",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 30,
    "servings": 3,
    "skills": [
      "four",
      "rotissage",
      "decoupe",
      "assaisonnement"
    ],
    "objectives": [
      "Rôtir sans détremper",
      "Adapter la taille des légumes à leur densité",
      "Finir avec acidité et herbes fraîches"
    ],
    "ingredients": [
      {
        "qty": "3",
        "unit": "",
        "item": "carottes",
        "note": "en bâtonnets"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "courgette",
        "note": "en demi-rondelles épaisses"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon rouge",
        "note": "en quartiers"
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "jus de citron",
        "note": "finition"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préchauffer fort",
        "action": "Préchauffer le four à 210°C. Placer une plaque dans le four si elle supporte la chaleur.",
        "why": "Un four chaud lance l’évaporation et la coloration dès le départ.",
        "mistake": "Départ four froid → légumes qui ramollissent avant de rôtir.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Tailler selon la densité",
        "action": "Couper les carottes plus finement que les courgettes. Garder l’oignon en quartiers.",
        "why": "La carotte cuit plus lentement que la courgette. La taille compense cette différence.",
        "mistake": "Même taille pour tous → courgette molle avant carotte tendre.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Espacer sur la plaque",
        "action": "Mélanger légumes, huile, sel et poivre. Étaler en une seule couche, sans entasser.",
        "why": "L’espace permet à l’eau de s’évaporer. Les légumes rôtissent au lieu d’étuver.",
        "mistake": "Plaque trop pleine → vapeur, légumes pâles et mous.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Rôtir et retourner",
        "action": "Enfourner 25 à 30 minutes. Retourner une fois à mi-cuisson.",
        "why": "Retourner expose plusieurs faces à la chaleur et améliore la coloration.",
        "mistake": "Remuer toutes les 3 minutes → perte de chaleur et coloration retardée.",
        "timer": 30
      },
      {
        "id": 5,
        "title": "Finir frais",
        "action": "Ajouter un trait de citron et des herbes fraîches hors du four. Goûter et ajuster le sel.",
        "why": "L’acidité et les herbes réveillent les saveurs concentrées par le rôtissage.",
        "mistake": "Ajouter les herbes au début → herbes sèches, ternes et peu parfumées.",
        "timer": null
      }
    ],
    "tips": [
      "Pour plus de coloration, utilise deux plaques plutôt qu’une plaque surchargée.",
      "Ajoute les épices au début si elles supportent la chaleur, mais les herbes tendres à la fin."
    ]
  },
  {
    "id": "gratin-dauphinois-simple",
    "title": "Gratin dauphinois simple",
    "family": "légume",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 60,
    "servings": 4,
    "skills": [
      "four",
      "gratin",
      "cuisson-douce",
      "texture"
    ],
    "objectives": [
      "Cuire des pommes de terre à cœur dans la crème",
      "Obtenir un dessus doré sans intérieur sec",
      "Laisser reposer pour une texture plus nette"
    ],
    "ingredients": [
      {
        "qty": "800",
        "unit": "g",
        "item": "pommes de terre",
        "note": "chair ferme ou polyvalente"
      },
      {
        "qty": "40",
        "unit": "cl",
        "item": "crème liquide",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "cl",
        "item": "lait",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "coupée en deux"
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre",
        "note": "pour le plat"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, muscade",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le plat",
        "action": "Préchauffer le four à 160°C. Frotter le plat avec l’ail, puis beurrer.",
        "why": "L’ail parfume sans dominer. Le beurre limite l’accroche et aide la coloration des bords.",
        "mistake": "Four trop chaud dès le départ → dessus coloré avant pommes de terre cuites.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Trancher finement",
        "action": "Éplucher et couper les pommes de terre en tranches fines et régulières. Ne pas les rincer après découpe.",
        "why": "L’amidon aide à lier le gratin. Des tranches régulières cuisent ensemble.",
        "mistake": "Rincer les tranches → perte d’amidon, gratin moins lié.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Assaisonner le liquide",
        "action": "Mélanger crème, lait, sel, poivre et muscade. Goûter : le liquide doit être bien assaisonné.",
        "why": "Les pommes de terre absorbent une partie de l’assaisonnement pendant la cuisson.",
        "mistake": "Liquide fade → gratin fade jusqu’au cœur.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire doucement",
        "action": "Disposer les pommes de terre dans le plat. Verser le liquide à hauteur. Cuire 50 à 60 minutes.",
        "why": "La cuisson douce laisse le temps aux pommes de terre de devenir fondantes sans brûler le dessus.",
        "mistake": "Grill trop tôt → surface brûlée, intérieur ferme.",
        "timer": 55
      },
      {
        "id": 5,
        "title": "Reposer avant service",
        "action": "Sortir quand le dessus est doré et qu’un couteau entre sans résistance. Laisser reposer 10 minutes.",
        "why": "Le repos stabilise la crème et facilite le service.",
        "mistake": "Servir immédiatement → gratin liquide dans l’assiette.",
        "timer": 10
      }
    ],
    "tips": [
      "Si le dessus colore trop vite, couvre légèrement avec papier cuisson ou aluminium.",
      "Pour un gratin plus net, cuis plus doux et plus longtemps plutôt que trop fort."
    ]
  },
  {
    "id": "poulet-roti-jus-simple",
    "title": "Poulet rôti et jus simple",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 75,
    "servings": 4,
    "skills": [
      "four",
      "rotissage",
      "repos",
      "jus"
    ],
    "objectives": [
      "Sécher et assaisonner une volaille",
      "Rôtir avec peau dorée et chair juteuse",
      "Faire un jus simple avec les sucs"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "poulet",
        "note": "1,4 à 1,6 kg"
      },
      {
        "qty": "40",
        "unit": "g",
        "item": "beurre",
        "note": "pommade"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "citron",
        "note": "coupé en deux"
      },
      {
        "qty": "4",
        "unit": "branches",
        "item": "thym",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "cl",
        "item": "eau ou bouillon",
        "note": "pour le jus"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher la peau",
        "action": "Sortir le poulet 30 minutes avant cuisson. Sécher soigneusement la peau. Préchauffer le four à 210°C.",
        "why": "Une peau sèche colore et croustille mieux. Un poulet moins froid cuit plus régulièrement.",
        "mistake": "Peau humide → vapeur en surface, peau moins croustillante.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Assaisonner",
        "action": "Mélanger beurre, sel, poivre et un peu de zeste de citron. Masser la peau. Mettre thym et demi-citron dans la cavité.",
        "why": "Le beurre aide la coloration et porte les arômes.",
        "mistake": "Sous-assaisonner seulement en surface → chair fade.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Rôtir",
        "action": "Enfourner 20 minutes à 210°C, puis baisser à 180°C et cuire encore 45 à 55 minutes.",
        "why": "Départ chaud pour colorer, suite plus modérée pour cuire à cœur.",
        "mistake": "Four trop fort tout le long → peau très brune, blancs secs.",
        "timer": 70
      },
      {
        "id": 4,
        "title": "Vérifier et reposer",
        "action": "Vérifier la cuisson dans la cuisse : jus clair ou 74°C. Laisser reposer 10 à 15 minutes.",
        "why": "Le repos garde plus de jus dans la chair au découpage.",
        "mistake": "Découper immédiatement → jus sur la planche, chair plus sèche.",
        "timer": 12
      },
      {
        "id": 5,
        "title": "Faire le jus",
        "action": "Dégraisser légèrement le plat. Ajouter eau ou bouillon chaud, racler les sucs et réduire 2 minutes.",
        "why": "Les sucs concentrent le goût du rôti et forment un jus rapide.",
        "mistake": "Laver le plat avant le jus → perte de la meilleure partie du goût.",
        "timer": 2
      }
    ],
    "tips": [
      "Si la peau colore trop vite, baisse le four ou protège légèrement.",
      "Un repos sous aluminium posé, non fermé, garde la chaleur sans ramollir complètement la peau."
    ]
  },
  {
    "id": "boeuf-carottes-fondant",
    "title": "Bœuf carottes fondant",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 25,
    "timeCook": 180,
    "servings": 4,
    "skills": [
      "braisage",
      "mijotage",
      "reduction",
      "assaisonnement"
    ],
    "objectives": [
      "Saisir une viande avant de braiser",
      "Transformer un morceau ferme en viande fondante",
      "Réduire une sauce sans la sursaler"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "kg",
        "item": "paleron ou joue de bœuf",
        "note": "gros cubes"
      },
      {
        "qty": "5",
        "unit": "",
        "item": "carottes",
        "note": "rondelles épaisses"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "oignons",
        "note": "émincés"
      },
      {
        "qty": "2",
        "unit": "gousses",
        "item": "ail",
        "note": "écrasées"
      },
      {
        "qty": "50",
        "unit": "cl",
        "item": "vin rouge",
        "note": ""
      },
      {
        "qty": "30",
        "unit": "cl",
        "item": "bouillon",
        "note": "non ou peu salé"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "concentré de tomate",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, huile",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher et saisir",
        "action": "Sécher la viande. Chauffer l’huile dans une cocotte. Saisir les morceaux en plusieurs fois jusqu’à belle coloration. Réserver.",
        "why": "La coloration crée les sucs qui donneront le goût de la sauce.",
        "mistake": "Tout mettre d’un coup → viande grise, vapeur, peu de sucs.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Construire la base",
        "action": "Faire revenir oignons et ail dans la cocotte. Ajouter le concentré de tomate et cuire 2 minutes.",
        "why": "Le concentré perd son acidité crue et gagne en profondeur.",
        "mistake": "Ne pas cuire le concentré → sauce plus acide et moins profonde.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Déglacer et mouiller",
        "action": "Remettre la viande. Verser le vin, racler le fond, puis ajouter le bouillon. Porter à frémissement.",
        "why": "Le liquide dissout les sucs et commence la sauce.",
        "mistake": "Ne pas racler → sucs collés puis brûlés au fond.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Mijoter doucement",
        "action": "Couvrir et cuire 2h à frémissement doux. Ajouter les carottes, puis cuire encore 45 à 60 minutes.",
        "why": "La viande demande plus de temps que les carottes. Les ajouter plus tard garde leur texture.",
        "mistake": "Gros bouillons → fibres sèches, sauce trouble.",
        "timer": 165
      },
      {
        "id": 5,
        "title": "Réduire et ajuster",
        "action": "Si la sauce est trop liquide, retirer viande et carottes, puis réduire la sauce seule. Goûter et saler à la fin.",
        "why": "Réduire concentre le sel. Ajuster après réduction évite le sursalage.",
        "mistake": "Saler fort au début → sauce trop salée après concentration.",
        "timer": null
      }
    ],
    "tips": [
      "Le plat sera souvent meilleur réchauffé doucement le lendemain.",
      "Si la sauce est trop grasse, retire une partie du gras en surface avant de servir."
    ]
  },
  {
    "id": "soupe-correction-assaisonnement",
    "title": "Soupe à corriger",
    "family": "soupe",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 25,
    "servings": 4,
    "skills": [
      "assaisonnement",
      "correction",
      "cuisson-douce"
    ],
    "objectives": [
      "Goûter et corriger une soupe simple",
      "Différencier manque de sel et manque d’acidité",
      "Ajuster texture et rondeur"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "",
        "item": "pommes de terre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "",
        "item": "poireau",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "L",
        "item": "eau ou bouillon léger",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron ou vinaigre doux",
        "note": "correction finale"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Faire suer",
        "action": "Émincer l’oignon et le poireau. Les faire suer 5 minutes dans l’huile sans coloration.",
        "why": "Cette base douce donne du goût avant même le liquide.",
        "mistake": "Brûler l’oignon → amertume dans toute la soupe.",
        "timer": 5
      },
      {
        "id": 2,
        "title": "Cuire les légumes",
        "action": "Ajouter carottes et pommes de terre en morceaux réguliers. Couvrir avec le liquide. Cuire à frémissement 20 minutes.",
        "why": "Le frémissement cuit sans troubler excessivement le goût.",
        "mistake": "Gros bouillons + trop peu de liquide → évaporation excessive et soupe déséquilibrée.",
        "timer": 20
      },
      {
        "id": 3,
        "title": "Mixer",
        "action": "Mixer jusqu’à texture lisse. Ajuster avec un peu d’eau chaude si la soupe est trop épaisse.",
        "why": "Corriger la texture avant l’assaisonnement final permet de ne pas diluer après avoir salé.",
        "mistake": "Saler puis rallonger beaucoup → assaisonnement à refaire.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Corriger le goût",
        "action": "Goûter. Ajouter sel progressivement. Si la soupe reste plate, ajouter quelques gouttes de citron ou vinaigre doux.",
        "why": "Le sel révèle le goût ; l’acidité donne du relief quand le sel ne suffit plus.",
        "mistake": "Ajouter beaucoup de sel d’un coup → soupe trop salée sans forcément plus de relief.",
        "timer": null
      }
    ],
    "tips": [
      "Une noix de beurre ou un filet d’huile peut donner de la rondeur.",
      "Une soupe trop salée se corrige surtout en l’allongeant avec un élément non salé."
    ]
  },
  {
    "id": "vinaigrette-moutarde-equilibree",
    "title": "Vinaigrette moutarde équilibrée",
    "family": "sauce",
    "difficulty": 1,
    "timePrep": 5,
    "timeCook": 0,
    "servings": 2,
    "skills": [
      "emulsion",
      "acidite",
      "assaisonnement",
      "sauce-froide"
    ],
    "objectives": [
      "Équilibrer acide, huile, sel et moutarde",
      "Créer une émulsion simple",
      "Adapter la vinaigrette à la salade"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "vinaigre",
        "note": "vin, cidre ou xérès"
      },
      {
        "qty": "3",
        "unit": "c. à soupe",
        "item": "huile",
        "note": "olive, colza ou noix"
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "moutarde",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel fin",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Dissoudre le sel",
        "action": "Mettre vinaigre, sel, poivre et moutarde dans un bol. Fouetter.",
        "why": "Le sel se dissout mieux dans l’acide que dans l’huile.",
        "mistake": "Ajouter le sel après l’huile → grains mal répartis.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Ajouter l’huile",
        "action": "Verser l’huile en filet en fouettant jusqu’à obtenir une sauce liée.",
        "why": "L’ajout progressif disperse l’huile et donne une texture plus nappante.",
        "mistake": "Verser toute l’huile d’un coup → sauce séparée.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Goûter et ajuster",
        "action": "Goûter avec une feuille de salade, pas seulement à la cuillère. Ajuster huile, vinaigre ou sel.",
        "why": "La salade dilue la perception de la vinaigrette. Le test réel est plus fiable.",
        "mistake": "Goûter seulement pure → vinaigrette jugée trop forte alors qu’elle sera juste sur salade.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Assaisonner au service",
        "action": "Verser sur la salade juste avant de servir et mélanger délicatement.",
        "why": "Le sel et l’acide font tomber les feuilles tendres.",
        "mistake": "Assaisonner trop tôt → salade molle et détrempée.",
        "timer": null
      }
    ],
    "tips": [
      "Pour une vinaigrette plus douce, remplace une partie du vinaigre par du citron ou choisis un vinaigre de cidre.",
      "Pour une salade amère, une huile de noix ou une pointe de miel peut arrondir."
    ]
  },
  {
    "id": "mayonnaise-maison-rattrapage",
    "title": "Mayonnaise maison et rattrapage",
    "family": "sauce",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 0,
    "servings": 4,
    "skills": [
      "emulsion",
      "sauce-froide",
      "correction"
    ],
    "objectives": [
      "Monter une mayonnaise stable",
      "Comprendre le rôle du filet d’huile",
      "Rattraper une mayonnaise tranchée"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "jaune d’œuf",
        "note": "à température ambiante si possible"
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "moutarde",
        "note": ""
      },
      {
        "qty": "15",
        "unit": "cl",
        "item": "huile neutre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron ou vinaigre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel fin",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Créer la base",
        "action": "Mettre jaune, moutarde, sel et quelques gouttes de citron dans un bol. Fouetter pour homogénéiser.",
        "why": "La base contient les éléments qui stabilisent l’émulsion.",
        "mistake": "Base mal mélangée → émulsion plus fragile dès le départ.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Commencer goutte à goutte",
        "action": "Ajouter l’huile très lentement au début, en fouettant sans arrêt.",
        "why": "Les premières gouttes construisent la structure de l’émulsion.",
        "mistake": "Huile versée trop vite → mayonnaise qui tranche.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Monter en filet",
        "action": "Quand la sauce épaissit, verser l’huile en filet plus régulier jusqu’à texture ferme et brillante.",
        "why": "Une fois l’émulsion prise, elle accepte mieux l’huile.",
        "mistake": "Continuer trop épais sans détente → mayonnaise lourde.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Ajuster",
        "action": "Ajouter citron ou vinaigre pour équilibrer. Si besoin, détendre avec quelques gouttes d’eau.",
        "why": "L’acidité équilibre le gras et l’eau ajuste la texture.",
        "mistake": "Ajouter beaucoup de liquide d’un coup → sauce trop fluide.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Rattraper si tranchée",
        "action": "Si elle tranche, mettre une cuillère d’eau ou un nouveau jaune dans un bol propre. Incorporer la mayonnaise ratée en filet.",
        "why": "On recrée une base stable avant de réintégrer la sauce séparée.",
        "mistake": "Ajouter encore plus d’huile dans la sauce tranchée → séparation aggravée.",
        "timer": null
      }
    ],
    "tips": [
      "Un bol stable sur un torchon humide évite de courir après le récipient.",
      "Pour une mayonnaise plus vive, ajoute l’acide à la fin plutôt que tout au début."
    ]
  },
  {
    "id": "sauce-vierge-tomate-herbes",
    "title": "Sauce vierge tomate-herbes",
    "family": "sauce",
    "difficulty": 1,
    "timePrep": 12,
    "timeCook": 0,
    "servings": 2,
    "skills": [
      "sauce-crue",
      "herbes",
      "acidite",
      "assaisonnement"
    ],
    "objectives": [
      "Construire une sauce crue équilibrée",
      "Préserver fraîcheur et texture",
      "Utiliser gras, acide et herbes en finition"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "tomates",
        "note": "mûres"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "échalote",
        "note": "petite, ciselée"
      },
      {
        "qty": "3",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "jus de citron ou vinaigre doux",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "persil, basilic, ciboulette"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer les tomates",
        "action": "Couper les tomates en petits dés. Retirer une partie de l’excès de jus si elles sont très aqueuses.",
        "why": "Une sauce vierge doit rester fraîche mais pas noyée.",
        "mistake": "Garder trop d’eau de tomate → sauce diluée et moins nappante.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Ciseler finement",
        "action": "Ciseler l’échalote très finement. Hacher les herbes avec une lame nette.",
        "why": "Une coupe fine répartit les parfums sans morceaux agressifs.",
        "mistake": "Échalote trop grosse → bouchées piquantes et déséquilibrées.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Équilibrer",
        "action": "Mélanger tomates, échalote, huile, citron, sel et poivre. Goûter.",
        "why": "La sauce doit équilibrer gras, acide, sel et fraîcheur.",
        "mistake": "Ajouter trop de citron d’un coup → acidité dominante.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Ajouter les herbes",
        "action": "Ajouter les herbes juste avant service ou après un repos court de 5 à 10 minutes.",
        "why": "Les herbes gardent mieux leur couleur et leur parfum.",
        "mistake": "Préparer plusieurs heures avant → herbes ternes, tomates qui rendent de l’eau.",
        "timer": null
      }
    ],
    "tips": [
      "Parfaite avec poisson vapeur, légumes grillés ou volaille froide.",
      "Des câpres ou olives ajoutent du relief, mais attention au sel."
    ]
  },
  {
    "id": "bechamel-sans-grumeaux",
    "title": "Béchamel sans grumeaux",
    "family": "sauce",
    "difficulty": 1,
    "timePrep": 5,
    "timeCook": 10,
    "servings": 4,
    "skills": [
      "sauce-chaude",
      "roux",
      "liaison",
      "texture"
    ],
    "objectives": [
      "Préparer un roux blanc",
      "Incorporer le lait progressivement",
      "Obtenir une sauce nappante sans goût de farine"
    ],
    "ingredients": [
      {
        "qty": "40",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "40",
        "unit": "g",
        "item": "farine",
        "note": ""
      },
      {
        "qty": "50",
        "unit": "cl",
        "item": "lait",
        "note": "chaud ou tiède"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, muscade",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Faire fondre le beurre",
        "action": "Faire fondre le beurre à feu moyen sans le laisser brunir.",
        "why": "Pour une béchamel claire, le beurre doit fondre sans coloration marquée.",
        "mistake": "Beurre noir → goût amer et sauce moins claire.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire le roux",
        "action": "Ajouter la farine d’un coup et mélanger 1 à 2 minutes jusqu’à obtenir une pâte homogène.",
        "why": "La cuisson retire le goût cru de farine et enrobe les grains dans le beurre.",
        "mistake": "Ajouter le lait trop tôt → goût farineux et liaison moins propre.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Détendre progressivement",
        "action": "Ajouter une petite partie du lait en fouettant pour lisser, puis verser le reste progressivement.",
        "why": "Détendre d’abord le roux évite les grumeaux.",
        "mistake": "Verser tout le lait d’un coup sans fouetter → grumeaux.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire et napper",
        "action": "Cuire 5 minutes à feu doux en fouettant régulièrement, jusqu’à texture nappante.",
        "why": "La sauce épaissit et le goût de farine disparaît.",
        "mistake": "Arrêter dès épaississement → sauce lourde et goût de farine.",
        "timer": 5
      },
      {
        "id": 5,
        "title": "Assaisonner",
        "action": "Ajouter sel, poivre et muscade. Goûter et ajuster.",
        "why": "L’assaisonnement final permet de contrôler la sauce après épaississement.",
        "mistake": "Saler fortement avant réduction → sauce trop salée si elle épaissit trop.",
        "timer": null
      }
    ],
    "tips": [
      "Si des grumeaux apparaissent, fouette énergiquement ou mixe brièvement.",
      "Pour une sauce plus fluide, ajoute un peu de lait chaud."
    ]
  },
  {
    "id": "sauce-creme-champignons",
    "title": "Sauce crème aux champignons",
    "family": "sauce",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 15,
    "servings": 2,
    "skills": [
      "sauce-chaude",
      "reduction",
      "assaisonnement",
      "umami"
    ],
    "objectives": [
      "Faire suer et colorer des champignons",
      "Réduire une crème jusqu’à texture nappante",
      "Équilibrer richesse, sel et acidité"
    ],
    "ingredients": [
      {
        "qty": "250",
        "unit": "g",
        "item": "champignons",
        "note": "émincés"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "échalote",
        "note": "ciselée"
      },
      {
        "qty": "15",
        "unit": "cl",
        "item": "crème liquide",
        "note": "entière si possible"
      },
      {
        "qty": "5",
        "unit": "cl",
        "item": "bouillon ou eau",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "moutarde",
        "note": "facultatif"
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron",
        "note": "finition"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, beurre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sauter les champignons",
        "action": "Faire chauffer une poêle. Ajouter une noix de beurre, puis les champignons. Cuire jusqu’à évaporation de l’eau.",
        "why": "Les champignons doivent perdre leur eau avant de concentrer leur goût.",
        "mistake": "Ajouter la crème trop tôt → sauce aqueuse et champignons fades.",
        "timer": 6
      },
      {
        "id": 2,
        "title": "Ajouter l’échalote",
        "action": "Ajouter l’échalote et cuire 1 minute sans la brûler.",
        "why": "L’échalote parfume la sauce mais devient vite amère si elle colore trop.",
        "mistake": "Échalote noire → amertume dans toute la sauce.",
        "timer": 1
      },
      {
        "id": 3,
        "title": "Déglacer",
        "action": "Ajouter le bouillon ou l’eau, racler le fond et réduire de moitié.",
        "why": "Le liquide récupère les sucs et les arômes des champignons.",
        "mistake": "Ne pas réduire → sauce diluée.",
        "timer": 2
      },
      {
        "id": 4,
        "title": "Crémer et réduire",
        "action": "Ajouter la crème et cuire doucement jusqu’à texture nappante.",
        "why": "La réduction concentre et épaissit la sauce.",
        "mistake": "Faire bouillir violemment → crème qui accroche ou réduit trop vite.",
        "timer": 4
      },
      {
        "id": 5,
        "title": "Équilibrer",
        "action": "Ajouter moutarde si souhaité, poivre et quelques gouttes de citron. Goûter avant de saler.",
        "why": "La moutarde et le citron réveillent la richesse de la crème.",
        "mistake": "Saler avant réduction finale → sauce trop salée.",
        "timer": null
      }
    ],
    "tips": [
      "Très bonne avec poulet, pâtes, pommes de terre ou légumes rôtis.",
      "Pour plus d’umami, ajoute une petite quantité de parmesan hors du feu."
    ]
  },
  {
    "id": "sauce-tomate-base",
    "title": "Sauce tomate réduite de base",
    "family": "sauce",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 30,
    "servings": 4,
    "skills": [
      "sauce-chaude",
      "reduction",
      "acidite",
      "aromates"
    ],
    "objectives": [
      "Construire une base aromatique",
      "Réduire une sauce tomate proprement",
      "Corriger acidité et assaisonnement"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "oignon",
        "note": "ciselé"
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "hachée ou écrasée"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "concentré de tomate",
        "note": ""
      },
      {
        "qty": "800",
        "unit": "g",
        "item": "tomates concassées",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, basilic",
        "note": "basilic en finition"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Faire suer l’oignon",
        "action": "Cuire l’oignon dans l’huile à feu moyen-doux pendant 5 minutes, sans brûler.",
        "why": "L’oignon doux construit le fond de la sauce.",
        "mistake": "Oignon brûlé → amertume persistante.",
        "timer": 5
      },
      {
        "id": 2,
        "title": "Ajouter ail et concentré",
        "action": "Ajouter l’ail 30 secondes, puis le concentré de tomate. Cuire 2 minutes.",
        "why": "Le concentré perd son goût cru et gagne en profondeur.",
        "mistake": "Ail ajouté trop tôt à feu fort → amertume.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Ajouter les tomates",
        "action": "Ajouter les tomates concassées. Porter à frémissement, puis cuire doucement 25 minutes.",
        "why": "La réduction évapore l’eau et concentre le goût.",
        "mistake": "Cuisson trop forte sans remuer → sauce qui accroche et brûle.",
        "timer": 25
      },
      {
        "id": 4,
        "title": "Ajuster",
        "action": "Goûter. Saler progressivement. Si la sauce reste acide, prolonger ou ajouter un filet d’huile.",
        "why": "La cuisson et le gras arrondissent l’acidité avant d’utiliser le sucre.",
        "mistake": "Sucrer beaucoup dès le début → sauce plate et sucrée.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Ajouter basilic ou herbes fraîches hors du feu.",
        "why": "Les herbes gardent leur parfum en finition.",
        "mistake": "Basilic cuit 30 minutes → parfum affaibli.",
        "timer": null
      }
    ],
    "tips": [
      "Pour une sauce plus lisse, mixe brièvement après cuisson.",
      "Pour une sauce plus profonde, réduis davantage à feu doux."
    ]
  },
  {
    "id": "steak-sauce-echalote",
    "title": "Steak sauce échalote",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 12,
    "servings": 2,
    "skills": [
      "saisie",
      "deglacage",
      "jus-court",
      "monter-beurre"
    ],
    "objectives": [
      "Utiliser les sucs de cuisson",
      "Déglacer et réduire une sauce courte",
      "Monter au beurre en finition"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "steaks",
        "note": "épaisseur régulière"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "échalotes",
        "note": "ciselées"
      },
      {
        "qty": "8",
        "unit": "cl",
        "item": "vin rouge ou bouillon",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre froid",
        "note": "en dés"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Saisir la viande",
        "action": "Sécher, saler et saisir les steaks dans l’huile chaude. Réserver et laisser reposer.",
        "why": "La saisie crée les sucs qui serviront à la sauce.",
        "mistake": "Viande humide ou poêle froide → peu de sucs et viande grise.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire les échalotes",
        "action": "Baisser le feu. Ajouter les échalotes dans la poêle et cuire 1 minute sans brûler.",
        "why": "Elles parfument les sucs sans devenir amères.",
        "mistake": "Échalotes noires → sauce amère.",
        "timer": 1
      },
      {
        "id": 3,
        "title": "Déglacer",
        "action": "Ajouter le vin ou bouillon. Racler le fond pour dissoudre les sucs.",
        "why": "Le liquide récupère le goût concentré de la cuisson.",
        "mistake": "Ne pas racler → sucs perdus ou brûlés.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Réduire",
        "action": "Faire réduire jusqu’à obtenir quelques cuillères de jus intense.",
        "why": "La réduction concentre le goût et donne une base pour monter au beurre.",
        "mistake": "Saler avant réduction → sauce trop salée.",
        "timer": 3
      },
      {
        "id": 5,
        "title": "Monter au beurre",
        "action": "Hors feu, incorporer le beurre froid en remuant. Poivrer et servir avec la viande.",
        "why": "Le beurre donne brillance et rondeur.",
        "mistake": "Faire bouillir après le beurre → sauce qui se sépare.",
        "timer": null
      }
    ],
    "tips": [
      "Si la sauce est trop forte, allonge avec une cuillère d’eau.",
      "Si elle est plate, ajoute une goutte de vinaigre ou réduis un peu plus."
    ]
  },
  {
    "id": "bouillon-legumes-propre",
    "title": "Bouillon de légumes propre",
    "family": "soupe",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 45,
    "servings": 6,
    "skills": [
      "bouillon",
      "aromates",
      "cuisson-douce",
      "anti-gaspi"
    ],
    "objectives": [
      "Utiliser légumes et parures propres",
      "Maintenir un frémissement doux",
      "Filtrer un bouillon clair et utilisable"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": "en morceaux"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon",
        "note": "émincé ou coupé en deux"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "poireau",
        "note": "bien lavé"
      },
      {
        "qty": "1",
        "unit": "branche",
        "item": "céleri",
        "note": "facultatif"
      },
      {
        "qty": "1",
        "unit": "feuille",
        "item": "laurier",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "branches",
        "item": "thym",
        "note": ""
      },
      {
        "qty": "1.5",
        "unit": "L",
        "item": "eau",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel",
        "note": "très modéré"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Laver et préparer",
        "action": "Laver soigneusement les légumes, surtout le poireau. Couper en morceaux réguliers.",
        "why": "Un bouillon extrait tout : goût propre comme goût terreux.",
        "mistake": "Parures sales → bouillon trouble et goût de terre.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Départ à froid",
        "action": "Mettre légumes, aromates et eau froide dans une casserole.",
        "why": "Le départ froid favorise une extraction progressive.",
        "mistake": "Mettre dans trop peu d’eau → bouillon trop réduit et déséquilibré.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Frémir",
        "action": "Porter doucement à frémissement et cuire 40 à 45 minutes.",
        "why": "Le frémissement extrait sans troubler ni casser excessivement.",
        "mistake": "Gros bouillons violents → liquide trouble, évaporation excessive.",
        "timer": 45
      },
      {
        "id": 4,
        "title": "Filtrer",
        "action": "Filtrer sans presser fortement les légumes. Refroidir rapidement si non utilisé.",
        "why": "Presser trouble le bouillon. Le refroidissement protège la qualité.",
        "mistake": "Laisser tiède longtemps → risque sanitaire et perte de fraîcheur.",
        "timer": null
      }
    ],
    "tips": [
      "Sale peu si le bouillon doit être réduit ensuite.",
      "Congèle en petites portions pour sauces, risottos et soupes."
    ]
  },
  {
    "id": "beurre-blanc-poisson",
    "title": "Poisson beurre blanc",
    "family": "poisson",
    "difficulty": 3,
    "timePrep": 15,
    "timeCook": 15,
    "servings": 2,
    "skills": [
      "emulsion-chaude",
      "beurre-blanc",
      "poisson",
      "sauce"
    ],
    "objectives": [
      "Préparer une réduction acide",
      "Monter un beurre blanc stable",
      "Servir une sauce chaude fragile au bon moment"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "filets de poisson blanc",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "",
        "item": "échalotes",
        "note": "ciselées"
      },
      {
        "qty": "8",
        "unit": "cl",
        "item": "vin blanc",
        "note": ""
      },
      {
        "qty": "4",
        "unit": "cl",
        "item": "vinaigre de vin blanc",
        "note": ""
      },
      {
        "qty": "120",
        "unit": "g",
        "item": "beurre froid",
        "note": "en dés"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le beurre",
        "action": "Couper le beurre en petits dés et le garder froid.",
        "why": "Le beurre froid s’incorpore progressivement dans la réduction.",
        "mistake": "Beurre mou ou ajouté d’un coup → émulsion moins contrôlée.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Faire la réduction",
        "action": "Mettre échalotes, vin et vinaigre dans une petite casserole. Réduire jusqu’à obtenir 1 à 2 cuillères de liquide.",
        "why": "La réduction donne acidité, parfum et phase aqueuse.",
        "mistake": "Réduction totalement sèche → beurre plus difficile à émulsionner.",
        "timer": 6
      },
      {
        "id": 3,
        "title": "Monter la sauce",
        "action": "Baisser au minimum ou retirer du feu. Ajouter le beurre petit à petit en fouettant.",
        "why": "La chaleur douce permet au beurre de s’émulsionner sans se séparer.",
        "mistake": "Faire bouillir pendant l’ajout du beurre → sauce tranchée.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire le poisson",
        "action": "Cuire le poisson vapeur ou poêle douce selon l’épaisseur. Saler légèrement.",
        "why": "Le poisson doit être prêt au moment de la sauce, qui attend mal.",
        "mistake": "Faire la sauce trop tôt → beurre blanc qui refroidit ou tranche.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Servir",
        "action": "Goûter la sauce, ajuster sel et poivre. Napper le poisson et servir immédiatement.",
        "why": "Le beurre blanc est une sauce minute.",
        "mistake": "Réchauffer à gros bouillons → séparation du gras.",
        "timer": null
      }
    ],
    "tips": [
      "Si la sauce épaissit trop, ajoute quelques gouttes d’eau tiède.",
      "Si elle tranche, repars avec une cuillère d’eau tiède et incorpore doucement la sauce."
    ]
  },
  {
    "id": "hollandaise-asperges",
    "title": "Asperges sauce hollandaise",
    "family": "œufs",
    "difficulty": 3,
    "timePrep": 15,
    "timeCook": 15,
    "servings": 2,
    "skills": [
      "emulsion-chaude",
      "sabayon",
      "oeufs",
      "sauce"
    ],
    "objectives": [
      "Monter des jaunes en sabayon",
      "Incorporer le beurre sans coaguler",
      "Équilibrer une sauce riche avec citron"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "jaunes d’œufs",
        "note": ""
      },
      {
        "qty": "120",
        "unit": "g",
        "item": "beurre fondu tiède",
        "note": "ou clarifié"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "eau",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "jus de citron",
        "note": "à ajuster"
      },
      {
        "qty": "1",
        "unit": "botte",
        "item": "asperges",
        "note": "cuites vapeur ou à l’anglaise"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le bain-marie",
        "action": "Chauffer une casserole d’eau frémissante. Le bol posé dessus ne doit pas toucher l’eau.",
        "why": "Le bain-marie chauffe doucement les jaunes.",
        "mistake": "Bol trop chaud ou eau bouillante forte → jaunes brouillés.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Monter les jaunes",
        "action": "Fouetter jaunes, eau et quelques gouttes de citron au bain-marie jusqu’à texture mousseuse et légèrement épaissie.",
        "why": "Le sabayon crée la base qui accueillera le beurre.",
        "mistake": "Arrêter trop tôt → base faible, sauce instable.",
        "timer": 3
      },
      {
        "id": 3,
        "title": "Ajouter le beurre",
        "action": "Hors feu ou chaleur très douce, ajouter le beurre fondu tiède en filet en fouettant.",
        "why": "L’ajout progressif stabilise l’émulsion.",
        "mistake": "Beurre trop chaud ou ajouté trop vite → sauce tranchée.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Ajuster",
        "action": "Ajouter citron, sel et poivre. La sauce doit être nappante, brillante et équilibrée.",
        "why": "Le citron coupe la richesse du beurre.",
        "mistake": "Trop de citron d’un coup → sauce agressive.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Servir avec les asperges",
        "action": "Napper les asperges chaudes et servir immédiatement.",
        "why": "L’hollandaise est fragile et attend mal.",
        "mistake": "Maintenir longtemps au chaud → risque de trancher ou de coaguler.",
        "timer": null
      }
    ],
    "tips": [
      "Si la sauce devient trop épaisse, détends avec quelques gouttes d’eau tiède.",
      "Si elle chauffe trop, retire immédiatement du bain-marie et fouette."
    ]
  },
  {
    "id": "omelette-herbes-baveuse",
    "title": "Omelette aux herbes baveuse",
    "family": "œufs",
    "difficulty": 1,
    "timePrep": 8,
    "timeCook": 4,
    "servings": 1,
    "skills": [
      "oeufs",
      "cuisson-douce",
      "cuisson-residuelle",
      "herbes"
    ],
    "objectives": [
      "Cuire une omelette sans dessécher",
      "Arrêter la cuisson avant le point final",
      "Ajouter les herbes au bon moment"
    ],
    "ingredients": [
      {
        "qty": "3",
        "unit": "",
        "item": "œufs",
        "note": ""
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "ciboulette, persil, cerfeuil"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer avant cuisson",
        "action": "Ciseler les herbes, sortir l’assiette, battre les œufs avec sel et poivre.",
        "why": "L’omelette cuit vite. Le poste doit être prêt.",
        "mistake": "Chercher les herbes pendant la cuisson → œufs trop cuits.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Chauffer modérément",
        "action": "Faire fondre le beurre à feu moyen jusqu’à ce qu’il mousse sans brunir.",
        "why": "Le beurre mousseux indique une chaleur suffisante mais pas agressive.",
        "mistake": "Beurre noir → goût amer et poêle trop chaude.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Cuire en remuant",
        "action": "Verser les œufs et remuer doucement 30 à 45 secondes en ramenant les bords vers le centre.",
        "why": "Le mouvement crée une texture souple et une cuisson régulière.",
        "mistake": "Ne rien bouger à feu fort → dessous sec, dessus cru.",
        "timer": 1
      },
      {
        "id": 4,
        "title": "Finir baveux",
        "action": "Ajouter les herbes quand l’omelette est encore humide. Replier et glisser dans l’assiette.",
        "why": "La chaleur résiduelle termine la cuisson.",
        "mistake": "Attendre qu’elle soit ferme dans la poêle → omelette sèche à table.",
        "timer": null
      }
    ],
    "tips": [
      "Baveux ne veut pas dire cru : la texture doit être humide mais chaude.",
      "Pour une omelette plus riche, ajoute une petite noix de beurre au moment de servir."
    ]
  },
  {
    "id": "oeuf-mollet-salade",
    "title": "Œuf mollet sur salade croquante",
    "family": "œufs",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 6,
    "servings": 2,
    "skills": [
      "oeufs",
      "cuisson-eau",
      "refroidissement",
      "assaisonnement"
    ],
    "objectives": [
      "Cuire un œuf mollet au jaune coulant",
      "Stopper la cuisson avec l’eau froide",
      "Associer œuf riche et salade acidulée"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "œufs",
        "note": "à température ambiante si possible"
      },
      {
        "qty": "2",
        "unit": "poignées",
        "item": "salade",
        "note": "bien essorée"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "vinaigre",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "moutarde",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le refroidissement",
        "action": "Préparer un bol d’eau froide ou glacée avant de cuire les œufs.",
        "why": "Il faut pouvoir stopper la cuisson dès la sortie de l’eau.",
        "mistake": "Chercher le bol après cuisson → jaune qui continue de durcir.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Cuire les œufs",
        "action": "Plonger les œufs dans une eau frémissante à bouillante. Cuire environ 6 minutes.",
        "why": "Ce temps donne généralement un blanc pris et un jaune coulant.",
        "mistake": "Ébullition violente + chute brutale → coquille fissurée.",
        "timer": 6
      },
      {
        "id": 3,
        "title": "Refroidir",
        "action": "Transférer immédiatement dans l’eau froide pendant quelques minutes.",
        "why": "Le froid stoppe la cuisson et facilite l’écalage.",
        "mistake": "Laisser les œufs chauds sur le plan → jaune plus ferme que prévu.",
        "timer": 3
      },
      {
        "id": 4,
        "title": "Assaisonner la salade",
        "action": "Faire la vinaigrette, mélanger la salade au dernier moment.",
        "why": "L’acidité équilibre le jaune riche et garde la salade fraîche.",
        "mistake": "Assaisonner trop tôt → salade molle.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Servir",
        "action": "Écaler délicatement les œufs, les couper en deux et les poser sur la salade.",
        "why": "Le jaune devient une partie de la sauce.",
        "mistake": "Couper brutalement → jaune perdu sur la planche.",
        "timer": null
      }
    ],
    "tips": [
      "Adapte le temps selon la taille des œufs.",
      "Un œuf très froid sorti du frigo peut demander légèrement plus de temps."
    ]
  },
  {
    "id": "quiche-appareil-cremeux",
    "title": "Quiche à l’appareil crémeux",
    "family": "œufs",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 35,
    "servings": 4,
    "skills": [
      "oeufs",
      "appareil",
      "four",
      "cuisson-douce"
    ],
    "objectives": [
      "Préparer un appareil à œufs équilibré",
      "Cuire jusqu’à prise sans surcuisson",
      "Reconnaître un centre légèrement tremblotant"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "pâte brisée",
        "note": "foncée dans un moule"
      },
      {
        "qty": "3",
        "unit": "",
        "item": "œufs",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "cl",
        "item": "crème",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "cl",
        "item": "lait",
        "note": ""
      },
      {
        "qty": "120",
        "unit": "g",
        "item": "garniture cuite",
        "note": "lardons, poireaux, champignons"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, muscade",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer la garniture",
        "action": "Cuire et égoutter la garniture si elle contient de l’eau.",
        "why": "Une garniture humide détrempe l’appareil et la pâte.",
        "mistake": "Champignons ou poireaux crus → eau rendue dans la quiche.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Mélanger l’appareil",
        "action": "Fouetter œufs, crème, lait, sel, poivre et muscade sans incorporer trop d’air.",
        "why": "L’appareil doit être homogène mais pas mousseux.",
        "mistake": "Trop fouetter → appareil qui gonfle davantage puis retombe.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Assembler",
        "action": "Répartir la garniture dans le fond de tarte, puis verser l’appareil.",
        "why": "La garniture se répartit mieux et ne flotte pas toute au même endroit.",
        "mistake": "Verser sans répartir → bouchées déséquilibrées.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire modérément",
        "action": "Cuire à 170–180°C pendant 30 à 35 minutes.",
        "why": "Une chaleur modérée prend les œufs sans les rendre caoutchouteux.",
        "mistake": "Four trop fort → appareil gonflé, sec ou qui rend de l’eau.",
        "timer": 35
      },
      {
        "id": 5,
        "title": "Laisser reposer",
        "action": "Sortir quand les bords sont pris et le centre légèrement tremblotant. Reposer 10 minutes.",
        "why": "La chaleur résiduelle finit de stabiliser l’appareil.",
        "mistake": "Attendre que le centre soit totalement ferme au four → quiche trop cuite.",
        "timer": 10
      }
    ],
    "tips": [
      "Un centre légèrement tremblotant est souvent un bon signe.",
      "Sale prudemment si la garniture contient fromage ou lardons."
    ]
  },
  {
    "id": "steak-saisi-repos",
    "title": "Steak saisi et reposé",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 1,
    "skills": [
      "viande-rouge",
      "saisie",
      "repos",
      "jus"
    ],
    "objectives": [
      "Sécher et saisir une viande rouge",
      "Obtenir une croûte sans surcuire",
      "Laisser reposer avant découpe"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "steak épais",
        "note": "2 à 3 cm si possible"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile neutre",
        "note": ""
      },
      {
        "qty": "15",
        "unit": "g",
        "item": "beurre",
        "note": "facultatif, finition"
      },
      {
        "qty": "1",
        "unit": "branche",
        "item": "thym",
        "note": "facultatif"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher et assaisonner",
        "action": "Sortir le steak 15 à 20 minutes avant cuisson. Sécher soigneusement. Saler juste avant cuisson.",
        "why": "Une surface sèche colore mieux. Le sel assaisonne la surface avant la saisie.",
        "mistake": "Viande humide → vapeur et coloration faible.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Saisir",
        "action": "Chauffer fortement une poêle. Ajouter l’huile, puis poser le steak. Ne pas bouger pendant 2 minutes.",
        "why": "Le contact stable avec la poêle chaude crée la croûte.",
        "mistake": "Déplacer toutes les 10 secondes → croûte arrachée ou irrégulière.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Retourner et ajuster",
        "action": "Retourner. Cuire 1 à 2 minutes selon l’épaisseur. Baisser le feu si la surface colore trop vite.",
        "why": "La deuxième face colore souvent plus vite. L’intensité doit suivre la couleur.",
        "mistake": "Continuer à feu maximal malgré une surface très brune → extérieur brûlé, centre mal contrôlé.",
        "timer": 2
      },
      {
        "id": 4,
        "title": "Finir au beurre",
        "action": "Ajouter beurre et thym si souhaité. Arroser 30 à 60 secondes.",
        "why": "Le beurre parfume et nourrit la surface en fin de cuisson.",
        "mistake": "Beurre ajouté dès le début à feu très fort → beurre noir et amer.",
        "timer": 1
      },
      {
        "id": 5,
        "title": "Reposer",
        "action": "Déposer sur une assiette et laisser reposer 5 minutes. Poivrer avant service.",
        "why": "Le repos limite la fuite de jus à la découpe.",
        "mistake": "Couper immédiatement → jus perdu dans l’assiette.",
        "timer": 5
      }
    ],
    "tips": [
      "Pour une pièce très épaisse, termine au four doux après saisie.",
      "Si la poêle fume énormément et que les sucs noircissent, baisse ou retire du feu quelques secondes."
    ]
  },
  {
    "id": "bavette-echalote-contre-fil",
    "title": "Bavette à l’échalote, découpe contre-fil",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 12,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "viande-rouge",
      "decoupe",
      "deglacage",
      "sauce-cuisson"
    ],
    "objectives": [
      "Saisir une viande fibreuse",
      "Faire une sauce échalote rapide",
      "Découper à contre-fil"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "bavettes",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "",
        "item": "échalotes",
        "note": "ciselées"
      },
      {
        "qty": "8",
        "unit": "cl",
        "item": "vin rouge ou bouillon",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre froid",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Observer les fibres",
        "action": "Avant cuisson, repérer le sens des fibres de la bavette. Sécher et saler la viande.",
        "why": "Le repérage avant cuisson facilite la découpe à contre-fil après repos.",
        "mistake": "Découvrir le sens des fibres au dernier moment → découpe approximative.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Saisir",
        "action": "Saisir les bavettes à feu vif 1 à 2 minutes par face selon épaisseur.",
        "why": "La bavette aime une cuisson courte avec bonne coloration.",
        "mistake": "Cuisson longue à feu moyen → viande plus ferme et sèche.",
        "timer": 4
      },
      {
        "id": 3,
        "title": "Reposer",
        "action": "Réserver la viande sur une assiette pendant 5 minutes.",
        "why": "Le repos stabilise les jus et laisse le temps de faire la sauce.",
        "mistake": "Couper pendant la sauce → jus perdu avant service.",
        "timer": 5
      },
      {
        "id": 4,
        "title": "Faire la sauce",
        "action": "Baisser le feu. Ajouter les échalotes dans la poêle. Cuire 1 minute, déglacer au vin ou bouillon, réduire.",
        "why": "Les sucs de viande parfument la sauce. La réduction concentre.",
        "mistake": "Échalotes brûlées → sauce amère.",
        "timer": 3
      },
      {
        "id": 5,
        "title": "Monter et découper",
        "action": "Hors feu, ajouter le beurre froid. Découper la bavette à contre-fil et napper.",
        "why": "Le beurre rend la sauce brillante. La découpe contre-fil améliore la tendreté.",
        "mistake": "Découpe dans le sens des fibres → mâche plus longue et viande perçue plus dure.",
        "timer": null
      }
    ],
    "tips": [
      "La bavette se sert souvent saignante ou à point léger.",
      "Si la sauce est trop intense, ajoute une cuillère d’eau avant le beurre."
    ]
  },
  {
    "id": "filet-mignon-moutarde",
    "title": "Filet mignon moutarde-crème",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 12,
    "timeCook": 22,
    "servings": 3,
    "skills": [
      "porc",
      "cuisson-douce",
      "sauce-creme",
      "repos"
    ],
    "objectives": [
      "Colorer un filet mignon sans le dessécher",
      "Finir doucement à cœur",
      "Construire une sauce équilibrée"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "filet mignon de porc",
        "note": "500 à 600 g"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "échalote",
        "note": "ciselée"
      },
      {
        "qty": "12",
        "unit": "cl",
        "item": "crème liquide",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "moutarde",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer la viande",
        "action": "Parer les excès de nerfs visibles si nécessaire. Sécher, saler et poivrer.",
        "why": "Une surface sèche colore mieux. Le parage améliore la mâche.",
        "mistake": "Surface humide → coloration faible.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Colorer",
        "action": "Saisir le filet mignon sur toutes les faces dans huile et beurre, à feu moyen-fort.",
        "why": "La coloration crée les sucs et le goût de base de la sauce.",
        "mistake": "Feu trop faible → viande qui rend de l’eau et grise.",
        "timer": 6
      },
      {
        "id": 3,
        "title": "Finir doucement",
        "action": "Baisser le feu, couvrir partiellement et cuire 10 à 12 minutes selon l’épaisseur.",
        "why": "Le filet est maigre. Une finition douce limite le dessèchement.",
        "mistake": "Feu fort jusqu’à la fin → extérieur sec, centre moins juteux.",
        "timer": 12
      },
      {
        "id": 4,
        "title": "Reposer et faire la sauce",
        "action": "Réserver la viande. Ajouter l’échalote dans la poêle, cuire 1 minute. Ajouter crème et moutarde, réduire doucement.",
        "why": "Le repos protège le jus. La sauce récupère les sucs de cuisson.",
        "mistake": "Faire bouillir fortement la crème → sauce qui réduit trop vite et devient lourde.",
        "timer": 4
      },
      {
        "id": 5,
        "title": "Trancher et servir",
        "action": "Trancher le filet mignon après repos. Napper de sauce.",
        "why": "La découpe après repos limite la perte de jus.",
        "mistake": "Trancher immédiatement à la sortie de poêle → jus perdu sur la planche.",
        "timer": null
      }
    ],
    "tips": [
      "Une pointe de citron ou de vinaigre peut équilibrer la crème.",
      "Si la sauce est trop épaisse, détends avec une cuillère d’eau ou de bouillon."
    ]
  },
  {
    "id": "boeuf-braise-simple",
    "title": "Bœuf braisé simple",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 25,
    "timeCook": 180,
    "servings": 4,
    "skills": [
      "viande",
      "braisage",
      "mijotage",
      "reduction"
    ],
    "objectives": [
      "Saisir la viande pour construire les sucs",
      "Mijoter doucement jusqu’au fondant",
      "Réduire la sauce sans surcuire la viande"
    ],
    "ingredients": [
      {
        "qty": "900",
        "unit": "g",
        "item": "paleron ou joue de bœuf",
        "note": "en gros cubes"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "oignons",
        "note": "émincés"
      },
      {
        "qty": "3",
        "unit": "",
        "item": "carottes",
        "note": "grosses rondelles"
      },
      {
        "qty": "2",
        "unit": "gousses",
        "item": "ail",
        "note": "écrasées"
      },
      {
        "qty": "40",
        "unit": "cl",
        "item": "vin rouge",
        "note": ""
      },
      {
        "qty": "30",
        "unit": "cl",
        "item": "bouillon peu salé",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "concentré de tomate",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, huile",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Saisir en plusieurs fois",
        "action": "Sécher la viande. La saisir en plusieurs fois dans une cocotte chaude avec un peu d’huile.",
        "why": "L’espace permet la coloration. Les sucs donneront de la profondeur à la sauce.",
        "mistake": "Tout mettre d’un coup → viande qui bout dans son eau.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Faire la base",
        "action": "Faire revenir oignons, ail et concentré de tomate 2 minutes.",
        "why": "La base aromatique construit le goût et le concentré perd son acidité crue.",
        "mistake": "Brûler le concentré → amertume.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Déglacer",
        "action": "Ajouter le vin, racler le fond, puis ajouter le bouillon. Remettre la viande.",
        "why": "Le liquide dissout les sucs et devient la base de cuisson.",
        "mistake": "Ne pas racler → sucs perdus ou brûlés.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Mijoter",
        "action": "Cuire à frémissement doux 2h, puis ajouter les carottes et poursuivre 45 minutes à 1h.",
        "why": "La viande demande plus de temps que les carottes.",
        "mistake": "Gros bouillons → fibres agressées et sauce trouble.",
        "timer": 170
      },
      {
        "id": 5,
        "title": "Finir la sauce",
        "action": "Quand la viande cède à la fourchette, retirer viande et carottes si besoin. Réduire la sauce seule, puis réunir.",
        "why": "Cela concentre la sauce sans surcuire la viande.",
        "mistake": "Réduire avec la viande déjà tendre pendant longtemps → viande qui se défait trop.",
        "timer": null
      }
    ],
    "tips": [
      "Le lendemain, le goût est souvent plus fondu.",
      "Saler prudemment au début : la sauce va réduire."
    ]
  },
  {
    "id": "blanc-poulet-moelleux",
    "title": "Blanc de poulet moelleux",
    "family": "viande",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 12,
    "servings": 2,
    "skills": [
      "volaille",
      "cuisson-douce",
      "saisie",
      "repos"
    ],
    "objectives": [
      "Régulariser l’épaisseur du blanc",
      "Saisir puis finir doucement",
      "Servir juteux avec repos court"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "blancs de poulet",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "écrasée, facultatif"
      },
      {
        "qty": "1",
        "unit": "branche",
        "item": "thym",
        "note": "facultatif"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Régulariser",
        "action": "Aplatir légèrement les blancs entre deux feuilles de papier cuisson pour obtenir une épaisseur plus régulière.",
        "why": "Une épaisseur régulière évite que les parties fines sèchent avant le centre.",
        "mistake": "Cuire un blanc très irrégulier tel quel → cuisson inégale.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Saisir",
        "action": "Saler, poivrer. Saisir à feu moyen-fort 2 minutes par face dans l’huile.",
        "why": "La saisie donne du goût sans cuire complètement.",
        "mistake": "Feu trop faible → poulet pâle et humide.",
        "timer": 4
      },
      {
        "id": 3,
        "title": "Finir doucement",
        "action": "Baisser le feu. Ajouter beurre, ail et thym. Couvrir partiellement et cuire 5 à 7 minutes.",
        "why": "La chaleur douce termine la cuisson sans sécher.",
        "mistake": "Rester à feu fort → chair sèche.",
        "timer": 6
      },
      {
        "id": 4,
        "title": "Reposer",
        "action": "Retirer du feu et laisser reposer 4 minutes avant de trancher.",
        "why": "Le repos limite la perte de jus.",
        "mistake": "Trancher immédiatement → jus sur la planche.",
        "timer": 4
      },
      {
        "id": 5,
        "title": "Servir",
        "action": "Trancher en biais et napper avec le jus de cuisson.",
        "why": "La découpe en biais donne une mâche plus agréable et le jus apporte de la rondeur.",
        "mistake": "Servir sans jus ni sauce si le blanc est un peu trop cuit → sensation plus sèche.",
        "timer": null
      }
    ],
    "tips": [
      "Pour plus de sécurité, utilise un thermomètre à cœur.",
      "Une marinade yaourt-citron-herbes peut apporter du goût, mais ne remplace pas la cuisson juste."
    ]
  },
  {
    "id": "cuisses-poulet-braisees",
    "title": "Cuisses de poulet braisées",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 45,
    "servings": 2,
    "skills": [
      "volaille",
      "braisage",
      "sauce-cuisson",
      "cuisson-a-coeur"
    ],
    "objectives": [
      "Colorer la peau",
      "Braiser jusqu’à chair fondante",
      "Faire une sauce courte avec les sucs"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "cuisses de poulet",
        "note": "avec peau"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon",
        "note": "émincé"
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "écrasée"
      },
      {
        "qty": "15",
        "unit": "cl",
        "item": "bouillon de volaille",
        "note": "peu salé"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "branche",
        "item": "thym",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher et saisir",
        "action": "Sécher les cuisses, saler, poivrer. Saisir côté peau dans une sauteuse chaude jusqu’à belle coloration.",
        "why": "La peau sèche colore mieux et le gras fondu donne du goût.",
        "mistake": "Peau humide → peau molle et peu colorée.",
        "timer": 6
      },
      {
        "id": 2,
        "title": "Faire la base",
        "action": "Retourner les cuisses, ajouter oignon, ail et thym. Cuire 3 minutes.",
        "why": "Les aromates parfument les sucs de volaille.",
        "mistake": "Brûler l’ail → amertume dans la sauce.",
        "timer": 3
      },
      {
        "id": 3,
        "title": "Mouiller",
        "action": "Ajouter le bouillon à mi-hauteur sans couvrir entièrement la peau.",
        "why": "Le liquide braise la chair et construit la sauce. Garder la peau hors liquide limite le ramollissement.",
        "mistake": "Noyer totalement la peau → texture molle.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Braiser doucement",
        "action": "Couvrir partiellement et cuire à frémissement doux 30 à 35 minutes.",
        "why": "La cuisse demande une cuisson complète et douce pour être fondante.",
        "mistake": "Gros bouillons → chair moins nette et sauce trouble.",
        "timer": 35
      },
      {
        "id": 5,
        "title": "Réduire le jus",
        "action": "Retirer les cuisses. Réduire le jus si besoin, goûter, puis servir.",
        "why": "Réduire concentre le goût sans surcuire la volaille.",
        "mistake": "Saler fort avant réduction → jus trop salé.",
        "timer": null
      }
    ],
    "tips": [
      "Pour retrouver une peau plus nette, passe brièvement sous le grill après braisage.",
      "Ajoute une pointe de citron ou de moutarde pour réveiller le jus."
    ]
  },
  {
    "id": "poulet-crapaudine-herbes",
    "title": "Poulet en crapaudine aux herbes",
    "family": "viande",
    "difficulty": 3,
    "timePrep": 20,
    "timeCook": 45,
    "servings": 4,
    "skills": [
      "volaille",
      "four",
      "rotissage",
      "decoupe"
    ],
    "objectives": [
      "Aplatir une volaille pour une cuisson plus régulière",
      "Obtenir une peau dorée",
      "Servir après repos avec jus"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "poulet",
        "note": "1,3 à 1,6 kg"
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "gousses",
        "item": "ail",
        "note": "écrasées"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes",
        "note": "thym, romarin ou persil"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "citron",
        "note": "zeste et jus en finition"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Ouvrir le poulet",
        "action": "Couper le long de la colonne avec des ciseaux solides, ouvrir le poulet et l’aplatir.",
        "why": "La crapaudine réduit l’épaisseur et rend la cuisson plus homogène.",
        "mistake": "Forcer avec un petit couteau instable → geste dangereux.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Assaisonner",
        "action": "Sécher la peau. Mélanger huile, ail, herbes, sel et poivre. Masser le poulet.",
        "why": "La peau sèche colore mieux. L’huile porte les aromates.",
        "mistake": "Peau humide → rôtissage moins net.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Rôtir",
        "action": "Cuire à 200°C pendant 40 à 45 minutes, peau vers le haut.",
        "why": "La forme aplatie expose mieux la peau et réduit l’écart entre blancs et cuisses.",
        "mistake": "Four trop doux → peau pâle avant cuisson complète.",
        "timer": 45
      },
      {
        "id": 4,
        "title": "Vérifier",
        "action": "Vérifier la cuisson près de la cuisse : jus clair ou température sûre.",
        "why": "La zone près de l’os reste le point critique.",
        "mistake": "Se fier seulement à la peau dorée → risque de cuisse insuffisamment cuite.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Reposer et servir",
        "action": "Laisser reposer 10 minutes. Ajouter quelques gouttes de citron et servir avec le jus.",
        "why": "Le repos stabilise les jus. Le citron réveille le gras de peau et le jus.",
        "mistake": "Découper immédiatement → jus perdu.",
        "timer": 10
      }
    ],
    "tips": [
      "Demande au boucher d’ouvrir le poulet si tu ne veux pas le faire.",
      "Place des pommes de terre ou légumes dessous pour récupérer les jus."
    ]
  },
  {
    "id": "saumon-cote-peau-croustillant",
    "title": "Saumon côté peau croustillant",
    "family": "poisson",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "poisson",
      "poele",
      "peau-croustillante",
      "cuisson-residuelle"
    ],
    "objectives": [
      "Sécher la peau pour obtenir du croustillant",
      "Cuire principalement côté peau",
      "Garder un centre légèrement nacré"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "pavés de saumon",
        "note": "avec peau"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile neutre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": "finition"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher la peau",
        "action": "Éponger soigneusement la peau du saumon. Saler légèrement.",
        "why": "Une peau sèche croustille mieux et colle moins.",
        "mistake": "Peau humide → vapeur, peau molle.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Démarrer côté peau",
        "action": "Chauffer une poêle à feu moyen-fort. Ajouter l’huile, poser le saumon côté peau et presser 10 secondes.",
        "why": "La pression garde la peau en contact avec la poêle.",
        "mistake": "Ne pas presser → peau qui se rétracte et croustille mal.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Cuire majoritairement côté peau",
        "action": "Cuire 5 à 6 minutes sans retourner, jusqu’à voir la cuisson monter sur les côtés.",
        "why": "La peau protège la chair et laisse la chaleur monter progressivement.",
        "mistake": "Retourner sans arrêt → chair cassée et peau moins nette.",
        "timer": 6
      },
      {
        "id": 4,
        "title": "Finir brièvement",
        "action": "Retourner 30 à 60 secondes côté chair, puis retirer.",
        "why": "Le saumon sèche vite. La cuisson résiduelle termine le centre.",
        "mistake": "Cuire longtemps côté chair → saumon sec et albumine blanche abondante.",
        "timer": 1
      },
      {
        "id": 5,
        "title": "Servir",
        "action": "Poivrer et ajouter quelques gouttes de citron juste avant service.",
        "why": "Le citron réveille le gras du saumon sans ramollir trop tôt la peau.",
        "mistake": "Verser beaucoup de citron sur la peau avant attente → croustillant perdu.",
        "timer": null
      }
    ],
    "tips": [
      "Si la peau colle, attends encore quelques secondes avant de forcer.",
      "Le centre peut rester légèrement nacré pour plus de moelleux."
    ]
  },
  {
    "id": "cabillaud-nacre-vapeur",
    "title": "Cabillaud nacré vapeur",
    "family": "poisson",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 2,
    "skills": [
      "poisson",
      "vapeur",
      "cuisson-douce",
      "finition"
    ],
    "objectives": [
      "Cuire un poisson blanc sans le casser",
      "Lire une chair nacrée et juste cuite",
      "Assaisonner avec une finition légère"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "dos de cabillaud",
        "note": "150 g environ chacun"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "aneth, persil ou ciboulette"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer la finition",
        "action": "Préparer huile, citron, herbes, sel et poivre avant cuisson.",
        "why": "Le poisson vapeur doit être servi rapidement après cuisson.",
        "mistake": "Préparer la sauce après cuisson → poisson qui attend et continue de sécher.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Installer la vapeur",
        "action": "Porter un fond d’eau à frémissement. Le panier vapeur ne doit pas toucher l’eau.",
        "why": "Le poisson doit cuire à la vapeur, pas bouillir.",
        "mistake": "Poisson en contact avec l’eau → texture plus fragile et cuisson moins contrôlée.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Cuire couvert",
        "action": "Saler le poisson, le placer dans le panier et couvrir. Cuire 6 à 8 minutes selon l’épaisseur.",
        "why": "La vapeur douce préserve l’humidité de la chair.",
        "mistake": "Ouvrir toutes les 30 secondes → vapeur perdue, cuisson irrégulière.",
        "timer": 7
      },
      {
        "id": 4,
        "title": "Sortir délicatement",
        "action": "Retirer avec une spatule large. La chair doit être opaque et se détacher en feuillets.",
        "why": "Le cabillaud est fragile une fois cuit.",
        "mistake": "Attraper avec une pince serrée → poisson cassé.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Ajouter huile d’olive, citron, herbes et poivre. Servir immédiatement.",
        "why": "La finition apporte le goût que la vapeur n’apporte pas.",
        "mistake": "Noyer sous le citron → acidité qui écrase la chair.",
        "timer": null
      }
    ],
    "tips": [
      "Ajoute des tiges d’herbes ou une rondelle de citron dans l’eau pour parfumer légèrement.",
      "Si le poisson est trop cuit, sers-le avec une sauce plus généreuse."
    ]
  },
  {
    "id": "moules-marinieres",
    "title": "Moules marinières",
    "family": "poisson",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 6,
    "servings": 2,
    "skills": [
      "coquillages",
      "vapeur",
      "jus",
      "tri"
    ],
    "objectives": [
      "Trier et nettoyer des moules",
      "Cuire rapidement à couvert",
      "Utiliser le jus sans le sursaler"
    ],
    "ingredients": [
      {
        "qty": "1.2",
        "unit": "kg",
        "item": "moules",
        "note": "fraîches"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "échalotes",
        "note": "ciselées"
      },
      {
        "qty": "15",
        "unit": "cl",
        "item": "vin blanc",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "persil",
        "note": "haché"
      },
      {
        "qty": "",
        "unit": "",
        "item": "poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Trier",
        "action": "Rincer les moules. Écarter celles qui sont cassées, très ouvertes et ne se referment pas au toucher.",
        "why": "Le tri élimine les coquillages douteux.",
        "mistake": "Cuire sans trier → risque et mauvaise qualité dans la casserole.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Nettoyer",
        "action": "Retirer les filaments si besoin et rincer rapidement sans laisser tremper longtemps.",
        "why": "Le nettoyage retire sable et filaments sans fatiguer les moules.",
        "mistake": "Long trempage dans l’eau douce → moules affaiblies et goût dilué.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Faire la base",
        "action": "Faire suer les échalotes dans le beurre 2 minutes sans coloration forte.",
        "why": "L’échalote parfume le jus sans amertume.",
        "mistake": "Échalote brûlée → jus amer.",
        "timer": 2
      },
      {
        "id": 4,
        "title": "Cuire à couvert",
        "action": "Ajouter vin blanc et moules. Couvrir et cuire 4 à 5 minutes en secouant une fois.",
        "why": "La vapeur ouvre les moules rapidement. Une cuisson courte garde une chair tendre.",
        "mistake": "Cuire trop longtemps → moules rétrécies et caoutchouteuses.",
        "timer": 5
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Écarter les moules restées fermées. Ajouter persil et poivre. Goûter le jus avant tout sel.",
        "why": "Le jus des moules est déjà salé et parfumé.",
        "mistake": "Saler sans goûter → jus trop salé.",
        "timer": null
      }
    ],
    "tips": [
      "Filtre le jus si tu veux le transformer en sauce.",
      "Les moules se servent dès ouverture : elles supportent mal l’attente."
    ]
  },
  {
    "id": "crevettes-sautees-ail-citron",
    "title": "Crevettes sautées ail-citron",
    "family": "poisson",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 4,
    "servings": 2,
    "skills": [
      "fruits-de-mer",
      "cuisson-courte",
      "poele",
      "assaisonnement"
    ],
    "objectives": [
      "Cuire des crevettes sans les rendre caoutchouteuses",
      "Parfumer sans brûler l’ail",
      "Finir avec acidité et herbes"
    ],
    "ingredients": [
      {
        "qty": "300",
        "unit": "g",
        "item": "crevettes décortiquées",
        "note": "crues de préférence"
      },
      {
        "qty": "1",
        "unit": "gousse",
        "item": "ail",
        "note": "hachée finement"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "persil",
        "note": "haché"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sécher les crevettes",
        "action": "Éponger les crevettes. Préparer ail, citron et persil avant cuisson.",
        "why": "Les crevettes cuisent très vite. Tout doit être prêt.",
        "mistake": "Chercher le citron pendant la cuisson → crevettes trop cuites.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Saisir rapidement",
        "action": "Chauffer l’huile à feu moyen-fort. Ajouter les crevettes et cuire 1 minute par face.",
        "why": "La cuisson courte garde une texture tendre.",
        "mistake": "Cuisson prolongée → texture caoutchouteuse.",
        "timer": 2
      },
      {
        "id": 3,
        "title": "Ajouter ail et beurre",
        "action": "Baisser légèrement le feu. Ajouter beurre et ail. Mélanger 30 secondes.",
        "why": "L’ail parfume sans brûler s’il arrive après la saisie principale.",
        "mistake": "Ail dès le départ à feu fort → ail amer.",
        "timer": 1
      },
      {
        "id": 4,
        "title": "Finir hors feu",
        "action": "Retirer du feu. Ajouter citron, persil, poivre et ajuster le sel.",
        "why": "La finition garde fraîcheur et évite de prolonger la cuisson.",
        "mistake": "Laisser dans la poêle chaude plusieurs minutes → crevettes qui continuent de durcir.",
        "timer": null
      }
    ],
    "tips": [
      "Si les crevettes sont déjà cuites, réduis fortement le temps : il s’agit surtout de les réchauffer.",
      "Une pointe de piment fonctionne bien, mais doit rester secondaire."
    ]
  },
  {
    "id": "rillettes-poisson-sec",
    "title": "Rillettes de poisson de récupération",
    "family": "poisson",
    "difficulty": 1,
    "timePrep": 12,
    "timeCook": 0,
    "servings": 3,
    "skills": [
      "recuperation",
      "poisson",
      "sauce-froide",
      "correction"
    ],
    "objectives": [
      "Transformer un poisson trop cuit ou cassé",
      "Apporter humidité, gras et acidité",
      "Corriger sans masquer complètement"
    ],
    "ingredients": [
      {
        "qty": "250",
        "unit": "g",
        "item": "poisson cuit",
        "note": "trop cuit, cassé ou restes"
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "yaourt grec ou fromage frais",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "jus de citron",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": "aneth, persil ou ciboulette"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Émietter",
        "action": "Émietter le poisson en retirant arêtes et peau si nécessaire.",
        "why": "Une texture déjà cassée devient ici volontaire.",
        "mistake": "Chercher à reconstituer un filet entier → présentation peu convaincante.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Ajouter l’humidité",
        "action": "Mélanger avec yaourt ou fromage frais et huile d’olive.",
        "why": "Le gras et l’humidité compensent la sécheresse.",
        "mistake": "Ajouter seulement du citron → poisson encore plus sec et acide.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Équilibrer",
        "action": "Ajouter citron, herbes, poivre et sel progressivement.",
        "why": "L’acidité réveille, les herbes redonnent de la fraîcheur.",
        "mistake": "Trop saler d’un coup → récupération difficile.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Servir frais",
        "action": "Servir sur pain grillé, pommes de terre vapeur ou salade croquante.",
        "why": "Le contraste de texture améliore la perception du poisson.",
        "mistake": "Servir seul en masse compacte → sensation lourde.",
        "timer": null
      }
    ],
    "tips": [
      "Des câpres ou cornichons hachés ajoutent de l’acidité et du relief.",
      "Cette recette sert à apprendre qu’un ratage peut devenir une autre préparation."
    ]
  },
  {
    "id": "meringue-francaise-sechee",
    "title": "Meringue française séchée",
    "family": "pâtisserie",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 90,
    "servings": 6,
    "skills": [
      "meringue",
      "foisonnement",
      "cuisson-douce",
      "sucre"
    ],
    "objectives": [
      "Monter des blancs propres",
      "Incorporer le sucre progressivement",
      "Sécher sans colorer excessivement"
    ],
    "ingredients": [
      {
        "qty": "100",
        "unit": "g",
        "item": "blancs d’œufs",
        "note": "sans trace de jaune"
      },
      {
        "qty": "100",
        "unit": "g",
        "item": "sucre semoule",
        "note": ""
      },
      {
        "qty": "100",
        "unit": "g",
        "item": "sucre glace",
        "note": "tamisé"
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel ou gouttes de citron",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le matériel",
        "action": "Vérifier que bol et fouet sont propres, secs et sans gras. Préchauffer le four à 90–100°C.",
        "why": "Le gras empêche les blancs de monter et le four doux permet de sécher.",
        "mistake": "Bol gras → blancs instables ou impossibles à monter.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Monter les blancs",
        "action": "Fouetter les blancs jusqu’à mousse souple, puis ajouter le sucre semoule progressivement.",
        "why": "Le sucre stabilise mieux quand la mousse a déjà commencé à se former.",
        "mistake": "Tout le sucre au départ → montée ralentie et texture moins aérée.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Incorporer le sucre glace",
        "action": "Quand la meringue est brillante et forme un bec, incorporer le sucre glace délicatement à la maryse.",
        "why": "Le sucre glace affine la texture sans casser excessivement la mousse.",
        "mistake": "Mélanger brutalement → mousse qui retombe.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Pocher",
        "action": "Pocher sur plaque avec papier cuisson.",
        "why": "Des formes régulières cuisent plus uniformément.",
        "mistake": "Tailles très différentes → petites sèches avant grosses.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Sécher",
        "action": "Cuire 1h15 à 1h45 selon taille, puis laisser refroidir dans le four entrouvert.",
        "why": "Le refroidissement progressif limite les fissures et l’humidité.",
        "mistake": "Four trop chaud → meringues colorées dehors, collantes dedans.",
        "timer": 90
      }
    ],
    "tips": [
      "Si les meringues collent encore, prolonge le séchage à basse température.",
      "Stocke dans une boîte hermétique une fois totalement froides."
    ]
  },
  {
    "id": "caramel-beurre-sale",
    "title": "Caramel beurre salé",
    "family": "pâtisserie",
    "difficulty": 3,
    "timePrep": 10,
    "timeCook": 12,
    "servings": 6,
    "skills": [
      "caramel",
      "sucre",
      "securite",
      "sauce"
    ],
    "objectives": [
      "Colorer un caramel sans le brûler",
      "Décuire à la crème en sécurité",
      "Obtenir une sauce lisse et équilibrée"
    ],
    "ingredients": [
      {
        "qty": "160",
        "unit": "g",
        "item": "sucre",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "cl",
        "item": "crème liquide",
        "note": "chaude"
      },
      {
        "qty": "60",
        "unit": "g",
        "item": "beurre demi-sel",
        "note": "en dés"
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "fleur de sel",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Chauffer la crème",
        "action": "Chauffer la crème séparément et la garder chaude.",
        "why": "Une crème chaude limite le choc thermique au moment de décuire.",
        "mistake": "Crème froide versée d’un coup → fortes projections et caramel figé.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Faire le caramel",
        "action": "Faire fondre le sucre à sec dans une casserole propre, sur feu moyen, jusqu’à couleur ambrée.",
        "why": "La couleur ambrée donne un goût de caramel net sans brûlé.",
        "mistake": "Laisser brunir trop foncé → amertume dominante.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Décuire",
        "action": "Hors feu ou feu doux, ajouter la crème chaude progressivement en gardant le visage éloigné.",
        "why": "Le caramel mousse fortement et libère de la vapeur brûlante.",
        "mistake": "Verser vite dans une casserole trop basse → débordement ou projections.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Lisser",
        "action": "Remettre à feu doux et mélanger jusqu’à sauce homogène.",
        "why": "Les morceaux de caramel figé refondent doucement.",
        "mistake": "Feu fort pour aller vite → fond brûlé.",
        "timer": 2
      },
      {
        "id": 5,
        "title": "Ajouter le beurre",
        "action": "Hors feu, incorporer le beurre en dés et la fleur de sel.",
        "why": "Le beurre donne rondeur et brillance.",
        "mistake": "Ajouter trop de sel sans goûter → caramel déséquilibré.",
        "timer": null
      }
    ],
    "tips": [
      "Le caramel épaissit en refroidissant.",
      "Si le goût est brûlé, recommence : la crème ne l’effacera pas."
    ]
  },
  {
    "id": "ganache-chocolat-base",
    "title": "Ganache chocolat de base",
    "family": "pâtisserie",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 5,
    "servings": 6,
    "skills": [
      "chocolat",
      "ganache",
      "emulsion",
      "texture"
    ],
    "objectives": [
      "Créer une émulsion chocolat-crème",
      "Obtenir une texture lisse et brillante",
      "Adapter la ganache à une tarte ou un glaçage"
    ],
    "ingredients": [
      {
        "qty": "200",
        "unit": "g",
        "item": "chocolat noir",
        "note": "haché"
      },
      {
        "qty": "20",
        "unit": "cl",
        "item": "crème liquide",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Hacher le chocolat",
        "action": "Hacher le chocolat en petits morceaux réguliers et le mettre dans un bol.",
        "why": "Des morceaux petits fondent plus régulièrement.",
        "mistake": "Gros blocs → fonte inégale et mélange plus difficile.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Chauffer la crème",
        "action": "Porter la crème à frémissement, sans la faire déborder.",
        "why": "La crème chaude doit fondre le chocolat sans le brûler.",
        "mistake": "Crème trop réduite ou brûlée → goût altéré.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Verser et attendre",
        "action": "Verser la crème sur le chocolat et attendre 1 minute sans mélanger.",
        "why": "La chaleur commence à fondre le chocolat doucement.",
        "mistake": "Mélanger immédiatement avec de gros morceaux froids → ganache moins lisse.",
        "timer": 1
      },
      {
        "id": 4,
        "title": "Émulsionner",
        "action": "Mélanger depuis le centre jusqu’à obtenir un noyau brillant, puis élargir le mouvement.",
        "why": "Le mélange progressif construit une émulsion stable.",
        "mistake": "Fouetter brutalement → air incorporé et texture moins nette.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Ajouter le beurre si souhaité et mélanger jusqu’à texture lisse.",
        "why": "Le beurre apporte brillance et rondeur.",
        "mistake": "Ajouter le beurre dans une ganache trop chaude et battre fortement → risque de séparation.",
        "timer": null
      }
    ],
    "tips": [
      "Si la ganache tranche, ajoute une petite cuillère de crème chaude et mixe doucement.",
      "Pour une tarte, verse la ganache encore fluide sur le fond refroidi."
    ]
  },
  {
    "id": "assiette-poisson-legumes-sauce",
    "title": "Assiette poisson, légumes et sauce",
    "family": "poisson",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 20,
    "servings": 2,
    "skills": [
      "dressage",
      "poisson",
      "legumes",
      "sauce",
      "service"
    ],
    "objectives": [
      "Composer une assiette lisible",
      "Placer sauce et garniture sans détremper",
      "Servir chaud avec finition fraîche"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "filets de poisson",
        "note": "cuits vapeur ou poêle"
      },
      {
        "qty": "300",
        "unit": "g",
        "item": "légumes verts",
        "note": "cuits croquants"
      },
      {
        "qty": "10",
        "unit": "cl",
        "item": "sauce légère",
        "note": "beurre blanc, sauce vierge ou jus citronné"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes fraîches",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le service",
        "action": "Chauffer les assiettes si le plat est chaud. Préparer herbes, citron et sauce.",
        "why": "Le poisson attend mal. Tout doit être prêt avant la cuisson finale.",
        "mistake": "Préparer la finition après cuisson → poisson qui refroidit.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Placer la garniture",
        "action": "Déposer les légumes en base ou sur le côté, en gardant du volume.",
        "why": "La garniture structure l’assiette et soutient le poisson.",
        "mistake": "Éparpiller les légumes partout → assiette confuse.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Ajouter le poisson",
        "action": "Poser le poisson délicatement, peau croustillante vers le haut si présente.",
        "why": "Le produit principal doit rester visible et lisible.",
        "mistake": "Napper une peau croustillante directement → peau ramollie.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Saucer",
        "action": "Placer la sauce autour ou à côté, pas forcément sur toute la surface.",
        "why": "La sauce doit accompagner sans noyer ni détremper.",
        "mistake": "Trop de sauce → assiette lourde et peu nette.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Ajouter herbes, citron ou huile au dernier moment. Essuyer les bords.",
        "why": "La finition apporte fraîcheur et la propreté améliore le service.",
        "mistake": "Herbes ajoutées trop tôt sur sauce chaude → herbes ternes.",
        "timer": null
      }
    ],
    "tips": [
      "Le poisson doit être servi immédiatement après dressage.",
      "Si la sauce est fragile, sers-en une partie à côté."
    ]
  },
  {
    "id": "bol-improvise-riz-legumes-oeuf",
    "title": "Bol improvisé riz, légumes et œuf",
    "family": "pâtes",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 12,
    "servings": 1,
    "skills": [
      "improvisation",
      "riz",
      "legumes",
      "oeufs",
      "equilibre"
    ],
    "objectives": [
      "Construire un repas avec une base simple",
      "Utiliser sauce et finition pour équilibrer",
      "Transformer des restes en plat cohérent"
    ],
    "ingredients": [
      {
        "qty": "150",
        "unit": "g",
        "item": "riz cuit",
        "note": "chaud ou froid"
      },
      {
        "qty": "200",
        "unit": "g",
        "item": "légumes",
        "note": "restes ou légumes frais"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "œuf",
        "note": "mollet, au plat ou brouillé"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "sauce soja",
        "note": "ou vinaigrette"
      },
      {
        "qty": "1",
        "unit": "trait",
        "item": "citron ou vinaigre",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "herbes ou graines",
        "note": "finition"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Choisir la direction",
        "action": "Décider si le bol sera plutôt asiatique, méditerranéen ou simple beurre-citron.",
        "why": "Une intention évite d’ajouter des ingrédients contradictoires.",
        "mistake": "Tout mélanger sans direction → goût confus.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Réchauffer la base",
        "action": "Réchauffer le riz avec un peu d’eau ou à la poêle selon sa texture.",
        "why": "Un riz sec a besoin d’humidité, un riz humide gagne à être sauté.",
        "mistake": "Traiter tous les riz pareil → texture médiocre.",
        "timer": 3
      },
      {
        "id": 3,
        "title": "Cuire les légumes",
        "action": "Sauter ou réchauffer les légumes en respectant leur densité.",
        "why": "La texture des légumes donne du relief au bol.",
        "mistake": "Tout cuire trop longtemps → bol mou.",
        "timer": 5
      },
      {
        "id": 4,
        "title": "Ajouter l’œuf",
        "action": "Préparer l’œuf selon le temps disponible : mollet, au plat ou brouillé.",
        "why": "L’œuf apporte protéine, gras et liaison naturelle.",
        "mistake": "Surcuire l’œuf → perte de crémeux.",
        "timer": 4
      },
      {
        "id": 5,
        "title": "Équilibrer",
        "action": "Ajouter sauce soja ou vinaigrette, puis acidité, herbes ou graines.",
        "why": "La finition apporte sel, relief et contraste.",
        "mistake": "Trop de sauce soja d’un coup → bol trop salé.",
        "timer": null
      }
    ],
    "tips": [
      "Structure utile : base + légumes + protéine + sauce + finition.",
      "Ajoute un croquant si le bol paraît trop mou."
    ]
  },
  {
    "id": "atelier-diagnostic-soupe",
    "title": "Atelier diagnostic : soupe à corriger",
    "family": "soupe",
    "difficulty": 1,
    "timePrep": 5,
    "timeCook": 5,
    "servings": 2,
    "skills": [
      "diagnostic",
      "assaisonnement",
      "correction",
      "texture"
    ],
    "objectives": [
      "Identifier un défaut de goût",
      "Corriger progressivement",
      "Comparer avant et après"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "bols",
        "item": "soupe simple",
        "note": "maison ou reste"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "citron ou vinaigre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "huile d’olive ou beurre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "herbes ou croûtons",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Goûter sans corriger",
        "action": "Goûter la soupe et noter le défaut principal : fade, plate, trop épaisse, trop liquide, trop grasse.",
        "why": "Le diagnostic précède l’action.",
        "mistake": "Ajouter sel et citron sans avoir identifié le problème.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Corriger le sel",
        "action": "Ajouter une petite pincée de sel, mélanger et goûter.",
        "why": "Le sel révèle souvent les arômes déjà présents.",
        "mistake": "Saler fortement d’un coup → correction difficile.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Tester l’acidité",
        "action": "Ajouter quelques gouttes de citron ou vinaigre si la soupe reste plate.",
        "why": "L’acidité donne du relief sans forcément ajouter plus de sel.",
        "mistake": "Trop d’acide → soupe agressive.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Ajuster la texture",
        "action": "Détendre avec un peu d’eau chaude ou réduire si la soupe est trop liquide.",
        "why": "La texture influence la perception du goût.",
        "mistake": "Corriger le goût puis diluer beaucoup → assaisonnement à refaire.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Finir",
        "action": "Ajouter huile, beurre, herbes ou croûtons si cela améliore la dégustation.",
        "why": "La finition apporte gras, fraîcheur ou contraste.",
        "mistake": "Ajouter une finition sans fonction claire.",
        "timer": null
      }
    ],
    "tips": [
      "Compare une cuillère avant/après pour comprendre l’effet de chaque correction.",
      "Cet atelier peut être répété avec sauces, purées ou mijotés."
    ]
  },
  {
    "id": "atelier-creation-recette",
    "title": "Atelier création : construire une recette",
    "family": "pâtes",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 30,
    "servings": 2,
    "skills": [
      "creation",
      "improvisation",
      "journal",
      "equilibre"
    ],
    "objectives": [
      "Créer une recette à partir d’une intention",
      "Tester une seule variable principale",
      "Noter les résultats pour progresser"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "produit principal",
        "note": "légume, poisson, viande, œuf ou féculent"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "base",
        "note": "riz, pâte, pain, purée ou légumes"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "sauce ou liaison",
        "note": "vinaigrette, jus, crème, yaourt"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "finition",
        "note": "herbes, croquant, zeste, condiment"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Définir l’intention",
        "action": "Écrire le résultat recherché : frais, réconfortant, croustillant, léger, riche, végétal, acidulé.",
        "why": "L’intention guide les choix de cuisson et d’assaisonnement.",
        "mistake": "Commencer sans objectif → plat incohérent.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Choisir la structure",
        "action": "Définir base, principal, sauce et finition.",
        "why": "Cette structure évite les plats incomplets ou dispersés.",
        "mistake": "Ajouter des ingrédients sans rôle.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Choisir une variable à tester",
        "action": "Décider ce que tu veux apprendre : cuisson, sauce, découpe, acidité, texture.",
        "why": "Une seule variable permet de comprendre le résultat.",
        "mistake": "Changer tout à la fois → apprentissage flou.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuisiner et goûter",
        "action": "Réaliser le plat en notant les temps, signes de cuisson et corrections.",
        "why": "Les observations sont plus utiles que les temps seuls.",
        "mistake": "Ne noter que ? bon ? ou ? pas bon ?.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Conclure",
        "action": "Noter ce qui a marché, ce qui est à changer, et la prochaine version.",
        "why": "La progression vient de la comparaison entre essais.",
        "mistake": "Ne rien noter → impossible de reproduire ou améliorer.",
        "timer": null
      }
    ],
    "tips": [
      "Un bon test modifie une seule chose importante.",
      "La prochaine version doit être plus précise, pas forcément plus complexe."
    ]
  },
  {
    "id": "pate-brisee-salee-base",
    "title": "Pâte brisée salée de base",
    "family": "pâtes",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 25,
    "servings": 1,
    "skills": [
      "pate-brisee",
      "sablage",
      "repos",
      "cuisson-a-blanc"
    ],
    "objectives": [
      "Sablage farine-beurre",
      "Hydratation minimale",
      "Repos et cuisson à blanc"
    ],
    "ingredients": [
      {
        "qty": "250",
        "unit": "g",
        "item": "farine",
        "note": ""
      },
      {
        "qty": "125",
        "unit": "g",
        "item": "beurre froid",
        "note": "en dés"
      },
      {
        "qty": "5",
        "unit": "cl",
        "item": "eau froide",
        "note": "environ, à ajuster"
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Sabler",
        "action": "Mélanger farine, sel et beurre froid du bout des doigts jusqu’à obtenir une texture sableuse.",
        "why": "Le beurre enrobe la farine et limite une pâte trop élastique.",
        "mistake": "Travailler trop longtemps avec les mains chaudes → beurre fondu, pâte grasse et moins nette.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Ajouter l’eau",
        "action": "Ajouter l’eau froide progressivement, juste assez pour rassembler la pâte.",
        "why": "Moins il y a d’eau, plus la pâte reste friable.",
        "mistake": "Verser toute l’eau d’un coup → pâte collante et plus dure après cuisson.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Fraiser",
        "action": "Écraser une ou deux fois la pâte avec la paume pour homogénéiser, sans pétrir.",
        "why": "Le fraisage répartit le beurre sans développer excessivement le gluten.",
        "mistake": "Pétrir comme une pâte à pain → pâte dure et rétractée.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Reposer",
        "action": "Former un disque, filmer et laisser reposer 30 minutes au froid.",
        "why": "Le froid raffermit le beurre et détend la pâte.",
        "mistake": "Abaisser immédiatement → pâte qui colle et se rétracte.",
        "timer": 30
      },
      {
        "id": 5,
        "title": "Cuire à blanc",
        "action": "Foncer le moule, piquer, refroidir 10 minutes, couvrir de papier et poids. Cuire à 180°C 15 minutes, puis 5 à 10 minutes sans poids.",
        "why": "La cuisson à blanc sèche le fond avant une garniture humide.",
        "mistake": "Garnir cru avec un appareil humide → fond détrempé.",
        "timer": 25
      }
    ],
    "tips": [
      "Pour une quiche, la pâte doit être précuite mais pas trop colorée.",
      "Si elle casse à l’abaisse, laisse-la revenir 5 minutes à température ambiante."
    ]
  },
  {
    "id": "pate-pizza-simple",
    "title": "Pâte à pizza simple",
    "family": "pâtes",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 10,
    "servings": 2,
    "skills": [
      "pate-levee",
      "petrissage",
      "fermentation",
      "four-chaud"
    ],
    "objectives": [
      "Pétrir une pâte souple",
      "Laisser fermenter",
      "Étaler sans déchirer"
    ],
    "ingredients": [
      {
        "qty": "300",
        "unit": "g",
        "item": "farine",
        "note": "type T55 ou farine à pizza"
      },
      {
        "qty": "18",
        "unit": "cl",
        "item": "eau",
        "note": "à ajuster"
      },
      {
        "qty": "5",
        "unit": "g",
        "item": "sel",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "g",
        "item": "levure boulangère sèche",
        "note": "ou 8 g fraîche"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Mélanger",
        "action": "Mélanger farine, levure, eau et huile. Ajouter le sel quand la pâte commence à se former.",
        "why": "Le mélange hydrate la farine. Le sel assaisonne et contrôle la fermentation.",
        "mistake": "Mettre beaucoup de sel directement sur la levure sèche concentrée → fermentation affaiblie localement.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Pétrir",
        "action": "Pétrir 8 à 10 minutes jusqu’à obtenir une pâte plus lisse et élastique.",
        "why": "Le pétrissage construit le réseau de gluten.",
        "mistake": "Arrêter quand la pâte est encore déchirante → pâte difficile à étaler.",
        "timer": 10
      },
      {
        "id": 3,
        "title": "Laisser lever",
        "action": "Couvrir et laisser lever 1h30 à 2h, jusqu’à pâte gonflée.",
        "why": "La fermentation développe volume et goût.",
        "mistake": "Cuire juste après pétrissage → pâte dense et peu parfumée.",
        "timer": 100
      },
      {
        "id": 4,
        "title": "Étaler",
        "action": "Dégazer légèrement, former deux pâtons, reposer 10 minutes puis étaler doucement.",
        "why": "Le repos détend la pâte et limite la rétraction.",
        "mistake": "Forcer une pâte qui se rétracte → déchirures et pâte irrégulière.",
        "timer": 10
      },
      {
        "id": 5,
        "title": "Cuire chaud",
        "action": "Garnir légèrement et cuire dans un four très chaud, idéalement 240–250°C, sur plaque chaude.",
        "why": "La chaleur forte saisit la pâte avant que la garniture ne la détrempe.",
        "mistake": "Trop de garniture humide → pizza molle au centre.",
        "timer": 8
      }
    ],
    "tips": [
      "Une fermentation plus longue au froid donne souvent plus de goût.",
      "Garde la garniture simple : une pizza surchargée cuit mal."
    ]
  },
  {
    "id": "focaccia-debutant",
    "title": "Focaccia débutant",
    "family": "pâtes",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 25,
    "servings": 4,
    "skills": [
      "pate-levee",
      "hydratation",
      "fermentation",
      "huile-olive"
    ],
    "objectives": [
      "Gérer une pâte hydratée",
      "Conserver les bulles au façonnage",
      "Cuire une pâte moelleuse et dorée"
    ],
    "ingredients": [
      {
        "qty": "400",
        "unit": "g",
        "item": "farine",
        "note": ""
      },
      {
        "qty": "30",
        "unit": "cl",
        "item": "eau",
        "note": "tiède"
      },
      {
        "qty": "7",
        "unit": "g",
        "item": "sel",
        "note": ""
      },
      {
        "qty": "4",
        "unit": "g",
        "item": "levure boulangère sèche",
        "note": ""
      },
      {
        "qty": "4",
        "unit": "c. à soupe",
        "item": "huile d’olive",
        "note": "dont une partie pour le plat"
      },
      {
        "qty": "",
        "unit": "",
        "item": "romarin, fleur de sel",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Mélanger",
        "action": "Mélanger farine, levure, eau et sel jusqu’à obtenir une pâte collante.",
        "why": "La focaccia est plus hydratée qu’une pâte à pizza classique.",
        "mistake": "Ajouter beaucoup de farine pour supprimer le collant → focaccia dense.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Repos et rabats",
        "action": "Laisser reposer 20 minutes, puis faire quelques rabats avec les mains huilées. Répéter une fois si possible.",
        "why": "Les rabats renforcent la pâte sans pétrissage violent.",
        "mistake": "Manipuler avec des mains farinées en excès → pâte asséchée.",
        "timer": 40
      },
      {
        "id": 3,
        "title": "Lever",
        "action": "Laisser lever 1h30 environ, jusqu’à pâte gonflée et vivante.",
        "why": "La fermentation donne volume et goût.",
        "mistake": "Cuire trop tôt → mie compacte.",
        "timer": 90
      },
      {
        "id": 4,
        "title": "Façonner dans le plat",
        "action": "Huiler généreusement un plat. Déposer la pâte et l’étirer doucement. Laisser reposer si elle résiste.",
        "why": "Le repos évite de déchirer le réseau de gluten.",
        "mistake": "Forcer la pâte → bulles écrasées et structure abîmée.",
        "timer": null
      },
      {
        "id": 5,
        "title": "Marquer et cuire",
        "action": "Faire des creux avec les doigts huilés, ajouter huile, romarin et sel. Cuire à 220°C pendant 20 à 25 minutes.",
        "why": "Les creux retiennent l’huile et donnent la texture typique.",
        "mistake": "Four trop doux → focaccia pâle et sèche.",
        "timer": 25
      }
    ],
    "tips": [
      "La pâte doit rester souple et un peu collante.",
      "L’huile d’olive fait partie de la texture, pas seulement du goût."
    ]
  },
  {
    "id": "creme-patissiere-base",
    "title": "Crème pâtissière de base",
    "family": "pâtisserie",
    "difficulty": 2,
    "timePrep": 10,
    "timeCook": 8,
    "servings": 4,
    "skills": [
      "creme",
      "oeufs",
      "amidon",
      "cuisson"
    ],
    "objectives": [
      "Tempérer les œufs",
      "Cuire l’amidon",
      "Refroidir sans peau"
    ],
    "ingredients": [
      {
        "qty": "50",
        "unit": "cl",
        "item": "lait",
        "note": ""
      },
      {
        "qty": "4",
        "unit": "",
        "item": "jaunes d’œufs",
        "note": ""
      },
      {
        "qty": "90",
        "unit": "g",
        "item": "sucre",
        "note": ""
      },
      {
        "qty": "40",
        "unit": "g",
        "item": "maïzena ou farine",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "",
        "item": "vanille",
        "note": "gousse ou extrait"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Chauffer le lait",
        "action": "Chauffer le lait avec la vanille jusqu’à frémissement.",
        "why": "Le lait chaud parfumera et permettra de cuire la crème ensuite.",
        "mistake": "Faire déborder ou brûler le lait → goût altéré.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Blanchir",
        "action": "Fouetter jaunes et sucre, puis ajouter la maïzena.",
        "why": "Le mélange répartit sucre et amidon avant ajout du lait.",
        "mistake": "Laisser sucre et jaunes sans mélanger longtemps → jaunes qui grainent.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Tempérer",
        "action": "Verser une partie du lait chaud sur les jaunes en fouettant, puis remettre tout dans la casserole.",
        "why": "La montée progressive en température évite de cuire brutalement les œufs.",
        "mistake": "Verser tout le lait bouillant d’un coup sans fouetter → morceaux d’œufs.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire",
        "action": "Cuire à feu moyen en fouettant jusqu’à épaississement, puis maintenir une courte ébullition.",
        "why": "L’amidon doit cuire pour stabiliser la crème.",
        "mistake": "Arrêter dès épaississement sans cuisson suffisante → goût farineux.",
        "timer": 2
      },
      {
        "id": 5,
        "title": "Refroidir",
        "action": "Débarrasser dans un plat, filmer au contact et refroidir rapidement.",
        "why": "Le film évite la peau et le refroidissement protège la qualité.",
        "mistake": "Laisser en casserole chaude → surcuisson et croûte en surface.",
        "timer": null
      }
    ],
    "tips": [
      "Si la crème a quelques grumeaux, fouette ou mixe brièvement.",
      "Avant utilisation, détends-la au fouet pour retrouver une texture lisse."
    ]
  },
  {
    "id": "cake-citron-base",
    "title": "Cake citron de base",
    "family": "pâtisserie",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 40,
    "servings": 6,
    "skills": [
      "cake",
      "melange",
      "cuisson-four",
      "texture"
    ],
    "objectives": [
      "Mélanger sans trop travailler",
      "Cuire à cœur",
      "Apporter humidité avec un sirop léger"
    ],
    "ingredients": [
      {
        "qty": "180",
        "unit": "g",
        "item": "farine",
        "note": ""
      },
      {
        "qty": "150",
        "unit": "g",
        "item": "sucre",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "",
        "item": "œufs",
        "note": ""
      },
      {
        "qty": "100",
        "unit": "g",
        "item": "beurre fondu",
        "note": "tiède"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "citron",
        "note": "zeste + jus"
      },
      {
        "qty": "8",
        "unit": "g",
        "item": "levure chimique",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer",
        "action": "Préchauffer le four à 170°C. Beurrer et fariner le moule ou le chemiser.",
        "why": "Le cake doit entrer dans un four stable dès que l’appareil est prêt.",
        "mistake": "Préparer le moule après mélange → appareil qui attend et levure moins efficace.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Mélanger œufs et sucre",
        "action": "Fouetter œufs, sucre, sel et zeste jusqu’à mélange homogène.",
        "why": "Le sucre se dissout partiellement et le zeste parfume l’ensemble.",
        "mistake": "Zester jusqu’au blanc du citron → amertume.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Ajouter beurre et farine",
        "action": "Ajouter le beurre tiède, puis farine et levure tamisées. Mélanger juste assez.",
        "why": "Après la farine, il faut éviter de trop développer le gluten.",
        "mistake": "Fouetter longtemps après farine → cake plus dense.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Cuire",
        "action": "Verser dans le moule et cuire 35 à 45 minutes. Vérifier avec une lame au centre.",
        "why": "Le centre cuit plus lentement que les bords.",
        "mistake": "Se fier seulement à la couleur → centre parfois cru.",
        "timer": 40
      },
      {
        "id": 5,
        "title": "Imbiber légèrement",
        "action": "Mélanger le jus de citron avec un peu de sucre. Verser légèrement sur le cake tiède.",
        "why": "Le sirop apporte humidité et parfum.",
        "mistake": "Verser trop de jus → cake détrempé et acide.",
        "timer": null
      }
    ],
    "tips": [
      "Si le dessus colore trop vite, couvre légèrement en fin de cuisson.",
      "Le cake se tranche mieux une fois refroidi."
    ]
  },
  {
    "id": "pate-sucree-base",
    "title": "Pâte sucrée de base",
    "family": "pâtisserie",
    "difficulty": 2,
    "timePrep": 20,
    "timeCook": 25,
    "servings": 1,
    "skills": [
      "pate-sucree",
      "foncage",
      "repos",
      "cuisson-a-blanc"
    ],
    "objectives": [
      "Préparer une pâte sucrée nette",
      "Foncer sans tirer",
      "Cuire un fond croustillant"
    ],
    "ingredients": [
      {
        "qty": "250",
        "unit": "g",
        "item": "farine",
        "note": ""
      },
      {
        "qty": "125",
        "unit": "g",
        "item": "beurre pommade",
        "note": ""
      },
      {
        "qty": "90",
        "unit": "g",
        "item": "sucre glace",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "",
        "item": "œuf",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "pincée",
        "item": "sel",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Crémer",
        "action": "Mélanger beurre pommade, sucre glace et sel jusqu’à texture homogène.",
        "why": "Le sucre glace donne une texture fine et le beurre pommade se répartit bien.",
        "mistake": "Beurre fondu → pâte plus grasse et difficile à travailler.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Ajouter l’œuf",
        "action": "Ajouter l’œuf et mélanger sans fouetter excessivement.",
        "why": "L’œuf lie la pâte.",
        "mistake": "Fouetter longtemps → incorporation excessive d’air et texture moins nette.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Ajouter la farine",
        "action": "Ajouter la farine et mélanger juste jusqu’à formation de la pâte.",
        "why": "Limiter le travail après farine garde une pâte plus friable.",
        "mistake": "Pétrir longuement → pâte dure et rétractée.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Reposer et foncer",
        "action": "Repos au froid 1h. Abaisser, foncer sans tirer, puis refroidir 20 minutes.",
        "why": "Le repos détend la pâte et limite l’affaissement.",
        "mistake": "Foncer une pâte chaude → bords qui s’écroulent.",
        "timer": 80
      },
      {
        "id": 5,
        "title": "Cuire à blanc",
        "action": "Cuire avec poids à 170°C pendant 15 minutes, puis sans poids 5 à 10 minutes.",
        "why": "Le fond doit être sec et cuit avant garniture.",
        "mistake": "Fond juste blond mais encore mou → tarte détrempée après garniture.",
        "timer": 25
      }
    ],
    "tips": [
      "Pour une tarte aux fruits, laisse refroidir complètement avant de garnir.",
      "Un fond bien cuit sent le biscuit et reste sec au toucher."
    ]
  },
  {
    "id": "chantilly-stable",
    "title": "Chantilly stable",
    "family": "pâtisserie",
    "difficulty": 1,
    "timePrep": 10,
    "timeCook": 0,
    "servings": 4,
    "skills": [
      "creme-fouettee",
      "foisonnement",
      "froid",
      "texture"
    ],
    "objectives": [
      "Monter une crème froide",
      "Arrêter avant sur-fouettage",
      "Obtenir une texture lisse et ferme"
    ],
    "ingredients": [
      {
        "qty": "25",
        "unit": "cl",
        "item": "crème liquide entière",
        "note": "30% MG minimum, très froide"
      },
      {
        "qty": "25",
        "unit": "g",
        "item": "sucre glace",
        "note": "à ajuster"
      },
      {
        "qty": "1",
        "unit": "c. à café",
        "item": "vanille",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Refroidir",
        "action": "Mettre bol, fouet et crème au froid si possible.",
        "why": "Le froid aide la matière grasse à emprisonner l’air.",
        "mistake": "Crème tiède → montée difficile ou instable.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Commencer doucement",
        "action": "Fouetter la crème à vitesse moyenne jusqu’à ce qu’elle épaississe.",
        "why": "Une montée progressive donne une texture plus régulière.",
        "mistake": "Vitesse maximale dès le départ → contrôle plus difficile.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Sucrer",
        "action": "Ajouter le sucre glace quand la crème commence à tenir.",
        "why": "Le sucre glace s’incorpore facilement et stabilise légèrement.",
        "mistake": "Ajouter beaucoup de sucre dès le départ → montée ralentie.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Arrêter au bon point",
        "action": "Arrêter quand la crème forme des pics souples à fermes et reste lisse.",
        "why": "Au-delà, la crème devient granuleuse et peut tourner en beurre.",
        "mistake": "Continuer pour la rendre très dure → chantilly grainée.",
        "timer": null
      }
    ],
    "tips": [
      "Pour garnir une poche, vise une texture ferme mais encore lisse.",
      "Si elle commence à grainer, arrête immédiatement et ajoute une petite cuillère de crème froide en mélangeant doucement."
    ]
  },
  {
    "id": "verrine-cake-sec-recuperation",
    "title": "Verrine de récupération au cake sec",
    "family": "pâtisserie",
    "difficulty": 1,
    "timePrep": 15,
    "timeCook": 0,
    "servings": 4,
    "skills": [
      "recuperation",
      "texture",
      "creme",
      "dressage"
    ],
    "objectives": [
      "Transformer un gâteau sec",
      "Apporter humidité et contraste",
      "Construire un dessert simple et présentable"
    ],
    "ingredients": [
      {
        "qty": "250",
        "unit": "g",
        "item": "cake ou gâteau sec",
        "note": "en cubes"
      },
      {
        "qty": "20",
        "unit": "cl",
        "item": "crème fouettée ou yaourt grec",
        "note": ""
      },
      {
        "qty": "150",
        "unit": "g",
        "item": "fruits",
        "note": "compotée ou frais"
      },
      {
        "qty": "4",
        "unit": "c. à soupe",
        "item": "sirop léger ou jus de fruit",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "zeste, vanille ou chocolat râpé",
        "note": "facultatif"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Découper",
        "action": "Couper le gâteau sec en petits cubes réguliers.",
        "why": "Les petits morceaux absorbent mieux l’humidité et se mangent plus facilement.",
        "mistake": "Gros blocs secs → sensation sèche persistante.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Humidifier",
        "action": "Arroser légèrement avec sirop ou jus de fruit.",
        "why": "L’humidité compense la sécheresse du gâteau.",
        "mistake": "Trop arroser → bouillie sucrée.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Monter la verrine",
        "action": "Alterner gâteau, crème et fruits.",
        "why": "Les couches apportent contraste : moelleux, crémeux, fruité.",
        "mistake": "Tout mélanger fortement → texture confuse.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Reposer court",
        "action": "Laisser reposer 10 à 20 minutes au frais avant service.",
        "why": "Le gâteau s’humidifie sans se défaire complètement.",
        "mistake": "Repos trop long avec fruits très juteux → dessert détrempé.",
        "timer": 15
      }
    ],
    "tips": [
      "Fonctionne très bien avec cake citron, quatre-quarts ou génoise sèche.",
      "Ajoute un élément croquant au dernier moment si le dessert manque de texture."
    ]
  },
  {
    "id": "poulet-roti",
    "title": "Poulet rôti parfait",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 15,
    "timeCook": 80,
    "servings": 4,
    "skills": [
      "cuisson-four",
      "assaisonnement"
    ],
    "objectives": [
      "Obtenir une peau dorée et croustillante",
      "Cuisson à cœur parfaite sans dessèchement"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "poulet fermier",
        "note": "1,4–1,6 kg"
      },
      {
        "qty": "50",
        "unit": "g",
        "item": "beurre",
        "note": "pommade"
      },
      {
        "qty": "1",
        "unit": "",
        "item": "citron jaune",
        "note": ""
      },
      {
        "qty": "4",
        "unit": "branches",
        "item": "thym frais",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "feuilles",
        "item": "laurier",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel fin et poivre",
        "note": "généreux"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le poulet",
        "action": "Sortir le poulet du frigo 30 min avant. Sécher toute la peau avec du papier absorbant. Préchauffer le four à 210°C chaleur tournante.",
        "why": "Peau sèche = peau croustillante. Poulet à température ambiante = cuisson uniforme entre la surface et le cœur.",
        "mistake": "Enfourner directement sorti du frigo → peau molle, cuisson inégale, poitrine sèche avant que les cuisses soient cuites.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Assaisonner généreusement",
        "action": "Mélanger le beurre pommade avec le zeste du citron, du sel et du poivre. Enduire tout le poulet. Glisser le reste du beurre sous la peau de la poitrine avec les doigts. Farcir la cavité avec le thym, le laurier et le demi-citron pressé.",
        "why": "Le beurre sous la peau hydrate et protège la poitrine (partie qui s'assèche le plus vite) et cuit la peau directement pour la croûtiller.",
        "mistake": "Sous-assaisonner → poulet fade. Ne pas mettre de beurre sous la peau → poitrine sèche.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Rôtir en deux temps",
        "action": "Poser le poulet dos vers le haut dans un plat. Enfourner 20 min. Retourner poitrine vers le haut. Continuer 55–60 min. Arroser avec le jus du plat toutes les 20 min.",
        "why": "Commencer dos en haut : le gras des cuisses fond et s'écoule vers la poitrine, l'hydratant naturellement pendant les 20 premières minutes cruciales.",
        "mistake": "Ouvrir le four trop souvent → perte de chaleur → peau qui ne croustille pas. Ne pas arroser → dessèchement.",
        "timer": 80
      },
      {
        "id": 4,
        "title": "Vérifier la cuisson et laisser reposer",
        "action": "Piquer la cuisse profondément : le jus doit ressortir parfaitement clair (pas rosé). Ou thermomètre : 74°C dans la cuisse. Sortir du four et laisser reposer 10 min sous papier alu posé (non fermé).",
        "why": "Le repos redistribue les jus dans toute la chair. Couper trop tôt = les jus s'échappent dans l'assiette, chair sèche.",
        "mistake": "Sauter le repos ou l'écourter → perte des jus au découpage.",
        "timer": 10
      }
    ],
    "tips": [
      "Veille : frotter avec ail + herbes la veille, laisser au frigo à découvert toute la nuit → peau encore plus sèche et croustillante.",
      "Sauce rapide : déglacer le plat de cuisson avec 10 cl de vin blanc ou bouillon, racler les sucs, réduire 2 min."
    ]
  },
  {
    "id": "salade-composee",
    "title": "Salade composée et vinaigrette maison",
    "family": "légume",
    "difficulty": 1,
    "timePrep": 20,
    "timeCook": 0,
    "servings": 2,
    "skills": [
      "découpe",
      "assaisonnement",
      "émulsion"
    ],
    "objectives": [
      "Maîtriser la brunoise et la julienne sur des légumes réels",
      "Réussir une vinaigrette émulsionnée qui tient"
    ],
    "ingredients": [
      {
        "qty": "1",
        "unit": "",
        "item": "laitue ou mesclun",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "",
        "item": "concombre",
        "note": ""
      },
      {
        "qty": "10",
        "unit": "",
        "item": "tomates cerises",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "",
        "item": "œufs durs",
        "note": "optionnel"
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "moutarde de Dijon",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "c. à soupe",
        "item": "huile d'olive",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "vinaigre de vin",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer les légumes",
        "action": "Éplucher et râper les carottes en julienne fine. Couper le concombre en demi-lunes de 3-4mm. Couper les tomates cerises en deux. Laver et essorer la salade.",
        "why": "Des légumes taillés régulièrement donnent une texture agréable et une salade visuellement cohérente. La julienne de carotte se mélange mieux au reste.",
        "mistake": "Salade non essorée → la vinaigrette glisse sur les feuilles mouillées et ne tient pas.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Réaliser la vinaigrette",
        "action": "Dans un bol, mélanger vinaigre + moutarde + sel + poivre. Fouetter. Verser l'huile en filet tout en fouettant continuellement jusqu'à obtenir une sauce onctueuse et liée.",
        "why": "La moutarde est l'émulsifiant : elle enrobe les gouttes d'huile. Verser l'huile lentement permet aux gouttes de rester en suspension.",
        "mistake": "Verser toute l'huile d'un coup → la vinaigrette ne s'émulsionne pas, reste séparée.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Dresser et assaisonner",
        "action": "Disposer la salade en premier, puis les légumes par-dessus. Assaisonner juste avant de servir en versant la vinaigrette et en mélangeant délicatement.",
        "why": "On assaisonne au dernier moment : le sel et l'acide de la vinaigrette font \"tomber\" la salade rapidement.",
        "mistake": "Préparer trop à l'avance → feuilles molles, salade détrempée.",
        "timer": null
      }
    ],
    "tips": [
      "Changer le vinaigre selon l'humeur : balsamique avec mozzarella, de cidre avec salade d'endives, xérès avec salade tiède.",
      "Ajouter graines de tournesol, noix ou croûtons pour le croquant."
    ]
  },
  {
    "id": "soupe-legumes",
    "title": "Soupe de légumes de saison",
    "family": "soupe",
    "difficulty": 1,
    "timePrep": 20,
    "timeCook": 30,
    "servings": 4,
    "skills": [
      "découpe",
      "cuisson-douce",
      "assaisonnement"
    ],
    "objectives": [
      "Réaliser une soupe équilibrée en saveurs avec ce qu'on a",
      "Maîtriser le mirepoix comme base aromatique"
    ],
    "ingredients": [
      {
        "qty": "2",
        "unit": "",
        "item": "poireaux",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "",
        "item": "pommes de terre",
        "note": "grosses"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "carottes",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "",
        "item": "oignon",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "gousses",
        "item": "ail",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "L",
        "item": "bouillon de légumes ou eau",
        "note": ""
      },
      {
        "qty": "2",
        "unit": "c. à soupe",
        "item": "huile d'olive",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "crème fraîche ou beurre",
        "note": "optionnel, pour finir"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Suer les aromates",
        "action": "Émincer finement l'oignon et le poireau. Chauffer l'huile à feu doux dans une grande casserole. Ajouter l'oignon, poireau et ail. Cuire 5-7 min en remuant sans colorer — juste pour fondre.",
        "why": "Cuire les aromates à feu doux sans coloration \"sue\" les légumes : ils libèrent leurs sucres naturels et créent une base douce et sucrée plutôt qu'une base amère.",
        "mistake": "Cuire trop fort → légumes qui colorent → saveur amère dans la soupe.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Ajouter les légumes et couvrir de bouillon",
        "action": "Éplucher et couper carottes et pommes de terre en morceaux réguliers (3cm). Ajouter dans la casserole. Verser le bouillon à hauteur. Porter à ébullition puis baisser à frémissement.",
        "why": "Des morceaux réguliers cuisent en même temps. Le bouillon (pas l'eau) apporte déjà du corps et de la saveur.",
        "mistake": "Bouillon à gros bouillons → légumes qui se défont, soupe trouble.",
        "timer": 25
      },
      {
        "id": 3,
        "title": "Mixer et assaisonner",
        "action": "Vérifier la cuisson en piquant un morceau (doit s'écraser sans résistance). Mixer avec un mixeur plongeant jusqu'à consistance souhaitée (lisse ou légèrement rustique). Goûter, saler, poivrer. Finir avec un filet de crème ou une noix de beurre hors du feu.",
        "why": "La crème ou le beurre hors du feu lie la soupe et lui donne de l'onctuosité sans casser l'émulsion.",
        "mistake": "Saler avant de mixer : la réduction concentre les saveurs — saler toujours en dernier.",
        "timer": null
      }
    ],
    "tips": [
      "Trop épais : ajouter un peu d'eau chaude ou bouillon. Trop liquide : laisser réduire quelques minutes à feu moyen.",
      "Finitions selon l'humeur : huile de truffe, croûtons, ciboulette, crème fraîche, chips de lard."
    ]
  },
  {
    "id": "boeuf-carottes",
    "title": "Bœuf carottes mijoté",
    "family": "viande",
    "difficulty": 2,
    "timePrep": 25,
    "timeCook": 150,
    "servings": 4,
    "skills": [
      "mijotage",
      "braisage",
      "assaisonnement"
    ],
    "objectives": [
      "Transformer un morceau dur en viande fondante",
      "Construire une sauce riche par réduction"
    ],
    "ingredients": [
      {
        "qty": "1,2",
        "unit": "kg",
        "item": "paleron ou joue de bœuf",
        "note": "en gros dés de 5cm"
      },
      {
        "qty": "4",
        "unit": "",
        "item": "carottes",
        "note": "en rondelles épaisses"
      },
      {
        "qty": "2",
        "unit": "",
        "item": "oignons",
        "note": ""
      },
      {
        "qty": "3",
        "unit": "gousses",
        "item": "ail",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "bouteille",
        "item": "vin rouge corsé",
        "note": "type Côtes-du-Rhône"
      },
      {
        "qty": "30",
        "unit": "cl",
        "item": "bouillon de bœuf",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "c. à soupe",
        "item": "concentré de tomate",
        "note": ""
      },
      {
        "qty": "1",
        "unit": "bouquet",
        "item": "garni",
        "note": "thym, laurier, persil"
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre, huile",
        "note": ""
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Saisir la viande en petites quantités",
        "action": "Sécher la viande avec du papier absorbant. Assaisonner sel + poivre. Faire chauffer l'huile à feu fort dans une cocotte. Saisir la viande en plusieurs fois (ne pas surcharger) jusqu'à coloration brune sur toutes les faces. Réserver.",
        "why": "La réaction de Maillard sur la viande est la base du goût du plat entier. Surcharger la cocotte = vapeur = pas de coloration = plat fade.",
        "mistake": "Mettre toute la viande en même temps → chute de température → viande bouillie et grise, sans goût.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Faire revenir les légumes",
        "action": "Dans la même cocotte, faire revenir les oignons et ail 3 min. Ajouter le concentré de tomate, cuire 2 min en remuant (il doit s'assombrir légèrement).",
        "why": "Cuire le concentré de tomate le \"pincer\" — réduit son acidité et concentre son umami. Les sucs dorés de la viande s'intègrent aux légumes.",
        "mistake": "Sauter cette étape → sauce acide et moins profonde en goût.",
        "timer": null
      },
      {
        "id": 3,
        "title": "Déglacer et construire le mijoté",
        "action": "Remettre la viande dans la cocotte. Verser le vin, racler le fond avec une spatule. Ajouter le bouillon et le bouquet garni. Porter à ébullition, écumer si nécessaire. Baisser à frémissement doux.",
        "why": "Le déglaçage au vin récupère tous les sucs collés — la saveur concentrée de la saisie. L'alcool s'évapore, les tanins attendrissent la viande.",
        "mistake": "Oublier d'écumer les premières impuretés qui remontent → sauce trouble et légèrement amère.",
        "timer": null
      },
      {
        "id": 4,
        "title": "Mijoter longuement",
        "action": "Couvrir et cuire à frémissement : 2h au moins, ou 3h pour une texture \"fondant à la cuillère\". Ajouter les carottes après 1h (elles cuisent plus vite que la viande). Goûter et ajuster l'assaisonnement en fin de cuisson seulement.",
        "why": "Le collagène du paleron se transforme en gélatine entre 85-90°C sur la durée. C'est cette gélatine qui donne le fondant et l'onctuosité de la sauce.",
        "mistake": "Cuire à gros bouillons → fibres serrées → viande sèche. Saler trop tôt → la réduction concentre encore le sel.",
        "timer": 120
      }
    ],
    "tips": [
      "Meilleur le lendemain : le plat réchauffé doucement est toujours plus savoureux car les saveurs ont eu le temps de se marier.",
      "Si la sauce est trop liquide en fin de cuisson : retirer la viande, faire réduire la sauce à feu moyen 10-15 min."
    ]
  },
  {
    "id": "oeufs-cocotte",
    "title": "Œufs cocotte à la crème",
    "family": "œufs",
    "difficulty": 1,
    "timePrep": 5,
    "timeCook": 15,
    "servings": 2,
    "skills": [
      "cuisson-four",
      "assaisonnement"
    ],
    "objectives": [
      "Maîtriser la cuisson délicate des œufs au four",
      "Comprendre la notion de cuisson juste pour les œufs"
    ],
    "ingredients": [
      {
        "qty": "4",
        "unit": "",
        "item": "œufs frais",
        "note": ""
      },
      {
        "qty": "4",
        "unit": "c. à soupe",
        "item": "crème fraîche épaisse",
        "note": ""
      },
      {
        "qty": "20",
        "unit": "g",
        "item": "beurre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "sel, poivre",
        "note": ""
      },
      {
        "qty": "",
        "unit": "",
        "item": "ciboulette, cerfeuil",
        "note": "optionnel"
      }
    ],
    "steps": [
      {
        "id": 1,
        "title": "Préparer le bain-marie",
        "action": "Préchauffer le four à 180°C. Beurrer 2 ramequins. Verser 2 cm d'eau chaude dans un plat à gratin. Poser les ramequins dans le plat.",
        "why": "Le bain-marie transmet une chaleur douce et homogène — indispensable pour les œufs qui coagulent vite et deviennent caoutchouteux avec une chaleur directe.",
        "mistake": "Four trop chaud sans bain-marie → blanc cuit mais jaune dur, texture caoutchouteuse.",
        "timer": null
      },
      {
        "id": 2,
        "title": "Garnir et enfourner",
        "action": "Verser 2 cuillères de crème dans chaque ramequin. Casser délicatement 2 œufs dessus sans crever le jaune. Assaisonner sel + poivre. Enfourner 12-15 min.",
        "why": "L'œuf posé sur la crème cuit dans un environnement humide et gras qui protège le blanc. Le jaune doit rester coulant.",
        "mistake": "Crever le jaune → il cuit trop vite, devient sec au centre.",
        "timer": 13
      },
      {
        "id": 3,
        "title": "Surveiller et servir immédiatement",
        "action": "Le blanc doit être pris (opaque) et le jaune encore brillant et tremblotant. Sortir du four — les œufs continuent de cuire dans les ramequins chauds. Servir immédiatement avec mouillettes de pain grillé.",
        "why": "La cuisson résiduelle dans le ramequin chaud peut surcuire les jaunes en 2 minutes. Il vaut mieux sortir 30 secondes avant l'idéal.",
        "mistake": "Attendre que le jaune soit \"bien pris\" avant de sortir → jaune dur à la dégustation.",
        "timer": null
      }
    ],
    "tips": [
      "Variantes : ajouter champignons sautés, lard fumé, ou saumon fumé sous les œufs.",
      "Garnitures fraîches ajoutées après cuisson : ciboulette, caviar, herbes fraîches."
    ]
  }
];

var TECHNIQUES = [
  {
    "id": "signes-cuisson",
    "title": "Signes de cuisson",
    "emoji": "👀",
    "color": "#2563eb",
    "subtitle": "Observer avant de corriger",
    "items": [
      {
        "label": "Grésillement net",
        "value": "bonne évaporation",
        "note": "utile pour saisir ou sauter"
      },
      {
        "label": "Silence en poêle",
        "value": "trop froid / trop humide",
        "note": "remonter le feu ou désencombrer"
      },
      {
        "label": "Doré",
        "value": "arômes développés",
        "note": "surveiller pour ne pas brûler"
      },
      {
        "label": "Noir",
        "value": "amertume probable",
        "note": "baisser ou recommencer selon gravité"
      },
      {
        "label": "Nappant",
        "value": "sauce liée/réduite",
        "note": "tient sur la cuillère"
      },
      {
        "label": "Tremblotant",
        "value": "œuf/crème encore souple",
        "note": "attention à la cuisson résiduelle"
      }
    ]
  },
  {
    "id": "eau-cuissons",
    "title": "Eau, vapeur, pochage",
    "emoji": "💧",
    "color": "#2563eb",
    "subtitle": "Choisir l’agitation du liquide",
    "items": [
      {
        "label": "Bouillir",
        "value": "gros bouillons",
        "note": "pâtes, certains légumes, départ rapide"
      },
      {
        "label": "Frémir",
        "value": "petites bulles",
        "note": "soupes, pommes de terre, bouillons"
      },
      {
        "label": "Pocher",
        "value": "liquide calme",
        "note": "œufs, poissons, volailles délicates"
      },
      {
        "label": "Vapeur",
        "value": "chaleur humide",
        "note": "poisson, légumes, pommes de terre"
      },
      {
        "label": "Refroidir",
        "value": "stopper",
        "note": "légumes verts après cuisson courte"
      }
    ]
  },
  {
    "id": "diagnostic-poele",
    "title": "Diagnostic poêle",
    "emoji": "🔥",
    "color": "#dc2626",
    "subtitle": "Comprendre ce qui se passe",
    "items": [
      {
        "label": "Pâle + humide",
        "value": "trop froid / trop plein",
        "note": "évaporer, désencombrer"
      },
      {
        "label": "Noir trop vite",
        "value": "trop chaud",
        "note": "baisser ou retirer du feu"
      },
      {
        "label": "Accroche au début",
        "value": "croûte en formation",
        "note": "attendre avant de forcer"
      },
      {
        "label": "Cuit dehors, cru dedans",
        "value": "chaleur trop forte",
        "note": "finir plus doucement"
      },
      {
        "label": "Beurre noir",
        "value": "brûlé",
        "note": "ajouter plus tard ou baisser"
      }
    ]
  },
  {
    "id": "checklist-mise-en-place",
    "title": "Checklist mise en place",
    "emoji": "🧑‍🍳",
    "color": "#e85d04",
    "subtitle": "Avant d’allumer le feu",
    "items": [
      {
        "label": "Lire la recette",
        "value": "2 fois",
        "note": "repérer temps cachés et étapes critiques"
      },
      {
        "label": "Sortir le matériel",
        "value": "avant cuisson",
        "note": "poêle, casserole, spatule, assiette"
      },
      {
        "label": "Préparer les ingrédients",
        "value": "par ordre",
        "note": "regrouper ce qui part ensemble"
      },
      {
        "label": "Prévoir les déchets",
        "value": "1 bol",
        "note": "épluchures, coquilles, emballages"
      },
      {
        "label": "Préparer le service",
        "value": "avant la fin",
        "note": "assiette, herbes, sauce, finition"
      }
    ]
  },
  {
    "id": "niveaux-feu",
    "title": "Niveaux de feu",
    "emoji": "🔥",
    "color": "#e85d04",
    "subtitle": "Choisir l’intensité selon le résultat",
    "items": [
      {
        "label": "Feu doux",
        "value": "contrôle",
        "note": "œufs, sauces, beurre, poisson fragile"
      },
      {
        "label": "Feu moyen",
        "value": "cuisson régulière",
        "note": "légumes, réduction douce, fin de cuisson"
      },
      {
        "label": "Feu fort",
        "value": "coloration",
        "note": "saisie, évaporation, départ d’ébullition"
      },
      {
        "label": "Trop faible",
        "value": "vapeur",
        "note": "aliment gris, humide, peu coloré"
      },
      {
        "label": "Trop fort",
        "value": "brûlé",
        "note": "sucs noirs, beurre amer, ail brûlé"
      }
    ]
  },
  {
    "id": "decoupes-base",
    "title": "Découpes de base",
    "emoji": "🔪",
    "color": "#e85d04",
    "subtitle": "La taille change la cuisson",
    "items": [
      {
        "label": "Émincer",
        "value": "tranches fines",
        "note": "oignon, poireau, champignon"
      },
      {
        "label": "Ciseler",
        "value": "très fin",
        "note": "échalote, oignon, herbes"
      },
      {
        "label": "Hacher",
        "value": "fragments",
        "note": "ail, herbes, noix"
      },
      {
        "label": "Julienne",
        "value": "fins bâtonnets",
        "note": "garniture, cuisson rapide"
      },
      {
        "label": "Brunoise",
        "value": "petits dés",
        "note": "sauce, farce, garniture fine"
      },
      {
        "label": "Mirepoix",
        "value": "dés grossiers",
        "note": "fonds, soupes, mijotés"
      }
    ]
  },
  {
    "id": "legumes-familles-cuissons",
    "title": "Familles de légumes",
    "emoji": "🥦",
    "color": "#16a34a",
    "subtitle": "Adapter la cuisson au légume",
    "items": [
      {
        "label": "Légumes racines",
        "value": "denses",
        "note": "carotte, navet, panais : rôtir, glacer, mijoter"
      },
      {
        "label": "Légumes verts",
        "value": "fragiles",
        "note": "haricot, brocoli, petit pois : cuisson courte"
      },
      {
        "label": "Légumes aqueux",
        "value": "eau",
        "note": "courgette, tomate, champignon : évaporer"
      },
      {
        "label": "Alliacées",
        "value": "base aromatique",
        "note": "oignon, poireau, ail, échalote : feu contrôlé"
      },
      {
        "label": "Choux",
        "value": "soufre",
        "note": "éviter surcuisson prolongée"
      },
      {
        "label": "Légumes feuilles",
        "value": "rapides",
        "note": "épinards, blettes : cuisson courte, égouttage"
      }
    ]
  },
  {
    "id": "legumes-diagnostic",
    "title": "Diagnostic légumes",
    "emoji": "🥕",
    "color": "#16a34a",
    "subtitle": "Corriger selon le défaut",
    "items": [
      {
        "label": "Mous",
        "value": "surcuisson",
        "note": "transformer en soupe, purée, gratin"
      },
      {
        "label": "Aqueux",
        "value": "trop d’eau",
        "note": "égoutter, évaporer, ne pas ajouter d’huile"
      },
      {
        "label": "Fades",
        "value": "finition",
        "note": "sel, gras, acide, herbes"
      },
      {
        "label": "Brûlés",
        "value": "amertume",
        "note": "retirer les parties touchées si possible"
      },
      {
        "label": "Verts ternes",
        "value": "trop cuit",
        "note": "cuisson courte, refroidissement"
      },
      {
        "label": "Cuisson inégale",
        "value": "taille/densité",
        "note": "adapter coupe ou ordre d’ajout"
      }
    ]
  },
  {
    "id": "feculents-amidon",
    "title": "Amidon",
    "emoji": "🍚",
    "color": "#f59e0b",
    "subtitle": "Comprendre les textures",
    "items": [
      {
        "label": "Pâtes",
        "value": "eau amidonnée",
        "note": "garder pour lier la sauce"
      },
      {
        "label": "Riz",
        "value": "absorption",
        "note": "ratio et couvercle importants"
      },
      {
        "label": "Pommes de terre",
        "value": "variété",
        "note": "ferme pour salade, farineuse pour purée"
      },
      {
        "label": "Purée",
        "value": "ne pas mixer",
        "note": "sinon texture collante"
      },
      {
        "label": "Riz froid",
        "value": "plus ferme",
        "note": "idéal pour riz sauté"
      },
      {
        "label": "Surcuisson",
        "value": "irréversible",
        "note": "changer d’usage"
      }
    ]
  },
  {
    "id": "pates-reperes",
    "title": "Repères pâtes",
    "emoji": "🍝",
    "color": "#f59e0b",
    "subtitle": "Cuire et lier",
    "items": [
      {
        "label": "Eau salée",
        "value": "goût",
        "note": "les pâtes s’assaisonnent dans l’eau"
      },
      {
        "label": "Al dente",
        "value": "résistance",
        "note": "ferme, pas cru"
      },
      {
        "label": "Sauce prête",
        "value": "timing",
        "note": "les pâtes attendent mal"
      },
      {
        "label": "Eau de cuisson",
        "value": "liaison",
        "note": "amidon + sauce"
      },
      {
        "label": "Finir en poêle",
        "value": "enrobage",
        "note": "pâtes + sauce + eau"
      },
      {
        "label": "Fromage hors feu",
        "value": "texture",
        "note": "éviter granuleux"
      }
    ]
  },
  {
    "id": "riz-pommes-terre-reperes",
    "title": "Riz et pommes de terre",
    "emoji": "🥔",
    "color": "#f59e0b",
    "subtitle": "Éviter collant, mou et aqueux",
    "items": [
      {
        "label": "Riz absorption",
        "value": "liquide mesuré",
        "note": "ne pas ouvrir sans arrêt"
      },
      {
        "label": "Riz pilaf",
        "value": "nacrer",
        "note": "matière grasse puis liquide"
      },
      {
        "label": "Riz sauté",
        "value": "riz froid",
        "note": "plus sec, meilleur résultat"
      },
      {
        "label": "Pommes vapeur",
        "value": "goût net",
        "note": "moins gorgées d’eau"
      },
      {
        "label": "Pommes rissolées",
        "value": "surface sèche",
        "note": "précuire, sécher, colorer"
      },
      {
        "label": "Purée",
        "value": "écraser doux",
        "note": "liquide chaud progressivement"
      }
    ]
  },
  {
    "id": "four-reperes",
    "title": "Repères de four",
    "emoji": "🔥",
    "color": "#dc2626",
    "subtitle": "Adapter le four au résultat voulu",
    "items": [
      {
        "label": "160°C",
        "value": "doux/modéré",
        "note": "gratins longs, cuissons délicates"
      },
      {
        "label": "180°C",
        "value": "standard",
        "note": "gâteaux, volailles, plats familiaux"
      },
      {
        "label": "200–220°C",
        "value": "rôtir",
        "note": "légumes, départ de volaille, coloration"
      },
      {
        "label": "Grill",
        "value": "surface",
        "note": "gratiner sous surveillance"
      },
      {
        "label": "Chaleur tournante",
        "value": "évaporation",
        "note": "rôtir, sécher, cuire plusieurs plaques"
      },
      {
        "label": "Chaleur statique",
        "value": "douceur",
        "note": "tartes, flans, gratins fragiles"
      }
    ]
  },
  {
    "id": "mijotage-diagnostic",
    "title": "Diagnostic mijoté",
    "emoji": "🍲",
    "color": "#92400e",
    "subtitle": "Lire une cuisson longue",
    "items": [
      {
        "label": "Petites bulles",
        "value": "bon frémissement",
        "note": "cuisson douce et régulière"
      },
      {
        "label": "Gros bouillons",
        "value": "trop fort",
        "note": "risque viande sèche, sauce trouble"
      },
      {
        "label": "Viande résistante",
        "value": "pas assez cuit",
        "note": "prolonger doucement"
      },
      {
        "label": "Sauce liquide",
        "value": "réduire",
        "note": "retirer la viande si elle est déjà tendre"
      },
      {
        "label": "Sauce trop salée",
        "value": "réduction excessive",
        "note": "allonger ou ajouter élément non salé"
      }
    ]
  },
  {
    "id": "equilibre-gout",
    "title": "Équilibre du goût",
    "emoji": "🧂",
    "color": "#16a34a",
    "subtitle": "Corriger sans ajouter au hasard",
    "items": [
      {
        "label": "Fade",
        "value": "sel / acide / umami",
        "note": "corriger par petites touches"
      },
      {
        "label": "Trop salé",
        "value": "diluer",
        "note": "ajouter élément non salé"
      },
      {
        "label": "Trop gras",
        "value": "acide / herbes",
        "note": "réveiller et alléger"
      },
      {
        "label": "Trop acide",
        "value": "gras / douceur",
        "note": "arrondir progressivement"
      },
      {
        "label": "Trop amer",
        "value": "gras / sel / douceur",
        "note": "selon origine de l’amertume"
      },
      {
        "label": "Plat plat",
        "value": "souvent manque d’acide",
        "note": "tester avant de ressaler"
      }
    ]
  },
  {
    "id": "aromates-reperes",
    "title": "Aromates et herbes",
    "emoji": "🌿",
    "color": "#16a34a",
    "subtitle": "Quand les ajouter",
    "items": [
      {
        "label": "Oignon",
        "value": "début",
        "note": "base douce si feu modéré"
      },
      {
        "label": "Échalote",
        "value": "court/modéré",
        "note": "brûle vite si ciselée"
      },
      {
        "label": "Ail haché",
        "value": "tardif",
        "note": "brûle vite à feu fort"
      },
      {
        "label": "Ail en chemise",
        "value": "long",
        "note": "parfum doux, supporte mieux le four"
      },
      {
        "label": "Herbes tendres",
        "value": "finition",
        "note": "persil, basilic, ciboulette"
      },
      {
        "label": "Herbes robustes",
        "value": "infusion",
        "note": "thym, laurier, romarin"
      },
      {
        "label": "Épices poudre",
        "value": "feu doux",
        "note": "brûlent vite"
      }
    ]
  },
  {
    "id": "emulsions-froides",
    "title": "Émulsions froides",
    "emoji": "🫙",
    "color": "#16a34a",
    "subtitle": "Stabiliser huile et eau",
    "items": [
      {
        "label": "Vinaigrette",
        "value": "1 acide / 3 huile",
        "note": "ratio de départ"
      },
      {
        "label": "Sel",
        "value": "dans l’acide",
        "note": "avant l’huile"
      },
      {
        "label": "Moutarde",
        "value": "émulsifiant",
        "note": "aide à lier"
      },
      {
        "label": "Mayonnaise",
        "value": "huile lente au début",
        "note": "sinon tranche"
      },
      {
        "label": "Mayo trop épaisse",
        "value": "eau/acide",
        "note": "quelques gouttes"
      },
      {
        "label": "Mayo tranchée",
        "value": "nouvelle base",
        "note": "réincorporer progressivement"
      }
    ]
  },
  {
    "id": "liaisons-sauces",
    "title": "Liaisons de sauces",
    "emoji": "🥣",
    "color": "#f97316",
    "subtitle": "Choisir comment donner de la texture",
    "items": [
      {
        "label": "Réduction",
        "value": "concentre",
        "note": "goût plus intense, attention au sel"
      },
      {
        "label": "Roux",
        "value": "épaissit",
        "note": "farine + beurre, doit cuire"
      },
      {
        "label": "Fécule",
        "value": "rapide",
        "note": "à diluer à froid avant ajout"
      },
      {
        "label": "Crème",
        "value": "nappante",
        "note": "réduction douce"
      },
      {
        "label": "Jaune",
        "value": "riche",
        "note": "chaleur douce obligatoire"
      },
      {
        "label": "Beurre",
        "value": "brillance",
        "note": "hors feu ou feu doux"
      }
    ]
  },
  {
    "id": "deglacage-reperes",
    "title": "Déglaçage",
    "emoji": "🍖",
    "color": "#92400e",
    "subtitle": "Transformer les sucs en sauce",
    "items": [
      {
        "label": "Sucs bruns",
        "value": "bon goût",
        "note": "déglacer"
      },
      {
        "label": "Sucs noirs",
        "value": "amertume",
        "note": "ne pas forcer"
      },
      {
        "label": "Dégraisser",
        "value": "alléger",
        "note": "retirer gras, garder sucs"
      },
      {
        "label": "Vin",
        "value": "acidité",
        "note": "réduire avant service"
      },
      {
        "label": "Bouillon/fond",
        "value": "profondeur",
        "note": "idéal pour jus court"
      },
      {
        "label": "Beurre froid",
        "value": "finition",
        "note": "monter sans bouillir"
      }
    ]
  },
  {
    "id": "fonds-bouillons-reperes",
    "title": "Fonds et bouillons",
    "emoji": "🍲",
    "color": "#92400e",
    "subtitle": "Bases liquides de goût",
    "items": [
      {
        "label": "Bouillon",
        "value": "léger",
        "note": "cuisson, soupe, risotto"
      },
      {
        "label": "Fond",
        "value": "structurant",
        "note": "sauces, jus, réductions"
      },
      {
        "label": "Fond brun",
        "value": "coloré",
        "note": "os/parures rôtis ou saisis"
      },
      {
        "label": "Fumet",
        "value": "poisson",
        "note": "cuisson courte"
      },
      {
        "label": "Frémir",
        "value": "propre",
        "note": "éviter gros bouillons"
      },
      {
        "label": "Peu saler",
        "value": "contrôle",
        "note": "surtout si réduction"
      }
    ]
  },
  {
    "id": "emulsions-chaudes-reperes",
    "title": "Émulsions chaudes",
    "emoji": "🧈",
    "color": "#facc15",
    "subtitle": "Température et incorporation",
    "items": [
      {
        "label": "Beurre blanc",
        "value": "réduction + beurre",
        "note": "feu doux, service minute"
      },
      {
        "label": "Hollandaise",
        "value": "jaune + beurre",
        "note": "bain-marie conseillé"
      },
      {
        "label": "Béarnaise",
        "value": "hollandaise aromatique",
        "note": "estragon, réduction vinaigrée"
      },
      {
        "label": "Trop chaud",
        "value": "tranche/coagule",
        "note": "retirer du feu"
      },
      {
        "label": "Trop épais",
        "value": "détendre",
        "note": "quelques gouttes d’eau tiède"
      },
      {
        "label": "Tranché",
        "value": "nouvelle base",
        "note": "réincorporer doucement"
      }
    ]
  },
  {
    "id": "oeufs-cuissons",
    "title": "Cuissons des œufs",
    "emoji": "🥚",
    "color": "#facc15",
    "subtitle": "Repères à ajuster selon taille et matériel",
    "items": [
      {
        "label": "Coque",
        "value": "3 min env.",
        "note": "blanc juste pris, jaune liquide"
      },
      {
        "label": "Mollet",
        "value": "6 min env.",
        "note": "blanc pris, jaune coulant"
      },
      {
        "label": "Dur",
        "value": "9-10 min env.",
        "note": "refroidir pour éviter surcuisson"
      },
      {
        "label": "Brouillés",
        "value": "feu doux",
        "note": "retirer encore brillants"
      },
      {
        "label": "Omelette",
        "value": "cuisson rapide",
        "note": "finir baveuse"
      },
      {
        "label": "Poché",
        "value": "eau frémissante",
        "note": "œuf frais, petit bol"
      },
      {
        "label": "Liaison",
        "value": "chaleur douce",
        "note": "tempérer avec liquide chaud"
      }
    ]
  },
  {
    "id": "viandes-cuissons-reperes",
    "title": "Repères viandes rouges et porc",
    "emoji": "🥩",
    "color": "#991b1b",
    "subtitle": "Choisir la bonne méthode",
    "items": [
      {
        "label": "Pièce tendre",
        "value": "cuisson courte",
        "note": "steak, filet, côte épaisse"
      },
      {
        "label": "Morceau ferme",
        "value": "cuisson longue",
        "note": "paleron, joue, jarret, épaule"
      },
      {
        "label": "Surface humide",
        "value": "mauvaise saisie",
        "note": "sécher avant cuisson"
      },
      {
        "label": "Pièce épaisse",
        "value": "saisir puis finir doux",
        "note": "four ou feu réduit"
      },
      {
        "label": "Repos",
        "value": "jutosité",
        "note": "quelques minutes à 15 min selon taille"
      },
      {
        "label": "Découpe",
        "value": "contre-fil",
        "note": "surtout bavette, onglet, rôti"
      }
    ]
  },
  {
    "id": "porc-reperes",
    "title": "Repères porc",
    "emoji": "🐖",
    "color": "#991b1b",
    "subtitle": "Adapter selon le morceau",
    "items": [
      {
        "label": "Filet mignon",
        "value": "maigre",
        "note": "saisir puis finir doucement"
      },
      {
        "label": "Côte",
        "value": "cuisson précise",
        "note": "attention au dessèchement"
      },
      {
        "label": "Échine",
        "value": "plus grasse",
        "note": "poêle, grill ou mijoté court"
      },
      {
        "label": "Épaule",
        "value": "longue cuisson",
        "note": "braisé, effiloché"
      },
      {
        "label": "Poitrine",
        "value": "gras/croustillant",
        "note": "confire, griller ou braiser"
      },
      {
        "label": "Sauces",
        "value": "acidité douce",
        "note": "moutarde, cidre, vinaigre, crème"
      }
    ]
  },
  {
    "id": "volaille-reperes",
    "title": "Repères volaille",
    "emoji": "🍗",
    "color": "#d97706",
    "subtitle": "Blanc, cuisse, peau, jus",
    "items": [
      {
        "label": "Blanc",
        "value": "maigre",
        "note": "épaisseur régulière, cuisson douce"
      },
      {
        "label": "Cuisse",
        "value": "plus longue",
        "note": "cuire à cœur près de l’os"
      },
      {
        "label": "Peau",
        "value": "sécher",
        "note": "meilleure coloration"
      },
      {
        "label": "Volaille entière",
        "value": "compromis",
        "note": "blanc fragile, cuisse longue"
      },
      {
        "label": "Repos",
        "value": "important",
        "note": "stabilise les jus"
      },
      {
        "label": "Cru/cuit",
        "value": "séparer",
        "note": "outils, planches, pinces"
      }
    ]
  },
  {
    "id": "poisson-reperes",
    "title": "Repères poisson",
    "emoji": "🐟",
    "color": "#0f766e",
    "subtitle": "Cuire court et lire la chair",
    "items": [
      {
        "label": "Chair nacrée",
        "value": "juste",
        "note": "souvent mieux que totalement sèche"
      },
      {
        "label": "Chair sèche",
        "value": "trop cuit",
        "note": "sauce ou nouvel usage"
      },
      {
        "label": "Peau croustillante",
        "value": "sécher",
        "note": "cuire surtout côté peau"
      },
      {
        "label": "Poisson fragile",
        "value": "vapeur/pochage",
        "note": "liquide calme"
      },
      {
        "label": "Filet fin",
        "value": "très court",
        "note": "surveillance minute"
      },
      {
        "label": "Pavé épais",
        "value": "progressif",
        "note": "finir doucement"
      }
    ]
  },
  {
    "id": "fruits-mer-reperes",
    "title": "Repères fruits de mer",
    "emoji": "🦐",
    "color": "#0f766e",
    "subtitle": "Fraîcheur et cuisson courte",
    "items": [
      {
        "label": "Odeur suspecte",
        "value": "ne pas utiliser",
        "note": "la cuisson ne sauve pas"
      },
      {
        "label": "Moules cassées",
        "value": "écarter",
        "note": "tri avant cuisson"
      },
      {
        "label": "Moules fermées après cuisson",
        "value": "écarter",
        "note": "prudence"
      },
      {
        "label": "Crevettes",
        "value": "très court",
        "note": "sinon caoutchouteuses"
      },
      {
        "label": "Jus coquillages",
        "value": "filtrer",
        "note": "sable, sel, goût puissant"
      },
      {
        "label": "Calamars",
        "value": "court ou long",
        "note": "entre deux = dur"
      }
    ]
  },
  {
    "id": "patisserie-sensible-reperes",
    "title": "Pâtisserie sensible",
    "emoji": "🍫",
    "color": "#7c2d12",
    "subtitle": "Préparations peu tolérantes",
    "items": [
      {
        "label": "Meringue",
        "value": "air + sucre",
        "note": "bol propre, sucre progressif, cuisson douce"
      },
      {
        "label": "Caramel",
        "value": "sucre chauffé",
        "note": "couleur = goût, attention brûlures"
      },
      {
        "label": "Chocolat",
        "value": "chaleur douce",
        "note": "éviter eau et surchauffe"
      },
      {
        "label": "Ganache",
        "value": "émulsion",
        "note": "crème + chocolat, mélange progressif"
      },
      {
        "label": "Brûlé",
        "value": "peu récupérable",
        "note": "recommencer si goût dominant"
      },
      {
        "label": "Tranché",
        "value": "émulsion cassée",
        "note": "reconstruire avec base liquide"
      }
    ]
  },
  {
    "id": "caramel-chocolat-diagnostic",
    "title": "Diagnostic caramel et chocolat",
    "emoji": "🍮",
    "color": "#7c2d12",
    "subtitle": "Identifier avant d’agir",
    "items": [
      {
        "label": "Caramel sableux",
        "value": "cristallisé",
        "note": "chauffer doucement ou recommencer"
      },
      {
        "label": "Caramel noir",
        "value": "brûlé",
        "note": "amertume difficile à masquer"
      },
      {
        "label": "Chocolat pâteux",
        "value": "massé",
        "note": "eau ou surchauffe"
      },
      {
        "label": "Ganache huileuse",
        "value": "tranchée",
        "note": "liquide chaud + mixage doux"
      },
      {
        "label": "Meringue collante",
        "value": "pas assez séchée",
        "note": "prolonger à basse température"
      },
      {
        "label": "Chantilly grainée",
        "value": "trop fouettée",
        "note": "arrêter immédiatement"
      }
    ]
  },
  {
    "id": "dressage-reperes",
    "title": "Dressage",
    "emoji": "🍽️",
    "color": "#334155",
    "subtitle": "Assiette lisible et mangeable",
    "items": [
      {
        "label": "Produit principal",
        "value": "sujet",
        "note": "doit être identifiable"
      },
      {
        "label": "Garniture",
        "value": "support",
        "note": "volume, texture, équilibre"
      },
      {
        "label": "Sauce",
        "value": "lien",
        "note": "accessible sans noyer"
      },
      {
        "label": "Finition",
        "value": "relief",
        "note": "goût, fraîcheur ou croquant"
      },
      {
        "label": "Bords propres",
        "value": "soin",
        "note": "essuyer avant service"
      },
      {
        "label": "Mangeable",
        "value": "priorité",
        "note": "beau mais pratique"
      }
    ]
  },
  {
    "id": "service-timing-reperes",
    "title": "Timing de service",
    "emoji": "⏱️",
    "color": "#334155",
    "subtitle": "Ce qui attend et ce qui n’attend pas",
    "items": [
      {
        "label": "Mijoté",
        "value": "attend bien",
        "note": "feu très doux ou repos"
      },
      {
        "label": "Poisson",
        "value": "attend mal",
        "note": "cuisson proche du service"
      },
      {
        "label": "Salade assaisonnée",
        "value": "attend mal",
        "note": "tombe et rend de l’eau"
      },
      {
        "label": "Viande",
        "value": "repos utile",
        "note": "découpe après repos"
      },
      {
        "label": "Sauce émulsionnée",
        "value": "fragile",
        "note": "service minute"
      },
      {
        "label": "Croustillant",
        "value": "dernier moment",
        "note": "éviter humidité"
      }
    ]
  },
  {
    "id": "correction-improvisation-reperes",
    "title": "Correction et improvisation",
    "emoji": "🧠",
    "color": "#4f46e5",
    "subtitle": "Devenir autonome",
    "items": [
      {
        "label": "Fade",
        "value": "sel/acide/umami",
        "note": "corriger progressivement"
      },
      {
        "label": "Trop salé",
        "value": "diluer",
        "note": "ajouter élément non salé"
      },
      {
        "label": "Trop gras",
        "value": "acidité/fraîcheur",
        "note": "réveiller et alléger"
      },
      {
        "label": "Trop cuit",
        "value": "transformer",
        "note": "sauce, gratin, soupe, rillettes"
      },
      {
        "label": "Improviser",
        "value": "structure",
        "note": "base + principal + sauce + finition"
      },
      {
        "label": "Créer",
        "value": "tester",
        "note": "une variable à la fois"
      }
    ]
  },
  {
    "id": "creation-recette-journal",
    "title": "Journal de création",
    "emoji": "📓",
    "color": "#4f46e5",
    "subtitle": "Noter pour progresser",
    "items": [
      {
        "label": "Intention",
        "value": "objectif",
        "note": "frais, riche, croustillant, léger…"
      },
      {
        "label": "Variables",
        "value": "test",
        "note": "changer une chose à la fois"
      },
      {
        "label": "Signes",
        "value": "observation",
        "note": "texture, couleur, odeur, cuisson"
      },
      {
        "label": "Correction",
        "value": "trace",
        "note": "ce qui a été ajouté ou modifié"
      },
      {
        "label": "Résultat",
        "value": "analyse",
        "note": "ce qui marche ou non"
      },
      {
        "label": "Prochaine fois",
        "value": "progression",
        "note": "une amélioration précise"
      }
    ]
  },
  {
    "id": "pates-salees-reperes",
    "title": "Pâtes salées",
    "emoji": "🥖",
    "color": "#b45309",
    "subtitle": "Choisir la bonne logique",
    "items": [
      {
        "label": "Pâte brisée",
        "value": "friable",
        "note": "peu d’eau, peu de travail, repos froid"
      },
      {
        "label": "Pâte à pizza",
        "value": "élastique",
        "note": "pétrissage, fermentation, four chaud"
      },
      {
        "label": "Focaccia",
        "value": "hydratée",
        "note": "pâte collante, huile, moelleux"
      },
      {
        "label": "Pain simple",
        "value": "structure",
        "note": "pétrir, lever, façonner, cuire chaud"
      },
      {
        "label": "Fond détrempé",
        "value": "humidité",
        "note": "précuire, égoutter, plaque chaude"
      },
      {
        "label": "Rétraction",
        "value": "gluten tendu",
        "note": "repos indispensable"
      }
    ]
  },
  {
    "id": "pates-levees-diagnostic",
    "title": "Diagnostic pâtes levées",
    "emoji": "🍕",
    "color": "#b45309",
    "subtitle": "Lire fermentation et texture",
    "items": [
      {
        "label": "Dense",
        "value": "pas assez levé",
        "note": "fermentation ou pétrissage insuffisant"
      },
      {
        "label": "Se rétracte",
        "value": "gluten tendu",
        "note": "laisser reposer"
      },
      {
        "label": "Se déchire",
        "value": "réseau faible",
        "note": "pétrissage ou repos insuffisant"
      },
      {
        "label": "Trop collante",
        "value": "hydratation",
        "note": "huiler les mains plutôt que fariner massivement"
      },
      {
        "label": "Pâte acide",
        "value": "sur-fermentation",
        "note": "temps/température à contrôler"
      },
      {
        "label": "Fond mou",
        "value": "four pas assez chaud",
        "note": "plaque chaude, garniture légère"
      }
    ]
  },
  {
    "id": "patisserie-roles-ingredients",
    "title": "Rôles des ingrédients",
    "emoji": "🍰",
    "color": "#db2777",
    "subtitle": "Comprendre avant de remplacer",
    "items": [
      {
        "label": "Farine",
        "value": "structure",
        "note": "trop travaillée = texture dure"
      },
      {
        "label": "Sucre",
        "value": "goût + humidité",
        "note": "aide aussi coloration et stabilité"
      },
      {
        "label": "Œufs",
        "value": "liaison + volume",
        "note": "coagulent à la chaleur"
      },
      {
        "label": "Beurre",
        "value": "goût + tendreté",
        "note": "froid, pommade ou fondu selon effet"
      },
      {
        "label": "Levure chimique",
        "value": "gaz",
        "note": "four préchauffé nécessaire"
      },
      {
        "label": "Sel",
        "value": "révélateur",
        "note": "même en sucré"
      }
    ]
  },
  {
    "id": "cremes-patisserie-reperes",
    "title": "Crèmes de base",
    "emoji": "🥣",
    "color": "#db2777",
    "subtitle": "Épaissir sans rater",
    "items": [
      {
        "label": "Crème pâtissière",
        "value": "œuf + amidon",
        "note": "doit bouillir brièvement"
      },
      {
        "label": "Crème anglaise",
        "value": "jaunes seuls",
        "note": "napper sans bouillir"
      },
      {
        "label": "Chantilly",
        "value": "crème froide",
        "note": "arrêter avant grains"
      },
      {
        "label": "Tempérer",
        "value": "protéger les œufs",
        "note": "liquide chaud progressivement"
      },
      {
        "label": "Filmer contact",
        "value": "éviter peau",
        "note": "refroidir rapidement"
      },
      {
        "label": "Grumeaux",
        "value": "mixage/filtrage",
        "note": "si pas brûlé"
      }
    ]
  },
  {
    "id": "patisserie-diagnostic",
    "title": "Diagnostic pâtisserie",
    "emoji": "🧁",
    "color": "#db2777",
    "subtitle": "Comprendre les défauts fréquents",
    "items": [
      {
        "label": "Gâteau sec",
        "value": "surcuisson / trop farine",
        "note": "servir avec sirop ou crème"
      },
      {
        "label": "Cake cru centre",
        "value": "cuisson insuffisante",
        "note": "prolonger plus doux"
      },
      {
        "label": "Pâte dure",
        "value": "trop travaillée",
        "note": "repos aide mais ne répare pas tout"
      },
      {
        "label": "Fond mou",
        "value": "humidité",
        "note": "cuisson à blanc ou protection"
      },
      {
        "label": "Crème grainée",
        "value": "trop chaud",
        "note": "mixer/filtrer si léger"
      },
      {
        "label": "Chantilly grainée",
        "value": "trop fouettée",
        "note": "arrêter immédiatement"
      }
    ]
  },
  {
    "id": "temperatures",
    "title": "Températures internes",
    "emoji": "🌡️",
    "color": "#dc2626",
    "subtitle": "Le seul moyen fiable de cuire juste",
    "items": [
      {
        "label": "Bœuf saignant",
        "value": "52–54°C",
        "note": "cœur rouge vif"
      },
      {
        "label": "Bœuf à point",
        "value": "57–60°C",
        "note": "cœur rosé"
      },
      {
        "label": "Bœuf bien cuit",
        "value": "68°C+",
        "note": ""
      },
      {
        "label": "Agneau rosé",
        "value": "58–60°C",
        "note": ""
      },
      {
        "label": "Poulet (cuisse)",
        "value": "74°C",
        "note": "jus clair = cuit"
      },
      {
        "label": "Porc",
        "value": "65°C",
        "note": ""
      },
      {
        "label": "Poisson",
        "value": "55–60°C",
        "note": "chair qui se détache"
      },
      {
        "label": "Canard (magret)",
        "value": "57°C",
        "note": "rosé"
      }
    ]
  },
  {
    "id": "decoupes",
    "title": "Tailles de découpe",
    "emoji": "🔪",
    "color": "#e85d04",
    "subtitle": "Des morceaux réguliers = cuisson uniforme",
    "items": [
      {
        "label": "Brunoise",
        "value": "1–3 mm",
        "note": "petits dés, bases de sauce"
      },
      {
        "label": "Macédoine",
        "value": "5 mm",
        "note": "dés moyens, salades"
      },
      {
        "label": "Jardinière",
        "value": "4 mm × 4 cm",
        "note": "bâtonnets moyens"
      },
      {
        "label": "Julienne",
        "value": "2 mm × 5 cm",
        "note": "bâtonnets fins, garnitures"
      },
      {
        "label": "Mirepoix",
        "value": "1–2 cm",
        "note": "fonds, jus, braisés"
      },
      {
        "label": "Chiffonnade",
        "value": "lanières fines",
        "note": "herbes roulées et tranchées"
      },
      {
        "label": "Ciseler",
        "value": "très fin",
        "note": "oignon, échalote, ail"
      }
    ]
  },
  {
    "id": "repos",
    "title": "Temps de repos des viandes",
    "emoji": "⏸️",
    "color": "#2563eb",
    "subtitle": "Indispensable pour redistribuer les jus",
    "items": [
      {
        "label": "Steak fin (1 cm)",
        "value": "2–3 min",
        "note": "sous papier alu"
      },
      {
        "label": "Steak épais (3 cm)",
        "value": "5–7 min",
        "note": ""
      },
      {
        "label": "Côte de bœuf",
        "value": "10–15 min",
        "note": ""
      },
      {
        "label": "Poulet entier",
        "value": "10–15 min",
        "note": "alu posé non fermé"
      },
      {
        "label": "Rôti (1 kg)",
        "value": "15–20 min",
        "note": ""
      },
      {
        "label": "Gigot (2 kg)",
        "value": "20–25 min",
        "note": ""
      },
      {
        "label": "Règle générale",
        "value": "= temps de cuisson",
        "note": "max 20 min"
      }
    ]
  },
  {
    "id": "oeufs",
    "title": "Cuissons des œufs",
    "emoji": "🥚",
    "color": "#d97706",
    "subtitle": "Départ eau bouillante, œufs froids",
    "items": [
      {
        "label": "À la coque",
        "value": "3 min",
        "note": "blanc coagulé, jaune liquide"
      },
      {
        "label": "Mollet",
        "value": "6 min",
        "note": "blanc ferme, jaune coulant"
      },
      {
        "label": "Dur",
        "value": "10 min",
        "note": "tout coagulé"
      },
      {
        "label": "Poché",
        "value": "3 min",
        "note": "eau frémissante + vinaigre"
      },
      {
        "label": "Au plat",
        "value": "3–4 min",
        "note": "feu doux + couvercle"
      },
      {
        "label": "Brouillés",
        "value": "feu doux",
        "note": "remuer sans arrêt, retirer avant"
      },
      {
        "label": "Cocotte four",
        "value": "12–15 min",
        "note": "180°C bain-marie"
      }
    ]
  },
  {
    "id": "conversions",
    "title": "Mesures & conversions",
    "emoji": "⚖️",
    "color": "#16a34a",
    "subtitle": "Les équivalences du quotidien",
    "items": [
      {
        "label": "1 c. à café",
        "value": "5 ml / 5 g",
        "note": ""
      },
      {
        "label": "1 c. à soupe",
        "value": "15 ml / 15 g",
        "note": ""
      },
      {
        "label": "1 verre standard",
        "value": "20 cl",
        "note": ""
      },
      {
        "label": "1 tasse",
        "value": "25 cl",
        "note": ""
      },
      {
        "label": "Noix de beurre",
        "value": "15–20 g",
        "note": ""
      },
      {
        "label": "Pincée de sel",
        "value": "0,5–1 g",
        "note": ""
      },
      {
        "label": "1 dl",
        "value": "100 ml",
        "note": ""
      }
    ]
  },
  {
    "id": "matieres-grasses",
    "title": "Corps gras & températures max",
    "emoji": "🫒",
    "color": "#16a34a",
    "subtitle": "Au-delà du point de fumée = goût brûlé et dégradation",
    "items": [
      {
        "label": "Beurre cru",
        "value": "150°C",
        "note": "sauces, finitions"
      },
      {
        "label": "Beurre clarifié",
        "value": "250°C",
        "note": "saisie, cuisson haute temp."
      },
      {
        "label": "Huile d'olive",
        "value": "190°C",
        "note": "sauté, poêle douce"
      },
      {
        "label": "Huile de tournesol",
        "value": "225°C",
        "note": "fritures, saisie forte"
      },
      {
        "label": "Huile de coco",
        "value": "175°C",
        "note": ""
      },
      {
        "label": "Huile d'arachide",
        "value": "230°C",
        "note": "friture idéale"
      }
    ]
  }
];
