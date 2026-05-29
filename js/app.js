// ════════════════════════════════════════════════
//   APP.JS — Chef Coach
//   Router + toutes les vues
// ════════════════════════════════════════════════

import { state } from './state.js';
import { MODULES, LESSONS, RECIPES } from '../content/data.js';

// ── Init ────────────────────────────────────────
state.load();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

// ── Router ──────────────────────────────────────
function route() {
  const hash = location.hash.slice(1) || 'home';
  const [view, ...params] = hash.split('/');

  // Supprimer le cooking mode si présent
  const cm = document.getElementById('cooking-mode');
  if (cm && view !== 'cooking') cm.remove();

  const navBtns = document.querySelectorAll('.nav-btn');
  const navMap = { home: 0, learn: 1, recipes: 2, journal: 3, me: 4 };
  navBtns.forEach((b, i) => b.classList.toggle('active', i === navMap[view]));

  const app = document.getElementById('app');
  const page = document.createElement('div');
  page.className = 'page page-top';
  page.id = 'current-page';

  document.getElementById('current-page')?.remove();

  switch (view) {
    case 'home':    page.innerHTML = renderHome(); break;
    case 'learn':   page.innerHTML = renderLearn(); break;
    case 'lesson':  page.innerHTML = renderLesson(params[0]); break;
    case 'recipes': page.innerHTML = renderRecipes(); break;
    case 'recipe':  page.innerHTML = renderRecipeDetail(params[0]); break;
    case 'cooking': startCookingMode(params[0]); return;
    case 'journal': page.innerHTML = renderJournal(); break;
    case 'me':      page.innerHTML = renderMe(); break;
    default:        page.innerHTML = renderHome();
  }

  app.appendChild(page);
  window.scrollTo(0, 0);
  attachHandlers(view, params[0]);
}

window.addEventListener('hashchange', route);

// ── Shell ────────────────────────────────────────
document.getElementById('app').innerHTML = `
  <nav class="bottom-nav">
    <div class="nav-inner">
      ${navItem('#home',    homeIcon(),    'Accueil')}
      ${navItem('#learn',   learnIcon(),   'Apprendre')}
      ${navItem('#recipes', recipesIcon(), 'Cuisiner')}
      ${navItem('#journal', journalIcon(), 'Journal')}
      ${navItem('#me',      meIcon(),      'Moi')}
    </div>
  </nav>
`;

route();

function navItem(href, icon, label) {
  return `<a href="${href}" class="nav-btn"><span>${icon}</span><span>${label}</span></a>`;
}

// ════════════════════════════════════════════════
//   VUE : ACCUEIL
// ════════════════════════════════════════════════
function renderHome() {
  const stats = state.getStats();
  const firstName = state.get('userName') || 'Chef';

  // Mission du jour : trouver la prochaine leçon non faite
  const nextLesson = LESSONS.find(l => !state.isLessonDone(l.id));
  const nextRecipe = RECIPES.find(r => !state.isRecipeDone(r.id));

  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

  return `
  <!-- Hero -->
  <div class="home-hero">
    <div class="row-sb">
      <div>
        <div class="hero-greeting">${today}</div>
        <div class="hero-title">Bonjour, ${firstName}&nbsp;👨‍🍳</div>
        <div class="hero-sub">Continue ta progression cuisine</div>
      </div>
      <div class="streak-pill">🔥 ${stats.streak} jour${stats.streak > 1 ? 's' : ''}</div>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-val">${stats.xp}</div>
        <div class="hero-stat-lbl">XP gagnés</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-val">${stats.lessonsCount}</div>
        <div class="hero-stat-lbl">Leçons</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-val">${stats.recipesCount}</div>
        <div class="hero-stat-lbl">Recettes</div>
      </div>
    </div>
  </div>

  <!-- Mission du jour -->
  ${nextLesson ? `
  <div class="mt-16">
    <div class="sec-header"><span class="t-h3">Mission du jour</span></div>
    <div class="mission-card">
      <div class="mission-label">📚 Leçon suivante</div>
      <div class="mission-title">${nextLesson.title}</div>
      <div class="mission-sub">${nextLesson.subtitle} · ${nextLesson.duration} min</div>
      <a href="#lesson/${nextLesson.id}" class="btn btn-primary btn-full mt-12">Commencer →</a>
    </div>
  </div>` : `
  <div class="mt-16 card" style="text-align:center;padding:24px">
    <div style="font-size:48px">🏆</div>
    <div class="t-h3 mt-8">Toutes les leçons terminées !</div>
    <div class="t-muted t-small mt-4">Tu peux maintenant t'attaquer aux recettes avancées</div>
  </div>`}

  <!-- Recette suggérée -->
  ${nextRecipe ? `
  <div class="mt-20">
    <div class="sec-header">
      <span class="t-h3">À tester</span>
      <a href="#recipes" class="sec-header-link">Voir tout</a>
    </div>
    <div class="recipe-card" onclick="location.hash='recipe/${nextRecipe.id}'">
      <div class="recipe-cover" style="${recipeCoverStyle(nextRecipe)}">
        <div class="recipe-cover-emoji">${recipeEmoji(nextRecipe)}</div>
        <div class="recipe-cover-badges">
          ${difficultyBadge(nextRecipe.difficulty)}
          <span class="badge badge-neutral">⏱ ${nextRecipe.timePrep + nextRecipe.timeCook} min</span>
        </div>
      </div>
      <div class="recipe-info">
        <div class="recipe-title">${nextRecipe.title}</div>
        <div class="recipe-meta-row">
          <span class="recipe-meta-item">👥 ${nextRecipe.servings} pers.</span>
          <span class="recipe-meta-item">👨‍🍳 ${familyLabel(nextRecipe.family)}</span>
        </div>
      </div>
    </div>
  </div>` : ''}

  <!-- Raccourcis rapides -->
  <div class="mt-20">
    <div class="t-h3" style="margin-bottom:12px">Accès rapide</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <a href="#learn" class="card" style="text-align:center;padding:20px;cursor:pointer">
        <div style="font-size:32px">📚</div>
        <div class="t-h4 mt-8">Apprendre</div>
        <div class="t-small t-muted mt-4">${MODULES.length} modules</div>
      </a>
      <a href="#journal" class="card" style="text-align:center;padding:20px;cursor:pointer">
        <div style="font-size:32px">📒</div>
        <div class="t-h4 mt-8">Journal</div>
        <div class="t-small t-muted mt-4">${stats.journalCount} entrée${stats.journalCount > 1 ? 's' : ''}</div>
      </a>
    </div>
  </div>
  `;
}

// ════════════════════════════════════════════════
//   VUE : APPRENDRE
// ════════════════════════════════════════════════
function renderLearn() {
  const modulesHtml = MODULES.map(mod => {
    const { done, total } = state.moduleProgress(mod);
    const pct = total ? Math.round(done / total * 100) : 0;
    const lessons = mod.lessonIds.map(id => LESSONS.find(l => l.id === id)).filter(Boolean);

    return `
    <div class="module-card">
      <div class="module-header" data-module="${mod.id}">
        <div class="module-emoji" style="background:${mod.color}22">${mod.emoji}</div>
        <div class="module-meta">
          <div class="module-title">${mod.title}</div>
          <div class="module-desc">${mod.description}</div>
          <div class="module-progress-row">
            <div class="progress-bar grow thin"><div class="progress-fill" style="width:${pct}%"></div></div>
            <span class="module-progress-label">${done}/${total}</span>
          </div>
        </div>
        <div class="module-chevron" id="chev-${mod.id}">›</div>
      </div>
      <div class="module-lessons" id="lessons-${mod.id}">
        ${lessons.map(l => lessonRowHtml(l)).join('')}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="t-title mt-4">Apprendre</div>
  <div class="t-body t-muted mt-4 mb-20">Maîtrise les techniques pas à pas</div>

  <div class="stack-12">${modulesHtml}</div>
  `;
}

function lessonRowHtml(lesson) {
  const done = state.isLessonDone(lesson.id);
  const score = state.getLessonScore(lesson.id);
  return `
  <a href="#lesson/${lesson.id}" class="lesson-row">
    <div class="lesson-icon ${done ? 'done' : ''}">
      ${done ? '✅' : '📖'}
    </div>
    <div class="lesson-row-meta">
      <div class="lesson-row-title">${lesson.title}</div>
      <div class="lesson-row-sub">${lesson.subtitle}${score ? ` · ${score.pct}% quiz` : ''}</div>
    </div>
    <div class="lesson-row-dur">${lesson.duration} min</div>
  </a>`;
}

// ════════════════════════════════════════════════
//   VUE : LEÇON PLAYER
// ════════════════════════════════════════════════
function renderLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return `<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Leçon introuvable</div></div>`;

  // Player state
  const totalSteps = lesson.concepts.length + (lesson.goFurther ? 1 : 0) + 1; // +1 pour quiz
  const step = 0;

  return `
  <!-- Topbar -->
  <div class="lesson-topbar" style="margin:-16px -16px 0;border-radius:0">
    <a href="#learn" class="back-btn">←</a>
    <div class="lesson-progress-bar">
      <div class="progress-bar"><div class="progress-fill" id="lesson-pbar" style="width:0%"></div></div>
    </div>
    <div class="step-counter" id="lesson-counter">1/${totalSteps}</div>
  </div>

  <div id="lesson-content" data-lesson="${id}" data-step="0" data-total="${totalSteps}" class="mt-16">
    ${renderLessonStep(lesson, 0)}
  </div>
  `;
}

function renderLessonStep(lesson, step) {
  const concepts = lesson.concepts;
  const hasGoFurther = !!lesson.goFurther;
  const conceptCount = concepts.length;
  const goFurtherStep = hasGoFurther ? conceptCount : -1;
  const quizStep = conceptCount + (hasGoFurther ? 1 : 0);
  const completeStep = quizStep + 1;

  // Concepts
  if (step < conceptCount) {
    const c = concepts[step];
    return `
    <div class="concept-card">
      <div class="concept-num">${step + 1}</div>
      <div class="concept-title">${c.title}</div>
      <div class="concept-body">${c.body}</div>
      ${c.tip ? `<div class="concept-tip"><span>💡</span><span>${c.tip}</span></div>` : ''}
    </div>
    <div class="stack-8 mt-16">
      ${step > 0 ? `<button class="btn btn-secondary btn-full" data-action="prev">← Précédent</button>` : ''}
      <button class="btn btn-primary btn-full" data-action="next">Suivant →</button>
    </div>`;
  }

  // Aller plus loin
  if (step === goFurtherStep && hasGoFurther) {
    const gf = lesson.goFurther;
    return `
    <div class="go-further">
      <div class="go-further-label">Pour aller plus loin</div>
      <div class="go-further-title">${gf.title}</div>
      <div class="go-further-body">${gf.content}</div>
    </div>
    <div class="stack-8 mt-16">
      <button class="btn btn-secondary btn-full" data-action="prev">← Précédent</button>
      <button class="btn btn-primary btn-full" data-action="next">Continuer vers le quiz →</button>
    </div>`;
  }

  // Quiz
  if (step === quizStep) {
    return renderQuiz(lesson, 0, 0, []);
  }

  // Fin
  return renderLessonComplete(lesson);
}

let quizState = { qIndex: 0, correct: 0, answered: [] };

function renderQuiz(lesson, qIndex, correct, answered) {
  const questions = lesson.quiz;
  if (qIndex >= questions.length) {
    return renderLessonComplete(lesson, correct, questions.length);
  }
  const q = questions[qIndex];
  return `
  <div class="quiz-section">
    <div class="quiz-header">
      <div class="quiz-label">🧠 Quiz</div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-counter">Question ${qIndex + 1} sur ${questions.length}</div>
    </div>
    <div class="quiz-options" data-quiz="${lesson.id}" data-q="${qIndex}" data-correct="${q.answer}">
      ${q.options.map((opt, i) => `
        <button class="quiz-opt" data-i="${i}">${opt}</button>
      `).join('')}
    </div>
    <div id="quiz-explanation" class="hidden"></div>
    <div id="quiz-next" class="hidden mt-16">
      <button class="btn btn-primary btn-full" data-action="quiz-next" data-correct="${q.answer}" data-total="${questions.length}" data-qindex="${qIndex}" data-lesson="${lesson.id}">
        ${qIndex + 1 < questions.length ? 'Question suivante →' : 'Voir le résultat 🎉'}
      </button>
    </div>
  </div>`;
}

function renderLessonComplete(lesson, correct = 0, total = 0) {
  const alreadyDone = state.isLessonDone(lesson.id);
  if (!alreadyDone) state.completeLesson(lesson.id, correct, total);
  const xpEarned = 20 + (correct * 5);
  const pct = total > 0 ? Math.round(correct / total * 100) : 0;

  const linkedRecipes = (lesson.linkedRecipes || [])
    .map(id => RECIPES.find(r => r.id === id)).filter(Boolean);

  return `
  <div class="lesson-complete">
    <div class="complete-emoji">${pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚'}</div>
    <div class="complete-title">Leçon terminée !</div>
    ${total > 0 ? `<div class="complete-sub">${correct}/${total} bonnes réponses · ${pct}%</div>` : ''}
    ${!alreadyDone ? `<div class="xp-pill">+${xpEarned} XP</div>` : ''}
  </div>

  ${linkedRecipes.length > 0 ? `
  <div class="mt-20">
    <div class="t-h3" style="margin-bottom:12px">Mets en pratique</div>
    <div class="stack-12">
      ${linkedRecipes.map(r => `
        <div class="recipe-card" onclick="location.hash='recipe/${r.id}'">
          <div class="recipe-cover" style="${recipeCoverStyle(r)}">
            <div class="recipe-cover-emoji">${recipeEmoji(r)}</div>
            <div class="recipe-cover-badges">${difficultyBadge(r.difficulty)}</div>
          </div>
          <div class="recipe-info">
            <div class="recipe-title">${r.title}</div>
            <div class="recipe-meta-row">
              <span class="recipe-meta-item">⏱ ${r.timePrep + r.timeCook} min</span>
              <span class="recipe-meta-item">👥 ${r.servings} pers.</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>` : ''}

  <div class="stack-8 mt-20">
    <a href="#learn" class="btn btn-primary btn-full">← Retour aux leçons</a>
    <a href="#home" class="btn btn-secondary btn-full">Accueil</a>
  </div>`;
}

// ════════════════════════════════════════════════
//   VUE : RECETTES
// ════════════════════════════════════════════════
function renderRecipes(filter = 'tous', search = '') {
  const families = ['tous', ...new Set(RECIPES.map(r => r.family))];

  const filtered = RECIPES.filter(r => {
    const matchFamily = filter === 'tous' || r.family === filter;
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase());
    return matchFamily && matchSearch;
  });

  return `
  <div class="t-title mt-4">Recettes</div>

  <div class="mt-12">
    <div class="search-bar">
      <span class="search-icon">🔍</span>
      <input type="search" id="recipe-search" placeholder="Rechercher une recette…" value="${search}" />
    </div>
  </div>

  <div class="filter-row mt-8">
    ${families.map(f => `
      <button class="filter-chip ${filter === f ? 'active' : ''}" data-filter="${f}">
        ${familyLabel(f)}
      </button>
    `).join('')}
  </div>

  <div class="recipes-grid mt-8">
    ${filtered.length ? filtered.map(r => `
      <div class="recipe-card" onclick="location.hash='recipe/${r.id}'">
        <div class="recipe-cover" style="${recipeCoverStyle(r)}">
          <div class="recipe-cover-emoji">${recipeEmoji(r)}</div>
          <div class="recipe-cover-badges">
            ${difficultyBadge(r.difficulty)}
            ${state.isRecipeDone(r.id) ? '<span class="badge badge-green">✓ Cuisiné</span>' : ''}
          </div>
        </div>
        <div class="recipe-info">
          <div class="recipe-title">${r.title}</div>
          <div class="recipe-meta-row">
            <span class="recipe-meta-item">⏱ ${r.timePrep + r.timeCook} min</span>
            <span class="recipe-meta-item">👥 ${r.servings} pers.</span>
            <span class="recipe-meta-item">${difficultyDots(r.difficulty)}</span>
          </div>
        </div>
      </div>
    `).join('') : `
      <div class="empty-state">
        <div class="empty-icon">🍽</div>
        <div class="empty-title">Aucune recette trouvée</div>
        <div class="empty-sub">Essaie un autre filtre</div>
      </div>
    `}
  </div>`;
}

// ════════════════════════════════════════════════
//   VUE : DÉTAIL RECETTE
// ════════════════════════════════════════════════
function renderRecipeDetail(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return `<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Recette introuvable</div></div>`;

  const done = state.isRecipeDone(id);

  return `
  <a href="#recipes" class="btn btn-ghost btn-sm" style="margin-bottom:12px">← Retour</a>

  <div class="recipe-hero" style="${recipeCoverStyle(recipe)}">
    <div style="font-size:80px">${recipeEmoji(recipe)}</div>
    <div class="recipe-hero-overlay"></div>
  </div>

  <div class="mt-16 row-sb row-gap12">
    <div>
      <div class="t-title">${recipe.title}</div>
      <div class="recipe-meta-row mt-8">
        ${difficultyBadge(recipe.difficulty)}
        <span class="badge badge-neutral">⏱ ${recipe.timePrep + recipe.timeCook} min</span>
        <span class="badge badge-neutral">👥 ${recipe.servings} pers.</span>
      </div>
    </div>
  </div>

  ${done ? `
  <div class="recipe-done-banner mt-12">
    ✅ <span>Tu as déjà cuisiné cette recette</span>
  </div>` : ''}

  <!-- Objectifs -->
  <div class="card mt-16">
    <div class="t-h4" style="margin-bottom:10px">Ce que tu vas apprendre</div>
    <div class="objectives-list">
      ${recipe.objectives.map(o => `
        <div class="objective-item">
          <div class="objective-dot"></div>
          <span>${o}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Ingrédients -->
  <div class="card mt-12">
    <div class="t-h4" style="margin-bottom:10px">Ingrédients · ${recipe.servings} pers.</div>
    <div class="ingredients-list">
      ${recipe.ingredients.map(ing => `
        <div class="ingredient-row">
          <span class="ingredient-qty">${ing.qty ? `${ing.qty}${ing.unit ? ' ' + ing.unit : ''}` : ''}</span>
          <span class="ingredient-name">${ing.item}</span>
          ${ing.note ? `<span class="ingredient-note">${ing.note}</span>` : ''}
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Étapes aperçu -->
  <div class="card mt-12">
    <div class="t-h4" style="margin-bottom:10px">${recipe.steps.length} étapes</div>
    <div class="stack-8">
      ${recipe.steps.map((s, i) => `
        <div class="row row-gap12" style="padding:8px 0;border-bottom:1px solid var(--border)">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--orange-soft);color:var(--orange-dark);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0">${i+1}</div>
          <div class="t-small">${s.title}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Tips du chef -->
  ${recipe.tips?.length ? `
  <div class="card mt-12" style="background:var(--yellow-soft);border-color:rgba(217,119,6,0.2)">
    <div class="t-h4" style="margin-bottom:10px">💡 Tips du chef</div>
    <div class="stack-8">
      ${recipe.tips.map(t => `<div class="t-small" style="padding:8px 0;border-bottom:1px solid rgba(217,119,6,0.15)">${t}</div>`).join('')}
    </div>
  </div>` : ''}

  <!-- CTA -->
  <div class="stack-8 mt-20">
    <a href="#cooking/${recipe.id}" class="btn btn-primary btn-lg btn-full">
      👨‍🍳 Commencer la recette
    </a>
    <button class="btn btn-secondary btn-full" id="btn-log-recipe" data-recipe="${recipe.id}">
      📒 Ajouter au journal
    </button>
  </div>
  `;
}

// ════════════════════════════════════════════════
//   MODE CUISINE (plein écran)
// ════════════════════════════════════════════════
let cookingStep = 0;
let cookingTimer = null;
let cookingTimerVal = 0;
let cookingTimerRunning = false;

function startCookingMode(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) { location.hash = 'recipes'; return; }
  cookingStep = 0;
  stopTimer();
  renderCookingStep(recipe);
}

function renderCookingStep(recipe) {
  const step = recipe.steps[cookingStep];
  const total = recipe.steps.length;
  const isLast = cookingStep === total - 1;
  const pct = Math.round((cookingStep / total) * 100);

  // Supprimer ancien cooking mode
  document.getElementById('cooking-mode')?.remove();

  const div = document.createElement('div');
  div.id = 'cooking-mode';
  div.className = 'cooking-mode';
  div.innerHTML = `
  <div class="cooking-topbar">
    <button class="back-btn" id="cm-close">✕</button>
    <div class="progress-bar grow thin" style="max-width:200px">
      <div class="progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="cooking-step-counter">Étape ${cookingStep + 1}/${total}</div>
  </div>

  <div class="cooking-body">
    <div class="cooking-step-num">Étape ${cookingStep + 1} — ${recipe.title}</div>
    <div class="cooking-step-title">${step.title}</div>
    <div class="cooking-step-action">${step.action}</div>

    ${step.timer ? `
    <div class="timer-card">
      <div>
        <div class="timer-label">Minuteur</div>
        <div class="timer-val" id="timer-display">${formatTimer(step.timer * 60)}</div>
      </div>
      <button class="timer-btn" id="timer-toggle">▶ Démarrer</button>
    </div>` : ''}

    <div class="cooking-why mt-16">
      <div class="cooking-why-label">Pourquoi ?</div>
      ${step.why}
    </div>

    <div class="cooking-mistake">
      <div class="cooking-mistake-label">⚠ Erreur fréquente</div>
      ${step.mistake}
    </div>
  </div>

  <div class="cooking-footer">
    <button class="btn btn-secondary" id="cm-prev" ${cookingStep === 0 ? 'disabled' : ''}>← Préc.</button>
    <button class="btn ${isLast ? 'btn-green' : 'btn-primary'}" id="cm-next">
      ${isLast ? '✅ Terminer' : 'Suivant →'}
    </button>
  </div>
  `;

  document.getElementById('app').appendChild(div);

  // Timers
  if (step.timer) {
    cookingTimerVal = step.timer * 60;
    cookingTimerRunning = false;
    document.getElementById('timer-toggle').onclick = toggleTimer;
  }

  document.getElementById('cm-close').onclick = () => {
    stopTimer();
    div.remove();
    history.back();
  };
  document.getElementById('cm-prev').onclick = () => {
    if (cookingStep > 0) { stopTimer(); cookingStep--; renderCookingStep(recipe); }
  };
  document.getElementById('cm-next').onclick = () => {
    stopTimer();
    if (cookingStep < total - 1) {
      cookingStep++;
      renderCookingStep(recipe);
    } else {
      // Terminé !
      state.completeRecipe(recipe.id);
      div.remove();
      location.hash = `recipe/${recipe.id}`;
      showToast('🏆 Recette terminée ! +30 XP');
    }
  };
}

function toggleTimer() {
  cookingTimerRunning = !cookingTimerRunning;
  const btn = document.getElementById('timer-toggle');
  if (!btn) return;
  btn.textContent = cookingTimerRunning ? '⏸ Pause' : '▶ Reprendre';
  if (cookingTimerRunning) {
    cookingTimer = setInterval(() => {
      cookingTimerVal--;
      const disp = document.getElementById('timer-display');
      if (disp) disp.textContent = formatTimer(cookingTimerVal);
      if (cookingTimerVal <= 0) {
        stopTimer();
        if (btn) btn.textContent = '✅ Terminé';
        showToast('⏰ Minuteur terminé !');
      }
    }, 1000);
  } else {
    clearInterval(cookingTimer);
  }
}

function stopTimer() {
  clearInterval(cookingTimer);
  cookingTimerRunning = false;
}

function formatTimer(secs) {
  const m = Math.floor(Math.abs(secs) / 60).toString().padStart(2, '0');
  const s = (Math.abs(secs) % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ════════════════════════════════════════════════
//   VUE : JOURNAL
// ════════════════════════════════════════════════
function renderJournal() {
  const entries = state.get('journal');
  return `
  <div class="row-sb mt-4">
    <div class="t-title">Journal</div>
    <button class="btn btn-primary btn-sm" id="btn-add-entry">+ Ajouter</button>
  </div>

  <div id="journal-list" class="stack-12 mt-16">
    ${entries.length ? entries.map(e => journalEntryHtml(e)).join('') : `
      <div class="empty-state">
        <div class="empty-icon">📷</div>
        <div class="empty-title">Aucune entrée pour l'instant</div>
        <div class="empty-sub">Cuisine quelque chose et prends une photo !</div>
        <button class="btn btn-primary mt-12" id="btn-add-entry-2">Ajouter une entrée</button>
      </div>
    `}
  </div>

  <!-- Formulaire ajout (caché) -->
  <div id="add-entry-form" class="hidden">
    <div class="card mt-16">
      <div class="t-h3 mb-16">Nouvelle entrée</div>
      <div class="add-form">
        <div class="field">
          <label class="field-label">Recette</label>
          <select id="je-recipe">
            <option value="">-- Choisir une recette --</option>
            ${RECIPES.map(r => `<option value="${r.id}">${r.title}</option>`).join('')}
            <option value="autre">Autre / Libre</option>
          </select>
        </div>
        <div class="field" id="je-custom-field" style="display:none">
          <label class="field-label">Nom du plat</label>
          <input type="text" id="je-custom" placeholder="Ex: Tarte aux pommes maison" />
        </div>
        <div class="field">
          <label class="field-label">Photo (optionnel)</label>
          <div class="photo-placeholder" id="je-photo-btn">
            <div class="photo-icon">📸</div>
            <span>Appuyer pour ajouter une photo</span>
          </div>
          <input type="file" id="je-photo-input" accept="image/*" capture="environment" style="display:none" />
          <img id="je-photo-preview" class="photo-preview hidden" />
        </div>
        <div class="field">
          <label class="field-label">Note / Observations</label>
          <textarea id="je-note" placeholder="Qu'est-ce qui a bien marché ? Qu'est-ce que tu referais différemment ?"></textarea>
        </div>
        <div class="field">
          <label class="field-label">Satisfaction</label>
          <div class="stars-input" id="stars-input">
            ${[1,2,3,4,5].map(i => `<button class="star-btn" data-star="${i}">⭐</button>`).join('')}
          </div>
        </div>
        <div class="stack-8">
          <button class="btn btn-primary btn-full" id="je-save">Enregistrer</button>
          <button class="btn btn-ghost btn-full" id="je-cancel">Annuler</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

function journalEntryHtml(e) {
  const recipe = RECIPES.find(r => r.id === e.recipeId);
  const title = recipe?.title || e.customTitle || 'Plat sans nom';
  const stars = '⭐'.repeat(e.rating || 0);
  return `
  <div class="journal-entry">
    ${e.photo
      ? `<img class="journal-photo" src="${e.photo}" alt="${title}" />`
      : `<div class="journal-photo">${recipeEmoji(recipe) || '🍽'}</div>`}
    <div class="journal-body">
      <div class="journal-date">${formatDate(e.date)}</div>
      <div class="journal-recipe-title">${title}</div>
      ${e.note ? `<div class="journal-note">${e.note}</div>` : ''}
      ${stars ? `<div class="journal-rating">${stars}</div>` : ''}
      <button class="btn btn-ghost btn-sm t-red mt-8" data-delete-entry="${e.id}" style="color:var(--red)">Supprimer</button>
    </div>
  </div>`;
}

// ════════════════════════════════════════════════
//   VUE : MOI
// ════════════════════════════════════════════════
function renderMe() {
  const stats = state.getStats();
  const name = state.get('userName') || 'Chef';

  const allSkills = [...new Set(RECIPES.flatMap(r => r.skills || []))];
  const earnedSkills = allSkills.filter(s =>
    RECIPES.filter(r => r.skills?.includes(s)).every(r => state.isRecipeDone(r.id))
  );

  return `
  <div class="card mt-4">
    <div class="row row-gap12">
      <div class="profile-avatar">👨‍🍳</div>
      <div>
        <div class="t-title">${name}</div>
        <div class="t-small t-muted">Chef en progression 🔥</div>
        <div class="row row-gap8 mt-8">
          <div class="xp-pill" style="font-size:13px;padding:5px 12px">⚡ ${stats.xp} XP</div>
          <div class="streak-pill" style="background:var(--orange-soft);border-color:rgba(232,93,4,0.2);color:var(--orange-dark)">🔥 ${stats.streak} jours</div>
        </div>
      </div>
    </div>
  </div>

  <div class="stat-grid mt-16">
    <div class="stat-tile">
      <div class="stat-val">${stats.lessonsCount}</div>
      <div class="stat-lbl">Leçons terminées</div>
    </div>
    <div class="stat-tile">
      <div class="stat-val">${stats.recipesCount}</div>
      <div class="stat-lbl">Recettes cuisinées</div>
    </div>
    <div class="stat-tile">
      <div class="stat-val">${stats.journalCount}</div>
      <div class="stat-lbl">Entrées journal</div>
    </div>
    <div class="stat-tile">
      <div class="stat-val">${Math.round(LESSONS.filter(l => state.isLessonDone(l.id)).length / Math.max(1, LESSONS.length) * 100)}%</div>
      <div class="stat-lbl">Cours complétés</div>
    </div>
  </div>

  <!-- Progression par module -->
  <div class="mt-20">
    <div class="t-h3" style="margin-bottom:12px">Progression</div>
    <div class="stack-10">
      ${MODULES.map(mod => {
        const { done, total } = state.moduleProgress(mod);
        const pct = total ? Math.round(done / total * 100) : 0;
        return `
        <div class="card-flat row row-gap12" style="margin-bottom:8px">
          <div style="font-size:24px">${mod.emoji}</div>
          <div class="grow">
            <div class="t-h4">${mod.title}</div>
            <div class="progress-bar thin mt-8">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
          <div class="t-small t-muted" style="font-weight:700">${done}/${total}</div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <!-- Compétences débloquées -->
  ${earnedSkills.length ? `
  <div class="mt-20">
    <div class="t-h3" style="margin-bottom:12px">🏅 Compétences gagnées</div>
    <div class="skills-wrap">
      ${earnedSkills.map(s => `<div class="skill-badge earned">✓ ${s}</div>`).join('')}
    </div>
  </div>` : ''}

  <!-- Paramètres -->
  <div class="card mt-20">
    <div class="t-h4" style="margin-bottom:12px">Paramètres</div>
    <div class="field">
      <label class="field-label">Ton prénom</label>
      <input type="text" id="pref-name" value="${name}" placeholder="Ton prénom" />
    </div>
    <button class="btn btn-secondary btn-full mt-12" id="save-prefs">Enregistrer</button>
    <button class="btn btn-ghost btn-full mt-8" id="reset-progress" style="color:var(--red);font-size:13px">Réinitialiser la progression</button>
  </div>
  `;
}

// ════════════════════════════════════════════════
//   HANDLERS D'ÉVÉNEMENTS
// ════════════════════════════════════════════════
function attachHandlers(view, param) {
  // Modules expand/collapse
  document.querySelectorAll('[data-module]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.module;
      const lessons = document.getElementById(`lessons-${id}`);
      const chev = document.getElementById(`chev-${id}`);
      if (!lessons) return;
      lessons.classList.toggle('open');
      chev?.classList.toggle('open');
    });
  });

  // Quiz options
  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('[data-quiz]');
      if (!container) return;
      const correct = parseInt(container.dataset.correct);
      const chosen = parseInt(btn.dataset.i);
      const qIndex = parseInt(container.dataset.q);
      const lessonId = container.dataset.quiz;
      const lesson = LESSONS.find(l => l.id === lessonId);

      // Désactiver tous les boutons
      container.querySelectorAll('.quiz-opt').forEach((b, i) => {
        b.classList.add('disabled');
        if (i === correct) b.classList.add('correct');
        if (i === chosen && chosen !== correct) b.classList.add('wrong');
      });

      // Explication
      const expEl = document.getElementById('quiz-explanation');
      if (expEl) {
        expEl.textContent = lesson.quiz[qIndex].explanation;
        expEl.classList.remove('hidden');
      }
      document.getElementById('quiz-next')?.classList.remove('hidden');

      // Suivi score
      if (!quizState._lessonId || quizState._lessonId !== lessonId) {
        quizState = { qIndex, correct: 0, answered: [], _lessonId: lessonId };
      }
      if (chosen === correct) quizState.correct++;
    });
  });

  // Quiz next
  document.querySelector('[data-action="quiz-next"]')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const lesson = LESSONS.find(l => l.id === btn.dataset.lesson);
    const qIndex = parseInt(btn.dataset.qindex) + 1;
    const total = parseInt(btn.dataset.total);

    const content = document.getElementById('lesson-content');
    if (!content) return;

    if (qIndex < total) {
      const quizStep = lesson.concepts.length + (lesson.goFurther ? 1 : 0);
      content.innerHTML = renderQuiz(lesson, qIndex, quizState.correct, quizState.answered);
      attachHandlers('lesson', lesson.id);
    } else {
      content.innerHTML = renderLessonComplete(lesson, quizState.correct, total);
    }
  });

  // Lesson prev/next
  document.querySelectorAll('[data-action]').forEach(btn => {
    if (btn.dataset.action === 'next') {
      btn.addEventListener('click', () => advanceLesson(1));
    }
    if (btn.dataset.action === 'prev') {
      btn.addEventListener('click', () => advanceLesson(-1));
    }
  });

  // Recipe search
  document.getElementById('recipe-search')?.addEventListener('input', (e) => {
    const page = document.getElementById('current-page');
    const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'tous';
    if (page) page.innerHTML = renderRecipes(activeFilter, e.target.value);
    attachHandlers('recipes');
  });

  // Recipe filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const page = document.getElementById('current-page');
      const search = document.getElementById('recipe-search')?.value || '';
      if (page) page.innerHTML = renderRecipes(chip.dataset.filter, search);
      attachHandlers('recipes');
    });
  });

  // Journal handlers
  const addBtn = document.getElementById('btn-add-entry');
  const addBtn2 = document.getElementById('btn-add-entry-2');
  const form = document.getElementById('add-entry-form');
  if (addBtn) addBtn.addEventListener('click', () => form?.classList.remove('hidden'));
  if (addBtn2) addBtn2.addEventListener('click', () => form?.classList.remove('hidden'));

  document.getElementById('je-cancel')?.addEventListener('click', () => {
    form?.classList.add('hidden');
  });

  document.getElementById('je-recipe')?.addEventListener('change', (e) => {
    const custom = document.getElementById('je-custom-field');
    if (custom) custom.style.display = e.target.value === 'autre' ? '' : 'none';
  });

  document.getElementById('je-photo-btn')?.addEventListener('click', () => {
    document.getElementById('je-photo-input')?.click();
  });

  document.getElementById('je-photo-input')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const preview = document.getElementById('je-photo-preview');
      const placeholder = document.getElementById('je-photo-btn');
      if (preview) { preview.src = ev.target.result; preview.classList.remove('hidden'); }
      if (placeholder) placeholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  });

  // Stars
  let selectedStar = 0;
  document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedStar = parseInt(btn.dataset.star);
      document.querySelectorAll('.star-btn').forEach((b, i) => {
        b.classList.toggle('active', i < selectedStar);
      });
    });
  });

  document.getElementById('je-save')?.addEventListener('click', () => {
    const recipeId = document.getElementById('je-recipe')?.value;
    const customTitle = document.getElementById('je-custom')?.value;
    const note = document.getElementById('je-note')?.value;
    const photo = document.getElementById('je-photo-preview')?.src || null;
    const validPhoto = photo && photo.startsWith('data:') ? photo : null;

    state.addJournalEntry({
      recipeId: recipeId === 'autre' ? null : recipeId,
      customTitle: recipeId === 'autre' ? customTitle : null,
      note,
      photo: validPhoto,
      rating: selectedStar,
    });
    location.hash = 'journal';
    showToast('✅ Entrée ajoutée ! +10 XP');
  });

  // Delete journal entry
  document.querySelectorAll('[data-delete-entry]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Supprimer cette entrée ?')) {
        state.deleteJournalEntry(btn.dataset.deleteEntry);
        location.hash = 'journal';
      }
    });
  });

  // Log recipe from detail
  document.getElementById('btn-log-recipe')?.addEventListener('click', (e) => {
    location.hash = 'journal';
    setTimeout(() => {
      document.getElementById('btn-add-entry')?.click();
      const sel = document.getElementById('je-recipe');
      if (sel) sel.value = e.currentTarget.dataset.recipe;
    }, 100);
  });

  // Profile save
  document.getElementById('save-prefs')?.addEventListener('click', () => {
    const name = document.getElementById('pref-name')?.value.trim();
    if (name) { state.set('userName', name); showToast('✅ Préférences sauvegardées'); }
  });

  document.getElementById('reset-progress')?.addEventListener('click', () => {
    if (confirm('Réinitialiser toute ta progression ? Cette action est irréversible.')) {
      state.reset();
      location.hash = 'home';
      showToast('🔄 Progression réinitialisée');
    }
  });
}

// ── Avancer dans une leçon ──────────────────────
function advanceLesson(dir) {
  const content = document.getElementById('lesson-content');
  if (!content) return;

  const lessonId = content.dataset.lesson;
  const lesson = LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;

  let step = parseInt(content.dataset.step) + dir;
  const total = parseInt(content.dataset.total);
  step = Math.max(0, Math.min(step, total));

  content.dataset.step = step;
  content.innerHTML = renderLessonStep(lesson, step);
  attachHandlers('lesson', lessonId);

  // Update progress bar
  const pbar = document.getElementById('lesson-pbar');
  const counter = document.getElementById('lesson-counter');
  if (pbar) pbar.style.width = `${Math.round(step / (total - 1) * 100)}%`;
  if (counter) counter.textContent = `${step + 1}/${total}`;
}

// ════════════════════════════════════════════════
//   HELPERS
// ════════════════════════════════════════════════
const COVER_GRADIENTS = {
  viande:     'linear-gradient(135deg, #1a0a00, #7c2d12)',
  poisson:    'linear-gradient(135deg, #0c1a4d, #1e3a8a)',
  légume:     'linear-gradient(135deg, #052e16, #166534)',
  sauce:      'linear-gradient(135deg, #2d1b00, #92400e)',
  pâtisserie: 'linear-gradient(135deg, #2d0a4e, #7c3aed)',
  pâtes:      'linear-gradient(135deg, #1a1200, #854d0e)',
  œufs:       'linear-gradient(135deg, #1a1200, #d97706)',
  soupe:      'linear-gradient(135deg, #0a1f0a, #15803d)',
  dessert:    'linear-gradient(135deg, #2d0a1a, #be185d)',
};

const RECIPE_EMOJIS = {
  viande: '🥩', poisson: '🐟', légume: '🥦', sauce: '🫙',
  pâtisserie: '🥐', pâtes: '🍝', œufs: '🥚', soupe: '🍲', dessert: '🍰',
};

const FAMILY_LABELS = {
  tous: 'Tous', viande: '🥩 Viande', poisson: '🐟 Poisson', légume: '🥦 Légumes',
  sauce: '🫙 Sauces', pâtisserie: '🥐 Pâtisserie', pâtes: '🍝 Pâtes & riz',
  œufs: '🥚 Œufs', soupe: '🍲 Soupes', dessert: '🍰 Desserts',
};

function recipeCoverStyle(r) {
  return `background:${COVER_GRADIENTS[r?.family] || 'linear-gradient(135deg, #1a1a2e, #2d2d4e)'}`;
}
function recipeEmoji(r) { return RECIPE_EMOJIS[r?.family] || '🍽'; }
function familyLabel(f) { return FAMILY_LABELS[f] || f; }

function difficultyBadge(d) {
  const labels = ['', 'Facile', 'Intermédiaire', 'Avancé', 'Expert'];
  const classes = ['', 'badge-green', 'badge-yellow', 'badge-orange', 'badge-red'];
  return `<span class="badge ${classes[d] || 'badge-neutral'}">${labels[d] || ''}</span>`;
}

function difficultyDots(d) {
  return [1,2,3,4].map(i => `<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${i<=d?'var(--orange)':'var(--surface-3)'}"></span>`).join('');
}

function formatDate(str) {
  if (!str) return '';
  return new Date(str).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function showToast(msg) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ── SVG Icons ───────────────────────────────────
const I = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const homeIcon    = () => I('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');
const learnIcon   = () => I('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>');
const recipesIcon = () => I('<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>');
const journalIcon = () => I('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>');
const meIcon      = () => I('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>');
