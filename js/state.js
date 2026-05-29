// ════════════════════════════════════════════════
//   STATE — Chef Coach
//   Gestion de la progression utilisateur
//   Variable globale (chargée avant app.js)
// ════════════════════════════════════════════════

const state = (function () {
  const KEY = 'chef-coach-v1';

  const DEFAULTS = {
    completedLessons: [],
    lessonScores: {},
    completedRecipes: [],
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    journal: [],
    userName: '',
  };

  let _data = null;

  function _today() {
    return new Date().toISOString().slice(0, 10);
  }
  function _daysDiff(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  }

  return {
    load() {
      try {
        const raw = localStorage.getItem(KEY);
        _data = raw ? Object.assign({}, DEFAULTS, JSON.parse(raw)) : Object.assign({}, DEFAULTS);
      } catch (e) {
        _data = Object.assign({}, DEFAULTS);
      }
      this._updateStreak();
      return this;
    },

    save() {
      localStorage.setItem(KEY, JSON.stringify(_data));
    },

    get(key) { return _data[key]; },

    set(key, val) { _data[key] = val; this.save(); },

    _updateStreak() {
      const today = _today();
      const last = _data.lastActiveDate;
      if (!last || last === today) return;
      const diff = _daysDiff(last, today);
      if (diff > 1) _data.streak = 0;
    },

    markActive() {
      const today = _today();
      const last = _data.lastActiveDate;
      if (last === today) return;
      const diff = last ? _daysDiff(last, today) : 999;
      _data.streak = diff === 1 ? _data.streak + 1 : 1;
      _data.lastActiveDate = today;
      this.save();
    },

    isLessonDone(id) { return _data.completedLessons.includes(id); },

    completeLesson(id, correct, total) {
      if (!this.isLessonDone(id)) {
        _data.completedLessons.push(id);
        _data.xp += 20 + (correct * 5);
      }
      _data.lessonScores[id] = {
        correct, total,
        date: _today(),
        pct: total > 0 ? Math.round(correct / total * 100) : 0,
      };
      this.markActive();
      this.save();
    },

    getLessonScore(id) { return _data.lessonScores[id] || null; },

    isRecipeDone(id) { return _data.completedRecipes.includes(id); },

    completeRecipe(id) {
      if (!this.isRecipeDone(id)) {
        _data.completedRecipes.push(id);
        _data.xp += 30;
      }
      this.markActive();
      this.save();
    },

    addJournalEntry(entry) {
      const id = Date.now().toString();
      _data.journal.unshift(Object.assign({ id, date: _today() }, entry));
      _data.xp += 10;
      this.markActive();
      this.save();
      return id;
    },

    deleteJournalEntry(id) {
      _data.journal = _data.journal.filter(function(e) { return e.id !== id; });
      this.save();
    },

    getStats() {
      return {
        xp: _data.xp,
        streak: _data.streak,
        lessonsCount: _data.completedLessons.length,
        recipesCount: _data.completedRecipes.length,
        journalCount: _data.journal.length,
      };
    },

    moduleProgress(mod) {
      var self = this;
      var done = mod.lessonIds.filter(function(id) { return self.isLessonDone(id); }).length;
      return { done: done, total: mod.lessonIds.length };
    },

    reset() {
      _data = Object.assign({}, DEFAULTS);
      this.save();
    },
  };
})();
