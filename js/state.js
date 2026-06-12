// ════════════════════════════════════════════════
//   STATE.JS — Chef Coach — v20 (Lot E)
//   Ajouts : favoriteRecipes, shoppingList (+ import/export)
// ════════════════════════════════════════════════

var state = (function () {
  var KEY = 'chef-coach-v1';

  var DEFAULTS = {
    completedLessons: [],
    lessonScores:     {},
    completedRecipes: [],
    completedRecipeDates: {},
    recipeNotes:      {},
    recipeAttempts:   {},
    skillProgress:    {},
    pendingPractices: [],
    weeklyRecipePlan: null,
    practiceFrequency: 'weekly',
    favoriteRecipes:  [],
    shoppingList:     [],
    xp:               0,
    streak:           0,
    lastActiveDate:   null,
    userName:         '',
    onboarded:        false,
    level:            null,
    weeklyGoal:       2,
    theme:            'system',
    lastOpened:       null,
  };

  var _data = null;

  function _cloneDefaults() {
    return JSON.parse(JSON.stringify(DEFAULTS));
  }

  function _today() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function _daysDiff(a, b) {
    return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000);
  }

  function _cleanArray(v) { return Array.isArray(v) ? v.filter(Boolean) : []; }
  function _cleanObject(v) { return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; }
  function _cleanNumber(v, fallback) { v = Number(v); return Number.isFinite(v) ? v : fallback; }

  function _normalizeImported(raw) {
    var out = _cloneDefaults();
    raw = _cleanObject(raw);
    out.completedLessons = _cleanArray(raw.completedLessons);
    out.lessonScores = _cleanObject(raw.lessonScores);
    out.completedRecipes = _cleanArray(raw.completedRecipes);
    out.completedRecipeDates = _cleanObject(raw.completedRecipeDates);
    out.recipeNotes = _cleanObject(raw.recipeNotes);
    out.recipeAttempts = _cleanObject(raw.recipeAttempts);
    out.skillProgress = _cleanObject(raw.skillProgress);
    out.pendingPractices = _cleanArray(raw.pendingPractices).filter(function(p) {
      return p && typeof p === 'object' && p.lessonId && p.recipeId;
    });
    out.favoriteRecipes = _cleanArray(raw.favoriteRecipes).filter(function(id) {
      return typeof id === 'string';
    });
    out.shoppingList = _cleanArray(raw.shoppingList).filter(function(it) {
      return it && typeof it === 'object' && it.item;
    });
    out.xp = Math.max(0, _cleanNumber(raw.xp, 0));
    out.streak = Math.max(0, _cleanNumber(raw.streak, 0));
    out.lastActiveDate = typeof raw.lastActiveDate === 'string' ? raw.lastActiveDate : null;
    out.userName = typeof raw.userName === 'string' ? raw.userName : '';
    out.onboarded = !!raw.onboarded;
    out.level = typeof raw.level === 'string' ? raw.level : null;
    out.weeklyGoal = Math.max(1, _cleanNumber(raw.weeklyGoal, 2));
    out.theme = ['light', 'dark', 'system'].indexOf(raw.theme) >= 0 ? raw.theme : 'system';
    out.lastOpened = raw.lastOpened && typeof raw.lastOpened === 'object' ? raw.lastOpened : null;
    out.weeklyRecipePlan = raw.weeklyRecipePlan && typeof raw.weeklyRecipePlan === 'object' ? raw.weeklyRecipePlan : null;
    out.practiceFrequency = raw.practiceFrequency === 'weekly' ? 'weekly' : 'weekly';
    return out;
  }

  function _practiceKey(lessonId, recipeId) {
    return lessonId + '::' + recipeId;
  }

  function _unique(arr) {
    var out = [];
    _cleanArray(arr).forEach(function(v) { if (out.indexOf(v) < 0) out.push(v); });
    return out;
  }

  return {
    load: function() {
      try {
        var raw = localStorage.getItem(KEY);
        _data = raw ? _normalizeImported(JSON.parse(raw)) : _cloneDefaults();
      } catch (e) {
        _data = _cloneDefaults();
      }
      this._updateStreak();
      return this;
    },

    save: function() {
      try {
        localStorage.setItem(KEY, JSON.stringify(_data));
        return true;
      } catch (e) {
        console.warn('Sauvegarde impossible', e);
        return false;
      }
    },

    importData: function(raw) {
      _data = _normalizeImported(raw);
      return this.save();
    },

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
      if (_daysDiff(last, today) > 1) {
        _data.streak = 0;
        this.save();
      }
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

    isLessonDone: function(id) { return _data.completedLessons.indexOf(id) >= 0; },

    completeLesson: function(id, correct, total) {
      if (!this.isLessonDone(id)) {
        _data.completedLessons.push(id);
        _data.xp += 20 + (correct * 5);
      }
      _data.lessonScores[id] = {
        correct: correct,
        total: total,
        date: _today(),
        pct: total > 0 ? Math.round(correct / total * 100) : 0,
      };
      this.markActive();
      this.save();
    },

    updateLessonScore: function(id, correct, total) {
      var old = _data.lessonScores[id];
      var newPct = total > 0 ? Math.round(correct / total * 100) : 0;
      if (!old || newPct > old.pct) {
        _data.lessonScores[id] = { correct: correct, total: total, date: _today(), pct: newPct };
        if (newPct === 100 && (!old || old.pct < 100)) _data.xp += 10;
        this.save();
      }
    },

    getLessonScore: function(id) { return _data.lessonScores[id] || null; },

    addPendingPractices: function(lessonId, practices) {
      practices = _cleanArray(practices);
      if (!practices.length) return 0;
      if (!_data.pendingPractices) _data.pendingPractices = [];
      var existing = {};
      _data.pendingPractices.forEach(function(p) { existing[_practiceKey(p.lessonId, p.recipeId)] = true; });
      var added = 0;
      practices.forEach(function(p) {
        if (!p || !p.id) return;
        var key = _practiceKey(lessonId, p.id);
        if (existing[key]) return;
        _data.pendingPractices.push({
          lessonId: lessonId,
          recipeId: p.id,
          type: p.type || 'direct',
          label: p.label || 'Exercice pratique',
          reason: p.reason || '',
          focus: _cleanArray(p.focus),
          successCriteria: _cleanArray(p.successCriteria),
          dateAdded: _today()
        });
        existing[key] = true;
        added++;
      });
      if (added) this.save();
      return added;
    },

    getPendingPractices: function() {
      return _cleanArray(_data.pendingPractices);
    },

    removePendingPractice: function(lessonId, recipeId) {
      var before = (_data.pendingPractices || []).length;
      _data.pendingPractices = (_data.pendingPractices || []).filter(function(p) {
        return !(p.lessonId === lessonId && p.recipeId === recipeId);
      });
      if (_data.pendingPractices.length !== before) this.save();
    },

    completePendingPractice: function(lessonId, recipeId) {
      this.removePendingPractice(lessonId, recipeId);
    },

    clearPendingPracticesForRecipe: function(recipeId) {
      var before = (_data.pendingPractices || []).length;
      _data.pendingPractices = (_data.pendingPractices || []).filter(function(p) { return p.recipeId !== recipeId; });
      if (_data.pendingPractices.length !== before) this.save();
    },

    isRecipeDone: function(id) { return _data.completedRecipes.indexOf(id) >= 0; },

    completeRecipe: function(id) {
      if (!this.isRecipeDone(id)) {
        _data.completedRecipes.push(id);
        _data.xp += 30;
      }
      if (!_data.completedRecipeDates) _data.completedRecipeDates = {};
      _data.completedRecipeDates[id] = _today();
      this.clearPendingPracticesForRecipe(id);
      this.markActive();
      this.save();
    },

    getRecipeCompletionDate: function(id) {
      return (_data.completedRecipeDates || {})[id] || null;
    },

    getCompletedRecipeDates: function() {
      return Object.assign({}, _data.completedRecipeDates || {});
    },

    getWeeklyRecipePlan: function() {
      return _data.weeklyRecipePlan || null;
    },

    setWeeklyRecipePlan: function(plan) {
      _data.weeklyRecipePlan = plan && typeof plan === 'object' ? Object.assign({}, plan) : null;
      this.save();
    },

    // ── Favoris (Lot E) ──────────────────────────
    isFavorite: function(id) {
      return (_data.favoriteRecipes || []).indexOf(id) >= 0;
    },

    toggleFavorite: function(id) {
      if (!_data.favoriteRecipes) _data.favoriteRecipes = [];
      var i = _data.favoriteRecipes.indexOf(id);
      if (i >= 0) { _data.favoriteRecipes.splice(i, 1); }
      else { _data.favoriteRecipes.push(id); }
      this.save();
      return i < 0;
    },

    getFavorites: function() {
      return (_data.favoriteRecipes || []).slice();
    },

    // ── Liste de courses (Lot E) ─────────────────
    getShoppingList: function() {
      return _cleanArray(_data.shoppingList);
    },

    addShoppingItems: function(items) {
      items = _cleanArray(items);
      if (!items.length) return 0;
      if (!_data.shoppingList) _data.shoppingList = [];
      var added = 0;
      var base = Date.now();
      items.forEach(function(it, i) {
        if (!it || !it.item) return;
        _data.shoppingList.push({
          id: 'sl-' + base + '-' + i,
          recipeId: it.recipeId || null,
          recipeTitle: it.recipeTitle || '',
          qty: it.qty || '',
          unit: it.unit || '',
          item: String(it.item),
          note: it.note || '',
          checked: false,
          dateAdded: _today()
        });
        added++;
      });
      if (added) this.save();
      return added;
    },

    toggleShoppingItem: function(id) {
      var found = false;
      (_data.shoppingList || []).forEach(function(it) {
        if (it.id === id) { it.checked = !it.checked; found = true; }
      });
      if (found) this.save();
      return found;
    },

    removeShoppingItem: function(id) {
      var before = (_data.shoppingList || []).length;
      _data.shoppingList = (_data.shoppingList || []).filter(function(it) { return it.id !== id; });
      if (_data.shoppingList.length !== before) this.save();
    },

    clearCheckedShoppingItems: function() {
      var before = (_data.shoppingList || []).length;
      _data.shoppingList = (_data.shoppingList || []).filter(function(it) { return !it.checked; });
      if (_data.shoppingList.length !== before) this.save();
    },

    clearShoppingList: function() {
      _data.shoppingList = [];
      this.save();
    },

    // ─────────────────────────────────────────────

    getRecipeNote: function(id) { return _data.recipeNotes[id] || null; },

    setRecipeNote: function(id, entry) {
      var isNew = !_data.recipeNotes[id];
      _data.recipeNotes[id] = Object.assign({}, entry, { date: _today() });
      if (isNew) _data.xp += 10;
      return this.save();
    },

    recordRecipeAttempt: function(id, attempt) {
      attempt = attempt && typeof attempt === 'object' ? attempt : {};
      if (!_data.recipeAttempts) _data.recipeAttempts = {};
      if (!_data.skillProgress) _data.skillProgress = {};
      if (!_data.recipeAttempts[id]) _data.recipeAttempts[id] = [];

      var entry = {
        date: _today(),
        result: ['success', 'partial', 'fail'].indexOf(attempt.result) >= 0 ? attempt.result : 'partial',
        issues: _unique(attempt.issues),
        skills: _unique(attempt.skills),
        lessonId: typeof attempt.lessonId === 'string' ? attempt.lessonId : null,
        note: typeof attempt.note === 'string' ? attempt.note : '',
        rating: Math.max(0, _cleanNumber(attempt.rating, 0))
      };

      _data.recipeAttempts[id].push(entry);
      entry.skills.forEach(function(skill) {
        if (!_data.skillProgress[skill]) {
          _data.skillProgress[skill] = { attempts: 0, successfulAttempts: 0, practicesDone: [], issues: {}, lastPracticeDate: null, mastery: 0 };
        }
        var sp = _data.skillProgress[skill];
        sp.attempts = Math.max(0, _cleanNumber(sp.attempts, 0)) + 1;
        if (entry.result === 'success') sp.successfulAttempts = Math.max(0, _cleanNumber(sp.successfulAttempts, 0)) + 1;
        sp.practicesDone = _unique((sp.practicesDone || []).concat([id]));
        sp.lastPracticeDate = entry.date;
        if (!sp.issues || typeof sp.issues !== 'object') sp.issues = {};
        entry.issues.forEach(function(issue) { sp.issues[issue] = Math.max(0, _cleanNumber(sp.issues[issue], 0)) + 1; });
        var variety = sp.practicesDone.length;
        var success = Math.max(0, _cleanNumber(sp.successfulAttempts, 0));
        var attempts = Math.max(1, _cleanNumber(sp.attempts, 1));
        var ratio = success / attempts;
        sp.mastery = Math.max(0, Math.min(4, Math.floor(Math.min(variety, 4) * ratio + (success >= 2 ? 1 : 0))));
      });
      _data.xp += entry.result === 'success' ? 20 : 10;
      this.markActive();
      this.save();
      return entry;
    },

    getRecipeAttempts: function(id) {
      if (!id) return Object.assign({}, _data.recipeAttempts || {});
      return (_data.recipeAttempts && _data.recipeAttempts[id]) ? _data.recipeAttempts[id].slice() : [];
    },

    getSkillProgress: function() {
      return Object.assign({}, _data.skillProgress || {});
    },

    getStats: function() {
      var noteCount = Object.keys(_data.recipeNotes).length;
      return {
        xp:            _data.xp,
        streak:        _data.streak,
        lessonsCount:  _data.completedLessons.length,
        recipesCount:  _data.completedRecipes.length,
        notesCount:    noteCount,
        practicesCount: (_data.pendingPractices || []).length,
        practiceFrequency: _data.practiceFrequency || 'weekly',
        favoritesCount: (_data.favoriteRecipes || []).length,
        shoppingCount: (_data.shoppingList || []).length,
        attemptsCount: Object.keys(_data.recipeAttempts || {}).reduce(function(sum, id) { return sum + ((_data.recipeAttempts[id] || []).length); }, 0),
        skillsCount: Object.keys(_data.skillProgress || {}).length,
      };
    },

    moduleProgress: function(mod) {
      var self = this;
      var done = mod.lessonIds.filter(function(id) { return self.isLessonDone(id); }).length;
      return { done: done, total: mod.lessonIds.length };
    },

    reset: function() { _data = _cloneDefaults(); this.save(); },
  };
})();
