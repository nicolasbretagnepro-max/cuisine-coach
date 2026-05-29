// ════════════════════════════════════════════════
//   STATE — Chef Coach
//   Gestion de la progression utilisateur
//   Stockage : localStorage
// ════════════════════════════════════════════════

const KEY = 'chef-coach-state';

const DEFAULTS = {
  // Progression
  completedLessons: [],   // IDs des leçons terminées
  lessonScores: {},        // { lessonId: { correct, total, date } }
  completedRecipes: [],   // IDs des recettes cuisinées
  // Gamification
  xp: 0,
  streak: 0,
  lastActiveDate: null,   // 'YYYY-MM-DD'
  // Journal
  journal: [],            // [{ id, recipeId, date, note, rating, photo }]
  // Onboarding
  onboarded: false,
  userName: '',
};

export const state = {
  _data: null,

  load() {
    try {
      const raw = localStorage.getItem(KEY);
      this._data = raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
    } catch {
      this._data = { ...DEFAULTS };
    }
    this._updateStreak();
    return this;
  },

  save() {
    localStorage.setItem(KEY, JSON.stringify(this._data));
  },

  get(key) {
    return this._data[key];
  },

  set(key, val) {
    this._data[key] = val;
    this.save();
  },

  // ── Streak ──────────────────────────────────
  _updateStreak() {
    const today = _today();
    const last = this._data.lastActiveDate;
    if (!last) return;
    if (last === today) return; // déjà actif aujourd'hui
    const diff = _daysDiff(last, today);
    if (diff > 1) {
      // streak cassé
      this._data.streak = 0;
    }
    // ne pas reset streak ici, on le fait au markActive
  },

  markActive() {
    const today = _today();
    const last = this._data.lastActiveDate;
    if (last === today) return;
    const diff = last ? _daysDiff(last, today) : 999;
    if (diff === 1) {
      this._data.streak += 1;
    } else if (diff > 1) {
      this._data.streak = 1;
    } else {
      this._data.streak = Math.max(1, this._data.streak);
    }
    this._data.lastActiveDate = today;
    this.save();
  },

  // ── Leçons ──────────────────────────────────
  isLessonDone(id) {
    return this._data.completedLessons.includes(id);
  },

  completeLesson(id, correct, total) {
    if (!this.isLessonDone(id)) {
      this._data.completedLessons.push(id);
      this._data.xp += 20 + (correct * 5);
    }
    this._data.lessonScores[id] = {
      correct, total,
      date: _today(),
      pct: total > 0 ? Math.round(correct / total * 100) : 0,
    };
    this.markActive();
    this.save();
  },

  getLessonScore(id) {
    return this._data.lessonScores[id] || null;
  },

  // ── Recettes ────────────────────────────────
  isRecipeDone(id) {
    return this._data.completedRecipes.includes(id);
  },

  completeRecipe(id) {
    if (!this.isRecipeDone(id)) {
      this._data.completedRecipes.push(id);
      this._data.xp += 30;
    }
    this.markActive();
    this.save();
  },

  // ── Journal ─────────────────────────────────
  addJournalEntry(entry) {
    const id = Date.now().toString();
    this._data.journal.unshift({ id, ...entry, date: _today() });
    this._data.xp += 10;
    this.markActive();
    this.save();
    return id;
  },

  deleteJournalEntry(id) {
    this._data.journal = this._data.journal.filter(e => e.id !== id);
    this.save();
  },

  // ── Stats ────────────────────────────────────
  getStats() {
    const d = this._data;
    return {
      xp: d.xp,
      streak: d.streak,
      lessonsCount: d.completedLessons.length,
      recipesCount: d.completedRecipes.length,
      journalCount: d.journal.length,
    };
  },

  // ── Module progress ──────────────────────────
  moduleProgress(module) {
    const done = module.lessonIds.filter(id => this.isLessonDone(id)).length;
    return { done, total: module.lessonIds.length };
  },

  // ── Reset (debug) ────────────────────────────
  reset() {
    this._data = { ...DEFAULTS };
    this.save();
  },
};

// ─── Helpers date ───────────────────────────────
function _today() {
  return new Date().toISOString().slice(0, 10);
}
function _daysDiff(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}
