// ════════════════════════════════════════════════
//   APP.JS — Chef Coach
//   Utilise les globales : state, MODULES, LESSONS, RECIPES
//   (chargées via data.js et state.js avant ce fichier)
// ════════════════════════════════════════════════

(function () {
'use strict';

// ── Init ────────────────────────────────────────
state.load();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(function() {});
}

// ════════════════════════════════════════════════
//   HELPERS & CONSTANTES
// ════════════════════════════════════════════════

var COVER_GRADIENTS = {
  'viande':     'linear-gradient(135deg,#1a0a00,#7c2d12)',
  'poisson':    'linear-gradient(135deg,#0c1a4d,#1e3a8a)',
  'légume':     'linear-gradient(135deg,#052e16,#166534)',
  'sauce':      'linear-gradient(135deg,#2d1b00,#92400e)',
  'pâtisserie': 'linear-gradient(135deg,#2d0a4e,#7c3aed)',
  'pâtes':      'linear-gradient(135deg,#1a1200,#854d0e)',
  'œufs':       'linear-gradient(135deg,#1a1200,#d97706)',
  'soupe':      'linear-gradient(135deg,#0a1f0a,#15803d)',
  'dessert':    'linear-gradient(135deg,#2d0a1a,#be185d)',
};
var RECIPE_EMOJIS = {
  'viande':'🥩','poisson':'🐟','légume':'🥦','sauce':'🫙',
  'pâtisserie':'🥐','pâtes':'🍝','œufs':'🥚','soupe':'🍲','dessert':'🍰',
};
var FAMILY_LABELS = {
  'tous':'Tous','viande':'🥩 Viande','poisson':'🐟 Poisson','légume':'🥦 Légumes',
  'sauce':'🫙 Sauces','pâtisserie':'🥐 Pâtisserie','pâtes':'🍝 Pâtes & riz',
  'œufs':'🥚 Œufs','soupe':'🍲 Soupes','dessert':'🍰 Desserts',
};

function svgIcon(d) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
}

function recipeCoverStyle(r) {
  return 'background:' + (COVER_GRADIENTS[r && r.family] || 'linear-gradient(135deg,#1a1a2e,#2d2d4e)');
}
function recipeEmoji(r) { return (r && RECIPE_EMOJIS[r.family]) || '🍽'; }
function familyLabel(f) { return FAMILY_LABELS[f] || f; }

function difficultyBadge(d) {
  var labels = ['','Facile','Intermédiaire','Avancé','Expert'];
  var cls    = ['','badge-green','badge-yellow','badge-orange','badge-red'];
  return '<span class="badge ' + (cls[d]||'badge-neutral') + '">' + (labels[d]||'') + '</span>';
}
function difficultyDots(d) {
  return [1,2,3,4].map(function(i){
    return '<span class="diff-dot' + (i<=d?' filled':'') + '"></span>';
  }).join('');
}
function formatDate(str) {
  if (!str) return '';
  return new Date(str).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
}
function esc(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function showToast(msg) {
  var old = document.querySelector('.toast');
  if (old) old.remove();
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function(){ t.remove(); }, 3000);
}

// ════════════════════════════════════════════════
//   QUIZ STATE (global à la session)
// ════════════════════════════════════════════════
var _quizState = { lessonId: null, correct: 0 };

// ════════════════════════════════════════════════
//   ROUTER
// ════════════════════════════════════════════════
function route() {
  var hash = location.hash.slice(1) || 'home';
  var parts = hash.split('/');
  var view = parts[0];
  var param = parts[1] || '';

  // Fermer cooking mode si on navigue ailleurs
  if (view !== 'cooking') {
    var cm = document.getElementById('cooking-mode');
    if (cm) cm.remove();
  }

  // Mettre à jour la nav
  var navBtns = document.querySelectorAll('.nav-btn');
  var navMap = { home:0, learn:1, recipes:2, journal:3, me:4 };
  navBtns.forEach(function(b, i) {
    b.classList.toggle('active', i === navMap[view]);
  });

  // Créer la nouvelle page
  var old = document.getElementById('current-page');
  if (old) old.remove();

  if (view === 'cooking') {
    startCookingMode(param);
    return;
  }

  var page = document.createElement('div');
  page.className = 'page';
  page.id = 'current-page';

  switch (view) {
    case 'home':    page.innerHTML = renderHome(); break;
    case 'learn':   page.innerHTML = renderLearn(); break;
    case 'lesson':  page.innerHTML = renderLesson(param); break;
    case 'recipes': page.innerHTML = renderRecipes('tous', ''); break;
    case 'recipe':  page.innerHTML = renderRecipeDetail(param); break;
    case 'journal': page.innerHTML = renderJournal(); break;
    case 'me':      page.innerHTML = renderMe(); break;
    default:        page.innerHTML = renderHome();
  }

  document.getElementById('app').appendChild(page);
  window.scrollTo(0, 0);
  bindHandlers(view, param);
}

window.addEventListener('hashchange', route);

// ── Shell HTML ────────────────────────────────────
document.getElementById('app').innerHTML =
  '<nav class="bottom-nav"><div class="nav-inner">' +
  navBtn('#home',    svgIcon('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'), 'Accueil') +
  navBtn('#learn',   svgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'), 'Apprendre') +
  navBtn('#recipes', svgIcon('<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>'), 'Cuisiner') +
  navBtn('#journal', svgIcon('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>'), 'Journal') +
  navBtn('#me',      svgIcon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'), 'Moi') +
  '</div></nav>';

route();

function navBtn(href, icon, label) {
  return '<a href="' + href + '" class="nav-btn"><span>' + icon + '</span><span>' + label + '</span></a>';
}

// ════════════════════════════════════════════════
//   VUE : ACCUEIL
// ════════════════════════════════════════════════
function renderHome() {
  var stats = state.getStats();
  var name = state.get('userName') || 'Chef';
  var nextLesson = null;
  var nextRecipe = null;
  for (var i = 0; i < LESSONS.length; i++) {
    if (!state.isLessonDone(LESSONS[i].id)) { nextLesson = LESSONS[i]; break; }
  }
  for (var j = 0; j < RECIPES.length; j++) {
    if (!state.isRecipeDone(RECIPES[j].id)) { nextRecipe = RECIPES[j]; break; }
  }

  var today = new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
  today = today.charAt(0).toUpperCase() + today.slice(1);

  var html = '<div class="home-hero">';
  html += '<div class="row-sb">';
  html += '<div>';
  html += '<div class="hero-greeting">' + esc(today) + '</div>';
  html += '<div class="hero-title">Bonjour, ' + esc(name) + ' 👨‍🍳</div>';
  html += '<div class="hero-sub">Continue ta progression cuisine</div>';
  html += '</div>';
  html += '<div class="streak-pill">🔥 ' + stats.streak + ' jour' + (stats.streak > 1 ? 's' : '') + '</div>';
  html += '</div>';
  html += '<div class="hero-stats">';
  html += '<div class="hero-stat"><div class="hero-stat-val">' + stats.xp + '</div><div class="hero-stat-lbl">XP</div></div>';
  html += '<div class="hero-stat"><div class="hero-stat-val">' + stats.lessonsCount + '</div><div class="hero-stat-lbl">Leçons</div></div>';
  html += '<div class="hero-stat"><div class="hero-stat-val">' + stats.recipesCount + '</div><div class="hero-stat-lbl">Recettes</div></div>';
  html += '</div></div>';

  // Mission du jour
  html += '<div class="mt-16">';
  if (nextLesson) {
    html += '<div class="sec-header"><span class="t-h3">Mission du jour</span></div>';
    html += '<div class="mission-card">';
    html += '<div class="mission-label">📚 Leçon suivante</div>';
    html += '<div class="mission-title">' + esc(nextLesson.title) + '</div>';
    html += '<div class="mission-sub">' + esc(nextLesson.subtitle) + ' · ' + nextLesson.duration + ' min</div>';
    html += '<a href="#lesson/' + nextLesson.id + '" class="btn btn-primary btn-full mt-12">Commencer →</a>';
    html += '</div>';
  } else {
    html += '<div class="card" style="text-align:center;padding:24px">';
    html += '<div style="font-size:48px">🏆</div>';
    html += '<div class="t-h3 mt-8">Toutes les leçons terminées !</div>';
    html += '<div class="t-muted t-small mt-4">Maintenant, cuisine les recettes avancées</div>';
    html += '</div>';
  }
  html += '</div>';

  // Recette suggérée
  if (nextRecipe) {
    html += '<div class="mt-20"><div class="sec-header"><span class="t-h3">À tester</span><a href="#recipes" class="sec-header-link">Voir tout</a></div>';
    html += '<div class="recipe-card" data-href="recipe/' + nextRecipe.id + '">';
    html += '<div class="recipe-cover" style="' + recipeCoverStyle(nextRecipe) + '">';
    html += '<div class="recipe-cover-emoji">' + recipeEmoji(nextRecipe) + '</div>';
    html += '<div class="recipe-cover-badges">' + difficultyBadge(nextRecipe.difficulty) + '<span class="badge badge-neutral">⏱ ' + (nextRecipe.timePrep + nextRecipe.timeCook) + ' min</span></div>';
    html += '</div><div class="recipe-info">';
    html += '<div class="recipe-title">' + esc(nextRecipe.title) + '</div>';
    html += '<div class="recipe-meta-row"><span class="recipe-meta-item">👥 ' + nextRecipe.servings + ' pers.</span><span class="recipe-meta-item">' + familyLabel(nextRecipe.family) + '</span></div>';
    html += '</div></div></div>';
  }

  // Grille accès rapide
  var totalLessons = LESSONS.length;
  var pctLessons = totalLessons ? Math.round(stats.lessonsCount / totalLessons * 100) : 0;
  html += '<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Accès rapide</div>';
  html += '<div class="quick-grid">';
  html += '<a href="#learn" class="quick-tile"><div class="quick-icon">📚</div><div class="quick-title">Apprendre</div>';
  html += '<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:' + pctLessons + '%"></div></div>';
  html += '<div class="quick-sub">' + stats.lessonsCount + '/' + totalLessons + ' leçons</div></a>';
  html += '<a href="#journal" class="quick-tile"><div class="quick-icon">📒</div><div class="quick-title">Journal</div>';
  html += '<div class="quick-sub mt-8">' + stats.journalCount + ' entrée' + (stats.journalCount > 1 ? 's' : '') + '</div></a>';
  html += '</div></div>';

  return html;
}

// ════════════════════════════════════════════════
//   VUE : APPRENDRE
// ════════════════════════════════════════════════
function renderLearn() {
  var html = '<div class="t-title mt-4">Apprendre</div>';
  html += '<div class="t-body t-muted mt-4" style="margin-bottom:16px">Maîtrise les techniques pas à pas</div>';
  html += '<div class="stack-12">';

  MODULES.forEach(function(mod, idx) {
    var prog = state.moduleProgress(mod);
    var pct = prog.total ? Math.round(prog.done / prog.total * 100) : 0;
    var isDone = prog.done === prog.total;
    var openClass = idx === 0 ? ' open' : ''; // premier module ouvert par défaut

    html += '<div class="module-card">';
    html += '<div class="module-header" data-module="' + mod.id + '">';
    html += '<div class="module-emoji" style="background:' + mod.color + '22">' + mod.emoji + '</div>';
    html += '<div class="module-meta">';
    html += '<div class="module-title">' + esc(mod.title) + (isDone ? ' ✅' : '') + '</div>';
    html += '<div class="module-desc">' + esc(mod.description) + '</div>';
    html += '<div class="module-progress-row">';
    html += '<div class="progress-bar grow thin"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<span class="module-progress-label">' + prog.done + '/' + prog.total + '</span>';
    html += '</div></div>';
    html += '<div class="module-chevron' + (openClass ? ' open' : '') + '" id="chev-' + mod.id + '">›</div>';
    html += '</div>'; // module-header

    html += '<div class="module-lessons' + openClass + '" id="lessons-' + mod.id + '">';
    mod.lessonIds.forEach(function(lid) {
      var lesson = null;
      for (var i = 0; i < LESSONS.length; i++) {
        if (LESSONS[i].id === lid) { lesson = LESSONS[i]; break; }
      }
      if (!lesson) return;
      var done = state.isLessonDone(lid);
      var score = state.getLessonScore(lid);
      html += '<a href="#lesson/' + lid + '" class="lesson-row">';
      html += '<div class="lesson-icon' + (done ? ' done' : '') + '">' + (done ? '✅' : '📖') + '</div>';
      html += '<div class="lesson-row-meta">';
      html += '<div class="lesson-row-title">' + esc(lesson.title) + '</div>';
      html += '<div class="lesson-row-sub">' + esc(lesson.subtitle) + (score ? ' · ' + score.pct + '% quiz' : '') + '</div>';
      html += '</div>';
      html += '<div class="lesson-row-dur">' + lesson.duration + ' min</div>';
      html += '</a>';
    });
    html += '</div>'; // module-lessons
    html += '</div>'; // module-card
  });

  html += '</div>';
  return html;
}

// ════════════════════════════════════════════════
//   VUE : LEÇON PLAYER
// ════════════════════════════════════════════════
function renderLesson(id) {
  var lesson = null;
  for (var i = 0; i < LESSONS.length; i++) {
    if (LESSONS[i].id === id) { lesson = LESSONS[i]; break; }
  }
  if (!lesson) return '<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Leçon introuvable</div></div>';

  var total = lesson.concepts.length + (lesson.goFurther ? 1 : 0) + 1; // +1 quiz

  var html = '<div class="lesson-topbar">';
  html += '<a href="#learn" class="back-btn" aria-label="Retour">←</a>';
  html += '<div class="progress-bar grow thin"><div class="progress-fill" id="lesson-pbar" style="width:0%"></div></div>';
  html += '<div class="step-counter" id="lesson-counter">1/' + total + '</div>';
  html += '</div>';

  html += '<div id="lesson-content" data-lesson="' + id + '" data-step="0" data-total="' + total + '" style="padding:16px">';
  html += renderLessonStep(lesson, 0);
  html += '</div>';

  return html;
}

function renderLessonStep(lesson, step) {
  var concepts = lesson.concepts;
  var hasGF = !!(lesson.goFurther);
  var cCount = concepts.length;
  var gfStep = hasGF ? cCount : -1;
  var quizStep = cCount + (hasGF ? 1 : 0);

  // Concept
  if (step < cCount) {
    var c = concepts[step];
    var html = '<div class="concept-card">';
    html += '<div class="concept-num">' + (step + 1) + '</div>';
    html += '<div class="concept-title">' + esc(c.title) + '</div>';
    html += '<div class="concept-body">' + (c.body || '') + '</div>';
    if (c.tip) html += '<div class="concept-tip"><span>💡</span><span>' + esc(c.tip) + '</span></div>';
    html += '</div>';
    html += '<div class="lesson-nav mt-16">';
    if (step > 0) html += '<button class="btn btn-secondary" data-action="prev">← Préc.</button>';
    html += '<button class="btn btn-primary" data-action="next">' + (step + 1 < cCount || hasGF ? 'Suivant →' : 'Au quiz →') + '</button>';
    html += '</div>';
    return html;
  }

  // Aller plus loin
  if (step === gfStep) {
    var gf = lesson.goFurther;
    var html2 = '<div class="go-further">';
    html2 += '<div class="go-further-label">Pour aller plus loin</div>';
    html2 += '<div class="go-further-title">' + esc(gf.title) + '</div>';
    html2 += '<div class="go-further-body">' + (gf.content || '') + '</div>';
    html2 += '</div>';
    html2 += '<div class="lesson-nav mt-16">';
    html2 += '<button class="btn btn-secondary" data-action="prev">← Préc.</button>';
    html2 += '<button class="btn btn-primary" data-action="next">Au quiz →</button>';
    html2 += '</div>';
    return html2;
  }

  // Quiz
  if (step === quizStep) {
    _quizState = { lessonId: lesson.id, correct: 0, qIndex: 0 };
    return renderQuizQuestion(lesson, 0);
  }

  // Terminé
  return renderLessonComplete(lesson, _quizState.correct, lesson.quiz.length);
}

function renderQuizQuestion(lesson, qIndex) {
  var questions = lesson.quiz;
  if (qIndex >= questions.length) {
    return renderLessonComplete(lesson, _quizState.correct, questions.length);
  }
  var q = questions[qIndex];

  var html = '<div class="quiz-section" data-lesson="' + lesson.id + '" data-qindex="' + qIndex + '" data-answer="' + q.answer + '" data-total="' + questions.length + '">';
  html += '<div class="quiz-label">🧠 Quiz · ' + (qIndex + 1) + '/' + questions.length + '</div>';
  html += '<div class="quiz-q">' + esc(q.q) + '</div>';
  html += '<div class="quiz-options mt-16">';
  q.options.forEach(function(opt, i) {
    html += '<button class="quiz-opt" data-i="' + i + '">' + esc(opt) + '</button>';
  });
  html += '</div>';
  html += '<div id="quiz-expl" class="quiz-explanation hidden"></div>';
  html += '<div id="quiz-next-wrap" class="hidden mt-12">';
  html += '<button class="btn btn-primary btn-full" id="quiz-next-btn">';
  html += (qIndex + 1 < questions.length ? 'Question suivante →' : 'Voir le résultat 🎉');
  html += '</button></div>';
  html += '</div>';
  return html;
}

function renderLessonComplete(lesson, correct, total) {
  var wasNew = !state.isLessonDone(lesson.id);
  if (wasNew) state.completeLesson(lesson.id, correct || 0, total || 0);

  var pct = total > 0 ? Math.round((correct || 0) / total * 100) : 0;
  var emoji = pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚';
  var xp = 20 + ((correct || 0) * 5);

  var html = '<div class="lesson-complete">';
  html += '<div class="complete-emoji">' + emoji + '</div>';
  html += '<div class="complete-title">Leçon terminée !</div>';
  if (total > 0) html += '<div class="complete-sub">' + (correct||0) + '/' + total + ' bonnes réponses · ' + pct + '%</div>';
  if (wasNew) html += '<div class="xp-pill">+' + xp + ' XP</div>';
  html += '</div>';

  // Recettes liées
  var linked = (lesson.linkedRecipes || []).map(function(id) {
    for (var i = 0; i < RECIPES.length; i++) { if (RECIPES[i].id === id) return RECIPES[i]; }
    return null;
  }).filter(Boolean);

  if (linked.length) {
    html += '<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Mets en pratique</div><div class="stack-12">';
    linked.forEach(function(r) {
      html += '<div class="recipe-card" data-href="recipe/' + r.id + '">';
      html += '<div class="recipe-cover" style="' + recipeCoverStyle(r) + '"><div class="recipe-cover-emoji">' + recipeEmoji(r) + '</div><div class="recipe-cover-badges">' + difficultyBadge(r.difficulty) + '</div></div>';
      html += '<div class="recipe-info"><div class="recipe-title">' + esc(r.title) + '</div>';
      html += '<div class="recipe-meta-row"><span class="recipe-meta-item">⏱ ' + (r.timePrep + r.timeCook) + ' min</span></div></div>';
      html += '</div>';
    });
    html += '</div></div>';
  }

  html += '<div class="stack-8 mt-20">';
  html += '<a href="#learn" class="btn btn-primary btn-full">← Retour aux leçons</a>';
  html += '</div>';
  return html;
}

// ════════════════════════════════════════════════
//   VUE : RECETTES
// ════════════════════════════════════════════════
function renderRecipes(filter, search) {
  filter = filter || 'tous';
  search = search || '';

  // Familles uniques dans l'ordre
  var families = ['tous'];
  RECIPES.forEach(function(r) {
    if (families.indexOf(r.family) < 0) families.push(r.family);
  });

  var filtered = RECIPES.filter(function(r) {
    var okFamily = (filter === 'tous' || r.family === filter);
    var okSearch = !search || r.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    return okFamily && okSearch;
  });

  var html = '<div class="t-title mt-4">Recettes</div>';
  html += '<div class="search-bar mt-12"><span class="search-icon">🔍</span>';
  html += '<input type="search" id="recipe-search" placeholder="Rechercher…" value="' + esc(search) + '" autocomplete="off" /></div>';
  html += '<div class="filter-row mt-8">';
  families.forEach(function(f) {
    html += '<button class="filter-chip' + (filter === f ? ' active' : '') + '" data-filter="' + f + '">' + familyLabel(f) + '</button>';
  });
  html += '</div>';

  html += '<div class="recipes-grid mt-8">';
  if (filtered.length) {
    filtered.forEach(function(r) {
      var done = state.isRecipeDone(r.id);
      html += '<div class="recipe-card" data-href="recipe/' + r.id + '">';
      html += '<div class="recipe-cover" style="' + recipeCoverStyle(r) + '">';
      html += '<div class="recipe-cover-emoji">' + recipeEmoji(r) + '</div>';
      html += '<div class="recipe-cover-badges">' + difficultyBadge(r.difficulty) + (done ? '<span class="badge badge-green">✓ Cuisiné</span>' : '') + '</div>';
      html += '</div><div class="recipe-info">';
      html += '<div class="recipe-title">' + esc(r.title) + '</div>';
      html += '<div class="recipe-meta-row"><span class="recipe-meta-item">⏱ ' + (r.timePrep + r.timeCook) + ' min</span><span class="recipe-meta-item">👥 ' + r.servings + ' pers.</span><span class="recipe-meta-item difficulty">' + difficultyDots(r.difficulty) + '</span></div>';
      html += '</div></div>';
    });
  } else {
    html += '<div class="empty-state"><div class="empty-icon">🍽</div><div class="empty-title">Aucune recette trouvée</div><div class="empty-sub">Essaie un autre filtre</div></div>';
  }
  html += '</div>';
  return html;
}

// ════════════════════════════════════════════════
//   VUE : DÉTAIL RECETTE
// ════════════════════════════════════════════════
function renderRecipeDetail(id) {
  var recipe = null;
  for (var i = 0; i < RECIPES.length; i++) { if (RECIPES[i].id === id) { recipe = RECIPES[i]; break; } }
  if (!recipe) return '<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Recette introuvable</div></div>';

  var done = state.isRecipeDone(id);
  var totalTime = recipe.timePrep + recipe.timeCook;

  var html = '<a href="#recipes" class="btn btn-ghost btn-sm" style="margin-bottom:12px">← Retour</a>';

  // Hero visuel
  html += '<div class="recipe-hero" style="' + recipeCoverStyle(recipe) + '">';
  html += '<div style="font-size:72px;position:relative;z-index:1">' + recipeEmoji(recipe) + '</div>';
  html += '<div class="recipe-hero-overlay"></div>';
  html += '</div>';

  html += '<div class="mt-16">';
  html += '<div class="t-title">' + esc(recipe.title) + '</div>';
  html += '<div class="recipe-meta-row mt-8">';
  html += difficultyBadge(recipe.difficulty);
  html += '<span class="badge badge-neutral">🍳 ' + recipe.timePrep + ' min prép.</span>';
  html += '<span class="badge badge-neutral">⏱ ' + recipe.timeCook + ' min cuisson</span>';
  html += '<span class="badge badge-neutral">👥 ' + recipe.servings + ' pers.</span>';
  html += '</div></div>';

  if (done) {
    html += '<div class="recipe-done-banner mt-12">✅ <span>Tu as déjà cuisiné cette recette</span></div>';
  }

  // Objectifs
  html += '<div class="card mt-16"><div class="t-h4" style="margin-bottom:10px">Ce que tu vas maîtriser</div><div class="objectives-list">';
  recipe.objectives.forEach(function(o) {
    html += '<div class="objective-item"><div class="objective-dot"></div><span>' + esc(o) + '</span></div>';
  });
  html += '</div></div>';

  // Ingrédients
  html += '<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">Ingrédients · ' + recipe.servings + ' pers.</div><div class="ingredients-list">';
  recipe.ingredients.forEach(function(ing) {
    var qty = ing.qty ? (ing.qty + (ing.unit ? ' ' + ing.unit : '')) : '';
    html += '<div class="ingredient-row"><span class="ingredient-qty">' + esc(qty) + '</span><span class="ingredient-name">' + esc(ing.item) + '</span>';
    if (ing.note) html += '<span class="ingredient-note">' + esc(ing.note) + '</span>';
    html += '</div>';
  });
  html += '</div></div>';

  // Aperçu étapes
  html += '<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">' + recipe.steps.length + ' étapes</div><div class="stack-8">';
  recipe.steps.forEach(function(s, i) {
    html += '<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">';
    html += '<div style="width:24px;height:24px;border-radius:50%;background:var(--orange-soft);color:var(--orange-dark);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0">' + (i+1) + '</div>';
    html += '<div class="t-small">' + esc(s.title) + '</div>';
    if (s.timer) html += '<span class="badge badge-yellow" style="flex-shrink:0">⏱ ' + s.timer + ' min</span>';
    html += '</div>';
  });
  html += '</div></div>';

  // Tips
  if (recipe.tips && recipe.tips.length) {
    html += '<div class="card mt-12" style="background:var(--yellow-soft);border-color:rgba(217,119,6,0.2)">';
    html += '<div class="t-h4" style="margin-bottom:10px">💡 Tips du chef</div><div class="stack-8">';
    recipe.tips.forEach(function(t) {
      html += '<div class="t-small" style="padding:8px 0;border-bottom:1px solid rgba(217,119,6,0.15)">' + esc(t) + '</div>';
    });
    html += '</div></div>';
  }

  // CTA
  html += '<div class="stack-8 mt-20">';
  html += '<a href="#cooking/' + recipe.id + '" class="btn btn-primary btn-lg btn-full">👨‍🍳 Commencer la recette</a>';
  html += '<button class="btn btn-secondary btn-full" id="btn-log-recipe" data-recipe="' + recipe.id + '">📒 Ajouter au journal</button>';
  html += '</div>';

  return html;
}

// ════════════════════════════════════════════════
//   MODE CUISINE (overlay plein écran)
// ════════════════════════════════════════════════
var _cook = { step: 0, timer: null, timerVal: 0, timerRunning: false };

function startCookingMode(id) {
  var recipe = null;
  for (var i = 0; i < RECIPES.length; i++) { if (RECIPES[i].id === id) { recipe = RECIPES[i]; break; } }
  if (!recipe) { location.hash = 'recipes'; return; }
  _cook.step = 0;
  _stopTimer();
  _renderCookStep(recipe);
}

function _renderCookStep(recipe) {
  var s = recipe.steps[_cook.step];
  var total = recipe.steps.length;
  var isLast = _cook.step === total - 1;
  var pct = Math.round((_cook.step / total) * 100);

  var old = document.getElementById('cooking-mode');
  if (old) old.remove();

  var div = document.createElement('div');
  div.id = 'cooking-mode';
  div.className = 'cooking-mode';

  var html = '<div class="cooking-topbar">';
  html += '<button class="back-btn" id="cm-close" aria-label="Fermer">✕</button>';
  html += '<div class="progress-bar grow thin" style="max-width:180px"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
  html += '<div class="cooking-step-counter">Étape ' + (_cook.step+1) + '/' + total + '</div>';
  html += '</div>';

  html += '<div class="cooking-body">';
  html += '<div class="cooking-step-num">Étape ' + (_cook.step+1) + ' — ' + esc(recipe.title) + '</div>';
  html += '<div class="cooking-step-title">' + esc(s.title) + '</div>';
  html += '<div class="cooking-step-action">' + esc(s.action) + '</div>';

  if (s.timer) {
    _cook.timerVal = s.timer * 60;
    _cook.timerRunning = false;
    html += '<div class="timer-card">';
    html += '<div><div class="timer-label">Minuteur</div><div class="timer-val" id="timer-display">' + _fmtTimer(s.timer * 60) + '</div></div>';
    html += '<button class="timer-btn" id="timer-toggle">▶ Démarrer</button>';
    html += '</div>';
  }

  html += '<div class="cooking-why mt-16"><div class="cooking-why-label">Pourquoi ?</div>' + esc(s.why) + '</div>';
  html += '<div class="cooking-mistake"><div class="cooking-mistake-label">⚠ Erreur fréquente</div>' + esc(s.mistake) + '</div>';
  html += '</div>'; // cooking-body

  html += '<div class="cooking-footer">';
  html += '<button class="btn btn-secondary" id="cm-prev"' + (_cook.step === 0 ? ' disabled' : '') + '>← Préc.</button>';
  html += '<button class="btn ' + (isLast ? 'btn-green' : 'btn-primary') + '" id="cm-next">' + (isLast ? '✅ Terminer' : 'Étape suivante →') + '</button>';
  html += '</div>';

  div.innerHTML = html;
  document.getElementById('app').appendChild(div);

  // Événements
  if (s.timer) {
    document.getElementById('timer-toggle').onclick = _toggleTimer;
  }
  document.getElementById('cm-close').onclick = function() {
    _stopTimer();
    div.remove();
    history.back();
  };
  document.getElementById('cm-prev').onclick = function() {
    if (_cook.step > 0) { _stopTimer(); _cook.step--; _renderCookStep(recipe); }
  };
  document.getElementById('cm-next').onclick = function() {
    _stopTimer();
    if (_cook.step < total - 1) {
      _cook.step++;
      _renderCookStep(recipe);
    } else {
      state.completeRecipe(recipe.id);
      div.remove();
      location.hash = 'recipe/' + recipe.id;
      showToast('🏆 Recette terminée ! +30 XP');
    }
  };
}

function _toggleTimer() {
  _cook.timerRunning = !_cook.timerRunning;
  var btn = document.getElementById('timer-toggle');
  if (!btn) return;
  if (_cook.timerRunning) {
    btn.textContent = '⏸ Pause';
    _cook.timer = setInterval(function() {
      _cook.timerVal--;
      var d = document.getElementById('timer-display');
      if (d) d.textContent = _fmtTimer(_cook.timerVal);
      if (_cook.timerVal <= 0) {
        _stopTimer();
        var b = document.getElementById('timer-toggle');
        if (b) b.textContent = '✅ Terminé';
        showToast('⏰ Minuteur terminé !');
      }
    }, 1000);
  } else {
    clearInterval(_cook.timer);
    btn.textContent = '▶ Reprendre';
  }
}

function _stopTimer() {
  clearInterval(_cook.timer);
  _cook.timerRunning = false;
}

function _fmtTimer(secs) {
  var abs = Math.abs(secs);
  var m = Math.floor(abs / 60).toString().padStart(2, '0');
  var s = (abs % 60).toString().padStart(2, '0');
  return m + ':' + s;
}

// ════════════════════════════════════════════════
//   VUE : JOURNAL
// ════════════════════════════════════════════════
function renderJournal() {
  var entries = state.get('journal') || [];

  var html = '<div class="row-sb mt-4"><div class="t-title">Journal</div>';
  html += '<button class="btn btn-primary btn-sm" id="btn-add-entry">+ Ajouter</button></div>';

  html += '<div id="journal-list" class="stack-12 mt-16">';
  if (entries.length) {
    entries.forEach(function(e) { html += _journalCard(e); });
  } else {
    html += '<div class="empty-state"><div class="empty-icon">📷</div>';
    html += '<div class="empty-title">Aucune entrée</div>';
    html += '<div class="empty-sub">Cuisine quelque chose et note-le ici !</div>';
    html += '<button class="btn btn-primary mt-12" id="btn-add-entry-2">Ajouter une entrée</button>';
    html += '</div>';
  }
  html += '</div>';

  // Formulaire (caché)
  html += '<div id="add-entry-form" class="hidden"><div class="card mt-16">';
  html += '<div class="t-h3" style="margin-bottom:16px">Nouvelle entrée</div>';
  html += '<div class="add-form">';
  html += '<div class="field"><label class="field-label">Recette</label><select id="je-recipe">';
  html += '<option value="">-- Choisir --</option>';
  RECIPES.forEach(function(r) { html += '<option value="' + r.id + '">' + esc(r.title) + '</option>'; });
  html += '<option value="autre">Autre plat</option></select></div>';
  html += '<div class="field hidden" id="je-custom-field"><label class="field-label">Nom du plat</label><input type="text" id="je-custom" placeholder="Ex: Tarte aux pommes" /></div>';
  html += '<div class="field"><label class="field-label">Photo (optionnel)</label>';
  html += '<div class="photo-placeholder" id="je-photo-btn"><div class="photo-icon">📸</div><span>Ajouter une photo</span></div>';
  html += '<input type="file" id="je-photo-input" accept="image/*" capture="environment" style="display:none" />';
  html += '<img id="je-photo-preview" class="photo-preview hidden" alt="Aperçu" /></div>';
  html += '<div class="field"><label class="field-label">Notes / Observations</label><textarea id="je-note" placeholder="Ce qui a marché, ce que tu referais différemment…"></textarea></div>';
  html += '<div class="field"><label class="field-label">Satisfaction</label><div class="stars-input" id="stars-input">';
  [1,2,3,4,5].forEach(function(i) { html += '<button class="star-btn" data-star="' + i + '" type="button">⭐</button>'; });
  html += '</div></div>';
  html += '<div class="stack-8">';
  html += '<button class="btn btn-primary btn-full" id="je-save" type="button">Enregistrer</button>';
  html += '<button class="btn btn-ghost btn-full" id="je-cancel" type="button">Annuler</button>';
  html += '</div></div></div></div>';

  return html;
}

function _journalCard(e) {
  var recipe = null;
  for (var i = 0; i < RECIPES.length; i++) { if (RECIPES[i].id === e.recipeId) { recipe = RECIPES[i]; break; } }
  var title = (recipe && recipe.title) || e.customTitle || 'Plat sans nom';
  var stars = '';
  for (var j = 0; j < (e.rating || 0); j++) stars += '⭐';

  var html = '<div class="journal-entry">';
  if (e.photo) {
    html += '<img class="journal-photo-img" src="' + e.photo + '" alt="' + esc(title) + '" />';
  } else {
    html += '<div class="journal-photo-placeholder">' + recipeEmoji(recipe) + '</div>';
  }
  html += '<div class="journal-body">';
  html += '<div class="journal-date">' + formatDate(e.date) + '</div>';
  html += '<div class="journal-recipe-title">' + esc(title) + '</div>';
  if (e.note) html += '<div class="journal-note">' + esc(e.note) + '</div>';
  if (stars) html += '<div class="journal-rating">' + stars + '</div>';
  html += '<button class="btn btn-ghost btn-sm" data-delete-entry="' + e.id + '" style="color:var(--red);margin-top:8px" type="button">Supprimer</button>';
  html += '</div></div>';
  return html;
}

// ════════════════════════════════════════════════
//   VUE : MOI
// ════════════════════════════════════════════════
function renderMe() {
  var stats = state.getStats();
  var name = state.get('userName') || 'Chef';
  var totalLessons = LESSONS.length;
  var pct = totalLessons ? Math.round(stats.lessonsCount / totalLessons * 100) : 0;

  var html = '<div class="card mt-4">';
  html += '<div style="display:flex;align-items:center;gap:16px">';
  html += '<div class="profile-avatar">👨‍🍳</div>';
  html += '<div><div class="t-title">' + esc(name) + '</div>';
  html += '<div class="t-small t-muted">Chef en progression</div>';
  html += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">';
  html += '<div class="xp-pill">⚡ ' + stats.xp + ' XP</div>';
  html += '<div class="streak-pill" style="background:var(--orange-soft);border:1px solid rgba(232,93,4,.2);color:var(--orange-dark)">🔥 ' + stats.streak + ' j.</div>';
  html += '</div></div></div></div>';

  html += '<div class="stat-grid mt-16">';
  html += '<div class="stat-tile"><div class="stat-val">' + stats.lessonsCount + '</div><div class="stat-lbl">Leçons</div></div>';
  html += '<div class="stat-tile"><div class="stat-val">' + stats.recipesCount + '</div><div class="stat-lbl">Recettes</div></div>';
  html += '<div class="stat-tile"><div class="stat-val">' + stats.journalCount + '</div><div class="stat-lbl">Journal</div></div>';
  html += '<div class="stat-tile"><div class="stat-val">' + pct + '%</div><div class="stat-lbl">Progression</div></div>';
  html += '</div>';

  html += '<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Modules</div>';
  MODULES.forEach(function(mod) {
    var prog = state.moduleProgress(mod);
    var mpct = prog.total ? Math.round(prog.done / prog.total * 100) : 0;
    html += '<div class="card-flat" style="display:flex;align-items:center;gap:12px;margin-bottom:8px">';
    html += '<div style="font-size:24px">' + mod.emoji + '</div>';
    html += '<div style="flex:1"><div class="t-h4">' + esc(mod.title) + '</div>';
    html += '<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:' + mpct + '%"></div></div></div>';
    html += '<div class="t-small t-muted" style="font-weight:700">' + prog.done + '/' + prog.total + '</div>';
    html += '</div>';
  });
  html += '</div>';

  html += '<div class="card mt-20"><div class="t-h4" style="margin-bottom:12px">Paramètres</div>';
  html += '<div class="field"><label class="field-label">Ton prénom</label>';
  html += '<input type="text" id="pref-name" value="' + esc(name) + '" placeholder="Ton prénom" /></div>';
  html += '<button class="btn btn-secondary btn-full mt-12" id="save-prefs" type="button">Enregistrer</button>';
  html += '<button class="btn btn-ghost btn-full mt-8" id="reset-progress" style="color:var(--red);font-size:13px" type="button">Réinitialiser la progression</button>';
  html += '</div>';

  return html;
}

// ════════════════════════════════════════════════
//   HANDLERS D'ÉVÉNEMENTS
// ════════════════════════════════════════════════
function bindHandlers(view, param) {

  // Délégation sur le document pour les recipe-card (data-href)
  var page = document.getElementById('current-page');
  if (page) {
    page.addEventListener('click', function(e) {
      var card = e.target.closest('[data-href]');
      if (card) { location.hash = card.dataset.href; }
    });
  }

  // ── LEARN ─────────────────────────────────────
  if (view === 'learn') {
    document.querySelectorAll('.module-header[data-module]').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = el.dataset.module;
        var list = document.getElementById('lessons-' + id);
        var chev = document.getElementById('chev-' + id);
        if (!list) return;
        list.classList.toggle('open');
        if (chev) chev.classList.toggle('open');
      });
    });
  }

  // ── LESSON ────────────────────────────────────
  if (view === 'lesson') {
    _bindLessonHandlers();
  }

  // ── RECIPES ───────────────────────────────────
  if (view === 'recipes') {
    var searchInput = document.getElementById('recipe-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        var active = document.querySelector('.filter-chip.active');
        var f = active ? active.dataset.filter : 'tous';
        var pg = document.getElementById('current-page');
        if (pg) { pg.innerHTML = renderRecipes(f, searchInput.value); }
        bindHandlers('recipes', '');
      });
    }
    document.querySelectorAll('.filter-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        var si = document.getElementById('recipe-search');
        var pg = document.getElementById('current-page');
        if (pg) { pg.innerHTML = renderRecipes(chip.dataset.filter, si ? si.value : ''); }
        bindHandlers('recipes', '');
      });
    });
  }

  // ── RECIPE DETAIL ─────────────────────────────
  if (view === 'recipe') {
    var logBtn = document.getElementById('btn-log-recipe');
    if (logBtn) {
      logBtn.addEventListener('click', function() {
        var rid = logBtn.dataset.recipe;
        location.hash = 'journal';
        setTimeout(function() {
          var addBtn = document.getElementById('btn-add-entry');
          if (addBtn) addBtn.click();
          var sel = document.getElementById('je-recipe');
          if (sel) sel.value = rid;
        }, 150);
      });
    }
  }

  // ── JOURNAL ───────────────────────────────────
  if (view === 'journal') {
    _bindJournalHandlers();
  }

  // ── MOI ───────────────────────────────────────
  if (view === 'me') {
    var saveBtn = document.getElementById('save-prefs');
    if (saveBtn) saveBtn.addEventListener('click', function() {
      var val = (document.getElementById('pref-name') || {}).value;
      if (val && val.trim()) { state.set('userName', val.trim()); showToast('✅ Sauvegardé'); }
    });
    var resetBtn = document.getElementById('reset-progress');
    if (resetBtn) resetBtn.addEventListener('click', function() {
      if (confirm('Réinitialiser toute ta progression ?')) {
        state.reset(); location.hash = 'home'; showToast('🔄 Réinitialisé');
      }
    });
  }
}

// ── Handlers leçon ────────────────────────────
function _bindLessonHandlers() {
  var content = document.getElementById('lesson-content');
  if (!content) return;

  // prev / next sur les concepts
  content.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action]');
    if (!btn) return;
    var action = btn.dataset.action;
    if (action === 'next') _advanceLesson(1);
    if (action === 'prev') _advanceLesson(-1);
  });

  // quiz options + next (délégation sur content)
  content.addEventListener('click', function(e) {
    // Answer an option
    var optBtn = e.target.closest('.quiz-opt:not(.disabled)');
    if (optBtn) { _handleQuizAnswer(optBtn); return; }
    // Quiz next
    if (e.target.id === 'quiz-next-btn') { _handleQuizNext(); }
  });
}

function _handleQuizAnswer(btn) {
  var section = btn.closest('.quiz-section');
  if (!section) return;
  var correctIdx = parseInt(section.dataset.answer);
  var chosenIdx  = parseInt(btn.dataset.i);
  var lessonId   = section.dataset.lesson;
  var qIndex     = parseInt(section.dataset.qindex);

  // Colorer toutes les options
  section.querySelectorAll('.quiz-opt').forEach(function(b, i) {
    b.classList.add('disabled');
    if (i === correctIdx) b.classList.add('correct');
    if (i === chosenIdx && chosenIdx !== correctIdx) b.classList.add('wrong');
  });

  // Explication
  var lesson = null;
  for (var k = 0; k < LESSONS.length; k++) { if (LESSONS[k].id === lessonId) { lesson = LESSONS[k]; break; } }
  var expl = document.getElementById('quiz-expl');
  if (expl && lesson) {
    expl.textContent = lesson.quiz[qIndex].explanation;
    expl.classList.remove('hidden');
  }

  // Suivi score
  if (_quizState.lessonId !== lessonId) {
    _quizState = { lessonId: lessonId, correct: 0, qIndex: qIndex };
  }
  if (chosenIdx === correctIdx) _quizState.correct++;

  // Afficher bouton suivant
  var nxt = document.getElementById('quiz-next-wrap');
  if (nxt) nxt.classList.remove('hidden');
}

function _handleQuizNext() {
  var section = document.querySelector('.quiz-section');
  if (!section) return;
  var lessonId = section.dataset.lesson;
  var qIndex   = parseInt(section.dataset.qindex) + 1;
  var total    = parseInt(section.dataset.total);
  var lesson   = null;
  for (var i = 0; i < LESSONS.length; i++) { if (LESSONS[i].id === lessonId) { lesson = LESSONS[i]; break; } }
  if (!lesson) return;

  var content = document.getElementById('lesson-content');
  if (!content) return;

  if (qIndex < total) {
    content.innerHTML = renderQuizQuestion(lesson, qIndex);
  } else {
    content.innerHTML = renderLessonComplete(lesson, _quizState.correct, total);
  }
  _updateLessonTopbar(parseInt(content.dataset.step), parseInt(content.dataset.total));
}

function _advanceLesson(dir) {
  var content = document.getElementById('lesson-content');
  if (!content) return;
  var lessonId = content.dataset.lesson;
  var lesson = null;
  for (var i = 0; i < LESSONS.length; i++) { if (LESSONS[i].id === lessonId) { lesson = LESSONS[i]; break; } }
  if (!lesson) return;

  var step = parseInt(content.dataset.step) + dir;
  var total = parseInt(content.dataset.total);
  step = Math.max(0, Math.min(step, total - 1));
  content.dataset.step = step;

  content.innerHTML = renderLessonStep(lesson, step);
  _updateLessonTopbar(step, total);
}

function _updateLessonTopbar(step, total) {
  var pbar = document.getElementById('lesson-pbar');
  var counter = document.getElementById('lesson-counter');
  if (pbar) pbar.style.width = Math.round(step / Math.max(1, total - 1) * 100) + '%';
  if (counter) counter.textContent = (step + 1) + '/' + total;
}

// ── Handlers journal ──────────────────────────
var _selectedStar = 0;

function _bindJournalHandlers() {
  _selectedStar = 0;
  var form = document.getElementById('add-entry-form');

  function showForm() { if (form) form.classList.remove('hidden'); }
  function hideForm() { if (form) form.classList.add('hidden'); _selectedStar = 0; }

  var addBtn = document.getElementById('btn-add-entry');
  var addBtn2 = document.getElementById('btn-add-entry-2');
  var cancelBtn = document.getElementById('je-cancel');
  var saveBtn = document.getElementById('je-save');
  var recipeSelect = document.getElementById('je-recipe');
  var photoBtn = document.getElementById('je-photo-btn');
  var photoInput = document.getElementById('je-photo-input');

  if (addBtn) addBtn.addEventListener('click', showForm);
  if (addBtn2) addBtn2.addEventListener('click', showForm);
  if (cancelBtn) cancelBtn.addEventListener('click', hideForm);

  if (recipeSelect) {
    recipeSelect.addEventListener('change', function() {
      var cf = document.getElementById('je-custom-field');
      if (cf) cf.classList.toggle('hidden', recipeSelect.value !== 'autre');
    });
  }

  if (photoBtn) photoBtn.addEventListener('click', function() { if (photoInput) photoInput.click(); });
  if (photoInput) {
    photoInput.addEventListener('change', function() {
      var file = photoInput.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        var preview = document.getElementById('je-photo-preview');
        var placeholder = document.getElementById('je-photo-btn');
        if (preview) { preview.src = ev.target.result; preview.classList.remove('hidden'); }
        if (placeholder) placeholder.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });
  }

  document.querySelectorAll('.star-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      _selectedStar = parseInt(btn.dataset.star);
      document.querySelectorAll('.star-btn').forEach(function(b, i) {
        b.classList.toggle('active', i < _selectedStar);
      });
    });
  });

  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      var recipeId = (document.getElementById('je-recipe') || {}).value || '';
      var customTitle = (document.getElementById('je-custom') || {}).value || '';
      var note = (document.getElementById('je-note') || {}).value || '';
      var preview = document.getElementById('je-photo-preview');
      var photo = (preview && preview.src && preview.src.startsWith('data:')) ? preview.src : null;

      state.addJournalEntry({
        recipeId: (recipeId === 'autre' || !recipeId) ? null : recipeId,
        customTitle: recipeId === 'autre' ? customTitle : null,
        note: note,
        photo: photo,
        rating: _selectedStar,
      });
      location.hash = 'journal';
      showToast('✅ Entrée ajoutée ! +10 XP');
    });
  }

  // Supprimer entrée
  document.querySelectorAll('[data-delete-entry]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (confirm('Supprimer cette entrée ?')) {
        state.deleteJournalEntry(btn.dataset.deleteEntry);
        location.hash = 'journal';
      }
    });
  });
}

})(); // fin IIFE
