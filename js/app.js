// ════════════════════════════════════════════════
//   APP.JS — Chef Coach
// ════════════════════════════════════════════════

(function () {
'use strict';

state.load();
applyTheme();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(function(){});

// ════════════════════════════════════════════════
//   HELPERS
// ════════════════════════════════════════════════
var COVER_GRADIENTS = {'viande':'linear-gradient(135deg,#fff1e7,#b91c1c)','poisson':'linear-gradient(135deg,#e0f7fa,#0284c7)','légume':'linear-gradient(135deg,#ecfdf5,#16a34a)','sauce':'linear-gradient(135deg,#fff7ed,#d97706)','pâtisserie':'linear-gradient(135deg,#fdf2f8,#db2777)','pâtes':'linear-gradient(135deg,#fef3c7,#ca8a04)','œufs':'linear-gradient(135deg,#fff7ed,#f59e0b)','soupe':'linear-gradient(135deg,#f0fdf4,#15803d)','dessert':'linear-gradient(135deg,#fdf2f8,#be185d)'};
var RECIPE_EMOJIS = {'viande':'🥩','poisson':'🐟','légume':'🥦','sauce':'🫙','pâtisserie':'🥐','pâtes':'🍝','œufs':'🥚','soupe':'🍲','dessert':'🍰'};
var FAMILY_LABELS = {'tous':'Tous','viande':'🥩 Viande','poisson':'🐟 Poisson','légume':'🥦 Légumes','sauce':'🫙 Sauces','pâtisserie':'🥐 Pâtisserie','pâtes':'🍝 Pâtes & riz','œufs':'🥚 Œufs','soupe':'🍲 Soupes','dessert':'🍰 Desserts'};

function svgIcon(d){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';}
function recipeCoverStyle(r){return 'background:'+(COVER_GRADIENTS[r&&r.family]||'linear-gradient(135deg,#1a1a2e,#2d2d4e)');}
function recipeEmoji(r){return (r&&RECIPE_EMOJIS[r.family])||'🍽';}
function familyLabel(f){return FAMILY_LABELS[f]||f;}
function difficultyBadge(d){var l=['','Facile','Intermédiaire','Avancé','Expert'],c=['','badge-green','badge-yellow','badge-orange','badge-red'];return '<span class="badge '+(c[d]||'badge-neutral')+'">'+(l[d]||'')+'</span>';}
function difficultyDots(d){return [1,2,3,4].map(function(i){return '<span class="diff-dot'+(i<=d?' filled':'')+'"></span>';}).join('');}
function formatDate(s){return s?new Date(s).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}):'';}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function showToast(msg){var o=document.querySelector('.toast');if(o)o.remove();var t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.remove();},3200);}
function findLesson(id){for(var i=0;i<LESSONS.length;i++)if(LESSONS[i].id===id)return LESSONS[i];return null;}
function findRecipe(id){for(var i=0;i<RECIPES.length;i++)if(RECIPES[i].id===id)return RECIPES[i];return null;}
function isLessonLocked(lesson){var p=lesson.prerequisites||[];return p.some(function(pid){return !state.isLessonDone(pid);});}
function nextAvailableLesson(){for(var i=0;i<LESSONS.length;i++)if(!state.isLessonDone(LESSONS[i].id)&&!isLessonLocked(LESSONS[i]))return LESSONS[i];return null;}
function applyTheme(){
  var pref=state.get('theme')||'system';
  var dark=pref==='dark'||(pref==='system'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',dark?'#111118':'#faf8f5');
}
if(window.matchMedia){
  try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){if((state.get('theme')||'system')==='system')applyTheme();});}catch(e){}
}

// ── Compression image (fix localStorage) ────
function compressImage(file, callback) {
  var reader = new FileReader();
  reader.onload = function(ev) {
    var img = new Image();
    img.onload = function() {
      var MAX = 900, w = img.width, h = img.height;
      if (w > MAX) { h = Math.round(h*MAX/w); w = MAX; }
      if (h > MAX) { w = Math.round(w*MAX/h); h = MAX; }
      var canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL('image/jpeg', 0.78));
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

// ── Alerte fin de minuteur (vibration + son) ─
function _alertTimerDone() {
  if (navigator.vibrate) navigator.vibrate([400, 150, 400, 150, 800]);
  try {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    var ctx = new AC();
    [0, 0.55, 1.1].forEach(function(delay) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.25, ctx.currentTime + delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.45);
      o.start(ctx.currentTime + delay); o.stop(ctx.currentTime + delay + 0.45);
    });
  } catch(e) {}
}

// ── Export / Import progression ─────────────
function _exportProgress() {
  var raw = localStorage.getItem('chef-coach-v1') || '{}';
  var date = new Date().toISOString().slice(0,10);
  var filename = 'chef-coach-' + date + '.json';
  var blob = new Blob([raw], {type:'application/json'});

  // iOS Safari : partage natif avec fichier
  if (navigator.canShare) {
    try {
      var f = new File([blob], filename, {type:'application/json'});
      if (navigator.canShare({files:[f]})) {
        navigator.share({title:'Chef Coach — Sauvegarde', files:[f]})
          .then(function(){showToast('✅ Progression exportée !');})
          .catch(function(err){ if(err.name!=='AbortError') _fallbackExport(raw, blob, filename); });
        return;
      }
    } catch(e) {}
  }
  _fallbackExport(raw, blob, filename);
}

function _fallbackExport(raw, blob, filename) {
  try {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);}, 200);
    showToast('✅ Fichier téléchargé');
  } catch(e) {
    _showExportModal(raw);
  }
}

function _showExportModal(raw) {
  var m = document.createElement('div');
  m.className = 'export-modal-backdrop';
  m.innerHTML = '<div class="export-modal"><div class="t-h4" style="margin-bottom:12px">Copie ce texte</div>' +
    '<div class="t-small t-muted" style="margin-bottom:10px">Colle-le dans un fichier .json pour le conserver.</div>' +
    '<textarea class="export-textarea" readonly>'+esc(raw)+'</textarea>' +
    '<button class="btn btn-primary btn-full mt-12" id="copy-export">📋 Copier dans le presse-papier</button>' +
    '<button class="btn btn-ghost btn-full mt-8" id="close-export">Fermer</button></div>';
  document.body.appendChild(m);
  m.querySelector('#copy-export').addEventListener('click', function(){
    var ta=m.querySelector('.export-textarea'); ta.select();
    try{document.execCommand('copy');showToast('✅ Copié !');}catch(e){}
  });
  m.querySelector('#close-export').addEventListener('click', function(){m.remove();});
  m.addEventListener('click', function(e){if(e.target===m)m.remove();});
}

function _importProgress(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (typeof data !== 'object' || !Array.isArray(data.completedLessons)) {
        showToast('❌ Fichier non reconnu'); return;
      }
      if (confirm('Restaurer cette sauvegarde ?\n\nTa progression actuelle sera remplacée.')) {
        localStorage.setItem('chef-coach-v1', JSON.stringify(data));
        state.load();
        location.hash = 'home';
        showToast('✅ Progression restaurée !');
      }
    } catch(ex) { showToast('❌ Erreur de lecture du fichier'); }
  };
  reader.readAsText(file);
}

var _quizState = {lessonId:null,correct:0};
var _isReviewMode = false;

// ════════════════════════════════════════════════
//   SHELL + ROUTER
// ════════════════════════════════════════════════
document.getElementById('app').innerHTML =
  '<nav class="bottom-nav"><div class="nav-inner">' +
  navBtn('#home',    svgIcon('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'), 'Accueil') +
  navBtn('#learn',   svgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'), 'Apprendre') +
  navBtn('#recipes', svgIcon('<path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>'), 'Cuisiner') +
  navBtn('#me',      svgIcon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'), 'Moi') +
  '</div></nav>';

window.addEventListener('hashchange', route);

if (!state.get('onboarded')) { showOnboarding(); } else { route(); }

function navBtn(href,icon,label){return '<a href="'+href+'" class="nav-btn"><span>'+icon+'</span><span>'+label+'</span></a>';}

function route() {
  var hash = location.hash.slice(1)||'home';
  var parts = hash.split('/'), view=parts[0], param=parts[1]||'', mode=parts[2]||'';
  if (view!=='cooking'){var cm=document.getElementById('cooking-mode');if(cm)cm.remove();}
  var navMap={home:0,learn:1,recipes:2,me:3};
  document.querySelectorAll('.nav-btn').forEach(function(b,i){b.classList.toggle('active',i===navMap[view]);});
  var old=document.getElementById('current-page');if(old)old.remove();
  if (view==='cooking'){startCookingMode(param);return;}
  var page=document.createElement('div');page.className='page';page.id='current-page';
  switch(view){
    case 'home':    page.innerHTML=renderHome();break;
    case 'learn':   page.innerHTML=renderLearn();break;
    case 'lesson':  page.innerHTML=renderLesson(param,mode);break;
    case 'recipes': page.innerHTML=renderRecipes('tous','');break;
    case 'recipe':  page.innerHTML=renderRecipeDetail(param,mode);break;
    case 'me':      page.innerHTML=renderMe();break;
    default:        page.innerHTML=renderHome();
  }
  document.getElementById('app').appendChild(page);
  window.scrollTo(0,0);
  bindHandlers(view,param,mode);
}

// ════════════════════════════════════════════════
//   ONBOARDING
// ════════════════════════════════════════════════
var _obData={name:'',level:''};

function showOnboarding(){
  var o=document.createElement('div');o.id='onboarding';o.className='onboarding-overlay';
  o.innerHTML=renderObStep(1);document.body.appendChild(o);bindObHandlers(o,1);
}
function renderObStep(step){
  var dots='<div class="ob-dots">';
  for(var i=1;i<=3;i++)dots+='<div class="ob-dot'+(i===step?' active':'')+'"></div>';
  dots+='</div>';
  var c='';
  if(step===1){
    c='<div class="ob-emoji">👨‍🍳</div><h1 class="ob-title">Chef Coach</h1>'+
      '<p class="ob-sub">Passe de débutant à excellent cuisinier, étape par étape. Des leçons pratiques, des recettes guidées, une vraie progression.</p>'+
      '<button class="btn btn-primary btn-full btn-lg ob-next mt-20">C\'est parti →</button>';
  } else if(step===2){
    c='<h2 class="ob-title">Comment tu t\'appelles ?</h2><p class="ob-sub">Pour personnaliser ton expérience</p>'+
      '<div class="field mt-20"><input type="text" id="ob-name" placeholder="Ton prénom" value="'+esc(_obData.name)+'" autocomplete="given-name" /></div>'+
      '<button class="btn btn-primary btn-full btn-lg ob-next mt-16">Continuer →</button>';
  } else {
    var levels=[{id:'debutant',emoji:'🥚',label:'Débutant',sub:'Je sais faire des pâtes et des œufs'},{id:'intermediaire',emoji:'🍳',label:'Intermédiaire',sub:'Je cuisine régulièrement mais j\'ai des lacunes'},{id:'passionne',emoji:'🔥',label:'Passionné',sub:'Je veux maîtriser les vraies techniques'}];
    var ch=levels.map(function(l){return '<button class="level-choice'+(_obData.level===l.id?' selected':'')+'" data-level="'+l.id+'"><span class="level-emoji">'+l.emoji+'</span><span class="level-info"><strong>'+l.label+'</strong><span>'+esc(l.sub)+'</span></span></button>';}).join('');
    c='<h2 class="ob-title">Ton niveau actuel ?</h2><p class="ob-sub">Pour commencer au bon endroit</p>'+
      '<div class="level-choices mt-20">'+ch+'</div>'+
      '<button class="btn btn-primary btn-full btn-lg ob-finish mt-20"'+(!_obData.level?' disabled':'')+'>Commencer 🚀</button>';
  }
  return '<div class="onboarding-card">'+dots+'<div class="ob-content">'+c+'</div></div>';
}
function bindObHandlers(overlay,step){
  var inp=overlay.querySelector('#ob-name');
  if(inp)setTimeout(function(){inp.focus();},120);
  overlay.querySelectorAll('.level-choice').forEach(function(btn){
    btn.addEventListener('click',function(){
      _obData.level=btn.dataset.level;
      overlay.querySelectorAll('.level-choice').forEach(function(b){b.classList.remove('selected');});
      btn.classList.add('selected');
      var fb=overlay.querySelector('.ob-finish');if(fb)fb.removeAttribute('disabled');
    });
  });
  var nb=overlay.querySelector('.ob-next');
  if(nb){
    nb.addEventListener('click',function(){
      if(step===2){var ni=overlay.querySelector('#ob-name');_obData.name=(ni?ni.value.trim():'')||'Chef';}
      overlay.innerHTML=renderObStep(step+1);bindObHandlers(overlay,step+1);
    });
    if(inp)inp.addEventListener('keydown',function(e){if(e.key==='Enter')nb.click();});
  }
  var fb=overlay.querySelector('.ob-finish');
  if(fb)fb.addEventListener('click',function(){
    if(!_obData.level)return;
    state.set('userName',_obData.name||'Chef');
    state.set('level',_obData.level);
    state.set('onboarded',true);
    state.markActive();
    overlay.classList.add('ob-leaving');
    setTimeout(function(){overlay.remove();route();},360);
  });
}

// ════════════════════════════════════════════════
//   VUE : ACCUEIL
// ════════════════════════════════════════════════
function renderHome(){
  var stats=state.getStats(),name=state.get('userName')||'Chef';
  var nL=null,nR=null;
  for(var i=0;i<LESSONS.length;i++)if(!state.isLessonDone(LESSONS[i].id)&&!isLessonLocked(LESSONS[i])){nL=LESSONS[i];break;}
  for(var j=0;j<RECIPES.length;j++)if(!state.isRecipeDone(RECIPES[j].id)){nR=RECIPES[j];break;}
  var today=new Date().toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
  today=today.charAt(0).toUpperCase()+today.slice(1);

  var h='<div class="home-hero">';
  h+='<div class="row-sb"><div>';
  h+='<div class="hero-greeting">'+esc(today)+'</div>';
  h+='<div class="hero-title">Bonjour, '+esc(name)+' 👨‍🍳</div>';
  h+='<div class="hero-sub">Continue ta progression</div>';
  h+='</div><div class="streak-pill">🔥 '+stats.streak+' jour'+(stats.streak>1?'s':'')+'</div></div>';
  h+='<div class="hero-stats"><div class="hero-stat"><div class="hero-stat-val">'+stats.xp+'</div><div class="hero-stat-lbl">XP</div></div>';
  h+='<div class="hero-stat"><div class="hero-stat-val">'+stats.lessonsCount+'</div><div class="hero-stat-lbl">Leçons</div></div>';
  h+='<div class="hero-stat"><div class="hero-stat-val">'+stats.recipesCount+'</div><div class="hero-stat-lbl">Recettes</div></div></div></div>';

  h+='<div class="mt-16">';
  if(nL){
    h+='<div class="sec-header"><span class="t-h3">Mission du jour</span></div>';
    h+='<div class="mission-card"><div class="mission-label">📚 Leçon suivante</div>';
    h+='<div class="mission-title">'+esc(nL.title)+'</div>';
    h+='<div class="mission-sub">'+esc(nL.subtitle)+' · '+nL.duration+' min</div>';
    h+='<a href="#lesson/'+nL.id+'" class="btn btn-primary btn-full mt-12">Commencer →</a></div>';
  } else {
    h+='<div class="card" style="text-align:center;padding:24px"><div style="font-size:48px">🏆</div><div class="t-h3 mt-8">Toutes les leçons terminées !</div></div>';
  }
  h+='</div>';

  if(nR){
    h+='<div class="mt-20"><div class="sec-header"><span class="t-h3">À tester</span><a href="#recipes" class="sec-header-link">Voir tout</a></div>';
    h+='<div class="recipe-card" data-href="recipe/'+nR.id+'">';
    h+='<div class="recipe-cover" style="'+recipeCoverStyle(nR)+'"><div class="recipe-cover-emoji">'+recipeEmoji(nR)+'</div>';
    h+='<div class="recipe-cover-badges">'+difficultyBadge(nR.difficulty)+'<span class="badge badge-neutral">⏱ '+(nR.timePrep+nR.timeCook)+' min</span></div></div>';
    h+='<div class="recipe-info"><div class="recipe-title">'+esc(nR.title)+'</div>';
    h+='<div class="recipe-meta-row"><span class="recipe-meta-item">👥 '+nR.servings+' pers.</span></div></div></div></div>';
  }

  var tL=LESSONS.length,pL=tL?Math.round(stats.lessonsCount/tL*100):0;
  h+='<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Accès rapide</div>';
  h+='<div class="quick-grid">';
  h+='<a href="#learn" class="quick-tile"><div class="quick-icon">📚</div><div class="quick-title">Apprendre</div>';
  h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+pL+'%"></div></div>';
  h+='<div class="quick-sub">'+stats.lessonsCount+'/'+tL+' leçons</div></a>';
  h+='<a href="#recipes" class="quick-tile"><div class="quick-icon">👨‍🍳</div><div class="quick-title">Cuisiner</div>';
  h+='<div class="quick-sub mt-8">'+stats.recipesCount+' recette'+(stats.recipesCount>1?'s':'')+' réalisée'+(stats.recipesCount>1?'s':'')+'</div></a>';
  h+='</div></div>';
  return h;
}

// ════════════════════════════════════════════════
//   VUE : APPRENDRE (+ leçons verrouillées + techniques)
// ════════════════════════════════════════════════
function renderLearn(){
  var next=nextAvailableLesson(),stats=state.getStats();
  var total=LESSONS.length,globalPct=total?Math.round(stats.lessonsCount/total*100):0;
  var groups=[
    {title:'Fondations',sub:'Organisation, matériel, couteau et premiers gestes',ids:['organisation','materiel-feu','couteau-decoupes']},
    {title:'Cuissons',sub:'Comprendre la chaleur et choisir la bonne méthode',ids:['bases-cuisson','eau-vapeur-pochage','cuissons-poele','four-rotissage-gratins','mijotes-braisages']},
    {title:'Goût et sauces',sub:'Assaisonner, parfumer, lier et construire les sauces',ids:['assaisonnement-equilibre','herbes-epices-aromates','sauces-froides-emulsions','sauces-chaudes-base','jus-deglacage-sauces-cuisson','fonds-bouillons-fumets','sauces-emulsionnees-chaudes']},
    {title:'Produits',sub:'Œufs, légumes, féculents, viandes, volailles et poissons',ids:['oeufs','legumes','feculents-riz-pates-pommes-terre','viandes-rouges-porc','volailles','poissons-fruits-mer']},
    {title:'Pâtes, pâtisserie et service',sub:'Bases boulangères, desserts, dressage et autonomie',ids:['pates-salees-bases-boulangeres','patisserie-base','patisserie-sensible-meringue-caramel-chocolat','dressage-service','correction-improvisation-creation']}
  ];

  var h='<div class="learn-hero">';
  h+='<div class="t-title">Apprendre</div>';
  h+='<div class="t-body t-muted mt-4">Un parcours complet, organisé par grandes familles de compétences.</div>';
  h+='<div class="learn-progress mt-16"><div class="row-sb"><span>'+stats.lessonsCount+'/'+total+' leçons</span><strong>'+globalPct+'%</strong></div>';
  h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+globalPct+'%"></div></div></div>';
  if(next){
    h+='<a href="#lesson/'+next.id+'" class="continue-card mt-16">';
    h+='<div><div class="continue-label">Continuer le parcours</div><div class="continue-title">'+esc(next.title)+'</div>';
    h+='<div class="continue-sub">'+esc(next.subtitle)+' · '+next.duration+' min</div></div><div class="continue-arrow">→</div></a>';
  }
  h+='</div>';

  h+='<div class="learn-groups stack-16">';
  groups.forEach(function(group,gidx){
    var groupModules=group.ids.map(function(id){return MODULES.find(function(m){return m.id===id;});}).filter(Boolean);
    var gTotal=0,gDone=0;
    groupModules.forEach(function(m){var p=state.moduleProgress(m);gDone+=p.done;gTotal+=p.total;});
    var gPct=gTotal?Math.round(gDone/gTotal*100):0;
    h+='<section class="learn-group">';
    h+='<div class="learn-group-head"><div><div class="learn-group-title">'+esc(group.title)+'</div><div class="learn-group-sub">'+esc(group.sub)+'</div></div><div class="learn-group-count">'+gDone+'/'+gTotal+'</div></div>';
    h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+gPct+'%"></div></div>';
    h+='<div class="stack-12 mt-12">';
    groupModules.forEach(function(mod){
      var prog=state.moduleProgress(mod),pct=prog.total?Math.round(prog.done/prog.total*100):0;
      var hasNext=!!(next&&mod.lessonIds.indexOf(next.id)>=0);
      var open=(hasNext||(!next&&gidx===0))?' open':'';
      h+='<div class="module-card">';
      h+='<div class="module-header" data-module="'+mod.id+'">';
      h+='<div class="module-emoji" style="background:'+mod.color+'22">'+mod.emoji+'</div>';
      h+='<div class="module-meta"><div class="module-title">'+esc(mod.title)+(prog.done===prog.total?' ✅':'')+'</div>';
      h+='<div class="module-desc">'+esc(mod.description)+'</div>';
      h+='<div class="module-progress-row"><div class="progress-bar grow thin"><div class="progress-fill" style="width:'+pct+'%"></div></div>';
      h+='<span class="module-progress-label">'+prog.done+'/'+prog.total+'</span></div></div>';
      h+='<div class="module-chevron'+(open?' open':'')+'" id="chev-'+mod.id+'">›</div></div>';
      h+='<div class="module-lessons'+open+'" id="lessons-'+mod.id+'">';
      mod.lessonIds.forEach(function(lid){
      var lesson=findLesson(lid);if(!lesson)return;
      var done=state.isLessonDone(lid),score=state.getLessonScore(lid);
      var locked=!done&&isLessonLocked(lesson);

      if(locked){
        var blockId=(lesson.prerequisites||[]).find(function(p){return !state.isLessonDone(p);});
        var blockLesson=findLesson(blockId);
        h+='<div class="lesson-row-wrap">';
        h+='<div class="lesson-row lesson-locked">';
        h+='<div class="lesson-icon locked-icon">🔒</div>';
        h+='<div class="lesson-row-meta"><div class="lesson-row-title" style="color:var(--muted)">'+esc(lesson.title)+'</div>';
        h+='<div class="lesson-row-sub locked-msg">Terminer d\'abord : '+esc(blockLesson?blockLesson.title:'?')+'</div></div></div></div>';
      } else {
        h+='<div class="lesson-row-wrap">';
        h+='<a href="#lesson/'+lid+'" class="lesson-row">';
        h+='<div class="lesson-icon'+(done?' done':'')+'">'+( done?'✅':'📖')+'</div>';
        h+='<div class="lesson-row-meta"><div class="lesson-row-title">'+esc(lesson.title)+'</div>';
        h+='<div class="lesson-row-sub">'+esc(lesson.subtitle)+(score?' · '+score.pct+'%':'')+'</div></div>';
        h+='<div class="lesson-row-dur">'+lesson.duration+' min</div></a>';
        if(done)h+='<a href="#lesson/'+lid+'/review" class="btn-revise" title="Réviser le quiz">🔄 Réviser</a>';
        h+='</div>';
      }
    });
      h+='</div></div>';
    });
    h+='</div></section>';
  });
  h+='</div>';

  // ── Fiches techniques ────────────────────────
  h+='<div class="mt-24" style="margin-bottom:8px"><div class="t-h3">📌 Fiches techniques</div>';
  h+='<div class="t-small t-muted mt-4" style="margin-bottom:14px">Référence rapide à consulter en cuisine</div></div>';
  h+='<div class="stack-10">';
  if(typeof TECHNIQUES!=='undefined'&&TECHNIQUES.length){
    TECHNIQUES.forEach(function(tech){
      h+='<details class="tech-card">';
      h+='<summary class="tech-summary">';
      h+='<div class="tech-emoji" style="background:'+tech.color+'22">'+tech.emoji+'</div>';
      h+='<div class="tech-info"><div class="tech-title">'+esc(tech.title)+'</div>';
      h+='<div class="tech-sub">'+esc(tech.subtitle)+'</div></div>';
      h+='<div class="tech-chevron">›</div>';
      h+='</summary>';
      h+='<div class="tech-content">';
      tech.items.forEach(function(item){
        h+='<div class="tech-row"><span class="tech-label">'+esc(item.label)+'</span>';
        h+='<span class="tech-value">'+esc(item.value)+'</span>';
        if(item.note)h+='<span class="tech-note">'+esc(item.note)+'</span>';
        h+='</div>';
      });
      h+='</div></details>';
    });
  }
  h+='</div>';
  return h;
}

// ════════════════════════════════════════════════
//   VUE : LEÇON PLAYER
// ════════════════════════════════════════════════
function renderLesson(id,mode){
  var lesson=findLesson(id);
  if(!lesson)return '<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Leçon introuvable</div></div>';

  // Verrouillage
  if(mode!=='review'&&isLessonLocked(lesson)){
    var blockId=(lesson.prerequisites||[]).find(function(p){return !state.isLessonDone(p);});
    var bl=findLesson(blockId);
    return '<div class="empty-state"><div class="empty-icon">🔒</div><div class="empty-title">Leçon verrouillée</div>'+
      '<div class="empty-sub mt-8">Termine d\'abord :<br><strong>'+esc(bl?bl.title:blockId)+'</strong></div>'+
      '<a href="#lesson/'+blockId+'" class="btn btn-primary mt-16">Aller à la leçon →</a>'+
      '<a href="#learn" class="btn btn-ghost mt-8">← Retour</a></div>';
  }

  _isReviewMode=(mode==='review');
  _quizState={lessonId:id,correct:0};
  var cCount=lesson.concepts.length,hasGF=!!lesson.goFurther;
  var quizStep=cCount+(hasGF?1:0),total=quizStep+1;
  var startStep=_isReviewMode?quizStep:0;

  var h='<div class="lesson-topbar">';
  h+='<a href="#learn" class="back-btn">←</a>';
  if(_isReviewMode){h+='<div class="badge badge-orange" style="margin:0 8px">🔄 Mode révision</div>';}
  else{h+='<div class="progress-bar grow thin"><div class="progress-fill" id="lesson-pbar" style="width:0%"></div></div>';}
  h+='<div class="step-counter" id="lesson-counter">'+(startStep+1)+'/'+total+'</div></div>';
  h+='<div id="lesson-content" data-lesson="'+id+'" data-step="'+startStep+'" data-total="'+total+'" style="padding:16px">';
  h+=renderLessonStep(lesson,startStep);
  h+='</div>';
  return h;
}

function renderLessonStep(lesson,step){
  var concepts=lesson.concepts,hasGF=!!lesson.goFurther;
  var cCount=concepts.length,gfStep=hasGF?cCount:-1,quizStep=cCount+(hasGF?1:0);

  if(step<cCount){
    var c=concepts[step];
    var h='<div class="concept-card"><div class="concept-num">'+(step+1)+'</div>';
    h+='<div class="concept-title">'+esc(c.title)+'</div>';
    h+='<div class="concept-body">'+(c.body||'')+'</div>';
    if(c.tip)h+='<div class="concept-tip"><span>💡</span><span>'+esc(c.tip)+'</span></div>';
    h+='</div><div class="lesson-nav mt-16">';
    if(step>0)h+='<button class="btn btn-secondary" data-action="prev">← Préc.</button>';
    h+='<button class="btn btn-primary" data-action="next">'+(step+1<cCount||hasGF?'Suivant →':'Au quiz →')+'</button></div>';
    return h;
  }
  if(step===gfStep){
    var gf=lesson.goFurther;
    return '<div class="go-further"><div class="go-further-label">Pour aller plus loin</div><div class="go-further-title">'+esc(gf.title)+'</div><div class="go-further-body">'+(gf.content||'')+'</div></div>'+
      '<div class="lesson-nav mt-16"><button class="btn btn-secondary" data-action="prev">← Préc.</button><button class="btn btn-primary" data-action="next">Au quiz →</button></div>';
  }
  if(step===quizStep){
    if(!_isReviewMode)_quizState={lessonId:lesson.id,correct:0};
    return renderQuizQuestion(lesson,0);
  }
  return renderLessonComplete(lesson,_quizState.correct,lesson.quiz.length);
}

function renderQuizQuestion(lesson,qIndex){
  var qs=lesson.quiz;
  if(qIndex>=qs.length)return renderLessonComplete(lesson,_quizState.correct,qs.length);
  var q=qs[qIndex];
  var h='<div class="quiz-section" data-lesson="'+lesson.id+'" data-qindex="'+qIndex+'" data-answer="'+q.answer+'" data-total="'+qs.length+'">';
  h+='<div class="quiz-label">🧠 Question '+(qIndex+1)+'/'+qs.length+'</div>';
  h+='<div class="quiz-q">'+esc(q.q)+'</div>';
  h+='<div class="quiz-options mt-16">';
  q.options.forEach(function(opt,i){h+='<button class="quiz-opt" data-i="'+i+'">'+esc(opt)+'</button>';});
  h+='</div><div id="quiz-expl" class="quiz-explanation hidden"></div>';
  h+='<div id="quiz-next-wrap" class="hidden mt-12"><button class="btn btn-primary btn-full" id="quiz-next-btn">'+(qIndex+1<qs.length?'Question suivante →':'Voir le résultat 🎉')+'</button></div></div>';
  return h;
}

function renderLessonComplete(lesson,correct,total){
  var pct=total>0?Math.round((correct||0)/total*100):0;
  var emoji=pct>=80?'🏆':pct>=50?'⭐':'📚';
  if(_isReviewMode){state.updateLessonScore(lesson.id,correct||0,total||0);}
  else{if(!state.isLessonDone(lesson.id))state.completeLesson(lesson.id,correct||0,total||0);}
  var xp=_isReviewMode?0:20+((correct||0)*5);

  var h='<div class="lesson-complete"><div class="complete-emoji">'+emoji+'</div>';
  h+='<div class="complete-title">'+(_isReviewMode?'Révision terminée !':'Leçon terminée !')+'</div>';
  if(total>0)h+='<div class="complete-sub">'+(correct||0)+'/'+total+' · '+pct+'%</div>';
  if(!_isReviewMode&&xp>0)h+='<div class="xp-pill mt-8">+'+xp+' XP</div>';
  if(_isReviewMode&&pct===100)h+='<div class="xp-pill mt-8" style="color:var(--green);background:var(--green-soft);border-color:rgba(22,163,74,.2)">🎉 Parfait +10 XP</div>';
  h+='</div>';

  if(!_isReviewMode){
    var linked=(lesson.linkedRecipes||[]).map(function(id){return findRecipe(id);}).filter(Boolean);
    if(linked.length){
      h+='<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Mets en pratique</div><div class="stack-12">';
      linked.forEach(function(r){
        h+='<div class="recipe-card" data-href="recipe/'+r.id+'"><div class="recipe-cover" style="'+recipeCoverStyle(r)+'"><div class="recipe-cover-emoji">'+recipeEmoji(r)+'</div><div class="recipe-cover-badges">'+difficultyBadge(r.difficulty)+'</div></div>';
        h+='<div class="recipe-info"><div class="recipe-title">'+esc(r.title)+'</div><div class="recipe-meta-row"><span class="recipe-meta-item">⏱ '+(r.timePrep+r.timeCook)+' min</span></div></div></div>';
      });
      h+='</div></div>';
    }
  }
  h+='<div class="stack-8 mt-20"><a href="#learn" class="btn btn-primary btn-full">← Retour aux leçons</a></div>';
  return h;
}

// ════════════════════════════════════════════════
//   VUE : RECETTES
// ════════════════════════════════════════════════
function renderRecipes(filter,search){
  filter=filter||'tous';search=search||'';
  var families=['tous'];
  RECIPES.forEach(function(r){if(families.indexOf(r.family)<0)families.push(r.family);});
  var filtered=RECIPES.filter(function(r){return (filter==='tous'||r.family===filter)&&(!search||r.title.toLowerCase().indexOf(search.toLowerCase())>=0);});

  var h='<div class="t-title mt-4">Cuisiner</div>';
  h+='<div class="search-bar mt-12"><span class="search-icon">🔍</span><input type="search" id="recipe-search" placeholder="Rechercher…" value="'+esc(search)+'" autocomplete="off" /></div>';
  h+='<div class="filter-row mt-8">';
  families.forEach(function(f){h+='<button class="filter-chip'+(filter===f?' active':'')+'" data-filter="'+f+'">'+familyLabel(f)+'</button>';});
  h+='</div><div class="recipes-grid mt-8">';
  if(filtered.length){
    filtered.forEach(function(r){
      var done=state.isRecipeDone(r.id),hasNote=!!state.getRecipeNote(r.id);
      h+='<div class="recipe-card" data-href="recipe/'+r.id+'">';
      h+='<div class="recipe-cover" style="'+recipeCoverStyle(r)+'"><div class="recipe-cover-emoji">'+recipeEmoji(r)+'</div>';
      h+='<div class="recipe-cover-badges">'+difficultyBadge(r.difficulty)+(done?'<span class="badge badge-green">✓ Cuisiné</span>':'')+(hasNote?'<span class="badge badge-blue">📝</span>':'')+'</div></div>';
      h+='<div class="recipe-info"><div class="recipe-title">'+esc(r.title)+'</div>';
      h+='<div class="recipe-meta-row"><span class="recipe-meta-item">⏱ '+(r.timePrep+r.timeCook)+' min</span><span class="recipe-meta-item">👥 '+r.servings+' pers.</span><span class="recipe-meta-item difficulty">'+difficultyDots(r.difficulty)+'</span></div></div></div>';
    });
  } else {
    h+='<div class="empty-state"><div class="empty-icon">🍽</div><div class="empty-title">Aucune recette trouvée</div></div>';
  }
  h+='</div>';
  return h;
}

// ════════════════════════════════════════════════
//   VUE : DÉTAIL RECETTE
// ════════════════════════════════════════════════
function renderRecipeDetail(id,mode){
  var recipe=findRecipe(id);
  if(!recipe)return '<div class="empty-state"><div class="empty-icon">❓</div><div class="empty-title">Recette introuvable</div></div>';
  var done=state.isRecipeDone(id),existingNote=state.getRecipeNote(id);

  var h='<a href="#recipes" class="btn btn-ghost btn-sm" style="margin-bottom:12px">← Retour</a>';
  h+='<div class="recipe-hero" style="'+recipeCoverStyle(recipe)+'"><div style="font-size:72px;position:relative;z-index:1">'+recipeEmoji(recipe)+'</div><div class="recipe-hero-overlay"></div></div>';
  h+='<div class="mt-16"><div class="t-title">'+esc(recipe.title)+'</div>';
  h+='<div class="recipe-meta-row mt-8">'+difficultyBadge(recipe.difficulty);
  h+='<span class="badge badge-neutral">🍳 '+recipe.timePrep+' min</span>';
  h+='<span class="badge badge-neutral">⏱ '+recipe.timeCook+' min</span>';
  h+='<span class="badge badge-neutral">👥 '+recipe.servings+' pers.</span></div></div>';

  if(done)h+='<div class="recipe-done-banner mt-12">✅ <span>Tu as déjà cuisiné cette recette</span></div>';

  h+='<div class="card mt-16"><div class="t-h4" style="margin-bottom:10px">Ce que tu vas maîtriser</div><div class="objectives-list">';
  recipe.objectives.forEach(function(o){h+='<div class="objective-item"><div class="objective-dot"></div><span>'+esc(o)+'</span></div>';});
  h+='</div></div>';

  h+='<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">Ingrédients · '+recipe.servings+' pers.</div><div class="ingredients-list">';
  recipe.ingredients.forEach(function(ing){
    var qty=ing.qty?(ing.qty+(ing.unit?' '+ing.unit:'')):'';
    h+='<div class="ingredient-row"><span class="ingredient-qty">'+esc(qty)+'</span><span class="ingredient-name">'+esc(ing.item)+'</span>'+(ing.note?'<span class="ingredient-note">'+esc(ing.note)+'</span>':'')+'</div>';
  });
  h+='</div></div>';

  h+='<div class="card mt-12"><div class="t-h4" style="margin-bottom:10px">'+recipe.steps.length+' étapes</div><div class="stack-8">';
  recipe.steps.forEach(function(s,i){
    h+='<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">';
    h+='<div style="width:24px;height:24px;border-radius:50%;background:var(--orange-soft);color:var(--orange-dark);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0">'+(i+1)+'</div>';
    h+='<div class="t-small">'+esc(s.title)+'</div>';
    if(s.timer)h+='<span class="badge badge-yellow" style="flex-shrink:0">⏱ '+s.timer+'min</span>';
    h+='</div>';
  });
  h+='</div></div>';

  if(recipe.tips&&recipe.tips.length){
    h+='<div class="card mt-12" style="background:var(--yellow-soft);border-color:rgba(217,119,6,0.2)"><div class="t-h4" style="margin-bottom:10px">💡 Tips du chef</div><div class="stack-8">';
    recipe.tips.forEach(function(t){h+='<div class="t-small" style="padding:8px 0;border-bottom:1px solid rgba(217,119,6,0.15)">'+esc(t)+'</div>';});
    h+='</div></div>';
  }

  h+='<div class="stack-8 mt-20"><a href="#cooking/'+recipe.id+'" class="btn btn-primary btn-lg btn-full">👨‍🍳 Commencer la recette</a></div>';

  // ── Section Ma réalisation ───────────────────
  h+='<div class="recipe-note-section mt-20" id="note-section">';
  h+='<div class="sec-header"><span class="t-h3">📸 Ma réalisation</span>';
  if(existingNote&&mode!=='note')h+='<button class="btn btn-sm btn-secondary" id="btn-edit-note">Modifier</button>';
  h+='</div>';

  if(existingNote&&mode!=='note'){
    h+='<div class="recipe-note-display card">';
    if(existingNote.photo)h+='<img class="recipe-note-photo" src="'+existingNote.photo+'" alt="Ma réalisation" />';
    if(existingNote.rating){var stars='';for(var s=0;s<existingNote.rating;s++)stars+='⭐';h+='<div class="recipe-note-rating">'+stars+'</div>';}
    if(existingNote.note)h+='<div class="recipe-note-text">'+esc(existingNote.note)+'</div>';
    h+='<div class="recipe-note-date">'+formatDate(existingNote.date)+'</div></div>';
  } else if(!existingNote&&mode!=='note'){
    h+='<div class="recipe-note-empty"><div style="font-size:36px">📷</div>';
    h+='<div class="t-small t-muted mt-8">Après avoir cuisiné, note tes impressions et prends une photo de ton plat !</div>';
    h+='<button class="btn btn-secondary mt-12" id="btn-add-note">Ajouter une note</button></div>';
  }
  if(mode==='note')h+=renderNoteForm(existingNote,id);
  h+='</div>';
  return h;
}

function renderNoteForm(existing,recipeId){
  var cur=existing?(existing.rating||0):0;
  var h='<div class="card mt-12" id="note-form"><div class="t-h4" style="margin-bottom:14px">'+( existing?'Modifier ma note':'Ajouter une note')+'</div><div class="add-form">';
  h+='<div class="field"><label class="field-label">Photo de ton plat</label>';
  if(existing&&existing.photo){
    h+='<img id="note-photo-preview" class="recipe-note-photo" src="'+existing.photo+'" style="margin-bottom:8px" />';
    h+='<button class="btn btn-sm btn-secondary mt-8" id="note-photo-btn" type="button">📸 Changer</button>';
  } else {
    h+='<div class="photo-placeholder" id="note-photo-btn"><div class="photo-icon">📸</div><span>Prendre ou choisir une photo</span></div>';
    h+='<img id="note-photo-preview" class="photo-preview hidden" alt="Aperçu" />';
  }
  h+='<input type="file" id="note-photo-input" accept="image/*" capture="environment" style="display:none" /></div>';
  h+='<div class="field"><label class="field-label">Satisfaction</label><div class="stars-input" id="note-stars">';
  [1,2,3,4,5].forEach(function(i){h+='<button class="star-btn'+(i<=cur?' active':'')+'" data-star="'+i+'" type="button">⭐</button>';});
  h+='</div></div>';
  h+='<div class="field"><label class="field-label">Notes & observations</label>';
  h+='<textarea id="note-text" placeholder="Ce qui a bien marché, ce que tu referais différemment…">'+esc((existing&&existing.note)||'')+'</textarea></div>';
  h+='<div class="stack-8"><button class="btn btn-primary btn-full" id="note-save" data-recipe="'+recipeId+'" type="button">Enregistrer</button>';
  h+='<button class="btn btn-ghost btn-full" id="note-cancel" type="button">Annuler</button></div></div></div>';
  return h;
}

// ════════════════════════════════════════════════
//   MODE CUISINE (vibration + son)
// ════════════════════════════════════════════════
var _cook={step:0,timer:null,timerVal:0,timerRunning:false};

function startCookingMode(id){
  var recipe=findRecipe(id);
  if(!recipe){location.hash='recipes';return;}
  _cook.step=0;_stopTimer();_renderCookStep(recipe);
}

function _renderCookStep(recipe){
  var s=recipe.steps[_cook.step],total=recipe.steps.length,isLast=_cook.step===total-1;
  var pct=Math.round((_cook.step/total)*100);
  var old=document.getElementById('cooking-mode');if(old)old.remove();
  var div=document.createElement('div');div.id='cooking-mode';div.className='cooking-mode';

  var h='<div class="cooking-topbar"><button class="back-btn" id="cm-close">✕</button>';
  h+='<div class="progress-bar grow thin" style="max-width:180px"><div class="progress-fill" style="width:'+pct+'%"></div></div>';
  h+='<div class="cooking-step-counter">'+(_cook.step+1)+'/'+total+'</div></div>';
  h+='<div class="cooking-body">';
  h+='<div class="cooking-step-num">Étape '+(_cook.step+1)+' — '+esc(recipe.title)+'</div>';
  h+='<div class="cooking-step-title">'+esc(s.title)+'</div>';
  h+='<div class="cooking-step-action">'+esc(s.action)+'</div>';
  if(s.timer){
    _cook.timerVal=s.timer*60;_cook.timerRunning=false;
    h+='<div class="timer-card"><div><div class="timer-label">Minuteur</div><div class="timer-val" id="timer-display">'+_fmtTimer(s.timer*60)+'</div></div>';
    h+='<button class="timer-btn" id="timer-toggle">▶ Démarrer</button></div>';
  }
  h+='<div class="cooking-why mt-16"><div class="cooking-why-label">Pourquoi ?</div>'+esc(s.why)+'</div>';
  h+='<div class="cooking-mistake"><div class="cooking-mistake-label">⚠ Erreur fréquente</div>'+esc(s.mistake)+'</div>';
  h+='</div>';
  h+='<div class="cooking-footer"><button class="btn btn-secondary" id="cm-prev"'+(_cook.step===0?' disabled':'')+'>← Préc.</button>';
  h+='<button class="btn '+(isLast?'btn-green':'btn-primary')+'" id="cm-next">'+(isLast?'✅ Terminer':'Étape suivante →')+'</button></div>';
  div.innerHTML=h;document.getElementById('app').appendChild(div);

  if(s.timer)document.getElementById('timer-toggle').onclick=_toggleTimer;
  document.getElementById('cm-close').onclick=function(){_stopTimer();div.remove();history.back();};
  document.getElementById('cm-prev').onclick=function(){if(_cook.step>0){_stopTimer();_cook.step--;_renderCookStep(recipe);}};
  document.getElementById('cm-next').onclick=function(){
    _stopTimer();
    if(_cook.step<total-1){_cook.step++;_renderCookStep(recipe);}
    else{
      state.completeRecipe(recipe.id);
      div.remove();
      location.hash='recipe/'+recipe.id+'/note';
      showToast('🏆 Recette terminée ! +30 XP');
    }
  };
}

function _toggleTimer(){
  _cook.timerRunning=!_cook.timerRunning;
  var btn=document.getElementById('timer-toggle');if(!btn)return;
  if(_cook.timerRunning){
    btn.textContent='⏸ Pause';
    _cook.timer=setInterval(function(){
      _cook.timerVal--;
      var d=document.getElementById('timer-display');if(d)d.textContent=_fmtTimer(_cook.timerVal);
      if(_cook.timerVal<=0){
        _stopTimer();
        var b=document.getElementById('timer-toggle');if(b)b.textContent='✅ Terminé';
        showToast('⏰ Minuteur terminé !');
        _alertTimerDone(); // 🎵 vibration + son
      }
    },1000);
  } else {clearInterval(_cook.timer);btn.textContent='▶ Reprendre';}
}
function _stopTimer(){clearInterval(_cook.timer);_cook.timerRunning=false;}
function _fmtTimer(s){var a=Math.abs(s);return Math.floor(a/60).toString().padStart(2,'0')+':'+(a%60).toString().padStart(2,'0');}

// ════════════════════════════════════════════════
//   VUE : MOI (+ export/import)
// ════════════════════════════════════════════════
function renderMe(){
  var stats=state.getStats(),name=state.get('userName')||'Chef';
  var level=state.get('level'),levelLabels={debutant:'🥚 Débutant',intermediaire:'🍳 Intermédiaire',passionne:'🔥 Passionné'};
  var tL=LESSONS.length,pct=tL?Math.round(stats.lessonsCount/tL*100):0;

  var h='<div class="card mt-4"><div style="display:flex;align-items:center;gap:16px">';
  h+='<div class="profile-avatar">👨‍🍳</div>';
  h+='<div><div class="t-title">'+esc(name)+'</div>';
  if(level)h+='<div class="t-small t-muted mt-4">'+(levelLabels[level]||'')+'</div>';
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">';
  h+='<div class="xp-pill">⚡ '+stats.xp+' XP</div>';
  h+='<div class="streak-pill" style="background:var(--orange-soft);border:1px solid rgba(232,93,4,.2);color:var(--orange-dark)">🔥 '+stats.streak+' j.</div>';
  h+='</div></div></div></div>';

  h+='<div class="stat-grid mt-16">';
  h+='<div class="stat-tile"><div class="stat-val">'+stats.lessonsCount+'</div><div class="stat-lbl">Leçons</div></div>';
  h+='<div class="stat-tile"><div class="stat-val">'+stats.recipesCount+'</div><div class="stat-lbl">Recettes</div></div>';
  h+='<div class="stat-tile"><div class="stat-val">'+stats.notesCount+'</div><div class="stat-lbl">Notes</div></div>';
  h+='<div class="stat-tile"><div class="stat-val">'+pct+'%</div><div class="stat-lbl">Cours</div></div>';
  h+='</div>';

  h+='<div class="mt-20"><div class="t-h3" style="margin-bottom:12px">Progression</div>';
  MODULES.forEach(function(mod){
    var prog=state.moduleProgress(mod),mpct=prog.total?Math.round(prog.done/prog.total*100):0;
    h+='<div class="card-flat" style="display:flex;align-items:center;gap:12px;margin-bottom:8px">';
    h+='<div style="font-size:24px">'+mod.emoji+'</div>';
    h+='<div style="flex:1"><div class="t-h4">'+esc(mod.title)+'</div>';
    h+='<div class="progress-bar thin mt-8"><div class="progress-fill" style="width:'+mpct+'%"></div></div></div>';
    h+='<div class="t-small t-muted" style="font-weight:700">'+prog.done+'/'+prog.total+'</div></div>';
  });
  h+='</div>';

  // ── Export / Import ─────────────────────────
  h+='<div class="card mt-20">';
  h+='<div class="t-h4">💾 Sauvegarde & restauration</div>';
  h+='<div class="t-small t-muted mt-8">Si Safari réinitialise l\'app, tu peux restaurer toute ta progression depuis une sauvegarde.</div>';
  h+='<div class="stack-8 mt-14">';
  h+='<button class="btn btn-secondary btn-full" id="btn-export">⬇️ Exporter ma progression</button>';
  h+='<button class="btn btn-secondary btn-full" id="btn-import-show">⬆️ Restaurer une sauvegarde</button>';
  h+='<input type="file" id="import-file" accept=".json,.txt" style="display:none" />';
  h+='</div></div>';

  h+='<div class="card mt-16"><div class="t-h4" style="margin-bottom:12px">Paramètres</div>';
  h+='<div class="field"><label class="field-label">Ton prénom</label>';
  h+='<input type="text" id="pref-name" value="'+esc(name)+'" placeholder="Ton prénom" /></div>';
  var theme=state.get('theme')||'system';
  h+='<div class="field mt-12"><label class="field-label">Apparence</label>';
  h+='<div class="theme-choice" id="theme-choice">';
  [{id:'light',label:'Clair'},{id:'dark',label:'Sombre'},{id:'system',label:'Système'}].forEach(function(opt){
    h+='<button class="theme-chip'+(theme===opt.id?' active':'')+'" data-theme="'+opt.id+'" type="button">'+opt.label+'</button>';
  });
  h+='</div></div>';
  h+='<button class="btn btn-secondary btn-full mt-12" id="save-prefs" type="button">Enregistrer</button>';
  h+='<button class="btn btn-ghost btn-full mt-8" id="reset-progress" style="color:var(--red);font-size:13px" type="button">Réinitialiser la progression</button>';
  h+='</div>';
  return h;
}

// ════════════════════════════════════════════════
//   HANDLERS
// ════════════════════════════════════════════════
function bindHandlers(view,param,mode){
  var page=document.getElementById('current-page');
  if(page)page.addEventListener('click',function(e){var c=e.target.closest('[data-href]');if(c)location.hash=c.dataset.href;});

  if(view==='learn'){
    document.querySelectorAll('.module-header[data-module]').forEach(function(el){
      el.addEventListener('click',function(){
        var id=el.dataset.module,list=document.getElementById('lessons-'+id),chev=document.getElementById('chev-'+id);
        if(list){list.classList.toggle('open');if(chev)chev.classList.toggle('open');}
      });
    });
  }
  if(view==='lesson')_bindLessonHandlers();
  if(view==='recipes'){
    var si=document.getElementById('recipe-search');
    if(si)si.addEventListener('input',function(){
      var f=(document.querySelector('.filter-chip.active')||{dataset:{filter:'tous'}}).dataset.filter;
      var pg=document.getElementById('current-page');
      if(pg){pg.innerHTML=renderRecipes(f,si.value);bindHandlers('recipes','','');}
    });
    document.querySelectorAll('.filter-chip').forEach(function(chip){
      chip.addEventListener('click',function(){
        var s=(document.getElementById('recipe-search')||{}).value||'';
        var pg=document.getElementById('current-page');
        if(pg){pg.innerHTML=renderRecipes(chip.dataset.filter,s);bindHandlers('recipes','','');}
      });
    });
  }
  if(view==='recipe')_bindRecipeNoteHandlers(param,mode);
  if(view==='me'){
    var sp=document.getElementById('save-prefs');
    if(sp)sp.addEventListener('click',function(){var v=(document.getElementById('pref-name')||{}).value;if(v&&v.trim()){state.set('userName',v.trim());showToast('✅ Sauvegardé');}});
    document.querySelectorAll('.theme-chip[data-theme]').forEach(function(btn){
      btn.addEventListener('click',function(){
        state.set('theme',btn.dataset.theme);
        applyTheme();
        document.querySelectorAll('.theme-chip').forEach(function(b){b.classList.remove('active');});
        btn.classList.add('active');
        showToast('Apparence mise à jour');
      });
    });
    var rp=document.getElementById('reset-progress');
    if(rp)rp.addEventListener('click',function(){if(confirm('Réinitialiser ?')){state.reset();location.hash='home';showToast('🔄 Réinitialisé');}});
    // Export / Import
    var expBtn=document.getElementById('btn-export');
    if(expBtn)expBtn.addEventListener('click',_exportProgress);
    var impShow=document.getElementById('btn-import-show'),impFile=document.getElementById('import-file');
    if(impShow)impShow.addEventListener('click',function(){if(impFile)impFile.click();});
    if(impFile)impFile.addEventListener('change',function(){if(impFile.files[0])_importProgress(impFile.files[0]);});
  }
}

// ── Handlers leçon ────────────────────────────
function _bindLessonHandlers(){
  var content=document.getElementById('lesson-content');if(!content)return;
  content.addEventListener('click',function(e){
    var btn=e.target.closest('[data-action]');
    if(btn){if(btn.dataset.action==='next')_advanceLesson(1);if(btn.dataset.action==='prev')_advanceLesson(-1);return;}
    var opt=e.target.closest('.quiz-opt:not(.disabled)');
    if(opt){_handleQuizAnswer(opt);return;}
    if(e.target.id==='quiz-next-btn')_handleQuizNext();
  });
}
function _handleQuizAnswer(btn){
  var sec=btn.closest('.quiz-section');if(!sec)return;
  var ci=parseInt(sec.dataset.answer),ch=parseInt(btn.dataset.i),lid=sec.dataset.lesson,qi=parseInt(sec.dataset.qindex);
  sec.querySelectorAll('.quiz-opt').forEach(function(b,i){b.classList.add('disabled');if(i===ci)b.classList.add('correct');if(i===ch&&ch!==ci)b.classList.add('wrong');});
  var lesson=findLesson(lid),expl=document.getElementById('quiz-expl');
  if(expl&&lesson){expl.textContent=lesson.quiz[qi].explanation;expl.classList.remove('hidden');}
  if(_quizState.lessonId!==lid)_quizState={lessonId:lid,correct:0};
  if(ch===ci)_quizState.correct++;
  var nxt=document.getElementById('quiz-next-wrap');if(nxt)nxt.classList.remove('hidden');
}
function _handleQuizNext(){
  var sec=document.querySelector('.quiz-section');if(!sec)return;
  var lid=sec.dataset.lesson,qi=parseInt(sec.dataset.qindex)+1,tot=parseInt(sec.dataset.total);
  var lesson=findLesson(lid);if(!lesson)return;
  var content=document.getElementById('lesson-content');if(!content)return;
  if(qi<tot)content.innerHTML=renderQuizQuestion(lesson,qi);
  else content.innerHTML=renderLessonComplete(lesson,_quizState.correct,tot);
  _updateLessonTopbar(parseInt(content.dataset.step),parseInt(content.dataset.total));
}
function _advanceLesson(dir){
  var content=document.getElementById('lesson-content');if(!content)return;
  var lesson=findLesson(content.dataset.lesson);if(!lesson)return;
  var step=parseInt(content.dataset.step)+dir,total=parseInt(content.dataset.total);
  step=Math.max(0,Math.min(step,total-1));
  content.dataset.step=step;content.innerHTML=renderLessonStep(lesson,step);
  _updateLessonTopbar(step,total);
}
function _updateLessonTopbar(step,total){
  var pb=document.getElementById('lesson-pbar'),ctr=document.getElementById('lesson-counter');
  if(pb)pb.style.width=Math.round(step/Math.max(1,total-1)*100)+'%';
  if(ctr)ctr.textContent=(step+1)+'/'+total;
}

// ── Handlers note recette (avec compression) ─
var _noteStar=0;
function _bindRecipeNoteHandlers(recipeId,mode){
  var existing=state.getRecipeNote(recipeId);
  var addBtn=document.getElementById('btn-add-note');
  if(addBtn)addBtn.addEventListener('click',function(){_openNoteForm(recipeId,null);});
  var editBtn=document.getElementById('btn-edit-note');
  if(editBtn)editBtn.addEventListener('click',function(){_openNoteForm(recipeId,existing);});
  // Formulaire déjà rendu quand mode==='note' → lier une seule fois
  if(mode==='note'){
    var ns=document.getElementById('note-section');
    if(ns){var e2=ns.querySelector('.recipe-note-empty');if(e2)e2.remove();}
    _bindNoteFormHandlers(recipeId);
    // NE PAS appeler à nouveau ci-dessous
    return;
  }
  // Sinon le formulaire n'existe pas encore → _openNoteForm le créera et liera
}
function _openNoteForm(recipeId,existing){
  var ns=document.getElementById('note-section');if(!ns)return;
  var e1=ns.querySelector('.recipe-note-empty'),d1=ns.querySelector('.recipe-note-display'),eb=document.getElementById('btn-edit-note');
  if(e1)e1.style.display='none';if(d1)d1.style.display='none';if(eb)eb.style.display='none';
  var of=document.getElementById('note-form');if(of)of.remove();
  ns.insertAdjacentHTML('beforeend',renderNoteForm(existing,recipeId));
  _bindNoteFormHandlers(recipeId);
  setTimeout(function(){var f=document.getElementById('note-form');if(f)f.scrollIntoView({behavior:'smooth',block:'start'});},100);
}
function _bindNoteFormHandlers(recipeId){
  _noteStar=(state.getRecipeNote(recipeId)||{}).rating||0;
  var photoInput=document.getElementById('note-photo-input'),photoBtn=document.getElementById('note-photo-btn');
  if(photoBtn)photoBtn.addEventListener('click',function(){if(photoInput)photoInput.click();});
  if(photoInput){
    photoInput.addEventListener('change',function(){
      var file=photoInput.files[0];if(!file)return;
      // Compression avant stockage
      compressImage(file,function(compressed){
        var preview=document.getElementById('note-photo-preview');
        if(preview){preview.src=compressed;preview.classList.remove('hidden');preview.style.cssText='width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:16px;margin-bottom:8px;display:block';}
        if(photoBtn)photoBtn.style.display='none';
      });
    });
  }
  var sw=document.getElementById('note-stars');
  if(sw)sw.querySelectorAll('.star-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      _noteStar=parseInt(btn.dataset.star);
      sw.querySelectorAll('.star-btn').forEach(function(b,i){b.classList.toggle('active',i<_noteStar);});
    });
  });
  var saveBtn=document.getElementById('note-save');
  if(saveBtn)saveBtn.addEventListener('click',function(){
    var note=(document.getElementById('note-text')||{}).value||'';
    var preview=document.getElementById('note-photo-preview');
    var photo=(preview&&preview.src&&preview.src.startsWith('data:'))?preview.src:null;
    var ex=state.getRecipeNote(recipeId);
    if(!photo&&ex)photo=ex.photo||null;
    state.setRecipeNote(recipeId,{note:note,photo:photo,rating:_noteStar});
    location.hash='recipe/'+recipeId;showToast('✅ Note enregistrée !');
  });
  var cancelBtn=document.getElementById('note-cancel');
  if(cancelBtn)cancelBtn.addEventListener('click',function(){location.hash='recipe/'+recipeId;});
}

})();
