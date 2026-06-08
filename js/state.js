// ════════════════════════════════════════════════
//   STATE — Chef Coach
// ════════════════════════════════════════════════

const state = (function () {
  var KEY = 'chef-coach-v1';

  var DEFAULTS = {
    completedLessons: [],
    lessonScores:     {},
    completedRecipes: [],
    recipeNotes:      {},   // { recipeId: { note, photo, rating, date } }
    xp:               0,
    streak:           0,
    lastActiveDate:   null,
    userName:         '',
    onboarded:        false,
    level:            null, // 'debutant' | 'intermediaire' | 'passionne'
    weeklyGoal:       2,
    theme:            'system', // 'light' | 'dark' | 'system'
    lastOpened:       null, // { type: 'lesson'|'recipe', id, title, href, date }
  };

  var _data = null;

  function _today() { return new Date().toISOString().slice(0, 10); }
  function _daysDiff(a, b) { return Math.round((new Date(b) - new Date(a)) / 86400000); }

  return {
    load: function() {
      try {
        var raw = localStorage.getItem(KEY);
        _data = raw ? Object.assign({}, DEFAULTS, JSON.parse(raw)) : Object.assign({}, DEFAULTS);
        // Migrations : assurer les champs nouveaux
        if (!_data.recipeNotes) _data.recipeNotes = {};
        if (typeof _data.onboarded === 'undefined') _data.onboarded = false;
        if (typeof _data.level === 'undefined') _data.level = null;
        if (!_data.theme) _data.theme = 'system';
        if (typeof _data.lastOpened === 'undefined') _data.lastOpened = null;
      } catch (e) {
        _data = Object.assign({}, DEFAULTS);
      }
      this._updateStreak();
      return this;
    },

    save: function() { localStorage.setItem(KEY, JSON.stringify(_data)); },

    get: function(key) { return _data[key]; },
    set: function(key, val) { _data[key] = val; this.save(); },

    setLastOpened: function(entry) {
      _data.lastOpened = Object.assign({}, entry, { date: _today() });
      this.save();
    },

    _updateStreak: function() {
      var today = _today();
      var last = _data.lastActiveDate;
      if (!last || last === today) return;
      if (_daysDiff(last, today) > 1) _data.streak = 0;
    },

    markActive: function() {
      var today = _today();
      var last = _data.lastActiveDate;
      if (last === today) return;
      var diff = last ? _daysDiff(last, today) : 999;
      _data.streak = (diff === 1) ? _data.streak + 1 : 1;
      _data.lastActiveDate = today;
      this.save();
    },

    // ── Leçons ──────────────────────────────────
    isLessonDone: function(id) { return _data.completedLessons.indexOf(id) >= 0; },

    completeLesson: function(id, correct, total) {
      if (!this.isLessonDone(id)) {
        _data.completedLessons.push(id);
        _data.xp += 20 + (correct * 5);
      }
      _data.lessonScores[id] = {
        correct: correct, total: total, date: _today(),
        pct: total > 0 ? Math.round(correct / total * 100) : 0,
      };
      this.markActive();
      this.save();
    },

    updateLessonScore: function(id, correct, total) {
      // Pour le mode révision : met à jour seulement si meilleur score
      var old = _data.lessonScores[id];
      var newPct = total > 0 ? Math.round(correct / total * 100) : 0;
      if (!old || newPct > old.pct) {
        _data.lessonScores[id] = { correct: correct, total: total, date: _today(), pct: newPct };
        if (newPct === 100 && (!old || old.pct < 100)) _data.xp += 10; // bonus score parfait
        this.save();
      }
    },

    getLessonScore: function(id) { return _data.lessonScores[id] || null; },

    // ── Recettes ────────────────────────────────
    isRecipeDone: function(id) { return _data.completedRecipes.indexOf(id) >= 0; },

    completeRecipe: function(id) {
      if (!this.isRecipeDone(id)) {
        _data.completedRecipes.push(id);
        _data.xp += 30;
      }
      this.markActive();
      this.save();
    },

    // ── Notes recettes ──────────────────────────
    getRecipeNote: function(id) { return _data.recipeNotes[id] || null; },

    setRecipeNote: function(id, entry) {
      var isNew = !_data.recipeNotes[id];
      _data.recipeNotes[id] = Object.assign({}, entry, { date: _today() });
      if (isNew) _data.xp += 10;
      this.save();
    },

    // ── Stats ────────────────────────────────────
    getStats: function() {
      var noteCount = Object.keys(_data.recipeNotes).length;
      return {
        xp:            _data.xp,
        streak:        _data.streak,
        lessonsCount:  _data.completedLessons.length,
        recipesCount:  _data.completedRecipes.length,
        notesCount:    noteCount,
      };
    },

    moduleProgress: function(mod) {
      var self = this;
      var done = mod.lessonIds.filter(function(id) { return self.isLessonDone(id); }).length;
      return { done: done, total: mod.lessonIds.length };
    },

    reset: function() { _data = Object.assign({}, DEFAULTS); this.save(); },
  };
})();
