#!/usr/bin/env node
/**
 * lint-content.js — Garde-fou qualité pour content/data.js (Chef Coach)
 * Usage : node lint-content.js   (depuis la racine du repo)
 *         node lint-content.js chemin/vers/data.js
 * Vérifie : quiz (4 options, explication, distribution des positions, biais de longueur),
 * références croisées (leçons/recettes/compétences/cartes), recettes exposées sans
 * fixes/equipment/successCriteria manuels, et règles de couverture cours↔recettes.
 * Code de sortie : 1 si erreur bloquante. Aucune dépendance.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const target = process.argv[2] || path.join(process.cwd(), 'content', 'data.js');
if (!fs.existsSync(target)) {
  console.error('✗ Fichier introuvable : ' + target);
  console.error('  Lance le script depuis la racine du repo, ou passe le chemin en argument.');
  process.exit(1);
}

const code = fs.readFileSync(target, 'utf8');
const ctx = {};
vm.createContext(ctx);
try {
  vm.runInContext(code, ctx, { filename: 'data.js', timeout: 10000 });
} catch (e) {
  console.error('✗ data.js ne s\'évalue pas : ' + e.message);
  process.exit(1);
}

const MODULES = ctx.MODULES || [];
const LESSONS = ctx.LESSONS || [];
const RECIPES = ctx.RECIPES || [];
const SKILLS = ctx.SKILLS || {};
const TECHNIQUES = ctx.TECHNIQUES || [];
const REVIEW_CARDS = ctx.REVIEW_CARDS || [];

const errors = [];
const warnings = [];
const infos = [];

const lessonById = {};
LESSONS.forEach(l => { lessonById[l.id] = l; });
const recipeById = {};
RECIPES.forEach(r => {
  if (recipeById[r.id]) errors.push('[refs] id de recette en double : ' + r.id);
  recipeById[r.id] = r;
});
const moduleById = {};
MODULES.forEach(m => { moduleById[m.id] = m; });

console.log('Chef Coach — lint du contenu');
console.log('  Modules : ' + MODULES.length + ' · Leçons : ' + LESSONS.length +
  ' · Recettes : ' + RECIPES.length + ' · Compétences : ' + Object.keys(SKILLS).length +
  ' · Fiches : ' + TECHNIQUES.length + ' · Cartes : ' + REVIEW_CARDS.length);
console.log('');

// ── 1. QUIZ ──────────────────────────────────────────────────────────────
const positionCount = [0, 0, 0, 0];
let totalQuestions = 0;
let correctIsLongest = 0;
const lengthBiased = [];

LESSONS.forEach(lesson => {
  const quiz = lesson.quiz || [];
  if (quiz.length < 3) warnings.push('[quiz] ' + lesson.id + ' : seulement ' + quiz.length + ' question(s) (3-5 attendues)');
  quiz.forEach((q, qi) => {
    const ref = lesson.id + ' Q' + (qi + 1);
    const opts = q.options || [];
    if (opts.length !== 4) { errors.push('[quiz] ' + ref + ' : ' + opts.length + ' options (4 exigées)'); return; }
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) { errors.push('[quiz] ' + ref + ' : answer invalide (' + q.answer + ')'); return; }
    if (!q.explanation || !String(q.explanation).trim()) errors.push('[quiz] ' + ref + ' : explication manquante');
    if (!q.q || !String(q.q).trim()) errors.push('[quiz] ' + ref + ' : question vide');

    totalQuestions++;
    positionCount[q.answer]++;

    const lens = opts.map(o => String(o).length);
    const correctLen = lens[q.answer];
    const otherLens = lens.filter((_, i) => i !== q.answer);
    const avgOther = otherLens.reduce((a, b) => a + b, 0) / otherLens.length;
    const isLongest = correctLen >= Math.max.apply(null, lens);
    if (isLongest) correctIsLongest++;
    if (isLongest && avgOther > 0 && correctLen / avgOther > 1.4) {
      lengthBiased.push(ref + ' (bonne réponse ' + correctLen + ' car. vs ' + Math.round(avgOther) + ' en moyenne)');
    }
  });
});

console.log('── Quiz : ' + totalQuestions + ' questions');
if (totalQuestions > 0) {
  const pct = positionCount.map(c => Math.round(c / totalQuestions * 100));
  console.log('  Position de la bonne réponse  A:' + pct[0] + '%  B:' + pct[1] + '%  C:' + pct[2] + '%  D:' + pct[3] + '%');
  console.log('  (Note : l\'app mélange désormais les options à l\'affichage — cette distribution n\'est plus visible par l\'utilisateur.)');
  const longestPct = Math.round(correctIsLongest / totalQuestions * 100);
  console.log('  Bonne réponse = option la plus longue : ' + longestPct + '%  (cible < 40%)');
  if (longestPct > 40) warnings.push('[quiz] la bonne réponse est l\'option la plus longue dans ' + longestPct + '% des cas : à rééquilibrer éditorialement');
  if (lengthBiased.length) warnings.push('[quiz] ' + lengthBiased.length + ' question(s) à fort biais de longueur (>1,4×) — liste ci-dessous');
}
console.log('');

// ── 2. RÉFÉRENCES CROISÉES ───────────────────────────────────────────────
MODULES.forEach(m => {
  (m.lessonIds || []).forEach(id => {
    if (!lessonById[id]) errors.push('[refs] module ' + m.id + ' référence une leçon inexistante : ' + id);
  });
});
const lessonIdsInModules = new Set();
MODULES.forEach(m => (m.lessonIds || []).forEach(id => lessonIdsInModules.add(id)));

LESSONS.forEach(l => {
  if (l.moduleId && !moduleById[l.moduleId]) errors.push('[refs] leçon ' + l.id + ' : moduleId inexistant ' + l.moduleId);
  if (!lessonIdsInModules.has(l.id)) warnings.push('[refs] leçon ' + l.id + ' n\'apparaît dans aucun module (invisible dans l\'app)');
  (l.prerequisites || []).forEach(p => { if (!lessonById[p]) errors.push('[refs] leçon ' + l.id + ' : prérequis inexistant ' + p); });
  (l.linkedRecipes || []).forEach(rid => { if (!recipeById[rid]) errors.push('[refs] leçon ' + l.id + ' : linkedRecipe inexistante ' + rid); });
  (l.practiceRecipes || []).forEach(p => { if (!recipeById[p.id]) errors.push('[refs] leçon ' + l.id + ' : practiceRecipe inexistante ' + p.id); });
  (l.skillIds || []).forEach(s => { if (!SKILLS[s]) warnings.push('[refs] leçon ' + l.id + ' : skillId inconnu ' + s); });
});

RECIPES.forEach(r => {
  (r.primarySkills || []).concat(r.secondarySkills || []).forEach(s => {
    if (!SKILLS[s]) warnings.push('[refs] recette ' + r.id + ' : compétence inconnue ' + s);
  });
});

REVIEW_CARDS.forEach(c => {
  (c.lessons || []).forEach(id => { if (!lessonById[id]) errors.push('[refs] carte ' + c.id + ' : leçon inexistante ' + id); });
  if (c.recipe && !recipeById[c.recipe]) errors.push('[refs] carte ' + c.id + ' : recette inexistante ' + c.recipe);
  (c.skills || []).forEach(s => { if (!SKILLS[s]) warnings.push('[refs] carte ' + c.id + ' : compétence inconnue ' + s); });
});

// ── 3. Recettes exposées sans contenus manuels ───────────────────────────
const exposure = {};
const directUse = {};
LESSONS.forEach(l => {
  const seen = new Set();
  (l.practiceRecipes || []).forEach(p => {
    if (!seen.has(p.id)) { exposure[p.id] = (exposure[p.id] || 0) + 1; seen.add(p.id); }
    if (p.type === 'direct') { (directUse[p.id] = directUse[p.id] || []).push(l.id); }
  });
  (l.linkedRecipes || []).forEach(rid => {
    if (!seen.has(rid)) { exposure[rid] = (exposure[rid] || 0) + 1; seen.add(rid); }
  });
});

const exposed = Object.keys(exposure)
  .filter(id => recipeById[id])
  .sort((a, b) => exposure[b] - exposure[a]);
const top = exposed.slice(0, 20);
const missingManual = [];
top.forEach(id => {
  const r = recipeById[id];
  const miss = [];
  if (!(r.fixes && r.fixes.length)) miss.push('fixes');
  if (!(r.equipment && r.equipment.length)) miss.push('equipment');
  if (!(r.successCriteria && r.successCriteria.length)) miss.push('successCriteria');
  if (miss.length) missingManual.push(id + ' (' + exposure[id] + ' leçons) : ' + miss.join(', '));
});

console.log('── Top 20 des recettes exposées');
if (missingManual.length) {
  warnings.push('[D3] ' + missingManual.length + '/20 recettes exposées sans contenus manuels — liste ci-dessous');
  missingManual.forEach(m => console.log('  ⚠ ' + m));
} else {
  console.log('  ✓ Les 20 recettes les plus exposées ont fixes, equipment et successCriteria');
}
console.log('');

// ── 4. Couverture cours ↔ recettes ───────────────────────────────────────
Object.keys(directUse).forEach(id => {
  if (directUse[id].length > 2) {
    infos.push('[E1] recette "' + id + '" est l\'exercice direct de ' + directUse[id].length + ' leçons (max conseillé : 2) → ' + directUse[id].join(', '));
  }
});
LESSONS.forEach(l => {
  const n = (l.practiceRecipes || []).length + (l.linkedRecipes || []).length;
  if (n === 0) infos.push('[E1] leçon sans pratique : ' + l.id);
});
RECIPES.forEach(r => {
  if (!exposure[r.id] && !r.isExercise) infos.push('[E1] recette orpheline (liée à aucune leçon) : ' + r.id);
});

// ── RAPPORT ──────────────────────────────────────────────────────────────
function dump(label, list, symbol) {
  if (!list.length) return;
  console.log('── ' + label + ' (' + list.length + ')');
  list.forEach(x => console.log('  ' + symbol + ' ' + x));
  console.log('');
}
dump('ERREURS (bloquantes)', errors, '✗');
dump('AVERTISSEMENTS', warnings, '⚠');
if (lengthBiased.length) dump('Questions à biais de longueur', lengthBiased, '·');
dump('INFOS (non bloquantes)', infos, 'ℹ');

if (!errors.length && !warnings.length) console.log('✓ Aucun problème détecté.');
else console.log(errors.length + ' erreur(s), ' + warnings.length + ' avertissement(s), ' + infos.length + ' info(s).');

process.exit(errors.length ? 1 : 0);
